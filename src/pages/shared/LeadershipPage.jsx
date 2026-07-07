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

            {/* Leadership */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14">
                        <span className="text-sm font-bold uppercase tracking-widest text-brand-green mb-3 block">Governance</span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Leadership</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        {ld.leadership.map((member, i) => (
                            <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:border-brand-green/30 transition-all duration-300 group p-8 text-center flex flex-col justify-center min-h-[160px]">
                                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-brand-green transition-colors">{member.name}</h3>
                                <p className="text-brand-green font-semibold text-sm">{member.designation}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Advisory Network */}
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
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {ld.advisory.advisors.map((adv, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 hover:border-brand-orange/30 transition-all group flex flex-col justify-center min-h-[160px]">
                                <h4 className="font-bold text-white mb-2 text-lg">{adv.name}</h4>
                                <p className="text-sm text-gray-400">{adv.domain}</p>
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-12">
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
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Management</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        {ld.management.map((member, i) => (
                            <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:border-brand-green/30 transition-all duration-300 group p-8 text-center flex flex-col justify-center min-h-[160px]">
                                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-brand-green transition-colors">{member.name}</h3>
                                <p className="text-brand-green font-semibold text-sm">{member.designation}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>


        </div>
    );
};

export default LeadershipPage;
