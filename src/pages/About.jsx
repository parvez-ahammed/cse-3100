export default function About() {
  return (
    <div className="max-w-3xl mx-auto p-6 space-y-8">
      <h1 className="text-3xl font-bold text-black">About Rick & Morty Explorer</h1>
      
        <p className="text-gray-600">
          Rick & Morty Explorer is a fan-made application designed for enthusiasts of the popular animated series, Rick and Morty. 
          This app serves as a comprehensive guide to the show’s vast universe, offering detailed information about its characters, locations, and episodes. Whether you’re a long-time fan or new to the series, 
          Rick & Morty Explorer provides an engaging way to explore the intricate details of Rick and Morty’s adventures.
        </p>
        <br />
      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-black">
          Developer
        </h2>
        <p className="text-gray-600">
          Hi there! I'm Israt Jahan Eshita. I'm currently a 3rd Year 1st Semester student at
          Ahsanullah University of Science and Technology, pursuing a BSc degree in Computer Science and Engineering.
          This app is an assignment for the course: Software Development-IV, CSE 3100 at Ahsanullah University of Science and
          Technology. It is built with React. Tools  such as VS Code,GitHub. ChatGPT & Gemini AI were used for code generation.
        </p>
      </div>

      <div className=" space-y-4">
        <h3 className="text-xl font-bold text-black">
          Favorite Rick & Morty Quote
        </h3>
        <p className="text-gray-600 text-bold text-1xl italic">
          "Nobody exists on purpose, nobody belongs anywhere, everybody's going to die."
        </p>
        <br />
        <p className="text-gray-400 text-sm italic">
          This application is not affiliated with or endorsed by the creators of Rick and Morty.
          It is a fan-made project intended for entertainment and informational purposes only.
        </p>
      </div>
    </div>
  );
}