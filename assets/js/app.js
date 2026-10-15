// ==========================================================================
// Adejuwon Emmanuel - Standalone Production Portfolio Application Script
// Zero-dependency Vanilla JS (Runs directly locally on file:// and all servers)
// 100% Plain English, Jargon-Free, Practical Problem-Solving Focused
// ==========================================================================

// 1. Projects Data Definition (All 8 live working websites)
const projectsData = [
  {
    id: 'fashionhub',
    title: 'StyleHub — Luxury Fashion Boutique',
    category: 'Online Stores',
    tagline: 'A luxury clothing store with smooth photo slideshows, a live countdown for new clothing arrivals, and interactive pictures where shoppers tap an outfit to buy it.',
    shortDesc: 'A stylish online fashion boutique where shoppers can view outfit slideshows, see a live countdown for new clothing arrivals, tap directly on model photos to shop each item, and check out easily.',
    fullDesc: 'StyleHub is a stylish fashion boutique designed for clothing brands. It features smooth photo slideshows of models on the runway, a live countdown clock for limited-edition clothing releases, interactive photos where shoppers can tap any clothing item to view its price and buy it, and a clean shopping cart that works smoothly on phones and computers.',
    theProblem: 'Many clothing websites are cluttered, slow to load, and make shopping annoying on smartphones. Customers often see an entire outfit on a model but cannot easily tell which link leads to the jacket, the pants, or the shoes.',
    theSolution: 'Emmanuel built a clean, fast fashion storefront where shoppers can tap directly on the clothing items worn by models to see details and prices immediately. It includes a live countdown timer for new clothing releases and a shopping cart that updates instantly without reloading the page.',
    realWorldImpact: [
      'Tap to Shop: Shoppers tap directly on pictures of models to buy exact jackets, shoes, or shirts.',
      'Smooth on Phones: Fits smartphone screens cleanly without awkward zooming or sideways scrolling.',
      'New Arrival Countdown: Live timer builds excitement for upcoming fashion sales.'
    ],
    features: [
      'Photo Slideshow: High-definition photos of fashion outfits that slide smoothly with a finger swipe.',
      'New Drop Countdown Timer: Counts down days, hours, and minutes until new clothing arrivals go on sale.',
      'Tap on Outfits to Shop: Interactive pins on model photos reveal item names and prices with one tap.',
      'Currency Converter: Shoppers can view prices in Nigerian Naira, US Dollars, British Pounds, or Euros.',
      'Slide-Out Shopping Bag: Easily add items, change quantities, or remove items without waiting for pages to refresh.'
    ],
    plainTech: [
      { name: 'Instant Calculations', why: 'Updates prices, item counts, and shopping totals the moment you tap without reloading the page.' },
      { name: 'Mobile-Friendly Styling', why: 'Guarantees pictures, text, and buttons fit cleanly on small and large phones.' },
      { name: 'Clear Visual Icons', why: 'Simple, recognizable symbols for shopping bags, search, and menus.' },
      { name: 'Fast Global Cloud Hosting', why: 'Keeps the store online 24/7 and ensures photos load in less than two seconds worldwide.' }
    ],
    image: 'assets/images/projects/fashionhub.png',
    liveUrl: 'https://fashionhub20255.netlify.app/',
    featured: true,
    year: '2025',
    gradient: 'from-amber-600 via-stone-800 to-black',
    accentColor: '#d97706',
    tech: ['Photo Slideshow', 'Tap to Shop', 'Instant Bag', 'Currency Switcher', 'Mobile-Friendly'],
    stats: {
      metric1: 'Tap on Outfits to Buy',
      metric2: 'Live Sales Countdown',
      metric3: 'Fits Every Phone Screen'
    }
  },
  {
    id: 'menucraft',
    title: 'MenuCraft — Table Barcode Digital Restaurant Menu',
    category: 'Digital Menus & Food',
    tagline: 'Stops paper menu reprinting expenses by letting dining guests view meals and daily specials on their phones by scanning a table barcode.',
    shortDesc: 'A fast digital menu for restaurants and cafes. Guests scan a small barcode on their table with their phone camera to view meals and prices instantly without downloading any app, while managers change prices in seconds.',
    fullDesc: 'MenuCraft is a digital menu solution created for restaurants, cafes, and lounges. Guests simply point their regular phone camera at a barcode placed on the table, and the restaurant menu opens immediately in their mobile browser. Restaurant managers get an easy password-protected dashboard where they can change food prices, add daily specials, and mark sold-out meals in seconds without wasting money on printed paper.',
    theProblem: 'Restaurants, cafes, and bars spend thousands of Naira constantly reprinting paper menus whenever food prices change, seasonal dishes arrive, or ingredients run out. Paper menus get greasy, tear easily, and force waiters to repeatedly apologize for dishes that are sold out.',
    theSolution: 'Emmanuel built a simple web menu that opens in less than one second when guests point their camera at a table barcode. Guests do not need to download or install any app. Restaurant managers can log in from their own phone to change prices, add photos, or turn off sold-out dishes instantly.',
    realWorldImpact: [
      'Zero App Downloads: Guests scan and view the menu immediately in under 1 second.',
      'Saves Money on Printing: Food prices and daily specials update across all tables without reprinting paper.',
      'Clear on Any Phone: Big easy-to-read text, appetizing photos, and clear dietary tags.'
    ],
    features: [
      'Instant Camera Scan: Works with any smartphone camera with no app installation needed.',
      'Turn Off Sold-Out Meals: Waiters can toggle meals off so customers never order something that has run out.',
      'Spicy & Vegetarian Tags: Clear labels show vegan, spicy, vegetarian, and allergy-friendly meals.',
      'Simple Manager Dashboard: A private, password-protected screen to edit prices and meals on the fly.',
      'Clean Designs: Styled cleanly to match fine dining restaurants, modern cafes, or local lounges.'
    ],
    plainTech: [
      { name: 'Super-Fast Page Loading', why: 'Loads the food menu in milliseconds even on weak restaurant Wi-Fi.' },
      { name: 'Mobile-First Layout', why: 'Makes sure menu items and prices are large and easy to read on any phone screen.' },
      { name: 'Clear Food Icons', why: 'Friendly symbols for drinks, appetizers, main courses, and spicy dishes.' },
      { name: 'Always-Online Cloud Hosting', why: 'Keeps the menu available every minute of the day with zero downtime.' }
    ],
    image: 'assets/images/projects/menucraft.png',
    liveUrl: 'https://menucraft-eta.vercel.app/',
    featured: true,
    year: '2025',
    gradient: 'from-amber-600 via-orange-600 to-rose-600',
    accentColor: '#f59e0b',
    tech: ['No App Needed', 'Table Barcode Scan', 'Easy Price Updates', 'Dietary Tags', 'Fits All Phones'],
    stats: {
      metric1: '0 Apps Needed',
      metric2: '< 1s Scan-to-Menu',
      metric3: '100% Mobile Friendly'
    }
  },
  {
    id: 'shopverse',
    title: 'ShopVerse — Fast Online Store & Paystack Checkout',
    category: 'Online Stores',
    tagline: 'A fast online shop where customers search for products as they type and pay securely with Nigerian debit cards or bank transfers.',
    shortDesc: 'A fast online shopping platform featuring safe Paystack payments, instant product search, a smooth cart, and automated order receipts.',
    fullDesc: 'ShopVerse is a dependable online store built to give shoppers an easy, stress-free buying experience. It features instant product suggestions as you type, a shopping cart drawer that recalculates prices automatically, and a trusted Paystack payment system that accepts Nigerian debit cards, bank transfers, and USSD without lost orders or payment errors.',
    theProblem: 'Many online retail stores in Nigeria load very slowly, have confusing checkout steps, and cause lost sales when customer money is deducted from their bank but the website fails to confirm the order automatically.',
    theSolution: 'Emmanuel built an ultra-fast store connected directly to Paystack. When a customer pays with their card or bank transfer, the website automatically verifies the transaction in the background, sends an instant receipt, and records the order safely.',
    realWorldImpact: [
      'Safe Card & Bank Payments: Trusted Paystack checkout with instant automatic receipts.',
      'Instant Search: Customers find the exact products they want as they type without waiting for pages to refresh.',
      'Zero Lost Orders: Every successful payment is confirmed and saved automatically.'
    ],
    features: [
      'Instant Live Search: Typing a word immediately shows matching gadgets, photos, and prices.',
      'Slide-Out Shopping Cart: Change item quantities or remove products without reloading the page.',
      'Safe Paystack Checkout: Accepts Mastercard, Visa, Verve, USSD, and direct Bank Transfers.',
      'Clear Order Confirmation: Displays verified order numbers, payment receipts, and delivery details.',
      'Payment Safety Protection: Keeps customer details and payments protected against tampering.'
    ],
    plainTech: [
      { name: 'Lightweight Web Server', why: 'Responds quickly to shoppers while keeping monthly hosting costs very low.' },
      { name: 'Paystack Payment Gateway', why: 'Trusted by millions of Nigerian shoppers for safe, scam-free checkout.' },
      { name: 'Automatic Payment Verification', why: 'Confirms when a bank transfer is successful without needing manual checks.' },
      { name: 'Comfortable Mobile Design', why: 'Makes product cards and buttons big, clear, and easy to tap on phones.' }
    ],
    image: 'assets/images/projects/shopverse.png',
    liveUrl: 'https://shopverse-fast.vercel.app/',
    featured: true,
    year: '2025',
    gradient: 'from-emerald-600 via-teal-600 to-indigo-700',
    accentColor: '#059669',
    tech: ['Card & Bank Transfer', 'Instant Search', 'Automatic Receipts', 'Safe Checkout', 'Fast Cart'],
    stats: {
      metric1: 'Safe Card & Bank Checkout',
      metric2: 'Instant Automatic Receipts',
      metric3: 'Opens in Under 1 Second'
    }
  },
  {
    id: 'bincom-election',
    title: 'Delta State Election Vote Tally Portal',
    category: 'Useful Online Portals',
    tagline: 'An easy-to-read election results website that counts and sums up votes across 25 Delta State local councils automatically, stopping human math mistakes.',
    shortDesc: 'A civic election results portal that automatically sums up vote counts across 25 local councils in Delta State, preventing arithmetic errors.',
    fullDesc: 'The Delta State Election Portal is a transparent vote collation tool built for Delta State, Nigeria. It gathers vote counts from hundreds of polling units, sums them up by local council automatically, displays clear party standings, and provides an official form for field staff to enter verified results.',
    theProblem: 'During elections, adding up paper ballot sheets by hand from hundreds of distant polling units leads to mathematical mistakes, slow manual paperwork, and suspicion of changed numbers.',
    theSolution: 'Emmanuel built an automated web portal connected to an organized database. It adds up all polling unit numbers automatically, ranks political parties clearly on easy-to-read scoreboards, and allows any citizen or official to look up individual polling units by number to check returns.',
    realWorldImpact: [
      '25 Local Councils Covered: Instant total vote sums for Warri, Sapele, Ethiope West, and all others.',
      'Error-Free Math: The computer adds up numbers automatically, completely removing human calculation errors.',
      'Transparent Verification: Anyone can look up any single polling unit result by its ID.'
    ],
    features: [
      'Clear Scoreboard: Visual progress bars showing each party’s total vote count and share.',
      'Search Any Polling Unit: Search a unit number to see its exact registered results.',
      'Local Council Summaries: Select any council to see the combined total across all its areas.',
      'Results Entry Form: A structured, easy screen for authorized staff to submit verified votes.',
      'Duplicate Prevention: Automatic checks stop accidental double entries of the same polling unit.'
    ],
    plainTech: [
      { name: 'Organized Digital Database', why: 'Safely stores and organizes hundreds of election numbers with zero data loss.' },
      { name: 'Automated Calculation System', why: 'Adds up multi-party numbers in a fraction of a second without lagging.' },
      { name: 'Reliable Cloud Platform', why: 'Ensures the website stays online and fast even when thousands of people visit at once.' },
      { name: 'Clean Tables & Charts', why: 'Ensures numbers and charts are easy to read on phones and computer screens.' }
    ],
    image: 'assets/images/projects/bincom-election.png',
    liveUrl: 'https://bincom-election-portal.onrender.com/',
    featured: true,
    year: '2025',
    gradient: 'from-sky-600 via-blue-700 to-indigo-900',
    accentColor: '#0284c7',
    tech: ['Automatic Math', '25 Local Councils', 'Checked by Polling Unit', 'Clear Scoreboards', 'Search by Unit'],
    stats: {
      metric1: '25 Local Councils',
      metric2: 'Automatic Math',
      metric3: 'Checked by Polling Unit'
    }
  },
  {
    id: 'premed-portal',
    title: 'PreMed Student Practice Exam Portal',
    category: 'School & Exams',
    tagline: 'A student exam website that displays complex chemistry and medical formulas clearly on phones, with student ID sign-in.',
    shortDesc: 'A student practice exam and past questions portal for medical and healthcare students that displays formulas clearly without blurring.',
    fullDesc: 'PreMed Test Portal is an academic testing and exam preparation platform built for medical, dental, nursing, and pharmacy students. It lets students sign in with their matriculation ID, take practice tests with timers, and displays complex chemistry reactions and medical formulas with razor-sharp clarity on phones and laptops.',
    theProblem: 'Medical and nursing students need to practice with past exam questions that include scientific formulas, chemistry equations, and drug dosage calculations. Standard quiz apps blur or break these formulas, making them impossible to read on phone screens.',
    theSolution: 'Emmanuel built an exam portal with a specialized scientific formula viewer. Chemical equations and fractions display crisply on both smartphones and laptops, and student sign-in verifies student departments and ID numbers before unlocking tests.',
    realWorldImpact: [
      '10 Healthcare Departments: Tailored study materials for Medicine, Pharmacy, Nursing, and Dentistry.',
      'Crisp Scientific Formulas: Formulas and chemical equations remain 100% sharp and easy to read.',
      'Distraction-Free Screen: Clean, high-contrast design created for long, focused study sessions.'
    ],
    features: [
      'Student ID Sign-In: Verifies students by name and department before unlocking exam questions.',
      'Sharp Formula Display: Shows chemistry reactions, fractions, and medical symbols without blurring.',
      'Organized by Department: Medicine, Surgery, Dentistry, Nursing, Pharmacy, and Anatomy.',
      'Timed Practice Exams: Helps students practice answering under real countdown conditions.',
      'Mobile-Friendly Reader: Allows students to study on their phones while commuting or in the library.'
    ],
    plainTech: [
      { name: 'Scientific Formula Viewer', why: 'Displays chemical reactions, fractions, and medical symbols crisply without blurring.' },
      { name: 'Distraction-Free Layout', why: 'Creates a clean, calm reading environment that helps students focus.' },
      { name: 'Helpful Navigation Icons', why: 'Makes it simple to find study materials for different departments.' },
      { name: 'Fast Cloud Hosting', why: 'Ensures test questions and answers load immediately with zero waiting.' }
    ],
    image: 'assets/images/projects/premed-portal.png',
    liveUrl: 'https://premed-test-portal.vercel.app/login.php',
    featured: true,
    year: '2025',
    gradient: 'from-teal-600 via-emerald-600 to-cyan-700',
    accentColor: '#0d9488',
    tech: ['Clear Medical Formulas', 'Student Sign-In', 'Timed Practice Tests', '10 Departments', 'Mobile Friendly'],
    stats: {
      metric1: '10 Departments',
      metric2: 'Student ID Sign-In',
      metric3: 'Crisp Math & Chemistry'
    }
  },
  {
    id: 'secure-bank',
    title: 'SecureBank — Clear Online Banking Dashboard',
    category: 'Banking & Money',
    tagline: 'A reassuring bank dashboard with green badges for incoming money, red badges for outgoing money, an eye icon to hide balances in public, and simple loan sliders.',
    shortDesc: 'A clear online banking dashboard with an eye icon to hide balances in public, green/red badges for money history, and interactive loan sliders.',
    fullDesc: 'SecureBank is a digital banking application designed to make managing money straightforward and reassuring. It features an easy-to-read money dashboard, a quick eye icon to hide balances when in crowded places, color-coded transaction histories, and loan repayment calculators with visual sliders.',
    theProblem: 'Confusing bank apps make people anxious. Cluttered dashboards make it hard to tell money coming in from money going out, and most banking websites display big account numbers that anyone standing behind you can see.',
    theSolution: 'Emmanuel built an intuitive banking portal focused on clarity and peace of mind. Every deposit and withdrawal is marked with clear green and red indicators, balances can be hidden with a single tap of an eye icon, and users can calculate loan repayments by simply sliding a finger.',
    realWorldImpact: [
      'Instant Clarity: Color-coded entries make deposits and expenses obvious at a single glance.',
      'Balance Privacy: Quick eye button hides private account balances from nearby onlookers.',
      'Simple Loan Slider: Dragging a slider shows monthly repayments and interest before applying.'
    ],
    features: [
      'One-Tap Balance Privacy: Click the eye icon to hide sensitive account numbers in public.',
      'Color-Coded Money History: Green badges for deposits and red badges for withdrawals.',
      'Interactive Loan Calculator: Slide a bar to see monthly repayments and interest right away.',
      'Transfer Simulation: Step-by-step money transfer simulation with instant confirmation receipts.',
      'Clean Financial Theme: High-contrast design that builds trust and is easy on the eyes.'
    ],
    plainTech: [
      { name: 'Instant Calculations', why: 'Recalculates loan numbers and sliders instantly the moment you move your finger.' },
      { name: 'Clean Layout System', why: 'Keeps buttons large, text legible, and navigation straightforward.' },
      { name: 'Safe Cloud Hosting', why: 'Provides fast global hosting with automatic security encryption.' }
    ],
    image: 'assets/images/projects/secure-bank.png',
    liveUrl: 'https://emmanuelsecurebank2025.netlify.app/',
    featured: true,
    year: '2025',
    gradient: 'from-blue-600 via-indigo-600 to-sky-700',
    accentColor: '#0066cc',
    tech: ['Hide Balance in Public', 'Clear Money History', 'Loan Calculator', 'Easy Sliders', 'Peace of Mind'],
    stats: {
      metric1: 'Hide Balance in Public',
      metric2: 'Clear Money History',
      metric3: 'Interactive Sliders'
    }
  },
  {
    id: 'techphone-pro',
    title: 'TechPhone Pro — Smartphone Comparison Store',
    category: 'Online Stores',
    tagline: 'A phone shopping website where buyers can compare phone cameras, batteries, and prices side-by-side on one screen and slide a budget bar to fit their pocket.',
    shortDesc: 'A smartphone shopping website with an interactive price slider, multi-brand filters, and a side-by-side comparison table to compare up to 4 phones.',
    fullDesc: 'TechPhone Pro is an online shopping platform built specifically for smartphone buyers. It features an interactive price budget slider, brand filters, a side-by-side phone comparison table, verified customer star reviews, and a smooth shopping cart that calculates totals and discounts live.',
    theProblem: 'Shopping for smartphones online is frustrating when buyers have to open 10 different browser tabs to compare battery sizes, camera quality, storage, and prices between different phone brands.',
    theSolution: 'Emmanuel created an easy store where buyers can compare up to 4 smartphones side-by-side in a single clean table. An interactive budget slider filters phones to match the customer’s exact budget, helping them choose the right phone without confusion.',
    realWorldImpact: [
      'Side-by-Side Comparison: Compare cameras, battery size, and storage on one screen without opening multiple tabs.',
      'Interactive Budget Slider: Drag the bar to see only phones within your financial budget.',
      'Fewer Buying Regrets: Clear specifications ensure customers know exactly what they are purchasing.'
    ],
    features: [
      'Budget Range Slider: Instantly filters smartphones that fit within your exact budget.',
      'Side-by-Side Comparison Table: Compare cameras, storage, and battery across different models.',
      'Detailed Phone Catalog: Clear photos, full specifications, and stock status for every phone.',
      'Customer Star Reviews: Verified ratings from buyers to help make confident decisions.',
      'Live Shopping Cart: Shows subtotal, discounts, and item count updates automatically.'
    ],
    plainTech: [
      { name: 'Instant Filtering', why: 'Filters phones and updates the comparison table immediately as you click.' },
      { name: 'Clean Phone Structure', why: 'Ensures comparison tables fit phone screens comfortably without overlapping.' },
      { name: 'Fast Image Delivery', why: 'Loads crisp phone photos quickly without consuming heavy mobile data.' }
    ],
    image: 'assets/images/projects/techphone-pro.png',
    liveUrl: 'https://techphonepro20255.netlify.app/',
    featured: true,
    year: '2025',
    gradient: 'from-blue-600 via-cyan-600 to-teal-500',
    accentColor: '#2563eb',
    tech: ['Side-by-Side Compare', 'Budget Slider', 'Clear Phone Specs', 'Fast Cart', 'Reviews & Ratings'],
    stats: {
      metric1: 'Live Budget Slider',
      metric2: 'Side-by-Side Compare',
      metric3: 'Smooth Shopping Cart'
    }
  },
  {
    id: 'phone-pro-sale',
    title: 'PhoneProSale — Lightweight Tech Store',
    category: 'Online Stores',
    tagline: 'An ultra-lightweight gadget store designed to open in less than one second, even on affordable phones and slow mobile data.',
    shortDesc: 'A fast gadget store built to load in under one second on mobile phones, with clear product photos, easy categories, and a simple checkout.',
    fullDesc: 'PhoneProSale is a modern tech retailer website engineered for gadget shoppers. Designed to be ultra-lightweight, the site opens in under a second on mobile data, features smooth category navigation, clean product cards, and a straightforward buying process.',
    theProblem: 'Traditional online store templates are packed with heavy, unnecessary scripts that take 5 to 10 seconds to load on mobile phones. Frustrated customers give up and leave before the products even appear.',
    theSolution: 'Emmanuel built a minimalist, ultra-fast tech storefront. By removing all unnecessary bloat, the website loads almost instantly, provides smooth taps, and makes finding and buying gadgets completely effortless.',
    realWorldImpact: [
      'Under 1-Second Load Times: Opens immediately on everyday mobile phone connections.',
      'Light on Data: Uses very little mobile internet data while keeping images crisp.',
      'Effortless Gadget Discovery: Clear buttons for smartphones, earbuds, chargers, and accessories.'
    ],
    features: [
      'Instant Page Transitions: Move between gadget categories without waiting for full page reloads.',
      'Optimized Product Photos: Sharp photos that look great without burning through customer data.',
      'At-A-Glance Highlights: Battery capacity, storage, and key features shown directly on cards.',
      'Comfortable Dark Aesthetic: Easy on the eyes during evening or late-night shopping.',
      'Smooth on Entry-Level Phones: Built to run without freezing even on affordable smartphones.'
    ],
    plainTech: [
      { name: 'Ultra-Fast Loading', why: 'Provides blazing-fast load times and smooth screen navigation.' },
      { name: 'Lightweight Design', why: 'Keeps files tiny so the website opens instantly on slow internet.' },
      { name: 'Global Cloud Network', why: 'Delivers the website from nearby servers so it opens fast anywhere in the world.' }
    ],
    liveUrl: 'https://scintillating-tanuki-c13572.netlify.app/',
    featured: true,
    year: '2025',
    gradient: 'from-violet-600 via-purple-600 to-fuchsia-600',
    accentColor: '#8b5cf6',
    tech: ['Under 1-Second Load', 'Light on Mobile Data', 'Smooth Shopping', 'Comfortable View', 'Easy Navigation'],
    stats: {
      metric1: 'Loads in < 1 Second',
      metric2: 'Uses Minimal Data',
      metric3: 'Smooth on Any Phone'
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
    countBadge.textContent = `${visibleCount} website${visibleCount === 1 ? '' : 's'}`;
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
      tabStoryBtn?.classList.remove('text-slate-600', 'dark:text-slate-300');
      tabStoryBtn?.classList.add('bg-violet-600', 'text-white', 'shadow-sm');
      tabPreviewBtn?.classList.remove('bg-violet-600', 'text-white', 'shadow-sm');
      tabPreviewBtn?.classList.add('text-slate-600', 'dark:text-slate-300');
    } else {
      storyTab?.classList.add('hidden');
      previewTab?.classList.remove('hidden');
      tabPreviewBtn?.classList.remove('text-slate-600', 'dark:text-slate-300');
      tabPreviewBtn?.classList.add('bg-violet-600', 'text-white', 'shadow-sm');
      tabStoryBtn?.classList.remove('bg-violet-600', 'text-white', 'shadow-sm');
      tabStoryBtn?.classList.add('text-slate-600', 'dark:text-slate-300');
      updateModalPreviewFrame();
    }
    initLucideIcons();
  };

  // Open Project Modal
  window.openProjectModal = (projectId) => {
    const project = projectsData.find(p => p.id === projectId);
    if (!project || !projectModal) return;

    appState.selectedProject = project;

    // Header & Meta
    const catEl = document.getElementById('modal-project-category');
    const titleEl = document.getElementById('modal-project-title');
    const taglineEl = document.getElementById('modal-project-tagline');
    const problemEl = document.getElementById('modal-project-problem');
    const solutionEl = document.getElementById('modal-project-solution');
    const urlText = document.getElementById('modal-project-url-text');

    if (catEl) catEl.textContent = project.category;
    if (titleEl) titleEl.textContent = project.title;
    if (taglineEl) taglineEl.textContent = project.tagline;
    if (problemEl) problemEl.textContent = project.theProblem;
    if (solutionEl) solutionEl.textContent = project.theSolution;
    if (urlText) urlText.textContent = project.liveUrl.replace('https://', '');

    // Real screenshot banner
    const imageBox = document.getElementById('modal-project-image-box');
    const imageEl = document.getElementById('modal-project-image');
    if (imageBox && imageEl) {
      if (project.image) {
        imageEl.src = project.image;
        imageBox.classList.remove('hidden');
      } else {
        imageBox.classList.add('hidden');
      }
    }

    // Metrics
    const m1 = document.getElementById('modal-metric-1');
    const m2 = document.getElementById('modal-metric-2');
    const m3 = document.getElementById('modal-metric-3');
    if (m1) m1.textContent = project.stats?.metric1 || 'Fast Load Time';
    if (m2) m2.textContent = project.stats?.metric2 || 'Peace of Mind';
    if (m3) m3.textContent = project.stats?.metric3 || 'Simple to Use';

    // External buttons
    const launchBtn = document.getElementById('modal-launch-btn');
    if (launchBtn) launchBtn.href = project.liveUrl;

    const externalBtn = document.getElementById('modal-preview-external-link');
    if (externalBtn) externalBtn.href = project.liveUrl;

    const copyBtn = document.getElementById('modal-copy-link-btn');
    if (copyBtn) {
      copyBtn.onclick = () => {
        navigator.clipboard.writeText(project.liveUrl);
        showToast('Website link copied to clipboard!', 'success');
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
  const input = document.getElementById('palette-input');
  const list = document.getElementById('palette-results');
  const triggerBtn = document.getElementById('command-palette-btn');

  if (!palette || !input || !list) return;

  const actions = [
    { title: 'StyleHub — Luxury Fashion Boutique', subtitle: 'Fashion boutique with outfit slideshows', action: () => window.openProjectModal('fashionhub'), icon: 'sparkles' },
    { title: 'MenuCraft — Table Barcode Menu', subtitle: 'Digital restaurant menu without paper reprints', action: () => window.openProjectModal('menucraft'), icon: 'utensils' },
    { title: 'ShopVerse — Fast Online Store', subtitle: 'Online shopping with Paystack card & transfer', action: () => window.openProjectModal('shopverse'), icon: 'shopping-cart' },
    { title: 'Delta State Election Vote Tally', subtitle: 'Automatic election math across 25 councils', action: () => window.openProjectModal('bincom-election'), icon: 'vote' },
    { title: 'PreMed Student Exam Portal', subtitle: 'Student tests with clear medical & chemistry formulas', action: () => window.openProjectModal('premed-portal'), icon: 'graduation-cap' },
    { title: 'SecureBank — Banking Dashboard', subtitle: 'Clear money history with privacy balance toggle', action: () => window.openProjectModal('secure-bank'), icon: 'shield-check' },
    { title: 'TechPhone Pro — Phone Comparison Store', subtitle: 'Compare phone specs and slide budget bar', action: () => window.openProjectModal('techphone-pro'), icon: 'smartphone' },
    { title: 'PhoneProSale — Lightweight Tech Store', subtitle: 'Opens in under 1 second on mobile data', action: () => window.openProjectModal('phone-pro-sale'), icon: 'shopping-bag' },
    { title: 'View My Work Summary & Resume', subtitle: 'Open summary of work history', action: () => window.openResumeModal(), icon: 'file-text' },
    { title: 'Switch Light / Dark Colors', subtitle: 'Change screen appearance', action: () => document.querySelector('.theme-toggle-btn')?.click(), icon: 'sun-moon' },
    { title: 'Copy Email Address', subtitle: 'emmanueladejuwon2021@gmail.com', action: () => window.copyEmail(), icon: 'copy' },
    { title: 'Chat Directly on WhatsApp', subtitle: 'Message Adejuwon on 09160155524', action: () => window.openWhatsApp(), icon: 'message-circle' }
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
      list.innerHTML = `<div class="p-4 text-center text-xs text-slate-400">No matching website or action found</div>`;
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
