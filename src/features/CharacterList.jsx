import { useFetchCharacters } from "../hooks/useFetchCharacters";
import { useQueryParams } from "../hooks/useQueryParams";
import CharacterCard from "../components/CharacterCard";

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
      <div className="flex justify-center items-center gap-4 mt-8">
        <button
          onClick={handlePrevPage}
          disabled={page <= 1}
          className="px-4 py-2 rounded bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-semibold disabled:opacity-50"
        >
          Previous
        </button>
        <span className="text-lg font-bold text-gray-700 dark:text-gray-200">Page {page}</span>
        <button
          onClick={handleNextPage}
          disabled={!info.pages || page >= info.pages}
          className="px-4 py-2 rounded bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-200 font-semibold disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
}