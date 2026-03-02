import React from 'react';
import { ArrowRightIcon } from '@heroicons/react/24/solid';

const Hero = () => {
    return (
        <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-brand-dark">
            {/* Clean Background Image */}
            <div className="absolute inset-0 z-0 bg-brand-dark">
                <img src="/hero.png" alt="Agriculture Field" className="w-full h-full object-cover opacity-40 mix-blend-overlay" />
                <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/90 to-brand-dark/40"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full text-white py-20">
                <div className="max-w-3xl">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-green/50 border border-brand-yellow/30 backdrop-blur-md mb-8">
                        <span className="block w-2 h-2 rounded-full bg-brand-yellow animate-ping"></span>
                        <span className="text-brand-yellow font-bold text-sm tracking-widest uppercase">Transforming Value Chains</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
                        Powering the <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-yellow to-yellow-200">Future</span> of Agri-Food Networks.
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-300 font-medium mb-12 max-w-2xl leading-relaxed">
                        We build highly resilient, nutrition-sensitive communities. Step into a vibrant ecosystem designed for impact and sustained growth.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                        <a
                            href="#services"
                            className="group flex items-center justify-center gap-3 bg-brand-yellow text-brand-dark px-8 py-4 rounded-full font-extrabold text-lg hover:bg-yellow-400 transition duration-300 shadow-[0_0_20px_rgba(234,179,8,0.5)] hover:shadow-[0_0_30px_rgba(234,179,8,0.8)]"
                        >
                            Explore Our Verticals
                            <ArrowRightIcon className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                        </a>
                        <a
                            href="#about"
                            className="flex items-center justify-center bg-transparent border-2 border-brand-yellow/50 text-brand-yellow px-8 py-4 rounded-full font-bold text-lg hover:bg-brand-yellow/10 hover:border-brand-yellow transition duration-300 backdrop-blur-sm"
                        >
                            Discover Our Mission
                        </a>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                <div className="w-8 h-14 border-2 border-white/30 rounded-full flex justify-center p-2">
                    <div className="w-1 h-3 bg-brand-yellow rounded-full"></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
