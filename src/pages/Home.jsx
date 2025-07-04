import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import CharacterCard from "../components/CharacterCard";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const page = parseInt(searchParams.get("page") )|| 1;
  const [totalPages, setTotalPages] = useState(1);
  const [name, setName] = useState(searchParams.get("name") || "");
  const [status, setStatus] = useState(searchParams.get("status") || "");
  const [search, setSearch] = useState(false);


  useEffect(() => {
    const fetchCharacters = async () => {
      const params = new URLSearchParams();
      if (name) params.set("name", name);
      if (status) params.set("status", status);
      const pageitems=Math.ceil(page/2);
      try{
        const res = await fetch(
          `https://rickandmortyapi.com/api/character?page=${pageitems}&${params.toString()}`
        );
        const data = await res.json();
        let Dataperpage=[];
        if(page%2)
        {
          Dataperpage=data.results?.slice(0,10)||[];
        }
        else
        {
          Dataperpage=data.results?.slice(10,20)||[];
        }
        setCharacters(Dataperpage);
        setTotalPages(data.info ? data.info.pages : 1);
        params.set("page", page); 
        setSearchParams(params);
        setSearch(false);
      } catch (error) {
        setCharacters([]);
        setTotalPages(1);
      }
    };

    fetchCharacters();
  }, [search, page, setSearchParams]);

  return (
    <main className="min-h-screen px-4 sm:px-8 lg:px-16 py-2 pb-32 bg-gray-50">
      <div className="flex flex-col gap-4 w-full mx-auto my-4">
        
            <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className=" w-full sm:w-60 border rounded-xl px-3 py-2 text-center focus:outline-none focus:ring-2 focus:ring-black"
          >
            <option value="">Select Status</option>
            <option value="alive">Alive</option>
            <option value="dead">Dead</option>
            <option value="unknown">Unknown</option>
          </select>
          
          <div className="relative w-full">
            <input
            type="text"
            placeholder="Search (by name)..."
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border rounded-xl px-3 py-2 sm:min-w-80 focus:outline-none focus:ring-2 focus:ring-black"
          />
          </div>
      
          <button
            className=" w-full sm:w-20 p-2 min-w-28 rounded-xl bg-gray-600 text-white font-medium hover:bg-gray-800 transition"
            onClick={() => {
              setSearchParams({ name, status, page: 1 });
              setSearch(true);
            }}
          >
            Search
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {characters.length > 0 ? (
            characters.map((char) => (
              <CharacterCard key={char.id} character={char} />
            ))
          ) : (
            <p className="col-span-full text-gray-500 py-auto text-center">
              No results found
            </p>
          )}
        </div>

        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 ">
          <Stack spacing={2}>
            <Pagination
              count={totalPages * 2} 
              page={page}
              onChange={(event, value) => {
                setSearchParams({ name, status, page: value });
                setSearch(true);
              }}
              variant="outlined"
              shape="circle"
            />
          </Stack>
        </div>
      
    </main>
  );
}
