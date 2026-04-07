import React from 'react';
import { siteContent } from '../../data/siteContent';
import { images } from '../../data/imageMap';

const af = siteContent.aboutUs.affiliations;

const AffiliationsPage = () => {
    return (
        <div className="w-full">
            {/* Hero */}
            <div className="relative min-h-[45vh] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src={images.about.building} alt="Affiliations" className="w-full h-full object-cover" loading="eager" />
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/80 to-transparent" />
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
                    <div className="max-w-3xl">
                        <span className="text-sm font-bold uppercase tracking-widest mb-4 block text-brand-orange">About Us</span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-white leading-tight">
                            Affiliations & Links
                        </h1>
                        <p className="text-xl text-gray-200 font-light leading-relaxed">
                            {af.intro}
                        </p>
                    </div>
                </div>
            </div>

            {/* Partner Institutions */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14">
                        <span className="text-sm font-bold uppercase tracking-widest text-brand-green mb-3 block">Partnerships</span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">Partner Institutions</h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">Building an ecosystem of strategic alliances across research, governance, industry, and development sectors.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        {af.partners.map((partner, i) => (
                            <div key={i} className="bg-gray-50 border border-gray-100 rounded-2xl p-8 hover:shadow-lg hover:border-brand-green/30 transition-all group">
                                <div className="w-14 h-14 rounded-xl bg-brand-green/10 text-brand-green flex items-center justify-center mb-6">
                                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                                </div>
                                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-brand-orange/10 text-brand-orange mb-3">{partner.type}</span>
                                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-brand-green transition-colors">{partner.name}</h3>
                                <p className="text-gray-500 text-sm">{partner.detail}</p>
                            </div>
                        ))}
                        <div className="bg-brand-green/5 border-2 border-dashed border-brand-green/30 rounded-2xl p-8 flex items-center justify-center text-center">
                            <div>
                                <div className="w-14 h-14 rounded-xl bg-brand-green/10 text-brand-green flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" /></svg>
                                </div>
                                <p className="font-bold text-brand-green mb-1">Growing Network</p>
                                <p className="text-sm text-gray-500">New affiliations being added. Contact us to partner.</p>
                            </div>
                        </div>
                    </div>

                    {/* Contact for Affiliations */}
                    <div className="bg-gradient-to-r from-brand-green/10 to-brand-orange/10 border border-brand-green/20 rounded-2xl p-8 text-center">
                        <p className="text-brand-green font-semibold text-lg">
                            For affiliation and partnership queries, contact <strong>Pranith</strong> at{' '}
                            <a href="tel:+919966981963" className="underline hover:text-brand-dark transition-colors">+91 9966981963</a>
                        </p>
                    </div>
                </div>
            </section>

            {/* Related Platforms / Links */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-14">
                        <span className="text-sm font-bold uppercase tracking-widest text-brand-green mb-3 block">Ecosystem</span>
                        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">Related Platforms</h2>
                        <p className="text-gray-500 mt-3 max-w-xl mx-auto">Key platforms and organizations we collaborate with and recommend as part of the broader agri-food ecosystem.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {af.relatedLinks.map((link, i) => (
                            <a key={i} href={link.url} target="_blank" rel="noopener noreferrer"
                                className="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg hover:border-brand-green/30 transition-all group block">
                                <div className="w-10 h-10 rounded-xl bg-brand-green/10 text-brand-green flex items-center justify-center mb-4 group-hover:bg-brand-green group-hover:text-white transition-all">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                                </div>
                                <h3 className="font-bold text-gray-900 mb-2 group-hover:text-brand-green transition-colors">{link.name}</h3>
                                <p className="text-sm text-gray-500 leading-relaxed">{link.desc}</p>
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AffiliationsPage;
