import { useEffect, useState } from "react";
import CharacterCard from "../components/CharacterCard";
import { useSearchParams } from "react-router-dom";

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [pageInfo, setPageInfo] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();

  const nameQuery = searchParams.get("name") || "";
  const statusQuery = searchParams.get("status") || "";
  const pageQuery = parseInt(searchParams.get("page")) || 1; // Frontend page number (10 chars/page)

  useEffect(() => {
    const fetchCharacters = async () => {
      // Calculate the corresponding API page and slice indices
      // The API serves 20 items per page, so 2 frontend pages (10 chars each) fit into 1 API page.
      const apiPage = Math.ceil(pageQuery / 2);
      // Determine which half of the API results to slice: first 10 (0-9) or second 10 (10-19).
      const sliceStart = pageQuery % 2 === 1 ? 0 : 10;
      const sliceEnd = sliceStart + 10;

      let apiUrl = `https://rickandmortyapi.com/api/character/?page=${apiPage}`; // Use the calculated API page
      if (nameQuery) apiUrl += `&name=${nameQuery}`;
      if (statusQuery) apiUrl += `&status=${statusQuery}`;

      try {
        const res = await fetch(apiUrl);
        const data = await res.json();

        if (data.results) {
          // Slice the API results to get the correct 10 characters for the current frontend page
          setCharacters(data.results.slice(sliceStart, sliceEnd));

          // Calculate total frontend pages based on API's total count, divided by 10 characters per page
          const adjustedPageCount = Math.ceil(data.info.count / 10);
          setPageInfo({
            ...data.info,
            pages: adjustedPageCount,
          });
        } else {
          // If API returns no results (e.g., if pageQuery is beyond the actual data range,
          // or a filter yields no results)
          setCharacters([]);
          // Still calculate pageInfo.pages based on the total count if available,
          // ensuring disabled state for pagination buttons is correct.
          const adjustedPageCount = Math.ceil(data.info.count / 10);
          setPageInfo({
            ...data.info,
            pages: adjustedPageCount > 0 ? adjustedPageCount : 1, // Ensure at least 1 page is shown
          });
        }
      } catch (error) {
        // Log errors and clear character data
        console.error("Error fetching characters:", error);
        setCharacters([]);
        setPageInfo({});
      }
    };

    fetchCharacters();
  }, [nameQuery, statusQuery, pageQuery]); // Re-run effect when search, status, or page changes

  const handleSearchChange = (e) => {
    searchParams.set("name", e.target.value);
    searchParams.set("page", 1); // Reset to the first page when a new search is performed
    setSearchParams(searchParams);
  };

  const handleStatusChange = (e) => {
    const value = e.target.value;
    if (value === "") {
      searchParams.delete("status"); // Remove status parameter if "Select status" is chosen
    } else {
      searchParams.set("status", value); // Set the selected status
    }
    searchParams.set("page", 1); // Reset to the first page when status filter changes
    setSearchParams(searchParams);
  };

  const goToPage = (newPage) => {
    // Navigate to the new page if it's within valid bounds (1 to total adjusted pages)
    if (newPage >= 1 && newPage <= (pageInfo.pages || 1)) {
      searchParams.set("page", newPage);
      setSearchParams(searchParams);
    }
  };

  // Function to render pagination buttons (including page numbers and ellipses)
  const renderPaginationButtons = () => {
    const totalPages = pageInfo.pages || 1;
    const currentPage = pageQuery;
    const maxPagesToShow = 10; // Maximum number of page buttons to display
    const pages = [];

    // Calculate the start and end page for the window of visible page numbers
    let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2));
    let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1);

    // Adjust startPage if the calculated endPage hits the totalPages limit and there's space at the beginning
    if (endPage === totalPages) {
      startPage = Math.max(1, endPage - maxPagesToShow + 1);
    }

    // Always include the first page if it's not already in the visible range
    if (startPage > 1) {
      pages.push(1);
      if (startPage > 2) {
        // Add an ellipsis if there's a gap after page 1
        pages.push("ellipsis-start");
      }
    }

    // Add page numbers within the calculated visible range
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    // Always include the last page if it's not already in the visible range
    if (endPage < totalPages) {
      if (endPage < totalPages - 1) {
        // Add an ellipsis if there's a gap before the last page
        pages.push("ellipsis-end");
      }
      pages.push(totalPages);
    }

    // Map the array of page numbers/ellipses to JSX elements
    return pages.map((item, idx) =>
      item.toString().includes("ellipsis") ? (
        <span key={item + idx} className='dots'>
          ...
        </span>
      ) : (
        <button key={item} className={item === currentPage ? "active" : ""} onClick={() => goToPage(item)}>
          {item}
        </button>
      )
    );
  };

  return (
    <main className='home-wrapper'>
      {/* Filter & Search Section */}
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

      {/* Character Grid Section: Designed to display 2 rows of 5 columns (10 characters total) */}
      <div className='five-col-grid'>
        {characters.map((char) => (
          <CharacterCard key={char.id} character={char} />
        ))}
      </div>

      {/* Pagination Section: Now includes page numbers, Next, and Previous buttons */}
      {/* Only show pagination if there's more than one conceptual page */}
      {pageInfo.pages && pageInfo.pages > 1 && (
        <div className='pagination'>
          <button onClick={() => goToPage(pageQuery - 1)} disabled={pageQuery <= 1}>
            &lt; Previous
          </button>
          {renderPaginationButtons()} {/* Render the page number buttons */}
          <button onClick={() => goToPage(pageQuery + 1)} disabled={pageQuery >= pageInfo.pages}>
            Next &gt;
          </button>
        </div>
      )}
    </main>
  );
}
