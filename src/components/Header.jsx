import React, { useState, useEffect } from 'react';
import logo from "../assets/images/PK-logo.jpg";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    function handleClick() {
        setMenuOpen(!menuOpen);
    }

    useEffect(() => {
        function handleResize() {
            if (window.innerWidth >= 768) {
                setMenuOpen(false);
            }
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div>
            <header className="flex justify-around items-center px-5 py-3 mt-3" id="home">
                <a href="#home"><img src={logo} alt="Logo" className="h-[35px]" /></a>
                <nav>
                    <ul className="hidden md:flex gap-10 text-[24px]">
                        <li><a href="#about" className="hover:border-b-[3px] border-gray-400 hover:text-gray-400 ease-in-out">About</a></li>
                        <li><a href="#skill" className="hover:border-b-[3px] border-gray-400 hover:text-gray-400 ease-in-out">Skills</a></li>
                        <li><a href="#work" className="hover:border-b-[3px] border-gray-400 hover:text-gray-400 ease-in-out">Work</a></li>
                        <li><a href="#contact" className="hover:border-b-[3px] border-gray-400 hover:text-gray-400 ease-in-out">Contact</a></li>
                    </ul>
                    <button aria-label="Toggle menu" className="fa-solid fa-bars fa-2xl md:hidden relative cursor-pointer" onClick={handleClick}></button>
                    <ul className={`flex-col gap-5 text-[20px] text-right absolute right-[105px] top-16 py-[5px] px-5 bg-white rounded-lg transition-all duration-300 ${menuOpen ? 'flex' : 'hidden'}`} id="menu">
                        <li key="close"><p className='cursor-pointer' onClick={handleClick}>X</p></li>
                        <li key="about"><a href="#about" className="hover:border-b-[3px] border-gray-400 hover:text-gray-400 ease-in-out">About</a></li>
                        <li key="skill"><a href="#skill" className="hover:border-b-[3px] border-gray-400 hover:text-gray-400 ease-in-out">Skills</a></li>
                        <li key="work"><a href="#work" className="hover:border-b-[3px] border-gray-400 hover:text-gray-400 ease-in-out">Work</a></li>
                        <li key="contact"><a href="#contact" className="hover:border-b-[3px] border-gray-400 hover:text-gray-400 ease-in-out">Contact</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}

export default Header;
