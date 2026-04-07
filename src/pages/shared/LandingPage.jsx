import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { siteContent } from '../../data/siteContent';
import { images } from '../../data/imageMap';

const LandingPage = () => {
    const home = siteContent.home;
    const [currentHeroImage, setCurrentHeroImage] = useState(0);

    const heroImages = [
        images.hero.nutrihub,
        images.services['value-chain'], 
        images.works.project1,
        images.about.meeting,
        images.services['tech-commercialization'],
    ];

    useEffect(() => {
        window.scrollTo(0, 0);
        
        const interval = setInterval(() => {
            setCurrentHeroImage((prev) => (prev + 1) % heroImages.length);
        }, 4000); // Fades every 4 seconds
        
        return () => clearInterval(interval);
    }, [heroImages.length]);

    const premiumMilletsImages = {
        jowar: images.millets.jowar,
        pearl: images.millets.pearl,
        finger: images.millets.finger,
        foxtail: images.millets.foxtail,
        barnyard: images.millets.barnyard,
    };

    return (
        <div className="w-full bg-[#FAFAFA] font-sans text-gray-900">

            {/* 1. HERO - Clean, centered, large typography like Agasthya with Fading Slideshow */}
            <section className="relative w-full h-[90vh] flex items-center justify-center overflow-hidden bg-black">
                {heroImages.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt={`Hero Slide ${index + 1}`}
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                            index === currentHeroImage ? 'opacity-50 z-0' : 'opacity-0 -z-10'
                        }`}
                    />
                ))}
                
                <div className="relative z-10 max-w-4xl mx-auto px-4 text-center mt-16">
                    <p className="text-white/80 font-semibold tracking-[0.2em] uppercase text-sm mb-6">Insights Value Hub</p>
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-[1.1] tracking-tight">
                        {home.hero.headline}
                    </h1>
                    <p className="text-xl md:text-2xl text-white/90 font-light mb-12 leading-relaxed">
                        {home.hero.subline}
                    </p>
                    <Link
                        to="/what-we-do"
                        className="inline-block bg-white text-black font-semibold px-10 py-4 uppercase tracking-widest text-sm hover:bg-brand-green hover:text-white transition-colors duration-300"
                    >
                        Explore What We Do
                    </Link>
                </div>
            </section>

            {/* 2. STATS STRIP - Minimalist */}
            <section className="bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
                        {home.hero.stats.map((stat, i) => (
                            <div key={i} className="py-12 flex flex-col items-center justify-center text-center">
                                <span className="text-5xl font-bold text-gray-900 mb-2">{stat.value}</span>
                                <span className="text-sm font-semibold tracking-widest uppercase text-gray-500">{stat.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. ABOUT STATEMENT - Like "Committed to Your Health and Wellness" */}
            <section className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                        From grassroots aggregation to global market linkage — we orchestrate transformation across the entire agri-food value chain.
                    </h2>
                    <Link to="/about-us" className="inline-block mt-8 text-brand-green font-bold uppercase tracking-widest text-sm border-b-2 border-brand-green pb-1 hover:text-brand-dark hover:border-brand-dark transition-colors">
                        Learn About Our Mission
                    </Link>
                </div>
            </section>

            {/* 4. THE POWER OF MILLETS - Clean grid like Agasthya's grain list */}
            <section className="py-24 bg-[#FAFAFA]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Ancient Grains, Modern Systems</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">Promoting the nutritional and ecological resilience of millets.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                        {home.premiumMilletsHighlight.map((millet, i) => (
                            <div key={i} className="group">
                                <div className="aspect-[4/3] bg-gray-200 overflow-hidden mb-6">
                                    <img
                                        src={premiumMilletsImages[millet.imgKey] || images.about.culture}
                                        alt={millet.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                        loading="lazy"
                                    />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">{millet.name}</h3>
                                <p className="text-gray-600 mb-4">{millet.subtitle}</p>
                                <span className="inline-block px-3 py-1 bg-gray-100 text-gray-800 text-xs font-bold uppercase tracking-wide">
                                    {millet.tag}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. PROCESS & SERVICES - Left aligned text, alternating blocks */}
            <section className="py-24 bg-white border-t border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-20">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">Ecosystem Capabilities</h2>
                        <p className="text-lg text-gray-600 max-w-3xl">{siteContent.services.overview}</p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center mb-24">
                        <div className="order-2 lg:order-1">
                            <h3 className="text-3xl font-bold text-gray-900 mb-6">Technology Commercialization</h3>
                            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                                We bridge the gap between lab innovations and field applications. Through our robust R&D network and strategic partnerships, we validate and commercialize modern agricultural technologies.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <svg className="w-6 h-6 text-brand-green mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span className="text-gray-700">Intellectual property facilitation</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-6 h-6 text-brand-green mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span className="text-gray-700">Pilot testing and validation</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-6 h-6 text-brand-green mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span className="text-gray-700">Direct-to-market scaling</span>
                                </li>
                            </ul>
                        </div>
                        <div className="order-1 lg:order-2">
                            <img src={images.services['tech-commercialization']} alt="Tech" className="w-full aspect-[4/5] object-cover" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
                        <div>
                            <img src={images.about.team} alt="Capacity Building" className="w-full aspect-[4/5] object-cover" />
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold text-gray-900 mb-6">Capacity Building & Enterprise</h3>
                            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                                Building the institutional and operational capacities of FPOs, rural entrepreneurs, and agri-startups to thrive in competitive markets.
                            </p>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <svg className="w-6 h-6 text-brand-green mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span className="text-gray-700">Startup Incubation Programs</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-6 h-6 text-brand-green mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span className="text-gray-700">FPO Governance Training</span>
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-6 h-6 text-brand-green mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <span className="text-gray-700">Market orientation workshops</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. TRUSTED BY / CERTIFICATIONS LOGOS (Clean white banner) */}
            <section className="py-20 bg-[#F4F4F4]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h3 className="text-gray-500 font-bold tracking-widest uppercase text-sm mb-12">Institutional Partners & Affiliations</h3>
                    <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 grayscale">
                        {home.trustedPartners.map((partner, i) => (
                            <div key={i} className="flex flex-col items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
                                <span className="font-extrabold text-2xl tracking-tighter text-gray-800">{partner.title}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. ACRONYM - Very clean 4-column text grid */}
            <section className="py-32 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">{home.acronym.title}</h2>
                        <p className="text-lg text-gray-500">{home.acronym.subtitle}</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
                        {home.acronym.letters.map((item, i) => (
                            <div key={i}>
                                <div className="text-5xl font-black text-gray-200 mb-4">{item.letter}</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">{item.word}</h3>
                                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 8. FOOTER CTA */}
            <section className="py-32 bg-brand-green text-center">
                <div className="max-w-3xl mx-auto px-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Ready to Build the Future of Food & Agriculture?</h2>
                    <Link to="/contact" className="inline-block bg-white text-brand-green font-bold px-12 py-5 uppercase tracking-widest text-sm hover:bg-gray-100 transition-colors">
                        Become a Partner
                    </Link>
                </div>
            </section>

        </div>
    );
};

export default LandingPage;
