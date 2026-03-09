import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { siteContent } from '../data/siteContent';

const Template1Layout = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const location = useLocation();

    // Close menu when route changes
    useEffect(() => {
        setIsOpen(false);
        setActiveDropdown(null);
        window.scrollTo(0, 0);
    }, [location.pathname]);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);

    const toggleDropdown = (name) => {
        if (activeDropdown === name) {
            setActiveDropdown(null);
        } else {
            setActiveDropdown(name);
        }
    };

    const mainNavLinks = [
        { name: 'Know About Us', href: '/template1/about' },
        { name: 'People & Culture', href: '/template1/culture' },
    ];

    const servicesLinks = siteContent.services.list.map(s => ({
        name: s.title, href: `/template1/services/${s.id}`
    }));

    const workWithUsLinks = [
        { name: 'Careers', href: '/template1/careers' },
        { name: 'Collaborations', href: '/template1/collaborations' },
    ];

    const extraNavLinks = [
        { name: 'Our Works', href: '/template1/works' },
        { name: 'Insights', href: '/template1/insights' },
    ];

    // Nutrihub Style: Clean, white/forest green, highly structured
    return (
        <div className="min-h-screen flex flex-col font-sans text-gray-800 bg-white">
            {/* Header / Navbar */}
            <header className={`fixed w-full z-40 transition-all duration-300 border-b ${scrolled ? 'bg-white shadow-sm border-gray-200 py-2' : 'bg-white/95 backdrop-blur-md border-transparent py-4'}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <div className="flex-shrink-0 flex items-center">
                            <Link to="/template1" className="flex items-center">
                                <img src="/logos/4.svg" alt="Insights Value Hub" className="h-14 w-auto object-contain" />
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden xl:flex space-x-6 items-center">
                            {mainNavLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    className={`text-[15px] font-semibold transition-colors ${location.pathname === link.href ? 'text-brand-green' : 'text-gray-700 hover:text-brand-green'}`}
                                >
                                    {link.name}
                                </Link>
                            ))}

                            {/* Services Dropdown */}
                            <div className="relative group">
                                <button className="flex items-center text-[15px] font-semibold text-gray-700 hover:text-brand-green transition-colors focus:outline-none py-2">
                                    Services <ChevronDownIcon className="ml-1 w-4 h-4" />
                                </button>
                                <div className="absolute left-0 mt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 transform origin-top-left group-hover:translate-y-0 translate-y-2">
                                    <div className="bg-white rounded-lg shadow-xl ring-1 ring-black ring-opacity-5 overflow-hidden border border-gray-100 divide-y divide-gray-50">
                                        {servicesLinks.map((link) => (
                                            <Link
                                                key={link.name}
                                                to={link.href}
                                                className={`block px-4 py-3 text-sm transition-colors ${location.pathname === link.href ? 'bg-brand-green/5 text-brand-green font-bold' : 'text-gray-700 hover:bg-gray-50 hover:text-brand-green'}`}
                                            >
                                                {link.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {extraNavLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    className={`text-[15px] font-semibold transition-colors ${location.pathname === link.href ? 'text-brand-green' : 'text-gray-700 hover:text-brand-green'}`}
                                >
                                    {link.name}
                                </Link>
                            ))}

                            {/* Work With Us Dropdown */}
                            <div className="relative group">
                                <button className="flex items-center text-[15px] font-semibold text-gray-700 hover:text-brand-green transition-colors focus:outline-none py-2">
                                    Work With Us <ChevronDownIcon className="ml-1 w-4 h-4" />
                                </button>
                                <div className="absolute left-0 mt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 transform origin-top-left group-hover:translate-y-0 translate-y-2">
                                    <div className="bg-white rounded-lg shadow-xl ring-1 ring-black ring-opacity-5 overflow-hidden border border-gray-100 divide-y divide-gray-50">
                                        {workWithUsLinks.map((link) => (
                                            <Link
                                                key={link.name}
                                                to={link.href}
                                                className={`block px-4 py-3 text-sm transition-colors ${location.pathname === link.href ? 'bg-brand-green/5 text-brand-green font-bold' : 'text-gray-700 hover:bg-gray-50 hover:text-brand-green'}`}
                                            >
                                                {link.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </nav>

                        {/* Desktop CTA */}
                        <div className="hidden xl:flex items-center">
                            <Link
                                to="/template1/contact"
                                className={`px-5 py-2.5 rounded-md font-bold text-sm transition-all duration-300 ${location.pathname === '/template1/contact' ? 'bg-brand-dark text-white' : 'bg-brand-green text-white hover:bg-brand-dark hover:shadow-md'}`}
                            >
                                Find Us At
                            </Link>
                        </div>

                        {/* Mobile menu button */}
                        <div className="flex items-center xl:hidden">
                            <button
                                onClick={toggleMenu}
                                className="text-gray-700 hover:text-brand-green focus:outline-none transition-colors"
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
                <div className={`xl:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 transition-all duration-300 origin-top overflow-hidden ${isOpen ? 'max-h-[80vh] opacity-100 overflow-y-auto' : 'max-h-0 opacity-0'}`}>
                    <div className="px-4 pt-2 pb-6 space-y-1">
                        {mainNavLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.href}
                                className="block px-3 py-3 rounded-md text-base font-medium text-gray-800 hover:text-brand-green hover:bg-gray-50"
                            >
                                {link.name}
                            </Link>
                        ))}

                        {/* Mobile Services Dropdown */}
                        <div>
                            <button
                                onClick={() => toggleDropdown('services')}
                                className="flex items-center justify-between w-full px-3 py-3 rounded-md text-base font-medium text-gray-800 hover:text-brand-green hover:bg-gray-50 focus:outline-none"
                            >
                                Services
                                <ChevronDownIcon className={`w-5 h-5 transition-transform ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
                            </button>
                            <div className={`pl-6 pr-3 space-y-1 overflow-hidden transition-all duration-300 ${activeDropdown === 'services' ? 'max-h-96 py-2' : 'max-h-0'}`}>
                                {servicesLinks.map((link) => (
                                    <Link key={link.name} to={link.href} className="block px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-brand-green hover:bg-brand-green/5">
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {extraNavLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.href}
                                className="block px-3 py-3 rounded-md text-base font-medium text-gray-800 hover:text-brand-green hover:bg-gray-50"
                            >
                                {link.name}
                            </Link>
                        ))}

                        {/* Mobile Work With Us Dropdown */}
                        <div>
                            <button
                                onClick={() => toggleDropdown('work')}
                                className="flex items-center justify-between w-full px-3 py-3 rounded-md text-base font-medium text-gray-800 hover:text-brand-green hover:bg-gray-50 focus:outline-none"
                            >
                                Work With Us
                                <ChevronDownIcon className={`w-5 h-5 transition-transform ${activeDropdown === 'work' ? 'rotate-180' : ''}`} />
                            </button>
                            <div className={`pl-6 pr-3 space-y-1 overflow-hidden transition-all duration-300 ${activeDropdown === 'work' ? 'max-h-40 py-2' : 'max-h-0'}`}>
                                {workWithUsLinks.map((link) => (
                                    <Link key={link.name} to={link.href} className="block px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-brand-green hover:bg-brand-green/5">
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <div className="pt-4 border-t border-gray-100 mt-4">
                            <Link
                                to="/template1/contact"
                                className="block w-full text-center bg-brand-green text-white px-4 py-3 rounded-md font-bold text-base hover:bg-brand-dark transition-colors"
                            >
                                Find Us At
                            </Link>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content (Outlet renders the matched child route) */}
            <main className="flex-grow pt-[88px]">
                <Outlet />
            </main>

            {/* Footer */}
            <footer className="bg-slate-900 border-t border-slate-800 text-white pt-16 pb-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                        <div className="lg:col-span-1">
                            {/* Filtering logo to white for dark footer */}
                            <img src="/logos/4.svg" alt="Insights Value Hub" className="h-14 w-auto brightness-0 invert opacity-90 mb-6" />
                            <p className="text-slate-400 text-sm leading-relaxed mb-6 font-light">
                                {siteContent.global.tagline}
                            </p>
                            <div className="flex space-x-4">
                                <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-brand-green hover:text-white transition-colors">
                                    <span className="sr-only">LinkedIn</span>
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                                </a>
                                <a href="#" className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-brand-green hover:text-white transition-colors">
                                    <span className="sr-only">Twitter</span>
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
                                </a>
                            </div>
                        </div>

                        <div>
                            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Organization</h4>
                            <ul className="space-y-3">
                                {mainNavLinks.map(link => (
                                    <li key={link.name}>
                                        <Link to={link.href} className="text-slate-400 hover:text-brand-green transition-colors text-sm">{link.name}</Link>
                                    </li>
                                ))}
                                {workWithUsLinks.map(link => (
                                    <li key={link.name}>
                                        <Link to={link.href} className="text-slate-400 hover:text-brand-green transition-colors text-sm">{link.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Services</h4>
                            <ul className="space-y-3">
                                {servicesLinks.slice(0, 5).map(link => (
                                    <li key={link.name}>
                                        <Link to={link.href} className="text-slate-400 hover:text-brand-green transition-colors text-sm truncate block">{link.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-bold text-white mb-6 uppercase tracking-wider text-sm">Contact Us</h4>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-brand-green mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                    <a href={`mailto:${siteContent.global.contactEmail}`} className="text-slate-400 hover:text-white transition-colors text-sm">{siteContent.global.contactEmail}</a>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-brand-green mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                    <span className="text-slate-400 text-sm">{siteContent.global.contactPhone}</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-5 h-5 text-brand-green mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                    <span className="text-slate-400 text-sm">Hyderabad, India</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center">
                        <p className="text-slate-500 text-sm mb-4 md:mb-0">
                            &copy; {new Date().getFullYear()} {siteContent.global.brandName}. All rights reserved.
                        </p>
                        <div className="flex space-x-6">
                            <a href="#" className="text-slate-500 hover:text-white transition-colors text-sm">Privacy Policy</a>
                            <a href="#" className="text-slate-500 hover:text-white transition-colors text-sm">Terms of Service</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Template1Layout;
