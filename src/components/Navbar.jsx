import { useState } from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return(
        <nav className=" fixed top-0 w-full bg-white shadow-md px-6 py-4 flex items center justify-between z-50">
            <div className="text-2xl font-bold text-gray-800">
                <Link to="/">Rick & Morty Explorer</Link>
            </div>
            <div className="hidden md:flex space-x-6 text-gray-600">
                <Link to="/" className=" hover:text-gray-800">Home</Link>
                <Link to="/about" className="hover:text-gray-800">About</Link>
                <Link to="/contact" className="hover:text-gray-800">Contact</Link>
            </div>
            <button 
                className="md:hidden text-gray-600 focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
            </button>
            {isOpen && (
                <div className="absolute top-16 left-0 w-full bg-white shadow-md md:hidden">
                    <div className="flex flex-col space-y-4 p-4 text-gray-600">
                        <Link to="/" className="hover:text-gray-800">Home</Link>
                        <Link to="/about" className="hover:text-gray-800">About</Link>
                        <Link to="/contact" className="hover:text-gray-800">Contact</Link>
                    </div>
                    </div>
                )}
        </nav>
            
    )
}