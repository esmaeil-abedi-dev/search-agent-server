import type { SkillRequest, SkillsResponse } from "@/types/skills";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000";

export async function fetchSkills(position: string): Promise<SkillsResponse> {
  const response = await fetch(`${API_URL}/skills`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ position } as SkillRequest),
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => null);
    
    if (response.status === 429) {
      throw new Error(
        errorData?.detail?.message || 
        "Rate limit exceeded. The AI service has reached its daily limit. Please try again later."
      );
    }
    
    throw new Error(
      errorData?.detail?.message || 
      `Failed to fetch skills: ${response.statusText}`
    );
  }

  return response.json();
}

export async function checkApiHealth(): Promise<boolean> {
  try {
    const response = await fetch(`${API_URL}/`);
    return response.ok;
  } catch {
    return false;
  }
}
