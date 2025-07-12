import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Layout({ children }) {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <div className="min-h-md bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100 transition-colors duration-300">
      <nav className="bg-white dark:bg-gray-800 shadow p-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">
          <Link
            to="/"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition duration-200"
          >
            Rick & Morty Explorer
          </Link>
        </h1>
        <div className="flex items-center gap-4">
          <Link
            to="/"
            className="hover:text-blue-500 dark:hover:text-blue-300 transition"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="hover:text-blue-500 dark:hover:text-blue-300 transition"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="hover:text-blue-500 dark:hover:text-blue-300 transition"
          >
            Contact
          </Link>
          <button
            onClick={toggleTheme}
            className="px-3 py-1 text-sm rounded bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition"
          >
            {theme === "dark" ? "☀ Light" : "🌙 Dark"}
          </button>
        </div>
      </nav>
      <main className="p-4">{children}</main>
    </div>
  );
}
