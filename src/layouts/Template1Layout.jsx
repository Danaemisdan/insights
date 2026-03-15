import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { siteContent } from '../data/siteContent';

const Template1Layout = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState(null);
    const location = useLocation();

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
        setActiveDropdown(activeDropdown === name ? null : name);
    };

    const mainNavLinks = [
        { name: 'Know About Us', href: '/about' },
        { name: 'People & Culture', href: '/culture' },
    ];

    const servicesLinks = siteContent.services.list.map(s => ({
        name: s.title, href: `/services/${s.id}`
    }));

    const workWithUsLinks = [
        { name: 'Careers', href: '/careers' },
        { name: 'Collaborations', href: '/collaborations' },
    ];

    const extraNavLinks = [
        { name: 'Our Works', href: '/works' },
        { name: 'Insights', href: '/insights' },
    ];

    return (
        <div className="min-h-screen flex flex-col font-sans text-gray-800 bg-white">
            {/* Top accent bar */}
            <div className="h-1 bg-gradient-to-r from-brand-green via-brand-orange to-brand-green w-full fixed top-0 z-50"></div>

            {/* Header */}
            <header className={`fixed w-full z-40 transition-all duration-300 ${scrolled ? 'bg-white/98 shadow-md backdrop-blur-md py-0 top-0.5' : 'bg-white py-0.5 top-0.5'}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center">
                        {/* Logo - BIGGER & COLORFUL */}
                        <div className="flex-shrink-0 flex items-center">
                            <Link to="/" className="flex items-center py-1">
                                <img src="/logos/1_colorful.svg" alt="Insights Value Hub" className="h-20 md:h-32 w-auto object-contain transition-all duration-300" />
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden xl:flex items-center space-x-1">
                            {mainNavLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    className={`px-4 py-2 rounded-lg text-[14px] font-semibold transition-all duration-200 ${location.pathname === link.href ? 'text-white bg-brand-green shadow-md' : 'text-gray-700 hover:text-brand-green hover:bg-brand-green/5'}`}
                                >
                                    {link.name}
                                </Link>
                            ))}

                            {/* Services Dropdown */}
                            <div className="relative group">
                                <button className="flex items-center px-4 py-2 rounded-lg text-[14px] font-semibold text-gray-700 hover:text-brand-green hover:bg-brand-green/5 transition-all focus:outline-none">
                                    Services <ChevronDownIcon className="ml-1 w-4 h-4 group-hover:rotate-180 transition-transform" />
                                </button>
                                <div className="absolute left-0 mt-1 w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 pt-2">
                                    <div className="bg-white rounded-xl shadow-2xl ring-1 ring-black/5 overflow-hidden">
                                        <div className="h-1 bg-gradient-to-r from-brand-green to-brand-orange"></div>
                                        {servicesLinks.map((link) => (
                                            <Link
                                                key={link.name}
                                                to={link.href}
                                                className={`block px-5 py-3.5 text-sm font-medium transition-all border-b border-gray-50 last:border-0 ${location.pathname === link.href ? 'bg-brand-green/10 text-brand-green font-bold border-l-4 border-l-brand-green' : 'text-gray-700 hover:bg-brand-green/5 hover:text-brand-green hover:pl-7'}`}
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
                                    className={`px-4 py-2 rounded-lg text-[14px] font-semibold transition-all duration-200 ${location.pathname === link.href ? 'text-white bg-brand-green shadow-md' : 'text-gray-700 hover:text-brand-green hover:bg-brand-green/5'}`}
                                >
                                    {link.name}
                                </Link>
                            ))}

                            {/* Work With Us Dropdown */}
                            <div className="relative group">
                                <button className="flex items-center px-4 py-2 rounded-lg text-[14px] font-semibold text-gray-700 hover:text-brand-green hover:bg-brand-green/5 transition-all focus:outline-none">
                                    Work With Us <ChevronDownIcon className="ml-1 w-4 h-4 group-hover:rotate-180 transition-transform" />
                                </button>
                                <div className="absolute right-0 mt-1 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 pt-2">
                                    <div className="bg-white rounded-xl shadow-2xl ring-1 ring-black/5 overflow-hidden">
                                        <div className="h-1 bg-gradient-to-r from-brand-green to-brand-orange"></div>
                                        {workWithUsLinks.map((link) => (
                                            <Link
                                                key={link.name}
                                                to={link.href}
                                                className={`block px-5 py-3.5 text-sm font-medium transition-all border-b border-gray-50 last:border-0 ${location.pathname === link.href ? 'bg-brand-green/10 text-brand-green font-bold' : 'text-gray-700 hover:bg-brand-green/5 hover:text-brand-green hover:pl-7'}`}
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
                                to="/contact"
                                className="px-6 py-3 rounded-xl font-bold text-sm transition-all duration-300 bg-gradient-to-r from-brand-green to-brand-dark text-white hover:shadow-lg hover:shadow-brand-green/30 transform hover:-translate-y-0.5"
                            >
                                Find Us At
                            </Link>
                        </div>

                        {/* Mobile menu button */}
                        <div className="flex items-center xl:hidden">
                            <button
                                onClick={toggleMenu}
                                className="p-2 rounded-xl text-gray-700 hover:text-brand-green hover:bg-brand-green/5 focus:outline-none transition-colors"
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
                <div className={`xl:hidden absolute top-full left-0 w-full bg-white shadow-2xl border-t border-gray-100 transition-all duration-300 origin-top overflow-hidden ${isOpen ? 'max-h-[85vh] opacity-100 overflow-y-auto' : 'max-h-0 opacity-0'}`}>
                    <div className="px-4 pt-4 pb-6 space-y-1">
                        {mainNavLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.href}
                                className="block px-4 py-3 rounded-xl text-base font-medium text-gray-800 hover:text-brand-green hover:bg-brand-green/5"
                            >
                                {link.name}
                            </Link>
                        ))}

                        <div>
                            <button
                                onClick={() => toggleDropdown('services')}
                                className="flex items-center justify-between w-full px-4 py-3 rounded-xl text-base font-medium text-gray-800 hover:text-brand-green hover:bg-brand-green/5 focus:outline-none"
                            >
                                Services
                                <ChevronDownIcon className={`w-5 h-5 transition-transform ${activeDropdown === 'services' ? 'rotate-180' : ''}`} />
                            </button>
                            <div className={`pl-6 pr-3 space-y-1 overflow-hidden transition-all duration-300 ${activeDropdown === 'services' ? 'max-h-96 py-2' : 'max-h-0'}`}>
                                {servicesLinks.map((link) => (
                                    <Link key={link.name} to={link.href} className="block px-4 py-2.5 rounded-lg text-sm font-medium text-gray-600 hover:text-brand-green hover:bg-brand-green/5">
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {extraNavLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.href}
                                className="block px-4 py-3 rounded-xl text-base font-medium text-gray-800 hover:text-brand-green hover:bg-brand-green/5"
                            >
                                {link.name}
                            </Link>
                        ))}

                        <div>
                            <button
                                onClick={() => toggleDropdown('work')}
                                className="flex items-center justify-between w-full px-4 py-3 rounded-xl text-base font-medium text-gray-800 hover:text-brand-green hover:bg-brand-green/5 focus:outline-none"
                            >
                                Work With Us
                                <ChevronDownIcon className={`w-5 h-5 transition-transform ${activeDropdown === 'work' ? 'rotate-180' : ''}`} />
                            </button>
                            <div className={`pl-6 pr-3 space-y-1 overflow-hidden transition-all duration-300 ${activeDropdown === 'work' ? 'max-h-40 py-2' : 'max-h-0'}`}>
                                {workWithUsLinks.map((link) => (
                                    <Link key={link.name} to={link.href} className="block px-4 py-2.5 rounded-lg text-sm font-medium text-gray-600 hover:text-brand-green hover:bg-brand-green/5">
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <div className="pt-4 border-t border-gray-100 mt-4">
                            <Link
                                to="/contact"
                                className="block w-full text-center bg-gradient-to-r from-brand-green to-brand-dark text-white px-4 py-3.5 rounded-xl font-bold text-base hover:shadow-lg transition-all"
                            >
                                Find Us At
                            </Link>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content (padded for logo) */}
            <main className="flex-grow pt-[100px] md:pt-[136px]">
                <Outlet />
            </main>

            {/* Footer */}
            <footer className="bg-gradient-to-b from-slate-900 to-slate-950 text-white pt-20 pb-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                        <div className="lg:col-span-1">
                            <img src="/logos/1_colorful.svg" alt="Insights Value Hub" className="h-40 w-auto mb-6" />
                            <p className="text-slate-400 text-sm leading-relaxed mb-6 font-light">
                                {siteContent.global.tagline}
                            </p>
                            <div className="flex space-x-3">
                                <a href="#" className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-brand-green hover:text-white transition-all duration-300">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                                </a>
                                <a href="#" className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-brand-green hover:text-white transition-all duration-300">
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
                                    <span className="text-slate-400 text-sm">{siteContent.global.officeLocation}</span>
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
