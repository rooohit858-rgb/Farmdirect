// Comprehensive Agricultural Product Database
const productsData = [
    {
        id: "prod-wheat",
        title: "Golden Wheat Grain (100 kg)",
        category: "Grains & Feed",
        seller: "Punjab Agro Co-op",
        sellerLocation: "Ludhiana, Punjab",
        sellerRating: 4.9,
        verifiedRetailer: true,
        price: 2400,
        stock: 50,
        deliveryRadius: "Statewide Delivery",
        estimatedDeliveryDays: "2-3 Days",
        description: "Freshly harvested organic golden wheat grains. High protein content and clean machine-sorted quality.",
        specifications: { "Moisture Content": "< 12%", "Grain Type": "Durum Wheat", "Harvest": "2026 Season" },
        image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: "prod-rice",
        title: "Organic Basmati Rice (50 kg)",
        category: "Grains & Feed",
        seller: "Doaba Rice Mills",
        sellerLocation: "Karnal, Haryana",
        sellerRating: 4.8,
        verifiedRetailer: true,
        price: 3800,
        stock: 35,
        deliveryRadius: "Pan-India Freight",
        estimatedDeliveryDays: "3-4 Days",
        description: "Aromatic long-grain Basmati rice, naturally aged for rich aroma and authentic texture.",
        specifications: { "Grain Length": "8.3 mm", "Purity": "98% Cleaned", "Aroma": "High" },
        image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: "prod-milk",
        title: "Pure Farm Fresh Milk (20L)",
        category: "Dairy & Meat",
        seller: "Green Pastures Dairy",
        sellerLocation: "Anand, Gujarat",
        sellerRating: 5.0,
        verifiedRetailer: true,
        price: 1100,
        stock: 100,
        deliveryRadius: "Local Express Delivery",
        estimatedDeliveryDays: "Same-Day Delivery",
        description: "Fresh, unpasteurized milk from free-range Gir cows. Delivered chilled in sealed food-grade containers.",
        specifications: { "Fat Content": "4.8%", "Packaging": "Insulated Can", "Shelf Life": "48 Hours" },
        image: "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: "prod-tomato",
        title: "Fresh Red Tomatoes (25 kg Crate)",
        category: "Vegetables",
        seller: "Nashik Organic Farms",
        sellerLocation: "Nashik, Maharashtra",
        sellerRating: 4.7,
        verifiedRetailer: true,
        price: 650,
        stock: 80,
        deliveryRadius: "Regional Express",
        estimatedDeliveryDays: "1-2 Days",
        description: "Firm, juicy, farm-picked red tomatoes grown with organic fertilizers.",
        specifications: { "Grade": "Class A", "Color": "Deep Red", "Shelf Life": "7-10 Days" },
        image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: "prod-potato",
        title: "Organic Farm Potatoes (50 kg Sack)",
        category: "Vegetables",
        seller: "Agra Produce Depot",
        sellerLocation: "Agra, Uttar Pradesh",
        sellerRating: 4.6,
        verifiedRetailer: true,
        price: 850,
        stock: 120,
        deliveryRadius: "Statewide Freight",
        estimatedDeliveryDays: "2-3 Days",
        description: "High-grade starch potatoes, clean and dirt-free, suitable for commercial or retail distribution.",
        specifications: { "Variety": "Kufri Jyoti", "Size": "Medium to Large", "Storage": "Cool Dry Place" },
        image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: "prod-banana",
        title: "Fresh Banana Crate (20 kg)",
        category: "Fruits",
        seller: "Jalgaon Banana Co-op",
        sellerLocation: "Jalgaon, Maharashtra",
        sellerRating: 4.9,
        verifiedRetailer: true,
        price: 520,
        stock: 65,
        deliveryRadius: "Regional Express",
        estimatedDeliveryDays: "1-2 Days",
        description: "Naturally ripened Robusta bananas, harvested fresh from sun-drenched orchards.",
        specifications: { "Variety": "Grand Naine / Robusta", "Ripeness": "Semi-Ripe", "Weight": "20 kg Net" },
        image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: "prod-apple",
        title: "Kashmiri Red Apples (10 kg Box)",
        category: "Fruits",
        seller: "Valley Fresh Orchards",
        sellerLocation: "Srinagar, Jammu & Kashmir",
        sellerRating: 4.9,
        verifiedRetailer: true,
        price: 1350,
        stock: 40,
        deliveryRadius: "Pan-India Freight",
        estimatedDeliveryDays: "3-5 Days",
        description: "Crisp, sweet Kashmiri apples hand-picked and carefully padded for long-distance transport.",
        specifications: { "Grade": "Royal Delicious", "Color": "90%+ Red", "Packaging": "Corrugated Box" },
        image: "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: "prod-eggs",
        title: "Free-Range Farm Eggs (100 Tray)",
        category: "Dairy & Meat",
        seller: "Poultry Direct",
        sellerLocation: "Namakkal, Tamil Nadu",
        sellerRating: 4.8,
        verifiedRetailer: true,
        price: 480,
        stock: 90,
        deliveryRadius: "Statewide Express",
        estimatedDeliveryDays: "1-2 Days",
        description: "Nutritious brown eggs collected daily from pasture-raised hens.",
        specifications: { "Shell": "Brown", "Count": "100 Eggs", "Quality": "Grade A Large" },
        image: "https://images.unsplash.com/photo-1506976785307-8732e854ad03?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: "prod-corn",
        title: "Yellow Sweet Corn Grain (50 kg)",
        category: "Grains & Feed",
        seller: "Deccan Feed Mills",
        sellerLocation: "Telangana",
        sellerRating: 4.7,
        price: 1150,
        stock: 60,
        estimatedDeliveryDays: "2-3 Days",
        description: "High-protein yellow corn suitable for feed mixing or direct consumption.",
        specifications: { "Moisture": "< 11%", "Purity": "99%" },
        image: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: "prod-hay",
        title: "Dry Animal Feed Hay Bales (100 kg)",
        category: "Grains & Feed",
        seller: "Rajasthan Fodder Depot",
        sellerLocation: "Jaipur, Rajasthan",
        sellerRating: 4.5,
        price: 900,
        stock: 75,
        estimatedDeliveryDays: "2-4 Days",
        description: "Sun-cured premium grass hay for cattle livestock fodder.",
        specifications: { "Type": "Sun-cured Alfalfa/Grass", "Moisture": "< 10%" },
        image: "https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: "prod-onion",
        title: "Fresh Red Onions (50 kg Bag)",
        category: "Vegetables",
        seller: "Nashik Trade Mandi",
        sellerLocation: "Nashik, Maharashtra",
        sellerRating: 4.6,
        price: 1100,
        stock: 110,
        estimatedDeliveryDays: "1-3 Days",
        description: "Grade-A firm red onions with long shelf life.",
        specifications: { "Size": "55mm+", "Quality": "Dry Sorted" },
        image: "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?auto=format&fit=crop&w=800&q=80"
    },
    {
        id: "prod-strawberry",
        title: "Organic Fresh Strawberries (2 kg Pack)",
        category: "Fruits",
        seller: "Mahabaleshwar Farms",
        sellerLocation: "Mahabaleshwar, Maharashtra",
        sellerRating: 4.9,
        price: 450,
        stock: 30,
        estimatedDeliveryDays: "1-2 Days",
        description: "Sweet, juicy hand-picked strawberries delivered in chilled trays.",
        specifications: { "Grade": "Export Class", "Packaging": "Punnet Tray" },
        image: "https://images.unsplash.com/photo-1464965911861-746a04b4bca6?auto=format&fit=crop&w=800&q=80"
    }
];

// --- LocalStorage Cart Management ---
function getCart() {
    return JSON.parse(localStorage.getItem('farmCart')) || [];
}

function saveCart(cart) {
    localStorage.setItem('farmCart', JSON.stringify(cart));
    updateCartBadge();
}

function updateCartBadge() {
    const cart = getCart();
    const count = cart.reduce((acc, item) => acc + item.quantity, 0);
    const badge = document.getElementById('cart-count');
    if (badge) badge.innerText = count;
}

function addToCart(productId) {
    const product = productsData.find(p => p.id === productId);
    if (!product) return;

    let cart = getCart();
    const existing = cart.find(item => item.id === productId);

    if (existing) {
        existing.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    saveCart(cart);
    alert(`${product.title} added to cart!`);
}

function removeFromCart(productId) {
    let cart = getCart();
    cart = cart.filter(item => item.id !== productId);
    saveCart(cart);
    renderCartPage();
}

function changeQty(productId, delta) {
    let cart = getCart();
    const item = cart.find(i => i.id === productId);
    if (item) {
        item.quantity += delta;
        if (item.quantity <= 0) {
            cart = cart.filter(i => i.id !== productId);
        }
    }
    saveCart(cart);
    renderCartPage();
}

// Render Cart Page Data
function renderCartPage() {
    const cartList = document.getElementById('cart-list');
    if (!cartList) return;

    const cart = getCart();
    const itemCountSpan = document.getElementById('cart-item-count');
    const subtotalEl = document.getElementById('cart-subtotal');
    const grandTotalEl = document.getElementById('cart-grand-total');

    if (itemCountSpan) itemCountSpan.innerText = cart.reduce((a, b) => a + b.quantity, 0);

    if (cart.length === 0) {
        cartList.innerHTML = `<p style="padding:2rem; text-align:center; color:var(--text-muted);">Your cart is currently empty. <br><br><a href="index.html#marketplace" class="btn-submit" style="display:inline-block; text-decoration:none;">Browse Marketplace</a></p>`;
        if (subtotalEl) subtotalEl.innerText = `₹0`;
        if (grandTotalEl) grandTotalEl.innerText = `₹0`;
        return;
    }

    let subtotal = 0;
    cartList.innerHTML = '';

    cart.forEach(item => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;

        const card = document.createElement('div');
        card.className = 'cart-item-card';
        card.innerHTML = `
            <img src="${item.image}" class="cart-item-img" alt="${item.title}">
            <div class="cart-item-info">
                <div class="cart-item-title">${item.title}</div>
                <div class="cart-item-price">₹${item.price.toLocaleString('en-IN')} x ${item.quantity} = ₹${itemTotal.toLocaleString('en-IN')}</div>
                <small style="color:var(--text-muted)">⏱️ Est. Delivery: ${item.estimatedDeliveryDays || '2-3 Days'}</small>
            </div>
            <div class="cart-qty-controls">
                <button class="btn-qty" onclick="changeQty('${item.id}', -1)">-</button>
                <span>${item.quantity}</span>
                <button class="btn-qty" onclick="changeQty('${item.id}', 1)">+</button>
            </div>
            <button class="btn-remove" onclick="removeFromCart('${item.id}')">Remove</button>
        `;
        cartList.appendChild(card);
    });

    const freight = 150;
    if (subtotalEl) subtotalEl.innerText = `₹${subtotal.toLocaleString('en-IN')}`;
    if (grandTotalEl) grandTotalEl.innerText = `₹${(subtotal + freight).toLocaleString('en-IN')}`;
}

<<<<<<< HEAD
async function processOrder() {
=======
function processOrder() {
>>>>>>> 89c46436020675f4d3346c0689f900a33910b910
    const cart = getCart();
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }
    const selectedMethod = document.querySelector('input[name="payment"]:checked')?.value || 'upi';
<<<<<<< HEAD
    const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const freight = 150;
    const grandTotal = subtotal + freight;
    const userEmail = localStorage.getItem('userEmail') || 'guest@farmdirect.com';
    const userName = localStorage.getItem('userName') || 'Valued Customer';

    try {
        const res = await fetch("/api/orders", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                customer_name: userName,
                phone: localStorage.getItem('userPhone') || "+91 9876543210",
                address: localStorage.getItem('userLocation') || "Direct Farm Hub",
                city: "Local District",
                pincode: "110001",
                payment_method: selectedMethod,
                grand_total: grandTotal,
                user_email: userEmail
            })
        });
        const result = await res.json();
        alert(`Order Placed Successfully via ${selectedMethod.toUpperCase()}! Thank you for choosing FarmDirect.`);
    } catch (err) {
        console.warn("Offline order fallback:", err);
        alert(`Order Placed Successfully via ${selectedMethod.toUpperCase()}! Thank you for choosing FarmDirect.`);
    }

=======
    alert(`Order Placed Successfully via ${selectedMethod.toUpperCase()}! Thank you for choosing FarmDirect.`);
>>>>>>> 89c46436020675f4d3346c0689f900a33910b910
    localStorage.removeItem('farmCart');
    window.location.href = 'index.html';
}

// Symmetrical Grid Rendering
function renderMarketplace(dataToRender = productsData.slice(0, 8)) {
    const grid = document.getElementById('productGrid');
    const countSpan = document.getElementById('resultsCount');
    if (!grid) return;

    grid.innerHTML = '';
    if (countSpan) {
        countSpan.innerText = `Showing ${dataToRender.length} Items`;
    }

    if (dataToRender.length === 0) {
        grid.innerHTML = `<div class="no-results">No matching agricultural products found. Try searching for "Wheat", "Tomato", "Milk", or "Fruit".</div>`;
        return;
    }

    dataToRender.forEach(product => {
        const card = document.createElement('div');
        card.className = 'product-card';
        card.onclick = () => window.open(`product.html?id=${product.id}`, '_blank');

        card.innerHTML = `
            <img src="${product.image}" alt="${product.title}" class="product-img">
            <div class="product-details">
                <span class="product-category">${product.category}</span>
                <h4 class="product-title">${product.title}</h4>
<<<<<<< HEAD
                <div class="product-seller">📍 ${product.sellerLocation || product.location || 'Local Farm'}</div>
=======
                <div class="product-seller">📍 ${product.sellerLocation}</div>
>>>>>>> 89c46436020675f4d3346c0689f900a33910b910
                <div class="product-bottom">
                    <span class="product-price">₹${product.price.toLocaleString('en-IN')}</span>
                    <button class="btn-add" onclick="event.stopPropagation(); addToCart('${product.id}')">🛒 Add to Cart</button>
                </div>
            </div>
        `;

        attach3DTilt(card);
        grid.appendChild(card);
    });
}

// Search & Filter
function searchProducts(query) {
    const searchTerm = query.toLowerCase().trim();
    if (searchTerm === '') {
        renderMarketplace(productsData.slice(0, 8));
        return;
    }

    const filtered = productsData.filter(p => 
        p.title.toLowerCase().includes(searchTerm) ||
        p.category.toLowerCase().includes(searchTerm) ||
<<<<<<< HEAD
        (p.description && p.description.toLowerCase().includes(searchTerm))
=======
        p.description.toLowerCase().includes(searchTerm)
>>>>>>> 89c46436020675f4d3346c0689f900a33910b910
    );

    renderMarketplace(filtered);
}

function filterProducts() {
    const selectedCategory = document.getElementById('category-filter').value;
    
    if (selectedCategory === 'all') {
        renderMarketplace(productsData.slice(0, 8));
        return;
    }

    const filtered = productsData.filter(p => p.category === selectedCategory);
    renderMarketplace(filtered);
}

// Product Detail Page
function renderProductPage() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id') || 'prod-wheat';
    const product = productsData.find(p => p.id === productId) || productsData[0];
    
    document.title = `${product.title} | FarmDirect Details`;

    const container = document.getElementById('productDetailView');
    if (!container) return;

    const suggestedProducts = productsData.filter(p => p.id !== product.id).slice(0, 4);

    let specsHTML = '';
<<<<<<< HEAD
    if (product.specifications) {
        for (const [key, val] of Object.entries(product.specifications)) {
            specsHTML += `<div class="spec-row"><strong>${key}:</strong> <span>${val}</span></div>`;
        }
=======
    for (const [key, val] of Object.entries(product.specifications)) {
        specsHTML += `<div class="spec-row"><strong>${key}:</strong> <span>${val}</span></div>`;
>>>>>>> 89c46436020675f4d3346c0689f900a33910b910
    }

    container.innerHTML = `
        <div class="product-detail-grid">
            <div class="viewport-3d-card">
<<<<<<< HEAD
                <div class="badge-stock">⚡ In Stock (${product.stock || 100} available)</div>
=======
                <div class="badge-stock">⚡ In Stock (${product.stock} available)</div>
>>>>>>> 89c46436020675f4d3346c0689f900a33910b910
                <div class="interactive-canvas-wrapper" id="canvasContainer">
                    <img src="${product.image}" alt="${product.title}" class="detail-main-img" id="mainImg3D">
                    <div class="hint-3d">🖱️ Hover over image for 3D tilt preview</div>
                </div>
            </div>

            <div class="detail-info-card">
                <span class="product-category">${product.category}</span>
                <h1 class="detail-title">${product.title}</h1>
                <div class="detail-price">₹${product.price.toLocaleString('en-IN')}</div>

                <div class="retailer-box">
                    <div class="retailer-header">
                        <h4>🏪 Retailer & Origin Details</h4>
                        ${product.verifiedRetailer ? '<span class="verified-tag">✓ Verified Supplier</span>' : ''}
                    </div>
<<<<<<< HEAD
                    <p><strong>Seller:</strong> ${product.seller || 'Verified Farmer'} (⭐ ${product.sellerRating || '4.8'} / 5.0)</p>
                    <p><strong>Location:</strong> ${product.sellerLocation || 'Local Farm'}</p>
=======
                    <p><strong>Seller:</strong> ${product.seller} (⭐ ${product.sellerRating || '4.8'} / 5.0)</p>
                    <p><strong>Location:</strong> ${product.sellerLocation}</p>
>>>>>>> 89c46436020675f4d3346c0689f900a33910b910
                    <p><strong>Delivery Coverage:</strong> ${product.deliveryRadius || 'Regional Delivery'}</p>
                    <p><strong>Estimated Time:</strong> ${product.estimatedDeliveryDays || '2-3 Days'}</p>
                </div>

                <div class="description-box">
                    <h4>Description</h4>
<<<<<<< HEAD
                    <p>${product.description || 'Fresh, high-quality farm produce direct from agricultural growers.'}</p>
=======
                    <p>${product.description}</p>
>>>>>>> 89c46436020675f4d3346c0689f900a33910b910
                </div>

                <div class="specs-box">
                    <h4>Specifications</h4>
<<<<<<< HEAD
                    ${specsHTML || '<p style="color:var(--text-muted)">Standard agricultural grade verified.</p>'}
=======
                    ${specsHTML}
>>>>>>> 89c46436020675f4d3346c0689f900a33910b910
                </div>

                <div class="delivery-calc-box">
                    <label><strong>Check Express Delivery Fee:</strong></label>
                    <div style="display:flex; gap:0.5rem; margin-top:0.5rem;">
                        <input type="text" id="pincodeInput" class="form-control" placeholder="Enter Pincode">
                        <button class="btn-submit" style="width: auto;" onclick="checkDelivery()">Check</button>
                    </div>
                    <span id="deliveryMsg" style="font-size: 0.85rem; color: var(--primary); font-weight: 600; display:block; margin-top:0.4rem;"></span>
                </div>

                <div style="display:flex; gap:1rem; margin-top:1rem;">
                    <button class="btn-hero primary" style="flex:1; text-align:center;" onclick="addToCart('${product.id}')">🛒 Add to Cart</button>
                    <button class="btn-hero secondary" style="flex:1; text-align:center; background: var(--primary); color:#fff;" onclick="addToCart('${product.id}'); window.location.href='cart.html';">⚡ Buy Now</button>
                </div>
            </div>
        </div>

        <section class="suggestions-section">
            <h2 class="section-title" style="text-align:left; font-size:1.5rem; margin-bottom:1.5rem;">Suggested Farm Produce</h2>
            <div class="products-grid">
                ${suggestedProducts.map(item => `
                    <div class="product-card" onclick="window.open('product.html?id=${item.id}', '_blank')">
                        <img src="${item.image}" class="product-img">
                        <div class="product-details">
                            <span class="product-category">${item.category}</span>
                            <h4 class="product-title">${item.title}</h4>
<<<<<<< HEAD
                            <div class="product-seller">📍 ${item.sellerLocation || 'Local Farm'}</div>
=======
                            <div class="product-seller">📍 ${item.sellerLocation}</div>
>>>>>>> 89c46436020675f4d3346c0689f900a33910b910
                            <div class="product-bottom">
                                <span class="product-price">₹${item.price.toLocaleString('en-IN')}</span>
                                <button class="btn-add" onclick="event.stopPropagation(); addToCart('${item.id}')">🛒 Add to Cart</button>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </section>
    `;

    initDetail3DEffect();
}

function checkDelivery() {
    const pin = document.getElementById('pincodeInput').value;
    const msg = document.getElementById('deliveryMsg');
    if (pin.length >= 5) {
        msg.innerText = "✓ Express Agricultural Freight Available for " + pin + " (₹150 Delivery Fee)";
    } else {
        msg.innerText = "Please enter a valid postal code.";
    }
}

function initDetail3DEffect() {
    const img = document.getElementById('mainImg3D');
    const container = document.getElementById('canvasContainer');
    if (!img || !container) return;

    container.addEventListener('mousemove', (e) => {
        const rect = container.getBoundingClientRect();
        const x = e.clientX - rect.left - (rect.width / 2);
        const y = e.clientY - rect.top - (rect.height / 2);

        img.style.transform = `scale(1.08) rotateY(${x / 15}deg) rotateX(${-y / 15}deg)`;
    });

    container.addEventListener('mouseleave', () => {
        img.style.transform = 'scale(1) rotateY(0deg) rotateX(0deg)';
    });
}

// Authentication Logic
function switchAuthTab(tab) {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const loginBtn = document.getElementById('loginTabBtn');
    const signupBtn = document.getElementById('signupTabBtn');

    if (!loginForm || !signupForm) return;

    if (tab === 'login') {
        loginForm.classList.remove('hidden');
        signupForm.classList.add('hidden');
        loginBtn.classList.add('active');
        signupBtn.classList.remove('active');
    } else {
        signupForm.classList.remove('hidden');
        loginForm.classList.add('hidden');
        signupBtn.classList.add('active');
        loginBtn.classList.remove('active');
    }
}

<<<<<<< HEAD
async function handleAuthSubmit(event, type) {
    event.preventDefault();
    
    const urlParams = new URLSearchParams(window.location.search);
    const queryRole = urlParams.get('role');
    const roleSelect = document.getElementById("userRole");
    const selectedRole = queryRole || (roleSelect ? roleSelect.value : "consumer");

    let email = "";
    let name = "";
    let phone = "";
    let password = "";

    if (type === 'Login') {
        email = document.querySelector('#loginForm input[type="text"], #loginForm input[type="email"]')?.value || "user@farmdirect.com";
        password = document.querySelector('#loginForm input[type="password"]')?.value || "";
        name = email.split('@')[0];
    } else {
        name = document.querySelector('#signupForm input[placeholder*="Name"]')?.value || "Registered User";
        phone = document.querySelector('#signupForm input[type="tel"]')?.value || "";
        email = document.querySelector('#signupForm input[type="email"]')?.value || "user@farmdirect.com";
        password = document.querySelector('#signupForm input[type="password"]')?.value || "";
    }
    
    try {
        const endpoint = type === 'Login' ? '/api/login' : '/api/register';
        const bodyPayload = type === 'Login' 
            ? { email, password } 
            : { name, email, password, role: selectedRole };
            
        const res = await fetch(endpoint, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(bodyPayload)
        });
        const data = await res.json();
        if (data.status === 'success' && data.user) {
            localStorage.setItem("userName", data.user.name || name);
            localStorage.setItem("userEmail", data.user.email || email);
            localStorage.setItem("userRole", data.user.role || selectedRole);
        }
    } catch (e) {
        console.warn("Backend auth offline fallback:", e);
    }

    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userRole", selectedRole);
    if (!localStorage.getItem("userName")) localStorage.setItem("userName", name);
    if (!localStorage.getItem("userEmail")) localStorage.setItem("userEmail", email);
    if (phone) localStorage.setItem("userPhone", phone);
    
    alert(`${type} Successful as ${selectedRole.toUpperCase()}!`);
    
=======
function handleAuthSubmit(event, type) {
    event.preventDefault();
    
    // Dropdown se selected role read karein
    const roleSelect = document.getElementById("userRole");
    const selectedRole = roleSelect ? roleSelect.value : "consumer";
    
    // LocalStorage mein session aur role save karein
    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userRole", selectedRole);
    
    alert(`${type} Successful as ${selectedRole.toUpperCase()}!`);
    
    // Role based Redirection
>>>>>>> 89c46436020675f4d3346c0689f900a33910b910
    if (selectedRole === "farmer") {
        window.location.href = 'dashboard.html';
    } else {
        window.location.href = 'consumer.html';
    }
}

function attach3DTilt(element) {
    element.addEventListener('mousemove', (e) => {
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left - (rect.width / 2);
        const y = e.clientY - rect.top - (rect.height / 2);
        element.style.transform = `perspective(1000px) rotateX(${-y / 14}deg) rotateY(${x / 14}deg) translateY(-4px)`;
    });

    element.addEventListener('mouseleave', () => {
        element.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
    });
}

window.addEventListener('scroll', () => {
    const bg = document.getElementById('parallaxBg');
    if (bg) {
        bg.style.transform = `translateY(${window.scrollY * 0.25}px)`;
    }
});

// Sync cart counter badge on load
document.addEventListener('DOMContentLoaded', () => {
    updateCartBadge();
});
<<<<<<< HEAD

// Fetch products added by Farmer and merge into marketplace display
async function loadMarketplaceProducts() {
    try {
        const res = await fetch("/api/products");
        if (!res.ok) return;
        const products = await res.json();

        if (Array.isArray(products) && products.length > 0) {
            products.forEach(backendProd => {
                if (!productsData.some(p => p.id === backendProd.id)) {
                    productsData.unshift({
                        id: backendProd.id,
                        title: backendProd.title,
                        category: backendProd.category,
                        seller: backendProd.seller || "Verified Farmer",
                        sellerLocation: backendProd.sellerLocation || "Local Farm",
                        sellerRating: backendProd.sellerRating || 4.9,
                        verifiedRetailer: backendProd.verifiedRetailer ?? true,
                        price: backendProd.price,
                        stock: backendProd.stock || 50,
                        deliveryRadius: backendProd.deliveryRadius || "Regional Delivery",
                        estimatedDeliveryDays: backendProd.estimatedDeliveryDays || "2-3 Days",
                        description: backendProd.description || "Freshly listed farm produce.",
                        specifications: backendProd.specifications || {},
                        image: backendProd.image || "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80"
                    });
                }
            });
            const grid = document.getElementById('productGrid');
            if (grid) {
                renderMarketplace(productsData);
            }
        }
    } catch (err) {
        console.log("Error loading dynamic products:", err);
=======
// Fetch products added by Farmer and display on Index page
async function loadMarketplaceProducts() {
    try {
        const res = await fetch("http://127.0.0.1:8000/api/products");
        const products = await res.json();

        // Aapke index.html me jahan products ki list hai us container ki class/id
        const productContainer = document.querySelector(".product-grid") || document.querySelector("#featuredListingsContainer");

        if (productContainer && products.length > 0) {
            products.forEach(p => {
                const card = document.createElement("div");
                card.className = "product-card";
                card.innerHTML = `
                    <div class="product-img">
                        <img src="${p.image || 'https://via.placeholder.com/150'}" alt="${p.title}" style="width:100%; height:180px; object-fit:cover;">
                    </div>
                    <div class="product-details" style="padding: 10px;">
                        <span class="category" style="font-size:12px; color:#666;">${p.category}</span>
                        <h3 style="margin:5px 0;">${p.title}</h3>
                        <p style="margin:5px 0; color:#555;">📍 ${p.location}</p>
                        <h4 style="color:#2e7d32; margin:5px 0;">₹${p.price}</h4>
                        <button style="background:#2e7d32; color:white; border:none; padding:8px 12px; border-radius:4px; cursor:pointer; width:100%; margin-top:8px;">
                            🛒 Add To Cart
                        </button>
                    </div>
                `;
                productContainer.appendChild(card);
            });
        }
    } catch (err) {
        console.log("Error loading products:", err);
>>>>>>> 89c46436020675f4d3346c0689f900a33910b910
    }
}

document.addEventListener("DOMContentLoaded", loadMarketplaceProducts);
<<<<<<< HEAD

function logoutUser() {
    localStorage.clear();
    window.location.replace('login.html');
}
=======
function logoutUser() {
    localStorage.clear();
    window.location.replace('login.html');
}
>>>>>>> 89c46436020675f4d3346c0689f900a33910b910
