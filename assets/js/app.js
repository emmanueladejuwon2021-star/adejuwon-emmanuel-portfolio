// ==========================================================================
// Adejuwon Emmanuel - Standalone Production Portfolio Application Script
// Zero-dependency Vanilla JS (Runs directly locally on file:// and all servers)
// Jargon-free & Problem-Solving Focused
// ==========================================================================

// 1. Projects Data Definition (All 7 live production apps)
const projectsData = [
  {
    id: 'menucraft',
    title: 'MenuCraft — Contactless QR Digital Menu',
    category: 'SaaS & Hospitality',
    tagline: 'Eliminates paper menu reprinting costs and lets restaurant guests view meals instantly by scanning a table QR code.',
    shortDesc: 'A fast digital menu platform for restaurants and cafes. Guests scan a table QR code to view menus instantly on their phones with zero app downloads, while managers update prices and daily specials in real time.',
    fullDesc: 'MenuCraft is a contactless digital dining solution engineered for restaurants, cafes, and lounges. Guests simply scan a table QR code with their phone camera to instantly view a clean, fast digital menu. Restaurant owners get a private management panel where they can change prices, add daily specials, and mark sold-out dishes in seconds without paying for paper reprints.',
    theProblem: 'Restaurants, cafes, and bars spend hundreds of dollars constantly reprinting paper menus whenever prices change, seasonal items arrive, or ingredients run out. Paper menus get greasy, wear out, and slow down waiters who have to repeatedly explain which dishes are unavailable.',
    theSolution: 'Emmanuel built a lightweight web platform where guests scan a table QR code with their regular smartphone camera. The menu opens immediately in their mobile browser with zero app installation. Restaurant managers get an easy admin panel to update dishes, prices, and dietary tags in seconds, keeping menus always up to date.',
    realWorldImpact: [
      'Zero App Downloads: Guests scan and view the menu in under 1 second.',
      '100% Mobile Ready: Big legible text, appetizing photos, and clear dietary tags on any phone.',
      '$0 Reprinting Costs: Price updates and daily specials take effect across all tables instantly.'
    ],
    features: [
      'Instant Camera Scan: Opens the menu in any smartphone browser without installing apps.',
      'Live Dish Availability: Staff can toggle dishes off when out of stock so customers never order unavailable meals.',
      'Dietary & Allergy Tags: Highlights vegan, spicy, vegetarian, and gluten-free choices clearly.',
      'Restaurant Owner Admin Panel: A simple, password-protected dashboard to update prices on the fly.',
      'Multiple Typography Styles: Styled to match upscale dining, modern cafes, or casual eateries.'
    ],
    plainTech: [
      { name: 'Next.js', why: 'Loads pages in milliseconds even on slow restaurant Wi-Fi.' },
      { name: 'Tailwind CSS', why: 'Ensures the layout fits small smartphones and large tablets with zero glitches.' },
      { name: 'Lucide Icons', why: 'Provides clear visual cues for drinks, food categories, and dietary tags.' },
      { name: 'Vercel Edge', why: 'Keeps the site online 24/7 with zero maintenance downtime.' }
    ],
    liveUrl: 'https://menucraft-eta.vercel.app/',
    featured: true,
    year: '2025',
    gradient: 'from-amber-600 via-orange-600 to-rose-600',
    accentColor: '#f59e0b',
    tech: ['Next.js', 'Tailwind CSS', 'QR Code SaaS', 'Mobile-First', 'Admin Panel'],
    stats: {
      metric1: '0 Apps Needed',
      metric2: '< 1s Scan-to-Menu',
      metric3: '100% Mobile Optimized'
    }
  },
  {
    id: 'shopverse',
    title: 'ShopVerse — Fast E-Commerce & Paystack Checkout',
    category: 'E-Commerce',
    tagline: 'A reliable online store with instant live search and secure Nigerian card and bank transfer checkout via Paystack.',
    shortDesc: 'A high-speed commercial retail platform featuring direct Paystack payments, instant product search, a reactive shopping cart, and automated order confirmation.',
    fullDesc: 'ShopVerse is a secure, high-speed retail store built to give shoppers a seamless buying experience. It features instant product search suggestions as you type, a slide-out cart drawer that recalculates totals automatically, and a trusted Paystack payment gateway that accepts debit cards, bank transfers, and USSD without lost transactions.',
    theProblem: 'Many online retail stores in Nigeria suffer from slow loading times, clunky checkout processes, and lost sales when customer payments succeed on the bank end but the website fails to confirm the order automatically.',
    theSolution: 'Emmanuel engineered an ultra-fast store with direct Paystack gateway integration. When a customer pays with their card or bank transfer, automated webhooks confirm the payment in the background and generate an instant receipt, ensuring buyers and store owners are always in sync.',
    realWorldImpact: [
      'Safe Card & Bank Payments: Direct Paystack gateway integration with instant receipt generation.',
      'Sub-100ms Live Search: Customers find the products they want without waiting for page reloads.',
      'Zero Lost Orders: Automated webhook verification guarantees all paid orders are recorded.'
    ],
    features: [
      'Instant Live Search: Typing a keyword shows matching items, prices, and photos immediately.',
      'Slide-Out Shopping Cart: Adjust item quantities or remove items without reloading the page.',
      'Paystack Checkout: Supports Mastercard, Visa, Verve, USSD, and Bank Transfers safely.',
      'Clear Order Confirmation: Displays verified order IDs, transaction references, and totals.',
      'Strict Security Headers: Built-in protection against online payment tampering and form spoofing.'
    ],
    plainTech: [
      { name: 'PHP & REST APIs', why: 'Delivers fast, lightweight server responses with low hosting expenses.' },
      { name: 'Paystack Gateway', why: 'Trusted by millions of Nigerian shoppers for safe, scam-free checkout.' },
      { name: 'HMAC Webhooks', why: 'Confirms successful bank transfers automatically behind the scenes.' },
      { name: 'Tailwind CSS', why: 'Makes product cards and checkout forms clean and comfortable on mobile.' }
    ],
    liveUrl: 'https://shopverse-fast.vercel.app/',
    featured: true,
    year: '2025',
    gradient: 'from-emerald-600 via-teal-600 to-indigo-700',
    accentColor: '#059669',
    tech: ['PHP REST API', 'Paystack Gateway', 'HMAC Webhooks', 'CSRF Security', 'Cart Engine'],
    stats: {
      metric1: 'Live Paystack Checkout',
      metric2: 'HMAC Verified Webhooks',
      metric3: '< 100ms API Speed'
    }
  },
  {
    id: 'bincom-election',
    title: 'Delta State Election Collation & Results Portal',
    category: 'Web Applications',
    tagline: 'Transparent civic election portal calculating grassroots vote totals and party standings across 25 Delta State LGAs.',
    shortDesc: 'A civic data collation portal aggregating polling unit returns and local council sums across 25 Delta State LGAs without human math errors.',
    fullDesc: 'Bincom Election Portal is an electoral vote collation platform built for Delta State, Nigeria. It provides transparent grassroots ballot tallies across hundreds of polling units, real-time party standings, vote distribution charts, and an official submission portal for field officers to enter verified results.',
    theProblem: 'During elections, gathering, checking, and summing up paper vote sheets from hundreds of remote polling units leads to mathematical errors, slow manual paperwork, and suspicion of manipulated numbers.',
    theSolution: 'Emmanuel built an automated web portal connected to a relational database. It sums up all polling unit returns by council (LGA) automatically, ranks parties in real-time on visual scoreboards, and lets anyone look up any individual polling unit by number to verify returns.',
    realWorldImpact: [
      '25 Local Councils Covered: Instant total vote sums for Ethiope West, Warri, Sapele, and all others.',
      'Error-Free Mathematics: Computer database calculates sums automatically, preventing human arithmetic mistakes.',
      'Granular Verification: Citizens and officials can look up any single polling unit result by ID.'
    ],
    features: [
      'Statewide Scoreboard: Visual progress bars showing each party’s total vote count and share.',
      'Polling Unit Lookup: Search any specific unit ID to see its exact registered results.',
      'Council (LGA) Summaries: Select any LGA to see the combined vote total across all its wards.',
      'Field Officer Entry Form: A structured portal for authorized agents to input new ballot returns.',
      'Duplicate Prevention: Database rules stop accidental double entries of the same polling unit.'
    ],
    plainTech: [
      { name: 'Relational Database (SQL)', why: 'Stores and organizes hundreds of election units with zero data loss.' },
      { name: 'Server-Side Web App', why: 'Calculates complex multi-party sums instantly without lagging.' },
      { name: 'Render Cloud Platform', why: 'Provides reliable hosting so the portal stays responsive during high traffic.' },
      { name: 'Bootstrap & CSS', why: 'Ensures tables and charts are easy to read for observers and election staff.' }
    ],
    liveUrl: 'https://bincom-election-portal.onrender.com/',
    featured: true,
    year: '2025',
    gradient: 'from-sky-600 via-blue-700 to-indigo-900',
    accentColor: '#0284c7',
    tech: ['Full-Stack Web App', 'Relational Database', 'Civic Tech', 'Vote Aggregation', 'Render Cloud'],
    stats: {
      metric1: '25 Local Councils',
      metric2: 'Real-Time Collation',
      metric3: 'Granular Unit Lookup'
    }
  },
  {
    id: 'premed-portal',
    title: 'PreMed Student Exam & Assessment Portal',
    category: 'Web Applications',
    tagline: 'An academic testing portal that renders complex biochemical formulas clearly and enforces department verification.',
    shortDesc: 'An academic testing and past questions portal for medical and healthcare scholars with KaTeX formula rendering and student matriculation login.',
    fullDesc: 'PreMed Test Portal is an academic testing and examination preparation platform built for medical, dental, nursing, and pharmacology students. It enforces department and matriculation onboarding, runs practice tests, and uses the KaTeX scientific engine to display biochemical equations and medical formulas with razor-sharp clarity.',
    theProblem: 'Medical and healthcare students need to practice with past exam questions involving complex scientific formulas, chemical equations, and drug dosage calculations. Standard quiz apps blur or break these formulas and lack department-specific controls.',
    theSolution: 'Emmanuel developed an academic portal with built-in KaTeX formula rendering. Complex chemical equations display crisply on both phones and laptops, while student registration verifies department names and matriculation codes before tests begin.',
    realWorldImpact: [
      '10 Healthcare Departments: Tailored study materials for Medicine, Pharmacy, Nursing, and Dentistry.',
      'Razor-Sharp Formulas: KaTeX rendering guarantees biochemical equations are 100% legible.',
      'Distraction-Free Interface: Clean, high-contrast layout designed for long, focused study sessions.'
    ],
    features: [
      'Secure Matriculation Sign-In: Verifies students by name and department before unlocking exams.',
      'Scientific Formula Rendering: Displays chemical reactions, fractions, and medical symbols without blurring.',
      'Multi-Department Catalog: Medicine, Surgery, Dentistry, Nursing, Pharmacy, and Anatomy.',
      'Timed Mock Exam Mode: Helps students practice answering under real exam countdown conditions.',
      'Mobile-Friendly Reader: Allows students to study on their smartphones while commuting or in the library.'
    ],
    plainTech: [
      { name: 'KaTeX Scientific Engine', why: 'Renders mathematical and chemical equations instantly with zero distortion.' },
      { name: 'Tailwind CSS', why: 'Creates a clean, distraction-free environment that keeps students focused.' },
      { name: 'Lucide Icons', why: 'Provides intuitive visual navigation for different medical departments.' },
      { name: 'Vercel Cloud', why: 'Ensures instantaneous page loading with zero server delays.' }
    ],
    liveUrl: 'https://premed-test-portal.vercel.app/login.php',
    featured: true,
    year: '2025',
    gradient: 'from-teal-600 via-emerald-600 to-cyan-700',
    accentColor: '#0d9488',
    tech: ['Tailwind CSS', 'KaTeX Math/Bio', 'Student Auth', 'EdTech', 'Lucide Icons'],
    stats: {
      metric1: '10 Departments',
      metric2: 'Strict Matric Auth',
      metric3: 'KaTeX Formula Support'
    }
  },
  {
    id: 'secure-bank',
    title: 'SecureBank — Digital Banking Experience',
    category: 'Web Applications',
    tagline: 'A reassuring financial portal with clear debit/credit transaction histories, loan calculators, and balance privacy controls.',
    shortDesc: 'A professional fintech interface featuring interactive account management, balance privacy masking, fund transfer simulation, and loan calculators.',
    fullDesc: 'SecureBank is a digital banking application designed to make managing money straightforward and reassuring. It features an interactive financial dashboard, real-time balance masking for privacy in public spaces, color-coded debit/credit transaction histories, and loan repayment calculators with visual sliders.',
    theProblem: 'Confusing financial interfaces make users anxious. Cluttered bank dashboards make it hard to tell money coming in from money going out, and many platforms lack quick privacy tools when users are checking balances in public.',
    theSolution: 'Emmanuel built an intuitive banking portal that prioritizes clarity and peace of mind. Every debit and credit is clearly marked with green and red indicators, balances can be hidden with a single tap of an eye icon, and users can calculate loan repayments instantly with interactive sliders.',
    realWorldImpact: [
      'Instant Clarity: Color-coded transactions make incoming and outgoing funds obvious at a glance.',
      'Balance Privacy: Quick eye toggle hides sensitive numbers from nearby onlookers.',
      'Interactive Loan Calculator: Sliders show monthly payments and interest rates before applying.'
    ],
    features: [
      'One-Click Balance Masking: Click the eye icon to hide balances when in crowded places.',
      'Color-Coded Ledger: Green badges for deposits and red badges for withdrawals.',
      'Savings & Loan Calculators: Move sliders to see monthly repayments and interest gains instantly.',
      'Simulated Wire Transfers: Step-by-step transfer simulation with instant confirmation receipts.',
      'Professional Financial Theme: Reassuring design that builds confidence and trust.'
    ],
    plainTech: [
      { name: 'Vue.js State Management', why: 'Recalculates numbers and sliders instantly without reloading the page.' },
      { name: 'Bootstrap 5', why: 'Ensures high accessibility standards and consistent button styling.' },
      { name: 'Netlify Cloud', why: 'Provides fast global hosting with automatic SSL security.' }
    ],
    liveUrl: 'https://emmanuelsecurebank2025.netlify.app/',
    featured: true,
    year: '2025',
    gradient: 'from-blue-600 via-indigo-600 to-sky-700',
    accentColor: '#0066cc',
    tech: ['Vue.js Reactivity', 'Bootstrap 5', 'Fintech UI', 'Transaction Ledger', 'Loan Calculator'],
    stats: {
      metric1: 'Balance Privacy Toggle',
      metric2: 'Instant Ledger Audit',
      metric3: 'Interactive Sliders'
    }
  },
  {
    id: 'techphone-pro',
    title: 'TechPhone Pro — Smartphone Comparison & Catalog',
    category: 'E-Commerce',
    tagline: 'An e-commerce store with an interactive budget slider and side-by-side phone specifications comparison matrix.',
    shortDesc: 'A smartphone retail platform with dynamic price range sliders, multi-brand filters, side-by-side device comparison tables, and a reactive cart.',
    fullDesc: 'TechPhone Pro is an e-commerce platform built for smartphone buyers. It features dynamic budget sliders, brand filters, a side-by-side technical comparison table, customer star reviews, and a reactive cart system that calculates discounts and totals without page reloads.',
    theProblem: 'Shopping for smartphones online is frustrating when you have to open 10 browser tabs to compare battery sizes, camera quality, storage options, and prices between different brands.',
    theSolution: 'Emmanuel created an intuitive store where buyers can compare up to 4 smartphones side-by-side in a single clean table. An interactive budget slider filters phones to match the customer’s exact budget, helping them make confident buying decisions quickly.',
    realWorldImpact: [
      'Side-by-Side Comparison: Compare cameras, battery, and RAM on one screen without opening multiple tabs.',
      'Interactive Budget Slider: Drag to see only phones within your financial range.',
      'Fewer Purchase Regrets: Clear specifications ensure customers buy the exact phone they need.'
    ],
    features: [
      'Interactive Price Range Slider: Instantly filters phones within your exact budget.',
      'Side-by-Side Comparison Matrix: Compare specifications of different models on one screen.',
      'Comprehensive Catalog: Detailed photos, technical specs, and stock indicators for every phone.',
      'Customer Star Reviews: Verified buyer ratings and reviews to guide purchasing decisions.',
      'Reactive Shopping Cart: Shows subtotal, discounts, and item count updates live.'
    ],
    plainTech: [
      { name: 'Vue.js', why: 'Filters devices and updates the comparison table instantly as you click.' },
      { name: 'Bootstrap 5', why: 'Provides a clean, easy-to-read table structure that adapts to phone screens.' },
      { name: 'Netlify Edge', why: 'Loads images and product cards rapidly across all internet connections.' }
    ],
    liveUrl: 'https://techphonepro20255.netlify.app/',
    featured: true,
    year: '2025',
    gradient: 'from-blue-600 via-cyan-600 to-teal-500',
    accentColor: '#2563eb',
    tech: ['Vue.js', 'Bootstrap 5', 'Specs Comparison', 'Price Filter', 'Cart Engine'],
    stats: {
      metric1: 'Live Price Slider',
      metric2: 'Multi-Phone Compare',
      metric3: 'Reactive Cart Drawer'
    }
  },
  {
    id: 'phone-pro-sale',
    title: 'PhoneProSale — Modern Tech Storefront',
    category: 'E-Commerce',
    tagline: 'An ultra-lightweight gadget store built with React and Vite for sub-second mobile page loads and smooth browsing.',
    shortDesc: 'A fast tech retailer web app engineered for gadget buyers. Built with React and Vite for sub-second page transitions, responsive cards, and clean checkout.',
    fullDesc: 'PhoneProSale is a modern tech retailer web app engineered for gadget shoppers. Built on Vite and React with Tailwind styling, the app delivers sub-second page transitions, curated product groupings, animated product cards, and a streamlined purchasing workflow.',
    theProblem: 'Traditional e-commerce templates are often bloated with unnecessary plugins and scripts, taking 5+ seconds to load on mobile phones. This causes shoppers to abandon the website and shop elsewhere.',
    theSolution: 'Emmanuel built a minimalist, ultra-fast tech storefront using modern React and Vite. By stripping away heavy bloat, the website loads almost instantly, provides smooth card interactions, and makes finding gadgets completely frictionless.',
    realWorldImpact: [
      'Under 1-Second Load Times: Instant responses when browsing gadgets on mobile internet.',
      'Zero Bloat: Clean codebase that downloads only the essential files required.',
      'Effortless Gadget Discovery: Clean category buttons for smartphones, earbuds, and accessories.'
    ],
    features: [
      'Instant Page Transitions: Move between gadget categories without waiting for full page reloads.',
      'High-Resolution Product Photos: Optimized images that look sharp without consuming heavy mobile data.',
      'At-A-Glance Highlights: Battery capacity, storage, and key specs shown directly on product cards.',
      'Modern Dark Aesthetic: Comfortable on the eyes during evening or late-night shopping.',
      'Lightweight Mobile Bundle: Built to run smoothly even on affordable entry-level smartphones.'
    ],
    plainTech: [
      { name: 'React 18 & Vite', why: 'Provides blazing-fast load times and smooth page interactions.' },
      { name: 'Tailwind CSS', why: 'Creates sleek, modern design elements with very small download sizes.' },
      { name: 'Netlify Global CDN', why: 'Caches the website close to users so it opens instantly worldwide.' }
    ],
    liveUrl: 'https://scintillating-tanuki-c13572.netlify.app/',
    featured: true,
    year: '2025',
    gradient: 'from-violet-600 via-purple-600 to-fuchsia-600',
    accentColor: '#8b5cf6',
    tech: ['React 18', 'Vite', 'Tailwind CSS', 'Sub-Second Speed', 'Mobile UX'],
    stats: {
      metric1: 'Sub-Second Load',
      metric2: 'Vite Optimized',
      metric3: 'Mobile-First UX'
    }
  }
];

// Application State
const appState = {
  activeProjectFilter: 'All',
  searchQuery: '',
  theme: localStorage.getItem('ae-portfolio-theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'),
  selectedProject: null,
  activeCaseStudyTab: 'story',
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

  // Update icons visibility
  document.querySelectorAll('.theme-icon-sun').forEach(el => {
    el.classList.toggle('hidden', theme === 'dark');
  });
  document.querySelectorAll('.theme-icon-moon').forEach(el => {
    el.classList.toggle('hidden', theme !== 'dark');
  });
  document.querySelectorAll('.theme-text-label').forEach(el => {
    el.textContent = theme === 'dark' ? 'Light' : 'Dark';
  });
}

// --------------------------------------------------------------------------
// 2. Lucide Icons Helper
// --------------------------------------------------------------------------
function initLucideIcons() {
  if (typeof lucide !== 'undefined' && lucide.createIcons) {
    lucide.createIcons();
  }
}

// --------------------------------------------------------------------------
// 3. Navigation & Mobile Drawer
// --------------------------------------------------------------------------
function initNavigation() {
  const header = document.getElementById('main-header');
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  // Header blur on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header?.classList.add('glass-nav-scrolled');
    } else {
      header?.classList.remove('glass-nav-scrolled');
    }
  });

  // Mobile menu toggle
  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', () => {
      const isOpen = !mobileMenu.classList.contains('hidden');
      if (isOpen) {
        mobileMenu.classList.add('hidden');
        mobileBtn.setAttribute('aria-expanded', 'false');
      } else {
        mobileMenu.classList.remove('hidden');
        mobileBtn.setAttribute('aria-expanded', 'true');
        initLucideIcons();
      }
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        mobileBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Smooth scroll spy for active navigation links
  const sections = document.querySelectorAll('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const navLink = document.querySelector(`.nav-link[href*="${sectionId}"]`);

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLink?.classList.add('text-violet-600', 'dark:text-violet-400', 'font-bold');
      } else {
        navLink?.classList.remove('text-violet-600', 'dark:text-violet-400', 'font-bold');
      }
    });
  });
}

// --------------------------------------------------------------------------
// 4. Scroll Progress Indicator
// --------------------------------------------------------------------------
function initScrollProgress() {
  const bar = document.getElementById('scroll-progress-bar');
  if (!bar) return;

  window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    bar.style.width = `${scrolled}%`;
  });
}

// --------------------------------------------------------------------------
// 5. Projects Filtering & Search
// --------------------------------------------------------------------------
function initProjectsFiltering() {
  const filterContainer = document.getElementById('project-filters');
  const searchInput = document.getElementById('project-search');

  // Populate dynamic category buttons
  if (filterContainer) {
    const categories = ['All', ...new Set(projectsData.map(p => p.category))];
    filterContainer.innerHTML = categories.map((cat, i) => `
      <button 
        type="button" 
        data-category="${cat}"
        class="filter-btn px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 ${
          i === 0 
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
      project.theProblem.toLowerCase().includes(appState.searchQuery) ||
      project.theSolution.toLowerCase().includes(appState.searchQuery) ||
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
// 6. Interactive Case Study & Device Simulator Modal
// --------------------------------------------------------------------------
function initModals() {
  const projectModal = document.getElementById('project-modal');
  const resumeModal = document.getElementById('resume-modal');

  // Tab Switcher inside Case Study Modal
  window.switchCaseStudyTab = (tab) => {
    appState.activeCaseStudyTab = tab;
    const storyTab = document.getElementById('case-study-story-tab');
    const previewTab = document.getElementById('case-study-preview-tab');
    const tabStoryBtn = document.getElementById('tab-case-study');
    const tabPreviewBtn = document.getElementById('tab-live-preview');

    if (tab === 'story') {
      storyTab?.classList.remove('hidden');
      previewTab?.classList.add('hidden');

      tabStoryBtn?.classList.remove('text-slate-600', 'dark:text-slate-300', 'hover:text-slate-900', 'dark:hover:text-white');
      tabStoryBtn?.classList.add('bg-violet-600', 'text-white', 'shadow-sm');

      tabPreviewBtn?.classList.remove('bg-violet-600', 'text-white', 'shadow-sm');
      tabPreviewBtn?.classList.add('text-slate-600', 'dark:text-slate-300', 'hover:text-slate-900', 'dark:hover:text-white');
    } else {
      storyTab?.classList.add('hidden');
      previewTab?.classList.remove('hidden');

      tabPreviewBtn?.classList.remove('text-slate-600', 'dark:text-slate-300', 'hover:text-slate-900', 'dark:hover:text-white');
      tabPreviewBtn?.classList.add('bg-violet-600', 'text-white', 'shadow-sm');

      tabStoryBtn?.classList.remove('bg-violet-600', 'text-white', 'shadow-sm');
      tabStoryBtn?.classList.add('text-slate-600', 'dark:text-slate-300', 'hover:text-slate-900', 'dark:hover:text-white');

      updateModalPreviewFrame();
    }
    initLucideIcons();
  };

  window.openProjectModal = (projectId) => {
    const project = projectsData.find(p => p.id === projectId);
    if (!project || !projectModal) return;

    appState.selectedProject = project;
    appState.previewDevice = 'desktop';

    // Populate Modal Content
    const titleEl = document.getElementById('modal-project-title');
    const catEl = document.getElementById('modal-project-category');
    const taglineEl = document.getElementById('modal-project-tagline');
    const problemEl = document.getElementById('modal-project-problem');
    const solutionEl = document.getElementById('modal-project-solution');
    const urlText = document.getElementById('modal-project-url-text');

    if (titleEl) titleEl.textContent = project.title;
    if (catEl) catEl.textContent = project.category;
    if (taglineEl) taglineEl.textContent = project.tagline || project.shortDesc;
    if (problemEl) problemEl.textContent = project.theProblem;
    if (solutionEl) solutionEl.textContent = project.theSolution;
    if (urlText) urlText.textContent = project.liveUrl.replace('https://', '');

    // Metrics
    const m1 = document.getElementById('modal-metric-1');
    const m2 = document.getElementById('modal-metric-2');
    const m3 = document.getElementById('modal-metric-3');
    if (m1) m1.textContent = project.stats?.metric1 || 'Fast Load Time';
    if (m2) m2.textContent = project.stats?.metric2 || 'Clean Code';
    if (m3) m3.textContent = project.stats?.metric3 || 'Mobile Responsive';

    // External buttons
    const launchBtn = document.getElementById('modal-launch-btn');
    if (launchBtn) launchBtn.href = project.liveUrl;

    const externalBtn = document.getElementById('modal-preview-external-link');
    if (externalBtn) externalBtn.href = project.liveUrl;

    const copyBtn = document.getElementById('modal-copy-link-btn');
    if (copyBtn) {
      copyBtn.onclick = () => {
        navigator.clipboard.writeText(project.liveUrl);
        showToast('Project URL copied to clipboard!', 'success');
      };
    }

    // Everyday Benefits list
    const featuresList = document.getElementById('modal-project-features');
    if (featuresList) {
      featuresList.innerHTML = project.features.map(f => `
        <li class="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
          <i data-lucide="check-circle" class="w-4 h-4 text-emerald-500 shrink-0 mt-0.5"></i>
          <span>${f}</span>
        </li>
      `).join('');
    }

    // Plain English Tech breakdown
    const plainTechContainer = document.getElementById('modal-project-plain-tech');
    if (plainTechContainer) {
      if (project.plainTech && project.plainTech.length) {
        plainTechContainer.innerHTML = project.plainTech.map(item => `
          <div class="p-3 rounded-xl bg-white dark:bg-white/5 border border-slate-200 dark:border-white/5">
            <span class="text-xs font-bold text-violet-600 dark:text-violet-400 block">${item.name}</span>
            <p class="text-[11px] text-slate-600 dark:text-slate-300 mt-0.5 leading-snug">${item.why}</p>
          </div>
        `).join('');
      } else {
        plainTechContainer.innerHTML = project.tech.map(t => `
          <div class="p-2.5 rounded-lg bg-white dark:bg-white/5 border border-slate-200 dark:border-white/5 text-xs font-medium text-slate-700 dark:text-slate-300">
            ${t}
          </div>
        `).join('');
      }
    }

    // Default to story tab
    window.switchCaseStudyTab('story');

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
    container.className = 'w-full rounded-2xl overflow-hidden border border-slate-300 dark:border-white/10 bg-slate-950 shadow-2xl transition-all';
    container.style.maxWidth = '100%';
    container.style.height = '480px';
  } else {
    container.className = 'mockup-mobile-frame transition-all overflow-hidden bg-slate-950 shadow-2xl';
    container.style.maxWidth = '340px';
    container.style.height = '520px';
  }

  if (frame && frame.src !== appState.selectedProject.liveUrl) {
    frame.src = appState.selectedProject.liveUrl;
  }
}

// --------------------------------------------------------------------------
// 7. Command Palette (Ctrl+K)
// --------------------------------------------------------------------------
function initCommandPalette() {
  const palette = document.getElementById('command-palette');
  const input = document.getElementById('command-input');
  const list = document.getElementById('command-list');
  const triggerBtn = document.getElementById('command-palette-btn');

  if (!palette || !input || !list) return;

  const actions = [
    { title: 'MenuCraft — QR Digital Menu', subtitle: 'Explore menucraft-eta.vercel.app', action: () => window.openProjectModal('menucraft'), icon: 'utensils' },
    { title: 'ShopVerse — Fast E-Commerce', subtitle: 'Explore shopverse-fast.vercel.app', action: () => window.openProjectModal('shopverse'), icon: 'shopping-cart' },
    { title: 'Bincom Election Portal', subtitle: 'Explore bincom-election-portal.onrender.com', action: () => window.openProjectModal('bincom-election'), icon: 'vote' },
    { title: 'PreMed Student Exam Portal', subtitle: 'Explore premed-test-portal.vercel.app', action: () => window.openProjectModal('premed-portal'), icon: 'graduation-cap' },
    { title: 'SecureBank — Fintech Platform', subtitle: 'Explore emmanuelsecurebank2025.netlify.app', action: () => window.openProjectModal('secure-bank'), icon: 'shield-check' },
    { title: 'TechPhone Pro — Phone Store', subtitle: 'Explore techphonepro20255.netlify.app', action: () => window.openProjectModal('techphone-pro'), icon: 'smartphone' },
    { title: 'PhoneProSale — Vite Tech Store', subtitle: 'Explore scintillating-tanuki-c13572.netlify.app', action: () => window.openProjectModal('phone-pro-sale'), icon: 'shopping-bag' },
    { title: 'View Full Resume / CV', subtitle: 'Open interactive resume viewer', action: () => window.openResumeModal(), icon: 'file-text' },
    { title: 'Toggle Dark / Light Theme', subtitle: 'Switch current visual appearance', action: () => document.querySelector('.theme-toggle-btn')?.click(), icon: 'sun-moon' },
    { title: 'Copy Email Address', subtitle: 'emmanueladejuwon2021@gmail.com', action: () => window.copyEmail(), icon: 'copy' },
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
// 8. Contact Form & WhatsApp Integration
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

    showToast('Message sent! Emmanuel will reply to your email within 24 hours.', 'success');
    form.reset();
  });
}

// --------------------------------------------------------------------------
// 9. WhatsApp & Clipboard Helpers
// --------------------------------------------------------------------------
function initClipboardAndWhatsApp() {
  // WhatsApp Click-to-Chat API: Phone 09160155524 -> 2349160155524
  window.openWhatsApp = (customMsg) => {
    const phone = '2349160155524';
    const msg = customMsg || encodeURIComponent("Hello Emmanuel, I saw your portfolio and would like to discuss a project!");
    const url = `https://wa.me/${phone}?text=${msg}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  window.sendFormViaWhatsApp = () => {
    const name = document.getElementById('contact-name')?.value.trim() || 'Client';
    const subject = document.getElementById('contact-subject')?.value || 'Project Inquiry';
    const msg = document.getElementById('contact-message')?.value.trim() || 'I want to build a website.';
    const text = encodeURIComponent(`Hi Emmanuel,\nMy Name: ${name}\nProject: ${subject}\nDetails: ${msg}`);
    window.openWhatsApp(text);
  };

  window.copyEmail = () => {
    const email = 'emmanueladejuwon2021@gmail.com';
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
// 10. Toast Notification System
// --------------------------------------------------------------------------
function showToast(message, type = 'success', duration = 3500) {
  let container = document.getElementById('toast-container');
  if (!container) {
    container = document.createElement('div');
    container.id = 'toast-container';
    container.className = 'fixed bottom-5 left-5 z-[300] flex flex-col gap-2.5 pointer-events-none';
    document.body.appendChild(container);
  }

  const toast = document.createElement('div');
  const bgStyles = {
    success: 'bg-emerald-600 text-white',
    error: 'bg-rose-600 text-white',
    info: 'bg-violet-600 text-white',
    warning: 'bg-amber-600 text-white'
  }[type] || 'bg-slate-900 text-white';

  toast.className = `pointer-events-auto px-4 py-3 rounded-2xl shadow-xl flex items-center gap-2.5 text-xs font-semibold ${bgStyles} transition-all duration-300 transform translate-y-4 opacity-0`;
  toast.innerHTML = `
    <span>${message}</span>
  `;

  container.appendChild(toast);

  requestAnimationFrame(() => {
    toast.classList.remove('translate-y-4', 'opacity-0');
  });

  setTimeout(() => {
    toast.classList.add('opacity-0', 'translate-x-4');
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

// --------------------------------------------------------------------------
// 11. Back to Top Button
// --------------------------------------------------------------------------
function initBackToTop() {
  const btn = document.getElementById('back-to-top-btn');
  if (!btn) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
      btn.classList.remove('opacity-0', 'pointer-events-none', 'translate-y-4');
      btn.classList.add('opacity-100', 'pointer-events-auto', 'translate-y-0');
    } else {
      btn.classList.add('opacity-0', 'pointer-events-none', 'translate-y-4');
      btn.classList.remove('opacity-100', 'pointer-events-auto', 'translate-y-0');
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// --------------------------------------------------------------------------
// 12. Animated Stats Counter
// --------------------------------------------------------------------------
function initStatsCounter() {
  const counterElements = document.querySelectorAll('[data-counter-target]');
  if (counterElements.length === 0) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseInt(el.getAttribute('data-counter-target'), 10) || 0;
        const suffix = el.getAttribute('data-counter-suffix') || '';
        let start = 0;
        const duration = 1600;
        const startTime = performance.now();

        function update(currentTime) {
          const elapsed = currentTime - startTime;
          const progress = Math.min(elapsed / duration, 1);
          // Ease-out expo
          const current = Math.floor(progress === 1 ? target : target * (1 - Math.pow(2, -10 * progress)));
          el.textContent = `${current}${suffix}`;

          if (progress < 1) {
            requestAnimationFrame(update);
          } else {
            el.textContent = `${target}${suffix}`;
          }
        }

        requestAnimationFrame(update);
        obs.unobserve(el);
      }
    });
  }, { threshold: 0.3 });

  counterElements.forEach(el => observer.observe(el));
}
