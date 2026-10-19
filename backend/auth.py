from datetime import datetime, timedelta, timezone
import os
from fastapi.security import OAuth2PasswordBearer
import jwt
from pathlib import Path
from dotenv import load_dotenv

PROJECT_ROOT = Path(__file__).resolve().parent.parent
load_dotenv(PROJECT_ROOT / ".env")

SECRET_KEY = os.getenv("SECRET_KEY", "")

if len(SECRET_KEY) < 32:
    raise RuntimeError("SECRET_KEY must be set to at least 32 characters")

ALGORITHM = "HS256"
TOKEN_ISSUER = "secure-chat"
TOKEN_AUDIENCE = "secure-chat-api"
ACCESS_TOKEN_EXPIRE_MINUTES = 30
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="login")


def create_access_token(data: dict) -> str:
    to_encode = data.copy()
    expire = datetime.now(timezone.utc) + timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES)

    to_encode.update({"exp": expire, "iss": TOKEN_ISSUER, "aud": TOKEN_AUDIENCE})

    return jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)