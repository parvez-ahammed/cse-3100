import Navbar from "../components/Navbar";

export default function About() {
  return (
    <>
    <Navbar />
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">About Rick & Morty Explorer</h1>
      <p className="mb-4">
        This is a React app built using the Rick and Morty API. It has search and filter option, pagination, components. The app was
        built with Vite, TailwindCSS, and React Router.
      </p>

      <h2 className="text-2xl font-semibold mb-2">Developer</h2>
      <p className="mb-4">Hello!I'm Nishat Tasnim.Registered under the student ID : 20220204049.Currently a 3rd Year 1st Semester student at
          Ahsanullah University of Science and Technology,dying while pursuing a BSc degree
          in Computer Science and Engineering. </p>

      <h2 className="text-2xl font-semibold mb-2">Favorite Quote</h2>
      <p className="italic text-gray-700">
        "I turned myself into a pickle, Morty!" — Rick
      </p>
    </div>
    </>
  );
}
