export default function Footer() {
  return (
    <footer className="bg-black border-t-2 border-green-400">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Rick & Morty Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-green-400">RICK & MORTY</h3>
            <p className="text-gray-300 text-sm">
              Explore the multiverse with Rick and Morty characters from all
              dimensions.
            </p>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-green-400">Explore</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-green-400 transition-colors"
                >
                  Characters
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-green-400 transition-colors"
                >
                  Episodes
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-green-400 transition-colors"
                >
                  Locations
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-green-400 transition-colors"
                >
                  Favorites
                </a>
              </li>
            </ul>
          </div>

          {/* Portal Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-green-400">
              Portal Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-green-400 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-green-400 transition-colors"
                >
                  API Docs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-green-400 transition-colors"
                >
                  Support
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-green-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-green-400/30 mt-8 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Rick & Morty Database. Data from{" "}
            <a
              href="https://rickandmortyapi.com"
              className="text-green-400 hover:text-green-300 transition-colors"
            >
              Rick and Morty API
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
