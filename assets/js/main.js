// ==========================================================================
// Adejuwon Emmanuel - Production Portfolio Main Script
// Pure Vanilla JavaScript (ES6+ Module)
// ==========================================================================

import { projectsData, skillsData, testimonialsData, experienceData } from './projects-data.js';

// DOM Elements & Application State
const state = {
  activeProjectFilter: 'All',
  searchQuery: '',
  activeSkillFilter: 'All',
  theme: localStorage.getItem('ae-portfolio-theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'),
  selectedProject: null,
  previewDevice: 'desktop'
};

// --------------------------------------------------------------------------
// Initialize Application
// --------------------------------------------------------------------------
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initLucideIcons();
  initNavigation();
  initScrollProgress();
  initProjects();
  initSkills();
  initExperience();
  initTestimonials();
  initStatsCounter();
  initModals();
  initCommandPalette();
  initContactForm();
  initBackToTop();
  initClipboardHelpers();
});

// --------------------------------------------------------------------------
// 1. Theme Management (Dark / Light Mode)
// --------------------------------------------------------------------------
function initTheme() {
  applyTheme(state.theme);

  const themeToggleBtns = document.querySelectorAll('.theme-toggle-btn');
  themeToggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      state.theme = state.theme === 'dark' ? 'light' : 'dark';
      localStorage.setItem('ae-portfolio-theme', state.theme);
      applyTheme(state.theme);
      showToast(`Switched to ${state.theme} mode`, 'info');
    });
  });

  // Listen to OS scheme changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (!localStorage.getItem('ae-portfolio-theme')) {
      state.theme = e.matches ? 'dark' : 'light';
      applyTheme(state.theme);
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
}

// --------------------------------------------------------------------------
// 2. Navigation & Mobile Drawer
// --------------------------------------------------------------------------
function initNavigation() {
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener('click', () => {
      const isExpanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
      mobileMenuBtn.setAttribute('aria-expanded', !isExpanded);
      mobileMenu.classList.toggle('hidden');
      document.body.classList.toggle('overflow-hidden', !isExpanded);
    });

    // Close on navigation click
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
        document.body.classList.remove('overflow-hidden');
      });
    });
  }

  // Active Section Spy with IntersectionObserver
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
// 4. Projects Portfolio Rendering & Filtering
// --------------------------------------------------------------------------
function initProjects() {
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
          cat === state.activeProjectFilter 
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
      state.activeProjectFilter = cat;

      filterContainer.querySelectorAll('.filter-btn').forEach(b => {
        b.className = 'filter-btn px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-white/10';
      });
      btn.className = 'filter-btn px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 bg-violet-600 text-white shadow-md shadow-violet-500/20';

      renderProjects();
    });
  }

  // Search Input
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value.toLowerCase().trim();
      renderProjects();
    });
  }

  renderProjects();
}

function renderProjects() {
  const container = document.getElementById('projects-grid');
  const countBadge = document.getElementById('projects-count');
  if (!container) return;

  const filtered = projectsData.filter(proj => {
    const matchesCategory = state.activeProjectFilter === 'All' || proj.category === state.activeProjectFilter;
    const matchesSearch = !state.searchQuery || 
      proj.title.toLowerCase().includes(state.searchQuery) ||
      proj.shortDesc.toLowerCase().includes(state.searchQuery) ||
      proj.tech.some(t => t.toLowerCase().includes(state.searchQuery));
    return matchesCategory && matchesSearch;
  });

  if (countBadge) {
    countBadge.textContent = `${filtered.length} project${filtered.length === 1 ? '' : 's'}`;
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="col-span-full py-16 text-center">
        <div class="w-16 h-16 mx-auto mb-4 rounded-full bg-slate-100 dark:bg-white/5 flex items-center justify-center text-slate-400">
          <i data-lucide="search-x" class="w-8 h-8"></i>
        </div>
        <h3 class="text-lg font-bold text-slate-900 dark:text-white">No projects found</h3>
        <p class="text-sm text-slate-500 dark:text-slate-400 mt-1">Try adjusting your filter or search keywords.</p>
        <button type="button" id="reset-project-search" class="mt-4 px-4 py-2 rounded-full text-xs font-semibold bg-violet-600 text-white hover:bg-violet-700">
          Reset Filters
        </button>
      </div>
    `;
    initLucideIcons();
    document.getElementById('reset-project-search')?.addEventListener('click', () => {
      state.activeProjectFilter = 'All';
      state.searchQuery = '';
      if (document.getElementById('project-search')) {
        document.getElementById('project-search').value = '';
      }
      initProjects();
    });
    return;
  }

  container.innerHTML = filtered.map((proj, idx) => `
    <article 
      class="group relative rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0b0c16] hover:border-violet-500/50 dark:hover:border-violet-500/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col"
      data-project-id="${proj.id}"
    >
      <!-- Visual Card Preview -->
      <div class="relative aspect-[16/10] bg-gradient-to-br ${proj.gradient} p-4 sm:p-5 flex flex-col justify-between overflow-hidden">
        <!-- Subtle Pattern & Grid Overlay -->
        <div class="absolute inset-0 opacity-15" style="background-image: radial-gradient(circle at 2px 2px, rgba(255,255,255,0.4) 1px, transparent 0); background-size: 20px 20px;"></div>
        
        <!-- Header Info in Visual Frame -->
        <div class="relative z-10 flex items-center justify-between">
          <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold tracking-wide uppercase bg-black/40 backdrop-blur-md text-white border border-white/20">
            ${proj.category}
          </span>
          <span class="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-white/20 backdrop-blur-md text-white">
            ${proj.year}
          </span>
        </div>

        <!-- Simulated Browser Chrome Frame / Device Preview -->
        <div class="relative z-10 rounded-xl bg-slate-900/85 backdrop-blur-md border border-white/15 p-3.5 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
          <div class="flex items-center justify-between pb-2 mb-2 border-b border-white/10 text-slate-400 text-xs">
            <div class="flex items-center gap-1.5">
              <span class="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
              <span class="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
              <span class="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
            </div>
            <div class="flex items-center gap-1.5 text-[10px] font-mono text-slate-300 truncate max-w-[180px] bg-black/40 px-2 py-0.5 rounded">
              <i data-lucide="lock" class="w-2.5 h-2.5 text-emerald-400"></i>
              ${proj.liveUrl.replace('https://', '')}
            </div>
          </div>
          
          <!-- Simulated UI Preview Lines -->
          <div class="space-y-1.5 py-1">
            <div class="h-2 w-3/4 rounded bg-white/30"></div>
            <div class="h-1.5 w-1/2 rounded bg-white/20"></div>
            <div class="grid grid-cols-3 gap-1.5 pt-2">
              <div class="h-7 rounded bg-white/10 flex items-center justify-center text-[10px] font-medium text-white/80 border border-white/5">
                ${proj.stats.metric1}
              </div>
              <div class="h-7 rounded bg-white/10 flex items-center justify-center text-[10px] font-medium text-white/80 border border-white/5">
                ${proj.stats.metric2}
              </div>
              <div class="h-7 rounded bg-white/10 flex items-center justify-center text-[10px] font-medium text-white/80 border border-white/5">
                ${proj.stats.metric3}
              </div>
            </div>
          </div>
        </div>

        <!-- Hover Overlay with Quick Action Button -->
        <div class="absolute inset-0 bg-slate-950/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 z-20 backdrop-blur-xs p-4">
          <button 
            type="button" 
            onclick="window.openProjectModal('${proj.id}')"
            class="px-4 py-2.5 rounded-full bg-white text-slate-950 text-xs font-bold shadow-lg hover:bg-slate-100 transition-all flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0"
          >
            <i data-lucide="eye" class="w-4 h-4 text-violet-600"></i>
            <span>Interactive Preview</span>
          </button>
          <a 
            href="${proj.liveUrl}" 
            target="_blank" 
            rel="noopener noreferrer"
            class="px-4 py-2.5 rounded-full bg-violet-600 text-white text-xs font-bold shadow-lg hover:bg-violet-700 transition-all flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0"
          >
            <span>Live Site</span>
            <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
          </a>
        </div>
      </div>

      <!-- Content Area -->
      <div class="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 class="text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-violet-400 transition-colors">
            ${proj.title}
          </h3>
          <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-2 leading-relaxed line-clamp-2">
            ${proj.shortDesc}
          </p>
        </div>

        <!-- Tech Badges -->
        <div class="mt-4 pt-4 border-t border-slate-100 dark:border-white/5">
          <div class="flex flex-wrap gap-1.5 mb-4">
            ${proj.tech.map(t => `
              <span class="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-slate-100 dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/5">
                ${t}
              </span>
            `).join('')}
          </div>

          <!-- Bottom Action Buttons -->
          <div class="flex items-center justify-between gap-3 pt-2">
            <button 
              type="button" 
              onclick="window.openProjectModal('${proj.id}')"
              class="text-xs font-bold text-violet-600 dark:text-violet-400 hover:text-violet-700 dark:hover:text-violet-300 flex items-center gap-1.5 transition-colors"
            >
              <span>Explore Case Study</span>
              <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
            </button>
            <a 
              href="${proj.liveUrl}" 
              target="_blank" 
              rel="noopener noreferrer"
              class="inline-flex items-center gap-1 text-xs font-medium text-slate-500 hover:text-slate-900 dark:text-slate-400 dark:hover:text-white transition-colors"
              title="Open ${proj.title} in new tab"
            >
              <span>Visit</span>
              <i data-lucide="external-link" class="w-3 h-3"></i>
            </a>
          </div>
        </div>
      </div>
    </article>
  `).join('');

  initLucideIcons();
}

// --------------------------------------------------------------------------
// 5. Skills Grid Rendering
// --------------------------------------------------------------------------
function initSkills() {
  const container = document.getElementById('skills-grid');
  const filterPills = document.getElementById('skills-filters');
  if (!container) return;

  const categories = ['All', 'Frontend', 'Backend', 'Database', 'Tools', 'Cloud'];

  if (filterPills) {
    filterPills.innerHTML = categories.map(cat => `
      <button 
        type="button" 
        data-skill-category="${cat}"
        class="skill-filter-btn px-3 py-1.5 rounded-full text-xs font-semibold transition-all ${
          cat === state.activeSkillFilter 
            ? 'bg-violet-600 text-white' 
            : 'bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-white/10'
        }"
      >
        ${cat}
      </button>
    `).join('');

    filterPills.addEventListener('click', (e) => {
      const btn = e.target.closest('.skill-filter-btn');
      if (!btn) return;
      state.activeSkillFilter = btn.getAttribute('data-skill-category');
      filterPills.querySelectorAll('.skill-filter-btn').forEach(b => {
        b.className = 'skill-filter-btn px-3 py-1.5 rounded-full text-xs font-semibold transition-all bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-white/10';
      });
      btn.className = 'skill-filter-btn px-3 py-1.5 rounded-full text-xs font-semibold transition-all bg-violet-600 text-white';
      renderSkills();
    });
  }

  renderSkills();
}

function renderSkills() {
  const container = document.getElementById('skills-grid');
  if (!container) return;

  const filtered = skillsData.filter(s => state.activeSkillFilter === 'All' || s.category === state.activeSkillFilter);

  container.innerHTML = filtered.map(skill => `
    <div class="group p-4 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0b0c16] hover:border-violet-500/40 transition-all hover:-translate-y-0.5 hover:shadow-md flex items-center justify-between">
      <div class="flex items-center gap-3">
        <div class="w-9 h-9 rounded-lg bg-violet-50 dark:bg-violet-500/10 text-violet-600 dark:text-violet-400 flex items-center justify-center font-bold">
          <i data-lucide="${skill.icon}" class="w-4 h-4"></i>
        </div>
        <div>
          <h4 class="text-sm font-semibold text-slate-900 dark:text-white">${skill.name}</h4>
          <span class="text-[11px] text-slate-500 dark:text-slate-400">${skill.category}</span>
        </div>
      </div>
      <span class="text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded-full ${
        skill.level === 'Expert' 
          ? 'bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400' 
          : 'bg-indigo-50 text-indigo-700 dark:bg-indigo-500/10 dark:text-indigo-400'
      }">
        ${skill.level}
      </span>
    </div>
  `).join('');

  initLucideIcons();
}

// --------------------------------------------------------------------------
// 6. Experience Timeline Rendering
// --------------------------------------------------------------------------
function initExperience() {
  const container = document.getElementById('experience-timeline');
  if (!container) return;

  container.innerHTML = experienceData.map((item, idx) => `
    <div class="relative pl-8 sm:pl-10 pb-8 last:pb-0">
      <!-- Line -->
      <div class="absolute left-[11px] top-2 bottom-0 w-[2px] bg-gradient-to-b from-violet-500 to-fuchsia-500 opacity-30 last:hidden"></div>
      
      <!-- Bullet dot -->
      <div class="absolute left-0 top-1.5 w-6 h-6 rounded-full bg-white dark:bg-[#050509] border-2 border-violet-500 flex items-center justify-center shadow-xs">
        <div class="w-2 h-2 rounded-full bg-violet-600"></div>
      </div>

      <!-- Item Content -->
      <div class="p-4 sm:p-5 rounded-xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0b0c16] hover:border-violet-500/30 transition-all">
        <span class="text-xs font-mono font-bold text-violet-600 dark:text-violet-400">${item.year}</span>
        <h4 class="text-base sm:text-lg font-bold text-slate-900 dark:text-white mt-1">${item.role}</h4>
        <p class="text-xs sm:text-sm font-medium text-slate-500 dark:text-slate-400">${item.company}</p>
        <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 mt-2.5 leading-relaxed">${item.description}</p>
      </div>
    </div>
  `).join('');
}

// --------------------------------------------------------------------------
// 7. Testimonials Rendering
// --------------------------------------------------------------------------
function initTestimonials() {
  const container = document.getElementById('testimonials-grid');
  if (!container) return;

  container.innerHTML = testimonialsData.map(item => `
    <div class="p-5 sm:p-6 rounded-2xl border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0b0c16] hover:border-violet-500/30 transition-all flex flex-col justify-between">
      <div>
        <div class="flex items-center gap-1 text-amber-400 mb-3">
          ${Array(item.rating).fill('<i data-lucide="star" class="w-4 h-4 fill-amber-400 text-amber-400"></i>').join('')}
        </div>
        <p class="text-xs sm:text-sm text-slate-600 dark:text-slate-300 italic leading-relaxed">
          "${item.text}"
        </p>
      </div>
      <div class="flex items-center gap-3 mt-5 pt-4 border-t border-slate-100 dark:border-white/5">
        <div class="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-fuchsia-500 text-white font-bold text-sm flex items-center justify-center shadow-xs">
          ${item.avatar}
        </div>
        <div>
          <h5 class="text-sm font-bold text-slate-900 dark:text-white">${item.name}</h5>
          <span class="text-[11px] text-slate-500 dark:text-slate-400">${item.role}</span>
        </div>
      </div>
    </div>
  `).join('');

  initLucideIcons();
}

// --------------------------------------------------------------------------
// 8. Stats Counter with Intersection Observer
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
          animateNumber(el, target, suffix, 1800);
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
    // easeOutCubic
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
// 9. Interactive Modals (Project Case Study & Resume)
// --------------------------------------------------------------------------
function initModals() {
  const projectModal = document.getElementById('project-modal');
  const resumeModal = document.getElementById('resume-modal');

  // Global helper for opening modal
  window.openProjectModal = (projectId) => {
    const project = projectsData.find(p => p.id === projectId);
    if (!project || !projectModal) return;

    state.selectedProject = project;
    state.previewDevice = 'desktop';

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

    // Interactive Device Simulation Frame
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
    // Clear iframe to stop audio/scripts
    const frame = document.getElementById('modal-iframe');
    if (frame) frame.src = 'about:blank';
  };

  // Preview Switcher (Desktop vs Mobile Frame)
  const desktopBtn = document.getElementById('preview-mode-desktop');
  const mobileBtn = document.getElementById('preview-mode-mobile');

  if (desktopBtn && mobileBtn) {
    desktopBtn.addEventListener('click', () => {
      state.previewDevice = 'desktop';
      desktopBtn.className = 'px-3 py-1 rounded-md text-xs font-semibold bg-violet-600 text-white';
      mobileBtn.className = 'px-3 py-1 rounded-md text-xs font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900';
      updateModalPreviewFrame();
    });

    mobileBtn.addEventListener('click', () => {
      state.previewDevice = 'mobile';
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
      closeCommandPalette();
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
  if (!container || !state.selectedProject) return;

  if (state.previewDevice === 'desktop') {
    container.className = 'w-full rounded-xl overflow-hidden border border-slate-300 dark:border-white/10 bg-slate-950 shadow-2xl transition-all';
    container.style.maxWidth = '100%';
    container.style.height = '420px';
  } else {
    container.className = 'mockup-mobile-frame transition-all overflow-hidden bg-slate-950 shadow-2xl';
    container.style.maxWidth = '340px';
    container.style.height = '480px';
  }

  if (frame) {
    frame.src = state.selectedProject.liveUrl;
  }
}

// --------------------------------------------------------------------------
// 10. Command Palette (`Ctrl + K` or `Cmd + K`)
// --------------------------------------------------------------------------
function initCommandPalette() {
  const palette = document.getElementById('command-palette');
  const input = document.getElementById('palette-input');
  const list = document.getElementById('palette-results');
  const triggerBtn = document.getElementById('command-palette-btn');

  if (!palette || !input || !list) return;

  const actions = [
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
    { title: 'Copy Email Address', subtitle: 'adejuwon.emmanuel@email.com', action: () => copyEmail(), icon: 'copy' },
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
// 11. Production Contact Form & Confetti Celebration
// --------------------------------------------------------------------------
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Check honeypot for bot detection
    const honeypot = form.querySelector('input[name="_honeypot"]');
    if (honeypot && honeypot.value) {
      console.warn('Bot detected via honeypot');
      return;
    }

    const nameInput = form.querySelector('#contact-name');
    const emailInput = form.querySelector('#contact-email');
    const messageInput = form.querySelector('#contact-message');

    const name = nameInput?.value.trim();
    const email = emailInput?.value.trim();
    const message = messageInput?.value.trim();

    if (!name || !email || !message) {
      showToast('Please fill out all required fields.', 'error');
      return;
    }

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      showToast('Please enter a valid email address.', 'error');
      return;
    }

    // Save inquiry to localStorage for persistence
    const inquiries = JSON.parse(localStorage.getItem('ae-inquiries') || '[]');
    inquiries.push({
      name,
      email,
      message,
      timestamp: new Date().toISOString()
    });
    localStorage.setItem('ae-inquiries', JSON.stringify(inquiries));

    // Fire festive celebration confetti!
    fireConfetti();

    showToast('Message sent! Emmanuel will reply within 24 hours.', 'success');
    form.reset();
  });
}

function fireConfetti() {
  if (typeof confetti === 'function') {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.7 }
    });
    setTimeout(() => {
      confetti({
        particleCount: 50,
        angle: 60,
        spread: 55,
        origin: { x: 0 }
      });
      confetti({
        particleCount: 50,
        angle: 120,
        spread: 55,
        origin: { x: 1 }
      });
    }, 250);
  }
}

// --------------------------------------------------------------------------
// 12. Toast Notification System
// --------------------------------------------------------------------------
export function showToast(message, type = 'success', duration = 3500) {
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

  requestAnimationFrame(() => {
    toast.classList.add('show');
  });

  setTimeout(() => {
    toast.classList.remove('show');
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

// --------------------------------------------------------------------------
// 13. Clipboard Helpers
// --------------------------------------------------------------------------
function initClipboardHelpers() {
  window.copyEmail = () => {
    const email = 'adejuwon.emmanuel@email.com';
    navigator.clipboard.writeText(email).then(() => {
      showToast(`Copied ${email} to clipboard!`, 'success');
    });
  };

  window.copyPhone = () => {
    const phone = '+234 812 345 6789';
    navigator.clipboard.writeText(phone).then(() => {
      showToast(`Copied ${phone} to clipboard!`, 'success');
    });
  };
}

// --------------------------------------------------------------------------
// 14. Back To Top
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

// Helper to refresh Lucide vector icons
function initLucideIcons() {
  if (window.lucide && typeof window.lucide.createIcons === 'function') {
    window.lucide.createIcons();
  }
}
