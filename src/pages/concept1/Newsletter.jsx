import React from 'react';
import { Send } from 'lucide-react';

const Newsletter = () => {
    return (
        <section id="insights" className="bg-brand-green py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-16 border border-white/20 shadow-2xl relative overflow-hidden">

                    {/* Decorative background circle */}
                    <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-brand-yellow/20 blur-3xl mix-blend-screen pointer-events-none"></div>

                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                        <div className="text-white">
                            <span className="text-brand-yellow font-semibold tracking-wider uppercase text-sm mb-3 block">
                                Stay Informed
                            </span>
                            <h2 className="text-3xl font-extrabold sm:text-4xl mb-4 tracking-tight">
                                Insights & Updates
                            </h2>
                            <p className="text-brand-lightGreen/80 font-light text-lg mb-8 max-w-md leading-relaxed">
                                Join our community to receive the latest research, policy alignments, and strategic roadmaps shaping nutrition systems and agri-food innovation.
                            </p>

                            <div className="flex items-center space-x-4">
                                <div className="flex -space-x-3">
                                    {/* Avatar stack placeholders */}
                                    <img className="w-10 h-10 rounded-full border-2 border-brand-green object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=100&auto=format&fit=crop" alt="Subscriber" />
                                    <img className="w-10 h-10 rounded-full border-2 border-brand-green object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=100&auto=format&fit=crop" alt="Subscriber" />
                                    <div className="w-10 h-10 rounded-full border-2 border-brand-green bg-brand-yellow flex items-center justify-center text-xs font-bold text-brand-dark">
                                        +2k
                                    </div>
                                </div>
                                <span className="text-sm font-medium text-brand-lightGreen/90">Join industry leaders</span>
                            </div>
                        </div>

                        <div>
                            <form className="sm:max-w-md lg:ml-auto">
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <div className="min-w-0 flex-1">
                                        <label htmlFor="email" className="sr-only">Email address</label>
                                        <input
                                            id="email"
                                            type="email"
                                            placeholder="Enter your email"
                                            className="block w-full px-5 py-4 text-base text-gray-900 placeholder-gray-500 bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-brand-yellow focus:border-transparent shadow-sm"
                                        />
                                    </div>
                                    <div className="mt-3 sm:mt-0 sm:ml-3">
                                        <button
                                            type="submit"
                                            className="block w-full px-6 py-4 flex items-center justify-center border border-transparent text-base font-semibold rounded-full text-brand-dark bg-brand-yellow hover:bg-[#F0C94D] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-brand-green focus:ring-brand-yellow shadow-md transition-colors"
                                        >
                                            Subscribe
                                            <Send className="ml-2 h-4 w-4" />
                                        </button>
                                    </div>
                                </div>
                                <p className="mt-4 text-xs text-brand-lightGreen/60 text-center sm:text-left">
                                    We care about the protection of your data. Read our <a href="#" className="text-white underline">Privacy Policy</a>.
                                </p>
                            </form>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Newsletter;
