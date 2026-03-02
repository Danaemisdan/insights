import React from 'react';
import {
    CpuChipIcon,
    GlobeAltIcon,
    BuildingOffice2Icon,
    ChartBarIcon,
    RocketLaunchIcon,
    BeakerIcon,
    ArrowsRightLeftIcon,
    ScaleIcon
} from '@heroicons/react/24/outline';

const services = [
    { title: 'Turnkey Agri-Food Systems', icon: ArrowsRightLeftIcon, desc: 'End-to-end development ensuring climate resilience.' },
    { title: 'Processing Infrastructure', icon: BuildingOffice2Icon, desc: 'State-of-the-art facilities for maximum nutritional retention.' },
    { title: 'Millet Value Chain', icon: BeakerIcon, desc: 'Specialized focus on high-nutrition, drought-resistant crops.' },
    { title: 'Start-up Incubation', icon: RocketLaunchIcon, desc: 'Fostering the next generation of agri-tech disruptors.' },
    { title: 'Tech Commercialisation', icon: CpuChipIcon, desc: 'Bringing lab innovations into actionable field technology.' },
    { title: 'Global Advisory', icon: GlobeAltIcon, desc: 'Engaging governments to shape sustainable food policy.' },
    { title: 'Market Intelligence', icon: ChartBarIcon, desc: 'Data-driven insights to predict and capture market value.' },
    { title: 'Quality Frameworks', icon: ScaleIcon, desc: 'Establishing rigorous standards for nutritional outcomes.' }
];

const Services = () => {
    return (
        <section id="services" className="py-24 bg-brand-dark relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <div className="max-w-2xl">
                        <span className="text-brand-yellow font-bold uppercase tracking-widest text-sm mb-2 block">The Insights Engine</span>
                        <h2 className="text-4xl md:text-6xl font-black text-white leading-tight">
                            8 Dynamic <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow to-yellow-300">Verticals</span>
                        </h2>
                    </div>
                    <p className="mt-6 md:mt-0 text-gray-300 max-w-md text-lg border-l-4 border-brand-yellow pl-4 text-right md:text-left">
                        Our interconnected services form a comprehensive ecosystem that transforms every link of the agricultural supply chain.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                    {services.map((service, idx) => (
                        <div key={idx} className="group relative">
                            {/* Hover glowing background */}
                            <div className="absolute inset-0 bg-gradient-to-r from-brand-yellow to-yellow-500 rounded-2xl blur-lg opacity-0 group-hover:opacity-70 transition duration-500"></div>

                            <div className="relative h-full bg-brand-green border border-brand-lightGreen/20 rounded-2xl p-8 transform group-hover:-translate-y-2 transition duration-500 flex flex-col justify-between overflow-hidden shadow-2xl">
                                {/* Diagonal accent line */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-yellow/10 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-700"></div>

                                <div>
                                    <div className="bg-brand-dark w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-[0_0_15px_rgba(0,0,0,0.3)] group-hover:shadow-[0_0_15px_rgba(234,179,8,0.5)] transition duration-300 group-hover:bg-brand-yellow">
                                        <service.icon className="w-8 h-8 text-brand-yellow group-hover:text-brand-dark transition-colors duration-300" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-yellow transition duration-300">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-300 group-hover:text-white transition duration-300 text-sm leading-relaxed">
                                        {service.desc}
                                    </p>
                                </div>
                                <div className="mt-8 flex items-center text-brand-yellow font-bold text-sm tracking-wider uppercase group-hover:text-white transition duration-300 cursor-pointer">
                                    Explore <span className="ml-2 group-hover:translate-x-2 transition-transform duration-300">→</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Connecting "Octopus" visual metaphor background lines */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none opacity-5">
                    <svg viewBox="0 0 100 100" className="w-full h-full text-white" fill="none" stroke="currentColor" strokeWidth="0.2">
                        <circle cx="50" cy="50" r="40" />
                        <circle cx="50" cy="50" r="30" />
                        <circle cx="50" cy="50" r="20" />
                        <path d="M50 50 L10 10 M50 50 L90 10 M50 50 L10 90 M50 50 L90 90 M50 50 L50 10 M50 50 L50 90 M50 50 L10 50 M50 50 L90 50" />
                    </svg>
                </div>
            </div>
        </section>
    );
};

export default Services;
