import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import CharacterCard from "../components/CharacterCard";

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({}); 
  const [searchParams, setSearchParams] = useSearchParams(); 

  const nameFilter = searchParams.get("name") || "";
  const statusFilter = searchParams.get("status") || "";
  const initialPage = parseInt(searchParams.get("page")) || 1;
  const [page, setPage] = useState(initialPage);

  useEffect(() => {
    const fetchCharacters = async () => {
      let apiUrl = `https://rickandmortyapi.com/api/character?page=${page}`;

      if (nameFilter) {
        apiUrl += `&name=${nameFilter}`;
      }
      if (statusFilter) {
        apiUrl += `&status=${statusFilter}`;
      }

      try {
        const res = await fetch(apiUrl);
        if (!res.ok) {
          setCharacters([]);
          setInfo({});
          return;
        }
        const data = await res.json();
        setCharacters(data.results);
        setInfo(data.info); 
      } catch (error) {
        console.error("Error fetching characters:", error);
        setCharacters([]);
        setInfo({});
      }
    };

    fetchCharacters();

    const newSearchParams = new URLSearchParams(searchParams);
    if (page !== 1) {
      newSearchParams.set("page", page.toString());
    } else {
      newSearchParams.delete("page");
    }
    setSearchParams(newSearchParams);

  }, [nameFilter, statusFilter, page, setSearchParams, searchParams]); 

  const handleNextPage = () => {
    if (info.next) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (info.prev) {
      setPage((prevPage) => prevPage - 1);
    }
  };

  return (
    <main className="container">
      <h1 className="my-4">Rick & Morty Explorer</h1>

     

      <div className="row">
        {characters.length > 0 ? (
          characters.map((char) => (
            <div className="col-md-4 mb-4" key={char.id}>
              <CharacterCard character={char} />
            </div>
          ))
        ) : (
          <p className="text-center">No characters found matching your criteria.</p>
        )}
      </div>

      <div className="d-flex justify-content-between my-4">
        <button
          className="btn btn-primary"
          onClick={handlePreviousPage}
          disabled={!info.prev}
        >
          Previous
        </button>
        <button
          className="btn btn-primary"
          onClick={handleNextPage}
          disabled={!info.next}
        >
          Next
        </button>
      </div>
    </main>
  );
}