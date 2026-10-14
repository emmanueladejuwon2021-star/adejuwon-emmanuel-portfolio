// ==========================================================================
// Adejuwon Emmanuel - Standalone Production Portfolio Application Script
// Zero-dependency Vanilla JS (Runs directly locally on file:// and all servers)
// ==========================================================================

// 1. Projects Data Definition (All 7 live production apps)
const projectsData = [
  {
    id: 'menucraft',
    title: 'MenuCraft — QR Digital Menu Platform',
    category: 'SaaS & Brands',
    shortDesc: 'A modern, scannable QR digital menu SaaS platform for restaurants, cafes, and bars with real-time dish updates and zero app install.',
    fullDesc: 'MenuCraft is a contactless digital dining solution engineered for modern hospitality businesses. Diners simply scan a table QR code with their mobile cameras to instantly launch a branded, high-performance digital menu. Restaurant operators get access to an intuitive admin portal where they can update menu items, prices, dietary badges, and photos in real-time, eliminating paper reprinting costs.',
    liveUrl: 'https://menucraft-eta.vercel.app/',
    featured: true,
    year: '2025',
    gradient: 'from-amber-600 via-orange-600 to-rose-600',
    accentColor: '#f59e0b',
    tech: ['Next.js', 'Tailwind CSS', 'Lucide Icons', 'QR Code SaaS', 'Mobile-First'],
    stats: {
      metric1: '0 Apps Needed',
      metric2: '< 1s QR Scan-to-Menu',
      metric3: '100% Mobile Optimized'
    },
    features: [
      'Instant QR table scan opening interactive live menus directly in browser',
      'Dedicated restaurant administration management dashboard (/admin)',
      'Rich multi-font typography presets suited for upscale dining and bistros',
      'Real-time pricing, availability, and item descriptions synchronization',
      'Dietary filtering, ingredient highlights, and allergy indicators'
    ],
    architecture: 'Built with Next.js App Router and Tailwind CSS, utilizing high-performance server components for near-instant cold loads on mobile networks, with seamless dynamic font loading across 20+ curated restaurant typefaces.'
  },
  {
    id: 'shopverse',
    title: 'ShopVerse — Fast E-Commerce & Paystack Platform',
    category: 'E-Commerce',
    shortDesc: 'High-performance e-commerce engine with live Paystack webhook reconciliation, CSRF token security, dynamic cart API, and order tracking.',
    fullDesc: 'ShopVerse is a secure, high-speed commercial retail platform featuring a complete Paystack payment gateway integration. It features HMAC-SHA512 verified webhooks, idempotent transaction reconciliation, server-side session persistence across serverless environments, CSRF-gated actions, live product search endpoints (/api/search), dynamic cart state synchronization (/api/cart), customer wishlist, and order status tracking.',
    liveUrl: 'https://shopverse-fast.vercel.app/',
    featured: true,
    year: '2025',
    gradient: 'from-emerald-600 via-teal-600 to-indigo-700',
    accentColor: '#059669',
    tech: ['PHP / Serverless', 'Paystack Gateway', 'HMAC Webhooks', 'REST API', 'CSRF Security', 'Cart Engine'],
    stats: {
      metric1: 'Paystack Live Integration',
      metric2: 'HMAC-SHA512 Webhooks',
      metric3: '< 100ms API Response'
    },
    features: [
      'Direct Paystack payment gateway integration with verified redirect callbacks',
      'HMAC-SHA512 signature verified, idempotent webhook event processor',
      'Real-time product live search endpoint (/api/search) with instantaneous suggestions',
      'Dynamic cart sidebar drawer API (/api/cart) updating subtotal & item counts',
      'Strict HTTP security headers: Content-Security-Policy, X-Frame-Options: DENY, and CSRF protection'
    ],
    architecture: 'Architected with a lean front-controller routing pipeline, strict session guards on serverless runtime (/tmp storage), idempotent webhook dispatcher, and protected checkout routes.'
  },
  {
    id: 'bincom-election',
    title: 'Delta State Election Collation & Results Portal',
    category: 'Web Applications',
    shortDesc: 'Civic election collation portal aggregating polling unit returns and local council vote sums across 25 Delta State LGAs.',
    fullDesc: 'Bincom Election Portal is an official electoral collation and vote aggregation platform built for Delta State, Nigeria. It provides transparent grassroots ballot tallies across hundreds of polling units, real-time party standings, vote distribution analytics, LGA directory collation across 25 local councils (Ethiope West, Warri, Sapele, etc.), and a secure polling unit return submission portal for field officers.',
    liveUrl: 'https://bincom-election-portal.onrender.com/',
    featured: true,
    year: '2025',
    gradient: 'from-sky-600 via-blue-700 to-indigo-900',
    accentColor: '#0284c7',
    tech: ['Full-Stack Web App', 'Relational Database', 'Civic Tech', 'Vote Aggregation', 'Render Cloud'],
    stats: {
      metric1: '25 Local Councils',
      metric2: 'Real-Time Collation',
      metric3: 'Granular Polling Data'
    },
    features: [
      'Statewide party standings scoreboard with real-time vote share distribution',
      'Granular polling unit results explorer by unique polling unit identification numbers',
      'Comprehensive Local Government Area (LGA) summary directory with instant vote summation',
      'Secure field officer portal for entering new polling unit ballot returns',
      'Database-backed collation engine preventing duplicate submissions and tally discrepancies'
    ],
    architecture: 'Engineered with relational data models connecting polling units, wards, LGAs, and political parties with optimized SQL aggregation queries for instant calculation of council totals without lag.'
  },
  {
    id: 'premed-portal',
    title: 'PreMed Student Examination Portal',
    category: 'Web Applications',
    shortDesc: 'A rigorous academic testing & past questions portal for medical, dental, and health sciences scholars with KaTeX formula rendering.',
    fullDesc: 'PreMed Test Portal is an academic testing and examination preparation platform built for medical, surgical, dental, nursing, and pharmacology students. It enforces department-specific matriculation onboarding, practice tests, past question archives, and formula rendering with KaTeX to accurately display complex biochemical equations and medical formulas.',
    liveUrl: 'https://premed-test-portal.vercel.app/login.php',
    featured: true,
    year: '2025',
    gradient: 'from-teal-600 via-emerald-600 to-cyan-700',
    accentColor: '#0d9488',
    tech: ['Tailwind CSS', 'Lucide Icons', 'KaTeX Math/Bio', 'Auth System', 'EdTech'],
    stats: {
      metric1: '10 Departments',
      metric2: 'Strict Matric Auth',
      metric3: 'KaTeX Formula Support'
    },
    features: [
      'Dual-mode authenticated access: Student Sign-In and Departmental Registration',
      'Strict client & server validation verifying matriculation codes & names',
      'Integrated KaTeX library for mathematical, physics, and biochemical notation',
      'Clinical UI aesthetic designed for focused, distraction-free study sessions',
      'Support for Medicine, Dentistry, Nursing, Pharmacy, MLS, and Anatomy curricula'
    ],
    architecture: 'Lightweight responsive frontend powered by Tailwind CSS and Lucide icons, paired with KaTeX CDN formula auto-renderers and client-side input sanitizer for reliable, low-bandwidth academic accessibility.'
  },
  {
    id: 'secure-bank',
    title: 'SecureBank — Professional Banking Platform',
    category: 'Web Applications',
    shortDesc: 'Enterprise fintech portal featuring interactive account management, live balance simulations, and transaction monitoring.',
    fullDesc: 'SecureBank is a digital banking application that replicates the interface and security architecture of top financial institutions. It provides users with a comprehensive financial control center, real-time balance calculations, color-coded debit/credit transaction histories, fund transfer mechanisms, and loan/mortgage calculators.',
    liveUrl: 'https://emmanuelsecurebank2025.netlify.app/',
    featured: true,
    year: '2025',
    gradient: 'from-blue-600 via-indigo-600 to-sky-700',
    accentColor: '#0066cc',
    tech: ['Vue 3 State', 'Bootstrap 5', 'Fintech UI', 'Transaction Engine', 'Security UX'],
    stats: {
      metric1: '256-Bit SSL Look',
      metric2: 'Instant Ledger Audit',
      metric3: '25+ Yrs Heritage Theme'
    },
    features: [
      'Interactive financial dashboard with real-time balance toggle and ledger view',
      'Debit and credit transaction tracking with positive/negative indicators',
      'Full authentication flow with secure Sign-In and Account Registration modules',
      'Interactive calculator for savings accounts, auto loans, and mortgages',
      'Cybersecurity-focused UI with glassmorphism and animated rotation elements'
    ],
    architecture: 'Designed using Vue 3 reactivity on top of responsive Bootstrap 5 foundations, maintaining dynamic page switching without page reloads while preserving persistent session states.'
  },
  {
    id: 'techphone-pro',
    title: 'TechPhone Pro — Flagship Smartphone Store',
    category: 'E-Commerce',
    shortDesc: 'Full-featured mobile e-commerce platform with live multi-filter sidebar, specs comparison matrix, and reactive cart.',
    fullDesc: 'TechPhone Pro is an e-commerce platform dedicated to flagship smartphones and accessories. It features dynamic price range sliders, multi-brand and storage filtering, side-by-side device technical comparison tables, product ratings, customer reviews, and a reactive cart system with instant quantity and discount calculations.',
    liveUrl: 'https://techphonepro20255.netlify.app/',
    featured: true,
    year: '2025',
    gradient: 'from-blue-600 via-cyan-600 to-teal-500',
    accentColor: '#2563eb',
    tech: ['Vue.js', 'Bootstrap 5', 'E-Commerce', 'Specs Comparison', 'Cart Engine'],
    stats: {
      metric1: 'Live Price Filter',
      metric2: 'Multi-Phone Compare',
      metric3: 'Reactive Cart Drawer'
    },
    features: [
      'Comprehensive product catalog with high-resolution imagery and badge alerts',
      'Advanced multi-parameter filter sidebar (Brand, Storage, Price Min/Max, Rating)',
      'Side-by-side smartphone specifications comparison matrix',
      'Dynamic shopping cart with automated discount calculation and checkout totals',
      'Customer review rating system with star breakdowns and newsletter capture'
    ],
    architecture: 'Vue.js client-side state management coordinates the filter pipeline, search indexing, and cart persistent badge notifications with smooth CSS transitions.'
  },
  {
    id: 'phone-pro-sale',
    title: 'PhoneProSale — Premium Tech Retail Store',
    category: 'E-Commerce',
    shortDesc: 'High-conversion tech store frontend built with Vite and React for lightning-fast gadget discovery and checkout.',
    fullDesc: 'PhoneProSale is a modern tech retailer web app engineered for smartphone enthusiasts and gadget buyers. Built on Vite and React with Tailwind styling, the app delivers sub-second page transitions, curated product groupings, responsive showcase cards, and streamlined purchasing workflows.',
    liveUrl: 'https://scintillating-tanuki-c13572.netlify.app/',
    featured: true,
    year: '2025',
    gradient: 'from-violet-600 via-purple-600 to-fuchsia-600',
    accentColor: '#8b5cf6',
    tech: ['React 18', 'Vite', 'Tailwind CSS', 'Modern UI', 'Micro-Interactions'],
    stats: {
      metric1: 'Sub-Second Load',
      metric2: 'Vite Optimized',
      metric3: 'Mobile-First UX'
    },
    features: [
      'Sleek modern UI design with dark accents and vibrant product presentation',
      'Fluid product card animations and hover feedback states',
      'Categorized technology catalog for smartphones, earbuds, and wearables',
      'Lightweight bundled assets ensuring instant mobile interaction',
      'Integrated Font Awesome vector iconography and search filtering'
    ],
    architecture: 'Modular React architecture compiled via Vite with modern ES modules, resulting in an ultra-compact bundle and instant hot-module replacement.'
  }
];

// Application State
const appState = {
  activeProjectFilter: 'All',
  searchQuery: '',
  theme: localStorage.getItem('ae-portfolio-theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'),
  selectedProject: null,
  previewDevice: 'desktop'
};

// --------------------------------------------------------------------------
// Initialize Everything on Load
// --------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initLucideIcons();
  initNavigation();
  initScrollProgress();
  initProjectsFiltering();
  initModals();
  initCommandPalette();
  initContactForm();
  initBackToTop();
  initClipboardAndWhatsApp();
  initStatsCounter();
});

// --------------------------------------------------------------------------
// 1. Theme Management (Dark / Light Mode)
// --------------------------------------------------------------------------
function initTheme() {
  applyTheme(appState.theme);

  const toggleButtons = document.querySelectorAll('.theme-toggle-btn');
  toggleButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      appState.theme = appState.theme === 'dark' ? 'light' : 'dark';
      localStorage.setItem('ae-portfolio-theme', appState.theme);
      applyTheme(appState.theme);
      showToast(`Switched to ${appState.theme.toUpperCase()} mode`, 'info');
    });
  });

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (!localStorage.getItem('ae-portfolio-theme')) {
      appState.theme = e.matches ? 'dark' : 'light';
      applyTheme(appState.theme);
    }
  });
}

function applyTheme(theme) {
  const root = document.documentElement;
  const metaThemeColor = document.querySelector('meta[name="theme-color"]');

  if (theme === 'dark') {
    root.classList.add('dark');
    root.classList.remove('light');
    root.setAttribute('data-theme', 'dark');
    if (metaThemeColor) metaThemeColor.setAttribute('content', '#050509');
  } else {
    root.classList.remove('dark');
    root.classList.add('light');
    root.setAttribute('data-theme', 'light');
    if (metaThemeColor) metaThemeColor.setAttribute('content', '#ffffff');
  }

  // Update theme icons
  document.querySelectorAll('.theme-icon-sun').forEach(el => {
    el.style.display = theme === 'dark' ? 'none' : 'block';
  });
  document.querySelectorAll('.theme-icon-moon').forEach(el => {
    el.style.display = theme === 'dark' ? 'block' : 'none';
  });

  // Update theme text badge if present
  document.querySelectorAll('.theme-text-label').forEach(el => {
    el.textContent = theme === 'dark' ? 'Dark' : 'Light';
  });
}

// --------------------------------------------------------------------------
// 2. Navigation & Mobile Drawer
// --------------------------------------------------------------------------
function initNavigation() {
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
      mobileMenuBtn.setAttribute('aria-expanded', !isExpanded);
      mobileMenu.classList.toggle('hidden');
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Active section indicator
  const navLinks = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('section[id]');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('text-violet-600', 'dark:text-violet-400', 'font-semibold');
            link.classList.remove('text-slate-600', 'dark:text-slate-400');
          } else {
            link.classList.remove('text-violet-600', 'dark:text-violet-400', 'font-semibold');
            link.classList.add('text-slate-600', 'dark:text-slate-400');
          }
        });
      }
    });
  }, { threshold: 0.3 });

  sections.forEach(sec => observer.observe(sec));
}

// --------------------------------------------------------------------------
// 3. Scroll Progress Indicator
// --------------------------------------------------------------------------
function initScrollProgress() {
  const progressBar = document.getElementById('scroll-progress-bar');
  if (!progressBar) return;

  window.addEventListener('scroll', () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
    progressBar.style.width = `${progress}%`;
  }, { passive: true });
}

// --------------------------------------------------------------------------
// 4. Projects Filtering & Real-time Search
// --------------------------------------------------------------------------
function initProjectsFiltering() {
  const filterContainer = document.getElementById('project-filters');
  const searchInput = document.getElementById('project-search');

  // Filter Buttons
  if (filterContainer) {
    const categories = ['All', 'E-Commerce', 'Web Applications', 'SaaS & Brands'];
    filterContainer.innerHTML = categories.map(cat => `
      <button 
        type="button" 
        data-category="${cat}"
        class="filter-btn px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
          cat === appState.activeProjectFilter 
            ? 'bg-violet-600 text-white shadow-md shadow-violet-500/20' 
            : 'bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-white/10'
        }"
      >
        ${cat}
      </button>
    `).join('');

    filterContainer.addEventListener('click', (e) => {
      const btn = e.target.closest('.filter-btn');
      if (!btn) return;
      const cat = btn.getAttribute('data-category');
      appState.activeProjectFilter = cat;

      filterContainer.querySelectorAll('.filter-btn').forEach(b => {
        b.className = 'filter-btn px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-white/10';
      });
      btn.className = 'filter-btn px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 bg-violet-600 text-white shadow-md shadow-violet-500/20';

      applyProjectFilters();
    });
  }

  // Search Input
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      appState.searchQuery = e.target.value.toLowerCase().trim();
      applyProjectFilters();
    });
  }

  applyProjectFilters();
}

function applyProjectFilters() {
  const container = document.getElementById('projects-grid');
  const countBadge = document.getElementById('projects-count');
  if (!container) return;

  const cards = container.querySelectorAll('[data-project-id]');
  let visibleCount = 0;

  cards.forEach(card => {
    const projectId = card.getAttribute('data-project-id');
    const project = projectsData.find(p => p.id === projectId);

    if (!project) return;

    const matchesCategory = appState.activeProjectFilter === 'All' || project.category === appState.activeProjectFilter;
    const matchesSearch = !appState.searchQuery || 
      project.title.toLowerCase().includes(appState.searchQuery) ||
      project.shortDesc.toLowerCase().includes(appState.searchQuery) ||
      project.tech.some(t => t.toLowerCase().includes(appState.searchQuery));

    if (matchesCategory && matchesSearch) {
      card.classList.remove('hidden');
      visibleCount++;
    } else {
      card.classList.add('hidden');
    }
  });

  if (countBadge) {
    countBadge.textContent = `${visibleCount} project${visibleCount === 1 ? '' : 's'}`;
  }
}

// --------------------------------------------------------------------------
// 5. Interactive Case Study & Device Simulator Modal
// --------------------------------------------------------------------------
function initModals() {
  const projectModal = document.getElementById('project-modal');
  const resumeModal = document.getElementById('resume-modal');

  window.openProjectModal = (projectId) => {
    const project = projectsData.find(p => p.id === projectId);
    if (!project || !projectModal) return;

    appState.selectedProject = project;
    appState.previewDevice = 'desktop';

    // Populate Modal Content
    document.getElementById('modal-project-title').textContent = project.title;
    document.getElementById('modal-project-category').textContent = project.category;
    document.getElementById('modal-project-desc').textContent = project.fullDesc;
    document.getElementById('modal-project-architecture').textContent = project.architecture;
    document.getElementById('modal-project-url-text').textContent = project.liveUrl;
    
    // Live links
    const launchBtn = document.getElementById('modal-launch-btn');
    if (launchBtn) launchBtn.href = project.liveUrl;

    const copyBtn = document.getElementById('modal-copy-link-btn');
    if (copyBtn) {
      copyBtn.onclick = () => {
        navigator.clipboard.writeText(project.liveUrl);
        showToast('Project URL copied to clipboard!', 'success');
      };
    }

    // Features list
    const featuresList = document.getElementById('modal-project-features');
    if (featuresList) {
      featuresList.innerHTML = project.features.map(f => `
        <li class="flex items-start gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
          <i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-500 shrink-0 mt-0.5"></i>
          <span>${f}</span>
        </li>
      `).join('');
    }

    // Tech stack badges
    const techBadges = document.getElementById('modal-project-tech');
    if (techBadges) {
      techBadges.innerHTML = project.tech.map(t => `
        <span class="px-3 py-1 rounded-full text-xs font-semibold bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 border border-violet-200 dark:border-violet-700/40">
          ${t}
        </span>
      `).join('');
    }

    updateModalPreviewFrame();

    projectModal.classList.remove('hidden');
    projectModal.classList.add('flex');
    document.body.classList.add('overflow-hidden');
    initLucideIcons();
  };

  window.closeProjectModal = () => {
    if (!projectModal) return;
    projectModal.classList.add('hidden');
    projectModal.classList.remove('flex');
    document.body.classList.remove('overflow-hidden');
    const frame = document.getElementById('modal-iframe');
    if (frame) frame.src = 'about:blank';
  };

  // Preview Switcher (Desktop vs Mobile Frame)
  const desktopBtn = document.getElementById('preview-mode-desktop');
  const mobileBtn = document.getElementById('preview-mode-mobile');

  if (desktopBtn && mobileBtn) {
    desktopBtn.addEventListener('click', () => {
      appState.previewDevice = 'desktop';
      desktopBtn.className = 'px-3 py-1 rounded-md text-xs font-semibold bg-violet-600 text-white';
      mobileBtn.className = 'px-3 py-1 rounded-md text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900';
      updateModalPreviewFrame();
    });

    mobileBtn.addEventListener('click', () => {
      appState.previewDevice = 'mobile';
      mobileBtn.className = 'px-3 py-1 rounded-md text-xs font-semibold bg-violet-600 text-white';
      desktopBtn.className = 'px-3 py-1 rounded-md text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900';
      updateModalPreviewFrame();
    });
  }

  // Resume Modal Triggers
  window.openResumeModal = () => {
    if (!resumeModal) return;
    resumeModal.classList.remove('hidden');
    resumeModal.classList.add('flex');
    document.body.classList.add('overflow-hidden');
    initLucideIcons();
  };

  window.closeResumeModal = () => {
    if (!resumeModal) return;
    resumeModal.classList.add('hidden');
    resumeModal.classList.remove('flex');
    document.body.classList.remove('overflow-hidden');
  };

  // Close modals on Escape key or outside click
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      window.closeProjectModal();
      window.closeResumeModal();
      if (window.closeCommandPalette) window.closeCommandPalette();
    }
  });

  [projectModal, resumeModal].forEach(modal => {
    if (!modal) return;
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        window.closeProjectModal();
        window.closeResumeModal();
      }
    });
  });
}

function updateModalPreviewFrame() {
  const container = document.getElementById('modal-preview-container');
  const frame = document.getElementById('modal-iframe');
  if (!container || !appState.selectedProject) return;

  if (appState.previewDevice === 'desktop') {
    container.className = 'w-full rounded-xl overflow-hidden border border-slate-300 dark:border-white/10 bg-slate-950 shadow-2xl transition-all';
    container.style.maxWidth = '100%';
    container.style.height = '420px';
  } else {
    container.className = 'mockup-mobile-frame transition-all overflow-hidden bg-slate-950 shadow-2xl';
    container.style.maxWidth = '340px';
    container.style.height = '480px';
  }

  if (frame) {
    frame.src = appState.selectedProject.liveUrl;
  }
}

// --------------------------------------------------------------------------
// 6. Command Palette (`Ctrl + K` / `Cmd + K`)
// --------------------------------------------------------------------------
function initCommandPalette() {
  const palette = document.getElementById('command-palette');
  const input = document.getElementById('palette-input');
  const list = document.getElementById('palette-results');
  const triggerBtn = document.getElementById('command-palette-btn');

  if (!palette || !input || !list) return;

  const actions = [
    { title: 'Chat on WhatsApp', subtitle: '+234 916 015 5524 (Instant Reply)', action: () => window.openWhatsApp(), icon: 'message-circle' },
    { title: 'Home', subtitle: 'Jump to top intro', action: () => window.location.hash = '#home', icon: 'home' },
    { title: 'Featured Projects', subtitle: 'Browse all 7 live production apps', action: () => window.location.hash = '#work', icon: 'folder-git-2' },
    { title: 'MenuCraft — Live QR Menu SaaS', subtitle: 'Explore menucraft-eta.vercel.app', action: () => window.openProjectModal('menucraft'), icon: 'utensils' },
    { title: 'ShopVerse — Fast E-Commerce Platform', subtitle: 'Explore shopverse-fast.vercel.app', action: () => window.openProjectModal('shopverse'), icon: 'credit-card' },
    { title: 'Bincom Delta Election Portal', subtitle: 'Explore bincom-election-portal.onrender.com', action: () => window.openProjectModal('bincom-election'), icon: 'vote' },
    { title: 'PreMed Student Exam Portal', subtitle: 'Explore premed-test-portal.vercel.app', action: () => window.openProjectModal('premed-portal'), icon: 'graduation-cap' },
    { title: 'SecureBank — Fintech Platform', subtitle: 'Explore emmanuelsecurebank2025.netlify.app', action: () => window.openProjectModal('secure-bank'), icon: 'shield-check' },
    { title: 'TechPhone Pro — Phone Store', subtitle: 'Explore techphonepro20255.netlify.app', action: () => window.openProjectModal('techphone-pro'), icon: 'smartphone' },
    { title: 'PhoneProSale — Vite Tech Store', subtitle: 'Explore scintillating-tanuki-c13572.netlify.app', action: () => window.openProjectModal('phone-pro-sale'), icon: 'shopping-bag' },
    { title: 'View Full Resume / CV', subtitle: 'Open interactive resume viewer', action: () => window.openResumeModal(), icon: 'file-text' },
    { title: 'Toggle Dark / Light Theme', subtitle: 'Switch current visual appearance', action: () => document.querySelector('.theme-toggle-btn')?.click(), icon: 'sun-moon' },
    { title: 'Copy Email Address', subtitle: 'adejuwon.emmanuel@email.com', action: () => window.copyEmail(), icon: 'copy' },
    { title: 'Contact Emmanuel', subtitle: 'Jump to inquiry form', action: () => window.location.hash = '#contact', icon: 'mail' }
  ];

  function openPalette() {
    palette.classList.remove('hidden');
    palette.classList.add('flex');
    input.value = '';
    renderPaletteActions(actions);
    setTimeout(() => input.focus(), 50);
  }

  window.closeCommandPalette = () => {
    palette.classList.add('hidden');
    palette.classList.remove('flex');
  };

  if (triggerBtn) triggerBtn.addEventListener('click', openPalette);

  document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      if (palette.classList.contains('hidden')) {
        openPalette();
      } else {
        window.closeCommandPalette();
      }
    }
  });

  input.addEventListener('input', (e) => {
    const q = e.target.value.toLowerCase().trim();
    const filtered = actions.filter(a => a.title.toLowerCase().includes(q) || a.subtitle.toLowerCase().includes(q));
    renderPaletteActions(filtered);
  });

  function renderPaletteActions(items) {
    if (items.length === 0) {
      list.innerHTML = `<div class="p-4 text-center text-xs text-slate-400">No matching command found</div>`;
      return;
    }

    list.innerHTML = items.map((item, i) => `
      <button 
        type="button" 
        data-index="${i}" 
        class="w-full text-left p-2.5 rounded-lg hover:bg-slate-100 dark:hover:bg-white/5 flex items-center justify-between group transition-colors"
      >
        <div class="flex items-center gap-3">
          <div class="w-7 h-7 rounded-md bg-slate-100 dark:bg-white/10 text-slate-600 dark:text-slate-300 flex items-center justify-center">
            <i data-lucide="${item.icon}" class="w-3.5 h-3.5"></i>
          </div>
          <div>
            <h5 class="text-xs sm:text-sm font-semibold text-slate-900 dark:text-white">${item.title}</h5>
            <p class="text-[11px] text-slate-500 dark:text-slate-400">${item.subtitle}</p>
          </div>
        </div>
        <i data-lucide="corner-down-left" class="w-3.5 h-3.5 text-slate-300 group-hover:text-violet-500"></i>
      </button>
    `).join('');

    initLucideIcons();

    list.querySelectorAll('button').forEach((btn, idx) => {
      btn.addEventListener('click', () => {
        window.closeCommandPalette();
        items[idx].action();
      });
    });
  }

  palette.addEventListener('click', (e) => {
    if (e.target === palette) window.closeCommandPalette();
  });
}

// --------------------------------------------------------------------------
// 7. Contact Form & WhatsApp Integration
// --------------------------------------------------------------------------
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.querySelector('#contact-name')?.value.trim();
    const email = form.querySelector('#contact-email')?.value.trim();
    const subject = form.querySelector('#contact-subject')?.value || 'General Inquiry';
    const message = form.querySelector('#contact-message')?.value.trim();

    if (!name || !email || !message) {
      showToast('Please fill out all required fields.', 'error');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showToast('Please enter a valid email address.', 'error');
      return;
    }

    // Persist to localStorage
    const inquiries = JSON.parse(localStorage.getItem('ae-inquiries') || '[]');
    inquiries.push({ name, email, subject, message, timestamp: new Date().toISOString() });
    localStorage.setItem('ae-inquiries', JSON.stringify(inquiries));

    // Fire Confetti
    if (typeof confetti === 'function') {
      confetti({ particleCount: 90, spread: 75, origin: { y: 0.7 } });
    }

    showToast('Message sent! Emmanuel will reply within 24 hours.', 'success');
    form.reset();
  });
}

// --------------------------------------------------------------------------
// 8. WhatsApp & Clipboard Helpers
// --------------------------------------------------------------------------
function initClipboardAndWhatsApp() {
  // WhatsApp Click-to-Chat API: Phone 09160155524 -> 2349160155524
  window.openWhatsApp = (customMsg) => {
    const phone = '2349160155524';
    const msg = customMsg || encodeURIComponent("Hello Adejuwon Emmanuel, I saw your portfolio and would like to discuss a project!");
    const url = `https://wa.me/${phone}?text=${msg}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  window.sendFormViaWhatsApp = () => {
    const name = document.getElementById('contact-name')?.value.trim() || 'Client';
    const subject = document.getElementById('contact-subject')?.value || 'Project Inquiry';
    const msg = document.getElementById('contact-message')?.value.trim() || 'I want to build a website.';
    const text = encodeURIComponent(`Hi Adejuwon Emmanuel,\nMy Name: ${name}\nProject: ${subject}\nDetails: ${msg}`);
    window.openWhatsApp(text);
  };

  window.copyEmail = () => {
    const email = 'adejuwon.emmanuel@email.com';
    navigator.clipboard.writeText(email).then(() => {
      showToast(`Copied ${email} to clipboard!`, 'success');
    });
  };

  window.copyPhone = () => {
    const phone = '+234 916 015 5524';
    navigator.clipboard.writeText(phone).then(() => {
      showToast(`Copied ${phone} to clipboard!`, 'success');
    });
  };
}

// --------------------------------------------------------------------------
// 9. Toast Notification System
// --------------------------------------------------------------------------
function showToast(message, type = 'success', duration = 3500) {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  const bgClass = type === 'error' 
    ? 'bg-rose-600 text-white' 
    : type === 'info' 
      ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900' 
      : 'bg-emerald-600 text-white';

  const iconName = type === 'error' ? 'alert-triangle' : type === 'info' ? 'info' : 'check-circle-2';

  toast.className = `toast flex items-center gap-2.5 px-4 py-3 rounded-xl shadow-xl text-xs font-semibold ${bgClass}`;
  toast.innerHTML = `
    <i data-lucide="${iconName}" class="w-4 h-4 shrink-0"></i>
    <span>${message}</span>
  `;

  container.appendChild(toast);
  initLucideIcons();

  requestAnimationFrame(() => toast.classList.add('show'));
  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

// --------------------------------------------------------------------------
// 10. Stats Counter
// --------------------------------------------------------------------------
function initStatsCounter() {
  const statElements = document.querySelectorAll('[data-counter-target]');
  if (statElements.length === 0) return;

  let hasAnimated = false;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !hasAnimated) {
        hasAnimated = true;
        statElements.forEach(el => {
          const target = parseInt(el.getAttribute('data-counter-target'), 10);
          const suffix = el.getAttribute('data-counter-suffix') || '';
          animateNumber(el, target, suffix, 1600);
        });
      }
    });
  }, { threshold: 0.5 });

  const statsSection = document.getElementById('stats-section');
  if (statsSection) observer.observe(statsSection);
}

function animateNumber(element, target, suffix, duration) {
  let start = 0;
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easeProgress = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(start + (target - start) * easeProgress);

    element.textContent = `${current}${suffix}`;

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      element.textContent = `${target}${suffix}`;
    }
  }

  requestAnimationFrame(update);
}

// --------------------------------------------------------------------------
// 11. Back to Top
// --------------------------------------------------------------------------
function initBackToTop() {
  const btn = document.getElementById('back-to-top-btn');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-4');
      btn.classList.add('opacity-100', 'translate-y-0');
    } else {
      btn.classList.add('opacity-0', 'pointer-events-none', 'translate-y-4');
      btn.classList.remove('opacity-100', 'translate-y-0');
    }
  }, { passive: true });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

function initLucideIcons() {
  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    window.lucide.createIcons();
  }
}
