// Año automático en footer
document.getElementById('year').textContent = new Date().getFullYear();

// Toggle tema oscuro/claro
const key = 'pref-theme';
const btn = document.getElementById('themeToggle');
const setTheme = (t)=>{
  document.documentElement.classList.toggle('light', t==='light');
  localStorage.setItem(key, t);
};
const cur = localStorage.getItem(key) || (matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
setTheme(cur);
btn.addEventListener('click', ()=> setTheme(document.documentElement.classList.contains('light') ? 'dark' : 'light'));

// Animación reveal on scroll
const obs = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.classList.add('in');
      obs.unobserve(e.target);
    }
  });
}, {threshold:.08});
document.querySelectorAll('[data-reveal]').forEach(el=>obs.observe(el));
