import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function CustomNavbar() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        const currentScrollY = window.scrollY;

        // Show navbar when scrolling up or at the top
        if (currentScrollY < lastScrollY || currentScrollY < 10) {
          setIsVisible(true);
        } else {
          // Hide navbar when scrolling down
          setIsVisible(false);
        }

        setLastScrollY(currentScrollY);
      }
    };

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);
  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-200 transition-transform duration-300 ease-in-out ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo/Title */}
          <div className="flex-shrink-0">
            <button
              onClick={() => navigate("/")}
              className="text-xl font-bold text-gray-900 hover:text-gray-700 transition-colors"
            >
              Rick & Morty Explorer
            </button>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => navigate("/")}
                className="text-gray-900 hover:text-blue-600 px-3 py-2 text-xl font-bold transition-colors duration-200 hover:bg-gray-50 rounded-md"
              >
                Home
              </button>
              <button
                onClick={() => navigate("/about")}
                className="text-gray-900 hover:text-blue-600 px-3 py-2 text-xl font-bold transition-colors duration-200 hover:bg-gray-50 rounded-md"
              >
                About
              </button>
              <button
                onClick={() => navigate("/contact")}
                className="text-gray-900 hover:text-blue-600 px-3 py-2 text-xl font-bold transition-colors duration-200 hover:bg-gray-50 rounded-md"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="bg-gray-50 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-controls="mobile-menu"
              aria-expanded="flase"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
            <Link
              href="/home"
              className="text-gray-900 hover:text-blue-600 block px-3 py-2 text-base font-medium transition-colors duration-200 hover:bg-gray-50 rounded-md"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-900 hover:text-blue-600 block px-3 py-2 text-base font-medium transition-colors duration-200 hover:bg-gray-50 rounded-md"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-gray-900 hover:text-blue-600 block px-3 py-2 text-base font-medium transition-colors duration-200 hover:bg-gray-50 rounded-md"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
