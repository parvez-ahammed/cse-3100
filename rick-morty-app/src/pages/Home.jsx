import { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import CharacterCard from "../components/CharacterCard";

export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();


  const nameFilter = searchParams.get("name") || "";
  const statusFilter = searchParams.get("status") || "";
  const page = Number(searchParams.get("page")) || 1;


  const [name, setName] = useState(nameFilter);
  const [status, setStatus] = useState(statusFilter);

  useEffect(() => {
    let apiUrl = `https://rickandmortyapi.com/api/character/?page=${page}`;
    if (nameFilter) apiUrl += `&name=${nameFilter}`;
    if (statusFilter) apiUrl += `&status=${statusFilter}`;

    const fetchCharacters = async () => {
      try {
        const res = await fetch(apiUrl);
        const data = await res.json();
        if (data.results) {
          setCharacters(data.results);
        } else {
          setCharacters([]);
        }
      } catch (error) {
        setCharacters([]);
      }
    };

    fetchCharacters();
  }, [nameFilter, statusFilter, page]);

 
  const handleSubmit = (e) => {
    e.preventDefault();
    const params = {};
    if (name.trim() !== "") params.name = name.trim();
    if (status !== "") params.status = status;
    params.page = 1; 
    setSearchParams(params);
  };


  const goToPage = (newPage) => {
    const params = {};
    if (name.trim() !== "") params.name = name.trim();
    if (status !== "") params.status = status;
    params.page = newPage;
    setSearchParams(params);
  };

  return (
    <div className="container my-5 text-center">
      <h2 className="mb-4">Explore Characters</h2>

      <form className="mb-3 d-flex justify-content-center gap-3" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search by Name"
          className="form-control"
          style={{ maxWidth: "300px" }}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <select
          className="form-select"
          style={{ maxWidth: "150px" }}
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="">All Status</option>
          <option value="alive">Alive</option>
          <option value="dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>

        <button type="submit" className="btn btn-primary">
          Filter
        </button>
      </form>

      <div className="row justify-content-center">
        {characters.length === 0 ? (
          <p>No Characters Found.</p>
        ) : (
          characters.map((char) => (
            <div
              key={char.id}
              className="col-md-4 mb-4 d-flex justify-content-center"
              style={{ cursor: "pointer" }}
              onClick={() => navigate(`/character/${char.id}`)}
            >
              <CharacterCard character={char} />
            </div>
          ))
        )}
      </div>

   
      <div className="d-flex justify-content-center gap-3 my-4">
        <button
          className="btn btn-primary"
          disabled={page <= 1}
          onClick={() => goToPage(page - 1)}
        >
          Previous
        </button>

        <span className="align-self-center">Page {page}</span>

        <button
          className="btn btn-primary"
          disabled={characters.length < 10} 
          onClick={() => goToPage(page + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}
