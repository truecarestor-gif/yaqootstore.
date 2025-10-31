// ==========================================
// صفحة إتمام الشراء
// ==========================================

let checkoutCart = JSON.parse(localStorage.getItem('cart')) || [];
let shippingCost = 0;
let discountAmount = 0;

// العناصر من DOM
const orderItems = document.getElementById('orderItems');
const subtotalElement = document.getElementById('subtotal');
const shippingCostElement = document.getElementById('shippingCost');
const discountElement = document.getElementById('discount');
const grandTotalElement = document.getElementById('grandTotal');
const completeOrderBtn = document.getElementById('completeOrderBtn');
const checkoutForm = document.getElementById('checkoutForm');
const orderConfirmModal = document.getElementById('orderConfirmModal');
const orderNumberElement = document.getElementById('orderNumber');

// ==========================================
// تهيئة الصفحة
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
    // التحقق من وجود منتجات في السلة
    if (checkoutCart.length === 0) {
        window.location.href = 'index.html';
        return;
    }
    
    displayOrderItems();
    calculateTotals();
    initializeCheckoutListeners();
});

// ==========================================
// عرض عناصر الطلب
// ==========================================
function displayOrderItems() {
    if (!orderItems) return;
    
    orderItems.innerHTML = checkoutCart.map(item => `
        <div class="order-item">
            <div class="order-item-image">
                <i class="fas fa-box-open"></i>
            </div>
            <div class="order-item-details">
                <div class="order-item-title">${item.name.substring(0, 50)}...</div>
                <div class="order-item-quantity">الكمية: ${item.quantity}</div>
                <div class="order-item-price">${formatPrice(item.price * item.quantity)}</div>
            </div>
        </div>
    `).join('');
}

// ==========================================
// حساب المجاميع
// ==========================================
function calculateTotals() {
    const subtotal = checkoutCart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const total = subtotal + shippingCost - discountAmount;
    
    if (subtotalElement) {
        subtotalElement.textContent = formatPrice(subtotal);
    }
    
    if (shippingCostElement) {
        shippingCostElement.textContent = shippingCost === 0 ? 'مجاني' : formatPrice(shippingCost);
    }
    
    if (discountElement) {
        discountElement.textContent = discountAmount > 0 ? `-${formatPrice(discountAmount)}` : '0 ريال';
    }
    
    if (grandTotalElement) {
        grandTotalElement.textContent = formatPrice(total);
    }
}

// ==========================================
// تنسيق السعر
// ==========================================
function formatPrice(price) {
    return price.toLocaleString('ar-YE') + ' ريال';
}

// ==========================================
// تهيئة أحداث الصفحة
// ==========================================
function initializeCheckoutListeners() {
    // تغيير طريقة الشحن
    const shippingInputs = document.querySelectorAll('input[name="shipping"]');
    shippingInputs.forEach(input => {
        input.addEventListener('change', function() {
            if (this.value === 'express') {
                shippingCost = 500;
            } else {
                shippingCost = 0;
            }
            calculateTotals();
            updateProgressStep();
        });
    });
    
    // تطبيق كود الخصم
    const applyCouponBtn = document.querySelector('.btn-apply-coupon');
    if (applyCouponBtn) {
        applyCouponBtn.addEventListener('click', applyCoupon);
    }
    
    // إتمام الطلب
    if (completeOrderBtn) {
        completeOrderBtn.addEventListener('click', completeOrder);
    }
    
    // تحديث الخطوة عند تغيير طريقة الدفع
    const paymentInputs = document.querySelectorAll('input[name="payment"]');
    paymentInputs.forEach(input => {
        input.addEventListener('change', updateProgressStep);
    });
}

// ==========================================
// تحديث شريط التقدم
// ==========================================
function updateProgressStep() {
    const shippingSelected = document.querySelector('input[name="shipping"]:checked');
    const paymentSelected = document.querySelector('input[name="payment"]:checked');
    
    const progressSteps = document.querySelectorAll('.progress-step');
    const progressLines = document.querySelectorAll('.progress-line');
    
    // تفعيل خطوة السلة (دائماً)
    if (progressSteps[0]) progressSteps[0].classList.add('active');
    
    // تفعيل خطوة الشحن
    if (shippingSelected) {
        if (progressSteps[1]) progressSteps[1].classList.add('active');
        if (progressLines[0]) progressLines[0].classList.add('active');
    }
    
    // تفعيل خطوة الدفع
    if (paymentSelected) {
        if (progressSteps[2]) progressSteps[2].classList.add('active');
        if (progressLines[1]) progressLines[1].classList.add('active');
    }
}

// ==========================================
// تطبيق كود الخصم
// ==========================================
function applyCoupon() {
    const couponInput = document.getElementById('couponCode');
    const couponCode = couponInput.value.trim().toUpperCase();
    
    // أكواد خصم تجريبية
    const coupons = {
        'WELCOME10': 10, // خصم 10%
        'SAVE20': 20,    // خصم 20%
        'FIRST50': 50    // خصم 50 ريال
    };
    
    if (coupons[couponCode] !== undefined) {
        const subtotal = checkoutCart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        
        if (couponCode === 'FIRST50') {
            discountAmount = 50;
        } else {
            discountAmount = subtotal * (coupons[couponCode] / 100);
        }
        
        calculateTotals();
        showNotification('تم تطبيق كود الخصم بنجاح!', 'success');
        couponInput.value = '';
    } else {
        showNotification('كود الخصم غير صالح', 'error');
    }
}

// ==========================================
// إتمام الطلب
// ==========================================
function completeOrder() {
    // التحقق من صحة النموذج
    if (!validateForm()) {
        showNotification('يرجى ملء جميع الحقول المطلوبة', 'error');
        return;
    }
    
    // جمع بيانات الطلب
    const orderData = {
        orderNumber: generateOrderNumber(),
        customerInfo: {
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value
        },
        shippingAddress: {
            address: document.getElementById('address').value,
            city: document.getElementById('city').value,
            district: document.getElementById('district').value
        },
        shippingMethod: document.querySelector('input[name="shipping"]:checked').value,
        paymentMethod: document.querySelector('input[name="payment"]:checked').value,
        items: checkoutCart,
        subtotal: checkoutCart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
        shippingCost: shippingCost,
        discount: discountAmount,
        total: checkoutCart.reduce((sum, item) => sum + (item.price * item.quantity), 0) + shippingCost - discountAmount,
        notes: document.getElementById('notes').value,
        orderDate: new Date().toISOString()
    };
    
    // حفظ الطلب (يمكن إرساله للخادم)
    saveOrder(orderData);
    
    // عرض رسالة النجاح
    showOrderConfirmation(orderData.orderNumber);
    
    // إفراغ السلة
    localStorage.removeItem('cart');
}

// ==========================================
// التحقق من صحة النموذج
// ==========================================
function validateForm() {
    const requiredFields = [
        'firstName',
        'lastName',
        'email',
        'phone',
        'address',
        'city'
    ];
    
    for (let fieldId of requiredFields) {
        const field = document.getElementById(fieldId);
        if (!field || !field.value.trim()) {
            field.focus();
            field.style.borderColor = 'var(--secondary-color)';
            setTimeout(() => {
                field.style.borderColor = '';
            }, 2000);
            return false;
        }
    }
    
    // التحقق من البريد الإلكتروني
    const email = document.getElementById('email').value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showNotification('البريد الإلكتروني غير صالح', 'error');
        return false;
    }
    
    // التحقق من رقم الهاتف
    const phone = document.getElementById('phone').value;
    const phoneRegex = /^[0-9]{9,15}$/;
    if (!phoneRegex.test(phone.replace(/[\s-]/g, ''))) {
        showNotification('رقم الهاتف غير صالح', 'error');
        return false;
    }
    
    return true;
}

// ==========================================
// توليد رقم طلب عشوائي
// ==========================================
function generateOrderNumber() {
    const timestamp = Date.now();
    const random = Math.floor(Math.random() * 1000);
    return `YQ-${timestamp}-${random}`;
}

// ==========================================
// حفظ الطلب
// ==========================================
function saveOrder(orderData) {
    // حفظ في localStorage (يمكن استبداله بإرسال للخادم)
    let orders = JSON.parse(localStorage.getItem('orders')) || [];
    orders.push(orderData);
    localStorage.setItem('orders', JSON.stringify(orders));
    
    console.log('تم حفظ الطلب:', orderData);
}

// ==========================================
// عرض رسالة تأكيد الطلب
// ==========================================
function showOrderConfirmation(orderNumber) {
    if (orderNumberElement) {
        orderNumberElement.textContent = orderNumber;
    }
    
    if (orderConfirmModal) {
        orderConfirmModal.classList.add('active');
    }
}

// ==========================================
// إظهار الإشعارات
// ==========================================
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    
    const bgColor = type === 'success' 
        ? 'linear-gradient(135deg, #00b4aa, #008f87)' 
        : 'linear-gradient(135deg, #ff6b6b, #ee5a6f)';
    
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${bgColor};
        color: white;
        padding: 15px 25px;
        border-radius: 10px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        animation: slideIn 0.3s ease-out;
        font-weight: 600;
        max-width: 300px;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-in';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// ==========================================
// التعامل مع التمرير في صفحة الشراء
// ==========================================
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.08)';
    }
});
