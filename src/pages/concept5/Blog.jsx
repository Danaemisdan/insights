import React from 'react';

const Blog = () => {
    const stories = [
        {
            category: 'Field Notes',
            title: 'Reviving Ancient Grains: The Millet Renaissance',
            excerpt: 'How our processing centers in rural communities are turning climate-resilient millets into the nutritional staple of tomorrow.',
            image: 'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&q=80&w=800'
        },
        {
            category: 'Community Impact',
            title: 'Empowering Women in Agriculture Infrastructure',
            excerpt: 'Meet the female entrepreneurs leading our newest Common Facility Centres and changing the economic landscape.',
            image: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?auto=format&fit=crop&q=80&w=800'
        }
    ];

    return (
        <section id="impact" className="py-24 bg-[#fbf8f1] relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <div className="max-w-2xl">
                        <span className="text-[#C5832B] font-serif italic text-xl mb-4 block">Stories of Impact</span>
                        <h2 className="text-4xl md:text-5xl font-serif text-[#2A3626] mb-6">Voices from the Field</h2>
                        <p className="text-[17px] leading-relaxed font-serif text-[#6D635B]">
                            Read stories of transformation, resilience, and nutritional innovation from our partners across the globe.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {stories.map((story, idx) => (
                        <div key={idx} className="group cursor-pointer">
                            <div className="relative overflow-hidden rounded-2xl mb-6 aspect-[16/10]">
                                <img src={story.image} alt={story.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" />
                                <div className="absolute inset-0 bg-[#2A3626]/20 group-hover:bg-transparent transition-colors duration-500"></div>
                            </div>
                            <span className="text-[#C5832B] font-bold text-xs uppercase tracking-widest mb-3 block">{story.category}</span>
                            <h3 className="text-2xl font-serif text-[#2A3626] mb-3 group-hover:text-[#C5832B] transition-colors">{story.title}</h3>
                            <p className="text-[#6D635B] font-serif leading-relaxed mb-4">{story.excerpt}</p>
                            <span className="inline-flex items-center text-[#2A3626] font-semibold text-sm hover:text-[#C5832B] transition-colors border-b border-[#2A3626] pb-1">
                                Read the full story
                            </span>
                        </div>
                    ))}
                </div>

                <div className="mt-20 bg-[#2A3626] rounded-3xl p-10 md:p-16 flex flex-col md:flex-row items-center justify-between shadow-2xl relative overflow-hidden">
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/rice-paper.png')" }}></div>
                    <div className="md:w-1/2 mb-8 md:mb-0 relative z-10">
                        <h3 className="text-3xl font-serif text-[#F3E5AB] mb-4 drop-shadow-md">Join our narrative</h3>
                        <p className="text-[#E8DFCF] font-serif text-lg leading-relaxed">
                            Subscribe to receive our latest field notes, nutritional insights, and stories of agricultural triumph.
                        </p>
                    </div>
                    <div className="md:w-1/2 w-full flex justify-end relative z-10">
                        <form className="w-full max-w-md">
                            <div className="flex bg-[#E8DFCF] rounded-full p-1 overflow-hidden shadow-inner">
                                <input
                                    type="email"
                                    placeholder="Your email address"
                                    className="flex-grow bg-transparent border-none text-[#5A4D43] px-6 py-4 focus:outline-none focus:ring-0 font-serif placeholder-[#5A4D43]/50"
                                />
                                <button type="submit" className="bg-[#C5832B] text-white px-8 py-4 rounded-full font-serif hover:bg-[#A36A20] transition-colors shadow-md">
                                    Subscribe
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;
