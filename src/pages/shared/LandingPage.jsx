import React from 'react';
import { Link } from 'react-router-dom';
import { siteContent } from '../../data/siteContent';
import { images } from '../../data/imageMap';

const LandingPage = ({ theme }) => {
    
    

    const styles = {
        accentColor: 'text-brand-green',
        headingClass: 'font-extrabold tracking-tight',
        cardBg: 'bg-white shadow-sm border border-gray-100 hover:shadow-xl hover:border-brand-green/30',
    };

    const heroImage = images.hero.nutrihub;
    const milletImages = [images.millets.barnyard, images.millets.finger, images.millets.foxtail, images.millets.jowar, images.millets.pearl, images.millets.proso];

    return (
        <div className="w-full">
            {/* 1. HERO SECTION - Full bleed */}
            <section className="relative w-full min-h-[90vh] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src={heroImage} alt="Hero background" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/80 to-transparent"></div>
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20">
                    <div className={'max-w-3xl '}>
                        <h1 className={`text-5xl md:text-6xl lg:text-7xl ${styles.headingClass} text-white mb-8 leading-[1.1]`}>
                            {siteContent.home.hero.headline}
                        </h1>
                        <p className={`text-xl md:text-2xl text-gray-200 mb-12 max-w-2xl font-light leading-relaxed`}>
                            {siteContent.home.hero.subline}
                        </p>
                        <div className={`flex flex-col sm:flex-row gap-4 `}>
                            <Link
                                to={`/about`}
                                className={`inline-flex justify-center items-center px-10 py-5 rounded-full font-bold text-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl bg-white text-brand-dark hover:bg-brand-green hover:text-white`}
                            >
                                Discover Our Platform
                            </Link>
                            <Link
                                to={`/services/value-chain`}
                                className={`inline-flex justify-center items-center px-10 py-5 rounded-full font-bold text-lg border-2 transition-all duration-300 transform hover:-translate-y-1 border-white/40 text-white hover:bg-white hover:text-brand-dark`}
                            >
                                Explore Services
                            </Link>
                        </div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
                    <svg className="w-6 h-6 text-white/60" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
                </div>
            </section>

            {/* 2. MILLET PHOTO STRIP */}
            <section className="py-0 bg-white">
                <div className="flex overflow-hidden">
                    {milletImages.map((img, idx) => (
                        <div key={idx} className="flex-shrink-0 w-1/3 md:w-1/6 h-24 md:h-32 relative group">
                            <img src={img} alt={`Millet ${idx + 1}`} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                            <div className="absolute inset-0 bg-brand-green/20 group-hover:bg-transparent transition-colors duration-500"></div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 3. ABOUT SECTION */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className={`text-sm font-bold uppercase tracking-widest ${styles.accentColor} mb-4 block`}>About INSIGHTS</span>
                            <h2 className={`text-3xl md:text-4xl ${styles.headingClass} text-gray-900 mb-6 leading-snug`}>
                                Shaping Dynamic Ecosystems for Agri-Food Systems
                            </h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                {siteContent.about.intro}
                            </p>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                {siteContent.about.purpose}
                            </p>
                            <Link
                                to={`/about`}
                                className={`inline-flex items-center font-bold text-lg group ${styles.accentColor} hover:text-brand-dark transition-colors`}
                            >
                                Read Our Full Story
                                <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                            </Link>
                        </div>
                        <div className="relative">
                            
                            <img
                                src={images.about.team}
                                alt="Insights Office"
                                className={`relative z-10 w-full h-[500px] object-cover rounded-2xl shadow-xl`}
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. SERVICES GRID */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <span className={`text-sm font-bold uppercase tracking-widest ${styles.accentColor} mb-4 block`}>Our Expertise</span>
                        <h2 className={`text-3xl md:text-5xl ${styles.headingClass} text-gray-900 mb-6`}>
                            {siteContent.services.overview}
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {siteContent.services.list.map((service, index) => (
                            <Link
                                key={service.id}
                                to={`/services/${service.id}`}
                                className={`group flex flex-col overflow-hidden rounded-2xl transition-all duration-300 ${styles.cardBg}`}
                            >
                                <div className="h-48 overflow-hidden relative">
                                    <img
                                        src={images.services[service.id] || images.about.culture}
                                        alt={service.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-brand-green/20 group-hover:bg-transparent transition-colors"></div>
                                    <div className="absolute top-4 left-4 w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-sm bg-brand-green/90">
                                        {String(index + 1).padStart(2, '0')}
                                    </div>
                                </div>
                                <div className="p-6 flex-grow">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-brand-green transition-colors">{service.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{service.desc}</p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. STATS / IMPACT STRIP */}
            <section className="py-16 bg-gradient-to-r from-brand-green to-brand-dark">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        {[
                            { number: '6+', label: 'Service Verticals' },
                            { number: '50+', label: 'Millet Varieties Covered' },
                            { number: '10+', label: 'Institutional Partners' },
                            { number: '5+', label: 'States Engaged' },
                        ].map((stat, idx) => (
                            <div key={idx} className="text-white">
                                <div className="text-4xl md:text-5xl font-black mb-2 text-white">{stat.number}</div>
                                <div className="text-sm uppercase tracking-wider text-gray-300 font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default LandingPage;
