from pydantic import BaseModel, Field, EmailStr

class UserRegIn(BaseModel):
    UserName: str = Field(..., min_length=3, description="The user's display name.")
    UserEmail: EmailStr = Field(..., description="The user's email address.")
    UserPass: str = Field(..., min_length=6, description="The user's password.")

class UserRegOut(BaseModel):
    UserName: str = Field(..., description="The user's display name.")
    UserEmail: EmailStr = Field(..., description="The user's email address.")

    model_config = {"from_attributes": True}
