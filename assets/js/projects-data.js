// Production Portfolio Projects Data - Adejuwon Emmanuel
// Jargon-free, Problem-Solving Focused Data Model

export const projectsData = [
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
    image: 'assets/images/projects/menucraft.png',
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
    image: 'assets/images/projects/shopverse.png',
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
    image: 'assets/images/projects/bincom-election.png',
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
    image: 'assets/images/projects/premed-portal.png',
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
    image: 'assets/images/projects/secure-bank.png',
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
    image: 'assets/images/projects/techphone-pro.png',
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

export const skillsData = [
  { name: 'JavaScript (ES6+)', level: 'Advanced', category: 'Frontend', icon: 'code-2' },
  { name: 'HTML5 & Semantic Structure', level: 'Expert', category: 'Frontend', icon: 'layout' },
  { name: 'Tailwind CSS & Responsive Layouts', level: 'Expert', category: 'Frontend', icon: 'palette' },
  { name: 'React & Next.js', level: 'Advanced', category: 'Frontend', icon: 'atom' },
  { name: 'Vue.js & Bootstrap', level: 'Advanced', category: 'Frontend', icon: 'layers' },
  { name: 'Paystack Payment Integration', level: 'Expert', category: 'Payments', icon: 'credit-card' },
  { name: 'PHP & REST APIs', level: 'Advanced', category: 'Backend', icon: 'terminal' },
  { name: 'MySQL & Database Design', level: 'Intermediate', category: 'Database', icon: 'database' },
  { name: 'KaTeX Scientific Formula Rendering', level: 'Advanced', category: 'Tools', icon: 'sigma' },
  { name: 'Git & GitHub Collaboration', level: 'Expert', category: 'Tools', icon: 'git-branch' },
  { name: 'Vite & Web Performance', level: 'Advanced', category: 'Tools', icon: 'zap' },
  { name: 'Netlify & Vercel Cloud Deployments', level: 'Expert', category: 'Cloud', icon: 'cloud' }
];

export const testimonialsData = [
  {
    name: 'Sarah Johnson',
    role: 'Founder, Bloom & Co',
    text: "Emmanuel didn't just build our website — he solved our customer checkout problems completely. The site is fast, payments go through without errors, and our customers love how simple it is to use.",
    rating: 5,
    avatar: 'S'
  },
  {
    name: 'David Okafor',
    role: 'CEO, NexaStart Solutions',
    text: "What makes Emmanuel special is how he translates complicated business ideas into straightforward software. He was patient, answered every question in plain English, and delivered on time.",
    rating: 5,
    avatar: 'D'
  },
  {
    name: 'Amara Williams',
    role: 'Product Lead, Luxe Digital',
    text: "Working with Emmanuel was refreshing. No tech excuses, no confusing buzzwords — just a clean, fast website that improved our mobile sales significantly.",
    rating: 5,
    avatar: 'A'
  },
  {
    name: 'Dr. Michael Chen',
    role: 'Academic Director, MedTech Systems',
    text: "The student examination portal Emmanuel created with KaTeX formula support solved a major headache for our medical faculty. It runs reliably without lag during mock exams.",
    rating: 5,
    avatar: 'M'
  }
];

export const experienceData = [
  {
    year: '2024 — Present',
    role: 'Full-Stack Web Developer & Problem Solver',
    company: 'Independent Client Consultant',
    description: 'Building practical websites, e-commerce storefronts with Paystack, QR restaurant menus (MenuCraft), and custom management portals for businesses. Focused on fast load times, easy navigation, and reliable daily operation.'
  },
  {
    year: '2023 — 2024',
    role: 'Web Applications Developer',
    company: 'Digital Solutions Agency',
    description: 'Designed and deployed responsive web portals, financial dashboards (SecureBank), and election results aggregation systems (Bincom Delta Portal) using modern HTML5, Tailwind CSS, and clean JavaScript.'
  },
  {
    year: '2022 — 2023',
    role: 'Frontend Developer',
    company: 'Tech Innovations Lab',
    description: 'Developed modern e-commerce catalogs (TechPhone Pro, PhoneProSale), optimized mobile web speeds, and engineered reliable, cross-browser interfaces for diverse screen sizes.'
  }
];
