// ─── Theme ───────────────────────────────────────────────────
const html = document.documentElement;
const toggleBtn = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');

// Default is dark; only apply light if explicitly stored
const saved = localStorage.getItem('theme');
if (saved === 'light') {
    html.setAttribute('data-theme', 'light');
    themeIcon.className = 'fa-solid fa-moon';
}

toggleBtn.addEventListener('click', () => {
    const isLight = html.getAttribute('data-theme') === 'light';
    if (isLight) {
        html.removeAttribute('data-theme');
        themeIcon.className = 'fa-solid fa-sun';
        localStorage.setItem('theme', 'dark');
    } else {
        html.setAttribute('data-theme', 'light');
        themeIcon.className = 'fa-solid fa-moon';
        localStorage.setItem('theme', 'light');
    }
});

// ─── Nav shadow on scroll ────────────────────────────────────
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 10);
}, { passive: true });

// ─── Hero parallax fade ──────────────────────────────────────
const heroContent = document.querySelector('.hero-content');
if (heroContent) {
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        const heroHeight = document.querySelector('.hero').offsetHeight;
        const progress = scrolled / (heroHeight * 0.5);
        heroContent.style.opacity = Math.max(0, 1 - progress);
        heroContent.style.transform = `translateY(${scrolled * 0.12}px)`;
    }, { passive: true });
}
