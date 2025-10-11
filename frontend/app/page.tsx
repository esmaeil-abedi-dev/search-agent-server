import SkillFinder from "@/components/SkillFinder";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-4">
            🎯 Skill Finder AI
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Discover the skills you need for your dream job
          </p>
        </div>
        
        <SkillFinder />
      </div>
    </main>
  );
}
