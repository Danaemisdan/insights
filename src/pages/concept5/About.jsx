import React from 'react';

const About = () => {
    return (
        <section id="about" className="py-24 bg-[#E8DFCF] relative overflow-hidden">
            {/* Organic background accent shape */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#fbf8f1] rounded-full blur-[100px] opacity-40 translate-x-1/3 -translate-y-1/3"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    {/* Founder Imagery */}
                    <div className="relative p-4">
                        <div className="absolute inset-0 border-2 border-[#C5832B] transform rotate-3 rounded-2xl"></div>
                        <img
                            src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=1600"
                            alt="Founders"
                            className="w-full aspect-[3/4] object-cover rounded-2xl shadow-2xl relative z-10 grayscale hover:grayscale-0 transition-all duration-700"
                        />
                        <div className="absolute -bottom-8 -right-8 bg-[#2A3626] text-[#E8DFCF] p-6 rounded-xl shadow-xl z-20 max-w-xs">
                            <p className="font-serif italic text-lg leading-relaxed">
                                "Our mission is simple: to leave the soil richer and the people healthier than we found them."
                            </p>
                        </div>
                    </div>

                    {/* Human-centric Text */}
                    <div className="lg:pl-10">
                        <span className="text-[#C5832B] font-serif italic text-xl mb-4 block">Meet the Stewards</span>
                        <h2 className="text-4xl lg:text-5xl font-serif text-[#2A3626] mb-8 leading-tight">
                            Guided by experience. Driven by compassion.
                        </h2>

                        <div className="space-y-6 text-[17px] leading-relaxed text-[#6D635B] font-serif mb-12">
                            <p>
                                Insights Value Hub was born from a realization: true agricultural transformation cannot happen in silos. It requires a holistic, empathetic approach to the entire ecosystem.
                            </p>
                            <p>
                                <strong>Ravi Varma</strong> and our leadership team envision a world where climate-resilient farming and profound nutritional outcomes are inherently linked. We believe that by providing the right infrastructure, commercialization paths, and advisory support, we can empower communities to feed themselves—and the world—sustainably.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 border-t border-[#D9CDBB] pt-8">
                            <div>
                                <h4 className="text-[#2A3626] text-xl font-serif mb-2">Ravi Varma</h4>
                                <p className="text-[#C5832B] font-bold text-sm uppercase tracking-widest mb-3">Director</p>
                                <p className="text-[#6D635B] font-serif text-sm leading-relaxed">
                                    Bringing decades of systems-level thinking to global agricultural challenges.
                                </p>
                            </div>
                            <div>
                                <h4 className="text-[#2A3626] text-xl font-serif mb-2">Technical Board</h4>
                                <p className="text-[#C5832B] font-bold text-sm uppercase tracking-widest mb-3">Innovation Stewards</p>
                                <p className="text-[#6D635B] font-serif text-sm leading-relaxed">
                                    Experts in agronomy, processing technology, and sustainable finance.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
