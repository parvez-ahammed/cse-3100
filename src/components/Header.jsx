import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full bg-white dark:bg-gray-900 shadow-md dark:shadow-lg py-4 mb-8 transition-colors">
      <nav className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 gap-6">
        <div className="flex items-center gap-3">
          <Link to="/" className="text-2xl font-extrabold text-blue-600 dark:text-blue-400 tracking-tight hover:underline">
            Rick & Morty Explorer
          </Link>
        </div>
        <ul className="flex gap-8 text-lg font-semibold">
          <li>
            <Link to="/" className="px-4 py-2 rounded transition text-gray-700 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-700 dark:hover:text-blue-300">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="px-4 py-2 rounded transition text-gray-700 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-700 dark:hover:text-blue-300">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="px-4 py-2 rounded transition text-gray-700 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-blue-900 hover:text-blue-700 dark:hover:text-blue-300">
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}