"use client";

import { useState } from "react";
import { fetchSkills } from "@/lib/api";
import type { SkillCategory } from "@/types/skills";
import SearchForm from "./SearchForm";
import SkillsDisplay from "./SkillsDisplay";
import LoadingSpinner from "./LoadingSpinner";

export default function SkillFinder() {
  const [skills, setSkills] = useState<SkillCategory[] | null>(null);
  const [answer, setAnswer] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (position: string) => {
    setLoading(true);
    setError(null);
    setSkills(null);
    setAnswer(null);

    try {
      const response = await fetchSkills(position);
      console.log("Fetched skills:", response);
      setSkills(response.skills.skill_categories);
      setAnswer(response.skills.answer);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to fetch skills"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <SearchForm onSearch={handleSearch} loading={loading} />

      {error && (
        <div className="mt-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-lg">
          <p className="text-red-800 dark:text-red-200 text-center">
            ⚠️ {error}
          </p>
        </div>
      )}

      {loading && <LoadingSpinner />}

      {skills && skills?.length > 0 && !loading && (
        <SkillsDisplay skills={skills} answer={answer || undefined} />
      )}
    </div>
  );
}
