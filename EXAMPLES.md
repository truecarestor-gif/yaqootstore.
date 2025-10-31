# 💡 أمثلة الاستخدام والتخصيص

## 📦 إضافة منتج جديد

### الطريقة:
افتح `js/main.js` وأضف منتج في مصفوفة `productsData`:

```javascript
{
    id: 13,
    name: 'فيتامين C 1000 ملغ - تقوية المناعة',
    category: 'vitamins',
    categoryName: 'فيتامينات',
    price: 6500,
    originalPrice: 8000,
    discount: 19,
    rating: 4.7,
    reviews: 156,
    image: null,
    description: 'فيتامين C عالي التركيز لدعم جهاز المناعة',
    inStock: true,
    isNew: true,
    isBestSeller: false
}
```

### الحقول:
- `id`: رقم فريد للمنتج
- `name`: اسم المنتج
- `category`: الفئة (supplements, beauty, vitamins, collagen)
- `categoryName`: اسم الفئة بالعربية
- `price`: السعر بعد الخصم
- `originalPrice`: السعر الأصلي
- `discount`: نسبة الخصم
- `rating`: التقييم (0-5)
- `reviews`: عدد المراجعات
- `description`: وصف المنتج
- `inStock`: متوفر في المخزون
- `isNew`: منتج جديد
- `isBestSeller`: الأكثر مبيعاً

---

## 🎨 تغيير الألوان

### الطريقة:
افتح `css/style.css` وعدّل المتغيرات في بداية الملف:

```css
:root {
    /* اللون الأساسي - يمكنك تغييره لأي لون تريد */
    --primary-color: #00b4aa;      /* الأخضر الفيروزي */
    --primary-dark: #008f87;       /* درجة أغمق */
    --primary-light: #e0f7f6;      /* درجة أفتح */
    
    /* اللون الثانوي */
    --secondary-color: #ff6b6b;    /* الأحمر */
    
    /* لون التمييز */
    --accent-color: #ffd93d;       /* الأصفر */
}
```

### أمثلة ألوان أخرى:

#### الأزرق الملكي:
```css
--primary-color: #3498db;
--primary-dark: #2980b9;
--primary-light: #d6eaf8;
```

#### البرتقالي الدافئ:
```css
--primary-color: #e67e22;
--primary-dark: #d35400;
--primary-light: #fdebd0;
```

#### الأرجواني الأنيق:
```css
--primary-color: #9b59b6;
--primary-dark: #8e44ad;
--primary-light: #ebdef0;
```

---

## 🎫 إضافة كود خصم جديد

### الطريقة:
افتح `js/checkout.js` وابحث عن دالة `applyCoupon()`:

```javascript
const coupons = {
    'WELCOME10': 10,    // خصم 10%
    'SAVE20': 20,       // خصم 20%
    'FIRST50': 50,      // خصم 50 ريال
    'SUMMER30': 30,     // إضافة كود جديد - خصم 30%
    'VIP100': 100       // إضافة كود جديد - خصم 100 ريال
};
```

### أنواع الأكواد:

#### خصم بالنسبة المئوية:
```javascript
'NEWCODE': 25,  // خصم 25%
```

#### خصم بمبلغ ثابت:
```javascript
'FIXED200': 200  // خصم 200 ريال
```

تأكد من التمييز في الكود:
```javascript
if (couponCode === 'FIXED200') {
    discountAmount = 200;
} else {
    discountAmount = subtotal * (coupons[couponCode] / 100);
}
```

---

## 🏙️ تغيير المدن المتاحة

### الطريقة:
افتح `checkout.html` وابحث عن قائمة المدن:

```html
<select id="city" required>
    <option value="">اختر المدينة</option>
    <option value="riyadh">الرياض</option>
    <option value="jeddah">جدة</option>
    <option value="dammam">الدمام</option>
    <option value="mecca">مكة المكرمة</option>
    <option value="medina">المدينة المنورة</option>
</select>
```

---

## 📱 تغيير معلومات التواصل

### الطريقة:
افتح `index.html` وابحث عن Footer:

```html
<div class="footer-column">
    <h3>تواصل معنا</h3>
    <ul class="contact-info">
        <li><i class="fas fa-phone"></i> +966 50 123 4567</li>
        <li><i class="fas fa-envelope"></i> info@mystore.com</li>
        <li><i class="fas fa-map-marker-alt"></i> الرياض، السعودية</li>
    </ul>
</div>
```

---

## 🎯 تخصيص البانر الرئيسي

### الطريقة:
افتح `index.html` وابحث عن قسم `.hero-banner`:

```html
<div class="banner-text">
    <h2 class="banner-title">عنوان مخصص</h2>
    <p class="banner-subtitle">نص فرعي مخصص</p>
    <button class="btn btn-primary btn-large">اضغط هنا</button>
</div>
```

---

## 💰 تغيير أسعار الشحن

### الطريقة:
افتح `js/checkout.js` وابحث عن `shippingCost`:

```javascript
// في دالة initializeCheckoutListeners
if (this.value === 'express') {
    shippingCost = 1000;  // غيّر هنا - شحن سريع 1000 ريال
} else {
    shippingCost = 0;     // شحن مجاني
}
```

### إضافة طريقة شحن ثالثة:
في `checkout.html`:

```html
<label class="shipping-option">
    <input type="radio" name="shipping" value="same-day">
    <div class="option-content">
        <div class="option-info">
            <strong>توصيل في نفس اليوم</strong>
            <span>خلال 6 ساعات</span>
        </div>
        <div class="option-price">1500 ريال</div>
    </div>
</label>
```

في `js/checkout.js`:
```javascript
if (this.value === 'same-day') {
    shippingCost = 1500;
} else if (this.value === 'express') {
    shippingCost = 500;
} else {
    shippingCost = 0;
}
```

---

## 🔍 تخصيص البحث

### البحث في حقول إضافية:
افتح `js/main.js` وعدّل دالة `searchProducts()`:

```javascript
const filteredProducts = productsData.filter(product => 
    product.name.toLowerCase().includes(searchTerm) ||
    product.categoryName.toLowerCase().includes(searchTerm) ||
    product.description.toLowerCase().includes(searchTerm) ||
    product.price.toString().includes(searchTerm)  // البحث بالسعر أيضاً
);
```

---

## 📊 إضافة فئة منتجات جديدة

### 1. أضف الفئة في `index.html`:
```html
<div class="category-card" data-category="health">
    <div class="category-icon">
        <i class="fas fa-heartbeat"></i>
    </div>
    <h3>منتجات صحية</h3>
    <p>منتجات صحة عامة</p>
</div>
```

### 2. أضف زر التصفية:
```html
<button class="filter-btn" data-filter="health">صحية</button>
```

### 3. أضف منتجات بهذه الفئة في `js/main.js`:
```javascript
{
    id: 14,
    category: 'health',
    categoryName: 'صحية',
    // ... باقي البيانات
}
```

---

## 🎨 تخصيص الخطوط

### استخدام خط مختلف:
في `index.html` و `checkout.html`:

```html
<!-- استبدل خط Cairo بخط آخر -->
<link href="https://fonts.googleapis.com/css2?family=Tajawal:wght@300;400;500;700;900&display=swap" rel="stylesheet">
```

في `css/style.css`:
```css
:root {
    --font-family: 'Tajawal', sans-serif;
}
```

### خطوط عربية جميلة أخرى:
- **Tajawal**: عصري وأنيق
- **Almarai**: واضح وسهل القراءة
- **Amiri**: تقليدي وأنيق
- **Changa**: عصري وجريء
- **El Messiri**: تقليدي حديث

---

## 🔔 تخصيص الإشعارات

### تغيير مدة الإشعار:
في `js/main.js` و `js/checkout.js`:

```javascript
setTimeout(() => {
    notification.style.animation = 'slideOut 0.3s ease-in';
    setTimeout(() => notification.remove(), 300);
}, 5000);  // غيّر من 2000 إلى 5000 (5 ثواني)
```

### تغيير موضع الإشعار:
```javascript
notification.style.cssText = `
    position: fixed;
    top: 20px;          // من الأعلى بدلاً من 100px
    left: 20px;         // من اليسار بدلاً من اليمين
    // ... باقي الأنماط
`;
```

---

## 📸 إضافة صور حقيقية للمنتجات

### الطريقة:
1. أنشئ مجلد `images/products/`
2. ضع صور المنتجات فيه
3. في `js/main.js` عدّل حقل `image`:

```javascript
{
    id: 1,
    name: 'المنتج',
    image: 'images/products/product1.jpg',  // بدلاً من null
    // ... باقي البيانات
}
```

4. في دالة `createProductCard()` عدّل:

```javascript
<div class="product-image">
    ${product.image 
        ? `<img src="${product.image}" alt="${product.name}">` 
        : `<i class="fas fa-box-open"></i>`
    }
</div>
```

---

## ✨ أمثلة متقدمة

### حساب الوقت المتبقي للعرض:
```javascript
function getOfferTimeRemaining() {
    const endDate = new Date('2025-12-31');
    const now = new Date();
    const diff = endDate - now;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    return `باقي ${days} يوم على انتهاء العرض`;
}
```

### فلترة متقدمة بالسعر:
```javascript
function filterByPrice(minPrice, maxPrice) {
    const filtered = productsData.filter(p => 
        p.price >= minPrice && p.price <= maxPrice
    );
    displayProducts(filtered);
}
```

### ترتيب المنتجات:
```javascript
function sortProducts(sortBy) {
    let sorted = [...productsData];
    
    if (sortBy === 'price-low') {
        sorted.sort((a, b) => a.price - b.price);
    } else if (sortBy === 'price-high') {
        sorted.sort((a, b) => b.price - a.price);
    } else if (sortBy === 'rating') {
        sorted.sort((a, b) => b.rating - a.rating);
    }
    
    displayProducts(sorted);
}
```

---

## 🚀 نصائح إضافية

1. **استخدم محرر نصوص جيد** مثل VS Code
2. **جرب التعديلات على نسخة احتياطية** أولاً
3. **تأكد من حفظ الملفات** بعد كل تعديل
4. **اختبر على متصفحات مختلفة** بعد التعديلات
5. **احتفظ بنسخة احتياطية** قبل التعديلات الكبيرة

---

**💡 هل لديك سؤال؟** راجع ملف README.md للمزيد من التفاصيل!

💎 متجر ياقوت - سهل التخصيص والتطوير
