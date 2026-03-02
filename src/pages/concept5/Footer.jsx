import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#2A3626] text-[#E8DFCF] pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-4 lg:col-span-5">
                        <div className="mb-8">
                            {/* We use the logo but filter it to be lighter so it's readable on the dark earthy background */}
                            <img src="/logos/4.svg" alt="Insights Value Hub Logo" className="h-16 w-auto brightness-0 invert opacity-90" />
                        </div>
                        <p className="text-[#B5C2B1] font-serif text-[17px] leading-relaxed max-w-sm mb-8 italic">
                            "Connecting the roots of our soil to the nutrition on every table. A holistic approach to global agriculture."
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-[#3D4D38] flex items-center justify-center text-[#E8DFCF] hover:bg-[#C5832B] hover:text-white transition duration-300">
                                <span className="sr-only">LinkedIn</span>
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-[#3D4D38] flex items-center justify-center text-[#E8DFCF] hover:bg-[#C5832B] hover:text-white transition duration-300">
                                <span className="sr-only">Twitter</span>
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" /></svg>
                            </a>
                        </div>
                    </div>

                    <div className="col-span-1 md:col-span-4 lg:col-span-3">
                        <h4 className="font-serif text-[#C5832B] text-xl mb-6">Our Journey</h4>
                        <ul className="space-y-4">
                            <li><a href="#" className="hover:text-white font-serif transition-colors text-[16px]">The Smallholder Story</a></li>
                            <li><a href="#" className="hover:text-white font-serif transition-colors text-[16px]">Processing & Care</a></li>
                            <li><a href="#" className="hover:text-white font-serif transition-colors text-[16px]">Nutrition Outcomes</a></li>
                            <li><a href="#" className="hover:text-white font-serif transition-colors text-[16px]">Meet the Stewards</a></li>
                        </ul>
                    </div>

                    <div className="col-span-1 md:col-span-4 lg:col-span-4">
                        <h4 className="font-serif text-[#C5832B] text-xl mb-6">Reach Out</h4>
                        <ul className="space-y-5 font-serif text-[16px]">
                            <li className="flex items-start">
                                <svg className="w-5 h-5 text-[#C5832B] mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                <span className="hover:text-white transition-colors cursor-pointer">reachout@insightsvaluehub.com</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="w-5 h-5 text-[#C5832B] mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                <span className="hover:text-white transition-colors cursor-pointer">+91 78932 55244</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="w-5 h-5 text-[#C5832B] mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                <span className="hover:text-white transition-colors cursor-pointer">Hyderabad, India</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-[#3D4D38] pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-[#B5C2B1] font-serif">
                    <div className="mb-4 md:mb-0">&copy; {new Date().getFullYear()} Insights Value Hub. Growing together.</div>
                    <div className="flex space-x-6">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Roots</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
