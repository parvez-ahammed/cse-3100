import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Link to="/" className="btn btn-outline-primary mb-6">← Back to Home</Link>
      <h2 className="text-3xl font-extrabold mb-6 text-center text-green-700">About Rick & Morty Explorer</h2>
      <div className="about-content space-y-8">
        <section className="app-info">
          <h3 className="text-2xl font-semibold mb-2">About the App</h3>
          <p>
            This is an interactive single-page application that allows users to
            explore, filter, and view detailed information about characters from
            the Rick and Morty universe. Built with React and powered by the
            public Rick and Morty API, this app provides a seamless experience
            for fans to discover their favorite characters.
          </p>
          <p>
            Features include character search, status filtering, pagination, and
            detailed character profiles with information about their origin,
            location, and episode appearances.
          </p>
        </section>
        <section className="developer-info">
          <h3 className="text-2xl font-semibold mb-2">Developer</h3>
          <p>Al Sahab, ID 20220204087; AUST CSE</p>
        </section>
        <section className="favorite-quote">
          <h3 className="text-2xl font-semibold mb-2">Favorite Rick & Morty Quote</h3>
          <blockquote className="blockquote">
            <p className="mb-0">"Wubba lubba dub dub!"</p>
            <footer className="mt-2 text-sm">
              Rick Sanchez -{' '}
              <cite title="Source Title" className="not-italic">
                which means "I am in great pain, please help me"
              </cite>
            </footer>
          </blockquote>
        </section>
        <section className="tech-info">
          <h3 className="text-2xl font-semibold mb-2">Technologies Used</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>React 19.1.0</li>
            <li>React Router DOM 7.6.2</li>
            <li>Vite for build tooling</li>
            <li>Rick and Morty API</li>
            <li>Tailwind CSS</li>
          </ul>
        </section>
      </div>
    </div>
  )
}