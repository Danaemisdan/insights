import React from 'react';
import { ChartBarIcon, GlobeAsiaAustraliaIcon, BuildingOffice2Icon } from '@heroicons/react/24/solid';

const Hero = () => {
    return (
        <section className="relative bg-slate-50 border-b border-gray-200 overflow-hidden">
            {/* Very clean, subtle texture/grid background */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-24 pb-32">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-slate-200 shadow-sm mb-6">
                            <span className="w-2 h-2 rounded-full bg-brand-green"></span>
                            <span className="text-slate-600 font-bold text-xs uppercase tracking-widest">Ecosystem Development Model</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-6">
                            Data-Driven Authority in <span className="text-brand-green">Agri-Food Networks.</span>
                        </h1>
                        <p className="text-lg text-slate-600 mb-10 max-w-lg leading-relaxed">
                            We deploy institutional-grade value chain frameworks to build nutrition-sensitive, climate-resilient global agriculture systems.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a href="#platform" className="bg-brand-green text-white px-8 py-3 text-sm font-bold hover:bg-brand-dark transition shadow-sm text-center">
                                View Our Platform
                            </a>
                            <a href="#reports" className="bg-white text-slate-700 border border-slate-300 px-8 py-3 text-sm font-bold hover:bg-slate-50 transition text-center shadow-sm">
                                Executive Summary
                            </a>
                        </div>
                    </div>

                    {/* Infographic / Stats Grid */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white p-6 border border-slate-200 shadow-sm">
                            <ChartBarIcon className="w-8 h-8 text-slate-400 mb-4" />
                            <div className="text-4xl font-black text-slate-900 mb-1 font-mono tracking-tighter">8</div>
                            <div className="text-xs font-bold text-brand-green uppercase tracking-widest">Core Verticals</div>
                        </div>
                        <div className="bg-white p-6 border border-slate-200 shadow-sm translate-y-6">
                            <GlobeAsiaAustraliaIcon className="w-8 h-8 text-slate-400 mb-4" />
                            <div className="text-4xl font-black text-slate-900 mb-1 font-mono tracking-tighter">12+</div>
                            <div className="text-xs font-bold text-brand-green uppercase tracking-widest">Countries Reached</div>
                        </div>
                        <div className="bg-white p-6 border border-slate-200 shadow-sm">
                            <BuildingOffice2Icon className="w-8 h-8 text-slate-400 mb-4" />
                            <div className="text-4xl font-black text-slate-900 mb-1 font-mono tracking-tighter">150M</div>
                            <div className="text-xs font-bold text-brand-green uppercase tracking-widest">In Investments</div>
                        </div>
                        <div className="bg-slate-900 p-6 border border-slate-800 shadow-sm translate-y-6 text-white flex flex-col justify-between">
                            <div className="text-lg font-bold leading-tight">Explore the Central Architecture</div>
                            <a href="#platform" className="text-brand-yellow text-sm font-bold flex items-center group mt-4">
                                Enter Framework
                                <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
