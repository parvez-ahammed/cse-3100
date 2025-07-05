import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import SearchFilterBar from "@/components/SearchFilterBar";
import Pagination from "@/components/Pagination";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

export default function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [page, setPage] = useState(parseInt(searchParams.get("page")) || 1);
  const [theme, setTheme] = useState("light");

  const name = searchParams.get("name") || "";
  const status = searchParams.get("status") || "";

  useEffect(() => {
    setLoading(true);
    const apiUrl = new URL("https://rickandmortyapi.com/api/character");

    apiUrl.searchParams.set("page", page);
    if (name) apiUrl.searchParams.set("name", name);
    if (status) apiUrl.searchParams.set("status", status);

    fetch(apiUrl)
      .then(res => res.json())
      .then(data => {
        setCharacters(data.results || []);
        setHasNextPage(data.info?.next != null);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setCharacters([]);
        setHasNextPage(false);
        setLoading(false);
      });
  }, [name, status, page]);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <div className="p-6 min-h-screen">
      <div className="flex justify-between items-center mb-6">
       <h1 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 py-4">
  Rick & Morty Character Explorer
</h1>
        <Button 
          variant="outline"
          size="icon" 
          onClick={toggleTheme}
          className="hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </Button>
      </div>

      <div className="flex items-center justify-between mb-6 gap-4">
        <SearchFilterBar />
        <div className="flex gap-2">
          <Link to="/about">
            <Button 
              variant="outline"
            >
              About Us
            </Button>
          </Link>
          <Link to="/contact">
            <Button 
              variant="outline"
            >
              Contact Us
            </Button>
          </Link>
        </div>
      </div>

      {loading && <p>Loading characters...</p>}

      {!loading && characters.length === 0 && (
        <p>No characters found.</p>
      )}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {characters.map(character => (
          <Link to={`/character/${character.id}`} key={character.id}>
            <div className="border p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition dark:border-gray-700">
              <img
                src={character.image}
                alt={character.name}
                className="rounded w-full h-auto mb-2"
              />
              <h2 className="font-semibold text-lg">{character.name}</h2>
              <p className="text-sm">{character.status}</p>
            </div>
          </Link>
        ))}
      </div>

      <Pagination page={page} setPage={setPage} hasNextPage={hasNextPage} />
    </div>
  );
}