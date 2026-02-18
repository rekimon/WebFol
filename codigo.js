/* =============================================
   SPORTWAVEFACTORY — script.js
   E-commerce interactions & cart system
   ============================================= */

'use strict';

// =============================================
// PRODUCTS DATA
// =============================================
const PRODUCTS = [
  // CAMISETAS
  {
    id: 1, cat: 'camisetas',
    name: 'Camiseta Wave Run Pro',
    desc: 'Tejido técnico reciclado de alta transpirabilidad. Ideal para running y entrenamientos intensos.',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&q=80',
    badge: 'new', badgeLabel: 'Nuevo', featured: true
  },
  {
    id: 2, cat: 'camisetas',
    name: 'Camiseta Urban Tech',
    desc: 'Corte relajado con tejido suave reciclado. Del gimnasio a la ciudad sin esfuerzo.',
    price: 29.99,
    image: 'https://images.unsplash.com/photo-1527719327859-c6ce80353573?w=500&q=80',
    badge: null
  },
  {
    id: 3, cat: 'camisetas',
    name: 'Camiseta Compression Wave',
    desc: 'Compresión muscular con tejido de cuatro vías. Reduce la fatiga y mejora el rendimiento.',
    price: 39.99, oldPrice: 49.99,
    image: 'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=500&q=80',
    badge: 'sale', badgeLabel: '-20%', featured: true
  },
  {
    id: 4, cat: 'camisetas',
    name: 'Camiseta Trail Off',
    desc: 'Protección UV50+ con ventilación posterior. Para salidas largas en montaña.',
    price: 44.99,
    image: 'https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=500&q=80',
    badge: null
  },

  // PANTALONES
  {
    id: 5, cat: 'pantalones',
    name: 'Legging Wave Power',
    desc: 'Legging de alta compresión con cinturilla ancha y bolsillos laterales. Para cualquier entrenamiento.',
    price: 54.99,
    image: 'https://images.unsplash.com/photo-1506629082955-511b1aa562c8?w=500&q=80',
    badge: 'new', badgeLabel: 'Nuevo', featured: true
  },
  {
    id: 6, cat: 'pantalones',
    name: 'Short Running Elite',
    desc: 'Short ultraligero con malla interior y tejido reciclado DryWave. Libertad de movimiento total.',
    price: 39.99,
    image: 'https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=500&q=80',
    badge: null
  },
  {
    id: 7, cat: 'pantalones',
    name: 'Pantalón Urban Jogger',
    desc: 'Comodidad y estilo urbano en un pantalón jogger técnico con bolsillos con cremallera.',
    price: 64.99,
    image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=500&q=80',
    badge: null
  },
  {
    id: 8, cat: 'pantalones',
    name: 'Legging Seamless Pro',
    desc: 'Construcción sin costuras para máxima comodidad. Tejido texturizado con efecto moldeador.',
    price: 59.99, oldPrice: 74.99,
    image: 'https://images.unsplash.com/photo-1518310383802-640c2de311b2?w=500&q=80',
    badge: 'sale', badgeLabel: '-20%'
  },

  // SUDADERAS
  {
    id: 9, cat: 'sudaderas',
    name: 'Hoodie Wave Club',
    desc: 'Sudadera con capucha en algodón orgánico reciclado. El básico sostenible que te faltaba.',
    price: 69.99,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=500&q=80',
    badge: 'new', badgeLabel: 'Nuevo', featured: true
  },
  {
    id: 10, cat: 'sudaderas',
    name: 'Sudadera Tech Quarter Zip',
    desc: 'Tejido fleece técnico con cierre en cuello. Perfecta para el calentamiento y días frescos.',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=500&q=80',
    badge: null
  },
  {
    id: 11, cat: 'sudaderas',
    name: 'Chaqueta Wind Pro',
    desc: 'Cortavientos ultrafino y empaquetable. Resistencia al viento con máxima ligereza.',
    price: 89.99,
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=500&q=80',
    badge: null
  },

  // ACCESORIOS
  {
    id: 12, cat: 'accesorios',
    name: 'Gorra Wave Run',
    desc: 'Gorra técnica con ventilación lateral y visera curva. Protección solar para tus entrenamientos.',
    price: 22.99,
    image: 'https://images.unsplash.com/photo-1521369909029-2afed882baee?w=500&q=80',
    badge: null, featured: true
  },
  {
    id: 13, cat: 'accesorios',
    name: 'Riñonera Sport Wave',
    desc: 'Bolsa de cintura con compartimento impermeabilizado. Lleva lo esencial en cualquier actividad.',
    price: 27.99,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80',
    badge: 'new', badgeLabel: 'Nuevo'
  },
  {
    id: 14, cat: 'accesorios',
    name: 'Set Bandas Resistencia',
    desc: 'Pack de 3 bandas elásticas de diferentes resistencias. Material reciclado duradero.',
    price: 18.99,
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=500&q=80',
    badge: null
  },
  {
    id: 15, cat: 'accesorios',
    name: 'Calcetines Pack Wave',
    desc: 'Pack de 3 pares de calcetines técnicos con amortiguación selectiva. Fibras recicladas.',
    price: 16.99,
    image: 'https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?w=500&q=80',
    badge: null
  },
];

// =============================================
// CART STATE
// =============================================
let cart = [];

// =============================================
// INIT
// =============================================
document.addEventListener('DOMContentLoaded', () => {
  renderFeaturedProducts();
  renderAllProducts();
  initHeader();
  initRevealObserver();
  setActiveNav('home');
});

// =============================================
// PAGE NAVIGATION
// =============================================
function showPage(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const target = document.getElementById('page-' + pageId);
  if (target) {
    target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  setActiveNav(pageId);
  // Re-run reveal for newly shown page
  setTimeout(initRevealObserver, 100);
}

function setActiveNav(pageId) {
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.style.color = a.dataset.page === pageId ? 'var(--white)' : '';
  });
}

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth' });
}

// =============================================
// HEADER SCROLL
// =============================================
function initHeader() {
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 40);
  });
  // Start with scrolled if not at home
  header.classList.add('scrolled');
}

// =============================================
// MOBILE MENU
// =============================================
function toggleMenu() {
  const nav = document.getElementById('navLinks');
  const ham = document.getElementById('hamburger');
  nav.classList.toggle('open');
  ham.classList.toggle('active');
}

// Close menu on link click
document.addEventListener('click', (e) => {
  if (e.target.closest('.nav-links a')) {
    document.getElementById('navLinks').classList.remove('open');
  }
});

// =============================================
// RENDER PRODUCTS
// =============================================
function createProductCard(product) {
  const card = document.createElement('div');
  card.className = 'product-card reveal';
  card.innerHTML = `
    <div class="product-img">
      <img src="${product.image}" alt="${product.name}" loading="lazy" />
      ${product.badge ? `<span class="product-badge ${product.badge}">${product.badgeLabel}</span>` : ''}
    </div>
    <div class="product-info">
      <div class="product-cat">${getCatLabel(product.cat)}</div>
      <h3 class="product-name">${product.name}</h3>
      <p class="product-desc">${product.desc}</p>
      <div class="product-footer">
        <div class="product-price">
          ${product.oldPrice ? `<span class="old-price">€${product.oldPrice.toFixed(2)}</span>` : ''}
          €${product.price.toFixed(2)}
        </div>
        <button class="add-cart-btn" onclick="addToCart(${product.id})">
          <i class="fas fa-plus"></i> Añadir
        </button>
      </div>
    </div>
  `;
  return card;
}

function getCatLabel(cat) {
  const labels = {
    camisetas: 'Camisetas',
    pantalones: 'Pantalones & Leggings',
    sudaderas: 'Sudaderas',
    accesorios: 'Accesorios'
  };
  return labels[cat] || cat;
}

function renderFeaturedProducts() {
  const grid = document.getElementById('featuredGrid');
  if (!grid) return;
  const featured = PRODUCTS.filter(p => p.featured).slice(0, 4);
  featured.forEach((p, i) => {
    const card = createProductCard(p);
    card.style.animationDelay = `${i * 0.1}s`;
    grid.appendChild(card);
  });
}

function renderAllProducts(filterCat = 'all') {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;
  grid.innerHTML = '';
  const filtered = filterCat === 'all'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.cat === filterCat);
  filtered.forEach((p, i) => {
    const card = createProductCard(p);
    card.style.animationDelay = `${i * 0.05}s`;
    grid.appendChild(card);
  });
  setTimeout(initRevealObserver, 50);
}

function filterProducts(cat, btn) {
  renderAllProducts(cat);
  if (btn) {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  }
}

// =============================================
// CART
// =============================================
function addToCart(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const existing = cart.find(item => item.id === productId);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ ...product, qty: 1 });
  }

  updateCartUI();
  openCart();
  showAddFeedback(productId);
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  updateCartUI();
}

function updateQty(productId, delta) {
  const item = cart.find(i => i.id === productId);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) removeFromCart(productId);
  else updateCartUI();
}

function updateCartUI() {
  // Count
  const total = cart.reduce((sum, item) => sum + item.qty, 0);
  document.getElementById('cartCount').textContent = total;

  // Items
  const container = document.getElementById('cartItems');
  const footer = document.getElementById('cartFooter');

  if (cart.length === 0) {
    container.innerHTML = '<p class="cart-empty">Tu carrito está vacío</p>';
    footer.style.display = 'none';
    return;
  }

  container.innerHTML = '';
  cart.forEach(item => {
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      <div class="cart-item-img">
        <img src="${item.image}" alt="${item.name}" />
      </div>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        <div class="cart-item-price">€${(item.price * item.qty).toFixed(2)}</div>
        <div class="cart-item-controls">
          <button class="qty-btn" onclick="updateQty(${item.id}, -1)"><i class="fas fa-minus"></i></button>
          <span class="qty-val">${item.qty}</span>
          <button class="qty-btn" onclick="updateQty(${item.id}, 1)"><i class="fas fa-plus"></i></button>
          <button class="remove-item" onclick="removeFromCart(${item.id})"><i class="fas fa-trash"></i></button>
        </div>
      </div>
    `;
    container.appendChild(div);
  });

  // Total
  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  document.getElementById('cartTotal').textContent = `€${cartTotal.toFixed(2)}`;
  footer.style.display = 'block';
}

function openCart() {
  document.getElementById('cartSidebar').classList.add('open');
  document.getElementById('cartOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function toggleCart() {
  const sidebar = document.getElementById('cartSidebar');
  const overlay = document.getElementById('cartOverlay');
  const isOpen = sidebar.classList.contains('open');
  sidebar.classList.toggle('open', !isOpen);
  overlay.classList.toggle('open', !isOpen);
  document.body.style.overflow = isOpen ? '' : 'hidden';
}

function showAddFeedback(productId) {
  const btns = document.querySelectorAll('.add-cart-btn');
  // We can't easily target by productId in static HTML, so we show a brief pulse on the cart icon
  const cartBtn = document.querySelector('.cart-btn');
  cartBtn.style.transform = 'scale(1.3)';
  cartBtn.style.color = 'var(--blue)';
  setTimeout(() => {
    cartBtn.style.transform = '';
    cartBtn.style.color = '';
  }, 300);
}

// =============================================
// CHECKOUT
// =============================================
function checkout() {
  if (cart.length === 0) return;
  toggleCart();
  setTimeout(() => {
    document.getElementById('checkoutModal').classList.add('open');
    cart = [];
    updateCartUI();
  }, 400);
}

function closeModal() {
  document.getElementById('checkoutModal').classList.remove('open');
}

// =============================================
// CONTACT FORM
// =============================================
function submitForm(e) {
  e.preventDefault();
  const form = e.target;
  const btn = form.querySelector('button[type="submit"]');
  btn.textContent = 'Enviando...';
  btn.disabled = true;

  setTimeout(() => {
    form.innerHTML = `
      <div class="form-success">
        <i class="fas fa-check-circle" style="font-size:2rem;display:block;margin-bottom:12px;"></i>
        ¡Mensaje enviado con éxito!<br>
        Te responderemos en menos de 24 horas.
      </div>
    `;
  }, 1200);
}

// =============================================
// SCROLL REVEAL
// =============================================
function initRevealObserver() {
  const els = document.querySelectorAll('.reveal:not(.visible)');
  if ('IntersectionObserver' in window) {
    const obs = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          obs.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });
    els.forEach(el => obs.observe(el));
  } else {
    els.forEach(el => el.classList.add('visible'));
  }
}

// =============================================
// KEYBOARD ACCESSIBILITY
// =============================================
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    const sidebar = document.getElementById('cartSidebar');
    if (sidebar.classList.contains('open')) toggleCart();
    closeModal();
  }
});