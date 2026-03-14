import React from 'react';
import { siteContent } from '../../data/siteContent';
import { images } from '../../data/imageMap';

const InsightsPage = ({ theme }) => {
    const isVibrant = theme === 'vibrant';

    const styles = {
        headingClass: isVibrant ? 'font-black uppercase tracking-tight' : 'font-extrabold tracking-tight',
        accentColor: isVibrant ? 'text-brand-yellow' : 'text-brand-green',
        tagBg: isVibrant ? 'bg-brand-yellow/20 text-brand-dark' : 'bg-white shadow-sm text-brand-green border border-gray-100',
    };

    const insightCards = [
        { title: 'The Future of Millets in Global Food Systems', type: 'Articles', date: 'March 2024', img: images.insights.article1, excerpt: 'Exploring how millets are reshaping nutritional security and sustainable agriculture worldwide.' },
        { title: 'Policy Framework for Agri-Tech Innovation', type: 'Policy Notes', date: 'February 2024', img: images.insights.article2, excerpt: 'Key policy recommendations for accelerating agricultural technology adoption across India.' },
        { title: 'Value Chain Optimization in Millet Processing', type: 'Industry Perspectives', date: 'January 2024', img: images.insights.article3, excerpt: 'Industry insights on streamlining millet processing for enhanced market competitiveness.' },
        { title: 'International Millet Year: Lessons & Outcomes', type: 'Event Highlights', date: 'December 2023', img: images.insights.article4, excerpt: 'Comprehensive review of the International Year of Millets and its lasting impact.' },
        { title: 'Entrepreneurship in the Nutri-Cereal Sector', type: 'Research Summaries', date: 'November 2023', img: images.millets.pearl, excerpt: 'Research findings on emerging startup ecosystems in the millet value chain.' },
        { title: 'Climate Resilient Agriculture through Millets', type: 'Articles', date: 'October 2023', img: images.millets.foxtail, excerpt: 'How millet cultivation contributes to climate adaptation and sustainable farming practices.' },
    ];

    return (
        <div className="w-full">
            {/* Hero */}
            <div className="relative min-h-[40vh] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src={images.about.culture} alt="Insights" className="w-full h-full object-cover" />
                    <div className={`absolute inset-0 ${isVibrant ? 'bg-brand-dark/85' : 'bg-brand-dark/85'}`}></div>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16 w-full">
                    <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-8">
                        <div className="max-w-2xl">
                            <span className={`text-sm font-bold uppercase tracking-widest mb-4 block ${isVibrant ? 'text-brand-yellow' : 'text-brand-orange'}`}>Knowledge Repository</span>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight text-white">
                                Insights
                            </h1>
                            <p className="text-xl text-gray-200 font-light">
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
            </div>

            {/* Categories */}
            <div className="py-8 bg-white border-b border-gray-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-wrap gap-3 justify-center">
                        <span className={`px-5 py-2.5 rounded-full font-bold text-sm cursor-pointer ${isVibrant ? 'bg-brand-dark text-brand-yellow' : 'bg-brand-green text-white'}`}>All</span>
                        {siteContent.insights.categories.map((cat, i) => (
                            <span key={i} className={`px-5 py-2.5 rounded-full font-bold text-sm transition-all cursor-pointer hover:shadow-md ${isVibrant ? 'bg-[#fdfaf2] border-2 border-brand-yellow/30 text-brand-dark hover:bg-brand-yellow/20' : 'bg-gray-50 text-gray-700 hover:bg-brand-green hover:text-white'}`}>
                                {cat}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            {/* Content Grid */}
            <div className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {insightCards.map((insight, idx) => (
                            <article key={idx} className={`rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer ${isVibrant ? 'bg-white shadow-[0_4px_20px_rgba(0,0,0,0.06)] border-2 border-brand-yellow/10 hover:border-brand-yellow/30' : 'bg-white shadow-sm border border-gray-100 hover:border-brand-green/30'}`}>
                                <div className="h-52 overflow-hidden relative group">
                                    <img src={insight.img} alt={insight.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                    <div className={`absolute inset-0 ${isVibrant ? 'bg-brand-dark/20 group-hover:bg-transparent' : 'bg-brand-green/10 group-hover:bg-transparent'} transition-colors`}></div>
                                    <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold ${isVibrant ? 'bg-brand-yellow text-brand-dark' : 'bg-brand-green text-white'}`}>{insight.type}</span>
                                </div>
                                <div className="p-6">
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="text-xs text-gray-400">{insight.date}</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-gray-900 mb-3 leading-snug">{insight.title}</h3>
                                    <p className="text-gray-600 text-sm leading-relaxed mb-4">{insight.excerpt}</p>
                                    <span className={`inline-flex items-center text-sm font-bold ${isVibrant ? 'text-brand-dark hover:text-brand-yellow' : 'text-brand-green'}`}>
                                        Read More <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                    </span>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>

            {/* Millet Vectors Footer */}
            <div className={`py-16 ${isVibrant ? 'bg-[#fdf9f0]' : 'bg-gray-50'}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className={`text-lg font-medium mb-8 ${isVibrant ? 'text-brand-dark' : 'text-gray-600'}`}>Covering the entire spectrum of millet and agri-food knowledge</p>
                    <div className="flex justify-center gap-8 flex-wrap">
                        {[images.vectors.millet01, images.vectors.millet02, images.vectors.pearl, images.vectors.foxtail, images.vectors.finger, images.vectors.jowar].map((vec, idx) => (
                            <img key={idx} src={vec} alt="Millet vector" className="h-16 md:h-20 w-auto object-contain opacity-60 hover:opacity-100 transition-opacity duration-300" />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InsightsPage;
