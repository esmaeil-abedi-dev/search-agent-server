import type { SkillCategory } from "@/types/skills";

interface SkillsDisplayProps {
  skills: SkillCategory[];
  answer?: string;
}

export default function SkillsDisplay({ skills, answer }: SkillsDisplayProps) {
  console.log("Rendering SkillsDisplay with skills:", skills);
  // Calculate total number of skills across all categories
  const totalSkills = skills.reduce((sum, category) => sum + category.skills.length, 0);

  return (
    <div className="mt-8 space-y-8 animate-fadeIn">
      {/* Summary Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl shadow-xl p-6">
        <h2 className="text-3xl font-bold mb-2">
          ✨ Skills Discovery Complete!
        </h2>
        <p className="text-blue-100">
          Found {totalSkills} essential skills across {skills.length} {skills.length === 1 ? 'category' : 'categories'}
        </p>
      </div>

      {/* AI Insights (optional) */}
      {answer && (
        <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl shadow-lg p-6 border border-purple-200 dark:border-purple-800">
          <div className="flex items-start gap-3 mb-3">
            <span className="text-2xl">🤖</span>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">
              AI Analysis
            </h3>
          </div>
          <div className="pl-11">
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed whitespace-pre-line">
              {answer.length > 500 ? `${answer.substring(0, 500)}...` : answer}
            </p>
          </div>
        </div>
      )}

      {/* Skill Categories */}
      {skills.map((category, categoryIndex) => (
        <div 
          key={categoryIndex}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 transform transition-all duration-300 hover:shadow-2xl"
        >
          {/* Category Header */}
          <div className="mb-6 pb-4 border-b-2 border-blue-500">
            <div className="flex items-center gap-3 mb-2">
              <span className="text-3xl">
                {categoryIndex === 0 ? '🎯' : categoryIndex === 1 ? '💼' : categoryIndex === 2 ? '🚀' : '⭐'}
              </span>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                {category.name}
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 ml-12">
              {category.description}
            </p>
            <div className="mt-2 ml-12">
              <span className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-xs font-semibold px-3 py-1 rounded-full">
                {category.skills.length} {category.skills.length === 1 ? 'skill' : 'skills'}
              </span>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
            {category.skills.map((skill, skillIndex) => (
              <div
                key={`${categoryIndex}-${skillIndex}`}
                className="group p-5 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 rounded-xl border border-gray-200 dark:border-gray-600 hover:shadow-lg transition-all duration-300 hover:scale-[1.02] hover:border-blue-400 dark:hover:border-blue-500"
              >
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md">
                    {skillIndex + 1}
                  </span>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                      {skill.name}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Footer Stats */}
      <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl shadow-lg p-6">
        <div className="flex items-center justify-center gap-8 flex-wrap">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
              {skills.length}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Categories
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 dark:text-purple-400">
              {totalSkills}
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Total Skills
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl">🎯</div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              AI Powered
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
