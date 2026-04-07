import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { siteContent } from '../../data/siteContent';
import { images } from '../../data/imageMap';

const evts = siteContent.workWithUs.events;

const iconMap = {
    workshop: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /></svg>,
    outreach: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    conference: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" /></svg>,
    conclave: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
    business: <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
};

const WorkEventsPage = () => {
    const [activeIdx, setActiveIdx] = useState(0);
    const active = evts.categories[activeIdx];

    return (
        <div className="w-full">
            {/* Hero */}
            <div className="relative min-h-[45vh] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src={images.about.culture} alt="Events & Campaigns" className="w-full h-full object-cover" loading="eager" />
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/80 to-transparent" />
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
                    <div className="max-w-3xl">
                        <span className="text-sm font-bold uppercase tracking-widest mb-4 block text-brand-orange">Work With Us</span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-white leading-tight">
                            Events & Campaigns
                        </h1>
                        <p className="text-xl text-gray-200 font-light leading-relaxed">{evts.intro}</p>
                    </div>
                </div>
            </div>

            {/* Event Categories — Tab navigator */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14">
                        <span className="text-sm font-bold uppercase tracking-widest text-brand-green mb-3 block">Our Programs</span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Event Categories</h2>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Left: Category List */}
                        <div className="space-y-2">
                            {evts.categories.map((cat, i) => (
                                <button key={i} onClick={() => setActiveIdx(i)}
                                    className={`w-full text-left flex items-center gap-4 p-4 rounded-2xl transition-all ${activeIdx === i ? 'bg-gradient-to-r from-brand-green to-brand-dark text-white shadow-lg' : 'bg-gray-50 text-gray-700 hover:bg-brand-green/5 hover:text-brand-green'}`}>
                                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${activeIdx === i ? 'bg-white/20' : 'bg-brand-green/10 text-brand-green'}`}>
                                        {iconMap[cat.icon]}
                                    </div>
                                    <span className="font-semibold">{cat.title}</span>
                                </button>
                            ))}
                        </div>

                        {/* Right: Detail Panel */}
                        <div className="lg:col-span-2 bg-gray-50 rounded-3xl p-8 md:p-10">
                            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-brand-green to-brand-dark flex items-center justify-center text-white mb-6">
                                {iconMap[active.icon]}
                            </div>
                            <h3 className="text-2xl font-extrabold text-gray-900 mb-4">{active.title}</h3>
                            <p className="text-lg text-gray-600 leading-relaxed mb-8">{active.desc}</p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                {active.items.map((item, j) => (
                                    <div key={j} className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                                        <div className="w-6 h-6 rounded-lg bg-brand-green text-white flex items-center justify-center flex-shrink-0">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" /></svg>
                                        </div>
                                        <span className="text-gray-700 font-medium text-sm">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* All events strip */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                        {evts.categories.map((cat, i) => (
                            <div key={i} onClick={() => setActiveIdx(i)}
                                className={`cursor-pointer p-6 rounded-2xl text-center transition-all ${activeIdx === i ? 'bg-brand-green text-white shadow-lg' : 'bg-white border border-gray-100 hover:border-brand-green/30 hover:shadow-md'}`}>
                                <div className={`w-12 h-12 rounded-xl mx-auto flex items-center justify-center mb-3 ${activeIdx === i ? 'bg-white/20 text-white' : 'bg-brand-green/10 text-brand-green'}`}>
                                    {iconMap[cat.icon]}
                                </div>
                                <p className={`text-sm font-bold leading-tight ${activeIdx === i ? 'text-white' : 'text-gray-800'}`}>{cat.title}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-gradient-to-r from-brand-green to-brand-dark">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                    <h2 className="text-3xl font-extrabold mb-4">Host or Co-organize an Event with Us</h2>
                    <p className="text-gray-200 mb-8">Partner with INSIGHTS to design and deliver impactful events for the agri-food ecosystem.</p>
                    <Link to="/contact" className="inline-flex items-center px-10 py-4 rounded-full bg-white text-brand-green font-bold hover:bg-brand-dark hover:text-white transition-all">
                        Get In Touch
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default WorkEventsPage;
