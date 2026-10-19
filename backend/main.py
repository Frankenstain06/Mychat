from fastapi import FastAPI
from schema import UserRegOut, UserRegIn

app = FastAPI()

@app.post("/register", response_model=UserRegOut)
async def register_user(user: UserRegIn):
    return user