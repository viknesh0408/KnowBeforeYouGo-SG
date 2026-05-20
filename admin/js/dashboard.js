// Dashboard functionality and CRUD operations

// Toast notifications
function showToast(message, type = 'info') {
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  
  const icons = {
    success: 'bi-check-circle',
    error: 'bi-exclamation-circle',
    info: 'bi-info-circle'
  };
  
  toast.innerHTML = `
    <div class="toast-icon"><i class="bi ${icons[type]}"></i></div>
    <div class="toast-message">${message}</div>
  `;
  
  container.appendChild(toast);
  
  setTimeout(() => {
    toast.style.animation = 'slideInRight 0.3s ease reverse';
    setTimeout(() => toast.remove(), 300);
  }, 3000);
}

// Modal helpers
function openModal(modalId) {
  document.getElementById(modalId).classList.add('active');
}

function closeModal(modalId) {
  document.getElementById(modalId).classList.remove('active');
}

// ==================== HERO SECTION ====================
function loadHeroContent() {
  const hero = getContent('hero');
  
  if (hero) {
    document.getElementById('heroTitle').value = hero.title;
    document.getElementById('heroSubtitle').value = hero.subtitle;
    document.getElementById('heroTagline').value = hero.tagline;
    updateHeroPreview();
  }
}

function updateHeroPreview() {
  const title = document.getElementById('heroTitle').value;
  const subtitle = document.getElementById('heroSubtitle').value;
  const tagline = document.getElementById('heroTagline').value;
  
  document.getElementById('heroPreviewTitle').textContent = title;
  document.getElementById('heroPreviewSubtitle').textContent = subtitle;
  document.getElementById('heroPreviewTagline').textContent = tagline;
}

function saveHeroContent() {
  const hero = {
    title: document.getElementById('heroTitle').value,
    subtitle: document.getElementById('heroSubtitle').value,
    tagline: document.getElementById('heroTagline').value
  };
  
  updateSection('hero', hero);
  showToast('Hero section updated successfully', 'success');
}

// ==================== WORK PASSES ====================
function loadWorkPasses() {
  const passes = getContent('workPasses');
  const table = document.getElementById('workPassesTable');
  table.innerHTML = '';
  
  if (passes && Array.isArray(passes)) {
    passes.forEach(pass => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${pass.title}</td>
        <td>${pass.category}</td>
        <td>${pass.description.substring(0, 40)}...</td>
        <td>
          <div class="action-buttons">
            <button class="btn-admin btn-secondary" onclick="editWorkPass(${pass.id})">
              <i class="bi bi-pencil"></i> Edit
            </button>
            <button class="btn-admin btn-danger" onclick="deleteWorkPass(${pass.id})">
              <i class="bi bi-trash"></i> Delete
            </button>
          </div>
        </td>
      `;
      table.appendChild(row);
    });
  }
}

function openAddWorkPassModal() {
  document.getElementById('workPassForm').reset();
  document.getElementById('workPassId').value = '';
  document.getElementById('workPassFormTitle').textContent = 'Add Work Pass';
  openModal('workPassModal');
}

function editWorkPass(id) {
  const pass = getItem('workPasses', id);
  if (pass) {
    document.getElementById('workPassId').value = pass.id;
    document.getElementById('workPassTitle').value = pass.title;
    document.getElementById('workPassCategory').value = pass.category;
    document.getElementById('workPassDescription').value = pass.description;
    document.getElementById('workPassBadge').value = pass.badge;
    document.getElementById('workPassFormTitle').textContent = 'Edit Work Pass';
    openModal('workPassModal');
  }
}

function saveWorkPass() {
  const id = document.getElementById('workPassId').value;
  const pass = {
    title: document.getElementById('workPassTitle').value,
    category: document.getElementById('workPassCategory').value,
    description: document.getElementById('workPassDescription').value,
    badge: document.getElementById('workPassBadge').value
  };
  
  if (!pass.title || !pass.category || !pass.description) {
    showToast('Please fill all fields', 'error');
    return;
  }
  
  if (id) {
    updateItem('workPasses', parseInt(id), pass);
  } else {
    addItem('workPasses', pass);
  }
  
  closeModal('workPassModal');
  loadWorkPasses();
  showToast(id ? 'Work Pass updated' : 'Work Pass added', 'success');
}

function deleteWorkPass(id) {
  if (confirm('Are you sure you want to delete this work pass?')) {
    deleteItem('workPasses', id);
    loadWorkPasses();
    showToast('Work Pass deleted', 'success');
  }
}

// ==================== VISAS ====================
function loadVisas() {
  const visas = getContent('visas');
  const table = document.getElementById('visasTable');
  table.innerHTML = '';
  
  if (visas && Array.isArray(visas)) {
    visas.forEach(visa => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${visa.title}</td>
        <td>${visa.category}</td>
        <td>${visa.description.substring(0, 40)}...</td>
        <td>
          <div class="action-buttons">
            <button class="btn-admin btn-secondary" onclick="editVisa(${visa.id})">
              <i class="bi bi-pencil"></i> Edit
            </button>
            <button class="btn-admin btn-danger" onclick="deleteVisa(${visa.id})">
              <i class="bi bi-trash"></i> Delete
            </button>
          </div>
        </td>
      `;
      table.appendChild(row);
    });
  }
}

function openAddVisaModal() {
  document.getElementById('visaForm').reset();
  document.getElementById('visaId').value = '';
  document.getElementById('visaFormTitle').textContent = 'Add Visa';
  openModal('visaModal');
}

function editVisa(id) {
  const visa = getItem('visas', id);
  if (visa) {
    document.getElementById('visaId').value = visa.id;
    document.getElementById('visaTitle').value = visa.title;
    document.getElementById('visaCategory').value = visa.category;
    document.getElementById('visaDescription').value = visa.description;
    document.getElementById('visaBadge').value = visa.badge;
    document.getElementById('visaFormTitle').textContent = 'Edit Visa';
    openModal('visaModal');
  }
}

function saveVisa() {
  const id = document.getElementById('visaId').value;
  const visa = {
    title: document.getElementById('visaTitle').value,
    category: document.getElementById('visaCategory').value,
    description: document.getElementById('visaDescription').value,
    badge: document.getElementById('visaBadge').value
  };
  
  if (!visa.title || !visa.category || !visa.description) {
    showToast('Please fill all fields', 'error');
    return;
  }
  
  if (id) {
    updateItem('visas', parseInt(id), visa);
  } else {
    addItem('visas', visa);
  }
  
  closeModal('visaModal');
  loadVisas();
  showToast(id ? 'Visa updated' : 'Visa added', 'success');
}

function deleteVisa(id) {
  if (confirm('Are you sure you want to delete this visa?')) {
    deleteItem('visas', id);
    loadVisas();
    showToast('Visa deleted', 'success');
  }
}

// ==================== LAWS ====================
function loadLaws() {
  const laws = getContent('laws');
  const table = document.getElementById('lawsTable');
  table.innerHTML = '';
  
  if (laws && Array.isArray(laws)) {
    laws.forEach(law => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${law.title}</td>
        <td><span style="color: ${law.severity === 'Critical' ? '#ff6b6b' : law.severity === 'Medium' ? '#ffa94d' : '#51cf66'}">${law.severity}</span></td>
        <td>${law.description.substring(0, 40)}...</td>
        <td>
          <div class="action-buttons">
            <button class="btn-admin btn-secondary" onclick="editLaw(${law.id})">
              <i class="bi bi-pencil"></i> Edit
            </button>
            <button class="btn-admin btn-danger" onclick="deleteLaw(${law.id})">
              <i class="bi bi-trash"></i> Delete
            </button>
          </div>
        </td>
      `;
      table.appendChild(row);
    });
  }
}

function openAddLawModal() {
  document.getElementById('lawForm').reset();
  document.getElementById('lawId').value = '';
  document.getElementById('lawFormTitle').textContent = 'Add Law';
  openModal('lawModal');
}

function editLaw(id) {
  const law = getItem('laws', id);
  if (law) {
    document.getElementById('lawId').value = law.id;
    document.getElementById('lawTitle').value = law.title;
    document.getElementById('lawCategory').value = law.category;
    document.getElementById('lawSeverity').value = law.severity;
    document.getElementById('lawDescription').value = law.description;
    document.getElementById('lawFormTitle').textContent = 'Edit Law';
    openModal('lawModal');
  }
}

function saveLaw() {
  const id = document.getElementById('lawId').value;
  const law = {
    title: document.getElementById('lawTitle').value,
    category: document.getElementById('lawCategory').value,
    severity: document.getElementById('lawSeverity').value,
    description: document.getElementById('lawDescription').value
  };
  
  if (!law.title || !law.category || !law.severity || !law.description) {
    showToast('Please fill all fields', 'error');
    return;
  }
  
  if (id) {
    updateItem('laws', parseInt(id), law);
  } else {
    addItem('laws', law);
  }
  
  closeModal('lawModal');
  loadLaws();
  showToast(id ? 'Law updated' : 'Law added', 'success');
}

function deleteLaw(id) {
  if (confirm('Are you sure you want to delete this law?')) {
    deleteItem('laws', id);
    loadLaws();
    showToast('Law deleted', 'success');
  }
}

// ==================== BLOG ====================
function loadBlogArticles() {
  const articles = getContent('blogArticles');
  const table = document.getElementById('blogArticlesTable');
  table.innerHTML = '';
  
  if (articles && Array.isArray(articles)) {
    articles.forEach(article => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${article.title}</td>
        <td>${article.author}</td>
        <td>${article.category}</td>
        <td>${new Date(article.date).toLocaleDateString()}</td>
        <td>
          <div class="action-buttons">
            <button class="btn-admin btn-secondary" onclick="editBlogArticle(${article.id})">
              <i class="bi bi-pencil"></i> Edit
            </button>
            <button class="btn-admin btn-danger" onclick="deleteBlogArticle(${article.id})">
              <i class="bi bi-trash"></i> Delete
            </button>
          </div>
        </td>
      `;
      table.appendChild(row);
    });
  }
}

function openAddBlogModal() {
  document.getElementById('blogForm').reset();
  document.getElementById('blogId').value = '';
  document.getElementById('blogFormTitle').textContent = 'Add Blog Article';
  document.getElementById('blogDate').valueAsDate = new Date();
  openModal('blogModal');
}

function editBlogArticle(id) {
  const article = getItem('blogArticles', id);
  if (article) {
    document.getElementById('blogId').value = article.id;
    document.getElementById('blogTitle').value = article.title;
    document.getElementById('blogSlug').value = article.slug;
    document.getElementById('blogExcerpt').value = article.excerpt;
    document.getElementById('blogContent').value = article.content;
    document.getElementById('blogCategory').value = article.category;
    document.getElementById('blogAuthor').value = article.author;
    document.getElementById('blogDate').value = article.date;
    document.getElementById('blogFormTitle').textContent = 'Edit Blog Article';
    openModal('blogModal');
  }
}

function saveBlogArticle() {
  const id = document.getElementById('blogId').value;
  const title = document.getElementById('blogTitle').value;
  const slug = document.getElementById('blogSlug').value || generateSlug(title);
  
  const article = {
    title: title,
    slug: slug,
    excerpt: document.getElementById('blogExcerpt').value,
    content: document.getElementById('blogContent').value,
    category: document.getElementById('blogCategory').value,
    author: document.getElementById('blogAuthor').value,
    date: document.getElementById('blogDate').value,
    featured: false
  };
  
  if (!article.title || !article.excerpt || !article.content || !article.category || !article.author) {
    showToast('Please fill all fields', 'error');
    return;
  }
  
  if (id) {
    updateItem('blogArticles', parseInt(id), article);
  } else {
    addItem('blogArticles', article);
  }
  
  closeModal('blogModal');
  loadBlogArticles();
  showToast(id ? 'Article updated' : 'Article added', 'success');
}

function deleteBlogArticle(id) {
  if (confirm('Are you sure you want to delete this article?')) {
    deleteItem('blogArticles', id);
    loadBlogArticles();
    showToast('Article deleted', 'success');
  }
}

// Auto-generate slug when title changes
document.addEventListener('DOMContentLoaded', function() {
  if (document.getElementById('blogTitle')) {
    document.getElementById('blogTitle').addEventListener('change', function() {
      const slug = generateSlug(this.value);
      document.getElementById('blogSlug').value = slug;
    });
  }
});

// ==================== CONTACT ====================
function loadContactContent() {
  const contact = getContent('contact');
  
  if (contact) {
    document.getElementById('contactEmail').value = contact.email;
    document.getElementById('contactPhone').value = contact.phone;
    document.getElementById('contactAddress').value = contact.address;
    document.getElementById('contactHours').value = contact.hours;
  }
}

function saveContactContent() {
  const contact = {
    email: document.getElementById('contactEmail').value,
    phone: document.getElementById('contactPhone').value,
    address: document.getElementById('contactAddress').value,
    hours: document.getElementById('contactHours').value
  };
  
  if (!contact.email || !contact.phone || !contact.address || !contact.hours) {
    showToast('Please fill all fields', 'error');
    return;
  }
  
  updateSection('contact', contact);
  showToast('Contact information updated', 'success');
}

// ==================== NAVIGATION ====================
function loadNavigation() {
  const nav = getContent('navigation');
  const table = document.getElementById('navLinksTable');
  table.innerHTML = '';
  
  if (nav && nav.links && Array.isArray(nav.links)) {
    nav.links.forEach(link => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${link.label}</td>
        <td>${link.href}</td>
        <td>
          <div class="action-buttons">
            <button class="btn-admin btn-secondary" onclick="editNavLink(${link.id})">
              <i class="bi bi-pencil"></i> Edit
            </button>
            <button class="btn-admin btn-danger" onclick="deleteNavLink(${link.id})">
              <i class="bi bi-trash"></i> Delete
            </button>
          </div>
        </td>
      `;
      table.appendChild(row);
    });
  }
}

function openAddNavLinkModal() {
  document.getElementById('navLinkForm').reset();
  document.getElementById('navLinkId').value = '';
  document.getElementById('navLinkFormTitle').textContent = 'Add Navigation Link';
  openModal('navLinkModal');
}

function editNavLink(id) {
  const nav = getContent('navigation');
  const link = nav.links.find(l => l.id === id);
  
  if (link) {
    document.getElementById('navLinkId').value = link.id;
    document.getElementById('navLinkLabel').value = link.label;
    document.getElementById('navLinkHref').value = link.href;
    document.getElementById('navLinkFormTitle').textContent = 'Edit Navigation Link';
    openModal('navLinkModal');
  }
}

function saveNavLink() {
  const id = document.getElementById('navLinkId').value;
  const label = document.getElementById('navLinkLabel').value;
  const href = document.getElementById('navLinkHref').value;
  
  if (!label || !href) {
    showToast('Please fill all fields', 'error');
    return;
  }
  
  const nav = getContent('navigation');
  
  if (id) {
    const index = nav.links.findIndex(l => l.id === parseInt(id));
    nav.links[index] = { id: parseInt(id), label, href };
  } else {
    const maxId = Math.max(...nav.links.map(l => l.id || 0), 0);
    nav.links.push({ id: maxId + 1, label, href });
  }
  
  updateSection('navigation', nav);
  closeModal('navLinkModal');
  loadNavigation();
  showToast(id ? 'Link updated' : 'Link added', 'success');
}

function deleteNavLink(id) {
  if (confirm('Are you sure you want to delete this navigation link?')) {
    const nav = getContent('navigation');
    nav.links = nav.links.filter(l => l.id !== id);
    updateSection('navigation', nav);
    loadNavigation();
    showToast('Link deleted', 'success');
  }
}

// ==================== TAB SWITCHING ====================
function switchTab(tabName) {
  // Hide all tabs
  document.querySelectorAll('.tab-content').forEach(tab => {
    tab.classList.remove('active');
  });
  
  // Remove active class from all buttons
  document.querySelectorAll('.admin-tab').forEach(btn => {
    btn.classList.remove('active');
  });
  
  // Show selected tab
  document.getElementById(tabName).classList.add('active');
  event.target.classList.add('active');
  
  // Load data for the tab
  switch(tabName) {
    case 'heroTab':
      loadHeroContent();
      break;
    case 'workPassesTab':
      loadWorkPasses();
      break;
    case 'visasTab':
      loadVisas();
      break;
    case 'lawsTab':
      loadLaws();
      break;
    case 'blogTab':
      loadBlogArticles();
      break;
    case 'contactTab':
      loadContactContent();
      break;
    case 'navigationTab':
      loadNavigation();
      break;
  }
}

// Close modals on overlay click
document.addEventListener('click', function(e) {
  if (e.target.classList.contains('modal-overlay')) {
    e.target.classList.remove('active');
  }
});

// Initialize dashboard
window.addEventListener('DOMContentLoaded', function() {
  checkAuth();
  loadHeroContent();
  document.getElementById('heroTab').classList.add('active');
});
