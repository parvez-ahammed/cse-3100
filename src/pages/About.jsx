export default function About() {
  return (
    <div className="max-w-3xl mx-auto p-6 space-y-8">
      <h1 className="text-3xl font-bold text-gray-800">About Us</h1>
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-700">About this App</h2>
        <p className="text-gray-600">
          This app is an assignment for the course: Software Development-IV, CSE
          3100 for the Fall-24 semester at Ahsanullah University of Science and
          Technology. It is built with React. Tools used include: VS Code,
          GitHub. ChatGPT & Gemini AI were used for code generation.
        </p>
        <br />
        <p className="text-gray-600">
          Using this app, one can learn about characters from the animated
          series "Rick and Morty".
        </p>
      </div>

      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-gray-700">
          About the Developer
        </h2>
        <p className="text-gray-600">
          I'm Pabak Dev. I'm currently a 3rd Year 1st Semester student at
          Ahsanullah University of Science and Technology, pursuing a BSc degree
          in Computer Science and Engineering.
        </p>
      </div>

      <div className="">
        <h3 className="text-xl font-semibold text-gray-800">
          Favorite Rick & Morty Quote
        </h3>
        <blockquote className="italic text-gray-600 mt-2">
          "Wubba Lubba Dub Dub" - Rick
        </blockquote>
        <br />
        <p className="text-gray-600">
          (I actually haven't watched the show. But it's on my bucket list--)
        </p>
      </div>
    </div>
  );
}
