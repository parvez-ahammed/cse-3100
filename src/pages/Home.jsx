import { useEffect, useState } from "react";
import CharacterCard from "../components/CharacterCard";
import { useSearchParams } from "react-router-dom";

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [pageInfo, setPageInfo] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();

  const nameQuery = searchParams.get("name") || "";
  const statusQuery = searchParams.get("status") || "";
  const pageQuery = parseInt(searchParams.get("page")) || 1;

  useEffect(() => {
    const fetchCharacters = async () => {
      let apiUrl = `https://rickandmortyapi.com/api/character/?page=${pageQuery}`;
      if (nameQuery) apiUrl += `&name=${nameQuery}`;
      if (statusQuery) apiUrl += `&status=${statusQuery}`;

      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        if (data.results) {
          // Limit to 10 characters per page for display, even if API returns more
          setCharacters(data.results.slice(0, 10));
          // Adjust pageInfo for client-side 10 characters per page
          // This calculates the total pages assuming 10 items per page
          const adjustedPageCount = Math.ceil(data.info.count / 10);
          setPageInfo({
            ...data.info,
            pages: adjustedPageCount,
          });
        } else {
          setCharacters([]);
          setPageInfo({});
        }
      } catch (error) {
        setCharacters([]);
        setPageInfo({});
      }
    };

    fetchCharacters();
  }, [nameQuery, statusQuery, pageQuery]);

  const handleSearchChange = (e) => {
    searchParams.set("name", e.target.value);
    searchParams.set("page", 1);
    setSearchParams(searchParams);
  };

  const handleStatusChange = (e) => {
    const value = e.target.value;
    if (value === "") {
      searchParams.delete("status");
    } else {
      searchParams.set("status", value);
    }
    searchParams.set("page", 1);
    setSearchParams(searchParams);
  };

  const goToPage = (newPage) => {
    if (newPage >= 1 && (!pageInfo.pages || newPage <= pageInfo.pages)) {
      searchParams.set("page", newPage);
      setSearchParams(searchParams);
    }
  };

  return (
    <main className='home-wrapper'>
      {/* Filter & Search */}
      <div className='filters'>
        <select value={statusQuery} onChange={handleStatusChange}>
          <option value=''>Select status</option>
          <option value='alive'>Alive</option>
          <option value='dead'>Dead</option>
          <option value='unknown'>Unknown</option>
        </select>
        <input type='text' placeholder='Search characters' value={nameQuery} onChange={handleSearchChange} />
        <p className='result-count'>
          Showing {characters.length} of {pageInfo.count || 0} results
        </p>
      </div>

      {/* Character Grid */}
      <div className='five-col-grid'>
        {characters.map((char) => (
          <CharacterCard key={char.id} character={char} />
        ))}
      </div>

      {/* Pagination */}
      {pageInfo.pages && pageInfo.pages > 1 && (
        <div className='pagination'>
          <button onClick={() => goToPage(pageQuery - 1)} disabled={pageQuery <= 1}>
            &lt;
          </button>

          {[...Array(pageInfo.pages).keys()]
            .map((n) => n + 1)
            .filter((p) => p <= 3 || p > pageInfo.pages - 2 || Math.abs(p - pageQuery) <= 2)
            .reduce((acc, page, i, arr) => {
              if (i > 0 && page - arr[i - 1] > 1) acc.push("ellipsis");
              acc.push(page);
              return acc;
            }, [])
            .map((item, idx) =>
              item === "ellipsis" ? (
                <span key={idx} className='dots'>
                  ...
                </span>
              ) : (
                <button key={item} className={item === pageQuery ? "active" : ""} onClick={() => goToPage(item)}>
                  {item}
                </button>
              )
            )}

          <button onClick={() => goToPage(pageQuery + 1)} disabled={pageQuery >= pageInfo.pages}>
            &gt;
          </button>
        </div>
      )}
    </main>
  );
}
