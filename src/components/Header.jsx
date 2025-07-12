import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext'

const Header = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <header
      className={`shadow-md transition-colors duration-300 ${
        theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-green-600 text-white'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-extrabold hover:text-green-300 transition-colors duration-300">
          Rick & Morty Explorer
        </Link>
        <nav className="flex items-center space-x-6">
          <ul className="flex space-x-6 text-lg">
            <li>
              <Link to="/" className="hover:underline hover:text-green-300 transition-colors duration-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline hover:text-green-300 transition-colors duration-300">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:underline hover:text-green-300 transition-colors duration-300">
                Contact
              </Link>
            </li>
          </ul>
          <button
            onClick={toggleTheme}
            className="ml-6 px-4 py-2 rounded bg-blue-600 hover:bg-blue-700 text-white font-semibold transition-colors duration-300"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? 'Light Mode' : 'Dark Mode'}
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Header
