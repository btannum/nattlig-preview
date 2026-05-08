// Nattlig prototype – minimal interactivity (mock-only, ingen ekte cart)

// Mock cart state
let cartCount = 0;

function updateCartUI() {
  const badges = document.querySelectorAll('[data-cart-count]');
  badges.forEach(b => {
    b.textContent = cartCount;
    b.style.display = cartCount > 0 ? 'inline-flex' : 'none';
  });
}

function addToCart(productName, qty = 1) {
  cartCount += qty;
  updateCartUI();
  showToast(`${productName} lagt i kurven`);
}

function showToast(message) {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
    <span>${message}</span>
  `;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 3000);
}

// Variant selector
function initVariantSelectors() {
  document.querySelectorAll('.variant-option').forEach(opt => {
    opt.addEventListener('click', () => {
      const group = opt.closest('.variant-group');
      group.querySelectorAll('.variant-option').forEach(o => o.classList.remove('selected'));
      opt.classList.add('selected');
      const input = opt.querySelector('input');
      if (input) input.checked = true;
    });
  });
}

// Mobile menu toggle
function initMobileMenu() {
  const toggle = document.querySelector('.mobile-toggle');
  const menu = document.querySelector('.mobile-menu');
  if (!toggle || !menu) return;

  toggle.addEventListener('click', () => {
    menu.classList.toggle('open');
  });
}

// Header scroll effect
function initHeaderScroll() {
  const header = document.querySelector('header');
  if (!header) return;
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      header.classList.add('shrunk');
    } else {
      header.classList.remove('shrunk');
    }
  });
}

// Cookie banner
function initCookieBanner() {
  const banner = document.querySelector('.cookie-banner');
  if (!banner) return;

  if (localStorage.getItem('cookieAccepted')) {
    banner.classList.add('hidden');
    return;
  }

  banner.querySelector('[data-cookie-accept]')?.addEventListener('click', () => {
    localStorage.setItem('cookieAccepted', '1');
    banner.classList.add('hidden');
  });
  banner.querySelector('[data-cookie-reject]')?.addEventListener('click', () => {
    localStorage.setItem('cookieAccepted', '0');
    banner.classList.add('hidden');
  });
}

// Init all
document.addEventListener('DOMContentLoaded', () => {
  updateCartUI();
  initVariantSelectors();
  initMobileMenu();
  initHeaderScroll();
  initCookieBanner();

  // Wire up CTA buttons (any data-add-to-cart)
  document.querySelectorAll('[data-add-to-cart]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const selectedVariant = document.querySelector('.variant-option.selected');
      const variantText = selectedVariant ? selectedVariant.querySelector('.variant-name')?.textContent : 'Nattlig-puta';
      addToCart(variantText || 'Nattlig-puta', 1);
    });
  });
});
