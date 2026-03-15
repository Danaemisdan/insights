import React from 'react';
import { Link } from 'react-router-dom';
import { siteContent } from '../../data/siteContent';
import { images } from '../../data/imageMap';

const AboutPage = ({ theme }) => {
    
    

    const styles = {
        headingClass: isVibrant ? 'font-black uppercase tracking-tight' : 'font-extrabold tracking-tight',
        accentColor: isVibrant ? 'text-brand-yellow' : 'text-brand-green',
    };

    return (
        <div className="w-full">
            {/* Hero with parallax-style image */}
            <div className="relative min-h-[50vh] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src={images.about.team} alt="About INSIGHTS" className="w-full h-full object-cover" />
                    <div className={`absolute inset-0 ${isVibrant ? 'bg-brand-dark/85' : 'bg-gradient-to-r from-brand-dark/90 via-brand-dark/80 to-transparent'}`}></div>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
                    <div className="max-w-3xl">
                        <span className={`text-sm font-bold uppercase tracking-widest mb-4 block ${isVibrant ? 'text-brand-yellow' : 'text-brand-orange'}`}>Know About Us</span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight text-white">
                            Building Ecosystems That Matter
                        </h1>
                        <p className="text-xl text-gray-200 font-light leading-relaxed">
                            {siteContent.about.intro}
                        </p>
                    </div>
                </div>
            </div>

            {/* Purpose & Vision */}
            <div className={`py-24 ${isVibrant ? 'bg-[#fdf9f0]' : 'bg-white'}`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
                        <div>
                            <h2 className={`text-3xl ${styles.headingClass} text-gray-900 mb-6`}>Our Purpose</h2>
                            <p className="text-lg text-gray-600 leading-relaxed mb-8">{siteContent.about.purpose}</p>

                            <h2 className={`text-3xl ${styles.headingClass} text-gray-900 mb-6`}>Our Journey</h2>
                            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 ${isVibrant ? 'bg-brand-yellow/20 text-brand-dark' : 'bg-brand-green/10 text-brand-green'}`}>
                                <span className={`w-2 h-2 rounded-full ${isVibrant ? 'bg-brand-yellow' : 'bg-brand-green'}`}></span>
                                <span className="font-bold text-sm">{siteContent.about.journey.tag}</span>
                            </div>
                            <p className="text-lg text-gray-600 leading-relaxed">{siteContent.about.journey.text}</p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <img src={images.about.building} alt="Building" className={`w-full h-64 object-cover ${isVibrant ? 'rounded-3xl' : 'rounded-2xl'} shadow-lg`} />
                            <img src={images.about.meeting} alt="Team Meeting" className={`w-full h-64 object-cover ${isVibrant ? 'rounded-3xl' : 'rounded-2xl'} shadow-lg mt-8`} />
                            <img src={images.about.culture} alt="Culture" className={`w-full h-64 object-cover ${isVibrant ? 'rounded-3xl' : 'rounded-2xl'} shadow-lg col-span-2`} />
                        </div>
                    </div>

                    {/* Vision & Mission */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className={`p-10 ${isVibrant ? 'bg-brand-dark text-white rounded-3xl' : 'bg-gradient-to-br from-brand-green to-brand-dark text-white rounded-2xl'}`}>
                            <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${isVibrant ? 'bg-brand-yellow/20' : 'bg-white/20'}`}>
                                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                            </div>
                            <h3 className="text-2xl font-extrabold mb-4">Vision</h3>
                            <p className="text-gray-200 leading-relaxed text-lg">{siteContent.about.vision}</p>
                        </div>
                        <div className={`p-10 ${isVibrant ? 'bg-[#fdfaf2] border-2 border-brand-yellow/20 rounded-3xl' : 'bg-gray-50 border border-gray-200 rounded-2xl'}`}>
                            <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${isVibrant ? 'bg-brand-yellow/20 text-brand-dark' : 'bg-brand-green/10 text-brand-green'}`}>
                                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                            </div>
                            <h3 className={`text-2xl font-extrabold text-gray-900 mb-4`}>Mission</h3>
                            <p className="text-gray-600 leading-relaxed text-lg">{siteContent.about.mission}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA */}
            <div className={`py-16 ${isVibrant ? 'bg-brand-dark' : 'bg-gradient-to-r from-brand-green to-brand-dark'}`}>
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-extrabold text-white mb-6">Ready to Collaborate?</h2>
                    <p className="text-lg text-gray-200 mb-8">Join our growing network of partners and stakeholders shaping the future of agri-food systems.</p>
                    <Link
                        to={`${basePath}/contact`}
                        className={`inline-flex items-center px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:-translate-y-1 ${isVibrant ? 'bg-brand-yellow text-brand-dark hover:bg-white' : 'bg-white text-brand-green hover:bg-brand-dark hover:text-white'}`}
                    >
                        Get In Touch
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
