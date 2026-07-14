import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import EditableText from '../../components/EditableText';
import EditableImage from '../../components/EditableImage';
import EditableLink from '../../components/EditableLink';
import { siteContent } from '../../data/siteContent';
import { images } from '../../data/imageMap';

const opp = siteContent.opportunities;

const OpportunitiesPage = () => {
    const [activeTab, setActiveTab] = useState('careers');

    const tabs = [
        { id: 'careers', label: 'Careers' },
        { id: 'notices', label: 'Notices' },
        { id: 'tenders', label: 'Tenders' },
        { id: 'procurement', label: 'Procurement' },
        { id: 'circulars', label: 'Circulars' },
    ];

    return (
        <div className="w-full">
            {/* Hero */}
            <div className="relative min-h-[45vh] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <EditableImage contentKey="opp-hero-bg" defaultSrc={images.about.building} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/80 to-transparent" />
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
                    <div className="max-w-3xl">
                        <EditableText as="span" contentKey="opp-hero-subtitle" defaultText="Join Us" className="text-sm font-bold uppercase tracking-widest mb-4 block text-brand-orange" />
                        <EditableText as="h1" contentKey="opp-hero-title" defaultText="Opportunities" className="block text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-white leading-tight" />
                        <EditableText as="p" contentKey="opp-hero-intro" defaultText={opp.intro} className="block text-xl text-gray-200 font-light leading-relaxed" />
                    </div>
                </div>
            </div>

            {/* Tabs */}
            <div className="bg-white border-b border-gray-100 sticky top-[100px] md:top-[136px] z-20 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex gap-1 overflow-x-auto py-3 scrollbar-hide">
                        {tabs.map(tab => (
                            <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                                className={`flex-shrink-0 px-5 py-2 rounded-lg text-sm font-semibold transition-all ${activeTab === tab.id ? 'bg-brand-green text-white' : 'text-gray-600 hover:text-brand-green hover:bg-brand-green/5'}`}>
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Tab Content */}
            <div className="py-16 bg-white">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Careers */}
                    {activeTab === 'careers' && (
                        <div>
                            <div className="mb-10">
                                <EditableText as="h2" contentKey="opp-careers-title" defaultText="Careers" className="block text-3xl font-extrabold text-gray-900 mb-3" />
                                <EditableText as="p" contentKey="opp-careers-intro" defaultText={opp.careers.intro} className="block text-gray-600 text-lg" />
                                <div className="inline-flex items-center gap-2 mt-4 px-4 py-2 rounded-full bg-brand-orange/10 text-brand-orange border border-brand-orange/20">
                                    <span className="w-2 h-2 rounded-full bg-brand-orange animate-pulse"></span>
                                    <EditableText as="span" contentKey="opp-careers-status" defaultText={opp.careers.status} className="font-bold text-sm" />
                                </div>
                            </div>
                            <div className="space-y-4">
                                {opp.careers.roles.map((role, i) => (
                                    <div key={i} className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-6 bg-gray-50 border border-gray-200 rounded-2xl hover:border-brand-green/40 hover:shadow-md transition-all">
                                        <div>
                                            <EditableText as="h3" contentKey={`opp-careers-role-title-${i}`} defaultText={role.title} className="block text-xl font-bold text-gray-900 mb-2" />
                                            <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
                                                <EditableText as="span" contentKey={`opp-careers-role-type-${i}`} defaultText={role.type} className="px-3 py-1 rounded-full text-xs font-bold bg-brand-green/10 text-brand-green" />
                                                <span className="flex items-center gap-1">
                                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /></svg>
                                                    <EditableText as="span" contentKey={`opp-careers-role-loc-${i}`} defaultText={role.location} className="" />
                                                </span>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <EditableText as="span" contentKey={`opp-careers-role-status-${i}`} defaultText={role.status} className="px-3 py-1 rounded-full text-xs font-bold bg-brand-orange/10 text-brand-orange" />
                                            <EditableLink contentKey={`opp-careers-role-link-${i}`} to="/contact" defaultText="Express Interest" className="inline-flex items-center px-5 py-2.5 rounded-xl font-bold text-sm bg-brand-green text-white hover:bg-brand-dark transition-all" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Notices */}
                    {activeTab === 'notices' && (
                        <div>
                            <EditableText as="h2" contentKey="opp-notices-title" defaultText="Notices" className="block text-3xl font-extrabold text-gray-900 mb-8" />
                            <div className="space-y-4">
                                {opp.notices.map((item, i) => (
                                    <div key={i} className="p-6 bg-gray-50 border border-gray-200 rounded-2xl hover:border-brand-green/30 hover:shadow-md transition-all">
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 rounded-xl bg-brand-green/10 text-brand-green flex items-center justify-center flex-shrink-0">
                                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex flex-wrap items-center gap-3 mb-2">
                                                    <EditableText as="span" contentKey={`opp-notices-type-${i}`} defaultText={item.type} className="px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-600" />
                                                    <EditableText as="span" contentKey={`opp-notices-date-${i}`} defaultText={item.date} className="text-sm text-gray-400" />
                                                </div>
                                                <EditableText as="h3" contentKey={`opp-notices-item-title-${i}`} defaultText={item.title} className="block text-lg font-bold text-gray-900 mb-2" />
                                                <EditableText as="p" contentKey={`opp-notices-item-detail-${i}`} defaultText={item.detail} className="block text-gray-600 text-sm" />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Tenders */}
                    {activeTab === 'tenders' && (
                        <div>
                            <EditableText as="h2" contentKey="opp-tenders-title" defaultText="Tenders" className="block text-3xl font-extrabold text-gray-900 mb-8" />
                            <div className="space-y-4">
                                {opp.tenders.map((item, i) => (
                                    <div key={i} className="p-6 bg-gray-50 border border-gray-200 rounded-2xl hover:border-brand-green/30 hover:shadow-md transition-all">
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 rounded-xl bg-brand-orange/10 text-brand-orange flex items-center justify-center flex-shrink-0">
                                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex flex-wrap items-center gap-3 mb-2">
                                                    <EditableText as="span" contentKey={`opp-tenders-type-${i}`} defaultText={item.type} className="px-3 py-1 rounded-full text-xs font-bold bg-brand-orange/10 text-brand-orange" />
                                                    <EditableText as="span" contentKey={`opp-tenders-date-${i}`} defaultText={item.date} className="text-sm text-gray-400" />
                                                    {item.amount !== 'TBD' && <EditableText as="span" contentKey={`opp-tenders-amount-${i}`} defaultText={item.amount} className="text-sm font-semibold text-brand-green" />}
                                                </div>
                                                <EditableText as="h3" contentKey={`opp-tenders-item-title-${i}`} defaultText={item.title} className="block text-lg font-bold text-gray-900 mb-2" />
                                                <EditableText as="p" contentKey={`opp-tenders-item-detail-${i}`} defaultText={item.detail} className="block text-gray-600 text-sm" />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Procurement */}
                    {activeTab === 'procurement' && (
                        <div>
                            <EditableText as="h2" contentKey="opp-procurement-title" defaultText="Procurement" className="block text-3xl font-extrabold text-gray-900 mb-8" />
                            <div className="space-y-4">
                                {opp.procurement.map((item, i) => (
                                    <div key={i} className="p-6 bg-gray-50 border border-gray-200 rounded-2xl hover:border-brand-green/30 hover:shadow-md transition-all">
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 rounded-xl bg-brand-green/10 text-brand-green flex items-center justify-center flex-shrink-0">
                                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                                            </div>
                                            <div className="flex-1">
                                                <div className="flex flex-wrap items-center gap-3 mb-2">
                                                    <EditableText as="span" contentKey={`opp-proc-cat-${i}`} defaultText={item.category} className="px-3 py-1 rounded-full text-xs font-bold bg-brand-green/10 text-brand-green" />
                                                    <EditableText as="span" contentKey={`opp-proc-status-${i}`} defaultText={item.status} className="px-3 py-1 rounded-full text-xs font-bold bg-gray-100 text-gray-600" />
                                                </div>
                                                <EditableText as="h3" contentKey={`opp-proc-item-title-${i}`} defaultText={item.title} className="block text-lg font-bold text-gray-900 mb-2" />
                                                <EditableText as="p" contentKey={`opp-proc-item-detail-${i}`} defaultText={item.detail} className="block text-gray-600 text-sm" />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Circulars */}
                    {activeTab === 'circulars' && (
                        <div>
                            <EditableText as="h2" contentKey="opp-circulars-title" defaultText="Circulars" className="block text-3xl font-extrabold text-gray-900 mb-8" />
                            <div className="space-y-4">
                                {opp.circulars.map((item, i) => (
                                    <div key={i} className="p-6 bg-gray-50 border border-gray-200 rounded-2xl hover:border-brand-green/30 hover:shadow-md transition-all">
                                        <div className="flex items-start gap-4">
                                            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center flex-shrink-0">
                                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>
                                            </div>
                                            <div>
                                                <div className="flex flex-wrap items-center gap-3 mb-2">
                                                    <EditableText as="span" contentKey={`opp-circ-type-${i}`} defaultText={item.type} className="px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-600" />
                                                    <EditableText as="span" contentKey={`opp-circ-date-${i}`} defaultText={item.date} className="text-sm text-gray-400" />
                                                </div>
                                                <EditableText as="h3" contentKey={`opp-circ-item-title-${i}`} defaultText={item.title} className="block text-lg font-bold text-gray-900 mb-2" />
                                                <EditableText as="p" contentKey={`opp-circ-item-detail-${i}`} defaultText={item.detail} className="block text-gray-600 text-sm" />
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* CTA */}
            <div className="py-16 bg-gradient-to-r from-brand-green to-brand-dark">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <EditableText as="h2" contentKey="opp-cta-title" defaultText="Have a Query?" className="block text-3xl font-extrabold text-white mb-4" />
                    <EditableText as="p" contentKey="opp-cta-desc" defaultText="For any opportunities-related questions, reach out to our team directly." className="block text-gray-200 mb-8" />
                    <EditableLink contentKey="opp-cta-link" to="/contact" defaultText="Contact Us" className="inline-flex items-center px-8 py-4 rounded-full bg-white text-brand-green font-bold hover:bg-brand-dark hover:text-white transition-all" />
                </div>
            </div>
        </div>
    );
};

export default OpportunitiesPage;

