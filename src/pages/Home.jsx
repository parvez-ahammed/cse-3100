import React, { useEffect, useState } from "react";
import CharacterCard from "../components/CharacterCard";
import ReactPaginate from "react-paginate";
import { useSearchParams } from "react-router-dom";
import Filter from "../components/Filter";
import Spinner from "../components/Spinner";
import { AnimatePresence, motion } from "framer-motion";

const MotionGrid = motion.div;

export default function Home() {
  const [apiCharacters, setApiCharacters] = useState([]);
  //State for pagination
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  const [searchParams, setSearchParams] = useSearchParams();
  const name = searchParams.get("name") || "";
  const status = searchParams.get("status") || "";
  const page = parseInt(searchParams.get("page")) || 1;

  const charactersPerPage = 10;

  const fetchCharacters = async () => {
    setLoading(true);
    try {
      const apiPage = Math.ceil(page / 2);
      const res = await fetch(
        `https://rickandmortyapi.com/api/character?name=${name}&status=${status}&page=${apiPage}`
      );
      const data = await res.json();

      setApiCharacters(data.results || []);
      const totalCharacters = data.info?.count || 0;
      const computedTotalPages = Math.ceil(totalCharacters / charactersPerPage);
      setTotalPages(computedTotalPages);
    } catch {
      setApiCharacters([]);
      setTotalPages(1);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCharacters();
  }, [name, status, page]);

  const localOffset = (page - 1) % 2;
  const characters = apiCharacters.slice(
    localOffset * charactersPerPage,
    (localOffset + 1) * charactersPerPage
  );

  const handleFilterChange = ({ name, status }) => {
    const params = {};
    if (name) params.name = name;
    if (status) params.status = status;
    params.page = 1;
    setSearchParams(params);
  };

  const handlePageChange = ({ selected }) => {
    setSearchParams({
      name,
      status,
      page: selected + 1,
    });
  };

  return (
    <>
      <main className="max-w-6xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-8 text-center">
          Rick & Morty Explorer
        </h1>
        <Filter
          name={name}
          status={status}
          onFilterChange={handleFilterChange}
        />
        {loading ? (
          <Spinner />
        ) : characters.length === 0 ? (
          <p className="text-center text-gray-500">No characters found</p>
        ) : (
          <>
            <AnimatePresence>
              <MotionGrid
                key={page}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -20,
                }}
                transition={{
                  duration: 0.4,
                  ease: "easeOut",
                }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10"
              >
                {characters.map((character) => (
                  <CharacterCard key={character.id} character={character} />
                ))}
              </MotionGrid>
            </AnimatePresence>
            <ReactPaginate
              previousLabel={"Previous"}
              nextLabel={"Next"}
              pageCount={totalPages}
              forcePage={page - 1}
              onPageChange={handlePageChange}
              containerClassName={"flex justify-center gap-2 flex-wrap"}
              pageClassName={
                "px-3 py-1 rounded-lg hover:bg-purple-100 cursor-pointer"
              }
              activeClassName={"bg-purple-500 text-white"}
              previousClassName={
                "px-3 py-1 rounded-lg hover:bg-purple-100 cursor-pointer"
              }
              nextClassName={
                "px-3 py-1 border rounded-lg hover:bg-purple-100 cursor-pointer"
              }
              disabledClassName={"opacity-50 cursor-not-allowed"}
            />
          </>
        )}
      </main>
    </>
  );
}
