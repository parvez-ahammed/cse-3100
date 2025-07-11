import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-slate-500 text-white px-6 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <button onClick={() => navigate("/")} className="text-xl font-bold">
          Rick & Morty Explorer
        </button>

        <div className="flex gap-4 text-base">
          <button onClick={() => navigate("/")}>Home</button>
          <button onClick={() => navigate("/about")}>About</button>
          <button onClick={() => navigate("/contact")}>Contact</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
