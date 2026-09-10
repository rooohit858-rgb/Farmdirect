-- ===============================================
-- FarmDirect Supabase Database Schema
-- Run this in your Supabase Dashboard -> SQL Editor
-- ===============================================

-- 1. Products Table
CREATE TABLE IF NOT EXISTS products (
    id VARCHAR PRIMARY KEY,
    title VARCHAR NOT NULL,
    category VARCHAR NOT NULL,
    seller VARCHAR DEFAULT 'Verified Farmer',
    seller_location VARCHAR DEFAULT 'Local Farm',
    seller_rating FLOAT DEFAULT 4.9,
    verified_retailer BOOLEAN DEFAULT TRUE,
    price FLOAT NOT NULL,
    stock INTEGER DEFAULT 100,
    delivery_radius VARCHAR DEFAULT 'Regional Delivery',
    estimated_delivery_days VARCHAR DEFAULT '2-3 Days',
    description TEXT DEFAULT 'Fresh farm harvested produce.',
    specifications JSONB DEFAULT '{}'::jsonb,
    image TEXT
);

-- 2. Users Table
CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL,
    email VARCHAR UNIQUE NOT NULL,
    password VARCHAR NOT NULL,
    role VARCHAR DEFAULT 'consumer',
    phone VARCHAR DEFAULT '',
    location VARCHAR DEFAULT 'India',
    created_at VARCHAR DEFAULT CURRENT_DATE::text
);

-- 3. Orders Table
CREATE TABLE IF NOT EXISTS orders (
    id SERIAL PRIMARY KEY,
    customer_name VARCHAR NOT NULL,
    phone VARCHAR NOT NULL,
    address TEXT NOT NULL,
    city VARCHAR NOT NULL,
    pincode VARCHAR NOT NULL,
    payment_method VARCHAR NOT NULL,
    payment_status VARCHAR DEFAULT 'Completed',
    grand_total FLOAT NOT NULL,
    user_email VARCHAR DEFAULT 'guest@farmdirect.com',
    created_at VARCHAR NOT NULL
);

-- 4. Cart Items Table
CREATE TABLE IF NOT EXISTS cart_items (
    id SERIAL PRIMARY KEY,
    product_id VARCHAR REFERENCES products(id) ON DELETE CASCADE,
    quantity INTEGER DEFAULT 1
);

-- 5. Logistics Shipments Table
CREATE TABLE IF NOT EXISTS logistics_shipments (
    id SERIAL PRIMARY KEY,
    order_id INTEGER,
    pickup_location VARCHAR NOT NULL,
    delivery_location VARCHAR NOT NULL,
    vehicle_type VARCHAR NOT NULL,
    status VARCHAR DEFAULT 'Assigned'
);

-- 6. Farmer Producer Organisations (FPOs) Table
CREATE TABLE IF NOT EXISTS fpos (
    id SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL,
    registration_number VARCHAR DEFAULT 'NABARD-FPO-2026',
    state VARCHAR NOT NULL,
    district VARCHAR NOT NULL,
    primary_crops VARCHAR NOT NULL,
    member_count INTEGER DEFAULT 150,
    contact_phone VARCHAR DEFAULT '+91 98765 00000'
);

-- 7. Optimized Delivery Routes Table
CREATE TABLE IF NOT EXISTS optimized_routes (
    id SERIAL PRIMARY KEY,
    route_code VARCHAR UNIQUE NOT NULL,
    vehicle_type VARCHAR DEFAULT 'Refrigerated Reefer (1.5 Ton)',
    cargo_type VARCHAR DEFAULT 'Perishable Produce',
    cargo_weight_kg FLOAT DEFAULT 750.0,
    origin VARCHAR NOT NULL,
    waypoints JSONB DEFAULT '[]'::jsonb,
    destination VARCHAR NOT NULL,
    unoptimized_distance_km FLOAT,
    optimized_distance_km FLOAT,
    distance_saved_km FLOAT,
    estimated_duration_hrs FLOAT,
    total_freight_cost_inr FLOAT,
    cost_saved_inr FLOAT,
    co2_saved_kg FLOAT,
    recommended_temp_c VARCHAR DEFAULT '4°C - 8°C',
    status VARCHAR DEFAULT 'Optimized & Ready',
    created_at VARCHAR NOT NULL
);

-- Enable Row Level Security (Optional - allows public read/write by default for demo)
ALTER TABLE products ENABLE ROW LEVEL SECURITY;
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE fpos ENABLE ROW LEVEL SECURITY;
ALTER TABLE optimized_routes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public read on products" ON products FOR SELECT USING (true);
CREATE POLICY "Allow public insert on products" ON products FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public read on orders" ON orders FOR SELECT USING (true);
CREATE POLICY "Allow public insert on orders" ON orders FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public read on users" ON users FOR SELECT USING (true);
CREATE POLICY "Allow public insert on users" ON users FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public read on fpos" ON fpos FOR SELECT USING (true);
CREATE POLICY "Allow public insert on fpos" ON fpos FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public read on optimized_routes" ON optimized_routes FOR SELECT USING (true);
CREATE POLICY "Allow public insert on optimized_routes" ON optimized_routes FOR INSERT WITH CHECK (true);
