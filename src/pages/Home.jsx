import { useEffect, useState } from "react";
import CharacterCard from "../components/CharacterCard";
import Navbar from "../components/Navbar";
import ReactPaginate from "react-paginate";

export default function Home() {
  //State for pagination
  const [pageNumber, setPageNumber] = useState(0);

  const [characters, setCharacters] = useState([]);

  const characterPerPage = 6;
  const characterVisited = pageNumber * characterPerPage;

  const displayCharacters = characters
    .slice(characterVisited, characterVisited + characterPerPage)
    .map((character) => {
      return <CharacterCard character={character} key={character.id} />;
    });

  const pageCount = Math.ceil(characters.length / characterPerPage);

  function handlePageChange({ selected }) {
    setPageNumber(selected);
  }

  useEffect(() => {
    const fetchCharacters = async () => {
      const res = await fetch("https://rickandmortyapi.com/api/character");
      const data = await res.json();
      setCharacters(data.results);
    };

    fetchCharacters();
  }, []);

  return (
    <>
      <main className="max-w-6xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Rick & Morty Explorer
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {displayCharacters}
        </div>
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          pageCount={pageCount}
          onPageChange={handlePageChange}
          containerClassName={"flex justify-center gap-2 flex-wrap"}
          pageClassName={
            "px-3 py-1 border rounded-lg hover:bg-purple-100 cursor-pointer"
          }
          activeClassName={"bg-purple-500 text-white"}
          previousClassName={
            "px-3 py-1 border rounded-lg hover:bg-purple-100 cursor-pointer"
          }
          nextClassName={
            "px-3 py-1 border rounded-lg hover:bg-purple-100 cursor-pointer"
          }
          disabledClassName={"opacity-50 cursor-not-allowed"}
        />
      </main>
    </>
  );
}
