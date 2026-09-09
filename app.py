import random
import os
import uuid
import requests
from datetime import datetime, timedelta
from typing import List, Optional
from fastapi import FastAPI, HTTPException, Depends, status
from fastapi.responses import HTMLResponse
from fastapi.staticfiles import StaticFiles
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy import create_engine, Column, Integer, String, Float, Boolean, ForeignKey, JSON
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, Session, relationship
from pydantic import BaseModel

# --- DATABASE SETUP ---
DATABASE_URL = "sqlite:///./farmdirect.db"
engine = create_engine(DATABASE_URL, connect_args={"check_same_thread": False})
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

# --- SQLALCHEMY MODELS ---
class DBProduct(Base):
    __tablename__ = "products"
    id = Column(String, primary_key=True, index=True)
    title = Column(String, index=True)
    category = Column(String, index=True)
    seller = Column(String, default="Verified Farmer")
    seller_location = Column(String, default="Local Farm")
    seller_rating = Column(Float, default=4.9)
    verified_retailer = Column(Boolean, default=True)
    price = Column(Float)
    stock = Column(Integer, default=100)
    delivery_radius = Column(String, default="Regional")
    estimated_delivery_days = Column(String, default="2-3 Days")
    description = Column(String, default="Fresh farm harvested produce.")
    specifications = Column(JSON, default={})
    image = Column(String)

class DBCartItem(Base):
    __tablename__ = "cart_items"
    id = Column(Integer, primary_key=True, index=True)
    product_id = Column(String, ForeignKey("products.id"))
    quantity = Column(Integer, default=1)
    product = relationship("DBProduct")

class DBUser(Base):
    __tablename__ = "users"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
    email = Column(String, unique=True, index=True)
    password = Column(String)
    role = Column(String, default="consumer")

class DBOrder(Base):
    __tablename__ = "orders"
    id = Column(Integer, primary_key=True, index=True)
    customer_name = Column(String)
    phone = Column(String)
    address = Column(String)
    city = Column(String)
    pincode = Column(String)
    payment_method = Column(String)
    payment_status = Column(String, default="Success")
    grand_total = Column(Float)
    user_email = Column(String, index=True, default="guest@farmdirect.com")
    created_at = Column(String)

class DBLogisticsShipment(Base):
    __tablename__ = "logistics_shipments"
    id = Column(Integer, primary_key=True, index=True)
    order_id = Column(Integer)
    pickup_location = Column(String)
    delivery_location = Column(String)
    vehicle_type = Column(String)
    status = Column(String, default="Assigned")

Base.metadata.create_all(bind=engine)

# --- DEPENDENCY ---
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# --- FASTAPP INIT ---
app = FastAPI(title="FarmDirect API Backend", version="2.0.0")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# --- DATABASE SEEDING ---
INITIAL_PRODUCTS = [
    {
        "id": "prod-wheat", "title": "Golden Wheat Grain (100 kg)", "category": "Grains & Feed",
        "seller": "Punjab Agro Co-op", "seller_location": "Ludhiana, Punjab", "seller_rating": 4.9,
        "verified_retailer": True, "price": 2400.0, "stock": 50, "delivery_radius": "Statewide Delivery",
        "estimated_delivery_days": "2-3 Days", "description": "Freshly harvested organic golden wheat grains.",
        "specifications": {"Moisture Content": "< 12%", "Grain Type": "Durum Wheat", "Harvest": "2026 Season"},
        "image": "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=800&q=80"
    },
    {
        "id": "prod-tomato", "title": "Fresh Red Tomatoes (25 kg Crate)", "category": "Vegetables",
        "seller": "Nashik Organic Farms", "seller_location": "Nashik, Maharashtra", "seller_rating": 4.7,
        "verified_retailer": True, "price": 650.0, "stock": 80, "delivery_radius": "Regional Express",
        "estimated_delivery_days": "1-2 Days", "description": "Firm, juicy, farm-picked red tomatoes.",
        "specifications": {"Grade": "Class A", "Color": "Deep Red", "Shelf Life": "7-10 Days"},
        "image": "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=800&q=80"
    },
    {
        "id": "prod-apple", "title": "Kashmiri Red Apples (10 kg Box)", "category": "Fruits",
        "seller": "Valley Fresh Orchards", "seller_location": "Srinagar, Jammu & Kashmir", "seller_rating": 4.9,
        "verified_retailer": True, "price": 1350.0, "stock": 40, "delivery_radius": "Pan-India Freight",
        "estimated_delivery_days": "3-5 Days", "description": "Crisp, sweet Kashmiri apples hand-picked.",
        "specifications": {"Grade": "Royal Delicious", "Color": "90%+ Red", "Packaging": "Corrugated Box"},
        "image": "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=800&q=80"
    }
]

@app.on_event("startup")
def seed_database():
    db = SessionLocal()
    if db.query(DBProduct).count() == 0:
        for p in INITIAL_PRODUCTS:
            item = DBProduct(**p)
            db.add(item)
        db.commit()
    db.close()

# --- PYDANTIC SCHEMAS ---
class ProductCreate(BaseModel):
    title: str
    category: str
    price: float
    location: Optional[str] = "Local Farm"
    seller: Optional[str] = "Verified Farmer"
    image: Optional[str] = "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=500&q=80"

class UserRegister(BaseModel):
    name: str
    email: str
    password: str
    role: str

class UserLogin(BaseModel):
    email: str
    password: str

class DemandRequest(BaseModel):
    crop_name: str
    location: str = "Jaipur Mandi"

class ShipmentCreate(BaseModel):
    order_id: int
    pickup_location: str
    delivery_location: str
    quantity_kg: float

class OrderCreateSchema(BaseModel):
    customer_name: str
    phone: str
    address: str
    city: str
    pincode: str
    payment_method: str
    grand_total: float
    user_email: Optional[str] = "guest@farmdirect.com"

# --- API ENDPOINTS ---

@app.post("/api/products")
def create_product(product: ProductCreate, db: Session = Depends(get_db)):
    try:
        new_prod = DBProduct(
            id=f"prod-{uuid.uuid4().hex[:6]}",
            title=product.title,
            category=product.category,
            price=product.price,
            seller=product.seller or "Verified Farmer",
            seller_location=product.location or "Local Farm",
            image=product.image or "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=500&q=80"
        )
        db.add(new_prod)
        db.commit()
        db.refresh(new_prod)
        return {"status": "success", "message": "Product saved successfully!", "id": new_prod.id}
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/api/products")
def get_products(category: Optional[str] = None, query: Optional[str] = None, seller: Optional[str] = None, db: Session = Depends(get_db)):
    q = db.query(DBProduct)
    if category and category.lower() != 'all':
        q = q.filter(DBProduct.category == category)
    if query:
        q = q.filter(DBProduct.title.ilike(f"%{query}%"))
    if seller:
        q = q.filter(DBProduct.seller == seller)
    products = q.all()
    
    return [
        {
            "id": p.id,
            "title": p.title,
            "category": p.category,
            "seller": p.seller,
            "sellerLocation": p.seller_location,
            "sellerRating": p.seller_rating,
            "verifiedRetailer": p.verified_retailer,
            "price": p.price,
            "stock": p.stock,
            "deliveryRadius": p.delivery_radius,
            "estimatedDeliveryDays": p.estimated_delivery_days,
            "description": p.description,
            "specifications": p.specifications,
            "image": p.image
        } for p in products
    ]

@app.post("/api/register")
def register_user(payload: UserRegister, db: Session = Depends(get_db)):
    existing_user = db.query(DBUser).filter(DBUser.email == payload.email).first()
    if existing_user:
        return {"status": "error", "message": "Email pehle se registered hai"}
    
    new_user = DBUser(name=payload.name, email=payload.email, password=payload.password, role=payload.role)
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return {"status": "success", "message": "User registered successfully", "user_id": new_user.id}

@app.post("/api/login")
def login_user(payload: UserLogin, db: Session = Depends(get_db)):
    user = db.query(DBUser).filter(DBUser.email == payload.email, DBUser.password == payload.password).first()
    if not user:
        raise HTTPException(status_code=400, detail="Invalid email or password")
    return {
        "status": "success",
        "message": "Login successful",
        "user": {
            "id": user.id,
            "name": user.name,
            "email": user.email,
            "role": user.role
        }
    }

@app.get("/api/users")
def get_users(db: Session = Depends(get_db)):
    return db.query(DBUser).all()

MANDI_DATA = {
    "potato": {"base_price": 22.0, "demand_index": 82, "season": "Peak Demand"},
    "tomato": {"base_price": 38.0, "demand_index": 91, "season": "High Volatility"},
    "onion": {"base_price": 28.0, "demand_index": 78, "season": "Stable Supply"},
    "wheat": {"base_price": 26.5, "demand_index": 65, "season": "Harvest Arrival"},
    "apple": {"base_price": 110.0, "demand_index": 88, "season": "High Demand"}
}

@app.post("/api/ai/forecast-demand")
def forecast_demand(data: DemandRequest):
    crop_key = data.crop_name.strip().lower()
    
    try:
        api_url = f"https://api.agmarknet.gov.in/v1/search?crop={crop_key}"
        response = requests.get(api_url, timeout=2)
        if response.status_code == 200:
            api_data = response.json()
            return {
                "crop": crop_key.capitalize(),
                "location": data.location,
                "mandi_status": "🟢 Live AGMARKNET API Connected",
                "current_mandi_price": f"₹{api_data.get('price', 25)}/kg",
                "predicted_demand": f"{api_data.get('demand', 85)}%",
                "market_season": "Live Market Sync",
                "expected_7day_price": f"₹{round(api_data.get('price', 25) * 1.1, 2)}/kg"
            }
    except Exception:
        pass

    base_info = MANDI_DATA.get(crop_key, {"base_price": 40.0, "demand_index": 75, "season": "Regular Demand"})
    current_mandi_price = round(base_info["base_price"] * random.uniform(0.95, 1.05), 2)
    forecasted_price = round(current_mandi_price * 1.12, 2)

    return {
        "crop": crop_key.capitalize(),
        "location": data.location,
        "mandi_status": "⚡ Smart Fallback Simulation Active (Offline Safe)",
        "current_mandi_price": f"₹{current_mandi_price}/kg",
        "predicted_demand": f"{base_info['demand_index']}%",
        "market_season": base_info["season"],
        "expected_7day_price": f"₹{forecasted_price}/kg"
    }

@app.get("/api/mandi-rates")
def get_mandi_rates(state: str, district: str, crop: str):
    return {
        "status": "success",
        "state": state,
        "district": district,
        "crop": crop,
        "exactPrice": 2450,
        "minPrice": 2300,
        "maxPrice": 2620,
        "unit": "per Quintal"
    }

@app.post("/api/logistics/book")
def book_shipment(payload: ShipmentCreate, db: Session = Depends(get_db)):
    v_type = "Heavy Cargo Truck" if payload.quantity_kg > 500 else "Refrigerated Pickup"
    shipment = DBLogisticsShipment(
        order_id=payload.order_id,
        pickup_location=payload.pickup_location,
        delivery_location=payload.delivery_location,
        vehicle_type=v_type,
        status="Assigned"
    )
    db.add(shipment)
    db.commit()
    db.refresh(shipment)
    return {"status": "success", "shipment_id": shipment.id, "assigned_vehicle": v_type}

@app.post("/api/orders")
def create_order(payload: OrderCreateSchema, db: Session = Depends(get_db)):
    try:
        new_order = DBOrder(
            customer_name=payload.customer_name,
            phone=payload.phone,
            address=payload.address,
            city=payload.city,
            pincode=payload.pincode,
            payment_method=payload.payment_method,
            payment_status="Completed",
            grand_total=payload.grand_total,
            user_email=payload.user_email or "guest@farmdirect.com",
            created_at=datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        )
        db.add(new_order)
        db.commit()
        db.refresh(new_order)
        return {"status": "success", "message": "Order placed successfully!", "order_id": new_order.id}
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=500, detail=str(e))

@app.get("/api/orders")
def get_orders(email: Optional[str] = None, db: Session = Depends(get_db)):
    try:
        q = db.query(DBOrder)
        if email:
            q = q.filter(DBOrder.user_email == email)
        orders = q.all()
        return [
            {
                "id": o.id,
                "customer_name": o.customer_name,
                "phone": o.phone,
                "address": o.address,
                "city": o.city,
                "pincode": o.pincode,
                "payment_method": o.payment_method,
                "payment_status": o.payment_status,
                "grand_total": o.grand_total,
                "user_email": o.user_email,
                "created_at": o.created_at
            } for o in orders
        ]
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
    from fastapi.responses import FileResponse

@app.get("/", response_class=HTMLResponse)
def serve_home():
    return FileResponse("home.html")

# Static Mounting
app.mount("/", StaticFiles(directory=".", html=True), name="static")