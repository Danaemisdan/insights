import React, { useState, useEffect } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { siteContent } from '../data/siteContent';

const Template2Layout = () => {
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
        if (activeDropdown === name) {
            setActiveDropdown(null);
        } else {
            setActiveDropdown(name);
        }
    };

    const mainNavLinks = [
        { name: 'Know About Us', href: '/template2/about' },
        { name: 'People & Culture', href: '/template2/culture' },
    ];

    const servicesLinks = siteContent.services.list.map(s => ({
        name: s.title, href: `/template2/services/${s.id}`
    }));

    const workWithUsLinks = [
        { name: 'Careers', href: '/template2/careers' },
        { name: 'Collaborations', href: '/template2/collaborations' },
    ];

    const extraNavLinks = [
        { name: 'Our Works', href: '/template2/works' },
        { name: 'Insights', href: '/template2/insights' },
    ];

    // Vibrant Style: Dynamic, gold/emerald, translucent headers
    return (
        <div className="min-h-screen flex flex-col font-sans text-gray-900 bg-[#f9faf6]">
            {/* Header / Navbar */}
            <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-lg py-2' : 'bg-white/80 backdrop-blur-md py-4'}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex-shrink-0 flex items-center">
                            <Link to="/template2" className="flex items-center group">
                                {/* Using logo 3 for vibrant? Let's stick to 2 as it was good for light themes, or 1 depending. */}
                                <img src="/logos/2.svg" alt="Insights Value Hub" className="h-[4.5rem] w-auto object-contain transition-transform group-hover:scale-105 duration-300" />
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden xl:flex space-x-6 items-center">
                            {mainNavLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.href}
                                    className={`text-[15px] font-bold uppercase tracking-wide transition-all ${location.pathname === link.href ? 'text-brand-green' : 'text-slate-600 hover:text-brand-yellow'}`}
                                >
                                    {link.name}
                                </Link>
                            ))}

                            <div className="relative group">
                                <button className="flex items-center text-[15px] font-bold uppercase tracking-wide text-slate-600 hover:text-brand-yellow transition-all focus:outline-none py-2">
                                    Services <ChevronDownIcon className="ml-1 w-4 h-4" />
                                </button>
                                {/* Distinctive Vibrant Dropdown */}
                                <div className="absolute left-0 mt-2 w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 transform origin-top group-hover:translate-y-0 translate-y-3">
                                    <div className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] overflow-hidden border-2 border-brand-yellow/20 relative">
                                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-yellow to-brand-green"></div>
                                        {servicesLinks.map((link) => (
                                            <Link
                                                key={link.name}
                                                to={link.href}
                                                className={`block px-5 py-3 transition-all border-b border-slate-50 last:border-0 ${location.pathname === link.href ? 'bg-gradient-to-r from-brand-yellow/10 to-transparent text-brand-dark font-black pl-6' : 'text-slate-600 hover:bg-slate-50 hover:text-brand-green hover:pl-6'}`}
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
                                    className={`text-[15px] font-bold uppercase tracking-wide transition-all ${location.pathname === link.href ? 'text-brand-green' : 'text-slate-600 hover:text-brand-yellow'}`}
                                >
                                    {link.name}
                                </Link>
                            ))}

                            <div className="relative group">
                                <button className="flex items-center text-[15px] font-bold uppercase tracking-wide text-slate-600 hover:text-brand-yellow transition-all focus:outline-none py-2">
                                    Work With Us <ChevronDownIcon className="ml-1 w-4 h-4" />
                                </button>
                                <div className="absolute left-0 mt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50 transform origin-top group-hover:translate-y-0 translate-y-3">
                                    <div className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] overflow-hidden border-2 border-brand-yellow/20 relative">
                                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-yellow to-brand-green"></div>
                                        {workWithUsLinks.map((link) => (
                                            <Link
                                                key={link.name}
                                                to={link.href}
                                                className={`block px-5 py-3 transition-all border-b border-slate-50 last:border-0 ${location.pathname === link.href ? 'bg-gradient-to-r from-brand-yellow/10 to-transparent text-brand-dark font-black pl-6' : 'text-slate-600 hover:bg-slate-50 hover:text-brand-green hover:pl-6'}`}
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
                                to="/template2/contact"
                                className="px-6 py-3 rounded-full font-black uppercase tracking-wider text-sm transition-all duration-300 bg-brand-yellow text-brand-dark hover:bg-brand-dark hover:text-brand-yellow hover:shadow-[0_10px_30px_rgba(234,179,8,0.3)] transform hover:-translate-y-1"
                            >
                                Find Us At
                            </Link>
                        </div>

                        {/* Mobile menu button */}
                        <div className="flex items-center xl:hidden">
                            <button
                                onClick={toggleMenu}
                                className="text-brand-dark hover:text-brand-green bg-slate-100 p-2 rounded-full focus:outline-none transition-colors"
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
                <div className={`xl:hidden absolute top-full left-0 w-full bg-white shadow-2xl transition-all duration-300 origin-top overflow-hidden border-b-4 border-brand-yellow ${isOpen ? 'max-h-screen opacity-100 overflow-y-auto' : 'max-h-0 opacity-0'}`}>
                    <div className="px-4 py-6 space-y-2">
                        {mainNavLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.href}
                                className="block px-4 py-3 rounded-xl text-lg font-bold text-slate-800 hover:text-brand-dark hover:bg-brand-yellow/20"
                            >
                                {link.name}
                            </Link>
                        ))}

                        <div className="bg-slate-50 rounded-xl p-2">
                            <button
                                onClick={() => toggleDropdown('services')}
                                className="flex items-center justify-between w-full px-2 py-2 rounded-lg text-lg font-bold text-slate-800 focus:outline-none"
                            >
                                Services
                                <div className={`p-1 rounded-full ${activeDropdown === 'services' ? 'bg-brand-yellow' : 'bg-slate-200'}`}>
                                    <ChevronDownIcon className={`w-5 h-5 transition-transform ${activeDropdown === 'services' ? 'rotate-180 text-brand-dark' : 'text-slate-600'}`} />
                                </div>
                            </button>
                            <div className={`pl-4 pr-2 space-y-1 overflow-hidden transition-all duration-300 ${activeDropdown === 'services' ? 'max-h-[500px] py-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                                {servicesLinks.map((link) => (
                                    <Link key={link.name} to={link.href} className="block px-4 py-3 rounded-lg text-sm font-bold text-slate-600 hover:text-brand-dark hover:bg-brand-yellow">
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        {extraNavLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={link.href}
                                className="block px-4 py-3 rounded-xl text-lg font-bold text-slate-800 hover:text-brand-dark hover:bg-brand-yellow/20"
                            >
                                {link.name}
                            </Link>
                        ))}

                        <div className="bg-slate-50 rounded-xl p-2">
                            <button
                                onClick={() => toggleDropdown('work')}
                                className="flex items-center justify-between w-full px-2 py-2 rounded-lg text-lg font-bold text-slate-800 focus:outline-none"
                            >
                                Work With Us
                                <div className={`p-1 rounded-full ${activeDropdown === 'work' ? 'bg-brand-green text-white' : 'bg-slate-200 text-slate-600'}`}>
                                    <ChevronDownIcon className={`w-5 h-5 transition-transform ${activeDropdown === 'work' ? 'rotate-180' : ''}`} />
                                </div>
                            </button>
                            <div className={`pl-4 pr-2 space-y-1 overflow-hidden transition-all duration-300 ${activeDropdown === 'work' ? 'max-h-64 py-4 opacity-100' : 'max-h-0 opacity-0'}`}>
                                {workWithUsLinks.map((link) => (
                                    <Link key={link.name} to={link.href} className="block px-4 py-3 rounded-lg text-sm font-bold text-slate-600 hover:text-white hover:bg-brand-green">
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                        </div>

                        <div className="pt-6 mt-4">
                            <Link
                                to="/template2/contact"
                                className="block w-full text-center bg-brand-dark text-brand-yellow px-4 py-4 rounded-xl font-black uppercase tracking-wider text-base hover:bg-brand-green hover:text-white transition-colors shadow-lg"
                            >
                                Find Us At
                            </Link>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="flex-grow pt-[96px]">
                <Outlet />
            </main>

            {/* Footer Vibrant */}
            <footer className="bg-brand-dark text-white pt-20 pb-10 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-green rounded-full blur-[120px] opacity-20 transform translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
                        <div className="md:col-span-12 lg:col-span-4">
                            <div className="bg-white inline-block p-4 rounded-2xl mb-8">
                                <img src="/logos/2.svg" alt="Insights Value Hub" className="h-12 w-auto" />
                            </div>
                            <p className="text-brand-yellow font-bold text-lg leading-relaxed mb-8 max-w-sm">
                                {siteContent.global.tagline}
                            </p>
                            <div className="flex gap-4">
                                <a href="#" className="w-12 h-12 rounded-full border-2 border-brand-yellow flex items-center justify-center text-brand-yellow hover:bg-brand-yellow hover:text-brand-dark transition-all duration-300 transform hover:-translate-y-1">
                                    <span className="sr-only">LinkedIn</span>
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                                </a>
                            </div>
                        </div>

                        <div className="md:col-span-4 lg:col-span-3">
                            <h4 className="font-black text-xl mb-6 relative inline-block">
                                Explore
                                <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-brand-yellow"></span>
                            </h4>
                            <ul className="space-y-4">
                                {[...mainNavLinks, ...extraNavLinks].map(link => (
                                    <li key={link.name}>
                                        <Link to={link.href} className="text-gray-300 hover:text-brand-yellow font-medium transition-colors inline-block transform hover:translate-x-2 duration-300">{link.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="md:col-span-8 lg:col-span-5">
                            <div className="bg-brand-green/20 border border-brand-green/30 rounded-3xl p-8 backdrop-blur-sm">
                                <h4 className="font-black text-2xl text-white mb-6">Initiate Contact</h4>
                                <ul className="space-y-6">
                                    <li className="flex items-start">
                                        <div className="w-12 h-12 rounded-xl bg-brand-green flex items-center justify-center mr-4 flex-shrink-0 shadow-lg">
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                        </div>
                                        <div>
                                            <span className="block text-brand-yellow font-bold text-sm uppercase tracking-wider mb-1">Email Connection</span>
                                            <a href={`mailto:${siteContent.global.contactEmail}`} className="text-white hover:text-brand-yellow transition-colors font-medium text-lg break-all">{siteContent.global.contactEmail}</a>
                                        </div>
                                    </li>
                                    <li className="flex items-start">
                                        <div className="w-12 h-12 rounded-xl bg-brand-green flex items-center justify-center mr-4 flex-shrink-0 shadow-lg">
                                            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                        </div>
                                        <div>
                                            <span className="block text-brand-yellow font-bold text-sm uppercase tracking-wider mb-1">Phone Pipeline</span>
                                            <span className="text-white font-medium text-lg">{siteContent.global.contactPhone}</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="border-t-2 border-slate-800/50 pt-8 flex flex-col md:flex-row justify-between items-center">
                        <p className="text-slate-400 font-medium mb-4 md:mb-0">
                            &copy; {new Date().getFullYear()} <span className="text-white">{siteContent.global.brandName}</span>.
                        </p>
                        <div className="flex space-x-8">
                            <a href="#" className="text-slate-400 hover:text-brand-yellow font-bold transition-colors">Privacy Policy</a>
                            <a href="#" className="text-slate-400 hover:text-brand-yellow font-bold transition-colors">Terms of Use</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Template2Layout;
