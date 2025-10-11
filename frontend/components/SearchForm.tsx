"use client";

import { useState, type FormEvent } from "react";

interface SearchFormProps {
  onSearch: (position: string) => void;
  loading: boolean;
}

export default function SearchForm({ onSearch, loading }: SearchFormProps) {
  const [position, setPosition] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (position.trim()) {
      onSearch(position.trim());
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
        <label
          htmlFor="position"
          className="block text-lg font-medium text-gray-700 dark:text-gray-200 mb-4"
        >
          Enter Job Position
        </label>
        <div className="flex gap-4">
          <input
            type="text"
            id="position"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            placeholder="e.g., Python Developer, Data Scientist, DevOps Engineer..."
            className="flex-1 px-6 py-4 text-lg border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
            disabled={loading}
            required
          />
          <button
            type="submit"
            disabled={loading || !position.trim()}
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all transform hover:scale-105 active:scale-95"
          >
            {loading ? "Searching..." : "Find Skills 🔍"}
          </button>
        </div>
        <p className="mt-3 text-sm text-gray-500 dark:text-gray-400">
          Our AI will search and analyze job requirements from LinkedIn and other sources
        </p>
      </div>
    </form>
  );
}
