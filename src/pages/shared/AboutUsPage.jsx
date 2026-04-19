import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { siteContent } from '../../data/siteContent';
import { images } from '../../data/imageMap';

const c = siteContent.aboutUs;

const AboutUsPage = () => {
    const ov = c.overview;

    return (
        <div className="w-full">
            {/* Hero */}
            <div className="relative min-h-[55vh] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src="/assets/photos/drive/Millet with farmers/farmer with millets.png" alt="About INSIGHTS" className="w-full h-full object-cover" loading="eager" />
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/80 to-transparent" />
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-24">
                    <div className="max-w-3xl">
                        <span className="text-sm font-bold uppercase tracking-widest mb-4 block text-brand-orange">About Us</span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight text-white">
                            Building Ecosystems<br />That Matter
                        </h1>
                        <p className="text-xl text-gray-200 font-light leading-relaxed max-w-2xl">
                            {ov.intro}
                        </p>
                    </div>
                </div>
            </div>

            {/* Quick Nav */}
            <div className="bg-white border-b border-gray-100 sticky top-[100px] md:top-[136px] z-20 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex gap-1 overflow-x-auto py-3 scrollbar-hide">
                        {[
                            { label: 'Overview', href: '#overview' },
                            { label: 'Legal & Establishment', href: '#establishment' },
                            { label: 'Vision & Mission', href: '#vision-mission' },
                            { label: 'Objectives', href: '#objectives' },
                            { label: 'Strategic Role', href: '#strategic-role' },
                        ].map(item => (
                            <a key={item.href} href={item.href}
                                className="flex-shrink-0 px-4 py-2 rounded-lg text-sm font-semibold text-gray-600 hover:text-brand-green hover:bg-brand-green/5 transition-all">
                                {item.label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>

            {/* Overview */}
            <section id="overview" className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <span className="text-sm font-bold uppercase tracking-widest text-brand-green mb-4 block">Overview</span>
                            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6">Our Purpose</h2>
                            <p className="text-lg text-gray-600 leading-relaxed mb-6">{ov.purpose}</p>
                            <div className="flex gap-4 flex-wrap mt-8">
                                <Link to="/leadership" className="inline-flex items-center px-6 py-3 rounded-full bg-brand-green text-white font-bold text-sm hover:bg-brand-dark transition-all">
                                    Meet Our Leadership
                                </Link>
                                <Link to="/affiliations" className="inline-flex items-center px-6 py-3 rounded-full border-2 border-brand-green text-brand-green font-bold text-sm hover:bg-brand-green hover:text-white transition-all">
                                    Our Affiliations
                                </Link>
                            </div>
                        </div>
                        <div className="flex items-center justify-center overflow-hidden rounded-3xl shadow-lg relative h-[450px]">
                            {/* The physical image contains the whole mockup page. We use CSS object-cover & object-right to visually 'crop out' the left text half and only display the circular graphic. */}
                            <img src={images.drive.ourPurpose} alt="Our Purpose Ecosystem" className="absolute right-0 h-full w-[200%] object-cover object-right rounded-3xl" loading="lazy" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Legal / Establishment */}
            <section id="establishment" className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-14">
                        <span className="text-sm font-bold uppercase tracking-widest text-brand-green mb-3 block">Establishment & Legal Status</span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Institutional Credentials</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { label: 'Year of Establishment', value: ov.establishment.year, icon: '📅' },
                            { label: 'Legal Structure', value: ov.establishment.legalStructure, icon: '⚖️' },
                            { label: 'Registration Details', value: ov.establishment.registration, icon: '📋' },
                            { label: 'Implementing Authority', value: ov.establishment.implementingAuthority, icon: '🏛️' },
                        ].map((item, i) => (
                            <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md hover:border-brand-green/20 transition-all">
                                <div className="text-3xl mb-4">{item.icon}</div>
                                <div className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">{item.label}</div>
                                <div className="text-lg font-bold text-gray-900">{item.value}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section id="vision-mission" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-14">
                        <span className="text-sm font-bold uppercase tracking-widest text-brand-green mb-3 block">Our North Star</span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Vision, Mission & Objectives</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        <div className="p-10 bg-gradient-to-br from-brand-green to-brand-dark text-white rounded-2xl">
                            <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-white/20">
                                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                            </div>
                            <h3 className="text-2xl font-extrabold mb-4">Vision</h3>
                            <p className="text-gray-200 leading-relaxed text-lg">{ov.vision}</p>
                        </div>
                        <div className="p-10 bg-gray-50 border border-gray-200 rounded-2xl">
                            <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-brand-green/10 text-brand-green">
                                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                            </div>
                            <h3 className="text-2xl font-extrabold text-gray-900 mb-4">Mission</h3>
                            <p className="text-gray-600 leading-relaxed text-lg">{ov.mission}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Objectives */}
            <section id="objectives" className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto">
                        <span className="text-sm font-bold uppercase tracking-widest text-brand-green mb-3 block text-center">What We Aim For</span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-10 text-center">Our Objectives</h2>
                        <div className="space-y-4">
                            {ov.objectives.map((obj, i) => (
                                <div key={i} className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-brand-green/30 hover:shadow-md transition-all">
                                    <div className="w-10 h-10 rounded-xl bg-brand-green text-white font-black flex items-center justify-center flex-shrink-0 text-sm">
                                        {String(i + 1).padStart(2, '0')}
                                    </div>
                                    <p className="text-gray-700 font-medium leading-relaxed">{obj}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Strategic Role */}
            <section id="strategic-role" className="py-20 bg-gradient-to-r from-brand-green to-brand-dark text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <span className="text-sm font-bold uppercase tracking-widest text-brand-orange mb-4 block">Our Role</span>
                    <h2 className="text-3xl md:text-4xl font-extrabold mb-8">Strategic Role in Food Systems & Value Chains</h2>
                    <p className="text-xl text-gray-200 leading-relaxed mb-10">{ov.strategicRole}</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link to="/what-we-do" className="px-8 py-4 rounded-full bg-white text-brand-green font-bold hover:bg-brand-dark hover:text-white transition-all">
                            What We Do
                        </Link>
                        <Link to="/contact" className="px-8 py-4 rounded-full border-2 border-white text-white font-bold hover:bg-white hover:text-brand-green transition-all">
                            Get In Touch
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUsPage;
