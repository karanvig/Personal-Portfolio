/* eslint-disable no-unused-vars */
import React from 'react';
import logo from "../assets/logo.png"
import { FaLinkedin, FaGithub } from 'react-icons/fa';



const NavbarComponent = () => {
    
    return (
        <nav className="p-4" >
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex-shrink-0">
                    <img src={logo} alt="Logo" className="h-full max-h-14" style={{ objectFit: 'contain',filter: 'invert(100%) brightness(0%)' }} />
                </div>
                <div className="flex space-x-4 text-3xl">
                  
                    <a
                        href="https://github.com/karanvig"
                        className="text-gray-700 hover:text-white"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaGithub />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/karan-vig-1462b71a3/"
                        className="text-gray-700 hover:text-white"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FaLinkedin />
                    </a>
                </div>
            </div>
        </nav>
    );
}

export default NavbarComponent;
