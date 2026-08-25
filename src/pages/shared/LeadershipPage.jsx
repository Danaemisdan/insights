import React from 'react';
import { Link } from 'react-router-dom';
import { siteContent } from '../../data/siteContent';
import { images } from '../../data/imageMap';
import EditableText from '../../components/EditableText';
import EditableImage from '../../components/EditableImage';
import EditableLink from '../../components/EditableLink';

const ld = siteContent.aboutUs.leadership;

const LeadershipPage = () => {
    return (
        <div className="w-full">
            {/* Hero */}
            <div className="relative min-h-[45vh] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <EditableImage contentKey="leadership-hero-img" defaultSrc={images.about.meeting} alt="Leadership" className="w-full h-full object-cover" loading="eager" />
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/80 to-transparent" />
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
                    <div className="max-w-3xl">
                        <EditableText as="span" contentKey="leadership-hero-subtitle" defaultText="About Us" className="text-sm font-bold uppercase tracking-widest mb-4 block text-brand-orange" />
                        <EditableText as="h1" contentKey="leadership-hero-title" defaultText="Leadership" className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-white leading-tight block" />
                        <EditableText as="p" contentKey="leadership-hero-desc" defaultText="The people driving the INSIGHTS mission — from governance to ground-level implementation." className="text-xl text-gray-200 font-light leading-relaxed block" />
                    </div>
                </div>
            </div>

            {/* Leadership */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14">
                        <EditableText as="span" contentKey="leadership-gov-subtitle" defaultText="Governance" className="text-sm font-bold uppercase tracking-widest text-brand-green mb-3 block" />
                        <EditableText as="h2" contentKey="leadership-gov-title" defaultText="Leadership" className="text-3xl md:text-4xl font-extrabold text-gray-900 block" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        {ld.leadership.map((member, i) => (
                            <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:border-brand-green/30 transition-all duration-300 group p-8 text-center flex flex-col justify-center min-h-[160px]">
                                <EditableText as="h3" contentKey={`leadership-member-name-${i}`} defaultText={member.name} className="text-xl font-bold text-gray-900 mb-2 group-hover:text-brand-green transition-colors block" />
                                <EditableText as="p" contentKey={`leadership-member-role-${i}`} defaultText={member.designation} className="text-brand-green font-semibold text-sm block" />
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
                            <EditableText as="span" contentKey="leadership-adv-tag" defaultText={ld.advisory.tag} className="font-bold text-sm block" />
                        </div>
                        <EditableText as="h2" contentKey="leadership-adv-title" defaultText="Advisory & Expertise" className="text-3xl md:text-4xl font-extrabold mb-4 block" />
                        <EditableText as="p" contentKey="leadership-adv-desc" defaultText={ld.advisory.text} className="text-gray-400 max-w-2xl mx-auto leading-relaxed block" />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {ld.advisory.advisors.map((adv, i) => (
                            <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-8 text-center hover:bg-white/10 hover:border-brand-orange/30 transition-all group flex flex-col justify-center min-h-[160px]">
                                <EditableText as="h4" contentKey={`leadership-adv-name-${i}`} defaultText={adv.name} className="font-bold text-white mb-2 text-lg block" />
                                <EditableText as="p" contentKey={`leadership-adv-domain-${i}`} defaultText={adv.domain} className="text-sm text-gray-400 block" />
                            </div>
                        ))}
                    </div>
                    <div className="text-center mt-12">
                        <EditableLink contentKey="leadership-adv-link" to="/contact" defaultText="Join Our Advisory Network" className="inline-flex items-center px-8 py-4 rounded-full bg-brand-green text-white font-bold hover:bg-brand-orange transition-all" />
                    </div>
                </div>
            </section>

            {/* Management Team */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14">
                        <EditableText as="span" contentKey="leadership-mgmt-subtitle" defaultText="Our Team" className="text-sm font-bold uppercase tracking-widest text-brand-green mb-3 block" />
                        <EditableText as="h2" contentKey="leadership-mgmt-title" defaultText="Management" className="text-3xl md:text-4xl font-extrabold text-gray-900 block" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        {ld.management.map((member, i) => (
                            <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-xl hover:border-brand-green/30 transition-all duration-300 group p-8 text-center flex flex-col justify-center min-h-[160px]">
                                <EditableText as="h3" contentKey={`leadership-mgmt-name-${i}`} defaultText={member.name} className="text-xl font-bold text-gray-900 mb-2 group-hover:text-brand-green transition-colors block" />
                                <EditableText as="p" contentKey={`leadership-mgmt-role-${i}`} defaultText={member.designation} className="text-brand-green font-semibold text-sm block" />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

        </div>
    );
};

export default LeadershipPage;
