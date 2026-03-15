import React from 'react';
import { siteContent } from '../../data/siteContent';
import { images } from '../../data/imageMap';

const WorksPage = () => {
    const styles = {
        headingClass: 'font-extrabold tracking-tight',
        accentColor: 'text-brand-green',
        cardBg: 'bg-white rounded-2xl shadow-sm border border-gray-100',
    };

    const projects = [
        { img: images.works.project1, tag: 'Field Implementation', title: 'Pilot Value Chain Strategy', desc: 'Executing comprehensive mapping and strategic advisory across targeted agro-ecological zones for millet value chains.' },
        { img: images.works.project2, tag: 'Ecosystem Building', title: 'Institutional Incubation', desc: 'Developing infrastructure layouts and operational models for millet processing clusters and innovation hubs.' },
        { img: images.works.project3, tag: 'Capacity Building', title: 'Farmer Network Expansion', desc: 'Training initiatives focused on sustainable millet cultivation, yield optimization, and market linkages.' },
        { img: images.works.project4, tag: 'Tech Commercialization', title: 'Processing Innovation', desc: 'Setting up state-of-the-art incubation facilities for value-added agri products and technology transfer.' },
    ];

    return (
        <div className="w-full">
            {/* Hero */}
            <div className="relative min-h-[45vh] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src={images.works.project3} alt="Our Works" className="w-full h-full object-cover" />
                    <div className={`absolute inset-0 bg-gradient-to-r from-slate-900/95 via-slate-900/80 to-transparent`}></div>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-16">
                    <span className={`text-sm font-bold uppercase tracking-widest mb-4 block text-brand-orange`}>Our Works</span>
                    <h1 className={`text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 max-w-4xl leading-tight text-white`}>
                        Driving Tangible Impact in Agri-Food Systems
                    </h1>
                    <p className="text-xl text-gray-200 font-light max-w-2xl">{siteContent.works.current}</p>
                </div>
            </div>

            {/* Projects Grid */}
            <div className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                        {projects.map((project, idx) => (
                            <div key={idx} className={`${styles.cardBg} overflow-hidden group`}>
                                <div className="h-72 overflow-hidden relative">
                                    <div className={`absolute inset-0 bg-brand-green/10 group-hover:bg-transparent transition-colors z-10`}></div>
                                    <img src={project.img} alt={project.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
                                    <span className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold z-20 bg-brand-green text-white`}>{project.tag}</span>
                                </div>
                                <div className="p-8">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{project.title}</h3>
                                    <p className="text-gray-600 leading-relaxed">{project.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Case Snapshots & International */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className={`p-10 bg-gradient-to-br from-brand-green to-brand-dark text-white rounded-2xl`}>
                            <h3 className="text-2xl font-extrabold mb-4">Case Snapshots</h3>
                            <p className="text-gray-200 font-medium leading-relaxed">{siteContent.works.caseSnapshots}</p>
                        </div>
                        <div className={`p-10 bg-white shadow-lg border border-gray-100 rounded-2xl`}>
                            <h3 className={`text-2xl font-extrabold text-gray-900 mb-4`}>International Engagements</h3>
                            <p className="text-gray-600 font-medium leading-relaxed">{siteContent.works.international}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Image strip */}
            <div className="flex overflow-hidden">
                {[images.millets.barnyard, images.millets.jowar, images.millets.kodo, images.millets.little, images.millets.pearl, images.millets.proso].map((img, idx) => (
                    <div key={idx} className="flex-shrink-0 w-1/3 md:w-1/6 h-24 md:h-32 relative">
                        <img src={img} alt={`Millet ${idx}`} className="w-full h-full object-cover" />
                        <div className={`absolute inset-0 bg-brand-green/20`}></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WorksPage;
