import React, { useEffect, useState } from 'react';
import { siteContent } from '../../data/siteContent';
import { images } from '../../data/imageMap';
import EditableText from '../../components/EditableText';
import EditableImage from '../../components/EditableImage';
import EditableLink from '../../components/EditableLink';
import { useContent } from '../../context/ContentContext';

const LandingPage = () => {
    const home = siteContent.home;
    const [currentHeroImage, setCurrentHeroImage] = useState(0);

    const heroImages = [
        "/assets/photos/drive/Millet with farmers/farmer with millets.png",
        images.works.project1,
        images.works.project2,
    ];

    const { isEditMode } = useContent();

    useEffect(() => {
        window.scrollTo(0, 0);
        
        if (isEditMode) return; // Prevent slideshow re-renders in Edit Mode
        
        const interval = setInterval(() => {
            setCurrentHeroImage((prev) => (prev + 1) % heroImages.length);
        }, 4000); // Fades every 4 seconds
        
        return () => clearInterval(interval);
    }, [heroImages.length, isEditMode]);

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
                    <EditableImage
                        key={index}
                        contentKey={`hero-image-${index}`}
                        defaultSrc={img}
                        alt={`Hero Slide ${index + 1}`}
                        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                            index === currentHeroImage ? 'opacity-50 z-0' : 'opacity-0 -z-10'
                        }`}
                    />
                ))}
                
                <div className="relative z-10 max-w-4xl mx-auto px-4 text-center mt-16">
                    <EditableText as="p" contentKey="hero-pretext" defaultText="Insights Value Hub" className="text-white/80 font-semibold tracking-[0.2em] uppercase text-sm mb-6 block" />
                    <EditableText as="h1" contentKey="landing-title" defaultText={home.hero.headline} className="text-5xl md:text-7xl font-bold text-white mb-8 leading-[1.1] tracking-tight block" />
                    <EditableText as="p" contentKey="landing-subtitle" defaultText={home.hero.subline} className="text-xl md:text-2xl text-white/90 font-light mb-12 leading-relaxed block" />
                    
                    <EditableLink
                        contentKey="hero-cta"
                        to="/what-we-do"
                        defaultText="Explore What We Do"
                        className="inline-block bg-white text-black font-semibold px-10 py-4 uppercase tracking-widest text-sm hover:bg-brand-green hover:text-white transition-colors duration-300"
                    />
                </div>
            </section>

            {/* 2. STATS STRIP - Minimalist */}
            <section className="bg-white border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
                        {home.hero.stats.map((stat, i) => (
                            <div key={i} className="py-12 flex flex-col items-center justify-center text-center">
                                <EditableText as="span" contentKey={`stat-val-${i}`} defaultText={stat.value} className="text-5xl font-bold text-gray-900 mb-2 block" />
                                <EditableText as="span" contentKey={`stat-label-${i}`} defaultText={stat.label} className="text-sm font-semibold tracking-widest uppercase text-gray-500 block" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. ABOUT STATEMENT - Like "Committed to Your Health and Wellness" */}
            <section className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <EditableText as="h2" contentKey="about-statement" defaultText="From grassroots aggregation to global market linkage — we orchestrate transformation across the entire agri-food value chain." className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight block" />
                    
                    <EditableLink 
                        contentKey="about-statement-cta"
                        to="/about-us" 
                        defaultText="Learn About Our Mission"
                        className="inline-block mt-8 text-brand-green font-bold uppercase tracking-widest text-sm border-b-2 border-brand-green pb-1 hover:text-brand-dark hover:border-brand-dark transition-colors"
                    />
                </div>
            </section>

            {/* 4. THE POWER OF MILLETS - Clean grid like Agasthya's grain list */}
            <section className="py-24 bg-[#FAFAFA]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <EditableText as="h2" contentKey="millets-title" defaultText="Ancient Grains, Modern Systems" className="text-4xl font-bold text-gray-900 mb-4 block" />
                        <EditableText as="p" contentKey="millets-subtitle" defaultText="Promoting the nutritional and ecological resilience of millets." className="text-lg text-gray-600 max-w-2xl mx-auto block" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                        {home.premiumMilletsHighlight.map((millet, i) => (
                            <div key={i} className="group">
                                <div className="aspect-[4/3] bg-gray-200 overflow-hidden mb-6">
                                    <EditableImage
                                        contentKey={`millet-img-${i}`}
                                        defaultSrc={premiumMilletsImages[millet.imgKey] || images.about.culture}
                                        alt={millet.name}
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                                    />
                                </div>
                                <EditableText as="h3" contentKey={`millet-name-${i}`} defaultText={millet.name} className="text-2xl font-bold text-gray-900 mb-2 block" />
                                <EditableText as="p" contentKey={`millet-desc-${i}`} defaultText={millet.subtitle} className="text-gray-600 mb-4 block" />
                                <span className="inline-block px-3 py-1 bg-gray-100 text-gray-800 text-xs font-bold uppercase tracking-wide">
                                    <EditableText as="span" contentKey={`millet-tag-${i}`} defaultText={millet.tag} />
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
                        <EditableText as="h2" contentKey="eco-cap-title" defaultText="Ecosystem Capabilities" className="text-4xl font-bold text-gray-900 mb-4 block" />
                        <EditableText as="p" contentKey="eco-cap-desc" defaultText={siteContent.services.overview} className="text-lg text-gray-600 max-w-3xl block" />
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center mb-24">
                        <div className="order-2 lg:order-1">
                            <EditableText as="h3" contentKey="tech-comm-title" defaultText="Technology Commercialization" className="text-3xl font-bold text-gray-900 mb-6 block" />
                            <EditableText as="p" contentKey="tech-comm-desc" defaultText="We bridge the gap between lab innovations and field applications. Through our robust R&D network and strategic partnerships, we validate and commercialize modern agricultural technologies." className="text-gray-600 text-lg mb-8 leading-relaxed block" />
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <svg className="w-6 h-6 text-brand-green mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <EditableText as="span" contentKey="tech-bullet-1" defaultText="Intellectual property facilitation" className="text-gray-700" />
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-6 h-6 text-brand-green mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <EditableText as="span" contentKey="tech-bullet-2" defaultText="Pilot testing and validation" className="text-gray-700" />
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-6 h-6 text-brand-green mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <EditableText as="span" contentKey="tech-bullet-3" defaultText="Direct-to-market scaling" className="text-gray-700" />
                                </li>
                            </ul>
                        </div>
                        <div className="order-1 lg:order-2">
                            <EditableImage contentKey="tech-comm-img" defaultSrc={images.drive.techTransfer} alt="Tech" className="w-full aspect-[4/5] object-contain p-4 bg-gray-50 border border-gray-100 rounded-3xl" />
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-center">
                        <div className="flex items-center justify-center p-2 bg-white rounded-3xl">
                            <EditableImage contentKey="cap-build-img" defaultSrc={images.drive.capacityBuilding} alt="Capacity Building Icons" className="w-full object-contain hover:scale-105 transition-transform duration-500" />
                        </div>
                        <div>
                            <EditableText as="h3" contentKey="cap-build-title" defaultText="Capacity Building & Enterprise" className="text-3xl font-bold text-gray-900 mb-6 block" />
                            <EditableText as="p" contentKey="cap-build-desc" defaultText="Building the institutional and operational capacities of FPOs, rural entrepreneurs, and agri-startups to thrive in competitive markets." className="text-gray-600 text-lg mb-8 leading-relaxed block" />
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <svg className="w-6 h-6 text-brand-green mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <EditableText as="span" contentKey="cap-bullet-1" defaultText="Startup Incubation Programs" className="text-gray-700" />
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-6 h-6 text-brand-green mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <EditableText as="span" contentKey="cap-bullet-2" defaultText="FPO Governance Training" className="text-gray-700" />
                                </li>
                                <li className="flex items-start">
                                    <svg className="w-6 h-6 text-brand-green mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                    <EditableText as="span" contentKey="cap-bullet-3" defaultText="Market orientation workshops" className="text-gray-700" />
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. TRUSTED BY / CERTIFICATIONS LOGOS (Clean white banner) */}
            <section className="py-20 bg-[#F4F4F4]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <EditableText as="h3" contentKey="trusted-title" defaultText="Institutional Partners & Affiliations" className="text-gray-500 font-bold tracking-widest uppercase text-sm mb-12 block" />
                    <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 grayscale">
                        {home.trustedPartners.map((partner, i) => (
                            <div key={i} className="flex flex-col items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
                                <EditableText as="span" contentKey={`trusted-partner-${i}`} defaultText={partner.title} className="font-extrabold text-2xl tracking-tighter text-gray-800" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6.5 ECOSYSTEM PLATFORMS */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14">
                        <EditableText as="span" contentKey="eco-platforms-pretitle" defaultText="Ecosystem" className="text-sm font-bold uppercase tracking-widest text-brand-green mb-3 block" />
                        <EditableText as="h2" contentKey="eco-platforms-title" defaultText="Related Platforms" className="text-3xl font-extrabold text-gray-900 block" />
                    </div>
                    <div className="flex flex-wrap justify-center gap-6">
                        {siteContent.aboutUs.affiliations.relatedLinks.map((link, i) => (
                            <a key={i} href={link.url} target="_blank" rel="noopener noreferrer"
                                className="bg-gray-50 border border-gray-100 rounded-2xl p-6 hover:shadow-lg hover:border-brand-green/30 transition-all group flex-1 min-w-[250px] max-w-[300px]">
                                <div className="w-10 h-10 rounded-xl bg-brand-green/10 text-brand-green flex items-center justify-center mb-4 group-hover:bg-brand-green group-hover:text-white transition-all">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                                </div>
                                <EditableText as="h3" contentKey={`eco-platform-name-${i}`} defaultText={link.name} className="font-bold text-gray-900 mb-2 group-hover:text-brand-green transition-colors block" />
                                <EditableText as="p" contentKey={`eco-platform-desc-${i}`} defaultText={link.desc} className="text-sm text-gray-500 leading-relaxed block" />
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. ACRONYM - Very clean 4-column text grid */}
            <section className="py-32 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <EditableText as="h2" contentKey="acronym-title" defaultText={home.acronym.title} className="text-4xl font-bold text-gray-900 mb-4 block" />
                        <EditableText as="p" contentKey="acronym-subtitle" defaultText={home.acronym.subtitle} className="text-lg text-gray-500 block" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
                        {home.acronym.letters.map((item, i) => (
                            <div key={i}>
                                <EditableText as="div" contentKey={`acronym-letter-${i}`} defaultText={item.letter} className="text-5xl font-black text-gray-200 mb-4 block" />
                                <EditableText as="h3" contentKey={`acronym-word-${i}`} defaultText={item.word} className="text-xl font-bold text-gray-900 mb-2 block" />
                                <EditableText as="p" contentKey={`acronym-desc-${i}`} defaultText={item.desc} className="text-gray-600 leading-relaxed block" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 8. FOOTER CTA */}
            <section className="py-32 bg-brand-green text-center">
                <div className="max-w-3xl mx-auto px-4">
                    <EditableText as="h2" contentKey="footer-cta-title" defaultText="Ready to Build the Future of Food & Agriculture?" className="text-4xl md:text-5xl font-bold text-white mb-8 block" />
                    <EditableLink 
                        contentKey="footer-cta-link"
                        to="/contact" 
                        defaultText="Become a Partner"
                        className="inline-block bg-white text-brand-green font-bold px-12 py-5 uppercase tracking-widest text-sm hover:bg-gray-100 transition-colors"
                    />
                </div>
            </section>

        </div>
    );
};

export default LandingPage;
