# FarmDirect API Backend
# Fully synchronized with main.py for complete Supabase PostgreSQL, FPO, and Logistics support
from main import *
from main import app

if __name__ == '__main__':
    import uvicorn
    uvicorn.run('app:app', host='127.0.0.1', port=8000, reload=True)
