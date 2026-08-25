import React from 'react';
import { Link } from 'react-router-dom';
import EditableText from '../../components/EditableText';
import EditableImage from '../../components/EditableImage';
import EditableLink from '../../components/EditableLink';
import { siteContent } from '../../data/siteContent';
import { images } from '../../data/imageMap';

const collab = siteContent.workWithUs.collaboration;

const iconMap = {
    industry: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
    research: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" /></svg>,
    globe: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" /></svg>,
    startup: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
    development: <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>,
};

const WorkCollaborationPage = () => {
    return (
        <div className="w-full">
            {/* Hero */}
            <div className="relative min-h-[45vh] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <EditableImage contentKey="work-collab-hero-bg" defaultSrc={images.about.meeting} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/80 to-transparent" />
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
                    <div className="max-w-3xl">
                        <EditableText as="span" contentKey="work-collab-hero-subtitle" defaultText="Work With Us" className="text-sm font-bold uppercase tracking-widest mb-4 block text-brand-orange" />
                        <EditableText as="h1" contentKey="work-collab-hero-title" defaultText="Collaboration" className="block text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-white leading-tight" />
                        <EditableText as="p" contentKey="work-collab-hero-intro" defaultText={collab.intro} className="block text-xl text-gray-200 font-light leading-relaxed" />
                    </div>
                </div>
            </div>

            {/* Collaboration Types */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14">
                        <EditableText as="span" contentKey="work-collab-section-subtitle" defaultText="How We Partner" className="text-sm font-bold uppercase tracking-widest text-brand-green mb-3 block" />
                        <EditableText as="h2" contentKey="work-collab-section-title" defaultText="Collaboration Models" className="block text-3xl md:text-4xl font-extrabold text-gray-900" />
                    </div>
                    <div className="space-y-6">
                        {collab.types.map((type, i) => (
                            <div key={i} className={`flex flex-col lg:flex-row gap-8 items-start p-8 rounded-2xl border transition-all hover:shadow-lg ${i % 2 === 0 ? 'bg-white border-gray-100 hover:border-brand-green/30' : 'bg-gray-50 border-gray-100 hover:border-brand-green/30'}`}>
                                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-brand-green to-brand-dark flex items-center justify-center text-white flex-shrink-0 shadow-lg">
                                    {iconMap[type.icon] || iconMap.industry}
                                </div>
                                <div className="flex-1">
                                    <EditableText as="h3" contentKey={`work-collab-type-title-${i}`} defaultText={type.title} className="block text-2xl font-extrabold text-gray-900 mb-3" />
                                    <EditableText as="p" contentKey={`work-collab-type-desc-${i}`} defaultText={type.desc} className="block text-gray-600 leading-relaxed mb-4 text-lg" />
                                    <div className="flex flex-wrap gap-2">
                                        {type.examples.map((ex, j) => (
                                            <EditableText key={j} as="span" contentKey={`work-collab-type-ex-${i}-${j}`} defaultText={ex} className="block px-4 py-2 rounded-full bg-brand-green/10 text-brand-green text-sm font-semibold" />
                                        ))}
                                    </div>
                                </div>
                                <div className="flex-shrink-0">
                                    <EditableLink contentKey={`work-collab-type-link-${i}`} to="/contact" defaultText="Partner With Us →" className="px-6 py-3 rounded-xl bg-brand-green text-white font-bold text-sm hover:bg-brand-dark transition-all whitespace-nowrap" />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Stats / Partner categories */}
            <section className="py-16 bg-gradient-to-r from-brand-green to-brand-dark">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-6 text-center text-white">
                        {siteContent.workWithUs.partnerships.list.map((partner, i) => (
                            <div key={i}>
                                <EditableText as="div" contentKey={`work-collab-partner-title-${i}`} defaultText={partner} className="block text-2xl font-black mb-1" />
                                <EditableText as="div" contentKey={`work-collab-partner-type-${i}`} defaultText="Partner Type" className="block text-xs uppercase tracking-wider text-gray-300" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-white">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <EditableText as="h2" contentKey="work-collab-cta-title" defaultText="Ready to Collaborate?" className="block text-3xl font-extrabold text-gray-900 mb-4" />
                    <EditableText as="p" contentKey="work-collab-cta-desc" defaultText={siteContent.workWithUs.collaborations} className="block text-gray-500 mb-8 text-lg" />
                    <EditableLink contentKey="work-collab-cta-link" to="/contact" defaultText="Get In Touch" className="inline-flex items-center px-10 py-4 rounded-full bg-brand-green text-white font-bold text-lg hover:bg-brand-dark transition-all" />
                </div>
            </section>
        </div>
    );
};

export default WorkCollaborationPage;
