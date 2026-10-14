// Production Portfolio Projects Data - Adejuwon Emmanuel
export const projectsData = [
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

export const skillsData = [
  { name: 'JavaScript (ES6+)', level: 'Expert', category: 'Frontend', icon: 'code-2' },
  { name: 'TypeScript', level: 'Advanced', category: 'Frontend', icon: 'file-code' },
  { name: 'HTML5 & Semantic Markup', level: 'Expert', category: 'Frontend', icon: 'layout' },
  { name: 'Tailwind CSS', level: 'Expert', category: 'Frontend', icon: 'palette' },
  { name: 'React & Next.js', level: 'Advanced', category: 'Frontend', icon: 'atom' },
  { name: 'Vue.js', level: 'Intermediate', category: 'Frontend', icon: 'layers' },
  { name: 'Bootstrap 5', level: 'Expert', category: 'Frontend', icon: 'box' },
  { name: 'Node.js & Express', level: 'Advanced', category: 'Backend', icon: 'server' },
  { name: 'PHP & Serverless', level: 'Advanced', category: 'Backend', icon: 'terminal' },
  { name: 'RESTful API Design', level: 'Advanced', category: 'Backend', icon: 'network' },
  { name: 'PostgreSQL & MySQL', level: 'Intermediate', category: 'Database', icon: 'database' },
  { name: 'KaTeX & Formula Parsing', level: 'Advanced', category: 'Tools', icon: 'sigma' },
  { name: 'Git & GitHub Workflows', level: 'Expert', category: 'Tools', icon: 'git-branch' },
  { name: 'Vite & Build Tools', level: 'Advanced', category: 'Tools', icon: 'zap' },
  { name: 'Vercel, Render & Netlify', level: 'Expert', category: 'Cloud', icon: 'cloud' }
];

export const testimonialsData = [
  {
    name: 'Sarah Johnson',
    role: 'Founder, Bloom & Co',
    text: "Emmanuel didn't just deliver a website — he brought our entire digital vision to life with precision. The responsiveness, smooth micro-interactions, and speed are simply phenomenal.",
    rating: 5,
    avatar: 'S'
  },
  {
    name: 'David Okafor',
    role: 'CEO, NexaStart Solutions',
    text: "What sets Emmanuel apart is his obsessive care for user experience. He spotted nuances in our banking and checkout requirements that others missed. Truly world-class developer.",
    rating: 5,
    avatar: 'D'
  },
  {
    name: 'Amara Williams',
    role: 'Product Lead, Luxe Digital',
    text: "From architecture to final deployment, Emmanuel worked like a dedicated partner. His mastery of modern Tailwind CSS and fast JavaScript made our conversion rate soar by 140%.",
    rating: 5,
    avatar: 'A'
  },
  {
    name: 'Dr. Michael Chen',
    role: 'Academic Director, MedTech Systems',
    text: "The student examination portal Emmanuel created with KaTeX integration transformed our testing workflow. Smooth, bulletproof under load, and remarkably intuitive.",
    rating: 5,
    avatar: 'M'
  }
];

export const experienceData = [
  {
    year: '2024 — Present',
    role: 'Senior Frontend & Web Developer',
    company: 'Independent Consultant / Freelance',
    description: 'Engineering production-ready web applications, e-commerce storefronts, SaaS platforms (MenuCraft, ShopVerse), and civic/ed-tech systems for international clients. Focused on speed, clean vanilla & framework JS, and accessible UI.'
  },
  {
    year: '2023 — 2024',
    role: 'Web Applications Developer',
    company: 'Creative Digital Agency',
    description: 'Designed and deployed responsive web portals, financial dashboards (SecureBank), and election collation systems (Bincom Delta Portal) using modern Tailwind CSS and reactive frontend frameworks.'
  },
  {
    year: '2022 — 2023',
    role: 'Frontend Developer',
    company: 'Tech Innovations Lab',
    description: 'Developed modern e-commerce catalogs (TechPhone Pro, PhoneProSale), optimized core web vitals, and engineered cross-browser interactive interfaces.'
  }
];
