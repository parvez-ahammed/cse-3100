import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import FilterBar from "../components/FilterBar";
import CharacterCard from "../components/CharacterCard";
import { Link } from "react-router-dom";



export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState(null); 
  const [searchParams, setSearchParams] = useSearchParams();


  useEffect(() => {
  const name = searchParams.get("name") || "";
  const status = searchParams.get("status") || "";
  const page = searchParams.get("page") || 1;

  const query = `https://rickandmortyapi.com/api/character/?page=${page}&name=${name}&status=${status}`;

  fetch(query)
    .then((res) => res.json())
    .then((data) => {
      if (data.results) {
        setCharacters(data.results);
        setInfo(data.info); 
      } else {
        setCharacters([]);
        setInfo(null);
      }
    });
}, [searchParams]);


  return (
  <main className="container">
    <h1 className="my-4">Rick & Morty Explorer</h1>

      <Link to="/contact" className="btn btn-primary mb-4">
        Contact Us
      </Link>


    <FilterBar />

    <div className="row">
      {characters.length > 0 ? (
        characters.slice(0, 10).map((char) => (
          <div className="col-md-4 mb-4" key={char.id}>
            <CharacterCard character={char} />
          </div>
        ))
      ) : (
        <p>No characters found.</p>
      )}
    </div>

    <div className="d-flex justify-content-between my-4">
      <button
        className="btn btn-secondary"
        onClick={() => {
          const current = parseInt(searchParams.get("page") || 1);
          if (current > 1) {
            const params = new URLSearchParams(searchParams);
            params.set("page", current - 1);
            setSearchParams(params);
          }
        }}
        disabled={!info?.prev}
      >
        ← Previous
      </button>

      <button
        className="btn btn-secondary"
        onClick={() => {
          const current = parseInt(searchParams.get("page") || 1);
          if (info?.next) {
            const params = new URLSearchParams(searchParams);
            params.set("page", current + 1);
            setSearchParams(params);
          }
        }}
        disabled={!info?.next}
      >
        Next →
      </button>
    </div>
  </main>
);

}
