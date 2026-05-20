// Content Loader - Integrates admin data into main site pages
// Include this script in all pages: <script src="js/content-loader.js"></script>

(function() {
  // Load admin content and update page elements
  function loadAdminContent() {
    const content = getAllContent();
    
    if (!content) return;
    
    // Load Hero content (index.html)
    if (content.hero) {
      updateHeroContent(content.hero);
    }
    
    // Load Work Passes (index.html)
    if (content.workPasses) {
      updateWorkPasses(content.workPasses);
    }
    
    // Load Visas (index.html)
    if (content.visas) {
      updateVisas(content.visas);
    }
    
    // Load Laws (index.html and singapore_laws.html)
    if (content.laws) {
      updateLaws(content.laws);
    }
    
    // Load Contact (contact.html)
    if (content.contact) {
      updateContactInfo(content.contact);
    }
    
    // Load Navigation (all pages)
    if (content.navigation) {
      updateNavigation(content.navigation);
    }
    
    // Load Blog Articles (blog/blogindex.html)
    if (content.blogArticles) {
      updateBlogArticles(content.blogArticles);
    }
  }
  
  // Get all content from localStorage
  function getAllContent() {
    try {
      const content = localStorage.getItem('siteContent');
      return content ? JSON.parse(content) : null;
    } catch (error) {
      console.error('Error loading content:', error);
      return null;
    }
  }
  
  // Update Hero Section (index.html)
  function updateHeroContent(hero) {
    // Update h1
    const h1 = document.querySelector('.hero h1') || document.querySelector('h1');
    if (h1) {
      h1.innerHTML = hero.title.split('\n').map((line, i) => {
        if (i === 1) return `<em>${line}</em>`;
        return line;
      }).join('<br/>');
    }
    
    // Update hero subtitle/description
    const heroSub = document.querySelector('.hero-sub') || document.querySelector('.hero p');
    if (heroSub) {
      heroSub.textContent = hero.subtitle;
    }
    
    // Update tagline
    const htag = document.querySelector('.htag') || document.querySelector('[class*="tag"]');
    if (htag) {
      htag.textContent = hero.tagline;
    }
  }
  
  // Update Work Passes Cards (index.html)
  function updateWorkPasses(passes) {
    const container = document.querySelector('[id*="information"]') || document.querySelector('.pass-grid');
    
    if (!container) return;
    
    // Find the grid within the section
    const grid = container.closest('section')?.querySelector('.pass-grid') || 
                 container.querySelector('.pass-grid');
    
    if (grid && grid.children.length > 0) {
      // Update existing cards with new data
      passes.forEach((pass, index) => {
        const card = grid.children[index];
        if (card) {
          const title = card.querySelector('h3');
          const badge = card.querySelector('.pbadge');
          const desc = card.querySelector('p');
          
          if (title) title.textContent = pass.title;
          if (badge) badge.textContent = pass.badge;
          if (desc) desc.textContent = pass.description;
        }
      });
    }
  }
  
  // Update Visas Cards (index.html)
  function updateVisas(visas) {
    const container = document.querySelector('[id*="visa"]');
    
    if (!container) return;
    
    const grid = container.closest('section')?.querySelector('.pass-grid') || 
                 container.querySelector('.pass-grid');
    
    if (grid && grid.children.length > 0) {
      visas.forEach((visa, index) => {
        const card = grid.children[index];
        if (card) {
          const title = card.querySelector('h3');
          const badge = card.querySelector('.pbadge');
          const desc = card.querySelector('p');
          
          if (title) title.textContent = visa.title;
          if (badge) badge.textContent = visa.badge;
          if (desc) desc.textContent = visa.description;
        }
      });
    }
  }
  
  // Update Laws (singapore_laws.html)
  function updateLaws(laws) {
    const container = document.querySelector('[id*="laws"]');
    
    if (!container) return;
    
    const lawsGrid = container.closest('section')?.querySelector('.laws-grid') || 
                     container.querySelector('.laws-grid');
    
    if (lawsGrid && lawsGrid.children.length > 0) {
      laws.forEach((law, index) => {
        const card = lawsGrid.children[index];
        if (card) {
          const title = card.querySelector('h3');
          const desc = card.querySelector('p');
          
          if (title) title.textContent = law.title;
          if (desc) desc.textContent = law.description;
        }
      });
    }
  }
  
  // Update Contact Info (contact.html)
  function updateContactInfo(contact) {
    // Email
    const emailEl = document.querySelector('[href*="mailto"]') || 
                    document.querySelector('[class*="email"]');
    if (emailEl) {
      emailEl.href = `mailto:${contact.email}`;
      emailEl.textContent = contact.email;
    }
    
    // Phone
    const phoneEl = document.querySelector('[href*="tel"]') || 
                    document.querySelector('[class*="phone"]');
    if (phoneEl) {
      phoneEl.href = `tel:${contact.phone.replace(/\s/g, '')}`;
      phoneEl.textContent = contact.phone;
    }
    
    // Address
    const addressEls = document.querySelectorAll('[class*="address"]');
    if (addressEls.length > 0) {
      addressEls.forEach(el => {
        if (!el.href) el.textContent = contact.address;
      });
    }
    
    // Hours
    const hoursEl = document.querySelector('[class*="hours"]') || 
                    document.querySelector('[class*="business"]');
    if (hoursEl) {
      hoursEl.textContent = contact.hours;
    }
  }
  
  // Update Navigation (all pages)
  function updateNavigation(nav) {
    const navLinks = document.querySelectorAll('.nav-links li a, [class*="nav"] a');
    const siteName = document.querySelector('.nav-logo') || 
                     document.querySelector('[class*="logo"]');
    
    // Update site name/logo text
    if (siteName && nav.siteName) {
      const logoText = siteName.querySelector('img')?.nextSibling;
      if (logoText) {
        logoText.textContent = '\u00A0' + nav.siteName;
      }
    }
    
    // Update nav links (be careful not to break existing functionality)
    // This is limited to avoid breaking custom navigation
    if (nav.links && nav.links.length > 0) {
      // Silently update internal tracking (don't modify DOM to avoid breaking JS)
      window.adminNavLinks = nav.links;
    }
  }
  
  // Update Blog Articles (blog/blogindex.html)
  function updateBlogArticles(articles) {
    const container = document.querySelector('.blog-grid') || 
                      document.querySelector('[class*="blog"]');
    
    if (!container) return;
    
    const cards = container.querySelectorAll('[class*="blog-card"], [class*="article"]');
    
    if (cards.length > 0) {
      articles.forEach((article, index) => {
        const card = cards[index];
        if (card) {
          const title = card.querySelector('h3');
          const excerpt = card.querySelector('p');
          const date = card.querySelector('[class*="date"]');
          const category = card.querySelector('[class*="category"]');
          
          if (title) title.textContent = article.title;
          if (excerpt) excerpt.textContent = article.excerpt;
          if (date) date.textContent = new Date(article.date).toLocaleDateString();
          if (category) category.textContent = article.category;
        }
      });
    }
  }
  
  // Load content when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadAdminContent);
  } else {
    loadAdminContent();
  }
  
  // Also load when storage changes (if admin is open in another tab)
  window.addEventListener('storage', function(e) {
    if (e.key === 'siteContent') {
      loadAdminContent();
    }
  });
})();
