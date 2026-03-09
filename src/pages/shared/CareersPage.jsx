import React from 'react';
import { Link } from 'react-router-dom';
import { siteContent } from '../../data/siteContent';

const CareersPage = ({ theme }) => {
    const isVibrant = theme === 'vibrant';

    // Using simple styling objects for speed
    const styles = {
        headerBg: isVibrant ? 'bg-brand-dark text-white' : 'bg-slate-50 text-brand-dark border-b border-gray-200',
        headingClass: isVibrant ? 'font-black uppercase tracking-tight' : 'font-extrabold tracking-tight',
        textClass: isVibrant ? 'text-lg font-medium text-gray-700' : 'text-lg font-light text-gray-600',
        accentColor: isVibrant ? 'text-brand-yellow' : 'text-brand-green',
    };

    return (
        <div className="w-full">
            <div className={`${styles.headerBg} py-20 lg:py-28 text-center`}>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <span className={`text-sm font-bold uppercase tracking-widest ${styles.accentColor} mb-4 block`}>Work With Us</span>
                    <h1 className={`text-4xl md:text-5xl lg:text-6xl ${styles.headingClass} mb-6`}>Careers</h1>
                    <p className={`text-xl ${isVibrant ? 'text-gray-300' : 'text-gray-600 font-light'}`}>
                        {siteContent.workWithUs.careers.intro}
                    </p>
                </div>
            </div>

            <div className="py-24 bg-white min-h-[40vh] flex items-center justify-center">
                <div className="max-w-3xl mx-auto px-4 text-center">
                    <div className={`inline-block p-8 rounded-3xl ${isVibrant ? 'bg-brand-yellow/10 border-2 border-brand-yellow/30 text-brand-dark' : 'bg-brand-green/5 border border-brand-green/20 text-brand-green'}`}>
                        <svg className={`w-12 h-12 mx-auto mb-4 ${styles.accentColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                        <h2 className={`text-2xl ${styles.headingClass} mb-2`}>{siteContent.workWithUs.careers.status}</h2>
                        <p className={`font-medium opacity-80`}>Please check back soon for open roles.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CareersPage;
