
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();

  // Function to determine if a link is active
  const isActive = (path) => location.pathname === path;

  return (
    <header className="bg-gradient-to-r from-green-600 via-purple-700 to-pink-600 shadow-2xl sticky top-0 z-30 backdrop-blur-xl border-b border-white/10">
      <div className="container mx-auto flex justify-between items-center py-5 px-8">
        {/* Logo with enhanced animation */}
        <Link 
          to="/" 
          className="group relative overflow-hidden"
        >
          <span className="text-4xl font-extrabold text-white tracking-wide bg-gradient-to-r from-pink-500 via-purple-500 to-yellow-400 bg-clip-text text-transparent transition-all duration-500 group-hover:scale-105 rounded-xl px-5 py-3 shadow-lg inline-block">
            Rick & Morty Explorer
            <span className="absolute inset-0 bg-gradient-to-r from-pink-500/20 via-purple-500/20 to-yellow-400/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </span>
        </Link>

        {/* Navigation with increased gaps between buttons */}
        <nav className="flex gap-10"> {/* Increased from gap-6 to gap-10 */}
          <Link
            to="/"
            className={`relative text-lg font-bold px-6 py-3 rounded-xl transition-all duration-300 no-underline 
              ${isActive('/') ? 
                'bg-green-400 text-gray-900 shadow-lg shadow-green-400/50 border-2 border-white transform scale-105' : 
                'bg-green-400/90 text-gray-900 hover:bg-green-300 hover:shadow-lg hover:shadow-green-400/40 hover:border-2 hover:border-white hover:transform hover:scale-105'
              }`}
          >
            <span className="relative z-10">Home</span>
            {isActive('/') && (
              <span className="absolute inset-0 rounded-xl bg-white/20"></span>
            )}
          </Link>

          <Link
            to="/about"
            className={`relative text-lg font-bold px-6 py-3 rounded-xl transition-all duration-300 no-underline 
              ${isActive('/about') ? 
                'bg-purple-400 text-gray-900 shadow-lg shadow-purple-400/50 border-2 border-white transform scale-105' : 
                'bg-purple-400/90 text-gray-900 hover:bg-purple-300 hover:shadow-lg hover:shadow-purple-400/40 hover:border-2 hover:border-white hover:transform hover:scale-105'
              }`}
          >
            <span className="relative z-10">About</span>
            {isActive('/about') && (
              <span className="absolute inset-0 rounded-xl bg-white/20"></span>
            )}
          </Link>

          <Link
            to="/contact"
            className={`relative text-lg font-bold px-6 py-3 rounded-xl transition-all duration-300 no-underline 
              ${isActive('/contact') ? 
                'bg-pink-400 text-gray-900 shadow-lg shadow-pink-400/50 border-2 border-white transform scale-105' : 
                'bg-pink-400/90 text-gray-900 hover:bg-pink-300 hover:shadow-lg hover:shadow-pink-400/40 hover:border-2 hover:border-white hover:transform hover:scale-105'
              }`}
          >
            <span className="relative z-10">Contact</span>
            {isActive('/contact') && (
              <span className="absolute inset-0 rounded-xl bg-white/20"></span>
            )}
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;