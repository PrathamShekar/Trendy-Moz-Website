/* ============================================
   TrendyMoz — Script Principal
   ============================================ */

// ========== DADOS DOS PRODUTOS ==========
const PRODUCTS = [
  {
    id: 1,
    name: 'Stay Calm',
    color: 'Preto',
    price: 1850,
    badge: null,
    bestSeller: true,
    category: 'oversized',
    dateAdded: '2025-10-27',
    sizes: ['M', 'L'],
    frontImage: 'assets/48.webp',
    backImage: 'assets/49.webp',
  },
  {
    id: 2,
    name: 'Hustle',
    color: 'Preto',
    price: 2500,
    badge: null,
    bestSeller: false,
    category: 'oversized',
    dateAdded: '2025-10-28',
    sizes: ['M', 'L'],
    frontImage: 'assets/68.webp',
    backImage: 'assets/69.webp'
  },
  {
    id: 3,
    name: 'Baddass',
    color: 'Preto',
    price: 1800,
    badge: null,
    bestSeller: true,
    category: 'oversized',
    dateAdded: '2026-02-21',
    sizes: ['M', 'L', 'XL'],
    frontImage: 'assets/71.webp',
    backImage: 'assets/72.webp',
  },
  {
    id: 4,
    name: 'Red Roses',
    color: 'Preto',
    price: 1900,
    badge: 'Limitado',
    bestSeller: false,
    category: 'oversized',
    dateAdded: '2026-01-22',
    sizes: ['M', 'L', 'XL'],
    frontImage: 'assets/17.webp',
    backImage: 'assets/18.webp',
  },
  {
    id: 5,
    name: 'Distortion',
    color: 'Preto',
    price: 1800,
    badge: null,
    bestSeller: false,
    category: 'oversized',
    dateAdded: '2026-01-23',
    sizes: ['M', 'L'],
    frontImage: 'assets/76.webp',
    backImage: 'assets/77.webp',
  },
  {
    id: 6,
    name: 'XO - Roseanne',
    color: 'Preto',
    price: 2000,
    badge: null,
    bestSeller: false,
    category: 'oversized',
    dateAdded: '2026-01-24',
    sizes: ['S', 'M'],
    frontImage: 'assets/86.webp',
    backImage: 'assets/87.webp',
  },
  {
    id: 7,
    name: 'Stop Staring',
    color: 'Preto',
    price: 1800,
    badge: null,
    bestSeller: true,
    category: 'oversized',
    dateAdded: '2026-01-25',
    sizes: ['M', 'L'],
    frontImage: 'assets/73.webp',
    backImage: 'assets/74.webp',
  },
  {
    id: 8,
    name: 'Hope',
    color: 'Preto',
    price: 1800,
    badge: null,
    bestSeller: false,
    category: 'oversized',
    dateAdded: '2026-01-26',
    sizes: ['M', 'L'],
    frontImage: 'assets/42.webp',
    backImage: 'assets/43.webp',
  },
  {
    id: 9,
    name: 'Trust No One',
    color: 'Branco',
    price: 2000,
    badge: null,
    bestSeller: true,
    category: 'oversized',
    dateAdded: '2026-02-27',
    sizes: ['M', 'L'],
    frontImage: 'assets/16.webp',
    backImage: 'assets/75.webp',
  },
  {
    id: 10,
    name: 'Vibes',
    color: 'Preto',
    price: 1600,
    badge: null,
    bestSeller: true,
    category: 'oversized',
    dateAdded: '2026-02-28',
    sizes: ['M', 'L'],
    frontImage: 'assets/117.webp',
    backImage: 'assets/43.webp',
  },
  {
    id: 11,
    name: 'Eyes Never Lie',
    color: 'Branco',
    price: 2200,
    badge: null,
    bestSeller: false,
    category: 'oversized',
    dateAdded: '2026-03-03',
    sizes: ['M', 'L', 'XL'],
    frontImage: 'assets/58.webp',
    backImage: 'assets/59.webp',
  },
  {
    id: 12,
    name: 'Freedom',
    color: 'Preto',
    price: 2000,
    badge: null,
    bestSeller: false,
    category: 'oversized',
    dateAdded: '2026-03-04',
    sizes: ['M', 'L', 'XL'],
    frontImage: 'assets/52.webp',
    backImage: 'assets/53.webp',
  },
  {
    id: 13,
    name: 'Stop Staring - Niche Edition',
    color: 'Preto',
    price: 2200,
    badge: null,
    bestSeller: true,
    category: 'oversized',
    dateAdded: '2026-03-05',
    sizes: ['M', 'L', 'XL'],
    frontImage: 'assets/64.webp',
    backImage: 'assets/65.webp',
  },
  {
    id: 14,
    name: 'XO - Eagle Edition',
    color: 'Preto',
    price: 2500,
    badge: null,
    bestSeller: false,
    category: 'oversized',
    dateAdded: '2026-03-06',
    sizes: ['M', 'L', 'XL'],
    frontImage: 'assets/54.webp',
    backImage: 'assets/55.webp',
  },
  {
    id: 15,
    name: 'XO - Not Surprised Edition',
    color: 'Branco',
    price: 2000,
    badge: null,
    bestSeller: false,
    category: 'oversized',
    dateAdded: '2026-03-07',
    sizes: ['M', 'L', 'XL'],
    frontImage: 'assets/56.webp',
    backImage: 'assets/57.webp',
  },
  {
    id: 16,
    name: 'Stop Staring',
    color: 'Beige',
    price: 1800,
    badge: null,
    bestSeller: true,
    category: 'oversized',
    dateAdded: '2026-03-10',
    sizes: ['M', 'L'],
    frontImage: 'assets/92.webp',
    backImage: 'assets/93.webp',
  },
  {
    id: 17,
    name: 'Stop Staring',
    color: 'Branco',
    price: 1800,
    badge: null,
    bestSeller: false,
    category: 'oversized',
    dateAdded: '2026-03-09',
    sizes: ['M', 'L'],
    frontImage: 'assets/98.webp',
    backImage: 'assets/99.webp',
  },
  {
    id: 18,
    name: 'Itachi Uchiha',
    color: 'Preto',
    price: 1850,
    badge: 'Limitado',
    bestSeller: false,
    category: 'oversized',
    dateAdded: '2025-10-27',
    sizes: ['S', 'M', 'L', 'XL'],
    frontImage: 'assets/44.webp',
    backImage: 'assets/45.webp',
  },
  {
    id: 19,
    name: 'Plain',
    color: 'Preto',
    price: 1200,
    badge: null,
    bestSeller: false,
    category: 'oversized',
    dateAdded: '2026-01-19',
    sizes: ['S', 'M', 'L', 'XL'],
    frontImage: 'assets/27.webp',
    backImage: 'assets/43.webp',
  },
  {
    id: 20,
    name: 'Plain',
    color: 'Branco',
    price: 1200,
    badge: null,
    bestSeller: false,
    category: 'oversized',
    dateAdded: '2026-01-19',
    sizes: ['S', 'M', 'L', 'XL'],
    frontImage: 'assets/29.webp',
    backImage: 'assets/99.webp',
  },
  {
    id: 21,
    name: 'Plain',
    color: 'Beige',
    price: 1200,
    badge: null,
    bestSeller: false,
    category: 'oversized',
    dateAdded: '2026-01-19',
    sizes: ['S', 'M', 'L', 'XL'],
    frontImage: 'assets/28.webp',
    backImage: 'assets/93.webp',
  },
  {
    id: 22,
    name: 'Baby Girl',
    color: 'Beige',
    price: 1800,
    badge: null,
    bestSeller: false,
    category: 'oversized',
    dateAdded: '2026-05-09',
    sizes: ['M', 'L', 'XL'],
    frontImage: 'assets/30.webp',
    backImage: 'assets/31.webp',
  },
  {
    id: 23,
    name: 'Stay Weird',
    color: 'Beige',
    price: 2000,
    badge: null,
    bestSeller: false,
    category: 'oversized',
    dateAdded: '2026-05-09',
    sizes: ['M', 'L', 'XL'],
    frontImage: 'assets/32.webp',
    backImage: 'assets/33.webp',
  },
  {
    id: 24,
    name: 'Fresh',
    color: 'Beige',
    price: 1950,
    badge: null,
    bestSeller: false,
    category: 'oversized',
    dateAdded: '2026-05-09',
    sizes: ['M', 'L', 'XL'],
    frontImage: 'assets/34.webp',
    backImage: 'assets/35.webp',
  },
  {
    id: 25,
    name: 'Baby Girl',
    color: 'Preto',
    price: 1800,
    badge: 'Novo',
    bestSeller: false,
    category: 'oversized',
    dateAdded: '2026-05-09',
    sizes: ['M', 'L', 'XL'],
    frontImage: 'assets/36.webp',
    backImage: 'assets/37.webp',
  },
  {
    id: 26,
    name: 'Alinhamento Lunar',
    color: 'Preto',
    price: 2500,
    badge: 'Novo',
    bestSeller: false,
    category: 'oversized',
    dateAdded: '2026-05-09',
    sizes: ['M', 'L', 'XL'],
    frontImage: 'assets/38.webp',
    backImage: 'assets/39.webp',
  },
  {
    id: 28,
    name: 'New Product 6',
    color: 'Preto',
    price: 1500,
    badge: 'Novo',
    bestSeller: false,
    category: 'oversized',
    dateAdded: '2026-05-09',
    sizes: ['S', 'M', 'L', 'XL'],
    frontImage: 'assets/17.webp',
    backImage: 'assets/18.webp',
  }
];

const WHATSAPP_NUMBER = '258849642400';
const CURRENCY = 'MZN';

// ========== ESTADO ==========
let cart = JSON.parse(localStorage.getItem('trendymoz_cart') || '[]');
let currentProduct = null;
let selectedSize = null;
let selectedQty = 1;
let selectedImageView = 'front';
let currentSort = 'best-selling';
let currentCategory = 'oversized';

// ========== ELEMENTOS DOM ==========
const DOM = {};

function cacheDom() {
  DOM.hamburgerBtn = document.getElementById('hamburger-btn');
  DOM.mobileNav = document.getElementById('mobile-nav');
  DOM.header = document.getElementById('main-header');
  DOM.cartBtn = document.getElementById('cart-btn');
  DOM.cartCount = document.getElementById('cart-count');
  DOM.cartOverlay = document.getElementById('cart-overlay');
  DOM.cartDrawer = document.getElementById('cart-drawer');
  DOM.cartItemsContainer = document.getElementById('cart-items');
  DOM.cartEmptyState = document.getElementById('cart-empty');
  DOM.cartFooter = document.getElementById('cart-footer');
  DOM.cartTotal = document.getElementById('cart-total');
  DOM.cartCloseBtn = document.getElementById('cart-close-btn');
  DOM.categoriesTabs = document.querySelectorAll('.category-tab');
  DOM.productsGrid = document.getElementById('products-grid');
  DOM.sortDropdown = document.getElementById('sort-dropdown');
  DOM.sortDropdownTrigger = document.getElementById('sort-dropdown-trigger');
  DOM.sortDropdownMenu = document.getElementById('sort-dropdown-menu');
  DOM.sortDropdownLabel = document.getElementById('sort-dropdown-label');
  DOM.sortBarCount = document.getElementById('sort-bar-count');
  DOM.showProductsContainer = document.getElementById('show-products-container');
  DOM.showProductsBtn = document.getElementById('show-products-btn');
  DOM.productsContentWrapper = document.getElementById('products-content-wrapper');
  DOM.productModalOverlay = document.getElementById('product-modal-overlay');
  DOM.modalProductName = document.getElementById('modal-product-name');
  DOM.modalProductPrice = document.getElementById('modal-product-price');
  DOM.modalProductDesc = document.getElementById('modal-product-desc');
  DOM.modalGalleryImg = document.getElementById('modal-gallery-img');
  DOM.galleryFrontBtn = document.getElementById('gallery-front-btn');
  DOM.galleryBackBtn = document.getElementById('gallery-back-btn');
  DOM.modalSizes = document.getElementById('modal-sizes');
  DOM.qtyValue = document.getElementById('qty-value');
  DOM.qtyMinus = document.getElementById('qty-minus');
  DOM.qtyPlus = document.getElementById('qty-plus');
  DOM.addToCartBtn = document.getElementById('add-to-cart-btn');
  DOM.buyNowBtn = document.getElementById('buy-now-btn');
  DOM.modalCloseBtn = document.getElementById('modal-close-btn');
  DOM.checkoutOverlay = document.getElementById('checkout-overlay');
  DOM.checkoutCloseBtn = document.getElementById('checkout-close-btn');
  DOM.checkoutItems = document.getElementById('checkout-items');
  DOM.checkoutTotal = document.getElementById('checkout-total');
  DOM.placeOrderBtn = document.getElementById('place-order-btn');
  DOM.paymentMethods = document.querySelectorAll('.payment-method');
  DOM.checkoutForm = document.getElementById('checkout-form');
  DOM.toast = document.getElementById('toast');
  DOM.toastMessage = document.getElementById('toast-message');
  DOM.termsOverlay = document.getElementById('terms-overlay');
  DOM.termsCloseBtn = document.getElementById('terms-close-btn');
}

// ========== UTILITÁRIOS ==========
function formatPrice(amount) {
  return new Intl.NumberFormat('pt-MZ').format(amount) + ' ' + CURRENCY;
}

function showToast(message) {
  DOM.toastMessage.textContent = message;
  DOM.toast.classList.add('show', 'success');
  setTimeout(() => {
    DOM.toast.classList.remove('show', 'success');
  }, 3000);
}

function lockBody() {
  document.body.classList.add('locked');
}

function unlockBody() {
  document.body.classList.remove('locked');
}

function saveCart() {
  localStorage.setItem('trendymoz_cart', JSON.stringify(cart));
}

function getCartTotal() {
  return cart.reduce((sum, item) => sum + item.price * item.qty, 0);
}

function getCartCount() {
  return cart.reduce((sum, item) => sum + item.qty, 0);
}

// ========== ORDENAÇÃO DE PRODUTOS ==========
function getFilteredAndSortedProducts() {
  const filtered = PRODUCTS.filter(p => !currentCategory || currentCategory === 'all' || p.category === currentCategory);
  const sorted = [...filtered];
  switch (currentSort) {
    case 'best-selling':
      sorted.sort((a, b) => (b.bestSeller ? 1 : 0) - (a.bestSeller ? 1 : 0));
      break;
    case 'name-asc':
      sorted.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case 'name-desc':
      sorted.sort((a, b) => b.name.localeCompare(a.name));
      break;
    case 'price-asc':
      sorted.sort((a, b) => a.price - b.price);
      break;
    case 'price-desc':
      sorted.sort((a, b) => b.price - a.price);
      break;
    case 'date-asc':
      sorted.sort((a, b) => new Date(a.dateAdded) - new Date(b.dateAdded));
      break;
    case 'date-desc':
      sorted.sort((a, b) => new Date(b.dateAdded) - new Date(a.dateAdded));
      break;
    default:
      break; // keep original order
  }
  return sorted;
}

const SORT_LABELS = {
  'best-selling': 'Mais vendidos',
  'name-asc': 'Alfabeticamente, A-Z',
  'name-desc': 'Alfabeticamente, Z-A',
  'price-asc': 'Preço, menor ao maior',
  'price-desc': 'Preço, maior ao menor',
  'date-asc': 'Data, antigo ao novo',
  'date-desc': 'Data, novo ao antigo',
};

function setSort(sortKey) {
  currentSort = sortKey;

  // Update label
  DOM.sortDropdownLabel.textContent = SORT_LABELS[sortKey] || 'Mais vendidos';

  // Update active state in dropdown
  DOM.sortDropdownMenu.querySelectorAll('.sort-option').forEach(opt => {
    opt.classList.toggle('active', opt.dataset.sort === sortKey);
  });

  // Close dropdown
  closeSortDropdown();

  // Re-render
  renderProducts();
}

function toggleSortDropdown() {
  const isOpen = DOM.sortDropdown.classList.toggle('open');
  DOM.sortDropdownTrigger.setAttribute('aria-expanded', isOpen);
}

function closeSortDropdown() {
  DOM.sortDropdown.classList.remove('open');
  DOM.sortDropdownTrigger.setAttribute('aria-expanded', 'false');
}

function setCategory(category) {
  currentCategory = category;

  // Update tabs visual state
  if (DOM.categoriesTabs) {
    DOM.categoriesTabs.forEach(tab => {
      tab.classList.toggle('active', tab.dataset.category === category);
    });
  }

  // Re-render
  renderProducts();
}

// ========== RENDERIZAR PRODUTOS ==========
function renderProducts() {
  const products = getFilteredAndSortedProducts();

  // Update count
  DOM.sortBarCount.textContent = `${products.length} produto${products.length !== 1 ? 's' : ''}`;

  DOM.productsGrid.innerHTML = products.map(product => `
    <article class="product-card reveal" data-product-id="${product.id}" onclick="openProductModal(${product.id})">
      <div class="product-card-image">
        <img src="${product.frontImage}" alt="${product.name}" loading="lazy">
        ${product.badge ? `<span class="product-card-badge">${product.badge}</span>` : ''}
        <div class="product-card-actions">
          <button class="product-card-action-btn" onclick="event.stopPropagation(); quickAddToCart(${product.id})" title="Adicionar ao Carrinho" aria-label="Adicionar ${product.name} ao carrinho">
            <svg viewBox="0 0 24 24"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4zM3 6h18M16 10a4 4 0 01-8 0"/></svg>
          </button>
          <button class="product-card-action-btn" onclick="event.stopPropagation(); shareProduct(${product.id})" title="Partilhar" aria-label="Partilhar ${product.name}">
            <svg viewBox="0 0 24 24"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>
          </button>
        </div>
      </div>
      <div class="product-card-info">
        <h3 class="product-card-name">${product.name}</h3>
        <p class="product-card-color">${product.color}</p>
        <p class="product-card-price">${formatPrice(product.price)}</p>
      </div>
    </article>
  `).join('');

  // Acionar animações de revelação
  requestAnimationFrame(() => {
    document.querySelectorAll('.product-card.reveal').forEach((el, i) => {
      setTimeout(() => el.classList.add('visible'), i * 100);
    });
  });
}

// ========== MODAL DO PRODUTO ==========
function openProductModal(productId) {
  currentProduct = PRODUCTS.find(p => p.id === productId);
  if (!currentProduct) return;

  selectedSize = null;
  selectedQty = 1;
  selectedImageView = 'front';

  DOM.modalProductName.textContent = currentProduct.name;
  DOM.modalProductPrice.textContent = formatPrice(currentProduct.price);
  DOM.modalProductDesc.textContent = 'Trendy Moz - ' + currentProduct.name;
  DOM.modalGalleryImg.src = currentProduct.frontImage;
  DOM.modalGalleryImg.alt = currentProduct.name + ' - Frente';
  DOM.qtyValue.textContent = '1';

  // Renderizar tamanhos
  DOM.modalSizes.innerHTML = currentProduct.sizes.map(size => `
    <button class="size-btn" data-size="${size}" onclick="selectSize('${size}')">${size}</button>
  `).join('');

  // Resetar toggle da galeria
  DOM.galleryFrontBtn.classList.add('active');
  DOM.galleryBackBtn.classList.remove('active');

  DOM.productModalOverlay.classList.add('open');
  lockBody();
}

function closeProductModal() {
  DOM.productModalOverlay.classList.remove('open');
  unlockBody();
  currentProduct = null;
}

function selectSize(size) {
  selectedSize = size;
  DOM.modalSizes.querySelectorAll('.size-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.size === size);
  });
}

function toggleGalleryView(view) {
  selectedImageView = view;
  if (view === 'front') {
    DOM.modalGalleryImg.src = currentProduct.frontImage;
    DOM.modalGalleryImg.alt = currentProduct.name + ' - Frente';
    DOM.galleryFrontBtn.classList.add('active');
    DOM.galleryBackBtn.classList.remove('active');
  } else {
    DOM.modalGalleryImg.src = currentProduct.backImage;
    DOM.modalGalleryImg.alt = currentProduct.name + ' - Costas';
    DOM.galleryBackBtn.classList.add('active');
    DOM.galleryFrontBtn.classList.remove('active');
  }
}

function updateQty(delta) {
  selectedQty = Math.max(1, Math.min(10, selectedQty + delta));
  DOM.qtyValue.textContent = selectedQty;
}

// ========== OPERAÇÕES DO CARRINHO ==========
function addToCart(product, size, qty) {
  if (!size) {
    showToast('Por favor, seleccione um tamanho');
    return false;
  }

  const existingIndex = cart.findIndex(item => item.id === product.id && item.size === size);
  if (existingIndex >= 0) {
    cart[existingIndex].qty += qty;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      color: product.color,
      price: product.price,
      size: size,
      qty: qty,
      image: product.frontImage,
    });
  }
  saveCart();
  updateCartUI();
  return true;
}

function quickAddToCart(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  const defaultSize = product.sizes.includes('M') ? 'M' : product.sizes[0];
  addToCart(product, defaultSize, 1);
  showToast(`${product.name} adicionado ao carrinho`);
}

function removeFromCart(index) {
  cart.splice(index, 1);
  saveCart();
  updateCartUI();
  renderCartItems();
}

function updateCartItemQty(index, delta) {
  cart[index].qty = Math.max(1, cart[index].qty + delta);
  saveCart();
  updateCartUI();
  renderCartItems();
}

function updateCartUI() {
  const count = getCartCount();
  DOM.cartCount.textContent = count;
  DOM.cartCount.classList.toggle('visible', count > 0);
}

function renderCartItems() {
  if (cart.length === 0) {
    DOM.cartEmptyState.style.display = 'flex';
    DOM.cartItemsContainer.innerHTML = '';
    DOM.cartFooter.style.display = 'none';
    return;
  }

  DOM.cartEmptyState.style.display = 'none';
  DOM.cartFooter.style.display = 'block';
  DOM.cartTotal.textContent = formatPrice(getCartTotal());

  DOM.cartItemsContainer.innerHTML = cart.map((item, index) => `
    <div class="cart-item">
      <div class="cart-item-image">
        <img src="${item.image}" alt="${item.name}">
      </div>
      <div class="cart-item-info">
        <p class="cart-item-name">${item.name}</p>
        <p class="cart-item-meta">Tamanho: ${item.size} · ${item.color}</p>
        <p class="cart-item-price">${formatPrice(item.price * item.qty)}</p>
      </div>
      <div class="cart-item-controls">
        <button class="cart-item-remove" onclick="removeFromCart(${index})" aria-label="Remover item">
          <svg viewBox="0 0 24 24"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
        </button>
        <div class="cart-item-qty">
          <button class="cart-qty-btn" onclick="updateCartItemQty(${index}, -1)" aria-label="Diminuir quantidade">−</button>
          <span>${item.qty}</span>
          <button class="cart-qty-btn" onclick="updateCartItemQty(${index}, 1)" aria-label="Aumentar quantidade">+</button>
        </div>
      </div>
    </div>
  `).join('');
}

// ========== GAVETA DO CARRINHO ==========
function openCart() {
  renderCartItems();
  DOM.cartOverlay.classList.add('open');
  DOM.cartDrawer.classList.add('open');
  lockBody();
}

function closeCart() {
  DOM.cartOverlay.classList.remove('open');
  DOM.cartDrawer.classList.remove('open');
  unlockBody();
}

// ========== MODAL DE CHECKOUT ==========
function openCheckout() {
  if (cart.length === 0) return;
  closeCart();

  DOM.checkoutItems.innerHTML = cart.map(item => `
    <div class="checkout-item">
      <div>
        <span class="checkout-item-name">${item.name}</span>
        <div class="checkout-item-detail">Tamanho: ${item.size} · Qtd: ${item.qty}</div>
      </div>
      <span class="checkout-item-price">${formatPrice(item.price * item.qty)}</span>
    </div>
  `).join('');

  DOM.checkoutTotal.textContent = formatPrice(getCartTotal());

  setTimeout(() => {
    DOM.checkoutOverlay.classList.add('open');
    lockBody();
  }, 300);
}

function closeCheckout() {
  DOM.checkoutOverlay.classList.remove('open');
  unlockBody();
}

function selectPaymentMethod(element) {
  DOM.paymentMethods.forEach(m => m.classList.remove('selected'));
  element.classList.add('selected');
  element.querySelector('input[type="radio"]').checked = true;
}

// ========== TERMOS E CONDIÇÕES ==========
function openTerms() {
  DOM.termsOverlay.classList.add('open');
  lockBody();
}

function closeTerms() {
  DOM.termsOverlay.classList.remove('open');
  unlockBody();
}

// ========== PARTILHAR ==========


function placeOrder() {
  const fullName = document.getElementById('checkout-name').value.trim();
  const phone = document.getElementById('checkout-phone').value.trim();
  const deliveryLocation = document.getElementById('checkout-delivery-location').value.trim();

  const selectedPayment = document.querySelector('.payment-method.selected .payment-method-name');
  const paymentName = selectedPayment ? selectedPayment.textContent : 'Não seleccionado';

  if (!fullName || !phone || !deliveryLocation) {
    showToast('Por favor, preencha todos os campos obrigatórios');
    return;
  }

  if (!selectedPayment) {
    showToast('Por favor, seleccione um método de pagamento');
    return;
  }

  let message = 'Nova Encomenda TrendyMoz\n\n';
  message += 'Detalhes da Encomenda:\n';
  cart.forEach((item, i) => {
    message += `  ${i + 1}. ${item.name} (${item.color})\n     Tamanho: ${item.size} | Qtd: ${item.qty}\n     ${formatPrice(item.price * item.qty)}\n`;
  });
  message += `\nTotal: ${formatPrice(getCartTotal())}\n\n`;
  message += 'Dados da Entrega:\n';
  message += `Nome: ${fullName}\n`;
  message += `Telefone: ${phone}\n`;
  message += `Local da Entrega: ${deliveryLocation}\n\n`;
  message += `Pagamento: ${paymentName}\n`;
  message += '━━━━━━━━━━━━━━━';

  const encoded = encodeURIComponent(message);
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`, '_blank');

  // Limpar carrinho depois de fazer pedido
  cart = [];
  saveCart();
  updateCartUI();
  closeCheckout();
  showToast('Pedido enviado! Confirmaremos via WhatsApp');
}

// ========== NAVEGAÇÃO MOBILE ==========
function toggleMobileNav() {
  const isOpen = DOM.mobileNav.classList.toggle('open');
  DOM.hamburgerBtn.classList.toggle('active');
  if (isOpen) {
    lockBody();
  } else {
    unlockBody();
  }
}

// ========== EFEITOS DE SCROLL ==========
function handleScroll() {
  const scrolled = window.scrollY > 30;
  DOM.header.classList.toggle('scrolled', scrolled);

  // Animação de revelação
  document.querySelectorAll('.reveal:not(.visible)').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 60) {
      el.classList.add('visible');
    }
  });
}

// ========== INICIALIZAÇÃO ==========
function init() {
  cacheDom();
  renderProducts();
  updateCartUI();

  // ----- Mostrar Produtos -----
  if (DOM.showProductsBtn) {
    const btnText = document.getElementById('hero-cta-text');
    const btnIcon = document.getElementById('hero-cta-icon');

    DOM.showProductsBtn.addEventListener('click', (e) => {
      e.preventDefault(); // Stop native jump
      const isHidden = DOM.productsContentWrapper.classList.contains('hidden');

      if (isHidden) {
        DOM.productsContentWrapper.classList.remove('hidden');
        if (btnText) btnText.textContent = 'Ocultar Colecção';
        if (btnIcon) btnIcon.style.transform = 'rotate(180deg)';
        handleScroll(); // Garantir que as animações de reveal são chamadas
        document.getElementById('shop').scrollIntoView({ behavior: 'smooth' });
      } else {
        DOM.productsContentWrapper.classList.add('hidden');
        if (btnText) btnText.textContent = 'Ver Colecção';
        if (btnIcon) btnIcon.style.transform = 'rotate(0deg)';
        document.getElementById('shop').scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // ----- Hamburger -----
  DOM.hamburgerBtn.addEventListener('click', toggleMobileNav);

  // Fechar nav mobile ao clicar no link
  DOM.mobileNav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      DOM.mobileNav.classList.remove('open');
      DOM.hamburgerBtn.classList.remove('active');
      unlockBody();
    });
  });

  // ----- Categorias -----
  if (DOM.categoriesTabs) {
    DOM.categoriesTabs.forEach(tab => {
      tab.addEventListener('click', () => {
        setCategory(tab.dataset.category);
      });
    });
  }

  // ----- Sort Dropdown -----
  DOM.sortDropdownTrigger.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleSortDropdown();
  });

  DOM.sortDropdownMenu.querySelectorAll('.sort-option').forEach(opt => {
    opt.addEventListener('click', (e) => {
      e.stopPropagation();
      setSort(opt.dataset.sort);
    });
  });

  // Close sort dropdown on outside click
  document.addEventListener('click', (e) => {
    if (!DOM.sortDropdown.contains(e.target)) {
      closeSortDropdown();
    }
  });

  // ----- Carrinho -----
  DOM.cartBtn.addEventListener('click', openCart);
  DOM.cartCloseBtn.addEventListener('click', closeCart);
  DOM.cartOverlay.addEventListener('click', closeCart);

  // ----- Modal do Produto -----
  DOM.modalCloseBtn.addEventListener('click', closeProductModal);
  DOM.productModalOverlay.addEventListener('click', (e) => {
    if (e.target === DOM.productModalOverlay) closeProductModal();
  });

  DOM.galleryFrontBtn.addEventListener('click', () => toggleGalleryView('front'));
  DOM.galleryBackBtn.addEventListener('click', () => toggleGalleryView('back'));

  // ----- Touch Swipe na Galeria -----
  const gallery = document.querySelector('.modal-gallery');
  let touchStartX = 0;
  let touchStartY = 0;
  let isSwiping = false;

  gallery.addEventListener('touchstart', (e) => {
    touchStartX = e.touches[0].clientX;
    touchStartY = e.touches[0].clientY;
    isSwiping = true;
  }, { passive: true });

  gallery.addEventListener('touchend', (e) => {
    if (!isSwiping || !currentProduct) return;
    isSwiping = false;

    const touchEndX = e.changedTouches[0].clientX;
    const touchEndY = e.changedTouches[0].clientY;
    const diffX = touchStartX - touchEndX;
    const diffY = Math.abs(touchStartY - touchEndY);

    // Only swipe if horizontal movement > 50px and greater than vertical
    if (Math.abs(diffX) > 50 && Math.abs(diffX) > diffY) {
      if (diffX > 0) {
        // Swipe left → show back
        toggleGalleryView('back');
      } else {
        // Swipe right → show front
        toggleGalleryView('front');
      }
    }
  }, { passive: true });

  DOM.qtyMinus.addEventListener('click', () => updateQty(-1));
  DOM.qtyPlus.addEventListener('click', () => updateQty(1));

  DOM.addToCartBtn.addEventListener('click', () => {
    if (!currentProduct) return;
    if (addToCart(currentProduct, selectedSize, selectedQty)) {
      showToast(`${currentProduct.name} adicionado ao carrinho!`);
      closeProductModal();
    }
  });

  DOM.buyNowBtn.addEventListener('click', () => {
    if (!currentProduct) return;
    if (!selectedSize) {
      showToast('Por favor, seleccione um tamanho');
      return;
    }
    addToCart(currentProduct, selectedSize, selectedQty);
    closeProductModal();
    openCheckout();
  });

  // ----- Checkout -----
  DOM.checkoutCloseBtn.addEventListener('click', closeCheckout);
  DOM.checkoutOverlay.addEventListener('click', (e) => {
    if (e.target === DOM.checkoutOverlay) closeCheckout();
  });

  DOM.paymentMethods.forEach(method => {
    method.addEventListener('click', () => selectPaymentMethod(method));
  });

  DOM.placeOrderBtn.addEventListener('click', placeOrder);

  // ----- Termos e Condições -----
  DOM.termsCloseBtn.addEventListener('click', closeTerms);
  DOM.termsOverlay.addEventListener('click', (e) => {
    if (e.target === DOM.termsOverlay) closeTerms();
  });

  // ----- Scroll -----
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // ----- Teclado -----
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (DOM.termsOverlay.classList.contains('open')) {
        closeTerms();
      } else if (DOM.checkoutOverlay.classList.contains('open')) {
        closeCheckout();
      } else if (DOM.productModalOverlay.classList.contains('open')) {
        closeProductModal();
      } else if (DOM.cartDrawer.classList.contains('open')) {
        closeCart();
      } else if (DOM.mobileNav.classList.contains('open')) {
        toggleMobileNav();
      }
    }
  });
}

document.addEventListener('DOMContentLoaded', init);
