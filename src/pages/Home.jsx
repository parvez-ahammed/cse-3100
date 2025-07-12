
import {useEffect,useState} from"react";
import CharacterCard from"../components/CharacterCard";


export default function Home() {
  const [characters,setcharacters]=useState([]);
  const [filtered,setfiltered]=useState([]);

  const [search,setsearch]=useState("");
  const [statusfilter,setstatfilt]=useState("");

 
  const [currentpage,setcurrpage]=useState(1);
  const itemsperpage=10;

  
  useEffect(() => {
    const fetchcharacters = async () => {
      const res = await fetch("https://rickandmortyapi.com/api/character");
      const data = await res.json();
      setcharacters(data.results);
      setfiltered(data.results);
    };

    fetchcharacters();
  }, []);

  
  useEffect(() => {
    const result= characters.filter((char) => {
      const namematch= char.name.toLowerCase().includes(search.toLowerCase());
      const statusmatch=statusfilter===""||char.status===statusfilter;
      return namematch && statusmatch;
    });
    setfiltered(result);
    setcurrpage(1); 
  }, [search, statusfilter,characters]);

 
  const totalpages=Math.ceil(filtered.length/itemsperpage);
  const startindex=(currentpage- 1)*itemsperpage;
  const currcharacters= filtered.slice(startindex,startindex+itemsperpage);

  const handlenext = () => {
    if (currentpage< totalpages) setcurrpage((prev) => prev + 1);
  };

  const handleprev = () => {
    if (currentpage> 1) setcurrpage((prev) => prev - 1);
  };

  return (

    <main className="container">
      <h1 className="my-4">Rick & Morty Explorer</h1>

      
      <div className="row mb-4">
        <div className="col-md-6 mb-2">
          <input
            type="text"
            placeholder="Search by name"
            className="form-control"
            value={search}
            onChange={(e)=>setsearch(e.target.value)}
          />
        </div>
        <div className="col-md-6 mb-2">
          <select
            className="form-select"
            value={statusfilter}
            onChange={(e)=> setstatfilt(e.target.value)}
          >
            <option value="">All Statuses</option>
            <option value="Alive">Alive</option>
            <option value="Dead">Dead</option>
            <option value="unknown">Unknown</option>
          </select>
        </div>
      </div>

     
      <div className="row">
        {currcharacters.map((char) => (
          <div className="col-md-4 mb-4" key={char.id}>
            <CharacterCard character={char} />
          </div>
        ))}
      </div>

      
      <div className="d-flex justify-content-between align-items-center my-4">
        <button
          className="btn btn-secondary"
          onClick={handleprev}
          disabled={currentpage === 1}
        >
          Previous
        </button>
        <span>
          Page {currentpage} of {totalpages}
        </span>
        <button
          className="btn btn-secondary"
          onClick={handlenext}
          disabled={currentpage === totalpages}
        >
          Next
        </button>
      </div>
    </main>
 
  );
}

