import { useEffect, useState } from "react";
import CharacterCard from "../components/CharacterCard";
import { useSearchParams } from "react-router-dom";

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();

  const frontendPage = parseInt(searchParams.get("page")) || 1;
  const apiPage = Math.ceil(frontendPage / 2);
  const sliceStart = frontendPage % 2 === 1 ? 0 : 10;
  const sliceEnd = sliceStart + 10;




  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const res = await fetch(`https://rickandmortyapi.com/api/character?page=${apiPage}`);
        const data = await res.json();
        setCharacters(data.results);
        setInfo(data.info);
      } catch (err) {
        console.error(err);
      }
    };

    fetchCharacters();
  }, [apiPage]);


  const maxFrontendPages = info.pages ? info.pages * 2 : 0;

  const visiblePagesCount = 7; // Total page numbers to show (can adjust)
  const half = Math.floor(visiblePagesCount / 2);

  let startPage = Math.max(frontendPage - half, 1);
  let endPage = startPage + visiblePagesCount - 1;

  // Correct if endPage goes beyond last page
  if (endPage > maxFrontendPages) {
    endPage = maxFrontendPages;
    startPage = Math.max(endPage - visiblePagesCount + 1, 1);
  }

  // Generate pages in this range
  const pages = [];
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }



  const handlePrev = () => {
    if (frontendPage > 1) {
      setSearchParams({ page: frontendPage - 1 });
    }
  };

  const handleNext = () => {
    if (frontendPage < maxFrontendPages) {
      setSearchParams({ page: frontendPage + 1 });
    }
  };

  const handleFirst = () => {
    setSearchParams({ page: 1 });
  };

  const handleLast = () => {
    setSearchParams({ page: maxFrontendPages });
  };



  return (
    <main className="container">
      <div className="row">
        {characters &&
          characters.slice(sliceStart, sliceEnd).map((char) => (
            <div className="col-md-4 mb-4" key={char.id}>
              <CharacterCard character={char} />
            </div>
          ))}
      </div>
      <div className="d-flex flex-wrap justify-content-center my-4 gap-2">
        <button onClick={handleFirst} disabled={frontendPage === 1} className="btn btn-secondary">
          ⏮ First
        </button>

        <button onClick={handlePrev} disabled={frontendPage === 1} className="btn btn-primary">
          ← Prev
        </button>

        {pages.map((p) => (
          <button
            key={p}
            onClick={() => setSearchParams({ page: p })}
            className={`btn btn-outline-primary ${p === frontendPage ? "active" : ""}`}
          >
            {p}
          </button>
        ))}

        <button onClick={handleNext} disabled={frontendPage === maxFrontendPages} className="btn btn-primary">
          Next →
        </button>

        <button onClick={handleLast} disabled={frontendPage === maxFrontendPages} className="btn btn-secondary">
          Last ⏭
        </button>
      </div>
    </main>
  );

}
