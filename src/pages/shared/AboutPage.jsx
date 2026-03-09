import React from 'react';
import { siteContent } from '../../data/siteContent';
import { images } from '../../data/imageMap';

const AboutPage = ({ theme }) => {
    const isVibrant = theme === 'vibrant';

    const styles = {
        headerBg: isVibrant ? 'bg-brand-dark text-white' : 'bg-brand-green/10 text-brand-dark',
        headingClass: isVibrant ? 'font-black uppercase tracking-tight' : 'font-extrabold tracking-tight',
        cardBg: isVibrant ? 'bg-white rounded-3xl p-10 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border-2 border-brand-yellow/10' : 'bg-white rounded-xl p-10 shadow-sm border border-gray-100',
        accentColor: isVibrant ? 'text-brand-yellow' : 'text-brand-green',
        textClass: isVibrant ? 'text-lg font-medium text-gray-700' : 'text-lg font-light text-gray-600',
    };

    return (
        <div className="w-full">
            {/* Context Header */}
            <div className={`${styles.headerBg} py-20 lg:py-28 relative overflow-hidden`}>
                {isVibrant && <div className="absolute top-0 right-0 w-96 h-96 bg-brand-yellow blur-[100px] opacity-20 rounded-full translate-x-1/2 -translate-y-1/2"></div>}
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <span className={`text-sm font-bold uppercase tracking-widest ${isVibrant ? 'text-brand-yellow' : 'text-brand-green'} mb-4 block`}>Know About Us</span>
                    <h1 className={`text-4xl md:text-5xl lg:text-6xl ${styles.headingClass} mb-6 max-w-4xl leading-tight`}>
                        Transforming Agri-Food Value Chains & Ecosystems
                    </h1>
                </div>
            </div>

            {/* Main Content */}
            <div className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Intro & Purpose */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
                        <div>
                            <h2 className={`text-3xl ${styles.headingClass} text-gray-900 mb-6`}>Our Platform</h2>
                            <p className={`${styles.textClass} mb-6 leading-relaxed`}>
                                {siteContent.about.intro}
                            </p>
                        </div>
                        <div>
                            <h2 className={`text-3xl ${styles.headingClass} text-gray-900 mb-6`}>Our Purpose</h2>
                            <p className={`${styles.textClass} leading-relaxed`}>
                                {siteContent.about.purpose}
                            </p>
                        </div>
                    </div>

                    <div className="my-20">
                        <img
                            src={images.hero.nutrihub}
                            alt="Agri-food landscape"
                            className={`w-full h-[400px] object-cover ${isVibrant ? 'rounded-3xl shadow-xl' : 'rounded-lg shadow-md'}`}
                        />
                    </div>

                    {/* Vison & Mission */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 mb-24">
                        <div className={`${styles.cardBg} relative overflow-hidden group`}>
                            {isVibrant && <div className="absolute top-0 right-0 w-2 h-full bg-brand-yellow group-hover:w-full transition-all duration-500 opacity-10"></div>}
                            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 ${isVibrant ? 'bg-brand-yellow/20 text-brand-dark' : 'bg-brand-green/10 text-brand-green'}`}>
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                            </div>
                            <h2 className={`text-2xl ${styles.headingClass} text-gray-900 mb-6`}>Our Vision</h2>
                            <p className={`${styles.textClass} leading-relaxed relative z-10`}>
                                {siteContent.about.vision}
                            </p>
                        </div>

                        <div className={`${styles.cardBg} relative overflow-hidden group`}>
                            {isVibrant && <div className="absolute top-0 right-0 w-2 h-full bg-brand-green group-hover:w-full transition-all duration-500 opacity-10"></div>}
                            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 ${isVibrant ? 'bg-brand-green/20 text-brand-dark' : 'bg-brand-green/10 text-brand-green'}`}>
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                            </div>
                            <h2 className={`text-2xl ${styles.headingClass} text-gray-900 mb-6`}>Our Mission</h2>
                            <p className={`${styles.textClass} leading-relaxed relative z-10`}>
                                {siteContent.about.mission}
                            </p>
                        </div>
                    </div>

                    {/* Journey Timeline Placeholder */}
                    <div className={`text-center py-16 px-4 ${isVibrant ? 'bg-brand-yellow/10 border-2 border-brand-yellow/20 rounded-3xl' : 'bg-white border-t border-b border-gray-200'}`}>
                        <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider mb-6 ${isVibrant ? 'bg-white text-brand-dark shadow-sm' : 'bg-brand-green/10 text-brand-green'}`}>
                            {siteContent.about.journey.tag}
                        </span>
                        <h2 className={`text-3xl ${styles.headingClass} text-gray-900 mb-4`}>Our Journey</h2>
                        <p className={`${styles.textClass}`}>{siteContent.about.journey.text}</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AboutPage;
