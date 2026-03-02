import React from 'react';
import { Settings, Droplet, Sprout, Briefcase, Lightbulb, Globe, Activity, Layers } from 'lucide-react';

const Services = () => {
    const verticals = [
        {
            id: 1,
            name: 'Turnkey Agri-Food System Development',
            description: 'Conceptualisation, master planning, and operationalisation of processing facilities.',
            icon: Settings,
        },
        {
            id: 2,
            name: 'Processing Infrastructure & CFCs',
            description: 'Establishment and management of shared processing platforms and validation support.',
            icon: Droplet,
        },
        {
            id: 3,
            name: 'Millet Value Chain Development',
            description: 'Integration of climate-resilient production models and decentralised processing systems.',
            icon: Sprout,
        },
        {
            id: 4,
            name: 'Business Development & Incubation',
            description: 'Incubation programme design, product development, and scale-up investment facilitation.',
            icon: Briefcase,
        },
        {
            id: 5,
            name: 'Innovation & Tech Commercialisation',
            description: 'IP management, tech transfer, and industry-academia linkage models.',
            icon: Lightbulb,
        },
        {
            id: 6,
            name: 'Global Advisory & Govt Engagement',
            description: 'Advising public agencies on mainstreaming nutrition-sensitive, cluster-based models.',
            icon: Globe,
        },
        {
            id: 7,
            name: 'Nutrition Systems Intelligence',
            description: 'Translating applied research and deploying long-term value chain roadmaps.',
            icon: Activity,
        },
        {
            id: 8,
            name: 'Ecosystem Performance Optimization',
            description: 'Monitoring frameworks, compliance systems, and continuous enterprise engagement.',
            icon: Layers,
        },
    ];

    return (
        <section id="services" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <span className="text-brand-green font-semibold tracking-wider uppercase text-sm mb-3 block">
                        Core Areas of Expertise
                    </span>
                    <h2 className="text-3xl font-extrabold text-brand-dark sm:text-4xl mb-4">
                        The Eight Verticals
                    </h2>
                    <p className="text-xl text-gray-500 font-light">
                        Insights operates on a systems framework guided by strategic pillars, encompassing eight distinct focus areas to transform agri & food value chains.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {verticals.map((vertical) => (
                        <div
                            key={vertical.id}
                            className="bg-gray-50 rounded-xl p-8 border border-gray-100 hover:border-brand-green/50 hover:shadow-lg transition-all duration-300 group relative overflow-hidden"
                        >
                            {/* Subtle accent line on hover */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-brand-green transform scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-300"></div>

                            <div className="w-12 h-12 rounded-lg bg-brand-lightGreen text-brand-green flex items-center justify-center mb-6 group-hover:bg-brand-green group-hover:text-white transition-colors duration-300">
                                <vertical.icon strokeWidth={1.5} size={24} />
                            </div>

                            <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight group-hover:text-brand-dark transition-colors">
                                {vertical.name}
                            </h3>

                            <p className="text-gray-500 text-sm font-light leading-relaxed">
                                {vertical.description}
                            </p>

                            <div className="mt-6">
                                <a href="#" className="inline-flex items-center text-sm font-semibold text-brand-green group-hover:text-brand-dark transition-colors">
                                    Learn more <span className="ml-1 opacity-0 group-hover:opacity-100 transform translate-x-[-10px] group-hover:translate-x-0 transition-all duration-300">→</span>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
