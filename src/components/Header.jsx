import "./Header.css";

export default function Header() {
  return (
    <nav className="navbar">
      <div className="container">
        <h2>Rick & Morty Explorer</h2>
        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">Contact</a>
        </div>
      </div>
    </nav>
  );
}
