import React from 'react';
import { siteContent } from '../../data/siteContent';
import { images } from '../../data/imageMap';

const af = siteContent.aboutUs.affiliations;

const AffiliationsPage = () => {
    return (
        <div className="w-full">
            {/* Hero */}
            <div className="relative min-h-[45vh] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src={images.about.building} alt="Affiliations" className="w-full h-full object-cover" loading="eager" />
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/80 to-transparent" />
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
                    <div className="max-w-3xl">
                        <span className="text-sm font-bold uppercase tracking-widest mb-4 block text-brand-orange">About Us</span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-white leading-tight">
                            Affiliations & Links
                        </h1>
                        <p className="text-xl text-gray-200 font-light leading-relaxed">
                            {af.intro}
                        </p>
                    </div>
                </div>
            </div>

            {/* Removed Partner Institutions and Related Platforms per request */}
        </div>
    );
};

export default AffiliationsPage;
