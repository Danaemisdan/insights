import React from 'react';
import { Link } from 'react-router-dom';
import { siteContent } from '../../data/siteContent';
import { images } from '../../data/imageMap';

const comm = siteContent.workWithUs.community;

const imgMap = {
    culture: images.about.culture,
    pearl: images.millets.pearl,
    barnyard: images.millets.barnyard,
};

const WorkCommunityPage = () => {
    return (
        <div className="w-full">
            {/* Hero */}
            <div className="relative min-h-[45vh] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src={images.about.culture} alt="Community Engagement" className="w-full h-full object-cover" loading="eager" />
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/80 to-transparent" />
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
                    <div className="max-w-3xl">
                        <span className="text-sm font-bold uppercase tracking-widest mb-4 block text-brand-orange">Work With Us</span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-white leading-tight">
                            Community Engagement
                        </h1>
                        <p className="text-xl text-gray-200 font-light leading-relaxed">{comm.intro}</p>
                    </div>
                </div>
            </div>

            {/* Community Groups */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-16">
                        {comm.groups.map((group, i) => (
                            <div key={i} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${i % 2 !== 0 ? 'lg:grid-flow-dense' : ''}`}>
                                <div className={i % 2 !== 0 ? 'lg:col-start-2' : ''}>
                                    <span className="text-sm font-bold uppercase tracking-widest text-brand-green mb-4 block">
                                        {String(i + 1).padStart(2, '0')} / {String(comm.groups.length).padStart(2, '0')}
                                    </span>
                                    <h2 className="text-3xl font-extrabold text-gray-900 mb-4">{group.title}</h2>
                                    <p className="text-lg text-gray-600 leading-relaxed mb-8">{group.desc}</p>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {group.programs.map((prog, j) => (
                                            <div key={j} className="flex items-start gap-3 p-4 bg-gray-50 rounded-xl border border-gray-100 hover:border-brand-green/30 transition-all">
                                                <div className="w-6 h-6 rounded-lg bg-brand-green text-white flex items-center justify-center flex-shrink-0 mt-0.5">
                                                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" /></svg>
                                                </div>
                                                <span className="text-gray-700 text-sm font-medium">{prog}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className={i % 2 !== 0 ? 'lg:col-start-1' : ''}>
                                    <div className="relative">
                                        <img
                                            src={imgMap[group.image] || images.about.team}
                                            alt={group.title}
                                            className="w-full h-[450px] object-cover rounded-3xl shadow-2xl"
                                            loading="lazy"
                                        />
                                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-brand-green to-brand-dark rounded-2xl opacity-20 pointer-events-none" />
                                        <div className="absolute top-6 left-6 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-xl shadow-md">
                                            <span className="font-bold text-brand-green text-sm">{group.title}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-gradient-to-r from-brand-green to-brand-dark">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                    <h2 className="text-3xl font-extrabold mb-4">Partner with Us on Community Programs</h2>
                    <p className="text-gray-200 mb-8">Working with farmers, FPOs, and SHGs is at the heart of what we do. Join our community initiatives.</p>
                    <Link to="/contact" className="inline-flex items-center px-10 py-4 rounded-full bg-white text-brand-green font-bold hover:bg-brand-dark hover:text-white transition-all">
                        Get In Touch
                    </Link>
                </div>
            </section>
        </div>
    );
};

export default WorkCommunityPage;
