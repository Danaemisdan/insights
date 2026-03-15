import React from 'react';
import { siteContent } from '../../data/siteContent';
import { images } from '../../data/imageMap';

const CulturePage = () => {
    const styles = {
        headingClass: 'font-extrabold tracking-tight',
        accentColor: 'text-brand-green',
        cardBg: 'bg-white shadow-sm border border-gray-100',
    };

    const ethosIcons = [
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>,
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
    ];

    return (
        <div className="w-full">
            {/* Hero */}
            <div className="relative min-h-[45vh] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src={images.about.meeting} alt="People & Culture" className="w-full h-full object-cover" loading="eager" />
                    <div className={`absolute inset-0 bg-brand-dark/85`}></div>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16">
                    <span className={`text-sm font-bold uppercase tracking-widest mb-4 block text-brand-orange`}>People & Culture</span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 max-w-4xl leading-tight text-white">
                        Driven by Expertise and Strategic Focus
                    </h1>
                </div>
            </div>

            {/* Team Section */}
            <div className={`py-20 bg-white`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20 items-center">
                        <div>
                            <h2 className={`text-3xl ${styles.headingClass} text-gray-900 mb-6`}>Our Team</h2>
                            <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                {siteContent.culture.teamIntro}
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed">{siteContent.culture.teamPlaceholder}</p>
                        </div>

                        <div className="relative">
                            <div className="grid grid-cols-2 gap-4 relative z-10">
                                <img src={images.about.culture} alt="Culture" className={`w-full h-64 object-cover rounded-lg shadow-sm`} loading="lazy" decoding="async" />
                                <img src={images.works.project4} alt="Team work" className={`w-full h-64 object-cover mt-8 rounded-lg shadow-sm`} loading="lazy" decoding="async" />
                                <img src={images.about.team} alt="Office" className={`w-full h-64 object-cover col-span-2 rounded-lg shadow-sm`} loading="lazy" decoding="async" />
                            </div>
                        </div>
                    </div>

                    {/* Work Ethos */}
                    <div className="mb-20">
                        <div className="text-center max-w-3xl mx-auto mb-12">
                            <h2 className={`text-3xl ${styles.headingClass} text-gray-900 mb-6`}>Our Work Ethos</h2>
                            <p className="text-lg text-gray-600 leading-relaxed">{siteContent.culture.cultureStatement}</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                            {siteContent.culture.ethosList.map((ethos, idx) => (
                                <div key={idx} className={`${styles.cardBg} p-8 rounded-2xl text-center group transition-all duration-300 hover:shadow-md`}>
                                    <div className={`w-14 h-14 mx-auto rounded-xl flex items-center justify-center mb-4 transition-colors bg-brand-green/10 text-brand-green group-hover:bg-brand-green group-hover:text-white`}>
                                        {ethosIcons[idx]}
                                    </div>
                                    <h3 className="font-bold text-gray-900 group-hover:text-brand-green transition-colors">{ethos}</h3>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Advisory Network */}
                    <div className={`py-16 px-8 text-center bg-gradient-to-r from-brand-green to-brand-dark text-white rounded-2xl relative overflow-hidden`}>
                        <div className="absolute top-0 right-0 w-64 h-64 opacity-10 pointer-events-none translate-x-1/2 -translate-y-1/2 rotate-12">
                            <img src="/logos/1_official_highres.png" alt="" className="w-full h-full object-contain" />
                        </div>
                        <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider mb-6 bg-white/20 text-white relative z-10`}>
                            {siteContent.culture.advisory.tag}
                        </span>
                        <h2 className={`text-3xl font-extrabold mb-4 relative z-10`}>Advisory Network</h2>
                        <p className="text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed relative z-10">{siteContent.culture.advisory.text}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CulturePage;
