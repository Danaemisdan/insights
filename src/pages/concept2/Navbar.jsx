import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: 'Home', href: '/concept2' },
        { name: 'About Us', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Insights', href: '#insights' },
    ];

    return (
        <header className="sticky top-0 z-50 bg-white shadow-md shadow-brand-green/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-24 items-center">
                    {/* Logo Section */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link to="/concept2" className="flex items-center">
                            <img src="/logos/1.svg" alt="Insights Value Hub Logo" className="h-16 md:h-20 w-auto" />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-10 items-center">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-brand-dark font-semibold hover:text-brand-green transition duration-200 text-sm uppercase tracking-wider relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-green transition-all duration-300 group-hover:w-full"></span>
                            </a>
                        ))}
                        <a
                            href="#contact"
                            className="bg-brand-dark text-white hover:bg-brand-green px-6 py-2 rounded-full font-bold transition duration-300 shadow-md"
                        >
                            Let's Connect
                        </a>
                    </nav>

                    {/* Mobile menu button */}
                    <div className="flex items-center md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-brand-dark hover:text-brand-green focus:outline-none focus:text-brand-green"
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
                <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl">
                    <div className="pt-2 pb-4 space-y-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="block pl-4 pr-4 py-3 text-base font-bold text-brand-dark hover:bg-gray-50 hover:text-brand-green transition-colors"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <div className="px-4 py-3">
                            <a
                                href="#contact"
                                className="block text-center w-full bg-brand-dark text-white font-bold py-3 rounded-full hover:bg-brand-green transition shadow-md"
                                onClick={() => setIsOpen(false)}
                            >
                                Let's Connect
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;
