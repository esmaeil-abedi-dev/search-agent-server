from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

from skill_finder_agent import skill_finder

app = FastAPI(title="Skill Finder API", version="1.0.0")

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://localhost:3001", 'https://search-agent-server-five.vercel.app'],  # Frontend URLs
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class SkillRequest(BaseModel):
    position: str

@app.get("/")
def read_root():
    return {"message": "Skill Finder API", "status": "running"}

@app.post("/skills")
def get_skills(request: SkillRequest):
    skills = skill_finder(request.position)
    return {"skills": skills}