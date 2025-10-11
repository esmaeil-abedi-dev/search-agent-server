export default function LoadingSpinner() {
  return (
    <div className="mt-8 flex flex-col items-center justify-center py-12">
      <div className="relative w-20 h-20">
        <div className="absolute top-0 left-0 w-full h-full border-4 border-blue-200 dark:border-blue-900 rounded-full"></div>
        <div className="absolute top-0 left-0 w-full h-full border-4 border-blue-600 dark:border-blue-400 rounded-full border-t-transparent animate-spin"></div>
      </div>
      <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 animate-pulse">
        🤖 AI is analyzing job requirements...
      </p>
      <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
        This may take a few seconds
      </p>
    </div>
  );
}
