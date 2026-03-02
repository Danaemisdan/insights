import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-white relative">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gray-50 -skew-x-12 origin-top-right"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                        <span className="text-brand-yellow font-extrabold uppercase tracking-widest text-sm mb-3 block">Connect</span>
                        <h2 className="text-4xl md:text-5xl font-black text-brand-dark mb-6 tracking-tight">
                            Initiate a value <span className="text-brand-green">transformation.</span>
                        </h2>
                        <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                            Whether you need a turnkey processing facility or strategic global advisory, our experts are ready to plug into your ecosystem.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start bg-gray-50 p-6 rounded-2xl border-l-4 border-brand-green hover:shadow-lg transition-shadow">
                                <div className="bg-brand-green/10 p-3 rounded-lg text-brand-green mr-6">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-gray-900">Direct Connection</h4>
                                    <p className="text-brand-green font-medium">reachout@insightsvaluehub.com</p>
                                </div>
                            </div>

                            <div className="flex items-start bg-gray-50 p-6 rounded-2xl border-l-4 border-brand-yellow hover:shadow-lg transition-shadow">
                                <div className="bg-brand-yellow/10 p-3 rounded-lg text-brand-yellow mr-6">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-gray-900">Priority Line</h4>
                                    <p className="text-yellow-600 font-medium">+91 78932 55244</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-white rounded-3xl p-8 md:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 relative">
                        <div className="absolute top-0 right-0 w-24 h-24 bg-brand-yellow/20 rounded-bl-full -z-10 transform scale-150 translate-x-12 -translate-y-12"></div>
                        <h3 className="text-3xl font-black text-brand-dark mb-8">Send a Dispatch</h3>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Name</label>
                                    <input type="text" className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:border-brand-green focus:ring-0 bg-gray-50 focus:bg-white transition-all outline-none" placeholder="John Doe" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                                    <input type="email" className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:border-brand-yellow focus:ring-0 bg-gray-50 focus:bg-white transition-all outline-none" placeholder="john@company.com" />
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Subject</label>
                                <input type="text" className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:border-brand-green focus:ring-0 bg-gray-50 focus:bg-white transition-all outline-none" placeholder="Project Inquiry" />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                                <textarea rows="4" className="w-full px-4 py-4 rounded-xl border-2 border-gray-200 focus:border-brand-green focus:ring-0 bg-gray-50 focus:bg-white transition-all outline-none resize-none" placeholder="How can we build together?"></textarea>
                            </div>
                            <button className="w-full bg-brand-dark text-brand-yellow hover:bg-brand-green font-bold py-5 rounded-xl transition duration-300 text-lg shadow-[0_10px_20px_rgba(6,60,49,0.3)] hover:shadow-[0_10px_20px_rgba(6,60,49,0.5)] transform hover:-translate-y-1">
                                Execute Transmission
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
