import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="w-full bg-white dark:bg-gray-900 shadow-md dark:shadow-lg py-4 mb-8 transition-colors">
      <nav className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 gap-2">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-extrabold text-blue-600 dark:text-blue-400 tracking-tight">Rick & Morty Explorer</span>
        </div>
        <ul className="flex gap-4 text-lg font-semibold">
          <li>
            <Link to="/" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition">Home</Link>
          </li>
          <li>
            <Link to="/about" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition">About</Link>
          </li>
          <li>
            <Link to="/contact" className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}