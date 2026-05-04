const menuItems = [
  {
    id: 1,
    category: "pizza",
    emoji: "🍕",
    en: { name: "Margherita Pizza", desc: "Fresh tomato sauce, mozzarella, basil" },
    ar: { name: "بيتزا مارغريتا", desc: "صلصة طماطم طازجة، موزاريلا، ريحان" },
    price: 80
  },
  {
    id: 2,
    category: "pizza",
    emoji: "🍕",
    en: { name: "Chicken Pizza", desc: "Grilled chicken, mushrooms, olives" },
    ar: { name: "بيتزا الدجاج", desc: "دجاج مشوي، فطر، زيتون" },
    price: 100
  },
  {
    id: 3,
    category: "pizza",
    emoji: "🍕",
    en: { name: "Meat Lovers Pizza", desc: "Ground beef, sausage, pepperoni" },
    ar: { name: "بيتزا اللحوم", desc: "لحم مفروم، سجق، ببروني" },
    price: 120
  },
  {
    id: 4,
    category: "pizza",
    emoji: "🍕",
    en: { name: "Vegetable Pizza", desc: "Bell peppers, onions, tomatoes, corn" },
    ar: { name: "بيتزا الخضار", desc: "فلفل، بصل، طماطم، ذرة" },
    price: 90
  },
  {
    id: 5,
    category: "pizza",
    emoji: "🍕",
    en: { name: "Tuna Pizza", desc: "Tuna, onions, olives, cheese" },
    ar: { name: "بيتزا التونة", desc: "تونة، بصل، زيتون، جبن" },
    price: 110
  },
  {
    id: 6,
    category: "pizza",
    emoji: "🍕",
    en: { name: "Four Cheese Pizza", desc: "Mozzarella, cheddar, parmesan, gouda" },
    ar: { name: "بيتزا أربع أجبان", desc: "موزاريلا، شيدر، بارميزان، غودا" },
    price: 115
  },
  {
    id: 7,
    category: "sandwich",
    emoji: "🥪",
    en: { name: "Chicken Kaskroutet", desc: "Signature chicken wrap with fries" },
    ar: { name: "كسكروت الدجاج", desc: "كسكروت دجاج مميز مع بطاطس" },
    price: 70
  },
  {
    id: 8,
    category: "sandwich",
    emoji: "🥪",
    en: { name: "Meat Kaskroutet", desc: "Grilled meat wrap with sauce" },
    ar: { name: "كسكروت اللحم", desc: "كسكروت لحم مشوي مع صلصة" },
    price: 80
  },
  {
    id: 9,
    category: "sandwich",
    emoji: "🥪",
    en: { name: "Tuna Kaskroutet", desc: "Tuna wrap with vegetables" },
    ar: { name: "كسكروت التونة", desc: "كسكروت تونة مع خضار" },
    price: 75
  },
  {
    id: 10,
    category: "sandwich",
    emoji: "🥪",
    en: { name: "Cheese & Egg Kaskroutet", desc: "Melted cheese and egg wrap" },
    ar: { name: "كسكروت جبن وبيض", desc: "كسكروت جبن مذوب وبيض" },
    price: 60
  },
  {
    id: 11,
    category: "sandwich",
    emoji: "🥪",
    en: { name: "Mixed Kaskroutet", desc: "Chicken, meat, cheese combo" },
    ar: { name: "كسكروت مشكل", desc: "دجاج، لحم، جبن" },
    price: 95
  },
  {
    id: 12,
    category: "sandwich",
    emoji: "🥪",
    en: { name: "Veggie Wrap", desc: "Fresh vegetables and hummus" },
    ar: { name: "راب الخضار", desc: "خضار طازجة وحمص" },
    price: 55
  },
  {
    id: 13,
    category: "burger",
    emoji: "🍔",
    en: { name: "Classic Burger", desc: "Beef patty, lettuce, tomato, sauce" },
    ar: { name: "برجر كلاسيك", desc: "لحم، خس، طماطم، صلصة" },
    price: 85
  },
  {
    id: 14,
    category: "burger",
    emoji: "🍔",
    en: { name: "Chicken Burger", desc: "Crispy chicken with mayo" },
    ar: { name: "برجر دجاج", desc: "دجاج مقرمش مع مايونيز" },
    price: 80
  },
  {
    id: 15,
    category: "burger",
    emoji: "🍔",
    en: { name: "Double Cheese Burger", desc: "Double patty with extra cheese" },
    ar: { name: "دبل شيز برجر", desc: "قطعتين لحم مع جبن إضافي" },
    price: 110
  },
  {
    id: 16,
    category: "burger",
    emoji: "🍔",
    en: { name: "Special Burger", desc: "House special with secret sauce" },
    ar: { name: "برجر خاص", desc: "برجر مميز مع صلصة سرية" },
    price: 120
  },
  {
    id: 17,
    category: "drink",
    emoji: "🥤",
    en: { name: "Coca-Cola", desc: "Classic Coca-Cola 330ml" },
    ar: { name: "كوكا كولا", desc: "كوكا كولا كلاسيك 330 مل" },
    price: 30
  },
  {
    id: 18,
    category: "drink",
    emoji: "🥤",
    en: { name: "Orange Juice", desc: "Fresh orange juice" },
    ar: { name: "عصير برتقال", desc: "عصير برتقال طازج" },
    price: 40
  },
  {
    id: 19,
    category: "drink",
    emoji: "🥤",
    en: { name: "Water", desc: "Mineral water 500ml" },
    ar: { name: "ماء", desc: "ماء معدني 500 مل" },
    price: 20
  },
  {
    id: 20,
    category: "drink",
    emoji: "🥤",
    en: { name: "Milkshake", desc: "Vanilla or chocolate milkshake" },
    ar: { name: "ميلك شيك", desc: "ميلك شيك فانيلا أو شوكولا" },
    price: 60
  }
];

let cart = [];
let currentLang = 'en';
let currentCategory = 'pizza';

const menuGrid = document.getElementById('menuGrid');
const cartSidebar = document.getElementById('cartSidebar');
const cartOverlay = document.getElementById('cartOverlay');
const cartItems = document.getElementById('cartItems');
const cartCount = document.getElementById('cartCount');
const cartTotal = document.getElementById('cartTotal');

function renderMenu(category) {
  const filtered = menuItems.filter(item => item.category === category);
  menuGrid.innerHTML = filtered.map(item => `
    <div class="menu-item">
      <div class="menu-item-img">${item.emoji}</div>
      <div class="menu-item-content">
        <h3>${item[currentLang].name}</h3>
        <p>${item[currentLang].desc}</p>
        <div class="menu-item-footer">
          <span class="price">${item.price} دج</span>
          <button class="add-to-cart" data-id="${item.id}">${currentLang === 'en' ? 'Add to Cart' : 'أضف للسلة'}</button>
        </div>
      </div>
    </div>
  `).join('');

  document.querySelectorAll('.add-to-cart').forEach(btn => {
    btn.addEventListener('click', (e) => addToCart(parseInt(e.target.dataset.id)));
  });
}

function addToCart(id) {
  const item = menuItems.find(i => i.id === id);
  const existing = cart.find(i => i.id === id);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ ...item, qty: 1 });
  }
  updateCart();
}

function updateCart() {
  cartCount.textContent = cart.reduce((sum, item) => sum + item.qty, 0);
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  cartTotal.textContent = `${total} دج`;

  if (cart.length === 0) {
    cartItems.innerHTML = `<p class="empty-cart" data-en="Your cart is empty" data-ar="سلتك فارغة">${currentLang === 'en' ? 'Your cart is empty' : 'سلتك فارغة'}</p>`;
  } else {
    cartItems.innerHTML = cart.map(item => `
      <div class="cart-item">
        <div class="cart-item-info">
          <h4>${item[currentLang].name}</h4>
          <span>${item.price * item.qty} دج</span>
        </div>
        <div class="cart-item-controls">
          <button class="qty-btn" data-id="${item.id}" data-action="decrease">-</button>
          <span>${item.qty}</span>
          <button class="qty-btn" data-id="${item.id}" data-action="increase">+</button>
        </div>
      </div>
    `).join('');
  }

  document.querySelectorAll('.qty-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const id = parseInt(e.target.dataset.id);
      const action = e.target.dataset.action;
      const item = cart.find(i => i.id === id);
      if (action === 'increase') {
        item.qty++;
      } else {
        item.qty--;
        if (item.qty === 0) cart = cart.filter(i => i.id !== id);
      }
      updateCart();
    });
  });
}

function toggleLang() {
  currentLang = currentLang === 'en' ? 'ar' : 'en';
  document.documentElement.lang = currentLang;
  document.documentElement.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
  document.body.dir = currentLang === 'ar' ? 'rtl' : 'ltr';
  document.getElementById('langToggle').textContent = currentLang === 'en' ? 'عربي' : 'English';

  document.querySelectorAll('[data-en]').forEach(el => {
    el.textContent = el.getAttribute(`data-${currentLang}`);
  });

  renderMenu(currentCategory);
  updateCart();
}

document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentCategory = btn.dataset.category;
    renderMenu(currentCategory);
  });
});

document.getElementById('langToggle').addEventListener('click', toggleLang);

document.getElementById('cartToggle').addEventListener('click', () => {
  cartSidebar.classList.add('open');
  cartOverlay.classList.add('active');
});

document.getElementById('closeCart').addEventListener('click', () => {
  cartSidebar.classList.remove('open');
  cartOverlay.classList.remove('active');
});

cartOverlay.addEventListener('click', () => {
  cartSidebar.classList.remove('open');
  cartOverlay.classList.remove('active');
});

document.getElementById('checkoutBtn').addEventListener('click', () => {
  cartSidebar.classList.remove('open');
  cartOverlay.classList.remove('active');
});

document.getElementById('hamburger').addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('active');
});

const TG_BOT_TOKEN = '8771600400:AAFJx26-eKAoRibnnfd5L1FXeVpS5TpGnOo';
const TG_CHAT_ID = '7153141096';

document.getElementById('deliveryForm').addEventListener('submit', async (e) => {
  e.preventDefault();
  if (cart.length === 0) {
    alert(currentLang === 'en' ? 'Please add items to your cart first!' : 'يرجى إضافة عناصر للسلة أولاً!');
    return;
  }

  const name = document.getElementById('fullName').value;
  const phone = document.getElementById('phone').value;
  const address = document.getElementById('address').value;
  const notes = document.getElementById('notes').value;

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  let message = currentLang === 'en'
    ? `🛒 *New Order - Kaskroutet Moufida*\n\n`
    : `🛒 *طلب جديد - كسكروت مفيدة*\n\n`;

  message += currentLang === 'en' ? `*Items:*\n` : `*العناصر:*\n`;
  cart.forEach(item => {
    message += `▫️ ${item[currentLang].name} x${item.qty} = ${item.price * item.qty} دج\n`;
  });

  message += `\n💰 *${currentLang === 'en' ? 'Total' : 'المجموع'}:* ${total} دج\n\n`;
  message += `👤 *${currentLang === 'en' ? 'Customer' : 'العميل'}:* ${name}\n`;
  message += `📞 *${currentLang === 'en' ? 'Phone' : 'الهاتف'}:* ${phone}\n`;
  message += `📍 *${currentLang === 'en' ? 'Address' : 'العنوان'}:* ${address}\n`;
  if (notes) {
    message += `📝 *${currentLang === 'en' ? 'Notes' : 'ملاحظات'}:* ${notes}\n`;
  }

  const submitBtn = e.target.querySelector('button[type="submit"]');
  submitBtn.disabled = true;
  submitBtn.textContent = currentLang === 'en' ? 'Sending...' : 'جاري الإرسال...';

  try {
    await fetch(`https://api.telegram.org/bot${TG_BOT_TOKEN}/sendMessage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ chat_id: TG_CHAT_ID, text: message, parse_mode: 'Markdown' })
    });
    alert(currentLang === 'en' ? 'Order sent! We will contact you soon.' : 'تم إرسال الطلب! سنتصل بك قريباً.');
    cart = [];
    updateCart();
    e.target.reset();
  } catch (err) {
    alert(currentLang === 'en' ? 'Failed to send order. Please try again.' : 'فشل إرسال الطلب. حاول مرة أخرى.');
  }

  submitBtn.disabled = false;
  submitBtn.textContent = currentLang === 'en' ? 'Place Order' : 'إرسال الطلب';
});

renderMenu(currentCategory);
