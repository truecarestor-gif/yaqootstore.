// ==========================================
// بيانات المنتجات
// ==========================================
const productsData = [
    {
        id: 1,
        name: 'كاليفورنيا غولد نيوتريشن - بيبتيدات الكولاجين البحرية المتحللة وحمض الهيالورونيك وفيتامين ج',
        category: 'collagen',
        categoryName: 'كولاجين',
        price: 10800,
        originalPrice: 12000,
        discount: 10,
        rating: 4.8,
        reviews: 156,
        image: null,
        description: 'كولاجين بحري متحلل عالي الجودة مع حمض الهيالورونيك وفيتامين ج لدعم صحة البشرة والمفاصل',
        inStock: true,
        isNew: false,
        isBestSeller: true
    },
    {
        id: 2,
        name: 'فيتامين د3 + ك2 - مكمل غذائي لتقوية العظام والمناعة',
        category: 'vitamins',
        categoryName: 'فيتامينات',
        price: 8500,
        originalPrice: 10000,
        discount: 15,
        rating: 4.6,
        reviews: 89,
        image: null,
        description: 'مكمل فيتامين د3 مع فيتامين ك2 لدعم صحة العظام والمناعة',
        inStock: true,
        isNew: true,
        isBestSeller: true
    },
    {
        id: 3,
        name: 'أوميجا 3 - زيت السمك النقي 1000 ملغ',
        category: 'supplements',
        categoryName: 'مكملات',
        price: 7200,
        originalPrice: 9000,
        discount: 20,
        rating: 4.7,
        reviews: 234,
        image: null,
        description: 'زيت السمك النقي غني بأحماض أوميجا 3 الدهنية لصحة القلب والدماغ',
        inStock: true,
        isNew: false,
        isBestSeller: true
    },
    {
        id: 4,
        name: 'سيروم فيتامين سي للوجه - تفتيح وتجديد البشرة',
        category: 'beauty',
        categoryName: 'تجميل',
        price: 6800,
        originalPrice: 8500,
        discount: 20,
        rating: 4.9,
        reviews: 312,
        image: null,
        description: 'سيروم فيتامين سي عالي التركيز لتفتيح البشرة وتقليل التجاعيد',
        inStock: true,
        isNew: true,
        isBestSeller: true
    },
    {
        id: 5,
        name: 'كريم الكولاجين والهيالورونيك - مضاد للشيخوخة',
        category: 'beauty',
        categoryName: 'تجميل',
        price: 9200,
        originalPrice: 11500,
        discount: 20,
        rating: 4.8,
        reviews: 178,
        image: null,
        description: 'كريم ليلي غني بالكولاجين وحمض الهيالورونيك لبشرة شابة ومتألقة',
        inStock: true,
        isNew: false,
        isBestSeller: true
    },
    {
        id: 6,
        name: 'بروتين مصل اللبن - نكهة الشوكولاتة 1 كجم',
        category: 'supplements',
        categoryName: 'مكملات',
        price: 15000,
        originalPrice: 18000,
        discount: 17,
        rating: 4.5,
        reviews: 445,
        image: null,
        description: 'بروتين عالي الجودة لبناء العضلات وتعزيز الأداء الرياضي',
        inStock: true,
        isNew: false,
        isBestSeller: true
    },
    {
        id: 7,
        name: 'مجموعة العناية بالبشرة - 5 منتجات',
        category: 'beauty',
        categoryName: 'تجميل',
        price: 12500,
        originalPrice: 16000,
        discount: 22,
        rating: 4.7,
        reviews: 156,
        image: null,
        description: 'مجموعة كاملة للعناية اليومية بالبشرة تشمل منظف، تونر، سيروم، كريم، وماسك',
        inStock: true,
        isNew: true,
        isBestSeller: false
    },
    {
        id: 8,
        name: 'مكمل الزنك وفيتامين سي - تعزيز المناعة',
        category: 'vitamins',
        categoryName: 'فيتامينات',
        price: 5800,
        originalPrice: 7000,
        discount: 17,
        rating: 4.6,
        reviews: 203,
        image: null,
        description: 'مكمل الزنك مع فيتامين سي لتقوية جهاز المناعة والوقاية من الأمراض',
        inStock: true,
        isNew: false,
        isBestSeller: true
    },
    {
        id: 9,
        name: 'الكولاجين السائل - نكهة التوت 30 قارورة',
        category: 'collagen',
        categoryName: 'كولاجين',
        price: 18500,
        originalPrice: 22000,
        discount: 16,
        rating: 4.9,
        reviews: 287,
        image: null,
        description: 'كولاجين سائل سهل الامتصاص بنكهة التوت اللذيذة لبشرة مشرقة',
        inStock: true,
        isNew: true,
        isBestSeller: true
    },
    {
        id: 10,
        name: 'ماسك الفحم لتنظيف البشرة العميق',
        category: 'beauty',
        categoryName: 'تجميل',
        price: 4200,
        originalPrice: 6000,
        discount: 30,
        rating: 4.4,
        reviews: 167,
        image: null,
        description: 'ماسك الفحم النشط لتنظيف المسام وإزالة الشوائب',
        inStock: true,
        isNew: false,
        isBestSeller: false
    },
    {
        id: 11,
        name: 'فيتامين B المركب - طاقة ونشاط',
        category: 'vitamins',
        categoryName: 'فيتامينات',
        price: 6500,
        originalPrice: 8000,
        discount: 19,
        rating: 4.5,
        reviews: 134,
        image: null,
        description: 'مجموعة فيتامينات B لزيادة الطاقة وتحسين المزاج',
        inStock: true,
        isNew: false,
        isBestSeller: false
    },
    {
        id: 12,
        name: 'زيت الأرغان المغربي النقي للشعر',
        category: 'beauty',
        categoryName: 'تجميل',
        price: 8900,
        originalPrice: 11000,
        discount: 19,
        rating: 4.8,
        reviews: 298,
        image: null,
        description: 'زيت الأرغان الأصلي لترطيب وتغذية الشعر التالف',
        inStock: true,
        isNew: true,
        isBestSeller: true
    }
];

// ==========================================
// المتغيرات العامة
// ==========================================
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let currentFilter = 'all';

// ==========================================
// العناصر من DOM
// ==========================================
const productsGrid = document.getElementById('productsGrid');
const offersGrid = document.getElementById('offersGrid');
const newProductsGrid = document.getElementById('newProductsGrid');
const cartBtn = document.getElementById('cartBtn');
const cartSidebar = document.getElementById('cartSidebar');
const closeCart = document.getElementById('closeCart');
const overlay = document.getElementById('overlay');
const cartItems = document.getElementById('cartItems');
const cartTotal = document.getElementById('cartTotal');
const cartCount = document.querySelector('.cart-count');
const searchInput = document.getElementById('searchInput');
const searchBtn = document.getElementById('searchBtn');
const filterBtns = document.querySelectorAll('.filter-btn');
const categoryCards = document.querySelectorAll('.category-card');

// ==========================================
// تهيئة الموقع عند التحميل
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
    displayProducts(productsData);
    displayOffers();
    displayNewProducts();
    updateCartUI();
    initializeEventListeners();
});

// ==========================================
// عرض المنتجات
// ==========================================
function displayProducts(products) {
    if (!productsGrid) return;
    
    productsGrid.innerHTML = products.map(product => createProductCard(product)).join('');
}

// ==========================================
// إنشاء بطاقة المنتج
// ==========================================
function createProductCard(product) {
    const discountBadge = product.discount > 0 ? 
        `<div class="product-badge">-${product.discount}%</div>` : '';
    
    const newBadge = product.isNew ? 
        `<div class="product-badge new">جديد</div>` : '';
    
    const badge = product.discount > 0 ? discountBadge : (product.isNew ? newBadge : '');
    
    return `
        <div class="product-card" data-id="${product.id}" data-category="${product.category}">
            ${badge}
            <div class="product-image">
                <i class="fas fa-box-open"></i>
                <div class="product-actions">
                    <button class="action-btn quick-view" onclick="quickView(${product.id})">
                        <i class="fas fa-eye"></i>
                    </button>
                    <button class="action-btn add-to-wishlist">
                        <i class="fas fa-heart"></i>
                    </button>
                </div>
            </div>
            <div class="product-info">
                <div class="product-category">${product.categoryName}</div>
                <h3 class="product-title">${product.name}</h3>
                <div class="product-rating">
                    <div class="stars">
                        ${generateStars(product.rating)}
                    </div>
                    <span class="rating-count">(${product.reviews})</span>
                </div>
                <div class="product-price">
                    <span class="current-price">${formatPrice(product.price)}</span>
                    ${product.originalPrice ? 
                        `<span class="original-price">${formatPrice(product.originalPrice)}</span>` 
                        : ''}
                </div>
                <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                    <i class="fas fa-cart-plus"></i>
                    أضف إلى السلة
                </button>
            </div>
        </div>
    `;
}

// ==========================================
// توليد النجوم للتقييم
// ==========================================
function generateStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let stars = '';
    
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star"></i>';
    }
    
    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt"></i>';
    }
    
    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star"></i>';
    }
    
    return stars;
}

// ==========================================
// تنسيق السعر
// ==========================================
function formatPrice(price) {
    return price.toLocaleString('ar-YE') + ' ريال';
}

// ==========================================
// عرض العروض الخاصة
// ==========================================
function displayOffers() {
    if (!offersGrid) return;
    
    const offers = productsData.filter(p => p.discount >= 20);
    offersGrid.innerHTML = offers.slice(0, 6).map(product => createProductCard(product)).join('');
}

// ==========================================
// عرض المنتجات الجديدة
// ==========================================
function displayNewProducts() {
    if (!newProductsGrid) return;
    
    const newProducts = productsData.filter(p => p.isNew);
    newProductsGrid.innerHTML = newProducts.map(product => createProductCard(product)).join('');
}

// ==========================================
// إضافة منتج للسلة
// ==========================================
function addToCart(productId) {
    const product = productsData.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }
    
    saveCart();
    updateCartUI();
    showNotification('تمت الإضافة إلى السلة بنجاح!');
}

// ==========================================
// حفظ السلة في localStorage
// ==========================================
function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

// ==========================================
// تحديث واجهة السلة
// ==========================================
function updateCartUI() {
    updateCartCount();
    displayCartItems();
    updateCartTotal();
}

// ==========================================
// تحديث عدد عناصر السلة
// ==========================================
function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (cartCount) {
        cartCount.textContent = totalItems;
    }
}

// ==========================================
// عرض عناصر السلة
// ==========================================
function displayCartItems() {
    if (!cartItems) return;
    
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <p>السلة فارغة</p>
            </div>
        `;
        return;
    }
    
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-image">
                <i class="fas fa-box-open"></i>
            </div>
            <div class="cart-item-details">
                <div class="cart-item-title">${item.name.substring(0, 40)}...</div>
                <div class="cart-item-price">${formatPrice(item.price)}</div>
                <div class="cart-item-controls">
                    <button class="quantity-btn" onclick="decreaseQuantity(${item.id})">
                        <i class="fas fa-minus"></i>
                    </button>
                    <span>${item.quantity}</span>
                    <button class="quantity-btn" onclick="increaseQuantity(${item.id})">
                        <i class="fas fa-plus"></i>
                    </button>
                    <button class="remove-btn" onclick="removeFromCart(${item.id})">
                        <i class="fas fa-trash"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// ==========================================
// تحديث المجموع الكلي
// ==========================================
function updateCartTotal() {
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    if (cartTotal) {
        cartTotal.textContent = formatPrice(total);
    }
}

// ==========================================
// زيادة الكمية
// ==========================================
function increaseQuantity(productId) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity++;
        saveCart();
        updateCartUI();
    }
}

// ==========================================
// تقليل الكمية
// ==========================================
function decreaseQuantity(productId) {
    const item = cart.find(item => item.id === productId);
    if (item && item.quantity > 1) {
        item.quantity--;
        saveCart();
        updateCartUI();
    }
}

// ==========================================
// حذف من السلة
// ==========================================
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartUI();
    showNotification('تم حذف المنتج من السلة');
}

// ==========================================
// فتح/إغلاق السلة
// ==========================================
function toggleCart() {
    cartSidebar.classList.toggle('active');
    overlay.classList.toggle('active');
}

// ==========================================
// البحث عن المنتجات
// ==========================================
function searchProducts() {
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    if (searchTerm === '') {
        displayProducts(productsData);
        return;
    }
    
    const filteredProducts = productsData.filter(product => 
        product.name.toLowerCase().includes(searchTerm) ||
        product.categoryName.toLowerCase().includes(searchTerm) ||
        product.description.toLowerCase().includes(searchTerm)
    );
    
    displayProducts(filteredProducts);
    
    if (filteredProducts.length === 0) {
        productsGrid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px; color: #636e72;">
                <i class="fas fa-search" style="font-size: 4rem; opacity: 0.3; margin-bottom: 20px;"></i>
                <p style="font-size: 1.2rem;">لم يتم العثور على منتجات</p>
            </div>
        `;
    }
}

// ==========================================
// تصفية المنتجات حسب الفئة
// ==========================================
function filterProducts(category) {
    currentFilter = category;
    
    if (category === 'all') {
        displayProducts(productsData);
    } else {
        const filtered = productsData.filter(p => p.category === category);
        displayProducts(filtered);
    }
}

// ==========================================
// عرض سريع للمنتج
// ==========================================
function quickView(productId) {
    const product = productsData.find(p => p.id === productId);
    if (!product) return;
    
    alert(`عرض سريع للمنتج:\n\n${product.name}\n\nالسعر: ${formatPrice(product.price)}\n\n${product.description}`);
}

// ==========================================
// إظهار الإشعارات
// ==========================================
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: linear-gradient(135deg, #00b4aa, #008f87);
        color: white;
        padding: 15px 25px;
        border-radius: 10px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        animation: slideIn 0.3s ease-out;
        font-weight: 600;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-in';
        setTimeout(() => notification.remove(), 300);
    }, 2000);
}

// ==========================================
// تهيئة أحداث الأزرار
// ==========================================
function initializeEventListeners() {
    // أحداث السلة
    if (cartBtn) {
        cartBtn.addEventListener('click', toggleCart);
    }
    
    if (closeCart) {
        closeCart.addEventListener('click', toggleCart);
    }
    
    if (overlay) {
        overlay.addEventListener('click', () => {
            cartSidebar.classList.remove('active');
            overlay.classList.remove('active');
        });
    }
    
    // البحث
    if (searchBtn) {
        searchBtn.addEventListener('click', searchProducts);
    }
    
    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                searchProducts();
            }
        });
    }
    
    // التصفية
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            filterProducts(btn.dataset.filter);
        });
    });
    
    // بطاقات الفئات
    categoryCards.forEach(card => {
        card.addEventListener('click', () => {
            const category = card.dataset.category;
            document.querySelector('#products').scrollIntoView({ behavior: 'smooth' });
            
            setTimeout(() => {
                filterBtns.forEach(btn => {
                    btn.classList.remove('active');
                    if (btn.dataset.filter === category) {
                        btn.classList.add('active');
                    }
                });
                filterProducts(category);
            }, 500);
        });
    });
}

// ==========================================
// رسوم متحركة CSS للإشعارات
// ==========================================
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
