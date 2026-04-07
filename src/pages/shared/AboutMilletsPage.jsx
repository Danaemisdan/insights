import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { siteContent } from '../../data/siteContent';
import { images } from '../../data/imageMap';

const am = siteContent.aboutMillets;

const imgMap = {
    pearl: images.millets.pearl,
    finger: images.millets.finger,
    foxtail: images.millets.foxtail,
    jowar: images.millets.jowar,
    barnyard: images.millets.barnyard,
    kodo: images.millets.kodo,
    little: images.millets.little,
    proso: images.millets.proso,
};

const sectionTabs = [
    { id: 'what', label: 'What are Millets' },
    { id: 'importance', label: 'Importance' },
    { id: 'value-chain', label: 'Millet Value Chain' },
    { id: 'products', label: 'Millet Products' },
    { id: 'policies', label: 'Policies & Initiatives' },
    { id: 'knowledge', label: 'Knowledge Resources' },
];

const AboutMilletsPage = () => {
    const [activeSection, setActiveSection] = useState('what');

    return (
        <div className="w-full">
            {/* Hero */}
            <div className="relative min-h-[55vh] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src={images.millets.pearl} alt="About Millets" className="w-full h-full object-cover" loading="eager" />
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/80 to-transparent" />
                </div>
                {/* Floating vectors */}
                <div className="absolute right-10 bottom-10 flex gap-4 opacity-20 pointer-events-none">
                    {[images.vectors.millet01, images.vectors.pearl, images.vectors.foxtail].map((v, i) => (
                        <img key={i} src={v} alt="" className="h-24 w-auto object-contain" />
                    ))}
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-24">
                    <div className="max-w-3xl">
                        <span className="text-sm font-bold uppercase tracking-widest mb-4 block text-brand-orange">INSIGHTS Value Hub</span>
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold mb-6 text-white leading-[1.1]">
                            {am.hero.headline}
                        </h1>
                        <p className="text-xl text-gray-200 font-light leading-relaxed max-w-2xl">
                            {am.hero.subline}
                        </p>
                    </div>
                </div>
            </div>

            {/* Section Nav */}
            <div className="bg-white border-b border-gray-100 sticky top-[100px] md:top-[136px] z-20 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex gap-1 overflow-x-auto py-3 scrollbar-hide">
                        {sectionTabs.map(tab => (
                            <a key={tab.id} href={`#${tab.id}`} onClick={() => setActiveSection(tab.id)}
                                className={`flex-shrink-0 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${activeSection === tab.id ? 'bg-brand-green text-white' : 'text-gray-600 hover:text-brand-green hover:bg-brand-green/5'}`}>
                                {tab.label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* 1. What are Millets */}
            <section id="what" className="py-24 bg-white scroll-mt-40">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto text-center mb-16">
                        <span className="text-sm font-bold uppercase tracking-widest text-brand-green mb-3 block">Section 01</span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">What are Millets?</h2>
                        <p className="text-lg text-gray-600 leading-relaxed">{am.whatAreMillets.definition}</p>
                    </div>

                    {/* Millet Types Grid */}
                    <div className="mb-20">
                        <h3 className="text-2xl font-extrabold text-gray-900 mb-8 text-center">Types of Millets</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {am.whatAreMillets.types.map((type, i) => (
                                <div key={i} className="group relative overflow-hidden rounded-2xl hover:shadow-xl transition-all duration-300">
                                    <img
                                        src={imgMap[type.img] || images.millets.pearl}
                                        alt={type.name}
                                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent" />
                                    <div className="absolute bottom-0 left-0 right-0 p-4">
                                        <h4 className="font-bold text-white text-sm leading-tight mb-1">{type.name}</h4>
                                        <p className="text-gray-300 text-xs leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">{type.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Nutritional Profile */}
                    <div>
                        <h3 className="text-2xl font-extrabold text-gray-900 mb-8 text-center">Nutritional Profile</h3>
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                            {am.whatAreMillets.nutritionalProfile.map((nutrient, i) => (
                                <div key={i} className="bg-gradient-to-b from-gray-50 to-white border border-gray-100 rounded-2xl p-6 text-center hover:border-brand-green/30 hover:shadow-md transition-all">
                                    <div className="w-12 h-12 rounded-xl bg-brand-green/10 text-brand-green flex items-center justify-center mx-auto mb-3 text-xl font-black">
                                        {nutrient.icon.charAt(0).toUpperCase()}
                                    </div>
                                    <h4 className="font-bold text-gray-900 text-sm mb-2">{nutrient.nutrient}</h4>
                                    <p className="text-gray-500 text-xs leading-relaxed">{nutrient.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Importance */}
            <section id="importance" className="py-24 bg-gray-50 scroll-mt-40">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-sm font-bold uppercase tracking-widest text-brand-green mb-3 block">Section 02</span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Importance of Millets</h2>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {[am.importance.foodSecurity, am.importance.climateResilience, am.importance.nutritionalBenefits].map((item, i) => (
                            <div key={i} className={`rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all ${i === 0 ? 'bg-gradient-to-br from-brand-green to-brand-dark text-white' : 'bg-white border border-gray-100'}`}>
                                <div className="p-8">
                                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${i === 0 ? 'bg-white/20' : 'bg-brand-green/10 text-brand-green'}`}>
                                        <svg className={`w-6 h-6 ${i === 0 ? 'text-white' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            {i === 0 ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /> :
                                            i === 1 ? <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /> :
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />}
                                        </svg>
                                    </div>
                                    <h3 className={`text-xl font-extrabold mb-4 ${i === 0 ? 'text-white' : 'text-gray-900'}`}>{item.title}</h3>
                                    <p className={`mb-6 leading-relaxed ${i === 0 ? 'text-gray-200' : 'text-gray-600'}`}>{item.desc}</p>
                                    <ul className="space-y-2">
                                        {item.points.map((point, j) => (
                                            <li key={j} className="flex items-start gap-2">
                                                <div className={`w-5 h-5 rounded flex items-center justify-center flex-shrink-0 mt-0.5 ${i === 0 ? 'bg-white/20' : 'bg-brand-green/10 text-brand-green'}`}>
                                                    <svg className={`w-3 h-3 ${i === 0 ? 'text-white' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                                                </div>
                                                <span className={`text-sm ${i === 0 ? 'text-gray-200' : 'text-gray-600'}`}>{point}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Value Chain */}
            <section id="value-chain" className="py-24 bg-white scroll-mt-40">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <span className="text-sm font-bold uppercase tracking-widest text-brand-green mb-3 block">Section 03</span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Millet Value Chain</h2>
                        <p className="text-gray-600 leading-relaxed">{am.valueChain.intro}</p>
                    </div>
                    <div className="relative">
                        {/* Connector line */}
                        <div className="hidden md:block absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-green via-brand-orange to-brand-green z-0" />
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 relative z-10">
                            {am.valueChain.stages.map((stage, i) => (
                                <div key={i} className="flex flex-col items-center text-center group">
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-green to-brand-dark flex items-center justify-center text-white font-black text-lg mb-4 shadow-lg group-hover:scale-110 transition-transform">
                                        {stage.stage}
                                    </div>
                                    <h4 className="font-bold text-gray-900 text-sm mb-2 leading-tight">{stage.title}</h4>
                                    <p className="text-gray-500 text-xs leading-relaxed mb-3 hidden lg:block">{stage.desc}</p>
                                    <div className="flex flex-wrap gap-1 justify-center">
                                        {stage.actors.slice(0, 2).map((actor, j) => (
                                            <span key={j} className="px-2 py-0.5 rounded-full text-xs bg-brand-green/10 text-brand-green font-medium">{actor}</span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Products */}
            <section id="products" className="py-24 bg-gray-50 scroll-mt-40">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-sm font-bold uppercase tracking-widest text-brand-green mb-3 block">Section 04</span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Millet Products</h2>
                        <p className="text-gray-600">{am.products.intro}</p>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Traditional */}
                        <div>
                            <h3 className="text-2xl font-extrabold text-gray-900 mb-6 flex items-center gap-3">
                                <span className="w-10 h-10 rounded-xl bg-brand-orange/20 text-brand-orange flex items-center justify-center text-sm font-bold">🌾</span>
                                Traditional Foods
                            </h3>
                            <div className="space-y-3">
                                {am.products.traditional.map((p, i) => (
                                    <div key={i} className="bg-white border border-gray-100 rounded-xl p-5 hover:border-brand-orange/30 hover:shadow-sm transition-all">
                                        <h4 className="font-bold text-gray-900 mb-1">{p.name}</h4>
                                        <p className="text-gray-500 text-sm">{p.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        {/* Modern */}
                        <div>
                            <h3 className="text-2xl font-extrabold text-gray-900 mb-6 flex items-center gap-3">
                                <span className="w-10 h-10 rounded-xl bg-brand-green/20 text-brand-green flex items-center justify-center text-sm font-bold">✨</span>
                                Modern Value-Added Products
                            </h3>
                            <div className="space-y-3">
                                {am.products.modern.map((p, i) => (
                                    <div key={i} className="bg-white border border-gray-100 rounded-xl p-5 hover:border-brand-green/30 hover:shadow-sm transition-all">
                                        <h4 className="font-bold text-gray-900 mb-1">{p.name}</h4>
                                        <p className="text-gray-500 text-sm">{p.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Policies */}
            <section id="policies" className="py-24 bg-white scroll-mt-40">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-sm font-bold uppercase tracking-widest text-brand-green mb-3 block">Section 05</span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Policies & Initiatives</h2>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        <div>
                            <h3 className="text-xl font-extrabold text-gray-900 mb-6 flex items-center gap-2">
                                <span className="w-3 h-3 rounded-full bg-brand-green inline-block" /> National Missions
                            </h3>
                            <div className="space-y-4">
                                {am.policies.national.map((pol, i) => (
                                    <div key={i} className="bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:border-brand-green/30 hover:shadow-md transition-all">
                                        <div className="flex items-start justify-between gap-4 mb-2">
                                            <h4 className="font-bold text-gray-900 text-sm leading-snug flex-1">{pol.title}</h4>
                                            <span className="text-xs text-brand-orange font-semibold flex-shrink-0">{pol.year}</span>
                                        </div>
                                        <p className="text-xs font-semibold text-brand-green mb-2">{pol.body}</p>
                                        <p className="text-gray-600 text-sm leading-relaxed">{pol.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h3 className="text-xl font-extrabold text-gray-900 mb-6 flex items-center gap-2">
                                <span className="w-3 h-3 rounded-full bg-brand-orange inline-block" /> Global Initiatives
                            </h3>
                            <div className="space-y-4">
                                {am.policies.global.map((pol, i) => (
                                    <div key={i} className="bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:border-brand-orange/30 hover:shadow-md transition-all">
                                        <h4 className="font-bold text-gray-900 text-sm leading-snug mb-2">{pol.title}</h4>
                                        <p className="text-xs font-semibold text-brand-orange mb-2">{pol.body}</p>
                                        <p className="text-gray-600 text-sm leading-relaxed">{pol.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Knowledge Resources */}
            <section id="knowledge" className="py-24 bg-gradient-to-b from-gray-50 to-white scroll-mt-40">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <span className="text-sm font-bold uppercase tracking-widest text-brand-green mb-3 block">Section 06</span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Knowledge Resources</h2>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        {/* Articles */}
                        <div>
                            <h3 className="font-extrabold text-gray-900 text-xl mb-5 flex items-center gap-2">
                                <svg className="w-5 h-5 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                                Articles
                            </h3>
                            {am.knowledge.articles.map((item, i) => (
                                <a key={i} href={item.url} className="block bg-white border border-gray-100 rounded-xl p-5 mb-3 hover:border-brand-green/30 hover:shadow-sm transition-all group">
                                    <span className="text-xs font-bold text-brand-green mb-2 block">{item.source}</span>
                                    <h4 className="font-bold text-gray-900 text-sm leading-snug group-hover:text-brand-green transition-colors">{item.title}</h4>
                                </a>
                            ))}
                        </div>
                        {/* Reports */}
                        <div>
                            <h3 className="font-extrabold text-gray-900 text-xl mb-5 flex items-center gap-2">
                                <svg className="w-5 h-5 text-brand-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>
                                Reports
                            </h3>
                            {am.knowledge.reports.map((item, i) => (
                                <a key={i} href={item.url} className="block bg-white border border-gray-100 rounded-xl p-5 mb-3 hover:border-brand-orange/30 hover:shadow-sm transition-all group">
                                    <span className="text-xs font-bold text-brand-orange mb-2 block">{item.source}</span>
                                    <h4 className="font-bold text-gray-900 text-sm leading-snug group-hover:text-brand-orange transition-colors">{item.title}</h4>
                                </a>
                            ))}
                        </div>
                        {/* External Links */}
                        <div>
                            <h3 className="font-extrabold text-gray-900 text-xl mb-5 flex items-center gap-2">
                                <svg className="w-5 h-5 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                                External Links
                            </h3>
                            {am.knowledge.externalLinks.map((link, i) => (
                                <a key={i} href={link.url} target="_blank" rel="noopener noreferrer"
                                    className="flex items-center gap-3 bg-white border border-gray-100 rounded-xl p-5 mb-3 hover:border-brand-green/30 hover:shadow-sm transition-all group">
                                    <div className="w-8 h-8 rounded-lg bg-brand-green/10 text-brand-green flex items-center justify-center flex-shrink-0 group-hover:bg-brand-green group-hover:text-white transition-all">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                                    </div>
                                    <div>
                                        <p className="font-bold text-gray-900 text-sm group-hover:text-brand-green transition-colors">{link.name}</p>
                                        <p className="text-gray-500 text-xs">{link.desc}</p>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Millet strip */}
            <div className="py-0 bg-white">
                <div className="flex overflow-hidden">
                    {Object.values(images.millets).map((img, idx) => (
                        <div key={idx} className="flex-shrink-0 w-1/4 md:w-1/8 h-20 md:h-28 relative group" style={{ width: '12.5%' }}>
                            <img src={img} alt="" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                            <div className="absolute inset-0 bg-brand-green/20 group-hover:bg-transparent transition-colors duration-500" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AboutMilletsPage;
