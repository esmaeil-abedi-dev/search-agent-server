from typing import List

from pydantic import BaseModel, Field


class SkillSchema(BaseModel):
    """Schema for a skill used by the agent.

    Args:
        BaseModel (pydantic.BaseModel): The base model class.
    """

    name: str = Field(description="The name of the skill")
    description: str = Field(description="A brief description of the skill")


class SkillCategory(BaseModel):
    """Schema for a catalog of skills used by the agent.

    Args:
        BaseModel (pydantic.BaseModel): The base model class.
    """

    name: str = Field(description="The name of the skill catalog")
    description: str = Field(description="A brief description of the skill catalog")
    skills: list[SkillSchema] = Field(
        default_factory=list, description="A list of skills available to the agent"
    )


class AgentResponseForSkills(BaseModel):
    """Schema for agent response with answer and categories.

    Args:
        BaseModel (pydantic.BaseModel): The base model class.
    """

    answer: str = Field(description="The agent's answer to the query.")
    skill_categories: List[SkillCategory] = Field(
        default_factory=list,
        description="The list of skill categories with their respective skills.",
    )
