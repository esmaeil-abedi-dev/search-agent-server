from fastapi import FastAPI
from pydantic import BaseModel

from skill_finder_agent import skill_finder

app = FastAPI()

class SkillRequest(BaseModel):
    position: str

@app.post("/skills")
def get_skills(request: SkillRequest):
    skills = skill_finder(request.position)
    return {"skills": skills}