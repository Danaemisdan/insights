import React from 'react';

const services = [
    { id: 1, title: 'Turnkey Agri-Food Projects', desc: 'End-to-end management of large-scale systemic agricultural projects with measurable impact.', metric: '45 Active Projects' },
    { id: 2, title: 'Processing Infrastructure', desc: 'Developing Common Facility Centres (CFCs) utilizing scalable data models.', metric: '1.2M Tons Capacity' },
    { id: 3, title: 'Millet Value Chain', desc: 'Specialized interventions in climate-resilient crop commercialization.', metric: '+120% Crop Yield' },
    { id: 4, title: 'Startup Incubation', desc: 'Business development frameworks for emerging agri-tech enterprises.', metric: '85 Funded Startups' },
    { id: 5, title: 'Tech Commercialisation', desc: 'Bridging the gap between lab research and scalable market implementation.', metric: '24 Patents Filed' },
    { id: 6, title: 'Global Advisory', desc: 'Strategic consulting for governments and international policy bodies.', metric: '12 Active MOUs' },
    { id: 7, title: 'Supply Chain Analytics', desc: 'Data-driven transparency and traceability models for food security.', metric: '100% Traceability' },
    { id: 8, title: 'Sustainable Financing', desc: 'Structuring green bonds and ESG-compliant capital models.', metric: '$500M Deployed' },
];

const Services = () => {
    return (
        <section id="platform" className="py-24 bg-white border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="mb-16 border-l-4 border-brand-green pl-6 py-2">
                    <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight uppercase">The 8-Node Architecture</h2>
                    <p className="mt-4 text-slate-600 max-w-3xl text-lg leading-relaxed">
                        Our highly structured ecosystem development model integrates specialized verticals for localized impact and global scalability.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200 border border-slate-200">
                    {services.map(service => (
                        <div key={service.id} className="bg-white p-8 hover:bg-slate-50 transition duration-300 group flex flex-col h-full">
                            <div className="flex justify-between items-center mb-6">
                                <div className="text-brand-green font-mono text-xs font-bold px-2 py-1 bg-brand-lightGreen border border-brand-green/20">
                                    NODE {String(service.id).padStart(2, '0')}
                                </div>
                                <svg className="w-5 h-5 text-slate-300 group-hover:text-brand-green transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" /></svg>
                            </div>

                            <h3 className="text-lg font-bold text-slate-900 mb-3 group-hover:text-brand-green transition-colors">{service.title}</h3>
                            <p className="text-sm text-slate-600 mb-8 leading-relaxed flex-grow">
                                {service.desc}
                            </p>

                            <div className="pt-4 border-t border-slate-100">
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Operational Metric</span>
                                <div className="text-lg font-black font-mono text-slate-900 mt-1 tracking-tight">{service.metric}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
