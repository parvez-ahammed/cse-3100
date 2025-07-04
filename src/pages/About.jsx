import Navbar from "../components/Navbar";
import pic from "../assets/pic.jpg";

export default function About() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">About Rick & Morty Explorer</h1>
        <p className="mb-6">
          This is a simple React app that lets you browse characters from the
          Rick & Morty universe.
        </p>

        <h2 className="text-xl font-semibold mb-2">Made by:</h2>
        <img src={pic} alt="Developer" className="w-[300px] h-auto mb-6" />
        <p>
          <strong>Name:</strong> Md. Aribur Rahman Dhruvo <br />
          <strong>ID:</strong> 20220204003 <br />
          <strong>Lab Group:</strong> A1
        </p>
        <br />

        <h2 className="text-xl font-semibold mb-2">
          Favorite Rick and Morty Quote:
        </h2>
        <p className="text-lg">
          "Wubba lubba dub dub!" <br />
          <span className="text-gray-600">(I don't watch Rick and Morty)</span>
        </p>
      </div>
    </div>
  );
}
