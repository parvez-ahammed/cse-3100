import React from 'react';
import { useNavigate } from 'react-router-dom';

function Navbar() {
    const navigate = useNavigate();

    return (
        <nav className="bg-gray-800 p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="text-white text-xl font-semibold cursor-pointer" onClick={() => navigate('/')}>
                    Assignment-1
                </div>

                <div className="space-x-6">
                    <button
                        onClick={() => navigate('/')}
                        className="text-white hover:text-yellow-400"
                    >
                        Home
                    </button>
                    <button
                        onClick={() => navigate('/contact')}
                        className="text-white hover:text-yellow-400"
                    >
                        Contact
                    </button>
                    <button
                        onClick={() => navigate('/about')}
                        className="text-white hover:text-yellow-400"
                    >
                        About
                    </button>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
