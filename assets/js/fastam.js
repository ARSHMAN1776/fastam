/* ============================================================
   FASTAM SOLUTIONS — CORE ENGINE v2.0
   Shared JS: Nav, Particles, Animations, Components
   ============================================================ */

/* ========================
   NAV HTML TEMPLATE
   ======================== */
const NAV_HTML = `
<div id="scroll-progress"></div>
<nav id="site-nav">
  <div class="container">
    <div class="nav-inner">
      <a href="index.html" class="nav-logo">
        <div class="logo-mark">F</div>
        <span class="logo-text">Fastam<span class="logo-dot">.</span></span>
      </a>      <ul class="nav-links">
        <li>
          <a href="services.html">Services <span class="nav-arrow">▾</span></a>
          <div class="nav-mega">
            <a href="services.html" class="mega-item">
              <div class="mega-icon" style="background:rgba(165,161,255,0.12);border-color:rgba(165,161,255,0.25)"><i class="bi bi-cpu-fill" style="color:#A5A1FF;font-size:1.05rem"></i></div>
              <div class="mega-info"><strong>Custom AI Dev</strong><span>GPT-5.5, Claude Sonnet 4.6 apps</span></div>
            </a>
            <a href="ai-chatbot.html" class="mega-item">
              <div class="mega-icon" style="background:rgba(112,229,255,0.12);border-color:rgba(112,229,255,0.25)"><i class="bi bi-chat-dots-fill" style="color:#70E5FF;font-size:1.05rem"></i></div>
              <div class="mega-info"><strong>Chatbot Development</strong><span>Omnichannel conversational bots</span></div>
            </a>
            <a href="services.html" class="mega-item">
              <div class="mega-icon" style="background:rgba(255,122,89,0.12);border-color:rgba(255,122,89,0.25)"><i class="bi bi-diagram-3-fill" style="color:#FF7A59;font-size:1.05rem"></i></div>
              <div class="mega-info"><strong>CRM AI Integration</strong><span>HubSpot & GHL automation</span></div>
            </a>
            <a href="ai-automation.html" class="mega-item">
              <div class="mega-icon" style="background:rgba(232,90,35,0.12);border-color:rgba(232,90,35,0.25)"><i class="bi bi-lightning-charge-fill" style="color:#E85A23;font-size:1.05rem"></i></div>
              <div class="mega-info"><strong>AI Automation</strong><span>n8n, Zapier, Make flows</span></div>
            </a>
            <a href="ai-calling-agent.html" class="mega-item">
              <div class="mega-icon" style="background:rgba(255,107,107,0.12);border-color:rgba(255,107,107,0.25)"><i class="bi bi-telephone-fill" style="color:#FF6B6B;font-size:1.05rem"></i></div>
              <div class="mega-info"><strong>AI Voice Agents</strong><span>Inbound/outbound phone AI</span></div>
            </a>
            <a href="web-development.html" class="mega-item">
              <div class="mega-icon" style="background:rgba(0,212,255,0.12);border-color:rgba(0,212,255,0.25)"><i class="bi bi-code-slash" style="color:#00D4FF;font-size:1.05rem"></i></div>
              <div class="mega-info"><strong>AI Web Development</strong><span>Next.js AI-native web apps</span></div>
            </a>
            <a href="ai-tech-stack.html" class="mega-item">
              <div class="mega-icon" style="background:rgba(0,232,147,0.12);border-color:rgba(0,232,147,0.25)"><i class="bi bi-grid-3x3-gap-fill" style="color:#00E893;font-size:1.05rem"></i></div>
              <div class="mega-info"><strong>Intelligence Stack</strong><span>Neural engines & platforms</span></div>
            </a>
            <a href="pricing.html" class="mega-item">
              <div class="mega-icon" style="background:rgba(249,216,73,0.12);border-color:rgba(249,216,73,0.25)"><i class="bi bi-rocket-takeoff-fill" style="color:#F9D849;font-size:1.05rem"></i></div>
              <div class="mega-info"><strong>Done-For-You AI</strong><span>Elite monthly agency retainers</span></div>
            </a>
          </div>
        </li>
        <li>
          <a href="#">Industries <span class="nav-arrow">▾</span></a>
          <div class="nav-mega" style="min-width:280px;padding:16px;grid-template-columns:1fr;">
            <a href="industry-ecommerce.html" class="mega-item" style="padding:10px;">
              <div class="mega-info"><strong>E-Commerce</strong><span>Automate support & scaling</span></div>
            </a>
            <a href="industry-realestate.html" class="mega-item" style="padding:10px;">
              <div class="mega-info"><strong>Real Estate</strong><span>Lead qualification & CRM</span></div>
            </a>
            <a href="industry-healthcare.html" class="mega-item" style="padding:10px;">
              <div class="mega-info"><strong>Healthcare</strong><span>HIPAA-aligned Patient AI</span></div>
            </a>
            <a href="industry-finance.html" class="mega-item" style="padding:10px;">
              <div class="mega-info"><strong>Finance</strong><span>Bank-grade AI Security</span></div>
            </a>
            <a href="industry-leadgen.html" class="mega-item" style="padding:10px;">
              <div class="mega-info"><strong>Lead Generation</strong><span>High-ticket solar & legal</span></div>
            </a>
          </div>
        </li>
        <li><a href="portfolio.html">Portfolio</a></li>
        <li>
          <a href="#">Company <span class="nav-arrow">▾</span></a>
          <div class="nav-mega" style="min-width:240px;padding:16px;grid-template-columns:1fr;">
            <a href="about.html" class="mega-item" style="padding:10px;">
              <div class="mega-info"><strong>About Us</strong><span>Our story and mission</span></div>
            </a>
            <a href="integrations.html" class="mega-item" style="padding:10px;">
              <div class="mega-info"><strong>Integrations</strong><span>Platforms we partner with</span></div>
            </a>
            <a href="methodology.html" class="mega-item" style="padding:10px;">
              <div class="mega-info"><strong>Methodology</strong><span>How we engineer AI</span></div>
            </a>
            <a href="security.html" class="mega-item" style="padding:10px;">
              <div class="mega-info"><strong>Security & Trust</strong><span>Data compliance</span></div>
            </a>
            <a href="sla.html" class="mega-item" style="padding:10px;">
              <div class="mega-info"><strong>SLA & Support</strong><span>Service Agreements</span></div>
            </a>
          </div>
        </li>
        <li>
          <a href="#">Resources <span class="nav-arrow">▾</span></a>
          <div class="nav-mega" style="min-width:240px;padding:16px;grid-template-columns:1fr;">
            <a href="playbooks.html" class="mega-item" style="padding:10px;">
              <div class="mega-info"><strong>Playbooks</strong><span>Guides and insights</span></div>
            </a>
            <a href="pricing.html" class="mega-item" style="padding:10px;">
              <div class="mega-info"><strong>Pricing</strong><span>Transparent plans</span></div>
            </a>
            <a href="roi-calculator.html" class="mega-item" style="padding:10px;">
              <div class="mega-info"><strong style="color:var(--success)">ROI Calculator</strong><span>Calculate your savings</span></div>
            </a>
          </div>
        </li>
      </ul>
      <div class="nav-actions">
        <div class="theme-switch-wrap">
          <button class="theme-btn" id="theme-toggle-btn" title="Toggle Theme" aria-label="Theme switch">
            <i id="theme-active-icon" class="bi bi-pc-display-horizontal"></i>
          </button>
          <div class="theme-dropdown" id="theme-dropdown">
            <button class="theme-opt" data-theme="light"><i class="bi bi-sun-fill"></i> Light</button>
            <button class="theme-opt" data-theme="dark"><i class="bi bi-moon-stars-fill"></i> Dark</button>
            <button class="theme-opt" data-theme="system"><i class="bi bi-pc-display-horizontal"></i> System</button>
          </div>
        </div>
        <a href="contact.html" class="btn btn-primary btn-sm" style="box-shadow: 0 4px 15px rgba(99, 102, 241, 0.4);"><i class="bi bi-lightning-charge-fill" style="margin-right:6px"></i> Start Project</a>
        <button class="nav-burger" id="nav-burger" aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>
  </div>
</nav>
<div class="mobile-nav" id="mobile-nav">
  <button class="mobile-nav-close" id="mobile-nav-close">✕</button>
  <a href="index.html">Home</a>
  <a href="about.html">About</a>
  <a href="methodology.html">Methodology</a>
  <a href="security.html">Security</a>
  <a href="services.html">Services</a>
  <a href="industry-ecommerce.html">E-Commerce</a>
  <a href="industry-realestate.html">Real Estate</a>
  <a href="industry-healthcare.html">Healthcare</a>
  <a href="industry-finance.html">Finance & Fintech</a>
  <a href="industry-leadgen.html">Lead Generation</a>
  <a href="portfolio.html">Portfolio</a>
  <a href="playbooks.html">Playbooks</a>
  <div class="mobile-nav-divider"></div>
  <a href="pricing.html">Pricing</a>
  <a href="roi-calculator.html" style="color:var(--success)">ROI Calculator</a>
  <a href="contact.html">Contact</a>
  <div class="mobile-nav-divider"></div>
  <a href="contact.html" style="color:var(--primary)">→ Start Project</a>
</div>`;

/* ========================
   FOOTER HTML TEMPLATE
   ======================== */
const FOOTER_HTML = `
<footer id="site-footer">
  <div class="container">
    <div class="footer-inner">
      <div class="footer-brand">
        <a href="index.html" class="nav-logo" style="margin-bottom:16px;display:inline-flex">
          <div class="logo-mark">F</div>
          <span class="logo-text">Fastam<span class="logo-dot">.</span></span>
        </a>
        <p>We build the future of business through AI automation, intelligent chatbots, and cutting-edge web development. Your growth is our mission.</p>
        <div class="footer-social">
          <a href="https://linkedin.com" target="_blank" title="LinkedIn"><i class="bi bi-linkedin"></i></a>
          <a href="https://twitter.com" target="_blank" title="Twitter"><i class="bi bi-twitter-x"></i></a>
          <a href="https://instagram.com" target="_blank" title="Instagram"><i class="bi bi-instagram"></i></a>
          <a href="https://github.com" target="_blank" title="GitHub"><i class="bi bi-github"></i></a>
          <a href="https://youtube.com" target="_blank" title="YouTube"><i class="bi bi-youtube"></i></a>
        </div>
      </div>
      <div class="footer-col">
        <h5>Services</h5>
        <div class="footer-links">
          <a href="services.html">Custom AI Dev</a>
          <a href="ai-chatbot.html">Chatbot Development</a>
          <a href="services.html">CRM AI Integration</a>
          <a href="ai-automation.html">AI Automation</a>
          <a href="ai-calling-agent.html">AI Voice Agents</a>
          <a href="web-development.html">AI Web Development</a>
          <a href="ai-tech-stack.html">Intelligence Stack</a>
          <a href="pricing.html">Done-For-You AI</a>
        </div>
      </div>
      <div class="footer-col">
        <h5>Company</h5>
        <div class="footer-links">
          <a href="about.html">About Us</a>
          <a href="integrations.html">Integrations Ecosystem</a>
          <a href="methodology.html">Methodology</a>
          <a href="security.html">Security & Compliance</a>
          <a href="sla.html">SLA & Support</a>
          <a href="industry-ecommerce.html">E-Commerce AI</a>
          <a href="industry-realestate.html">Real Estate AI</a>
          <a href="industry-healthcare.html">Healthcare AI</a>
          <a href="industry-finance.html">Finance & Fintech AI</a>
          <a href="industry-leadgen.html">Lead Generation AI</a>
          <a href="roi-calculator.html">ROI Calculator</a>
          <a href="portfolio.html">Portfolio</a>
          <a href="playbooks.html">Playbooks</a>
          <a href="testimonials.html">Testimonials</a>
          <a href="careers.html">Careers</a>
          <a href="pricing.html">Pricing</a>
          <a href="faq.html">FAQ</a>
        </div>
      </div>
      <div class="footer-col">
        <h5>Get In Touch</h5>
        <div class="footer-contact-item"><i class="bi bi-envelope-fill"></i><a href="https://mail.google.com/mail/?view=cm&to=fastamsolutions@gmail.com" target="_blank" style="color:var(--text-muted)">fastamsolutions@gmail.com</a></div>
        <div class="footer-contact-item"><i class="bi bi-geo-alt-fill"></i><span>Remote First · Worldwide</span></div>
        <div class="footer-contact-item"><i class="bi bi-clock-fill"></i><span>Mon–Sat, 9am–6pm PKT</span></div>
        <div style="margin-top:20px">
          <a href="contact.html" class="btn btn-primary btn-sm">Start a Project</a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>© 2025 Fastam Solutions. All rights reserved. Crafted with ❤️</p>
      <div class="footer-bottom-links">
        <a href="privacy-policy.html">Privacy Policy</a>
        <a href="terms-of-service.html">Terms of Service</a>
        <a href="sitemap.xml">Sitemap</a>
      </div>
    </div>
  </div>
</footer>`;

/* ========================
   INIT COMPONENTS
   ======================== */
function initComponents() {
  const navTarget = document.getElementById('nav-placeholder');
  if (navTarget) navTarget.innerHTML = NAV_HTML;

  const footerTarget = document.getElementById('footer-placeholder');
  if (footerTarget) footerTarget.innerHTML = FOOTER_HTML;

  initNav();
  setActiveNav();
}

/* ========================
   NAVIGATION LOGIC
   ======================== */
function initNav() {
  const nav = document.getElementById('site-nav');
  const burger = document.getElementById('nav-burger');
  const mobileNav = document.getElementById('mobile-nav');
  const mobileClose = document.getElementById('mobile-nav-close');
  const progress = document.getElementById('scroll-progress');

  // Scroll behavior
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY > 50;
    nav?.classList.toggle('scrolled', scrolled);
    if (progress) {
      const total = document.body.scrollHeight - window.innerHeight;
      progress.style.width = total > 0 ? (window.scrollY / total * 100) + '%' : '0%';
    }
  }, { passive: true });

  // Burger
  burger?.addEventListener('click', () => {
    burger.classList.toggle('open');
    mobileNav?.classList.toggle('open');
    document.body.style.overflow = mobileNav?.classList.contains('open') ? 'hidden' : '';
  });

  mobileClose?.addEventListener('click', () => {
    burger?.classList.remove('open');
    mobileNav?.classList.remove('open');
    document.body.style.overflow = '';
  });

  mobileNav?.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      burger?.classList.remove('open');
      mobileNav.classList.remove('open');
      document.body.style.overflow = '';
    });
  });

  // ── Mega Dropdown: hover with delay so cursor can travel to the menu ──
  const megaParents = document.querySelectorAll('.nav-links > li');
  megaParents.forEach(li => {
    const mega = li.querySelector('.nav-mega');
    if (!mega) return;

    let closeTimer = null;

    function openMega() {
      clearTimeout(closeTimer);
      // Close any other open megas first
      megaParents.forEach(other => {
        if (other !== li) {
          const om = other.querySelector('.nav-mega');
          if (om) { om.classList.remove('mega-open'); other.classList.remove('mega-active'); }
        }
      });
      mega.classList.add('mega-open');
      li.classList.add('mega-active');
    }

    function closeMega() {
      closeTimer = setTimeout(() => {
        mega.classList.remove('mega-open');
        li.classList.remove('mega-active');
      }, 160);
    }

    // Hover on parent li
    li.addEventListener('mouseenter', openMega);
    li.addEventListener('mouseleave', closeMega);

    // Keep open when hovering the mega panel itself
    mega.addEventListener('mouseenter', () => clearTimeout(closeTimer));
    mega.addEventListener('mouseleave', closeMega);

    // Click on the Services link — toggle, but still allow navigation
    const trigger = li.querySelector('a');
    trigger?.addEventListener('click', (e) => {
      // If mega is open and user clicks, navigate to /services.html
      // If mega is closed and user clicks, just open (prevent nav)
      if (!mega.classList.contains('mega-open')) {
        e.preventDefault();
        openMega();
      }
      // else let the normal href navigate
    });
  });

  // Click outside to close all megas
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-links > li')) {
      megaParents.forEach(li => {
        const m = li.querySelector('.nav-mega');
        if (m) { m.classList.remove('mega-open'); li.classList.remove('mega-active'); }
      });
    }
  });
}

function setActiveNav() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('#site-nav .nav-links a').forEach(a => {
    const href = a.getAttribute('href')?.replace('/', '');
    if (href === path || (path === '' && href === 'index.html')) {
      a.classList.add('is-active');
    }
  });
}

/* ========================
   PARTICLE CANVAS
   ======================== */
function initParticles(canvasId = 'hero-canvas') {
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (navigator.connection && navigator.connection.saveData) return;
  const canvas = document.getElementById(canvasId);
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W, H, particles = [], animFrame;

  function resize() {
    W = canvas.width = canvas.offsetWidth;
    H = canvas.height = canvas.offsetHeight;
  }

  class Particle {
    constructor() { this.reset(); }
    reset() {
      this.x = Math.random() * W;
      this.y = Math.random() * H;
      this.size = Math.random() * 1.5 + 0.3;
      this.vx = (Math.random() - 0.5) * 0.3;
      this.vy = (Math.random() - 0.5) * 0.3;
      this.opacity = Math.random() * 0.5 + 0.1;
    }
    update() {
      this.x += this.vx;
      this.y += this.vy;
      if (this.x < 0 || this.x > W || this.y < 0 || this.y > H) this.reset();
    }
    draw() {
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(108, 99, 255, ${this.opacity})`;
      ctx.fill();
    }
  }

  function init() {
    resize();
    particles = Array.from({ length: 90 }, () => new Particle());
  }

  function drawConnections() {
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(108, 99, 255, ${0.08 * (1 - dist / 120)})`;
          ctx.lineWidth = 0.5;
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
  }

  function loop() {
    ctx.clearRect(0, 0, W, H);
    drawConnections();
    particles.forEach(p => { p.update(); p.draw(); });
    animFrame = requestAnimationFrame(loop);
  }

  init();
  loop();
  window.addEventListener('resize', () => { resize(); });
}

/* ========================
   SCROLL ANIMATIONS
   ======================== */
function initReveal() {
  const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  if (!els.length) return;

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  els.forEach(el => obs.observe(el));
}

/* ========================
   COUNTER ANIMATION
   ======================== */
function initCounters() {
  const counters = document.querySelectorAll('[data-count]');
  if (!counters.length) return;

  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target;
      const target = parseInt(el.dataset.count);
      const duration = 2000;
      const step = target / (duration / 16);
      let current = 0;
      const timer = setInterval(() => {
        current += step;
        if (current >= target) { current = target; clearInterval(timer); }
        el.textContent = Math.floor(current) + (el.dataset.suffix || '');
      }, 16);
      obs.unobserve(el);
    });
  }, { threshold: 0.5 });

  counters.forEach(c => obs.observe(c));
}

/* ========================
   FAQ ACCORDION
   ======================== */
function initFAQ() {
  document.querySelectorAll('.faq-item').forEach(item => {
    item.addEventListener('click', () => {
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });
}

/* ========================
   PORTFOLIO FILTER
   ======================== */
function initPortfolioFilter() {
  const buttons = document.querySelectorAll('.pf-btn');
  const cards = document.querySelectorAll('.pf-card[data-cat]');
  if (!buttons.length) return;

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.filter;
      cards.forEach(card => {
        const match = filter === 'all' || card.dataset.cat === filter;
        card.style.display = match ? '' : 'none';
      });
    });
  });
}

/* ========================
   PRICING TOGGLE
   ======================== */
function initPricingToggle() {
  const toggle = document.getElementById('billing-toggle');
  if (!toggle) return;
  const amounts = document.querySelectorAll('[data-monthly][data-yearly]');
  toggle.addEventListener('change', () => {
    const yearly = toggle.checked;
    amounts.forEach(el => {
      el.textContent = yearly ? el.dataset.yearly : el.dataset.monthly;
    });
    document.querySelectorAll('.billing-period').forEach(el => {
      el.textContent = yearly ? '/year' : '/month';
    });
  });
}

/* ========================
   TESTIMONIALS SWIPER CONFIG
   ======================== */
function initTestimonialsSwiper() {
  if (typeof Swiper === 'undefined') return;
  new Swiper('.testi-swiper', {
    loop: true,
    speed: 700,
    autoplay: { delay: 4500, disableOnInteraction: false },
    slidesPerView: 1,
    spaceBetween: 24,
    pagination: { el: '.swiper-pagination', clickable: true },
    breakpoints: {
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 }
    }
  });
}

/* ========================
   CONTACT FORM
   ======================== */
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;
  const status = document.getElementById('cf-status');

  function showStatus(message, ok) {
    if (!status) return;
    status.textContent = message;
    status.style.display = 'block';
    status.style.background = ok ? 'rgba(0,232,147,0.1)' : 'rgba(255,90,90,0.1)';
    status.style.border = `1px solid ${ok ? 'rgba(0,232,147,0.3)' : 'rgba(255,90,90,0.3)'}`;
    status.style.color = ok ? 'var(--success)' : '#ff5a5a';
  }

  form.addEventListener('submit', async e => {
    e.preventDefault();
    const btn = form.querySelector('[type=submit]');
    const originalText = btn.innerHTML;
    btn.textContent = 'Sending...';
    btn.disabled = true;
    if (status) status.style.display = 'none';

    const service = form.service.value;
    const payload = {
      access_key: form.access_key.value,
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      budget: form.budget.value,
      service: service,
      subject: `New Project Inquiry — ${service}`,
      message: form.message.value,
      botcheck: form.botcheck.checked
    };

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      if (data.success) {
        btn.textContent = '✓ Message Sent!';
        btn.style.background = 'var(--success)';
        showStatus('Thanks — your message has been sent. We\'ll reply within 24 hours.', true);
        form.reset();
      } else {
        throw new Error(data.message || 'Something went wrong.');
      }
    } catch (err) {
      showStatus(err.message || 'Sorry, something went wrong. Please email us directly at fastamsolutions@gmail.com.', false);
    } finally {
      setTimeout(() => {
        btn.innerHTML = originalText;
        btn.disabled = false;
        btn.style.background = '';
      }, 4000);
    }
  });
}


/* ============================================================
   FASTAM PREMIUM CURSOR — SINGLE DEFINITIVE SYSTEM
   ============================================================
   Uses .fx-cursor-dot and .fx-cursor-ring exclusively.
   On init: purges ALL old cursor elements from DOM first.
   Body state classes: fx-cursor-on-link | fx-cursor-on-btn
                       fx-cursor-on-text  | fx-cursor-click
                       fx-cursor-hidden
   Desktop-only (≥992px). Fully GPU-accelerated.
============================================================ */
function initPremiumCursor() {
  return;
}



/* ========================

   TYPED EFFECT
   ======================== */
function initTyped(el, words, speed = 100) {
  if (!el) return;
  let wi = 0, ci = 0, deleting = false;
  (function type() {
    const word = words[wi];
    el.textContent = deleting ? word.slice(0, --ci) : word.slice(0, ++ci);
    if (!deleting && ci === word.length) setTimeout(() => { deleting = true; setTimeout(type, speed); }, 1800);
    else if (deleting && ci === 0) { deleting = false; wi = (wi + 1) % words.length; setTimeout(type, speed); }
    else setTimeout(type, deleting ? speed / 2 : speed);
  })();
}

/* ========================
   CHATBOT (LAZY LOAD)
   ======================== */
function loadChatbotWidget() {
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  if (navigator.connection && navigator.connection.saveData) return;
  if (document.querySelector('script[data-fastam-chatbot]')) return;

  window.CHATBOT_API = "https://conservation-amalea-fastamsolutions-013282ba.koyeb.app";
  window.CHATBOT_NAME = "Fastam AI";
  window.CHATBOT_COLOR = "#6C63FF";
  window.CHATBOT_PROMPT = `You are Fastam AI — a sharp, professional assistant for Fastam Solutions.

STRICT RULES — never break these:
• Reply in 1–2 sentences MAX. Never write long paragraphs.
• Read what the user actually asked and answer ONLY that.
• If the user is vague, ask ONE short clarifying question.
• Never list all services unless the user explicitly asks "what services do you offer?"
• Sound human, confident, and helpful — not robotic.
• Only answer using the facts below. For anything unrelated to Fastam Solutions, politely redirect to booking a free strategy call.

FASTAM SOLUTIONS — remote-first AI automation & web development agency. 5+ years in business, 100+ projects delivered, 50+ clients, 99% satisfaction. Every engagement includes a 30-Day ROI Guarantee: if results aren't measurable within 30 days, we keep working at no charge, no contracts or exit fees.

SERVICES (one-time project pricing, starting at): Custom AI Development $2,000 · Chatbot Development $800 · CRM AI Integration $1,200 · AI Automation (n8n/Zapier/Make) $500 · AI Voice Agents $1,500 · AI Web Development $1,000. One-time projects: 50% upfront, 50% on delivery.

MONTHLY RETAINERS: Starter $1,500/mo (1 AI service/month, 48h support) · Growth $3,500/mo — Most Popular (3 AI services/month, CRM + chatbot + voice agent, bi-weekly calls, priority Slack support) · Elite $7,500/mo (unlimited projects, dedicated senior AI engineer, weekly calls, 4h priority SLA). Retainers are month-to-month, 30 days notice to cancel; annual commitment gets 15% off.

PROCESS: Discovery → Strategy → Build → Launch & Grow. Most projects go live in 3–14 days (simple builds as fast as 72 hours).

CONTACT: fastamsolutions@gmail.com · WhatsApp +92 348 1776890 · replies within 24h (Mon–Sat, 9am–6pm PKT), usually within 2 hours. Always invite interested users to book a free strategy call or visit the Contact page.`;
  window.CHATBOT_GREETING = "Hi! Welcome to Fastam Solutions 👋 How can I help you today?";

  const s = document.createElement('script');
  s.src = "https://conservation-amalea-fastamsolutions-013282ba.koyeb.app/widget.js";
  s.defer = true;
  s.async = true;
  s.dataset.fastamChatbot = '1';
  document.head.appendChild(s);
}

/* ========================
   CARD SPOTLIGHT GLOW
   ======================== */
function initCardSpotlight() {
  document.addEventListener('mousemove', (e) => {
    const card = e.target.closest('.card');
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  }, { passive: true });
}

/* ========================
   THEME ENGINE
   ======================== */
function initThemeEngine() {
  const themeBtn = document.getElementById('theme-toggle-btn');
  const themeDropdown = document.getElementById('theme-dropdown');
  const themeOptions = document.querySelectorAll('.theme-opt');
  const activeIcon = document.getElementById('theme-active-icon');

  const getStoredTheme = () => localStorage.getItem('fastam-theme') || 'system';
  const setStoredTheme = (theme) => localStorage.setItem('fastam-theme', theme);

  function applyTheme(theme) {
    let resolvedTheme = theme;
    if (theme === 'system') {
      resolvedTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    if (resolvedTheme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }

    if (activeIcon) {
      activeIcon.className = 'bi ' + (
        theme === 'light' ? 'bi-sun-fill' : 
        theme === 'dark' ? 'bi-moon-stars-fill' : 
        'bi-pc-display-horizontal'
      );
    }

    themeOptions.forEach(opt => {
      opt.classList.toggle('active', opt.dataset.theme === theme);
    });
  }

  // Initial Apply
  applyTheme(getStoredTheme());

  // Listen to system changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    if (getStoredTheme() === 'system') applyTheme('system');
  });

  // Dropdown toggle
  themeBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    themeDropdown?.classList.toggle('show');
  });

  // Close dropdown on click outside
  document.addEventListener('click', () => {
    themeDropdown?.classList.remove('show');
  });

  // Option select
  themeOptions.forEach(opt => {
    opt.addEventListener('click', (e) => {
      e.stopPropagation();
      const theme = opt.dataset.theme;
      setStoredTheme(theme);
      applyTheme(theme);
      themeDropdown?.classList.remove('show');
    });
  });
}

/* ========================
   GLOBAL INIT
   ======================== */
document.addEventListener('DOMContentLoaded', () => {
  initComponents();
  initThemeEngine();
  initPremiumCursor();
  initCardSpotlight();

  initReveal();
  initCounters();
  initFAQ();
  initPortfolioFilter();
  initPricingToggle();
  initContactForm();

  // Particles only on pages that have hero-canvas
  if (document.getElementById('hero-canvas')) {
    initParticles();
  }

  // Typed text
  const typedEl = document.getElementById('typed-text');
  if (typedEl) {
    initTyped(typedEl, ['AI Automation', 'Web Development', 'AI Calling Agents', 'Chatbot Widgets', 'Smart Workflows']);
  }

  // Init Swiper testimonials
  setTimeout(initTestimonialsSwiper, 100);

  // Chatbot: load after first paint / idle so it doesn't block interactivity
  const startChatbot = () => loadChatbotWidget();
  if ('requestIdleCallback' in window) requestIdleCallback(startChatbot, { timeout: 3000 });
  else setTimeout(startChatbot, 1200);
});
