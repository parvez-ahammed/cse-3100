import "./About.css"
export default function About() {
  return (
    <div className="about">
      <h2>About Rick & Morty Explorer</h2>
      <p className="aboutApp">
       'Rick & Morty Explorar' is an app about the characters of the series 'Rick & Morty'.
        Using the features of this app user can search a character by name, filter characters based on their status(Alive, Dead, Unknown). Clicking the 'veiw details' button under every
         character card will route to the character details page where more info about the character is provided. 
      </p>
       <div className="developer">
           <p>This project was developed as part of an assignment for the students of 3rd year first semester of AUST CSE. HTML, CSS, JS and REACT was 
           used to build this project.</p>
       </div>
           <h4>Favourite Quote</h4>
           <p className="quote">“To live is to risk it all; otherwise you’re just an inert chunk of randomly 
            assembled molecules drifting wherever the universe blows you…”</p>
       <div>

       </div>
    </div>

   
  );
}
