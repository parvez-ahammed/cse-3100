import CharacterCard from "../components/CharacterCard";
import FetchCharacter from "../hooks/FetchCharacter";
import SearchBox from "../components/SearchBox";
import StatusFilter from "../components/StatusFilter";
import PaginationControls from "../components/PaginationControls";
import { useSearchParams } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Home() {
  const { characters, info } = FetchCharacter();
  const [searchParams] = useSearchParams();
  const uiPage = parseInt(searchParams.get("page") || "1");

  const startIndex = ((uiPage - 1) % 2) * 10;
  const visibleCharacters = characters.slice(startIndex, startIndex + 10);

  return (
    <main className="container mx-auto px-4 py-8">
      <Navbar />
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
