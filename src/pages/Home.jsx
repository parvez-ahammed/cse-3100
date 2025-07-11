import { useNavigate, useSearchParams } from "react-router-dom";
import CharacterCard from "../components/CharacterCard";
import FetchCharacter from "../hooks/FetchCharacter";
import SearchBox from "../components/SearchBox";
import StatusFilter from "../components/StatusFilter";
import PaginationControls from "../components/PaginationControls";

export default function Home() {
  const { characters, info } = FetchCharacter();
  const [searchParams] = useSearchParams();
  const uiPage = parseInt(searchParams.get("page") || "1");
  const navigate = useNavigate();

  const startIndex = ((uiPage - 1) % 2) * 10;
  const visibleCharacters = characters.slice(startIndex, startIndex + 10);

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-center w-full">
          Rick & Morty Explorer
        </h2>
        <button
          onClick={() => navigate("/contact")}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 absolute right-4 top-8"
        >
          Contact
        </button>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mb-6">
        <SearchBox />
        <StatusFilter />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
        {visibleCharacters.map((char) => (
          <CharacterCard key={char.id} character={char} />
        ))}
      </div>

      {characters.length > 0 && (
        <div className="mt-8">
          <PaginationControls totalItems={characters.length} />
        </div>
      )}
    </main>
  );
}
