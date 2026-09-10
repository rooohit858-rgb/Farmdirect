# 🌾 FarmDirect - Direct Agricultural Trade & FPO Collective Platform

> **Direct Peer-to-Peer Agriculture Marketplace with AI Mandi Predictor & FPO Network**  
> Connects smallholder farmers & FPOs directly with consumers and wholesale buyers with 0% middleman commission.

---

## 🚀 Quick Start (Running the App)

### 1. Install Dependencies
```bash
pip install -r requirements.txt
```

### 2. Start the Server
```bash
python main.py
```
Or with Uvicorn:
```bash
uvicorn main:app --reload --host 127.0.0.1 --port 8000
```
Open your browser at: **[http://127.0.0.1:8000](http://127.0.0.1:8000)** (or [http://localhost:8000](http://localhost:8000)).

---

## 🗄️ Connecting to Supabase (PostgreSQL)

The app works out of the box with local SQLite fallback. To connect to your **Supabase** cloud database:

1. Open your **Supabase Dashboard** -> **Project Settings** -> **Database**.
2. Scroll to **Connection string** -> Select **URI** (or **Session Pooler**).
3. Create a `.env` file in this directory (copy from `.env.example`):
   ```env
   DATABASE_URL=postgresql://postgres:[YOUR-PASSWORD]@db.[YOUR-PROJECT-REF].supabase.co:5432/postgres
   ```
4. **(Optional)** Run the provided [`supabase_schema.sql`](supabase_schema.sql) in your **Supabase SQL Editor** to create all tables and RLS security policies.
5. Restart `python main.py`. The console will display:
   ```
   [INFO] Connecting to Supabase / PostgreSQL Database...
   [INFO] Database tables synchronized successfully.
   ```
6. Check connection status live at: `http://127.0.0.1:8000/api/health`

---

## ✨ Features & Architecture

### 1. 🏛️ Farmer Producer Organisations (FPO) Collective (NEW)
- **FPO Directory & Hub**: Farmers can discover verified local FPOs in their district (e.g. Sahyadri FPO, Punjab Krishi Vikas FPO) to aggregate their harvest.
- **Bulk Supply Lots**: Wholesale buyers, restaurants, and retailers can source collective produce from 1,000+ pooled farmers at transparent farm-gate rates.
- **FPO Registration**: FPO coordinators can register new collective societies with member count, crops, and contact details via `dashboard.html`.

### 2. 👨‍🌾 Farmer Portal & Dashboard (`dashboard.html` & `index.html`)
- **Add Produce**: List crops with title, category, price, location, and image.
- **Live Inventory**: View, manage, and track your active produce listings.
- **AI Mandi Rate Predictor**: Select state, district mandi, and crop to get real-time price predictions, min/max APMC ranges, and demand trends.

### 3. 🛒 Consumer Marketplace (`consumer.html`, `product.html`, `cart.html`, `checkout.html`)
- **Produce Catalog**: Real-time search and filter by category (Grains, Veggies, Fruits, Dairy).
- **Interactive 3D Preview**: Hover over produce images on `product.html` for 3D tilt perspective.
- **Unified Cart**: LocalStorage cart that automatically syncs items and quantities.
- **Multi-Gateway Checkout**: Support for UPI / QR Code, Credit/Debit Card, and Cash on Delivery (COD).
- **Order Placement**: Automatically persists orders to the database (`orders` table).

### 4. 📦 Live Order History & Tracking (`orders.html`)
- Tracks past orders, payment status, delivery address, and direct farm logistics assignment.
