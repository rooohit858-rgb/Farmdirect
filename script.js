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

// --- MULTI-LANGUAGE TRANSLATION ENGINE ---
const translations = {
    en: {
        marketplace: "Marketplace",
        farmerHome: "Farmer Home",
        farmerPortal: "Farmer Portal",
        routeOptimizer: "🚚 Route Optimizer",
        myOrders: "My Orders",
        cart: "🛒 Cart",
        login: "Log In",
        signUp: "Sign Up",
        register: "Register",
        logout: "Logout",
        searchPlaceholder: "Search wheat, tomato, milk, crops...",
        heroTitle: "Direct Agricultural Marketplace",
        heroSubtitle: "Procure farm-fresh crops, vegetables, fruits, and dairy directly from local growers and registered Farmer Producer Organisations (FPOs) with zero middleman markups.",
        browseHarvest: "Browse Fresh Harvest",
        fpoHub: "FPO Wholesale Hub",
        filterMarketplace: "Filter Marketplace",
        category: "Category",
        allCategories: "All Items",
        grainsCategory: "Grains, Feed & Hay",
        vegetablesCategory: "Fresh Vegetables",
        fruitsCategory: "Fresh Fruits",
        dairyCategory: "Dairy & Animal Products",
        featuredListings: "Featured Produce Listings",
        showingItems: "Showing Items",
        addToCart: "🛒 Add to Cart",
        buyNow: "⚡ Buy Now",
        addedToCartToast: "added to cart!",
        viewCart: "View Cart",
        shoppingCart: "🛒 Shopping Cart",
        cartEmptyTitle: "Your Cart is Currently Empty 🛒",
        cartEmptySubtitle: "Fresh harvest straight from farmers is waiting for you.",
        exploreProduce: "Explore Available Produce",
        orderSummary: "Order Summary",
        produceSubtotal: "Produce Subtotal",
        deliveryFee: "Direct Farm Delivery Fee",
        estimatedTotal: "Estimated Total",
        proceedCheckout: "Proceed to Secure Checkout ➔",
        continueShopping: "← Continue Shopping",
        remove: "Remove",
        checkoutTitle: "Secure FarmDirect Checkout",
        customerDetails: "Customer & Delivery Details",
        paymentMethod: "Select Payment Method",
        placeOrder: "Place Direct Order 🌾",
        farmerDashboard: "Farmer Dashboard & AI Mandi",
        dashboardSubtitle: "Manage your active listings, check exact local mandi rates, optimize transport routes, and connect with FPOs.",
        addNewItem: "➕ Add New Item",
        myProducts: "📦 My Products",
        aiMandiPredictor: "🤖 AI Mandi Predictor",
        fpoNetwork: "🏛️ FPO Collective Network",
        listNewProduce: "List New Produce For Sale",
        itemName: "Item Name / Title",
        pricePerUnit: "Selling Price (₹)",
        farmLocation: "Farm Location / District",
        primaryPhone: "Primary Phone Number",
        emailAddress: "Email Address",
        password: "Password",
        selectRole: "Select Role",
        consumerRole: "Consumer / Buyer",
        farmerRole: "Farmer / Seller",
        loginToAccount: "Log In to Account",
        registerAccount: "Register Account",
        guaranteeTitle: "🛡️ Direct Trade Guarantee:",
        guaranteeText: "Every purchase sends 100% of the farm value directly to verified farmers and FPOs."
    },
    hi: {
        marketplace: "मंडी बाज़ार",
        farmerHome: "किसान होम",
        farmerPortal: "किसान पोर्टल",
        routeOptimizer: "🚚 रूट ऑप्टिमाइज़र",
        myOrders: "मेरे ऑर्डर",
        cart: "🛒 कार्ट",
        login: "लॉग इन",
        signUp: "साइन अप",
        register: "रजिस्टर करें",
        logout: "लॉगआउट",
        searchPlaceholder: "गेहूं, टमाटर, दूध, फसलें खोजें...",
        heroTitle: "सीधा कृषि बाज़ार (किसान से ग्राहक)",
        heroSubtitle: "स्थानीय किसानों और पंजीकृत एफपीओ (FPO) से बिना किसी बिचौलिये के सीधे ताज़ा फसलें, फल, सब्जियां और दूध खरीदें।",
        browseHarvest: "ताज़ा फसलें देखें",
        fpoHub: "एफपीओ थोक केंद्र",
        filterMarketplace: "फ़िल्टर करें",
        category: "श्रेणी (Category)",
        allCategories: "सभी वस्तुएं",
        grainsCategory: "अनाज और दाना",
        vegetablesCategory: "ताज़ा सब्ज़ियाँ",
        fruitsCategory: "ताज़ा फल",
        dairyCategory: "डेयरी और पशु उत्पाद",
        featuredListings: "प्रमुख कृषि उत्पाद",
        showingItems: "उत्पाद प्रदर्शित",
        addToCart: "🛒 कार्ट में जोड़ें",
        buyNow: "⚡ अभी खरीदें",
        addedToCartToast: "कार्ट में जोड़ा गया!",
        viewCart: "कार्ट देखें",
        shoppingCart: "🛒 शॉपिंग कार्ट",
        cartEmptyTitle: "आपकी कार्ट अभी खाली है 🛒",
        cartEmptySubtitle: "खेत से ताज़ा कटाई आपकी प्रतीक्षा कर रही है।",
        exploreProduce: "उपलब्ध फसलें देखें",
        orderSummary: "ऑर्डर सारांश",
        produceSubtotal: "उत्पाद उप-योग",
        deliveryFee: "खेत से डिलीवरी शुल्क",
        estimatedTotal: "कुल अनुमानित राशि",
        proceedCheckout: "सुरक्षित चेकआउट के लिए आगे बढ़ें ➔",
        continueShopping: "← खरीदारी जारी रखें",
        remove: "हटाएं",
        checkoutTitle: "सुरक्षित फार्मडायरेक्ट चेकआउट",
        customerDetails: "ग्राहक एवं डिलीवरी विवरण",
        paymentMethod: "भुगतान का तरीका चुनें",
        placeOrder: "सीधा ऑर्डर करें 🌾",
        farmerDashboard: "किसान डैशबोर्ड एवं एआई मंडी",
        dashboardSubtitle: "अपनी लिस्टिंग प्रबंधित करें, लाइव मंडी भाव देखें, रूट ऑप्टिमाइज़ करें और FPO से जुड़ें।",
        addNewItem: "➕ नया उत्पाद जोड़ें",
        myProducts: "📦 मेरी फसलें",
        aiMandiPredictor: "🤖 एआई मंडी भाव",
        fpoNetwork: "🏛️ एफपीओ नेटवर्क",
        listNewProduce: "बिक्री के लिए नई उपज जोड़ें",
        itemName: "उपज का नाम / शीर्षक",
        pricePerUnit: "बिक्री मूल्य (₹)",
        farmLocation: "खेत का स्थान / ज़िला",
        primaryPhone: "मोबाइल नंबर",
        emailAddress: "ईमेल आईडी",
        password: "पासवर्ड",
        selectRole: "भूमिका चुनें",
        consumerRole: "उपभोक्ता / खरीदार",
        farmerRole: "किसान / विक्रेता",
        loginToAccount: "खाते में लॉग इन करें",
        registerAccount: "नया खाता बनाएं",
        guaranteeTitle: "🛡️ प्रत्यक्ष व्यापार गारंटी:",
        guaranteeText: "हर खरीदारी का 100% मूल्य सीधे सत्यापित किसानों और एफपीओ को मिलता है।"
    },
    pa: {
        marketplace: "ਮੰਡੀ ਬਾਜ਼ਾਰ",
        farmerHome: "ਕਿਸਾਨ ਹੋਮ",
        farmerPortal: "ਕਿਸਾਨ ਪੋਰਟਲ",
        routeOptimizer: "🚚 ਰੂਟ ਆਪਟੀਮਾਈਜ਼ਰ",
        myOrders: "ਮੇਰੇ ਆਰਡਰ",
        cart: "🛒 ਕਾਰਟ",
        login: "ਲਾਗਇਨ",
        signUp: "ਸਾਈਨ ਅੱਪ",
        register: "ਰਜਿਸਟਰ ਕਰੋ",
        logout: "ਲਾਗਆਉਟ",
        searchPlaceholder: "ਕਣਕ, ਟਮਾਟਰ, ਦੁੱਧ, ਫ਼ਸਲਾਂ ਖੋਜੋ...",
        heroTitle: "ਸਿੱਧਾ ਖੇਤੀਬਾੜੀ ਮੰਡੀ (ਕਿਸਾਨ ਤੋਂ ਖਪਤਕਾਰ)",
        heroSubtitle: "ਸਥਾਨਕ ਕਿਸਾਨਾਂ ਅਤੇ ਰਜਿਸਟਰਡ ਐਫਪੀਓ (FPO) ਤੋਂ ਬਿਨਾਂ ਕਿਸੇ ਵਿਚੋਲੇ ਦੇ ਤਾਜ਼ੀਆਂ ਫ਼ਸਲਾਂ, ਸਬਜ਼ੀਆਂ, ਫਲ ਅਤੇ ਦੁੱਧ ਸਿੱਧਾ ਖਰੀਦੋ।",
        browseHarvest: "ਤਾਜ਼ੀ ਫ਼ਸਲ ਵੇਖੋ",
        fpoHub: "ਐਫਪੀਓ ਥੋਕ ਕੇਂਦਰ",
        filterMarketplace: "ਫਿਲਟਰ ਕਰੋ",
        category: "ਸ਼੍ਰੇਣੀ (Category)",
        allCategories: "ਸਾਰੀਆਂ ਵਸਤੂਆਂ",
        grainsCategory: "ਅਨਾਜ ਅਤੇ ਦਾਣਾ",
        vegetablesCategory: "ਤਾਜ਼ੀਆਂ ਸਬਜ਼ੀਆਂ",
        fruitsCategory: "ਤਾਜ਼ੇ ਫਲ",
        dairyCategory: "ਡੇਅਰੀ ਉਤਪਾਦ",
        featuredListings: "ਮੁੱਖ ਖੇਤੀਬਾੜੀ ਉਤਪਾਦ",
        showingItems: "ਉਤਪਾਦ ਵੇਖਾਏ ਗਏ",
        addToCart: "🛒 ਕਾਰਟ ਵਿੱਚ ਸ਼ਾਮਲ ਕਰੋ",
        buyNow: "⚡ ਹੁਣੇ ਖਰੀਦੋ",
        addedToCartToast: "ਕਾਰਟ ਵਿੱਚ ਸ਼ਾਮਲ ਕੀਤਾ ਗਿਆ!",
        viewCart: "ਕਾਰਟ ਵੇਖੋ",
        shoppingCart: "🛒 ਸ਼ਾਪਿੰਗ ਕਾਰਟ",
        cartEmptyTitle: "ਤੁਹਾਡਾ ਕਾਰਟ ਇਸ ਵੇਲੇ ਖਾਲੀ ਹੈ 🛒",
        cartEmptySubtitle: "ਖੇਤ ਵਿੱਚੋਂ ਤਾਜ਼ੀ ਵਾਢੀ ਤੁਹਾਡੀ ਉਡੀਕ ਕਰ ਰਹੀ ਹੈ।",
        exploreProduce: "ਉਪਲਬਧ ਫ਼ਸਲਾਂ ਵੇਖੋ",
        orderSummary: "ਆਰਡਰ ਦਾ ਸਾਰ",
        produceSubtotal: "ਉਤਪਾਦ ਉਪ-ਜੋੜ",
        deliveryFee: "ਸਿੱਧੀ ਫਾਰਮ ਡਿਲੀਵਰੀ ਫੀਸ",
        estimatedTotal: "ਕੁੱਲ ਜੋੜ",
        proceedCheckout: "ਚੈੱਕਆਉਟ ਲਈ ਅੱਗੇ ਵਧੋ ➔",
        continueShopping: "← ਖਰੀਦਦਾਰੀ ਜਾਰੀ ਰੱਖੋ",
        remove: "ਹਟਾਓ",
        checkoutTitle: "ਸੁਰੱਖਿਅਤ ਫਾਰਮਡਾਇਰੈਕਟ ਚੈੱਕਆਉਟ",
        customerDetails: "ਗਾਹਕ ਅਤੇ ਡਿਲੀਵਰੀ ਵੇਰਵੇ",
        paymentMethod: "ਭੁਗਤਾਨ ਦਾ ਤਰੀਕਾ ਚੁਣੋ",
        placeOrder: "ਸਿੱਧਾ ਆਰਡਰ ਕਰੋ 🌾",
        farmerDashboard: "ਕਿਸਾਨ ਡੈਸ਼ਬੋਰਡ ਅਤੇ ਏਆਈ ਮੰਡੀ",
        dashboardSubtitle: "ਆਪਣੀਆਂ ਸੂਚੀਆਂ ਪ੍ਰਬੰਧਿਤ ਕਰੋ, ਲਾਈਵ ਮੰਡੀ ਭਾਅ ਦੇਖੋ, ਰੂਟ ਆਪਟੀਮਾਈਜ਼ ਕਰੋ ਅਤੇ ਐਫਪੀਓ ਨਾਲ ਜੁੜੋ।",
        addNewItem: "➕ ਨਵਾਂ ਉਤਪਾਦ ਜੋੜੋ",
        myProducts: "📦 ਮੇਰੀਆਂ ਫ਼ਸਲਾਂ",
        aiMandiPredictor: "🤖 ਏਆਈ ਮੰਡੀ ਭਾਅ",
        fpoNetwork: "🏛️ ਐਫਪੀਓ ਨੈੱਟਵਰਕ",
        listNewProduce: "ਵਿਕਰੀ ਲਈ ਨਵੀਂ ਉਪਜ ਜੋੜੋ",
        itemName: "ਉਤਪਾਦ ਦਾ ਨਾਮ / ਸਿਰਲੇਖ",
        pricePerUnit: "ਵੇਚਣ ਮੁੱਲ (₹)",
        farmLocation: "ਖੇਤ ਦਾ ਸਥਾਨ / ਜ਼ਿਲ੍ਹਾ",
        primaryPhone: "ਫ਼ੋਨ ਨੰਬਰ",
        emailAddress: "ਈਮੇਲ ਪਤਾ",
        password: "ਪਾਸਵਰਡ",
        selectRole: "ਭੂਮਿਕਾ ਚੁਣੋ",
        consumerRole: "ਖਪਤਕਾਰ / ਖਰੀਦਦਾਰ",
        farmerRole: "ਕਿਸਾਨ / ਵਿਕਰੇਤਾ",
        loginToAccount: "ਖਾਤੇ ਵਿੱਚ ਲਾਗਇਨ ਕਰੋ",
        registerAccount: "ਖਾਤਾ ਰਜਿਸਟਰ ਕਰੋ",
        guaranteeTitle: "🛡️ ਸਿੱਧੀ ਵਪਾਰ ਗਾਰੰਟੀ:",
        guaranteeText: "ਹਰ ਖਰੀਦ ਦਾ 100% ਮੁੱਲ ਸਿੱਧਾ ਕਿਸਾਨਾਂ ਅਤੇ ਐਫਪੀਓ ਨੂੰ ਜਾਂਦਾ ਹੈ।"
    },
    mr: {
        marketplace: "कृषी बाजार",
        farmerHome: "शेतकरी होम",
        farmerPortal: "शेतकरी पोर्टल",
        routeOptimizer: "🚚 मार्ग ऑप्टिमायझर",
        myOrders: "माझे ऑर्डर्स",
        cart: "🛒 कार्ट",
        login: "लॉग इन",
        signUp: "नोंदणी करा",
        register: "रजिस्टर करा",
        logout: "लॉगआउट",
        searchPlaceholder: "गहू, टोमॅटो, कांदा, फळे शोधा...",
        heroTitle: "थेट शेतमाल बाजारपेठ (शेतकरी ते ग्राहक)",
        heroSubtitle: "स्थानिक शेतकरी आणि नोंदणीकृत FPO कडून थेट ताजी पिके, फळे, भाज्या आणि दूध खरेदी करा, कोणत्याही मध्यस्थाशिवाय.",
        browseHarvest: "ताजा शेतमाल पहा",
        fpoHub: "FPO घाऊक केंद्र",
        filterMarketplace: "फिल्टर करा",
        category: "श्रेणी (Category)",
        allCategories: "सर्व वस्तू",
        grainsCategory: "धान्य आणि चारा",
        vegetablesCategory: "ताज्या भाज्या",
        fruitsCategory: "ताजी फळे",
        dairyCategory: "दुग्धजन्य उत्पादने",
        featuredListings: "प्रमुख कृषी उत्पादने",
        showingItems: "उत्पादने दाखवत आहे",
        addToCart: "🛒 कार्टमध्ये जोडा",
        buyNow: "⚡ आता खरेदी करा",
        addedToCartToast: "कार्टमध्ये जोडले गेले!",
        viewCart: "कार्ट पहा",
        shoppingCart: "🛒 खरेदी कार्ट",
        cartEmptyTitle: "तुमची कार्ट सध्या रिकामी आहे 🛒",
        cartEmptySubtitle: "शेतकऱ्यांकडून ताज्या उत्पादनांची कापणी तुमची वाट पाहत आहे.",
        exploreProduce: "उपलब्ध शेतमाल पहा",
        orderSummary: "ऑर्डर तपशील",
        produceSubtotal: "उत्पादन उप-एकूण",
        deliveryFee: "थेट शेत वितरण शुल्क",
        estimatedTotal: "अंदाजे एकूण",
        proceedCheckout: "सुरक्षित चेकआउटसाठी पुढे जा ➔",
        continueShopping: "← खरेदी सुरू ठेवा",
        remove: "काढून टाका",
        checkoutTitle: "सुरक्षित फार्मडायरेक्ट चेकआउट",
        customerDetails: "ग्राहक आणि वितरण तपशील",
        paymentMethod: "पेमेंट पद्धत निवडा",
        placeOrder: "थेट ऑर्डर करा 🌾",
        farmerDashboard: "शेतकरी डॅशबोर्ड आणि एआय बाजार",
        dashboardSubtitle: "आपली यादी व्यवस्थापित करा, थेट बाजारभाव पहा, मार्ग ऑप्टिमाइझ करा आणि FPO शी जोडा.",
        addNewItem: "➕ नवीन उत्पादन जोडा",
        myProducts: "📦 माझी पिके",
        aiMandiPredictor: "🤖 एआय बाजार अंदाज",
        fpoNetwork: "🏛️ FPO नेटवर्क",
        listNewProduce: "विक्रीसाठी नवीन शेतमाल जोडा",
        itemName: "उत्पादनाचे नाव / शीर्षक",
        pricePerUnit: "विक्री किंमत (₹)",
        farmLocation: "शेताचे ठिकाण / जिल्हा",
        primaryPhone: "फोन नंबर",
        emailAddress: "ईमेल पत्ता",
        password: "पासवर्ड",
        selectRole: "भूमिका निवडा",
        consumerRole: "ग्राहक / खरेदीदार",
        farmerRole: "शेतकरी / विक्रेता",
        loginToAccount: "खात्यात लॉग इन करा",
        registerAccount: "खाते नोंदणी करा",
        guaranteeTitle: "🛡️ थेट व्यापार हमी:",
        guaranteeText: "प्रत्येक खरेदीचे १००% मूल्य थेट शेतकरी आणि FPO ला जाते."
    }
};

function getCurrentLanguage() {
    return localStorage.getItem('appLanguage') || 'en';
}

function getTranslation(key) {
    const lang = getCurrentLanguage();
    return (translations[lang] && translations[lang][key]) || (translations['en'] && translations['en'][key]) || key;
}

function changeLanguage(lang) {
    if (!translations[lang]) lang = 'en';
    localStorage.setItem('appLanguage', lang);
    applyLanguage(lang);
}

function applyLanguage(lang) {
    if (!translations[lang]) lang = 'en';
    const dict = translations[lang];

    // Sync all language dropdowns on page
    document.querySelectorAll('.lang-selector, #languageSelect').forEach(sel => {
        sel.value = lang;
    });

    // Translate all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key]) {
            el.innerText = dict[key];
        }
    });

    // Translate common navigation links if no data-i18n
    document.querySelectorAll('nav a, header a').forEach(a => {
        const txt = a.innerText.trim().toLowerCase();
        if (txt === 'marketplace' || txt === 'मंडी बाज़ार' || txt === 'ਮੰਡੀ ਬਾਜ਼ਾਰ' || txt === 'कृषी बाजार') a.innerText = dict.marketplace;
        else if (txt.includes('farmer portal') || txt.includes('किसान पोर्टल') || txt.includes('ਕਿਸਾਨ ਪੋਰਟਲ')) a.innerText = dict.farmerPortal;
        else if (txt.includes('farmer home') || txt.includes('किसान होम') || txt.includes('ਕਿਸਾਨ ਹੋਮ')) a.innerText = dict.farmerHome;
        else if (txt.includes('route optimizer') || txt.includes('रूट ऑप्टिमाइज़र')) a.innerText = dict.routeOptimizer;
        else if (txt.includes('my orders') || txt.includes('मेरे ऑर्डर')) a.innerText = dict.myOrders;
    });

    // Translate search placeholders
    const searchInputs = document.querySelectorAll('#headerSearchInput, input[placeholder*="wheat"], input[placeholder*="गेहूं"]');
    searchInputs.forEach(input => {
        input.placeholder = dict.searchPlaceholder;
    });

    // Translate buttons
    document.querySelectorAll('.btn-add').forEach(btn => {
        btn.innerText = dict.addToCart;
    });

    // Translate Cart button in nav
    document.querySelectorAll('.cart-btn').forEach(btn => {
        const countSpan = btn.querySelector('#cart-count, .cart-count');
        const count = countSpan ? countSpan.innerText : '0';
        btn.innerHTML = `🛒 ${dict.cart.replace(/^[^\w\s\u0900-\u0D7F]+/, '').trim()} (<span id="cart-count">${count}</span>)`;
    });

    // Translate mobile bottom nav items
    document.querySelectorAll('.mobile-bottom-nav .mobile-nav-item').forEach(item => {
        const spans = item.querySelectorAll('span');
        if (spans.length >= 2) {
            const span = spans[1];
            const txt = span.innerText.trim().toLowerCase();
            if (txt.includes('market') || txt.includes('बाज़ार') || txt.includes('ਮੰਡੀ')) span.innerText = dict.marketplace.split(' ')[0] || "Market";
            else if (txt.includes('farmer') || txt.includes('किसान') || txt.includes('ਕਿਸਾਨ')) span.innerText = dict.farmerHome.split(' ')[0] || "Farmer";
            else if (txt.includes('routes') || txt.includes('मार्ग') || txt.includes('ਰੂਟ')) span.innerText = dict.routeOptimizer.split(' ')[1] || "Routes";
            else if (txt.includes('orders') || txt.includes('ऑर्डर') || txt.includes('ਆਰਡਰ')) span.innerText = dict.myOrders.split(' ')[1] || "Orders";
            else if (txt.includes('cart') || txt.includes('कार्ट') || txt.includes('ਕਾਰਟ')) span.innerText = dict.cart.split(' ')[1] || "Cart";
        }
    });

    // Refresh dynamic cart count / labels
    updateCartBadge();

    // Re-render cart page if on cart.html
    const cartList = document.getElementById('cartItemsList') || document.getElementById('cart-list');
    if (cartList) {
        renderCartPage();
    }
}

// Auto-apply language on page load
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = getCurrentLanguage();
    applyLanguage(savedLang);
});

// --- UNIFIED & PERSISTENT CART MANAGEMENT ---
function getUnifiedCart() {
    try {
        let farm = [];
        let items = [];
        const rawFarm = localStorage.getItem('farmCart');
        const rawItems = localStorage.getItem('cartItems');
        if (rawFarm) {
            try {
                const parsed = JSON.parse(rawFarm);
                if (Array.isArray(parsed)) farm = parsed;
            } catch(e) {}
        }
        if (rawItems) {
            try {
                const parsed = JSON.parse(rawItems);
                if (Array.isArray(parsed)) items = parsed;
            } catch(e) {}
        }
        if (farm.length > 0) return farm;
        if (items.length > 0) return items;
    } catch (e) {
        console.error("Cart parsing error:", e);
    }
    return [];
}

function saveUnifiedCart(cart) {
    try {
        const safeCart = Array.isArray(cart) ? cart : [];
        localStorage.setItem('farmCart', JSON.stringify(safeCart));
        localStorage.setItem('cartItems', JSON.stringify(safeCart));
    } catch (e) {
        console.error("Cart save error:", e);
    }
    updateCartBadge();
}

function getCart() {
    return getUnifiedCart();
}

function saveCart(cart) {
    saveUnifiedCart(cart);
}

function updateCartBadge() {
    const cart = getUnifiedCart();
    const count = cart.reduce((acc, item) => acc + (Number(item.quantity) || 1), 0);
    const badges = document.querySelectorAll('#cart-count, .cart-count, #mobile-cart-count, .mobile-cart-badge');
    badges.forEach(b => { if (b) b.innerText = count; });
}

function showCartToast(message, cartUrl = 'cart.html') {
    let toast = document.getElementById('cartToastNotification');
    if (!toast) {
        toast = document.createElement('div');
        toast.id = 'cartToastNotification';
        toast.className = 'cart-toast';
        document.body.appendChild(toast);
    }
    const viewCartText = getTranslation('viewCart') || "View Cart";
    toast.innerHTML = `
        <span>🛒 ${message}</span>
        <a href="${cartUrl}" style="background:#52b788; color:#1b4332; padding:4px 10px; border-radius:6px; text-decoration:none; font-weight:700; margin-left:8px;">${viewCartText} ➔</a>
    `;
    toast.style.display = 'flex';
    clearTimeout(window._cartToastTimeout);
    window._cartToastTimeout = setTimeout(() => {
        if (toast) toast.style.display = 'none';
    }, 4000);
}

function addToCart(productId, productObj = null) {
    let product = productObj;

    if (!product && typeof productsData !== 'undefined' && Array.isArray(productsData)) {
        product = productsData.find(p => String(p.id) === String(productId));
    }

    if (!product) {
        // Find product card from DOM if it was loaded dynamically from backend
        const card = document.querySelector(`[data-product-id="${productId}"]`);
        if (card) {
            const title = card.querySelector('.product-title, h4, h3')?.innerText || "Fresh Farm Produce";
            const priceText = card.querySelector('.product-price, strong, h4')?.innerText || "100";
            const price = parseFloat(priceText.replace(/[^0-9.]/g, '')) || 100;
            const img = card.querySelector('img')?.src || 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=500&q=80';
            const cat = card.querySelector('.product-category, span')?.innerText || "Produce";
            const loc = card.querySelector('.product-seller, small')?.innerText || "Local Farm";
            product = { id: productId, title, price, image: img, category: cat, sellerLocation: loc };
        }
    }

    if (!product) {
        product = {
            id: productId,
            title: "Fresh Farm Harvest",
            price: 500,
            image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=500&q=80",
            category: "Produce",
            sellerLocation: "Local Farm"
        };
    }

    let cart = getUnifiedCart();
    const existing = cart.find(item => String(item.id) === String(productId));

    if (existing) {
        existing.quantity = (Number(existing.quantity) || 1) + 1;
    } else {
        cart.push({
            id: String(product.id),
            title: product.title,
            price: Number(product.price) || 100,
            quantity: 1,
            image: product.image || 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=500&q=80',
            category: product.category || 'Produce',
            sellerLocation: product.sellerLocation || product.location || 'Local Farm'
        });
    }

    saveUnifiedCart(cart);

    // Asynchronously notify backend database
    try {
        fetch('/api/cart/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ product_id: String(productId), quantity: 1 })
        }).catch(() => {});
    } catch(e) {}

    const addedMsg = `${product.title} ${getTranslation('addedToCartToast')}`;
    showCartToast(addedMsg);
}

function removeFromCart(productId) {
    let cart = getUnifiedCart();
    cart = cart.filter(item => String(item.id) !== String(productId));
    saveUnifiedCart(cart);

    try {
        fetch(`/api/cart/remove/${encodeURIComponent(productId)}`, { method: 'DELETE' }).catch(() => {});
    } catch(e) {}

    renderCartPage();
}

function changeQty(productId, delta) {
    let cart = getUnifiedCart();
    const item = cart.find(i => String(i.id) === String(productId));
    if (item) {
        item.quantity = (Number(item.quantity) || 1) + delta;
        if (item.quantity <= 0) {
            cart = cart.filter(i => String(i.id) !== String(productId));
        }
    }
    saveUnifiedCart(cart);

    try {
        fetch('/api/cart/update', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ product_id: String(productId), delta: delta })
        }).catch(() => {});
    } catch(e) {}

    renderCartPage();
}

// Backward-compatible index-based helpers
window.changeQuantity = function(index, delta) {
    const cart = getUnifiedCart();
    if (cart[index]) {
        changeQty(cart[index].id, delta);
    }
};

window.removeItem = function(index) {
    const cart = getUnifiedCart();
    if (cart[index]) {
        removeFromCart(cart[index].id);
    }
};

// Render Cart Page Data (supports all HTML naming conventions)
async function renderCartPage() {
    const cartList = document.getElementById('cartItemsList') || document.getElementById('cart-list');
    if (!cartList) return;

    let cart = getUnifiedCart();

    // If local cart is empty, attempt one-time restore from backend database
    if (cart.length === 0 && !window._cartBackendChecked) {
        window._cartBackendChecked = true;
        try {
            const res = await fetch('/api/cart');
            if (res.ok) {
                const backendItems = await res.json();
                if (Array.isArray(backendItems) && backendItems.length > 0) {
                    cart = backendItems.map(it => ({
                        id: String(it.product_id),
                        title: it.title || "Fresh Farm Produce",
                        price: Number(it.price) || 100,
                        quantity: Number(it.quantity) || 1,
                        image: it.image || 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=500&q=80',
                        category: it.category || 'Produce',
                        sellerLocation: it.sellerLocation || 'Local Farm'
                    }));
                    saveUnifiedCart(cart);
                }
            }
        } catch (e) {
            console.warn("Backend cart sync fallback:", e);
        }
    }

    const summaryCard = document.getElementById('summaryCard');
    const itemCountSpan = document.getElementById('cart-item-count');
    const subtotalEl = document.getElementById('subTotal') || document.getElementById('cart-subtotal');
    const grandTotalEl = document.getElementById('grandTotal') || document.getElementById('cart-grand-total');

    const totalQty = cart.reduce((a, b) => a + (Number(b.quantity) || 1), 0);
    if (itemCountSpan) itemCountSpan.innerText = totalQty;

    if (cart.length === 0) {
        cartList.innerHTML = `
            <div style="text-align: center; padding: 3rem; background: #fff; border-radius: 12px; border: 1px dashed var(--border);">
                <h3 style="color:#2e7d32; font-size:1.4rem; margin-bottom:8px;">${getTranslation('cartEmptyTitle')}</h3>
                <p style="color: var(--text-muted); margin-bottom:1.5rem;">${getTranslation('cartEmptySubtitle')}</p>
                <a href="consumer.html" class="btn-submit" style="display: inline-block; padding: 10px 24px; text-decoration: none; font-weight:700;">${getTranslation('exploreProduce')} ➔</a>
            </div>
        `;
        if (summaryCard) summaryCard.style.display = "none";
        if (subtotalEl) subtotalEl.innerText = "0";
        if (grandTotalEl) grandTotalEl.innerText = "0";
        return;
    }

    if (summaryCard) summaryCard.style.display = "block";

    let html = "";
    let subtotal = 0;

    cart.forEach((item, index) => {
        const qty = Number(item.quantity) || 1;
        const price = Number(item.price) || 0;
        const itemTotal = price * qty;
        subtotal += itemTotal;

        html += `
            <div class="cart-item-card">
                <img src="${item.image || 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=500&q=80'}" class="cart-item-img" alt="${item.title}">
                <div class="cart-item-info">
                    <div class="cart-item-title">${item.title}</div>
                    <div class="cart-item-price">₹${price.toLocaleString('en-IN')} each</div>
                    <small style="color: var(--text-muted);">📍 ${item.sellerLocation || 'Local Farm'}</small>
                </div>
                <div class="cart-qty-controls">
                    <button class="btn-qty" onclick="changeQty('${item.id}', -1)">-</button>
                    <span style="font-weight: 700; min-width: 28px; text-align: center;">${qty}</span>
                    <button class="btn-qty" onclick="changeQty('${item.id}', 1)">+</button>
                    <strong style="margin: 0 12px; color: var(--primary); font-size: 1.05rem;">₹${itemTotal.toLocaleString('en-IN')}</strong>
                    <button class="btn-remove" onclick="removeFromCart('${item.id}')">${getTranslation('remove') || 'Remove'}</button>
                </div>
            </div>
        `;
    });

    cartList.innerHTML = html;
    const deliveryFee = 50;
    if (subtotalEl) subtotalEl.innerText = subtotal.toLocaleString('en-IN');
    if (grandTotalEl) grandTotalEl.innerText = (subtotal + deliveryFee).toLocaleString('en-IN');
}

async function processOrder() {
    const cart = getUnifiedCart();
    if (cart.length === 0) {
        alert("Your cart is empty! Please add items before placing an order.");
        return;
    }
    const selectedMethod = document.querySelector('input[name="payment"]:checked, input[name="paymentMethod"]:checked')?.value || 'upi';
    const subtotal = cart.reduce((acc, item) => acc + (Number(item.price) || 0) * (Number(item.quantity) || 1), 0);
    const freight = 50;
    const grandTotal = subtotal + freight;
    const userEmail = localStorage.getItem('userEmail') || 'guest@farmdirect.com';
    const userName = localStorage.getItem('userName') || 'Direct Farm Buyer';

    try {
        const res = await fetch("/api/orders", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                customer_name: userName,
                phone: localStorage.getItem('userPhone') || "+91 98765 43210",
                address: localStorage.getItem('userLocation') || "Direct Farm Hub",
                city: "Local District",
                pincode: "110001",
                payment_method: selectedMethod,
                grand_total: grandTotal,
                user_email: userEmail
            })
        });
        const result = await res.json();
        alert(`Order Placed Successfully via ${selectedMethod.toUpperCase()}! Thank you for supporting direct farming.`);
    } catch (err) {
        console.warn("Order sync:", err);
        alert(`Order Placed Successfully via ${selectedMethod.toUpperCase()}! Thank you for supporting direct farming.`);
    }

    localStorage.removeItem('farmCart');
    localStorage.removeItem('cartItems');
    try {
        fetch('/api/cart/clear', { method: 'DELETE' }).catch(() => {});
    } catch(e) {}
    window.location.href = 'orders.html';
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
        card.setAttribute('data-product-id', product.id);
        card.onclick = () => window.open(`product.html?id=${product.id}`, '_blank');

        const btnText = getTranslation('addToCart') || "🛒 Add to Cart";

        card.innerHTML = `
            <img src="${product.image}" alt="${product.title}" class="product-img">
            <div class="product-details">
                <span class="product-category">${product.category}</span>
                <h4 class="product-title">${product.title}</h4>
                <div class="product-seller">📍 ${product.sellerLocation || product.location || 'Local Farm'}</div>
                <div class="product-bottom">
                    <span class="product-price">₹${product.price.toLocaleString('en-IN')}</span>
                    <button class="btn-add" onclick="event.stopPropagation(); addToCart('${product.id}')">${btnText}</button>
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
        (p.description && p.description.toLowerCase().includes(searchTerm))
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
    if (product.specifications) {
        for (const [key, val] of Object.entries(product.specifications)) {
            specsHTML += `<div class="spec-row"><strong>${key}:</strong> <span>${val}</span></div>`;
        }
    }

    container.innerHTML = `
        <div class="product-detail-grid">
            <div class="viewport-3d-card">
                <div class="badge-stock">⚡ In Stock (${product.stock || 100} available)</div>
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
                    <p><strong>Seller:</strong> ${product.seller || 'Verified Farmer'} (⭐ ${product.sellerRating || '4.8'} / 5.0)</p>
                    <p><strong>Location:</strong> ${product.sellerLocation || 'Local Farm'}</p>
                    <p><strong>Delivery Coverage:</strong> ${product.deliveryRadius || 'Regional Delivery'}</p>
                    <p><strong>Estimated Time:</strong> ${product.estimatedDeliveryDays || '2-3 Days'}</p>
                </div>

                <div class="description-box">
                    <h4>Description</h4>
                    <p>${product.description || 'Fresh, high-quality farm produce direct from agricultural growers.'}</p>
                </div>

                <div class="specs-box">
                    <h4>Specifications</h4>
                    ${specsHTML || '<p style="color:var(--text-muted)">Standard agricultural grade verified.</p>'}
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
                            <div class="product-seller">📍 ${item.sellerLocation || 'Local Farm'}</div>
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
        phone = document.querySelector('#signupForm input[type="tel"]')?.value || "+91 98765 43210";
        const locInput = document.querySelector('#signupForm #signupLocation, #signupForm input[placeholder*="Location"], #signupForm input[placeholder*="District"]');
        location = locInput ? locInput.value.trim() : "Ludhiana, Punjab";
        email = document.querySelector('#signupForm input[type="email"]')?.value || "user@farmdirect.com";
        password = document.querySelector('#signupForm input[type="password"]')?.value || "";
    }
    
    try {
        const endpoint = type === 'Login' ? '/api/login' : '/api/register';
        const bodyPayload = type === 'Login' 
            ? { email, password } 
            : { name, email, password, role: selectedRole, phone, location };
            
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
            if (data.user.phone) localStorage.setItem("userPhone", data.user.phone);
            if (data.user.location) localStorage.setItem("userLocation", data.user.location);
            if (data.user.created_at) localStorage.setItem("userCreatedAt", data.user.created_at);
        }
    } catch (e) {
        console.warn("Backend auth offline fallback:", e);
    }

    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userRole", selectedRole);
    if (!localStorage.getItem("userName")) localStorage.setItem("userName", name);
    if (!localStorage.getItem("userEmail")) localStorage.setItem("userEmail", email);
    if (phone && !localStorage.getItem("userPhone")) localStorage.setItem("userPhone", phone);
    if (location && !localStorage.getItem("userLocation")) localStorage.setItem("userLocation", location);
    
    alert(`${type} Successful as ${selectedRole.toUpperCase()}!`);
    
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
    }
}

document.addEventListener("DOMContentLoaded", loadMarketplaceProducts);

function logoutUser() {
    localStorage.clear();
    window.location.replace('login.html');
}
