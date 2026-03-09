import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
            <div className="max-w-3xl w-full bg-white rounded-2xl shadow-xl overflow-hidden text-center border border-gray-100">
                <div className="p-12">
                    <img src="/logos/2.svg" alt="Insights Value Hub" className="h-16 mx-auto mb-8" />
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">Insights Value Hub - Final Approvals</h1>
                    <p className="text-gray-600 mb-10 text-lg leading-relaxed">
                        Welcome to the final concept viewer. Based on the steering committee's feedback, we have developed two distinct, multi-page architectures for the final website structure. Please explore the options below.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <Link to="/template1" className="group block h-full">
                            <div className="h-full border-2 border-slate-200 hover:border-brand-green bg-slate-50 rounded-xl p-8 transition-all duration-300 hover:shadow-lg flex flex-col items-center">
                                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:bg-brand-green group-hover:text-white transition-colors">
                                    <svg className="w-8 h-8 text-brand-green group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-brand-green transition-colors">Template 1</h2>
                                <span className="text-sm font-semibold uppercase tracking-wider text-brand-green mb-4">The Institutional Approach</span>
                                <p className="text-gray-600 text-sm">
                                    Inspired by Nutrihub. Clean, highly structured, data-forward, and relies heavily on deep forest greens and slate grays for a professional, established presence.
                                </p>
                            </div>
                        </Link>

                        <Link to="/template2" className="group block h-full">
                            <div className="h-full border-2 border-brand-yellow/30 hover:border-brand-yellow bg-[#fdfaf2] rounded-xl p-8 transition-all duration-300 hover:shadow-lg flex flex-col items-center">
                                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 shadow-sm group-hover:bg-brand-yellow group-hover:text-brand-dark transition-colors">
                                    <svg className="w-8 h-8 text-brand-yellow group-hover:text-brand-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                                </div>
                                <h2 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-brand-dark transition-colors">Template 2</h2>
                                <span className="text-sm font-semibold uppercase tracking-wider text-brand-yellow mb-4">The Vibrant Ecosystem</span>
                                <p className="text-gray-600 text-sm">
                                    Dynamic, highly visual, and modern. Uses energetic color contrast (gold and deep green) along with full-bleed imagery to tell the story of the value chain.
                                </p>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="bg-gray-100 py-4 text-center border-t border-gray-200">
                    <p className="text-sm text-gray-500">© {new Date().getFullYear()} Insights Value Hub</p>
                </div>
            </div>
        </div>
    );
};

export default Home;
