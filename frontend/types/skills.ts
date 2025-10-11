export interface Skill {
  name: string;
  description: string;
}

export interface SkillCategory {
  name: string;
  description: string;
  skills: Skill[];
}

export interface SkillsResponse {
  skills: {
    answer: string;
    skill_categories: SkillCategory[];
  };
}

export interface SkillRequest {
  position: string;
}
