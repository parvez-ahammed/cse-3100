import { useEffect, useState } from "react";
import CharacterCard from "../components/CharacterCard";
import { useSearchParams } from "react-router-dom";
import "./Home.css"
export default function Home() {
  const [characters, setCharacters] = useState([]);
  const [pageInfo, setPageInfo] =useState({});
  const [loading, setLoading] =useState(false);
  const [error, setError]= useState("");

  const [searchParams, setSearchParams]= useSearchParams();

  const name= searchParams.get("name") || "";
  const status= searchParams.get("status") || "";
  const localPage =parseInt(searchParams.get("localpage") || "1");
  const apiPage =parseInt(searchParams.get("apipage") || "1");
 
  const [inputName, setInputName] =useState(name);

  useEffect(() => {
    const fetchData = async () =>{
      setLoading(true);
      setError("");

       try{
      let url= `https://rickandmortyapi.com/api/character/?page=${apiPage}`;
      if(name) url += `&name=${name}`;
      if(status) url+= `&status=${status}`;
    

   
      const res =await fetch(url);
      if(!res.ok) throw new Error("No character fround");
      const data= await res.json();

      setCharacters(data.results);
      setPageInfo(data.info);
      
    }catch(error){
      setCharacters([]);
      setPageInfo({});
      setError(error.message);
    }finally{
      setLoading(false);
    }
  };

  fetchData();
}, [apiPage, name, status]);

const handleInputChange = (e) =>{
  const value= e.target.value;
  setInputName(value);

  if(value.trim()){
    searchParams.set("name", value.trim());
  }else{
    searchParams.delete("name");
  }

  searchParams.set("apipage", 1);
  searchParams.set("localpage", 1);
  setSearchParams(searchParams);
};

const handleStatusChange = (e) =>{
  searchParams.set("status", e.target.value);
  searchParams.set("apipage", 1);
   searchParams.set("localpage", 1);
  setSearchParams(searchParams);
};

const handleNext= () =>{
  if(localPage ===1){
    searchParams.set("localpage", 2);
  }else{
    searchParams.set("apipage", apiPage+1);
    searchParams.set("localpage", 1);
  }

  setSearchParams(searchParams);
};

const handlePrevious= () =>{
  if(localPage ===2){
    searchParams.set("localpage", 1);
  }else{
    searchParams.set("apipage", apiPage-1);
    searchParams.set("localpage", 2);
  }

  setSearchParams(searchParams);
  
};

const getCurrentCharacters= () =>{
  const start= localPage === 1?0:10;
  return characters.slice(start,start+10);

};

const disablePrevious =apiPage ===1 && localPage===1;
const disableNext= (!pageInfo.next && localPage ===2) || characters.length<11;




  return (
    <main className="container1">
     <div className="filters">
           <input type="text"
           value={inputName}
           onChange={handleInputChange}
             placeholder="Search name" />

           <select value={status} onChange={handleStatusChange}>
            <option value="">All Status</option>
            <option value="alive">Alive</option>
            <option value="dead">Dead</option>
            <option value="unknown">Unknown</option>
           </select>
     </div>
     { loading? (
      <p>Loading..</p>
     ) : error? (
      <p>{error}</p>
     ):(
  <div className="card-row">
        {getCurrentCharacters().map((char) => (
          <div className="" key={char.id}>
            <CharacterCard key={char.id} character={char} />
          </div>
        ))}
      </div>
     )
    }
    
    {!loading && !error && (
      <div className="pagination">
          <button onClick={handlePrevious} disabled={disablePrevious}>
            Previous
            </button>
            <span>
              Page {((apiPage-1)*2) + localPage}
            </span>
            <button onClick={handleNext} disabled={disableNext}>
              Next
            </button>
      </div>
    )}
   
    

      
    </main>
  );
};
