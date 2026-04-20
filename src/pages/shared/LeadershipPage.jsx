import React from 'react';
import { Link } from 'react-router-dom';
import { siteContent } from '../../data/siteContent';
import { images } from '../../data/imageMap';

const ld = siteContent.aboutUs.leadership;

const LeadershipPage = () => {
    return (
        <div className="w-full">
            {/* Hero */}
            <div className="relative min-h-[45vh] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src={images.about.meeting} alt="Leadership" className="w-full h-full object-cover" loading="eager" />
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/80 to-transparent" />
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
                    <div className="max-w-3xl">
                        <span className="text-sm font-bold uppercase tracking-widest mb-4 block text-brand-orange">About Us</span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-white leading-tight">
                            Leadership
                        </h1>
                        <p className="text-xl text-gray-200 font-light leading-relaxed">
                            The people driving the INSIGHTS mission — from governance to ground-level implementation.
                        </p>
                    </div>
                </div>
            </div>

            {/* Advisory Network (Moved to Top) */}
            <section className="py-20 bg-gradient-to-b from-brand-dark to-slate-950 text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 bg-brand-orange/20 text-brand-orange border border-brand-orange/30">
                            <span className="w-2 h-2 rounded-full bg-brand-orange"></span>
                            <span className="font-bold text-sm">{ld.advisory.tag}</span>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Advisory & Expertise</h2>
                        <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">{ld.advisory.text}</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {ld.advisory.advisors.map((adv, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 hover:border-brand-orange/30 transition-all group">
                                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-green to-brand-dark mx-auto mb-4 flex items-center justify-center">
                                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                                </div>
                                <h4 className="font-bold text-white mb-1">{adv.name}</h4>
                                <p className="text-xs text-gray-400">{adv.domain}</p>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-10">
                        <Link to="/contact" className="inline-flex items-center px-8 py-4 rounded-full bg-brand-green text-white font-bold hover:bg-brand-orange transition-all">
                            Join Our Advisory Network
                        </Link>
                    </div>
                </div>
            </section>

            {/* Management Team */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14">
                        <span className="text-sm font-bold uppercase tracking-widest text-brand-green mb-3 block">Our Team</span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Management Team</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        {ld.management.map((member, i) => (
                            <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:border-brand-green/30 transition-all duration-300 group">
                                <div className="h-40 bg-gradient-to-br from-brand-green/20 via-brand-green/10 to-brand-orange/10 flex items-center justify-center">
                                    <div className="w-24 h-24 rounded-full bg-gradient-to-br from-brand-green to-brand-dark flex items-center justify-center text-white font-black text-3xl shadow-lg">
                                        {member.name.replace('Mr. ', '').replace('Ms. ', '').charAt(0)}
                                    </div>
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-brand-green transition-colors">{member.name}</h3>
                                    <p className="text-brand-green font-semibold text-sm mb-1">{member.designation}</p>
                                    <p className="text-gray-400 text-xs mb-4">{member.dept}</p>
                                    <a href={`mailto:${member.email}`} className="text-sm text-gray-500 hover:text-brand-green transition-colors flex items-center gap-2">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                        {member.email}
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


        </div>
    );
};

export default LeadershipPage;
