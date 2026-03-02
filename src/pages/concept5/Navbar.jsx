import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: 'Our Journey', href: '#journey' },
        { name: 'The Ecosystem', href: '#ecosystem' },
        { name: 'Stories of Impact', href: '#impact' },
        { name: 'Who We Are', href: '#about' },
    ];

    return (
        <header className={`fixed w-full z-50 transition-all duration-500 ${scrolled ? 'bg-[#fbf8f1] shadow-md py-3' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center">
                    {/* Logo Section */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link to="/concept5" className="flex items-center">
                            {/* Using the standard logo; if on the dark image (not scrolled), we might prefer white, but for "warm" we assume a lighter overlay or just rely on the brand colors */}
                            <img src="/logos/1.svg" alt="Insights Value Hub Logo" className={`h-14 w-auto transition-transform duration-500 ${scrolled ? 'scale-90' : 'scale-100'}`} />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-10 items-center">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`font-serif text-[17px] transition-colors duration-300 ${scrolled ? 'text-[#5A4D43] hover:text-[#C5832B]' : 'text-white hover:text-[#F3E5AB] drop-shadow-md'}`}
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>

                    <div className="hidden md:flex items-center">
                        <a
                            href="#contact"
                            className={`px-6 py-2.5 rounded-full font-serif text-[16px] transition-all duration-300 border ${scrolled
                                    ? 'bg-[#C5832B] text-white border-[#C5832B] hover:bg-[#A36A20] hover:shadow-lg'
                                    : 'bg-transparent text-white border-white hover:bg-white hover:text-[#5A4D43] shadow-[0_4px_14px_0_rgba(0,0,0,0.15)]'
                                }`}
                        >
                            Connect With Us
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex items-center md:hidden">
                        <button
                            onClick={toggleMenu}
                            className={`focus:outline-none transition-colors duration-300 ${scrolled ? 'text-[#5A4D43]' : 'text-white drop-shadow-md'}`}
                            aria-expanded={isOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? (
                                <XMarkIcon className="block h-8 w-8" aria-hidden="true" />
                            ) : (
                                <Bars3Icon className="block h-8 w-8" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            {isOpen && (
                <div className="md:hidden bg-[#fbf8f1] border-t border-[#e8dfcf] absolute w-full shadow-xl">
                    <div className="pt-2 pb-6 space-y-1 px-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="block px-4 py-3 text-lg font-serif text-[#5A4D43] hover:bg-[#f2eadc] hover:text-[#C5832B] rounded-lg transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <div className="pt-4 px-4">
                            <a
                                href="#contact"
                                className="block text-center w-full bg-[#C5832B] text-white font-serif text-lg py-3 rounded-xl hover:bg-[#A36A20] transition-colors shadow-md"
                                onClick={() => setIsOpen(false)}
                            >
                                Connect With Us
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;
