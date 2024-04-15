import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
    return (
        <footer className="relative bottom-0 w-full bg-gray-800 text-white p-4">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center">
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                    <Link to="/" className="text-white">Home</Link>
                    <Link to="/about" className="text-white">About</Link>
                    <Link to="/contact" className="text-white">Contact</Link>
                </div>
                <div className="flex space-x-4 mt-4 md:mt-0">
                    <a href="https://www.linkedin.com/in/aakash-pabbathi-32663921a/" className="text-white hover:text-gray-400" target="_blank">
                        <i className="fa-brands fa-linkedin"></i>
                    </a>
                    <a href="https://twitter.com/example" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400" >
                        <i className="fa-brands fa-twitter"></i>
                    </a>
                    <a href="https://github.com/aakashsaibalaji" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
                        <i className="fa-brands fa-github"></i>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
