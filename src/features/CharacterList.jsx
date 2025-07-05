import { useFetchCharacters } from "../hooks/useFetchCharacters";
import { useQueryParams } from "../hooks/useQueryParams";
import CharacterCard from "../components/CharacterCard";
import Pagination from "../components/Pagination";

export default function CharacterList() {
  const [queryParams, setQueryParams] = useQueryParams();
  const { name, status, page } = queryParams;
  const { characters, info, loading, error } = useFetchCharacters({ name, status, page });

  const handlePrevPage = () => {
    if (page > 1) setQueryParams({ page: page - 1 });
  };

  const handleNextPage = () => {
    if (info.pages && page < info.pages) setQueryParams({ page: page + 1 });
  };

  return (
    <div className="max-w-6xl mx-auto py-8 px-4">
      {/* Removed the extra search and filter bar here */}
      {loading && <p className="text-center text-blue-600 font-semibold">Loading...</p>}
      {error && <p className="text-center text-red-600 font-semibold">{error}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {characters && characters.map((char) => (
          <CharacterCard character={char} key={char.id} />
        ))}
      </div>
      <Pagination
        page={page}
        totalPages={info.pages || 1}
        onPageChange={(p) => {
          if (p >= 1 && p <= (info.pages || 1)) setQueryParams({ page: p });
        }}
      />
    </div>
  );
}