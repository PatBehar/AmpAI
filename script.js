(() => {
  'use strict';
  const button = document.querySelector('[data-menu-toggle]');
  const nav = document.querySelector('[data-nav]');
  const setOpen = open => {
    if (!button || !nav) return;
    button.setAttribute('aria-expanded', String(open));
    button.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    nav.classList.toggle('is-open', open);
    document.body.classList.toggle('menu-open', open);
  };
  button?.addEventListener('click', () => setOpen(button.getAttribute('aria-expanded') !== 'true'));
  nav?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => setOpen(false)));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') setOpen(false); });
  document.addEventListener('click', e => { if (nav?.classList.contains('is-open') && !nav.contains(e.target) && !button.contains(e.target)) setOpen(false); });
  const breakpoint = window.matchMedia('(min-width: 841px)');
  breakpoint.addEventListener?.('change', e => { if (e.matches) setOpen(false); });
  document.querySelectorAll('[data-year]').forEach(el => el.textContent = String(new Date().getFullYear()));
})();
