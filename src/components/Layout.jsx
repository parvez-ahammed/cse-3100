import { Link } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <div className="min-h-md bg-gray-50 text-gray-800">
      <nav className="bg-white shadow p-4 flex justify-between">
        <h1 className="text-2xl font-bold">
          <Link to="/">Rick & Morty Explorer</Link>
        </h1>
        <div className="space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
        </div>
      </nav>
      <main className="p-4">{children}</main>
    </div>
  );
}
