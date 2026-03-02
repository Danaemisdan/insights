import React from 'react';

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center bg-slate-950 overflow-hidden pt-20">
            {/* Tech Abstract Background */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                {/* Grid */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)]"></div>

                {/* Glowing Orbs */}
                <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand-green/20 rounded-full blur-[120px] mix-blend-screen animate-pulse" style={{ animationDuration: '4s' }}></div>
                <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-brand-yellow/10 rounded-full blur-[150px] mix-blend-screen animate-pulse" style={{ animationDuration: '6s', animationDelay: '1s' }}></div>

                {/* Connection lines (Abstract value chain) */}
                <svg className="absolute inset-0 w-full h-full opacity-20" xmlns="http://www.w3.org/2000/svg">
                    <path d="M-100 200 C 300 100, 500 600, 1000 300 S 1400 800, 2000 400" fill="none" stroke="currentColor" strokeWidth="1" className="text-brand-yellow" strokeDasharray="5,5">
                        <animate attributeName="stroke-dashoffset" from="100" to="0" dur="20s" repeatCount="indefinite" />
                    </path>
                    <path d="M-100 600 C 400 800, 600 200, 1200 500 S 1600 100, 2000 700" fill="none" stroke="currentColor" strokeWidth="1" className="text-brand-green">
                        <animate attributeName="stroke-dashoffset" from="0" to="100" dur="15s" repeatCount="indefinite" />
                    </path>
                </svg>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex text-center flex-col items-center">
                <div className="inline-flex items-center gap-3 px-4 py-2 bg-slate-900/50 border border-brand-green/30 rounded-full backdrop-blur-md mb-8">
                    <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-yellow opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-brand-yellow"></span>
                    </span>
                    <span className="text-slate-300 font-mono text-xs uppercase tracking-widest">System v2.0 Live // Agriculture OS</span>
                </div>

                <h1 className="text-5xl sm:text-7xl font-black text-white tracking-tighter mb-8 leading-[1.1] max-w-4xl">
                    Reprogramming the <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green via-emerald-400 to-brand-green bg-300% animate-gradient">Value Chain.</span>
                </h1>

                <p className="text-xl text-slate-400 font-light mb-12 max-w-2xl leading-relaxed">
                    We engineer and deploy scalable, tech-forward infrastructure to build climate-resilient and nutrition-sensitive agricultural ecosystems globally.
                </p>

                <div className="flex flex-col sm:flex-row gap-5 items-center justify-center">
                    <a
                        href="#nodes"
                        className="group relative inline-flex items-center justify-center px-8 py-4 bg-brand-yellow text-brand-dark font-bold uppercase tracking-wider text-sm transition-all shadow-[0_0_20px_rgba(234,179,8,0.3)] hover:shadow-[0_0_30px_rgba(234,179,8,0.5)] overflow-hidden rounded-sm"
                    >
                        <span className="relative z-10 flex items-center gap-2">
                            Initialize Core Nodes
                            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                        </span>
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out"></div>
                    </a>

                    <a
                        href="#innovators"
                        className="inline-flex items-center justify-center px-8 py-4 bg-transparent border-2 border-slate-700 text-slate-300 font-bold uppercase tracking-wider text-sm hover:border-brand-green hover:text-white transition-all rounded-sm"
                    >
                        View Architecture
                    </a>
                </div>
            </div>

            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
                <span className="text-slate-500 font-mono text-[10px] uppercase tracking-[0.3em] mb-2">Scroll to execute</span>
                <svg className="w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
            </div>
        </section>
    );
};

export default Hero;
