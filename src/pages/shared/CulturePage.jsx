import React from 'react';
import { siteContent } from '../../data/siteContent';
import { images } from '../../data/imageMap';

const CulturePage = ({ theme }) => {
    const isVibrant = theme === 'vibrant';

    const styles = {
        headerBg: isVibrant ? 'bg-brand-dark text-white' : 'bg-brand-green/10 text-brand-dark',
        headingClass: isVibrant ? 'font-black uppercase tracking-tight' : 'font-extrabold tracking-tight',
        textClass: isVibrant ? 'text-lg font-medium text-gray-700' : 'text-lg font-light text-gray-600',
        accentColor: isVibrant ? 'text-brand-yellow' : 'text-brand-green',
        cardBg: isVibrant ? 'bg-[#fdfaf2] border-2 border-brand-yellow/20' : 'bg-white shadow-sm border border-gray-100',
    };

    return (
        <div className="w-full">
            {/* Context Header */}
            <div className={`${styles.headerBg} py-20 lg:py-28 relative overflow-hidden`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <span className={`text-sm font-bold uppercase tracking-widest ${styles.accentColor} mb-4 block`}>People & Culture</span>
                    <h1 className={`text-4xl md:text-5xl lg:text-6xl ${styles.headingClass} mb-6 max-w-4xl leading-tight`}>
                        Driven by Expertise and Strategic Focus
                    </h1>
                </div>
            </div>

            <div className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20 items-center">
                        <div>
                            <h2 className={`text-3xl ${styles.headingClass} text-gray-900 mb-6`}>Our Team</h2>
                            <p className={`${styles.textClass} mb-8 leading-relaxed`}>
                                {siteContent.culture.teamIntro}
                            </p>

                            {/* Placeholder for future profiles */}
                            <div className={`p-6 rounded-xl border-dashed border-2 flex items-center justify-center text-center ${isVibrant ? 'bg-brand-yellow/5 border-brand-yellow/30' : 'bg-gray-50 border-gray-200'}`}>
                                <p className={`text-sm font-semibold uppercase tracking-wider ${styles.accentColor}`}>
                                    {siteContent.culture.teamPlaceholder}
                                </p>
                            </div>
                        </div>

                        <div className="relative">
                            {isVibrant && <div className="absolute -inset-4 bg-gradient-to-tr from-brand-yellow to-brand-green opacity-20 blur-2xl rounded-full z-0"></div>}
                            <img
                                src={images.about.culture}
                                alt="Insights Team Culture"
                                className={`relative z-10 w-full h-[500px] object-cover ${isVibrant ? 'rounded-3xl shadow-2xl' : 'rounded-lg shadow-md'}`}
                            />
                        </div>
                    </div>

                    {/* Ethos & Culture */}
                    <div className="mb-24">
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className={`text-3xl ${styles.headingClass} text-gray-900 mb-6`}>Our Work Ethos</h2>
                            <p className={`${styles.textClass} leading-relaxed`}>
                                {siteContent.culture.cultureStatement}
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                            {siteContent.culture.ethosList.map((ethos, idx) => (
                                <div key={idx} className={`${styles.cardBg} p-8 rounded-2xl text-center group transition-all duration-300 ${isVibrant ? 'hover:-translate-y-2 hover:shadow-xl' : 'hover:shadow-md'}`}>
                                    <h3 className="font-bold text-gray-900 group-hover:text-brand-green transition-colors">{ethos}</h3>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Advisory Network */}
                    <div className={`text-center py-16 px-4 ${isVibrant ? 'bg-gradient-to-r from-brand-dark to-slate-900 text-white rounded-3xl' : 'bg-slate-900 text-white rounded-xl'}`}>
                        <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider mb-6 ${isVibrant ? 'bg-brand-yellow text-brand-dark' : 'bg-brand-green/20 text-brand-green'}`}>
                            {siteContent.culture.advisory.tag}
                        </span>
                        <h2 className={`text-3xl ${styles.headingClass} mb-4`}>Advisory Network</h2>
                        <p className={`text-lg font-light opacity-80 max-w-2xl mx-auto`}>
                            {siteContent.culture.advisory.text}
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default CulturePage;
