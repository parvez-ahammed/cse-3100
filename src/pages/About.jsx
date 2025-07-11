import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
export default function About() {
  return (
    <div>
      <NavBar></NavBar>
      <h2>About Rick & Morty Explorer</h2>
      <p>
        This is a simple React app that lets you browse characters from the Rick
        & Morty universe. Built with students of CSE-3100.
      </p>
      <Footer></Footer>
    </div>
  );
}
