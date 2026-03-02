import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    const navLinks = [
        { name: 'Platform', href: '#platform' },
        { name: 'Nodes', href: '#nodes' },
        { name: 'Impact', href: '#impact' },
        { name: 'Innovators', href: '#innovators' },
    ];

    return (
        <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/90 backdrop-blur-md border-b border-brand-green/20 py-2' : 'bg-transparent py-4'}`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo Section */}
                    <div className="flex-shrink-0 flex items-center">
                        <Link to="/concept4" className="flex items-center">
                            <img src="/logos/1.svg" alt="Insights Value Hub Logo" className="h-12 w-auto brightness-0 invert" style={{ filter: 'brightness(0) invert(1)' }} />
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex flex-1 justify-center space-x-10 items-center">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-slate-300 hover:text-brand-yellow font-medium transition duration-300 text-sm tracking-widest relative group"
                            >
                                <span className="absolute -left-3 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-brand-yellow opacity-0 group-hover:opacity-100 transition-opacity blur-[1px]"></span>
                                {link.name}
                            </a>
                        ))}
                    </nav>

                    <div className="hidden md:flex items-center space-x-4">
                        <a
                            href="#contact"
                            className="bg-transparent border border-brand-yellow/50 text-brand-yellow hover:bg-brand-yellow/10 hover:shadow-[0_0_15px_rgba(234,179,8,0.3)] px-6 py-2 text-sm font-bold transition-all duration-300 rounded-sm"
                        >
                            Initialize
                        </a>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex items-center md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-slate-300 hover:text-brand-yellow focus:outline-none"
                            aria-expanded={isOpen}
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? (
                                <XMarkIcon className="block h-7 w-7" aria-hidden="true" />
                            ) : (
                                <Bars3Icon className="block h-7 w-7" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            {isOpen && (
                <div className="md:hidden bg-slate-950 border-t border-brand-green/20 absolute w-full shadow-2xl backdrop-blur-lg">
                    <div className="pt-4 pb-6 space-y-2 px-4">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="block px-4 py-3 text-base font-medium text-slate-300 hover:bg-slate-900 hover:text-brand-yellow rounded-sm transition-colors border-l-2 border-transparent hover:border-brand-yellow"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </a>
                        ))}
                        <div className="pt-4 px-4">
                            <a
                                href="#contact"
                                className="block text-center w-full bg-brand-yellow/10 text-brand-yellow border border-brand-yellow/30 font-medium py-3 rounded-sm hover:bg-brand-yellow/20 transition-colors shadow-[0_0_15px_rgba(234,179,8,0.15)]"
                                onClick={() => setIsOpen(false)}
                            >
                                Initialize Contact
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;
