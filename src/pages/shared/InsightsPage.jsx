import React from 'react';
import { siteContent } from '../../data/siteContent';
import { images } from '../../data/imageMap';

const InsightsPage = ({ theme }) => {
    const isVibrant = theme === 'vibrant';

    const styles = {
        headerBg: isVibrant ? 'bg-brand-dark text-white' : 'bg-slate-50 text-brand-dark border-b border-gray-200',
        headingClass: isVibrant ? 'font-black uppercase tracking-tight' : 'font-extrabold tracking-tight',
        textClass: isVibrant ? 'text-lg font-medium text-gray-700' : 'text-lg font-light text-gray-600',
        accentColor: isVibrant ? 'text-brand-yellow' : 'text-brand-green',
        tagBg: isVibrant ? 'bg-brand-yellow/20 text-brand-dark' : 'bg-white shadow-sm text-brand-green border border-gray-100',
    };

    return (
        <div className="w-full">
            <div className={`${styles.headerBg} py-20 lg:py-28 relative overflow-hidden`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-8">
                    <div className="max-w-2xl">
                        <span className={`text-sm font-bold uppercase tracking-widest ${styles.accentColor} mb-4 block`}>Knowledge Repository</span>
                        <h1 className={`text-4xl md:text-5xl lg:text-6xl ${styles.headingClass} mb-6 leading-tight`}>
                            Insights
                        </h1>
                        <p className={`text-xl ${isVibrant ? 'text-gray-300' : 'text-gray-600 font-light'}`}>
                            {siteContent.insights.intro}
                        </p>
                    </div>
                    {isVibrant && (
                        <div className="hidden md:block w-32 h-32 relative">
                            <div className="absolute inset-0 bg-brand-yellow rounded-full animate-ping opacity-20"></div>
                            <div className="absolute inset-2 bg-gradient-to-tr from-brand-yellow to-brand-green rounded-full shadow-lg flex items-center justify-center">
                                <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <div className="py-20 bg-white min-h-[50vh]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Categories Pills */}
                    <div className="flex flex-wrap gap-4 mb-20 justify-center">
                        {siteContent.insights.categories.map((cat, i) => (
                            <span key={i} className={`px-5 py-2.5 rounded-full font-bold text-sm transition-all cursor-pointer hover:shadow-md ${isVibrant ? 'bg-[#fdfaf2] border-2 border-brand-yellow/30 text-brand-dark hover:bg-brand-yellow/20' : 'bg-gray-50 text-gray-700 hover:bg-brand-green hover:text-white'}`}>
                                {cat}
                            </span>
                        ))}
                    </div>

                    {/* Coming Soon Banner matching PRD */}
                    <div className={`max-w-4xl mx-auto text-center p-12 lg:p-16 ${isVibrant ? 'bg-gradient-to-b from-[#fdfaf2] to-white border-2 border-brand-yellow/30 rounded-[3rem]' : 'bg-gray-50 rounded-2xl border border-gray-100'}`}>
                        <div className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-8 ${isVibrant ? 'bg-brand-yellow/20 text-brand-dark' : 'bg-brand-green/10 text-brand-green'}`}>
                            <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9.5a2.5 2.5 0 00-2.5-2.5H14" /></svg>
                        </div>
                        <h2 className={`text-4xl ${styles.headingClass} text-gray-900 mb-6`}>
                            {siteContent.insights.placeholder.title}
                        </h2>
                        <p className={`${styles.textClass} max-w-2xl mx-auto`}>
                            {siteContent.insights.placeholder.text}
                        </p>

                        <div className="mt-12 flex justify-center space-x-4 opacity-50 block filter grayscale transition-all hover:grayscale-0 hover:opacity-100 duration-500 cursor-pointer">
                            <img src={images.vectors.millet01} alt="Decoration" className="h-16 w-auto object-contain" />
                            <img src={images.vectors.jowar} alt="Decoration" className="h-16 w-auto object-contain" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default InsightsPage;
