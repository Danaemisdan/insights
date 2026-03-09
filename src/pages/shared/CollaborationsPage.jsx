import React from 'react';
import { Link } from 'react-router-dom';
import { siteContent } from '../../data/siteContent';

const CollaborationsPage = ({ theme }) => {
    const isVibrant = theme === 'vibrant';

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
                    <h1 className={`text-4xl md:text-5xl lg:text-6xl ${styles.headingClass} mb-6`}>Partnerships</h1>
                    <p className={`text-xl ${isVibrant ? 'text-gray-300' : 'text-gray-600 font-light'}`}>
                        {siteContent.workWithUs.partnerships.intro}
                    </p>
                </div>
            </div>

            <div className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-24">
                        {siteContent.workWithUs.partnerships.list.map((partner, i) => (
                            <div key={i} className={`p-8 text-center rounded-2xl flex items-center justify-center h-40 transition-all ${isVibrant ? 'bg-[#fdfaf2] border-2 border-brand-yellow/10 hover:border-brand-yellow hover:-translate-y-2' : 'bg-white shadow-sm border border-gray-100 hover:shadow-md'}`}>
                                <h3 className={`font-bold text-gray-900 ${isVibrant ? 'text-lg uppercase tracking-wide' : 'text-xl'}`}>{partner}</h3>
                            </div>
                        ))}
                    </div>

                    <div className={`max-w-4xl mx-auto text-center p-12 rounded-3xl ${isVibrant ? 'bg-gradient-to-tr from-brand-yellow to-brand-green text-brand-dark' : 'bg-brand-green text-white'}`}>
                        <h2 className={`text-3xl ${styles.headingClass} mb-6 ${isVibrant ? 'text-brand-dark' : 'text-white'}`}>Collaborate With Us</h2>
                        <p className={`text-lg mb-8 opacity-90 max-w-2xl mx-auto font-medium`}>
                            {siteContent.workWithUs.collaborations}
                        </p>
                        <Link
                            to={isVibrant ? "/template2/contact" : "/template1/contact"}
                            className={`inline-block px-8 py-4 rounded-full font-bold uppercase tracking-wider transition-all ${isVibrant ? 'bg-brand-dark text-brand-yellow hover:bg-white' : 'bg-white text-brand-green hover:bg-brand-dark hover:text-white'}`}
                        >
                            Get In Touch
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CollaborationsPage;
