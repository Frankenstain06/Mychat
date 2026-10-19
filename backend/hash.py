from argon2 import PasswordHasher
from argon2.exceptions import VerificationError

ph = PasswordHasher()

def pass_hash(password : str) -> str:
    return ph.hash(password)

def verify_password(plain_password: str, hashed_password: str) -> bool:
    try:
        ph.verify(hashed_password, plain_password)
        return True
    except VerificationError:
        return False