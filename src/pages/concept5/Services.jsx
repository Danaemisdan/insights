import React from 'react';

const steps = [
    {
        phase: 'Phase One',
        title: 'Nurturing the Source',
        desc: 'We begin where it matters most: the soil. Through specialized Business Development and Start-up Incubation, we empower smallholder farmers and agri-entrepreneurs with the tools and knowledge needed to cultivate climate-resilient crops.',
        image: 'https://images.unsplash.com/photo-1594911772125-07ee1d718b5b?auto=format&fit=crop&q=80&w=1600'
    },
    {
        phase: 'Phase Two',
        title: 'Processing with Care',
        desc: 'Raw potential must be refined safely. We design and deploy high-tech Processing Infrastructure & Common Facility Centres. This ensures that crops like Millet are processed efficiently, retaining their vital nutrients while scaling for global markets.',
        image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1600'
    },
    {
        phase: 'Phase Three',
        title: 'Technology & Innovation',
        desc: 'Our Innovation Management teams ensure that the latest agricultural technologies—from IoT monitoring to sustainable packaging—are commercialized and integrated seamlessly into the daily routines of our farming communities.',
        image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1600'
    },
    {
        phase: 'Phase Four',
        title: 'Global Nutrition Impact',
        desc: 'Through Global Advisory & Government Engagement, we don\'t just build local supply chains; we shape international policy. We orchestrate Turnkey Agri-Food System projects that deliver measurable health and nutrition outcomes across borders.',
        image: 'https://images.unsplash.com/photo-1490818387583-1b5f5961a271?auto=format&fit=crop&q=80&w=1600'
    }
];

const Services = () => {
    return (
        <section id="journey" className="py-24 bg-[#fbf8f1] text-[#5A4D43]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <span className="text-[#C5832B] font-serif italic text-xl mb-4 block">The 8 Verticals of Care</span>
                    <h2 className="text-4xl md:text-5xl font-serif text-[#2A3626] mb-6">Our Journey: Earth to Table</h2>
                    <p className="text-lg leading-relaxed font-serif text-[#6D635B]">
                        Transforming the Agri & Food Value Chain isn't just a technical process. It's a human story. We manage 8 interconnected verticals that guide food from the seed all the way to global nutrition security.
                    </p>
                </div>

                <div className="space-y-32">
                    {steps.map((step, index) => (
                        <div key={index} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-16`}>
                            {/* Narrative Text */}
                            <div className="w-full lg:w-1/2">
                                <span className="inline-block text-[#C5832B] uppercase tracking-widest text-sm font-bold mb-4 pb-2 border-b border-[#E8DFCF]">{step.phase}</span>
                                <h3 className="text-3xl md:text-4xl font-serif text-[#2A3626] mb-6">{step.title}</h3>
                                <p className="text-[17px] leading-loose text-[#6D635B] font-serif mb-8 max-w-lg">
                                    {step.desc}
                                </p>
                                <a href="#" className="inline-flex items-center text-[#2A3626] font-semibold hover:text-[#C5832B] transition-colors group">
                                    <span className="border-b border-transparent group-hover:border-[#C5832B] transition-all">Explore this vertical</span>
                                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                </a>
                            </div>

                            {/* Emotive Imagery */}
                            <div className="w-full lg:w-1/2 relative group">
                                <div className="absolute inset-0 bg-[#C5832B] translate-x-4 translate-y-4 rounded-xl opacity-20 group-hover:translate-x-6 group-hover:translate-y-6 transition-transform duration-500"></div>
                                <div className="relative z-10 aspect-[4/3] overflow-hidden rounded-xl shadow-xl">
                                    <img src={step.image} alt={step.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
