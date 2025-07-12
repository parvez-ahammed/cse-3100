import "../styles/About.css";
import doggy1 from "../assets/doggy_1.jpeg";
import doggy2 from "../assets/doggy_2.jpeg";
import doggy3 from "../assets/doggy_3.jpeg";
import doggy4 from "../assets/doggy_4.jpeg";

export default function About() {
  return (
    <div className="about-container">
      <section className="about-section">
        <h2>About Rick & Morty Explorer</h2>
        <p className="about-text">
          This is a simple React app that lets you browse characters from the Rick &
          Morty universe. Built with students of CSE-3100.<br /><br />
          This was build using react js and css,I also used bootstrap and took help of ai(Gemini).<br /><br />
          The main purpose of this website is to help visitors know about the characters of the popular animated show "Rick and Morty".
        </p>
      </section>

      <section className="about-section">
        <h2>Editor</h2>
        <p className="about-text">
          <strong>Name:</strong> Sadeed Rahman<br />
          <strong>ID:</strong> 20220204081<br />
          <strong>Semester:</strong> 3.1
        </p>
      </section>

      <section className="about-section">
        <h2>Edited Features</h2>
        <p className="about-text">
          <strong>1)</strong> Added Pagination so it shows at most 10 characters per page(Home page)<br />
          <strong>2)</strong> Search bar added among select filters like Dead/Alive and Species type(Home page)<br />
          <strong>3)</strong> Added conditions to check for a valid mail (Contact page)<br />
          <strong>4)</strong> Made the pages responsive(adjusts itself based on screen size)<br />
          <strong>5)</strong> Navigation Bar added to the pages through Routing (Contact page)<br />
          <strong>6</strong> Character Detail page updated which can be accessed by clicking on the View Details button on Home Page.It's shows that characters info.<br />
           <strong>7)</strong> Seperated the structure(.jsx) and design(.css) functionalities<br />
           <strong>8)</strong> Added a dropdown menu on episode no. on Character Card which shows the episodes on which they appeared.

        </p>
      </section>

      <section className="about-section">
        <h2>Chihuahuas</h2>
         <p className="about-text">
         As I have never watched that show yet,today I'm gonna talk about my favourite animal,Chihuahuas.<br /><br />
         I am fascinated by Chihuahuas.They are so pretty.I wish to buy a Chihuahua one day.
        </p>
        <div className="doggy-gallery">
          <img src={doggy1} alt="Doggy 1" />
          <img src={doggy2} alt="Doggy 2" />
          <img src={doggy3} alt="Doggy 3" />
          <img src={doggy4} alt="Doggy 4" />
        </div>
      </section>
    </div>
  );
}
