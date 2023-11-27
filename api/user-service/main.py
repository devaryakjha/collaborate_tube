from fastapi import APIRouter, FastAPI

app = FastAPI(docs_url="/api/user-service/docs", redoc_url="/api/user-service/redoc", openapi_url="/api/user-service/openapi.json")

prefix_router = APIRouter(prefix="/api/user-service")

@prefix_router.get("/")
def read_root():
    return {"service": "user-service", "status": "OK", "version": "1.0.0"}

app.include_router(prefix_router)
