import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-slate-300 border-t-4 border-brand-green">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center mb-6">
                            <img src="/logos/4.svg" alt="Insights Value Hub Logo" className="h-14 w-auto brightness-0 invert" opacity="0.9" />
                        </div>
                        <p className="max-w-md text-sm leading-relaxed text-slate-400">
                            Driving the future of sustainable, nutrition-focused agriculture value chains globally. We leverage data and institutional partnerships to create scalable impact.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-sm font-semibold mb-4 text-white uppercase tracking-wider">Platform</h4>
                        <ul className="space-y-3 text-sm">
                            <li><a href="#" className="hover:text-white transition duration-200">Ecosystem Model</a></li>
                            <li><a href="#" className="hover:text-white transition duration-200">Our 8 Verticals</a></li>
                            <li><a href="#" className="hover:text-white transition duration-200">Global Advisory</a></li>
                            <li><a href="#" className="hover:text-white transition duration-200">Publications</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-semibold mb-4 text-white uppercase tracking-wider">Contact</h4>
                        <ul className="space-y-3 text-sm">
                            <li className="flex items-start">
                                <span className="mt-0.5 mr-2">
                                    <svg className="w-4 h-4 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                </span>
                                reachout@insightsvaluehub.com
                            </li>
                            <li className="flex items-start">
                                <span className="mt-0.5 mr-2">
                                    <svg className="w-4 h-4 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                </span>
                                +91 78932 55244
                            </li>
                            <li className="flex items-start">
                                <span className="mt-0.5 mr-2">
                                    <svg className="w-4 h-4 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                </span>
                                Hyderabad, India
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
                    <div>&copy; {new Date().getFullYear()} Insights Value Hub. All rights reserved.</div>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-white transition">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
