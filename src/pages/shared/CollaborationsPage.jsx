import React from 'react';
import { Link } from 'react-router-dom';
import { siteContent } from '../../data/siteContent';
import { images } from '../../data/imageMap';

const CollaborationsPage = () => {
    const styles = {
        headingClass: 'font-extrabold tracking-tight',
        accentColor: 'text-brand-green',
    };

    const partnerIcons = [
        <svg key="1" className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
        <svg key="2" className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>,
        <svg key="3" className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>,
        <svg key="4" className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
        <svg key="5" className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
    ];

    return (
        <div className="w-full">
            {/* Hero */}
            <div className="relative min-h-[40vh] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src={images.about.building} alt="Partnerships" className="w-full h-full object-cover" />
                    <div className={`absolute inset-0 bg-brand-dark/85`}></div>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16 text-center w-full">
                    <span className={`text-sm font-bold uppercase tracking-widest mb-4 block text-brand-orange`}>Work With Us</span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-white">Partnerships</h1>
                    <p className="text-xl text-gray-200 font-light max-w-2xl mx-auto">
                        {siteContent.workWithUs.partnerships.intro}
                    </p>
                </div>
            </div>

            {/* Partner Categories */}
            <div className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-24">
                        {siteContent.workWithUs.partnerships.list.map((partner, i) => (
                            <div key={i} className={`p-8 text-center rounded-2xl flex flex-col items-center justify-center h-48 transition-all duration-300 bg-gray-50 border border-gray-100 hover:shadow-lg hover:border-brand-green/30`}>
                                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 bg-brand-green/10 text-brand-green`}>
                                    {partnerIcons[i]}
                                </div>
                                <h3 className={`font-bold text-gray-900 text-xl`}>{partner}</h3>
                            </div>
                        ))}
                    </div>

                    {/* CTA */}
                    <div className={`max-w-4xl mx-auto text-center p-12 bg-gradient-to-r from-brand-green to-brand-dark text-white rounded-2xl`}>
                        <h2 className="text-3xl font-extrabold mb-6">Collaborate With Us</h2>
                        <p className="text-lg mb-8 text-gray-200 max-w-2xl mx-auto font-medium">
                            {siteContent.workWithUs.collaborations}
                        </p>
                        <Link
                            to="/contact"
                            className={`inline-flex items-center px-8 py-4 rounded-full font-bold uppercase tracking-wider transition-all duration-300 transform hover:-translate-y-1 bg-white text-brand-green hover:bg-brand-dark hover:text-white`}
                        >
                            Get In Touch
                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CollaborationsPage;
