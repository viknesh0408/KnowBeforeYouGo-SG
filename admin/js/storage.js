// Storage management for site content
const DEFAULT_CONTENT = {
  hero: {
    title: 'Know the rules before you go',
    subtitle: 'Essential work pass rules, visa guides, and local laws for Tamil-speaking visitors to Singapore',
    tagline: '🇸🇬 Singapore Awareness Portal'
  },
  workPasses: [
    { id: 1, title: 'Employment Pass', category: 'Professional', description: 'For skilled workers earning above minimum salary', badge: 'Professionals' },
    { id: 2, title: 'S Pass', category: 'Semi-Skilled', description: 'For intermediate skilled workers', badge: 'Semi-Skilled Workers' },
    { id: 3, title: 'Work Permit', category: 'Unskilled', description: 'For unskilled and semi-skilled foreign workers', badge: 'Semi-Skilled Workers' }
  ],
  visas: [
    { id: 1, title: 'Student Pass', category: 'Education', description: 'For international students enrolled in approved institutions', badge: 'Students' },
    { id: 2, title: 'Dependent Pass', category: 'Family', description: 'For family members of pass holders', badge: 'Family' },
    { id: 3, title: 'Long Term Visit Pass', category: 'Visitors', description: 'For long-term visitors and spouses', badge: 'Visitors' }
  ],
  laws: [
    { id: 1, title: 'Drug Laws', severity: 'Critical', description: 'Strict penalties including death penalty for trafficking', category: 'Safety' },
    { id: 2, title: 'Smoking Restrictions', severity: 'Medium', description: 'Prohibited in public areas; heavy fines apply', category: 'Health' },
    { id: 3, title: 'Littering Fines', severity: 'Low', description: 'SGD 300-500 fines for littering', category: 'Environment' }
  ],
  blogArticles: [
    { 
      id: 1, 
      title: 'Common Mistakes New Workers Make in Singapore', 
      slug: 'common-mistakes', 
      excerpt: 'Avoid these pitfalls that cost many workers their jobs and passes',
      content: 'Detailed content about common mistakes...',
      category: 'Work Tips',
      author: 'Admin',
      date: '2026-05-20',
      featured: false
    },
    {
      id: 2,
      title: 'How to Verify Your IPA',
      slug: 'ipa-verification',
      excerpt: 'Step-by-step guide to checking your In-Principal Approval',
      content: 'Detailed content about IPA verification...',
      category: 'Work Pass',
      author: 'Admin',
      date: '2026-05-20',
      featured: false
    }
  ],
  contact: {
    email: 'support@knowbeforeyougo.in',
    phone: '+65 XXXX XXXX',
    address: 'Singapore',
    hours: 'Monday - Friday: 9AM - 6PM SGT'
  },
  navigation: {
    siteName: 'KnowBeforeYouGo',
    links: [
      { id: 1, label: 'Home', href: 'index.html' },
      { id: 2, label: 'Work Pass', href: 'index.html#information' },
      { id: 3, label: 'Visa', href: 'index.html#visa' },
      { id: 4, label: 'Laws', href: 'singapore_laws.html' },
      { id: 5, label: 'Travel Tips', href: 'index.html#traveltips' },
      { id: 6, label: 'Blog', href: 'blog/blogindex.html' },
      { id: 7, label: 'Contact', href: 'contact.html' }
    ]
  }
};

// Initialize content storage
function initializeStorage() {
  if (!localStorage.getItem('siteContent')) {
    localStorage.setItem('siteContent', JSON.stringify(DEFAULT_CONTENT));
  }
}

// Get all content
function getAllContent() {
  const content = localStorage.getItem('siteContent');
  return content ? JSON.parse(content) : DEFAULT_CONTENT;
}

// Get specific section content
function getContent(section) {
  const content = getAllContent();
  return content[section] || null;
}

// Save entire content
function saveAllContent(content) {
  localStorage.setItem('siteContent', JSON.stringify(content));
  return { success: true };
}

// Update a specific section
function updateSection(section, data) {
  const content = getAllContent();
  content[section] = data;
  return saveAllContent(content);
}

// Add item to array section (workPasses, visas, laws, blogArticles)
function addItem(section, item) {
  const content = getAllContent();
  
  if (!Array.isArray(content[section])) {
    return { success: false, error: `${section} is not an array` };
  }
  
  // Generate new ID
  const maxId = Math.max(...content[section].map(i => i.id || 0), 0);
  item.id = maxId + 1;
  
  content[section].push(item);
  saveAllContent(content);
  
  return { success: true, item: item };
}

// Update item in array section
function updateItem(section, id, updatedItem) {
  const content = getAllContent();
  
  if (!Array.isArray(content[section])) {
    return { success: false, error: `${section} is not an array` };
  }
  
  const index = content[section].findIndex(i => i.id === id);
  
  if (index === -1) {
    return { success: false, error: `Item with id ${id} not found` };
  }
  
  updatedItem.id = id; // Preserve ID
  content[section][index] = updatedItem;
  saveAllContent(content);
  
  return { success: true, item: updatedItem };
}

// Delete item from array section
function deleteItem(section, id) {
  const content = getAllContent();
  
  if (!Array.isArray(content[section])) {
    return { success: false, error: `${section} is not an array` };
  }
  
  const index = content[section].findIndex(i => i.id === id);
  
  if (index === -1) {
    return { success: false, error: `Item with id ${id} not found` };
  }
  
  content[section].splice(index, 1);
  saveAllContent(content);
  
  return { success: true };
}

// Get item by ID
function getItem(section, id) {
  const content = getContent(section);
  
  if (!Array.isArray(content)) {
    return null;
  }
  
  return content.find(i => i.id === id) || null;
}

// Auto-generate slug from title
function generateSlug(title) {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
}

// Export data to JSON (for backup)
function exportData() {
  const content = getAllContent();
  return JSON.stringify(content, null, 2);
}

// Import data from JSON (for restore)
function importData(jsonString) {
  try {
    const content = JSON.parse(jsonString);
    localStorage.setItem('siteContent', JSON.stringify(content));
    return { success: true, message: 'Data imported successfully' };
  } catch (error) {
    return { success: false, error: 'Invalid JSON format' };
  }
}

// Reset to default content
function resetToDefault() {
  localStorage.setItem('siteContent', JSON.stringify(DEFAULT_CONTENT));
  return { success: true, message: 'Content reset to default' };
}

// Initialize on page load
window.addEventListener('DOMContentLoaded', initializeStorage);
