import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-white border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                        <div className="mb-10 border-l-4 border-brand-green pl-6 py-1">
                            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight uppercase">Strategic Partnerships</h2>
                            <p className="mt-3 text-slate-500 font-bold uppercase tracking-wider text-sm">Initiate Contact</p>
                        </div>
                        <p className="text-slate-600 text-lg leading-relaxed mb-10">
                            We collaborate with governments, international NGOs, and private sector leaders to engineer sustainable value chains. Connect with our advisory board to explore deployment at scale.
                        </p>
                        <div className="space-y-6">
                            <div className="flex items-start">
                                <div className="bg-slate-50 border border-slate-200 p-3 shadow-sm mr-4">
                                    <svg className="w-6 h-6 text-brand-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-1">Email Directive</h4>
                                    <p className="text-slate-500 font-mono text-sm">reachout@insightsvaluehub.com</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="bg-slate-50 border border-slate-200 p-3 shadow-sm mr-4">
                                    <svg className="w-6 h-6 text-brand-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-1">Global Desk</h4>
                                    <p className="text-slate-500 font-mono text-sm">+91 78932 55244</p>
                                </div>
                            </div>
                            <div className="flex items-start">
                                <div className="bg-slate-50 border border-slate-200 p-3 shadow-sm mr-4">
                                    <svg className="w-6 h-6 text-brand-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                </div>
                                <div>
                                    <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-1">Headquarters</h4>
                                    <p className="text-slate-500 font-mono text-sm">Hyderabad, India<br />Global Delivery Center</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-slate-50 border border-slate-200 p-8 pt-10 shadow-sm relative">
                        <div className="absolute top-0 w-full h-1 bg-brand-green left-0"></div>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="firstName" className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-2">First Name</label>
                                    <input type="text" id="firstName" className="w-full border border-slate-300 px-4 py-3 bg-white focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition" placeholder="John" />
                                </div>
                                <div>
                                    <label htmlFor="lastName" className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-2">Last Name</label>
                                    <input type="text" id="lastName" className="w-full border border-slate-300 px-4 py-3 bg-white focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition" placeholder="Doe" />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="organization" className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-2">Organization</label>
                                <input type="text" id="organization" className="w-full border border-slate-300 px-4 py-3 bg-white focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition" placeholder="Company/Government Body" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-2">Email Address</label>
                                <input type="email" id="email" className="w-full border border-slate-300 px-4 py-3 bg-white focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition" placeholder="john@example.com" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-xs font-bold text-slate-700 uppercase tracking-widest mb-2">Inquiry Details</label>
                                <textarea id="message" rows="4" className="w-full border border-slate-300 px-4 py-3 bg-white focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition" placeholder="How can we assist your ecosystem development?"></textarea>
                            </div>
                            <button type="submit" className="w-full bg-brand-dark text-white font-bold py-4 uppercase tracking-widest text-sm hover:bg-brand-green transition shadow-sm border border-transparent">
                                Submit Request
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
