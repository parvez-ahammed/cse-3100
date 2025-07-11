import { GiStairs } from "react-icons/gi";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <nav className="flex justify-around items-center p-7 bg-gray-900 text-white">
      <div className="flex items-center gap-4 text-2xl">
        <GiStairs size={48} />
        <h1 className="font-extrabold">Rick & Morty Explorer</h1>
      </div>
      <ul className="flex gap-7">
        <Link to={"/"}>
          <li className="relative group">
            <span className="cursor-pointer hover:text-purple-300 transition-all duration-300">
              Home
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
          </li>
        </Link>
        <Link to={"/about"}>
          <li className="relative group">
            <span className="cursor-pointer hover:text-cyan-300 transition-all duration-300">
              About
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
          </li>
        </Link>
        <Link to={"/contact"}>
          <li className="relative group">
            <span className="cursor-pointer hover:text-green-300 transition-all duration-300">
              Contact
            </span>
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full"></span>
          </li>
        </Link>
      </ul>
    </nav>
  );
}
