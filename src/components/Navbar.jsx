import {Link} from "react-router-dom";
import "./Navbar.css"

export default function Navbar(){
    return(
        <nav className="navbar">
         <p>Rick & Morty Explorar</p>
         <div className="navbarLink">
         <Link to="/">Home</Link>
         <Link to="/about">About</Link>
         <Link to="/contact">Contact</Link>
         </div>
        </nav>
    );
}