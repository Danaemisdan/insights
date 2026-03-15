import React from 'react';
import { Link } from 'react-router-dom';
import { siteContent } from '../../data/siteContent';
import { images } from '../../data/imageMap';

const CareersPage = ({ theme }) => {
    
    

    const styles = {
        headerBg: isVibrant ? 'bg-brand-dark text-white' : 'bg-gradient-to-br from-brand-dark via-brand-green to-brand-dark text-white',
        headingClass: isVibrant ? 'font-black uppercase tracking-tight' : 'font-extrabold tracking-tight',
        textClass: isVibrant ? 'text-lg font-medium text-gray-700' : 'text-lg font-light text-gray-600',
        accentColor: isVibrant ? 'text-brand-yellow' : 'text-brand-green',
    };

    const roles = siteContent.workWithUs.careers.roles || [];

    return (
        <div className="w-full">
            {/* Hero */}
            <div className="relative min-h-[40vh] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src={images.about.building} alt="Careers" className="w-full h-full object-cover" />
                    <div className={`absolute inset-0 ${isVibrant ? 'bg-brand-dark/80' : 'bg-brand-dark/80'}`}></div>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16 text-center w-full">
                    <span className={`text-sm font-bold uppercase tracking-widest mb-4 block ${isVibrant ? 'text-brand-yellow' : 'text-brand-orange'}`}>Work With Us</span>
                    <h1 className={`text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-white`}>Careers</h1>
                    <p className="text-xl text-gray-200 font-light max-w-3xl mx-auto">
                        {siteContent.workWithUs.careers.intro}
                    </p>
                </div>
            </div>

            {/* Open Roles */}
            <div className="py-20 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className={`text-3xl ${styles.headingClass} text-gray-900 mb-12 text-center`}>Open Positions</h2>
                    <div className="space-y-4">
                        {roles.map((role, idx) => (
                            <div key={idx} className={`p-6 rounded-2xl flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all duration-300 hover:shadow-lg ${isVibrant ? 'bg-[#fdfaf2] border-2 border-brand-yellow/20 hover:border-brand-yellow/50' : 'bg-gray-50 border border-gray-200 hover:border-brand-green/50'}`}>
                                <div>
                                    <h3 className="text-xl font-bold text-gray-900 mb-1">{role.title}</h3>
                                    <div className="flex items-center gap-3 text-sm text-gray-500">
                                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${isVibrant ? 'bg-brand-yellow/20 text-brand-dark' : 'bg-brand-green/10 text-brand-green'}`}>{role.type}</span>
                                        <span className="flex items-center gap-1">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /></svg>
                                            {role.location}
                                        </span>
                                    </div>
                                </div>
                                <Link
                                    to={`${basePath}/contact`}
                                    className={`inline-flex items-center px-6 py-3 rounded-xl font-bold text-sm transition-all ${isVibrant ? 'bg-brand-dark text-brand-yellow hover:bg-brand-yellow hover:text-brand-dark' : 'bg-brand-green text-white hover:bg-brand-dark'}`}
                                >
                                    Apply Now
                                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Culture Section */}
            <div className={`py-20 ${isVibrant ? 'bg-brand-dark' : 'bg-gradient-to-r from-brand-green to-brand-dark'}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-extrabold text-white mb-6">Why Join INSIGHTS?</h2>
                            <ul className="space-y-4">
                                {siteContent.culture.ethosList.map((ethos, idx) => (
                                    <li key={idx} className="flex items-center gap-3">
                                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${isVibrant ? 'bg-brand-yellow text-brand-dark' : 'bg-white/20 text-white'}`}>
                                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        </div>
                                        <span className="text-lg text-white font-medium">{ethos}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <img src={images.about.meeting} alt="Team meeting" className={`w-full h-[400px] object-cover ${isVibrant ? 'rounded-3xl' : 'rounded-2xl'} shadow-2xl`} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CareersPage;
