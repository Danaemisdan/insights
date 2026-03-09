import React from 'react';
import { siteContent } from '../../data/siteContent';
import { images } from '../../data/imageMap';

const WorksPage = ({ theme }) => {
    const isVibrant = theme === 'vibrant';

    const styles = {
        headerBg: isVibrant ? 'bg-brand-dark text-white' : 'bg-slate-900 text-white',
        headingClass: isVibrant ? 'font-black uppercase tracking-tight' : 'font-extrabold tracking-tight',
        textClass: isVibrant ? 'text-lg font-medium text-gray-700' : 'text-lg font-light text-gray-600',
        accentColor: isVibrant ? 'text-brand-yellow' : 'text-brand-green',
        cardBg: isVibrant ? 'bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] border-2 border-brand-yellow/10' : 'bg-white rounded-xl shadow-sm border border-gray-100',
    };

    return (
        <div className="w-full">
            <div className={`${styles.headerBg} py-20 lg:py-28 relative overflow-hidden`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <span className={`text-sm font-bold uppercase tracking-widest ${styles.accentColor} mb-4 block`}>Our Works</span>
                    <h1 className={`text-4xl md:text-5xl lg:text-6xl ${styles.headingClass} mb-6 max-w-4xl leading-tight`}>
                        Driving Tangible Impact in Agri-Food Systems
                    </h1>
                </div>
            </div>

            <div className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Current Engagements */}
                    <div className="mb-24">
                        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
                            <div className="max-w-2xl">
                                <h2 className={`text-3xl ${styles.headingClass} text-gray-900 mb-4`}>Current Engagements</h2>
                                <p className={styles.textClass}>{siteContent.works.current}</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className={`${styles.cardBg} overflow-hidden group`}>
                                <div className="h-64 overflow-hidden relative">
                                    <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-transparent transition-colors z-10"></div>
                                    <img src={images.works.project1} alt="Project Field" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                                </div>
                                <div className="p-8">
                                    <span className={`text-xs font-bold uppercase tracking-wider ${styles.accentColor} mb-2 block`}>Field Implementation</span>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Pilot Value Chain Strategy</h3>
                                    <p className="text-gray-600">Executing comprehensive mapping and strategic advisory across targeted agro-ecological zones.</p>
                                </div>
                            </div>

                            <div className={`${styles.cardBg} overflow-hidden group`}>
                                <div className="h-64 overflow-hidden relative">
                                    <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-transparent transition-colors z-10"></div>
                                    <img src={images.works.project2} alt="Processing" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                                </div>
                                <div className="p-8">
                                    <span className={`text-xs font-bold uppercase tracking-wider ${styles.accentColor} mb-2 block`}>Ecosystem Building</span>
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">Institutional Incubation</h3>
                                    <p className="text-gray-600">Developing infrastructure layouts and operational models for processing clusters.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Case Snapshots & International */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                        <div className={`p-10 ${isVibrant ? 'bg-brand-dark text-white rounded-3xl' : 'bg-brand-green/5 border border-brand-green/20 rounded-xl'}`}>
                            <h3 className={`text-2xl ${styles.headingClass} mb-4 ${isVibrant ? 'text-white' : 'text-gray-900'}`}>Case Snapshots</h3>
                            <p className={`${isVibrant ? 'text-gray-300 font-medium' : 'text-gray-600'} leading-relaxed`}>
                                {siteContent.works.caseSnapshots}
                            </p>
                        </div>
                        <div className={`p-10 ${isVibrant ? 'bg-[#fdfaf2] border-2 border-brand-yellow/20 rounded-3xl' : 'bg-white shadow-sm border border-gray-100 rounded-xl'}`}>
                            <h3 className={`text-2xl ${styles.headingClass} text-gray-900 mb-4`}>International Engagements</h3>
                            <p className={`${isVibrant ? 'text-gray-700 font-medium' : 'text-gray-600'} leading-relaxed`}>
                                {siteContent.works.international}
                            </p>
                        </div>
                    </div>

                    {/* Coming Soon Banner */}
                    <div className={`w-full py-6 text-center border-y border-dashed ${isVibrant ? 'border-brand-yellow bg-brand-yellow/5' : 'border-gray-300 bg-white'}`}>
                        <p className={`font-bold uppercase tracking-widest text-sm ${isVibrant ? 'text-brand-dark' : 'text-gray-500'}`}>
                            {siteContent.works.placeholder}
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default WorksPage;
