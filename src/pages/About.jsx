export default function About() {
  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <h2 className="text-3xl font-bold text-center text-slate-500">
        About Rick & Morty Explorer
      </h2>

      <p className="text-lg leading-relaxed text-gray-800">
        This is a simple React app that lets you browse and explore characters
        from the Rick & Morty universe using the official open API. It supports
        features like searching, filtering, pagination, and character details —
        all built using React, Tailwind CSS, and React Router.
      </p>

      <div>
        <h3 className="text-xl font-semibold text-slate-500 mb-2">
          Developer Info
        </h3>
        <ul className="text-gray-700 list-disc list-inside space-y-1">
          <li>
            <strong>Name:</strong> Arhan Tibro
          </li>
          <li>
            <strong>ID:</strong> 20220204033
          </li>
          <li>
            <strong>Department:</strong> Computer Science and Engineering
          </li>
          <li>
            <strong>Section:</strong> A
          </li>
          <li>
            <strong>Group:</strong> A2
          </li>
          <li>
            <strong>GitHub:</strong>{" "}
            <a
              href="https://github.com/ArhanTibro"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              github.com/ArhanTibro
            </a>
          </li>
        </ul>
      </div>

      <blockquote className="italic border-l-4 border-slate-500 pl-4 text-gray-700">
        "To live is to risk it all; otherwise you're just an inert chunk of
        randomly assembled molecules drifting wherever the universe blows you."
        – Rick Sanchez
      </blockquote>
    </div>
  );
}
