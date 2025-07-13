export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">About Rick & Morty Explorer</h1>
        <div className="bg-white rounded-lg shadow-lg p-8 space-y-6">
          <section>
            <h2 className="text-2xl font-bold mb-4">About the App</h2>
            <p className="text-gray-600">
              Rick & Morty Explorer is a comprehensive character database for the hit animated series
              "Rick and Morty". This application allows fans to explore detailed information about
              their favorite characters, including their status, species, origin, and the episodes
              they appear in.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-4">Developer</h2>
            <p className="text-gray-600">
              This application was developed by Zarin Tasnim as part of the CSE-3100 course assignment.
              It showcases the implementation of modern web development practices using React,
              including component-based architecture, state management, and responsive design.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-4">Favorite Quote</h2>
            <blockquote className="border-l-4 border-blue-500 pl-4 italic">
              "Wubba Lubba Dub Dub!"
              <footer className="text-gray-500 mt-2">- Rick Sanchez</footer>
            </blockquote>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-4">Features</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Search and filter characters</li>
              <li>Detailed character information</li>
              <li>Episode appearances</li>
              <li>Responsive design for all devices</li>
              <li>Real-time search updates</li>
              <li>Pagination support</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-bold mb-4">Technologies Used</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>React</li>
              <li>React Router</li>
              <li>Tailwind CSS</li>
              <li>Rick and Morty API</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}
