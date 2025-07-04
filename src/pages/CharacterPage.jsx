"use client";

import React, { useEffect, useState } from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import CharContext from "./Verti_char/CharContext";

export default function CharacterPage() {
  const [search, setSearch] = useState(() => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("characterSearch") || "";
  }
  return "";
});

useEffect(() => {
  localStorage.setItem("characterSearch", search);
}, [search]);
  const [filterStatus, setFilterStatus] = useState("");
  const [filterSpecies, setFilterSpecies] = useState("");
  const [cp, setCp] = useState(1);
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(false);

  const itemsPerPage = 9;

  const fetchCharacters = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (search) params.append("name", search);
      if (filterStatus) params.append("status", filterStatus);
      if (filterSpecies) params.append("species", filterSpecies);

      const url = `https://rickandmortyapi.com/api/character?${params.toString()}`;
      const response = await fetch(url);
      const json = await response.json();

      // If no results or error:
      const results = json.results || [];

      const formatted = results.map((char) => ({
        category: `${char.species} - ${char.status}`,
        title: char.name,
        src: char.image,
        content: <CharContext character={char} direction="row" />,
      }));

      setCharacters(formatted);
      setCp(1); // reset page
    } catch (err) {
      console.error("Fetch error:", err);
      setCharacters([]);
      setCp(1);
    } finally {
      setLoading(false);
    }
  };

  // Fetch when search or filters change:
  useEffect(() => {
    fetchCharacters();
  }, [search, filterStatus, filterSpecies]);

  const totalPages = Math.ceil(characters.length / itemsPerPage);
  const start = (cp - 1) * itemsPerPage;
  const displayed = characters.slice(start, start + itemsPerPage);

  const cards = displayed.map((card, idx) => (
    <Card key={card.src} card={card} index={idx} layout={true} />
  ));

  return (
    <div className="min-h-screen bg-black text-white px-6 py-10">
        <div className=" flex flex-col md:flex-row gap-4 mb-6 items-center">
         <input
           type="text"
          placeholder="Search character..."
            className="w-full md:w-64 px-3 py-1.5 rounded-md bg-neutral-800 placeholder-gray-400 text-white text-sm"
           value={search}
           onChange={(e) => setSearch(e.target.value)}
         />
         <select
          className="px-3 py-1.5 rounded-md bg-neutral-800 text-white text-sm"
          value={filterStatus}
             onChange={(e) => setFilterStatus(e.target.value)}
         >
          <option value="">All Status</option>
          <option value="alive">Alive</option>
         <option value="dead">Dead</option>
             <option value="unknown">Unknown</option>
        </select>
        <select
      className="px-3 py-1.5 rounded-md bg-neutral-800 text-white text-sm"
      value={filterSpecies}
      onChange={(e) => setFilterSpecies(e.target.value)}
    >
    <option value="">All Species</option>
    <option value="Human">Human</option>
    <option value="Alien">Alien</option>
    <option value="Humanoid">Humanoid</option>
  </select>
</div>

      {/* --- Loading / No Result --- */}
      {loading ? (
        <p className="text-center py-20">Loading...</p>
      ) : characters.length === 0 ? (
        <p className="text-center py-20">No characters found.</p>
      ) : (
        <>
          {/* --- Carousel Grid --- */}
          <div className="h-screen overflow-hidden">
            <Carousel items={cards} rows={3} columns={3} direction="col" />
          </div>

          {/* --- Pagination --- */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-6 gap-2">
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCp(i + 1)}
                  className={`px-3 py-1 rounded-md ${
                    cp === i + 1 ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
                  }`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          )}
        </>
      )}
    </div>
  );
}
