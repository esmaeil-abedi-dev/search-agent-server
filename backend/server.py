from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import logging
from openai import RateLimitError

from skill_finder_agent import skill_finder

# Configure logging
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

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
    try:
        logger.info(f"Received request for position: {request.position}")
        skills = skill_finder(request.position)
        logger.info(f"Successfully found skills for position: {request.position}")
        return {"skills": skills}
    except RateLimitError as e:
        logger.error(f"Rate limit exceeded: {str(e)}")
        raise HTTPException(
            status_code=429,
            detail={
                "error": "Rate limit exceeded",
                "message": "The AI service has reached its rate limit. Please try again later or upgrade your API plan.",
                "suggestion": "Consider adding credits to your OpenRouter account or wait until the rate limit resets."
            }
        )
    except Exception as e:
        logger.error(f"Error processing request for position {request.position}: {str(e)}", exc_info=True)
        raise HTTPException(
            status_code=500,
            detail={
                "error": "Internal server error",
                "message": f"Failed to fetch skills: {str(e)}"
            }
        )