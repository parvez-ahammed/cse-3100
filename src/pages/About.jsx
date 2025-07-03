import pic from "../assets/pic.jpg";
export default function About() {
  return (
    <div className="container my-4">
      <h1>About Rick & Morty Explorer</h1>
      <p>
        This is a simple React app that lets you browse characters from the Rick
        & Morty universe.
      </p>

      <h2>Made by:</h2>
      <img src={pic} alt="" />

      <h2>Favorite Rick and Morty Quote:</h2>
      <p>
        Luba dub dub <br></br> (I dont watch Rick and Morty)
      </p>
    </div>
  );
}
