import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function CharacterDetail() {
  //from getting dynamic id 
  const { id } = useParams();
  //to store our character data
  const [character, setCharacter] = useState(null);
    // State to manage the loading UI
    const [loading, setLoading] = useState(true);
    // State to handle any API fetch errors
    const [error, setError] = useState(null);
//fetch data specific character er jonno
  useEffect(() => {
    setLoading(true);
    fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then((res) => {
      //for HTTP errors like 404 Not Found
      if (!res.ok) {
        throw new Error("Character not found");
      }
      return res.json();
    })
    .then((data) => {
      setCharacter(data);
      setError(null); // Clear previous errors on success
    })
    .catch((err) => {
      // Catch network or thrown errors
      setError(err.message);
      setCharacter(null);
    })
    .finally(() => {
      // This always runs, perfect for turning off the loading state
      setLoading(false);
    });
  }, [id]); //this dependency used to run this effect again jodi id change hoy
// to show loading while we wait
if (loading) {
  return <div className="container my-4 text-center"><p>Loading...</p></div>;
}
//jodi fetch fail hoy
if (error) {
  return <div className="container my-4 text-center"><p>Error: {error}</p></div>;
}
//character exist korena
// If loading is done but there's no character, render nothing
if (!character) {
  return null;
}
//data pawar por to display it
return (
  <div className="container my-5">
    {/* This is the main white container card */}
    <div className="character-detail-main-box">
      {/* This new row creates the main two-column layout */}
      <div className="row">

        {/* --- Left Column: Image and Name --- */}
        <div className="col-md-4 text-center">
          <img
            src={character.image}
            alt={character.name}
            className="img-fluid rounded mb-3" // Added margin-bottom
            // white border to the image to make it stand out
            style={{ border: "3px solid white", boxShadow: "0 4px 8px rgba(0,0,0,0.1)" }}
          />
          <h2 className="h4">{character.name}</h2> {/* Made name slightly smaller to fit well */}
        </div>

        {/* --- Right Column: Details Table --- */}
        <div className="col-md-8">
          {/* This new div will act as our "table" container */}
          <div className="detail-table">

            {/* --- Status Pair --- */}
            <div className="detail-pair">
              <div className="detail-label"><strong>Status:</strong></div>
              <div className="detail-value">{character.status}</div>
            </div>

            {/* --- Species Pair --- */}
            <div className="detail-pair">
              <div className="detail-label"><strong>Species:</strong></div>
              <div className="detail-value">{character.species}</div>
            </div>

            {/* --- Origin Pair --- */}
            <div className="detail-pair">
              <div className="detail-label"><strong>Origin:</strong></div>
              <div className="detail-value">{character.origin.name}</div>
            </div>
            
            {/* --- Location Pair --- */}
            <div className="detail-pair">
              <div className="detail-label"><strong>Last known location:</strong></div>
              <div className="detail-value">{character.location.name}</div>
            </div>
            
            {/* --- Episodes Pair --- */}
            <div className="detail-pair">
              <div className="detail-label"><strong>Number of episodes:</strong></div>
              {/* The API gives an array of episode URLs, so we use its length */}
              <div className="detail-value">{character.episode.length}</div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </div>
);
}