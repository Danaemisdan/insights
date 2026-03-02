import React from 'react';

const About = () => {
    return (
        <section id="about" className="py-24 bg-white relative overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute top-0 left-0 w-1/2 h-full bg-brand-lightGreen/10 -skew-x-12 transform origin-top-left -z-10"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-20 relative">
                    <span className="text-brand-yellow font-extrabold uppercase tracking-widest text-sm block mb-3">Our Foundation</span>
                    <h2 className="text-4xl md:text-5xl font-black text-brand-dark tracking-tight">
                        Powering Institutional <span className="text-brand-green">Progress</span>
                    </h2>
                    <div className="w-24 h-1.5 bg-brand-yellow mx-auto mt-6 rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Vision & Mission Block */}
                    <div className="relative group perspective-1000">
                        <div className="absolute inset-0 bg-gradient-to-br from-brand-yellow to-yellow-500 rounded-3xl transform rotate-3 scale-[1.03] opacity-50 group-hover:rotate-6 group-hover:scale-[1.05] transition-all duration-500"></div>
                        <div className="bg-brand-dark text-white p-10 md:p-12 rounded-3xl relative shadow-2xl z-10 transform transition-transform duration-500 hover:-translate-y-2 hover:rotate-[-1deg]">
                            <svg className="w-16 h-16 text-brand-yellow mb-8 opacity-80" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                            </svg>
                            <h3 className="text-3xl font-bold mb-6 text-brand-yellow drop-shadow-md">The Ecosystem Model</h3>
                            <p className="text-gray-300 text-lg leading-relaxed mb-6">
                                Insights Value Hub is built on an interconnected model of growth. We don't just solve isolated agriculture problems; we architect complete value chains that guarantee nutrition-sensitive and climate-resilient outcomes.
                            </p>
                            <p className="text-gray-300 text-lg leading-relaxed">
                                Our dynamic approach unites smallholder farmers, cutting-edge processing technology, and global policy advisory into one unified powerhouse.
                            </p>
                        </div>
                    </div>

                    {/* Directors Block */}
                    <div className="flex flex-col gap-8">
                        <div className="bg-gray-50 p-8 rounded-3xl border-l-8 border-brand-green shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden">
                            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-brand-green/10 rounded-full"></div>
                            <h4 className="text-2xl font-black text-brand-dark mb-2">Director Name</h4>
                            <p className="text-brand-green font-bold text-sm uppercase tracking-wider mb-4">Strategic Visionary</p>
                            <p className="text-gray-600 leading-relaxed relative z-10">
                                With decades of experience navigating global advisory and government engagement, our leadership pioneers strategies that transform passive supply chains into vibrant economic engines.
                            </p>
                        </div>

                        <div className="bg-gray-50 p-8 rounded-3xl border-l-8 border-brand-yellow shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden">
                            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-brand-yellow/10 rounded-full"></div>
                            <h4 className="text-2xl font-black text-brand-dark mb-2">Director Name</h4>
                            <p className="text-yellow-600 font-bold text-sm uppercase tracking-wider mb-4">Operations & Tech</p>
                            <p className="text-gray-600 leading-relaxed relative z-10">
                                Driving the technological and operational heartbeat of the hub, ensuring processing infrastructure runs at peak efficiency to deliver nutrition-dense foods reliably.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
