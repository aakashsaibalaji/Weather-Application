//import React from 'react'
import React from 'react';
import { Link } from 'react-router-dom';
const Header: React.FC = () => {
    return (
        <header className="bg-gray-800 p-4 relative top-0 w-full z-10 shadow">
            <nav className="flex flex-col md:flex-row items-center justify-between max-w-4xl mx-auto">
                <Link to="/" className="text-white text-xl font-bold mb-4 md:mb-0">Weather Application</Link>
                <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                    <li><Link to="/" className="text-white">Home</Link></li>
                    <li><Link to="/about" className="text-white">About</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
