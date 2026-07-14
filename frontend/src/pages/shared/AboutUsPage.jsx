import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { siteContent } from '../../data/siteContent';
import { images } from '../../data/imageMap';
import EditableText from '../../components/EditableText';
import EditableImage from '../../components/EditableImage';
import EditableLink from '../../components/EditableLink';

const c = siteContent.aboutUs;

const AboutUsPage = () => {
    const ov = c.overview;

    return (
        <div className="w-full">
            {/* Hero */}
            <div className="relative min-h-[55vh] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <EditableImage contentKey="about-us-hero-img" defaultSrc="/assets/photos/about-us-hero-new.png" alt="About INSIGHTS" className="w-full h-full object-cover" loading="eager" />
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/80 to-transparent" />
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-24">
                    <div className="max-w-3xl">
                        <EditableText as="span" contentKey="about-us-hero-subtitle" defaultText="About Us" className="text-sm font-bold uppercase tracking-widest mb-4 block text-brand-orange" />
                        <EditableText as="h1" contentKey="about-us-hero-title" defaultText="Building Ecosystems<br />That Matter" className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight text-white block" />
                        <EditableText as="p" contentKey="about-us-hero-desc" defaultText={ov.intro} className="text-xl text-gray-200 font-light leading-relaxed max-w-2xl block" />
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
                        ].map((item, index) => (
                            <EditableLink key={item.href} contentKey={`about-us-quick-nav-${index}`} to={item.href} defaultText={item.label}
                                className="flex-shrink-0 px-4 py-2 rounded-lg text-sm font-semibold text-gray-600 hover:text-brand-green hover:bg-brand-green/5 transition-all" />
                        ))}
                    </div>
                </div>
            </div>

            {/* Overview */}
            <section id="overview" className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <EditableText as="span" contentKey="about-us-overview-subtitle" defaultText="Overview" className="text-sm font-bold uppercase tracking-widest text-brand-green mb-4 block" />
                            <EditableText as="h2" contentKey="about-us-overview-title" defaultText="Our Purpose" className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-6 block" />
                            <EditableText as="p" contentKey="about-us-overview-desc" defaultText={ov.purpose} className="text-lg text-gray-600 leading-relaxed mb-6 block" />
                            <div className="flex gap-4 flex-wrap mt-8">
                                <EditableLink contentKey="about-us-overview-link-1" to="/leadership" defaultText="Meet Our Leadership" className="inline-flex items-center px-6 py-3 rounded-full bg-brand-green text-white font-bold text-sm hover:bg-brand-dark transition-all" />
                                <EditableLink contentKey="about-us-overview-link-2" to="/affiliations" defaultText="Our Affiliations" className="inline-flex items-center px-6 py-3 rounded-full border-2 border-brand-green text-brand-green font-bold text-sm hover:bg-brand-green hover:text-white transition-all" />
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <EditableImage contentKey="about-us-overview-img" defaultSrc={images.drive.ourPurpose} alt="Our Purpose Ecosystem" className="w-full object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500 rounded-2xl" loading="lazy" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Legal / Establishment */}
            <section id="establishment" className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-14">
                        <EditableText as="span" contentKey="about-us-legal-subtitle" defaultText="Establishment & Legal Status" className="text-sm font-bold uppercase tracking-widest text-brand-green mb-3 block" />
                        <EditableText as="h2" contentKey="about-us-legal-title" defaultText="Institutional Credentials" className="text-3xl md:text-4xl font-extrabold text-gray-900 block" />
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
                                <EditableText as="div" contentKey={`about-us-legal-label-${i}`} defaultText={item.label} className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2 block" />
                                <EditableText as="div" contentKey={`about-us-legal-val-${i}`} defaultText={item.value} className="text-lg font-bold text-gray-900 block" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section id="vision-mission" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center max-w-2xl mx-auto mb-14">
                        <EditableText as="span" contentKey="about-us-vision-subtitle" defaultText="Our North Star" className="text-sm font-bold uppercase tracking-widest text-brand-green mb-3 block" />
                        <EditableText as="h2" contentKey="about-us-vision-title" defaultText="Vision, Mission & Objectives" className="text-3xl md:text-4xl font-extrabold text-gray-900 block" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                        <div className="p-10 bg-gradient-to-br from-brand-green to-brand-dark text-white rounded-2xl">
                            <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-white/20">
                                <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                            </div>
                            <EditableText as="h3" contentKey="about-us-vision-box-title" defaultText="Vision" className="text-2xl font-extrabold mb-4 block" />
                            <EditableText as="p" contentKey="about-us-vision-box-desc" defaultText={ov.vision} className="text-gray-200 leading-relaxed text-lg block" />
                        </div>
                        <div className="p-10 bg-gray-50 border border-gray-200 rounded-2xl">
                            <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 bg-brand-green/10 text-brand-green">
                                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                            </div>
                            <EditableText as="h3" contentKey="about-us-mission-box-title" defaultText="Mission" className="text-2xl font-extrabold text-gray-900 mb-4 block" />
                            <EditableText as="p" contentKey="about-us-mission-box-desc" defaultText={ov.mission} className="text-gray-600 leading-relaxed text-lg block" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Objectives */}
            <section id="objectives" className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto">
                        <EditableText as="span" contentKey="about-us-obj-subtitle" defaultText="What We Aim For" className="text-sm font-bold uppercase tracking-widest text-brand-green mb-3 block text-center" />
                        <EditableText as="h2" contentKey="about-us-obj-title" defaultText="Our Objectives" className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-10 text-center block" />
                        <div className="space-y-4">
                            {ov.objectives.map((obj, i) => (
                                <div key={i} className="flex items-start gap-4 bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:border-brand-green/30 hover:shadow-md transition-all">
                                    <div className="w-10 h-10 rounded-xl bg-brand-green text-white font-black flex items-center justify-center flex-shrink-0 text-sm">
                                        {String(i + 1).padStart(2, '0')}
                                    </div>
                                    <EditableText as="p" contentKey={`about-us-obj-item-${i}`} defaultText={obj} className="text-gray-700 font-medium leading-relaxed block" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Strategic Role */}
            <section id="strategic-role" className="py-20 bg-gradient-to-r from-brand-green to-brand-dark text-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <EditableText as="span" contentKey="about-us-role-subtitle" defaultText="Our Role" className="text-sm font-bold uppercase tracking-widest text-brand-orange mb-4 block" />
                    <EditableText as="h2" contentKey="about-us-role-title" defaultText="Strategic Role in Food Systems & Value Chains" className="text-3xl md:text-4xl font-extrabold mb-8 block" />
                    <EditableText as="p" contentKey="about-us-role-desc" defaultText={ov.strategicRole} className="text-xl text-gray-200 leading-relaxed mb-10 block" />
                    <div className="flex flex-wrap justify-center gap-4">
                        <EditableLink contentKey="about-us-role-link-1" to="/what-we-do" defaultText="What We Do" className="px-8 py-4 rounded-full bg-white text-brand-green font-bold hover:bg-brand-dark hover:text-white transition-all" />
                        <EditableLink contentKey="about-us-role-link-2" to="/contact" defaultText="Get In Touch" className="px-8 py-4 rounded-full border-2 border-white text-white font-bold hover:bg-white hover:text-brand-green transition-all" />
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutUsPage;
