import React from 'react';

const Blog = () => {
    return (
        <section id="impact" className="py-24 bg-slate-950 border-t border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <div>
                        <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-brand-green/10 border border-brand-green/30 rounded-full">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-green"></span>
                            <span className="text-brand-green font-mono text-[10px] uppercase tracking-widest">Data Feed</span>
                        </div>
                        <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase">
                            Impact <span className="text-brand-green">Telemetry</span>
                        </h2>
                    </div>
                    <a href="#" className="mt-6 md:mt-0 inline-flex items-center text-brand-yellow font-bold text-sm uppercase tracking-widest hover:text-white transition group border-b border-transparent hover:border-brand-yellow pb-1">
                        Access Full Logs
                        <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                    </a>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {/* Featured Log */}
                    <div className="md:col-span-2 relative group overflow-hidden rounded-2xl bg-slate-900 border border-slate-800 hover:border-brand-green transition-colors duration-500">
                        <div className="aspect-[16/9] w-full bg-brand-dark relative z-0">
                            <img src="https://images.unsplash.com/photo-1586771107445-d3ca888129ff?auto=format&fit=crop&q=80&w=1600" alt="Tech Lab" className="w-full h-full object-cover opacity-30 mix-blend-luminosity group-hover:scale-105 transition-transform duration-1000" />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent"></div>
                        </div>
                        <div className="absolute bottom-0 left-0 p-8 z-10 w-full">
                            <div className="flex items-center gap-3 mb-4">
                                <span className="px-2 py-1 bg-brand-green/20 text-brand-green border border-brand-green/30 text-[10px] font-mono font-bold uppercase tracking-widest">Deployment Log</span>
                                <span className="text-slate-400 font-mono text-xs">t-minus 2 days</span>
                            </div>
                            <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 group-hover:text-brand-green transition-colors">
                                Activating the first fully autonomous processing facility in South Asia.
                            </h3>
                            <p className="text-slate-400 max-w-2xl leading-relaxed text-sm">
                                System telemetry indicates a 300% increase in yield tracking efficiency utilizing our proprietary IoT grid.
                            </p>
                        </div>
                    </div>

                    {/* Secondary Logs & Newsletter */}
                    <div className="flex flex-col gap-6">
                        <a href="#" className="flex-1 bg-slate-900 border border-slate-800 p-6 rounded-2xl hover:border-brand-yellow group transition-colors flex flex-col justify-center relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-16 h-16 bg-brand-yellow/5 rounded-bl-full group-hover:bg-brand-yellow/10 transition-colors"></div>
                            <div className="flex items-center gap-2 mb-3">
                                <span className="px-2 py-1 bg-brand-yellow/10 text-brand-yellow border border-brand-yellow/20 text-[10px] font-mono font-bold uppercase tracking-widest">Data Patch</span>
                            </div>
                            <h3 className="text-lg font-bold text-white group-hover:text-brand-yellow transition-colors mb-2">Integrating Climate APIs directly into the Farmer Mobile Node.</h3>
                            <span className="text-slate-500 font-mono text-xs">t-minus 8 days</span>
                        </a>

                        <div className="flex-1 bg-brand-green rounded-2xl p-6 relative overflow-hidden shadow-[0_0_30px_rgba(16,185,129,0.2)]">
                            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                            <div className="relative z-10 block h-full flex flex-col justify-center">
                                <h4 className="text-brand-dark font-black text-xl mb-2 tracking-tight">Sync Your Terminal</h4>
                                <p className="text-brand-dark/80 text-sm mb-4 font-medium">Receive direct transmission of our latest technical breakthroughs.</p>
                                <form className="flex w-full relative">
                                    <input type="email" placeholder="email@address.com" className="w-full pl-4 pr-12 py-3 bg-white/20 border-none text-brand-dark focus:outline-none focus:ring-2 focus:ring-white text-sm placeholder-brand-dark/50 rounded-l-md" />
                                    <button type="submit" className="bg-brand-dark text-white px-4 py-3 font-bold hover:bg-slate-800 transition rounded-r-md flex items-center justify-center">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;
