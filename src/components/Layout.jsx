import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Layout({ children }) {
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "light"
  );
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
    localStorage.setItem("theme", theme);

    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-md bg-gradient-to-br from-green-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-100 transition-colors duration-300">
      {/* Navigation Bar */}
      <nav
        className={`fixed top-0 w-full z-50 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm shadow-sm transition-all duration-300 ${
          scrolled ? "py-2" : "py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <Link
              to="/"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition duration-200 flex items-center gap-2"
            >
              <h1 className="text-2xl font-bold">
                <span className="text-green-500">Rick</span>
                <span className="text-blue-500">&</span>
                <span className="text-purple-500">Morty</span>
                <span className="text-gray-600 dark:text-gray-300 ml-1">
                  Explorer
                </span>
              </h1>
            </Link>
            <span className="ml-3 px-2 py-1 bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 text-xs font-semibold rounded-full animate-pulse hidden sm:block">
              v1.0
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <Link
              to="/"
              className="hover:text-blue-500 dark:hover:text-blue-300 transition font-medium px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700/50"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="hover:text-blue-500 dark:hover:text-blue-300 transition font-medium px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700/50"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="hover:text-blue-500 dark:hover:text-blue-300 transition font-medium px-3 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700/50"
            >
              Contact
            </Link>
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition transform hover:scale-110"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <span className="text-yellow-400">☀</span>
              ) : (
                <span className="text-blue-400">🌙</span>
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white dark:bg-gray-800 shadow-lg rounded-b-lg animate-fade-in-down">
            <div className="px-2 pt-2 pb-4 space-y-1">
              <Link
                to="/"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-700"
                onClick={toggleMenu}
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-700"
                onClick={toggleMenu}
              >
                About
              </Link>
              <Link
                to="/contact"
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-700"
                onClick={toggleMenu}
              >
                Contact
              </Link>
              <button
                onClick={toggleTheme}
                className="w-full flex items-center px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                {theme === "dark"
                  ? "Switch to Light Mode"
                  : "Switch to Dark Mode"}
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-24 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">{children}</div>
      </main>

      {/* Footer */}
      {/* <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>
            Made with ❤️ by CSE-3100 students | Data from{" "}
            <a
              href="https://rickandmortyapi.com/"
              className="text-blue-500 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              Rick and Morty API
            </a>
          </p>
          <p className="mt-1">
            © {new Date().getFullYear()} Rick & Morty Explorer
          </p>
        </div>
      </footer> */}
    </div>
  );
}
