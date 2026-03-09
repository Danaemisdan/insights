import React from 'react';
import { Link } from 'react-router-dom';
import { siteContent } from '../../data/siteContent';
import { images } from '../../data/imageMap';

const LandingPage = ({ theme }) => {
    const isVibrant = theme === 'vibrant';

    // Theme-specific styling tokens
    const styles = {
        heroBg: isVibrant ? 'bg-brand-dark' : 'bg-brand-dark',
        heroText: isVibrant ? 'text-brand-yellow' : 'text-white',
        heroSubText: isVibrant ? 'text-gray-300' : 'text-gray-200',
        heroButton: isVibrant
            ? 'bg-brand-yellow text-brand-dark hover:bg-brand-green hover:text-white'
            : 'bg-brand-green text-white hover:bg-white hover:text-brand-dark',
        sectionBg: isVibrant ? 'bg-[#fdfaf2]' : 'bg-gray-50',
        cardBg: isVibrant ? 'bg-white border-2 border-brand-yellow/10 hover:border-brand-yellow/30' : 'bg-white shadow-sm border border-gray-100 hover:shadow-md',
        headingClass: isVibrant ? 'font-black uppercase tracking-tight' : 'font-extrabold tracking-tight',
        textClass: isVibrant ? 'text-lg font-medium text-gray-700' : 'text-lg font-light text-gray-600',
        accentColor: isVibrant ? 'text-brand-yellow' : 'text-brand-green',
    };

    const heroImage = isVibrant ? images.hero.vibrant : images.hero.nutrihub;
    const basePath = isVibrant ? '/template2' : '/template1';

    return (
        <div className="w-full">
            {/* 1. HERO SECTION */}
            <section className={`relative w-full ${isVibrant ? 'min-h-[85vh]' : 'min-h-[75vh]'} flex items-center overflow-hidden`}>
                <div className="absolute inset-0 z-0">
                    <img
                        src={heroImage}
                        alt="Hero background"
                        className={`w-full h-full object-cover ${isVibrant ? 'opacity-30 mix-blend-luminosity' : 'opacity-40'}`}
                    />
                    <div className={`absolute inset-0 ${isVibrant ? 'bg-gradient-to-br from-brand-dark via-brand-dark/90 to-brand-green/80' : 'bg-gradient-to-r from-brand-dark/95 to-brand-dark/70'}`}></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                    <div className={`max-w-4xl ${isVibrant ? 'mx-auto text-center' : ''}`}>
                        {isVibrant && (
                            <div className="inline-block px-4 py-1.5 rounded-full bg-brand-yellow/20 border border-brand-yellow/30 text-brand-yellow font-bold text-sm tracking-widest uppercase mb-8 backdrop-blur-sm animate-pulse">
                                Innovation &bull; Governance &bull; Strategy
                            </div>
                        )}
                        <h1 className={`text-4xl md:text-5xl lg:text-6xl ${styles.headingClass} ${styles.heroText} mb-6 leading-tight`}>
                            {siteContent.home.hero.headline}
                        </h1>
                        <p className={`text-xl md:text-2xl ${styles.heroSubText} mb-10 max-w-3xl ${isVibrant ? 'mx-auto font-medium' : 'font-light'}`}>
                            {siteContent.home.hero.subline}
                        </p>
                        <div className={`flex flex-col sm:flex-row gap-4 ${isVibrant ? 'justify-center' : ''}`}>
                            <Link
                                to={`${basePath}/about`}
                                className={`inline-flex justify-center items-center px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:-translate-y-1 ${styles.heroButton}`}
                            >
                                Discover Our Platform
                            </Link>
                            <Link
                                to={`${basePath}/services/value-chain`}
                                className={`inline-flex justify-center items-center px-8 py-4 rounded-full font-bold text-lg border-2 transition-all duration-300 transform hover:-translate-y-1 ${isVibrant ? 'border-brand-yellow/50 text-brand-yellow hover:bg-brand-yellow hover:text-brand-dark' : 'border-white/30 text-white hover:bg-white hover:text-brand-dark'}`}
                            >
                                Explore Services
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. QUICK INTRO SECTION (Snapshot of About) */}
            <section className={`py-24 ${styles.sectionBg}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className={`text-sm font-bold uppercase tracking-widest ${styles.accentColor} mb-4 block`}>About INSIGHTS</span>
                            <h2 className={`text-3xl md:text-4xl ${styles.headingClass} text-gray-900 mb-6 leading-snug`}>
                                Shaping Dynamic Ecosystems for Agri-Food Systems
                            </h2>
                            <p className={`${styles.textClass} mb-6 leading-relaxed`}>
                                {siteContent.about.intro}
                            </p>
                            <p className={`${styles.textClass} mb-8 leading-relaxed`}>
                                {siteContent.about.purpose}
                            </p>
                            <Link
                                to={`${basePath}/about`}
                                className={`inline-flex items-center font-bold text-lg group ${styles.accentColor} hover:text-brand-dark transition-colors`}
                            >
                                Read Our Full Story
                                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                            </Link>
                        </div>
                        <div className="relative">
                            {isVibrant && <div className="absolute -inset-4 bg-gradient-to-tr from-brand-yellow to-brand-green opacity-20 blur-2xl rounded-full z-0"></div>}
                            <img
                                src={images.about.team}
                                alt="Insights Team / Office"
                                className={`relative z-10 w-full h-[500px] object-cover ${isVibrant ? 'rounded-3xl shadow-2xl' : 'rounded-lg shadow-xl'}`}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. CORE SERVICES HIGHLIGHT */}
            <section className="py-24 bg-white relative overflow-hidden">
                {isVibrant && <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-yellow/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 z-0"></div>}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className={`text-sm font-bold uppercase tracking-widest ${styles.accentColor} mb-4 block`}>Our Expertise</span>
                        <h2 className={`text-3xl md:text-5xl ${styles.headingClass} text-gray-900 mb-6`}>
                            {siteContent.services.overview}
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {siteContent.services.list.slice(0, 3).map((service, index) => (
                            <Link
                                key={service.id}
                                to={`${basePath}/services/${service.id}`}
                                className={`group flex flex-col p-8 rounded-2xl transition-all duration-300 ${styles.cardBg} ${isVibrant ? 'transform hover:-translate-y-2 hover:shadow-2xl' : ''}`}
                            >
                                <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 transition-colors ${isVibrant ? 'bg-brand-yellow/20 text-brand-dark group-hover:bg-brand-yellow' : 'bg-brand-green/10 text-brand-green group-hover:bg-brand-green group-hover:text-white'}`}>
                                    <span className="font-black text-xl">{index + 1}</span>
                                </div>
                                <h3 className={`text-xl font-bold text-gray-900 mb-3 group-hover:${styles.accentColor} transition-colors`}>{service.title}</h3>
                                <p className="text-gray-600 font-medium leading-relaxed flex-grow">{service.desc}</p>
                            </Link>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <Link
                            to={`${basePath}/services/value-chain`}
                            className={`inline-flex items-center px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 ${isVibrant ? 'bg-brand-dark text-brand-yellow hover:bg-brand-green hover:text-white' : 'bg-brand-green text-white hover:bg-brand-dark'}`}
                        >
                            View All Services
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LandingPage;
