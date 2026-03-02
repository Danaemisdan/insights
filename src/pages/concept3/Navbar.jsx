import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: 'Overview', href: '#overview' },
        { name: 'Initiatives', href: '#initiatives' },
        { name: 'Our Impact', href: '#impact' },
        { name: 'Leadership', href: '#leadership' },
    ];

    return (
        <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20 items-center">
                    {/* Logo Section */}
                    <div className="flex-shrink-0 flex items-center border-r border-gray-200 pr-6 h-full">
                        <Link to="/concept3" className="flex items-center">
                            <img src="/logos/4.svg" alt="Insights Value Hub Logo" className="h-12 w-auto" />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex flex-1 space-x-8 items-center pl-8 h-full">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-slate-600 hover:text-brand-green font-medium transition duration-200 text-sm tracking-wide flex items-center h-full border-b-2 border-transparent hover:border-brand-green"
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>

                    <div className="hidden md:flex items-center space-x-4">
                        <a
                            href="#contact"
                            className="bg-brand-dark text-white hover:bg-brand-green px-5 py-2 text-sm font-semibold transition duration-200"
                        >
                            Partner With Us
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex items-center md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-slate-600 hover:text-brand-dark focus:outline-none"
                            aria-expanded={isOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? (
                                <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                            ) : (
                                <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border-t border-gray-200 absolute w-full shadow-lg">
                    <div className="pt-2 pb-4 space-y-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="block pl-4 pr-4 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-brand-green"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <div className="px-4 py-3">
                            <a
                                href="#contact"
                                className="block text-center w-full bg-brand-dark text-white font-medium py-3 hover:bg-brand-green transition"
                                onClick={() => setIsOpen(false)}
                            >
                                Partner With Us
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;
