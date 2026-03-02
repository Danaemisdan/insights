import React from 'react';

const About = () => {
    return (
        <section id="about" className="py-24 bg-brand-lightGreen/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Section Header */}
                <div className="text-center mb-20">
                    <span className="text-brand-green font-semibold tracking-wider uppercase text-sm mb-3 block text-center">
                        Who We Are
                    </span>
                    <h2 className="text-3xl font-extrabold text-brand-dark sm:text-4xl">
                        Institutional Profile
                    </h2>
                    <div className="mt-4 max-w-3xl mx-auto text-xl text-gray-500 font-light">
                        <p>
                            INSIGHTS Value Hub Pvt Ltd is a globally engaged implementation and advisory organization specializing in the design, establishment, and operational management of integrated agri-food value chain platforms.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Column: Vision & Approach */}
                    <div>
                        <div className="mb-10">
                            <h3 className="text-2xl font-bold text-brand-dark mb-4 border-l-4 border-brand-yellow pl-4">Our Vision</h3>
                            <p className="text-gray-600 leading-relaxed font-light">
                                To strengthen nutrition-sensitive, climate-resilient agri-food systems through integrated value chain development and institutional excellence.
                            </p>
                        </div>

                        <div className="mb-10">
                            <h3 className="text-2xl font-bold text-brand-dark mb-4 border-l-4 border-brand-yellow pl-4">Focus on Smallholder Inclusion</h3>
                            <p className="text-gray-600 mb-4 font-light">
                                We design value chains that actively integrate smallholder farmers through:
                            </p>
                            <ul className="space-y-3">
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green text-sm font-bold mr-3 mt-0.5">✓</span>
                                    <span className="text-gray-600 font-light">Structured aggregation & sourcing systems</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green text-sm font-bold mr-3 mt-0.5">✓</span>
                                    <span className="text-gray-600 font-light">Quality & traceability alignment</span>
                                </li>
                                <li className="flex items-start">
                                    <span className="flex-shrink-0 h-6 w-6 rounded-full bg-brand-green/10 flex items-center justify-center text-brand-green text-sm font-bold mr-3 mt-0.5">✓</span>
                                    <span className="text-gray-600 font-light">Market access facilitation & Linkage with processing enterprises</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Right Column: Leadership / Imagery placeholder */}
                    <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                        <div className="p-8">
                            <h3 className="text-2xl font-bold text-brand-dark mb-6 text-center">Leadership Team</h3>
                            <div className="space-y-8">
                                {/* Director 1 */}
                                <div className="flex items-center space-x-6">
                                    <div className="flex-shrink-0">
                                        <div className="h-20 w-20 rounded-full bg-gray-200 border-2 border-brand-green overflow-hidden">
                                            {/* Placeholder image */}
                                            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop" alt="Director 1" className="h-full w-full object-cover grayscale mix-blend-multiply" />
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-gray-900">Dr. Firstname Lastname</h4>
                                        <p className="text-sm font-medium text-brand-green mb-1">Director of Operations</p>
                                        <p className="text-sm text-gray-500 font-light">20+ years of experience in agriculture and rural economic development.</p>
                                    </div>
                                </div>

                                {/* Director 2 */}
                                <div className="flex items-center space-x-6">
                                    <div className="flex-shrink-0">
                                        <div className="h-20 w-20 rounded-full bg-gray-200 border-2 border-brand-yellow overflow-hidden">
                                            {/* Placeholder image */}
                                            <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=200&auto=format&fit=crop" alt="Director 2" className="h-full w-full object-cover grayscale mix-blend-multiply" />
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-bold text-gray-900">Dr. Firstname Lastname</h4>
                                        <p className="text-sm font-medium text-brand-yellow mb-1">Technical Director</p>
                                        <p className="text-sm text-gray-500 font-light">Expert in value chain structuring and nutrition-focused intervention.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative bottom bar */}
                        <div className="h-2 w-full bg-gradient-to-r from-brand-green to-brand-yellow"></div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default About;
