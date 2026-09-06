from fastapi import FastAPI, HTTPException, Depends
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy import create_engine, Column, Integer, String, Float, Boolean, ForeignKey, JSON
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker, Session, relationship
from pydantic import BaseModel
from typing import List, Optional
from datetime import datetime, timedelta

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
    seller = Column(String)
    seller_location = Column(String)
    seller_rating = Column(Float)
    verified_retailer = Column(Boolean, default=False)
    price = Column(Float)
    stock = Column(Integer)
    delivery_radius = Column(String)
    estimated_delivery_days = Column(String)
    description = Column(String)
    specifications = Column(JSON)
    image = Column(String)

class DBCartItem(Base):
    __tablename__ = "cart_items"
    id = Column(Integer, primary_key=True, index=True)
    product_id = Column(String, ForeignKey("products.id"))
    quantity = Column(Integer, default=1)
    
    product = relationship("DBProduct")

class DBOrder(Base):
    __tablename__ = "orders"
    id = Column(Integer, primary_key=True, index=True)
    payment_method = Column(String)
    subtotal = Column(Float)
    freight_fee = Column(Float)
    grand_total = Column(Float)
    created_at = Column(String)

Base.metadata.create_all(bind=engine)

# --- PYDANTIC SCHEMAS ---
class AddToCartSchema(BaseModel):
    product_id: str
    quantity: int = 1

class QtyUpdateSchema(BaseModel):
    product_id: str
    delta: int

class OrderSchema(BaseModel):
    payment_method: str

# --- FASTAPI APP ---
app = FastAPI(title="FarmDirect API Backend")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

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
        "id": "prod-rice", "title": "Organic Basmati Rice (50 kg)", "category": "Grains & Feed",
        "seller": "Doaba Rice Mills", "seller_location": "Karnal, Haryana", "seller_rating": 4.8,
        "verified_retailer": True, "price": 3800.0, "stock": 35, "delivery_radius": "Pan-India Freight",
        "estimated_delivery_days": "3-4 Days", "description": "Aromatic long-grain Basmati rice, naturally aged.",
        "specifications": {"Grain Length": "8.3 mm", "Purity": "98% Cleaned", "Aroma": "High"},
        "image": "https://images.unsplash.com/photo-1586201375761-83865001e31c?auto=format&fit=crop&w=800&q=80"
    },
    {
        "id": "prod-milk", "title": "Pure Farm Fresh Milk (20L)", "category": "Dairy & Meat",
        "seller": "Green Pastures Dairy", "seller_location": "Anand, Gujarat", "seller_rating": 5.0,
        "verified_retailer": True, "price": 1100.0, "stock": 100, "delivery_radius": "Local Express Delivery",
        "estimated_delivery_days": "Same-Day Delivery", "description": "Fresh unpasteurized milk from free-range Gir cows.",
        "specifications": {"Fat Content": "4.8%", "Packaging": "Insulated Can", "Shelf Life": "48 Hours"},
        "image": "https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=800&q=80"
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
        "id": "prod-potato", "title": "Organic Farm Potatoes (50 kg Sack)", "category": "Vegetables",
        "seller": "Agra Produce Depot", "seller_location": "Agra, Uttar Pradesh", "seller_rating": 4.6,
        "verified_retailer": True, "price": 850.0, "stock": 120, "delivery_radius": "Statewide Freight",
        "estimated_delivery_days": "2-3 Days", "description": "High-grade starch potatoes, clean and dirt-free.",
        "specifications": {"Variety": "Kufri Jyoti", "Size": "Medium to Large", "Storage": "Cool Dry Place"},
        "image": "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=800&q=80"
    },
    {
        "id": "prod-banana", "title": "Fresh Banana Crate (20 kg)", "category": "Fruits",
        "seller": "Jalgaon Banana Co-op", "seller_location": "Jalgaon, Maharashtra", "seller_rating": 4.9,
        "verified_retailer": True, "price": 520.0, "stock": 65, "delivery_radius": "Regional Express",
        "estimated_delivery_days": "1-2 Days", "description": "Naturally ripened Robusta bananas.",
        "specifications": {"Variety": "Grand Naine / Robusta", "Ripeness": "Semi-Ripe", "Weight": "20 kg Net"},
        "image": "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=800&q=80"
    },
    {
        "id": "prod-apple", "title": "Kashmiri Red Apples (10 kg Box)", "category": "Fruits",
        "seller": "Valley Fresh Orchards", "seller_location": "Srinagar, Jammu & Kashmir", "seller_rating": 4.9,
        "verified_retailer": True, "price": 1350.0, "stock": 40, "delivery_radius": "Pan-India Freight",
        "estimated_delivery_days": "3-5 Days", "description": "Crisp, sweet Kashmiri apples hand-picked.",
        "specifications": {"Grade": "Royal Delicious", "Color": "90%+ Red", "Packaging": "Corrugated Box"},
        "image": "https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=800&q=80"
    },
    {
        "id": "prod-eggs", "title": "Free-Range Farm Eggs (100 Tray)", "category": "Dairy & Meat",
        "seller": "Poultry Direct", "seller_location": "Namakkal, Tamil Nadu", "seller_rating": 4.8,
        "verified_retailer": True, "price": 480.0, "stock": 90, "delivery_radius": "Statewide Express",
        "estimated_delivery_days": "1-2 Days", "description": "Nutritious brown eggs collected daily.",
        "specifications": {"Shell": "Brown", "Count": "100 Eggs", "Quality": "Grade A Large"},
        "image": "https://images.unsplash.com/photo-1506976785307-8732e854ad03?auto=format&fit=crop&w=800&q=80"
    }
]

@app.on_event("startup")
def seed_database():
    db = SessionLocal()
    if db.query(DBProduct).count() == 0:
        for p in INITIAL_PRODUCTS:
            item = DBProduct(
                id=p["id"], title=p["title"], category=p["category"],
                seller=p["seller"], seller_location=p["seller_location"],
                seller_rating=p["seller_rating"], verified_retailer=p["verified_retailer"],
                price=p["price"], stock=p["stock"], delivery_radius=p["delivery_radius"],
                estimated_delivery_days=p["estimated_delivery_days"], description=p["description"],
                specifications=p["specifications"], image=p["image"]
            )
            db.add(item)
        db.commit()
    db.close()

# --- API ROUTES ---

@app.get("/api/products")
def get_products(category: Optional[str] = None, query: Optional[str] = None, db: Session = Depends(get_db)):
    q = db.query(DBProduct)
    if category and category.lower() != 'all':
        q = q.filter(DBProduct.category == category)
    if query:
        q = q.filter(DBProduct.title.ilike(f"%{query}%"))
    products = q.all()
    
    # Map model output to frontend snake_case/camelCase key format
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

@app.get("/api/products/{product_id}")
def get_product(product_id: str, db: Session = Depends(get_db)):
    p = db.query(DBProduct).filter(DBProduct.id == product_id).first()
    if not p:
        raise HTTPException(status_code=404, detail="Product not found")
    return {
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
    }

@app.get("/api/cart")
def get_cart(db: Session = Depends(get_db)):
    cart_items = db.query(DBCartItem).all()
    subtotal = 0.0
    items = []
    
    for c in cart_items:
        item_subtotal = c.product.price * c.quantity
        subtotal += item_subtotal
        items.append({
            "id": c.product.id,
            "title": c.product.title,
            "price": c.product.price,
            "quantity": c.quantity,
            "image": c.product.image,
            "estimatedDeliveryDays": c.product.estimated_delivery_days,
            "subtotal": item_subtotal
        })

    total_count = sum(item["quantity"] for item in items)
    freight = 150.0 if total_count > 0 else 0.0

    return {
        "items": items,
        "count": total_count,
        "subtotal": subtotal,
        "freight": freight,
        "grand_total": subtotal + freight
    }

@app.post("/api/cart/add")
def add_to_cart(payload: AddToCartSchema, db: Session = Depends(get_db)):
    product = db.query(DBProduct).filter(DBProduct.id == payload.product_id).first()
    if not product:
        raise HTTPException(status_code=404, detail="Product not found")

    existing = db.query(DBCartItem).filter(DBCartItem.product_id == payload.product_id).first()
    if existing:
        existing.quantity += payload.quantity
    else:
        db.add(DBCartItem(product_id=payload.product_id, quantity=payload.quantity))
        
    db.commit()
    return {"message": f"Added {product.title} to cart"}

@app.post("/api/cart/update")
def update_cart_qty(payload: QtyUpdateSchema, db: Session = Depends(get_db)):
    existing = db.query(DBCartItem).filter(DBCartItem.product_id == payload.product_id).first()
    if existing:
        existing.quantity += payload.delta
        if existing.quantity <= 0:
            db.delete(existing)
        db.commit()
    return {"message": "Cart updated"}

@app.delete("/api/cart/remove/{product_id}")
def remove_from_cart(product_id: str, db: Session = Depends(get_db)):
    db.query(DBCartItem).filter(DBCartItem.product_id == product_id).delete()
    db.commit()
    return {"message": "Item removed from cart"}

@app.post("/api/checkout")
def checkout(payload: OrderSchema, db: Session = Depends(get_db)):
    cart_items = db.query(DBCartItem).all()
    if not cart_items:
        raise HTTPException(status_code=400, detail="Cart is empty")

    subtotal = sum(c.product.price * c.quantity for c in cart_items)
    freight = 150.0
    grand_total = subtotal + freight

    new_order = DBOrder(
        payment_method=payload.payment_method,
        subtotal=subtotal,
        freight_fee=freight,
        grand_total=grand_total,
        created_at=datetime.utcnow().isoformat()
    )
    db.add(new_order)
    
    # Clear cart after ordering
    db.query(DBCartItem).delete()
    db.commit()

    return {
        "message": "Order Placed Successfully!",
        "order_id": new_order.id,
        "grand_total": grand_total
    }