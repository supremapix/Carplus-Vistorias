// Native disclosure remains functional without JavaScript; add dismissal shortcuts.
document.addEventListener('click', (event) => {
  const target = event.target;
  if (!(target instanceof Element)) return;
  const menu = target.closest('[data-carplus-mobile-menu]');
  if (menu instanceof HTMLDetailsElement && target.closest('a, [data-carplus-menu-backdrop]')) {
    menu.open = false;
    if (target.closest('[data-carplus-menu-backdrop]')) menu.querySelector('summary')?.focus();
  }
});
document.addEventListener('keydown', (event) => {
  if (event.key !== 'Escape') return;
  const menu = document.querySelector('details[data-carplus-mobile-menu][open]');
  if (menu instanceof HTMLDetailsElement) {
    menu.open = false;
    menu.querySelector('summary')?.focus();
  }
});
