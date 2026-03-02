import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <div className="relative bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 pt-20">

                    {/* Angled Background Split (Desktop) */}
                    <svg className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                        <polygon points="50,0 100,0 50,100 0,100" />
                    </svg>

                    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                        <div className="sm:text-center lg:text-left">
                            <span className="text-brand-green font-semibold tracking-wider uppercase text-sm mb-2 block">
                                Agri-Food System Development
                            </span>
                            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl text-brand-dark mb-6">
                                <span className="block xl:inline">Transforming</span>{' '}
                                <span className="block text-brand-green xl:inline">Value Chains</span>
                            </h1>
                            <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 font-light leading-relaxed">
                                We conceptualize, establish, and operate functional ecosystem platforms that connect research, infrastructure, enterprises, and markets while enhancing food security, farmer incomes, and nutrition outcomes.
                            </p>
                            <div className="mt-8 sm:mt-12 sm:flex sm:justify-center lg:justify-start">
                                <div className="rounded-full shadow">
                                    <a href="#services" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-brand-green hover:bg-brand-dark md:py-4 md:text-lg md:px-10 transition-colors">
                                        Explore Verticals
                                    </a>
                                </div>
                                <div className="mt-3 sm:mt-0 sm:ml-3">
                                    <a href="#about" className="w-full flex items-center justify-center px-8 py-3 border border-gray-200 text-base font-medium rounded-full text-brand-dark bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10 group transition-all">
                                        Our Mission
                                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>

            {/* Hero Image Area */}
            <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 bg-brand-lightGreen/30">
                <img
                    className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full opacity-90 mix-blend-multiply"
                    src="/hero.png"
                    alt="Fields of millet under a blue sky"
                />
                {/* Subtle overlay to soften the image and fit the 'Minimalist Wellness' theme */}
                <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px]"></div>
            </div>
        </div>
    );
};

export default Hero;
