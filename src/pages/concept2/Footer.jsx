import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-brand-lightGreen text-brand-dark border-t border-brand-green relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center mb-6">
                            <img src="/logos/1.svg" alt="Insights Value Hub Logo" className="h-20 w-auto" />
                        </div>
                        <p className="text-brand-dark/80 max-w-sm text-lg leading-relaxed font-medium">
                            Driving the future of sustainable, nutrition-focused agriculture value chains globally.
                        </p>
                        <div className="flex gap-4 mt-8">
                            <a href="#" className="w-10 h-10 rounded-full bg-brand-green flex items-center justify-center text-white hover:bg-brand-dark transition duration-300 transform hover:scale-110">
                                <span className="sr-only">LinkedIn</span>
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-brand-green flex items-center justify-center text-white hover:bg-brand-dark transition duration-300 transform hover:scale-110">
                                <span className="sr-only">Twitter</span>
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="text-xl font-bold mb-6 text-brand-yellow border-b-2 border-brand-green pb-2 inline-block">Navigation</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-gray-400 hover:text-white transition duration-200 font-medium">The Ecosystem</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition duration-200 font-medium">8 Verticals</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white transition duration-200 font-medium">Insights Feed</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-xl font-bold mb-6 text-brand-yellow border-b-2 border-brand-green pb-2 inline-block">Engage</h4>
                        <ul className="space-y-4 text-gray-400 font-medium">
                            <li className="flex items-center group cursor-pointer hover:text-white transition-colors duration-200">
                                <span className="bg-brand-green p-2 rounded mr-3 group-hover:bg-brand-yellow group-hover:text-brand-dark transition-colors duration-200">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                </span>
                                reachout@insightsvaluehub.com
                            </li>
                            <li className="flex items-center group cursor-pointer hover:text-white transition-colors duration-200">
                                <span className="bg-brand-green p-2 rounded mr-3 group-hover:bg-brand-yellow group-hover:text-brand-dark transition-colors duration-200">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                </span>
                                +91 78932 55244
                            </li>
                            <li className="flex items-start group cursor-pointer hover:text-white transition-colors duration-200 pt-2">
                                <span className="bg-brand-green p-2 rounded mr-3 mt-1 group-hover:bg-brand-yellow group-hover:text-brand-dark transition-colors duration-200">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                </span>
                                Hyderabad, India
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-brand-green/30 mt-12 pt-8 text-center text-brand-green font-bold text-sm tracking-widest uppercase">
                    &copy; {new Date().getFullYear()} Insights Value Hub. Engineering Ecosystems.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
