import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { siteContent } from '../../data/siteContent';
import { images } from '../../data/imageMap';

const wwd = siteContent.whatWeDo;

const iconMap = {
    microscope: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" /></svg>
    ),
    factory: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
    ),
    rocket: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
    ),
    graduationcap: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /></svg>
    ),
    policy: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
    ),
    digital: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
    ),
    consultancy: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
    ),
    turnkey: (
        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" /></svg>
    ),
};

const resourceIconMap = {
    book: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>,
    database: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>,
    catalogue: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>,
    consult: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" /></svg>,
};

const WhatWeDoPage = () => {
    const [activeFunc, setActiveFunc] = useState(0);
    const fn = wwd.coreFunctions[activeFunc];

    return (
        <div className="w-full">
            {/* Hero */}
            <div className="relative min-h-[50vh] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src={images.services['value-chain']} alt="What We Do" className="w-full h-full object-cover" loading="eager" />
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/80 to-transparent" />
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-24">
                    <div className="max-w-3xl">
                        <span className="text-sm font-bold uppercase tracking-widest mb-4 block text-brand-orange">What We Do</span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-white leading-tight">
                            Core Functions &<br />Services
                        </h1>
                        <p className="text-xl text-gray-200 font-light leading-relaxed">{wwd.intro}</p>
                    </div>
                </div>
            </div>

            {/* Core Functions — Interactive */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14">
                        <span className="text-sm font-bold uppercase tracking-widest text-brand-green mb-3 block">Our Work</span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Core Functions</h2>
                    </div>

                    {/* Function Tabs */}
                    <div className="flex flex-wrap gap-2 justify-center mb-10">
                        {wwd.coreFunctions.map((fn, i) => (
                            <button key={i} onClick={() => setActiveFunc(i)}
                                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${activeFunc === i ? 'bg-brand-green text-white shadow-md' : 'bg-gray-100 text-gray-600 hover:bg-brand-green/10 hover:text-brand-green'}`}>
                                {fn.title}
                            </button>
                        ))}
                    </div>

                    {/* Active Function Detail */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-gray-50 rounded-3xl p-8 md:p-12">
                        <div>
                            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-green to-brand-dark flex items-center justify-center text-white mb-6">
                                {iconMap[fn.icon] || iconMap.rocket}
                            </div>
                            <h3 className="text-2xl font-extrabold text-gray-900 mb-4">{fn.title}</h3>
                            <p className="text-lg text-gray-600 leading-relaxed mb-8">{fn.desc}</p>
                            <ul className="space-y-3">
                                {fn.details.map((d, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <div className="w-6 h-6 rounded-lg bg-brand-green/10 text-brand-green flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                                        </div>
                                        <span className="text-gray-700">{d}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            {wwd.coreFunctions.filter((_, i) => i !== activeFunc).slice(0, 4).map((other, i) => (
                                <button key={i} onClick={() => setActiveFunc(wwd.coreFunctions.indexOf(other))}
                                    className="bg-white border border-gray-200 rounded-2xl p-6 text-left hover:border-brand-green/40 hover:shadow-md transition-all group">
                                    <div className="w-10 h-10 rounded-xl bg-brand-green/10 text-brand-green flex items-center justify-center mb-3 group-hover:bg-brand-green group-hover:text-white transition-all">
                                        {iconMap[other.icon] ? <div className="scale-75">{iconMap[other.icon]}</div> : null}
                                    </div>
                                    <h4 className="font-bold text-gray-800 text-sm leading-snug group-hover:text-brand-green transition-colors">{other.title}</h4>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* All Core Functions Grid */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14">
                        <span className="text-sm font-bold uppercase tracking-widest text-brand-green mb-3 block">All Functions</span>
                        <h2 className="text-3xl font-extrabold text-gray-900">Our Full Capability Stack</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {wwd.coreFunctions.map((fn, i) => (
                            <div key={i} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-brand-green/30 transition-all group">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-green/20 to-brand-green/5 text-brand-green flex items-center justify-center mb-4 group-hover:from-brand-green group-hover:to-brand-dark group-hover:text-white transition-all">
                                    {iconMap[fn.icon] || iconMap.rocket}
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-brand-green transition-colors text-sm leading-snug">{fn.title}</h3>
                                <p className="text-gray-500 text-xs leading-relaxed">{fn.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Resources & Services */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14">
                        <span className="text-sm font-bold uppercase tracking-widest text-brand-green mb-3 block">Resources</span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Resources & Services</h2>
                        <p className="text-gray-500 mt-3 max-w-xl mx-auto">Access our curated knowledge tools, datasets, and consulting services.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {wwd.resources.map((res, i) => (
                            <div key={i} className="relative bg-gradient-to-b from-gray-50 to-white border border-gray-100 rounded-2xl p-8 hover:shadow-lg hover:border-brand-green/30 transition-all group overflow-hidden">
                                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold ${res.tag === 'Available' ? 'bg-brand-green/10 text-brand-green' : 'bg-brand-orange/10 text-brand-orange'}`}>
                                    {res.tag}
                                </div>
                                <div className="w-14 h-14 rounded-2xl bg-brand-green/10 text-brand-green flex items-center justify-center mb-6 group-hover:bg-brand-green group-hover:text-white transition-all">
                                    {resourceIconMap[res.icon] || resourceIconMap.book}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-brand-green transition-colors">{res.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed">{res.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-gradient-to-r from-brand-green to-brand-dark">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-extrabold text-white mb-6">Ready to Collaborate on a Project?</h2>
                    <p className="text-lg text-gray-200 mb-8">Let's discuss how INSIGHTS can design, implement, and operationalize value chain ecosystems for your vision.</p>
                    <Link to="/contact" className="inline-flex items-center px-10 py-4 rounded-full bg-white text-brand-green font-bold text-lg hover:bg-brand-dark hover:text-white transition-all">
                        Get In Touch
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default WhatWeDoPage;
