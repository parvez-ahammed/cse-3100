import { useEffect, useState } from "react";
import CharacterCard from "../components/CharacterCard";
import { useSearchParams } from "react-router-dom";
import PaginationControls from "../components/PaginationControl";
import LoadingSpinner from "../components/LoadingSpinner";
import SearchBar from "../components/SearchBar";
import StatusDropdown from "../components/DropDownMenu";

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});
  const [searchParams] = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  const searchQuery = searchParams.get("search") || "";
  const [isLoading, setIsLoading] = useState(false);
  const [statusFilter, setStatusFilter] = useState("");

  useEffect(() => {
    const fetchCharacters = async () => {
      setIsLoading(true);
      try {
        const url = searchQuery
          ? `https://rickandmortyapi.com/api/character/?name=${searchQuery}&page=${currentPage}&status=${statusFilter}`
          : `https://rickandmortyapi.com/api/character/?page=${currentPage}&status=${statusFilter}`;

        const res = await fetch(url);
        const data = await res.json();
        setCharacters(data.results.slice(0, 10));
        setInfo(data.info);
        setInfo((prev) => ({
          ...prev,
          pages: Math.ceil(data.info.count / 10), // Recalculate total pages
        }));
      } finally {
        setIsLoading(false);
      }
    };
    fetchCharacters();
  }, [currentPage, searchQuery, statusFilter]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <LoadingSpinner size="lg" color="green" />
      </div>
    );
  }

  const handleSearch = (query) => {
    window.location.search = `?search=${encodeURIComponent(query)}&page=1`;
  };

  return (
    <div className="flex flex-col min-h-screen px-100 py-40 justify-center">
      <div className="flex flex-row justify-between">
        <SearchBar onSearch={handleSearch} />
        <StatusDropdown
          selectedStatus={statusFilter}
          onStatusChange={setStatusFilter}
        />
      </div>

      <div className="py-10 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
        {characters.map((char) => (
          <div className="col-md-4 mb-4" key={char.id}>
            <CharacterCard character={char} />
          </div>
        ))}
      </div>
      <PaginationControls
        currentPage={currentPage}
        totalPages={info.pages}
        searchQuery={searchQuery}
      />
    </div>
  );
}
