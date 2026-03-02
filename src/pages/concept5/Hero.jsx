import React from 'react';

const Hero = () => {
    return (
        <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
            {/* Full-bleed emotive narrative background */}
            <div className="absolute inset-0 z-0 bg-[#2A3626]">
                <img
                    src="https://images.unsplash.com/photo-1592982537447-6f233496695b?q=80&w=2670&auto=format&fit=crop"
                    alt="Farmer in the field"
                    className="w-full h-full object-cover opacity-60"
                />

                {/* Warm, earthy gradient overlay to make text readable and set the tone */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#2A3626] via-[#2A3626]/40 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#5A4D43]/60 via-transparent to-transparent"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-20">
                <div className="max-w-3xl">
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-serif text-[#F3E5AB] leading-[1.1] mb-6 drop-shadow-lg">
                        From the hands that sow,<br />
                        <span className="text-white italic">to the health we grow.</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-[#E8DFCF] font-serif font-light mb-12 leading-relaxed max-w-2xl drop-shadow-md">
                        We don't just engineer agricultural ecosystems. We nurture the journey of food—ensuring climate resilience starts in the soil and nutrition reaches every table.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6">
                        <a
                            href="#journey"
                            className="bg-[#C5832B] text-white px-8 py-4 rounded-full font-serif text-lg hover:bg-[#A36A20] transition-colors shadow-lg text-center"
                        >
                            Follow the Journey
                        </a>
                        <a
                            href="#about"
                            className="bg-transparent border border-[#E8DFCF] text-[#E8DFCF] px-8 py-4 rounded-full font-serif text-lg hover:bg-[#E8DFCF] hover:text-[#2A3626] transition-colors text-center backdrop-blur-sm"
                        >
                            Hear Our Story
                        </a>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce text-[#E8DFCF]">
                <span className="font-serif text-sm mb-3 italic">Begin the story</span>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
            </div>
        </section>
    );
};

export default Hero;
