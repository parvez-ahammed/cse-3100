import "../styles/Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Explore</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/characters">Characters</Link></li>
            <li><Link to="/episodes">Episodes</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Community</h4>
          <ul>
            <li><Link to="/fan-art">Fan Art</Link></li>
            <li><Link to="/discussion">Discussion Board</Link></li>
            <li><Link to="/memes">Memes</Link></li>
            <li><Link to="/events">Events</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Contributors</h4>
          <ul>
            <li><Link to="/contributors/rick-dev">Rick Dev</Link></li>
            <li><Link to="/contributors/morty-code">Morty Code</Link></li>
            <li><Link to="/contributors/summer-ux">Summer UX</Link></li>
            <li><Link to="/contributors/beth-designer">Beth Designer</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Rick & Morty Explorer. All rights reserved.</p>
      </div>
    </footer>
  );
}
