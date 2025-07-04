export default function Footer() {
  return (
    <footer className="w-full bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 py-6 mt-12 transition-colors">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-2">
        <span className="text-gray-600 dark:text-gray-400 text-sm">
          © {new Date().getFullYear()} Rick & Morty Explorer. All rights reserved.
        </span>
        <span className="text-gray-500 dark:text-gray-500 text-xs">
          Made with <span className="text-blue-600 dark:text-blue-400">React</span> & <span className="text-green-600 dark:text-green-400">Tailwind</span>
        </span>
      </div>
    </footer>
  );
}