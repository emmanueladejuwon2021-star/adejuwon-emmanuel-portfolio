export interface PlainTechItem {
  name: string;
  why: string;
}

export interface ProjectStats {
  metric1: string;
  metric2: string;
  metric3: string;
}

export interface Project {
  id: string;
  title: string;
  category: string;
  tagline: string;
  shortDesc: string;
  fullDesc: string;
  theProblem: string;
  theSolution: string;
  realWorldImpact: string[];
  features: string[];
  plainTech: PlainTechItem[];
  image: string;
  liveUrl: string;
  featured: boolean;
  year: string;
  gradient: string;
  accentColor: string;
  tech: string[];
  stats: ProjectStats;
}

export interface Service {
  number: string;
  title: string;
  description: string;
  features: string[];
}

export interface ExperienceItem {
  year: string;
  role: string;
  company: string;
  description: string;
}

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  rating: number;
}

export interface TechItem {
  name: string;
  category: string;
  icon?: string;
  level?: 'Expert' | 'Advanced' | 'Intermediate';
  description?: string;
}

export const personalInfo = {
  name: 'Adejuwon Emmanuel',
  firstName: 'Adejuwon',
  lastName: 'Emmanuel',
  title: 'Website Builder & Problem Solver',
  tagline: 'I build clean, fast, and easy-to-use websites that solve real business problems.',
  subtitle: 'Whether you need an online store that accepts card and bank payments, a digital restaurant menu, or a custom portal to manage your team or school, I build software that works reliably on every phone, tablet, and computer.',
  location: 'Lagos, Nigeria',
  email: 'emmanueladejuwon2021@gmail.com',
  phone: '+234 916 015 5524',
  whatsappNumber: '2349160155524',
  whatsappDisplay: '09160155524',
  whatsappUrl: 'https://wa.me/2349160155524?text=Hello%20Adejuwon,%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project!',
  github: 'https://github.com/emmanueladejuwon2021-star',
  githubHandle: '@emmanueladejuwon2021-star',
  linkedin: 'https://linkedin.com/in/adejuwon',
  linkedinHandle: 'Adejuwon Emmanuel',
  website: 'https://adejuwonemmanuel.vercel.app',
  availability: 'Available for high-impact projects & freelance',
};

export const aboutContent = {
  story: [
    `I'm Adejuwon Emmanuel, a website builder based in Lagos, Nigeria. Over the past several years, I have built practical online stores, management portals, and custom web tools for businesses and schools.`,
    `My work includes MenuCraft (a table barcode menu that saves restaurants money on paper reprinting), ShopVerse (an online store that accepts card and bank transfer payments via Paystack), civic portals like the Delta State Election Results Portal, and student study tools like PreMed Practice Exam Portal.`,
    `Instead of confusing you with technical jargon, I focus on what actually helps your business: fast load times on cheap mobile data, straightforward navigation, and a checkout or signup process that never frustrates your customers.`,
    `I believe good websites are simple: they solve your business headache, load in a flash on mobile phones, and are effortless for everyday people to use.`,
  ],
  principles: [
    {
      title: 'Listening First, Building Second',
      description: 'I listen carefully to your business needs and build the simplest, most reliable solution without confusing buzzwords.',
      icon: 'lightbulb'
    },
    {
      title: 'Fast on Cheap Mobile Data',
      description: 'Most of your customers are on mobile phones. Every website I build loads in under 2 seconds and fits screens naturally.',
      icon: 'smartphone'
    },
    {
      title: 'Honest Advice & Clear English',
      description: 'Clear communication in plain English, tested payment setups, and websites that keep working smoothly after launch.',
      icon: 'shield-check'
    }
  ],
  stats: [
    { value: '50+', label: 'Websites Completed', target: 50, suffix: '+' },
    { value: '30+', label: 'Happy Clients', target: 30, suffix: '+' },
    { value: '3+', label: 'Years Building Sites', target: 3, suffix: '+' },
    { value: '100%', label: 'Satisfaction Rate', target: 100, suffix: '%' },
  ],
};

export const techStack: TechItem[] = [
  { name: 'Clean Website Logic', category: 'Frontend', level: 'Expert', description: 'Interactive Features & Responsive State' },
  { name: 'Mobile & Screen Design', category: 'Styling', level: 'Expert', description: 'Looks Great on Any Smartphone or Monitor' },
  { name: 'Modern Web Foundations', category: 'Core', level: 'Advanced', description: 'Fast Load Times & Sub-Second Speeds' },
  { name: 'Card & Bank Payments', category: 'Integrations', level: 'Expert', description: 'Paystack, Webhooks & Automated Receipts' },
  { name: 'React & Next.js', category: 'Frameworks', level: 'Expert', description: 'Component-Based Web Applications' },
  { name: 'TypeScript', category: 'Languages', level: 'Advanced', description: 'Type-Safe Codebase & Error Prevention' },
  { name: 'Tailwind CSS', category: 'Styling', level: 'Expert', description: 'Responsive Utility-First Styling' },
  { name: 'REST & Supabase APIs', category: 'Backend', level: 'Advanced', description: 'Database Queries & Authentication' },
];

export const services: Service[] = [
  {
    number: '01',
    title: 'Online Stores with Card & Bank Payments',
    description: 'High-speed retail websites equipped with Paystack payment gateway, instant live search, cart drawers, and automated receipt generation.',
    features: ['Paystack Card & Bank Checkout', 'Live Search as You Type', 'Slide-Out Shopping Cart', 'Automated Receipts & Webhooks'],
  },
  {
    number: '02',
    title: 'Digital Restaurant Menus (QR Codes)',
    description: 'Contactless dining menus that open instantly when guests scan table barcodes with their phone cameras, saving thousands in paper reprinting costs.',
    features: ['No App Download Required', 'Instant Camera Barcode Scan', 'Password-Protected Price Manager', 'Dietary & Sold-Out Badges'],
  },
  {
    number: '03',
    title: 'Customer & Student Portals',
    description: 'Custom portal applications for schools, businesses, or civic collation. Features student ID verification, sharp scientific math formula rendering, and timed exams.',
    features: ['Matriculation / User Auth', 'KaTeX Math & Chemistry Rendering', 'Timed Tests & Auto Grading', 'Error-Free Math Collation'],
  },
  {
    number: '04',
    title: 'Company & Brand Websites',
    description: 'Fast, modern digital homes engineered to showcase products or services, capture inquiries via WhatsApp, and rank on search engines.',
    features: ['Under 2-Second Mobile Loads', 'Click-to-Chat WhatsApp API', 'Printable Work Summaries', 'SEO & Social Cards'],
  },
];

export const experience: ExperienceItem[] = [
  {
    year: '2024 — Present',
    role: 'Lead Website Builder & Problem Solver',
    company: 'Independent Consultant / Freelance',
    description: 'Building complete online stores, restaurant QR code menus, and easy-to-use customer portals for clients across Nigeria and abroad.',
  },
  {
    year: '2023 — 2024',
    role: 'Web Applications Specialist',
    company: 'Creative Digital Studio',
    description: 'Built and launched responsive websites, clear money management portals, and public election vote tracking tools that worked smoothly under high traffic.',
  },
  {
    year: '2022 — 2023',
    role: 'Website Builder',
    company: 'Tech Solutions Lab',
    description: 'Created mobile-friendly phone and gadget shopping sites with fast search bars, quick product comparisons, and clean checkout screens.',
  },
];

export const projects: Project[] = [
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
    image: '/assets/images/projects/fashionhub.png',
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
    image: '/assets/images/projects/menucraft.png',
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
    image: '/assets/images/projects/shopverse.png',
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
    category: 'Useful Portals',
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
    image: '/assets/images/projects/bincom-election.png',
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
    image: '/assets/images/projects/premed-portal.png',
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
    image: '/assets/images/projects/secure-bank.png',
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
    image: '/assets/images/projects/techphone-pro.png',
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
    image: '',
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

export const testimonials: Testimonial[] = [
  {
    name: 'Samuel Okafor',
    role: 'Managing Director, RetailVerse',
    text: "Adejuwon built our Paystack e-commerce store in record time. The card and bank transfer checkout works flawlessly, and our customers love how fast product search works on their phones.",
    rating: 5,
  },
  {
    name: 'Chef Brenda',
    role: 'Founder, CulinaryCraft Cafe',
    text: "MenuCraft saved us over ₦300,000 in paper printing costs in just three months. Our guests simply scan the QR code on the table with their phone camera and see the live menu immediately.",
    rating: 5,
  },
  {
    name: 'Dr. Alabi',
    role: 'Academic Director, PreMed Study Hub',
    text: "Standard quiz platforms always corrupted our complex medical and chemistry formulas. Adejuwon's custom portal renders every equation with razor-sharp clarity on students' phones.",
    rating: 5,
  },
];
