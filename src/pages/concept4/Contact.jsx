import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-slate-900 border-t border-slate-800 relative z-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="bg-slate-950 border border-slate-800 rounded-3xl p-8 sm:p-12 shadow-2xl overflow-hidden relative group">
                    {/* Glowing background */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-green/5 rounded-full blur-[100px] pointer-events-none group-hover:bg-brand-green/10 transition-colors duration-1000"></div>
                    <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-brand-yellow/5 rounded-full blur-[80px] pointer-events-none group-hover:bg-brand-yellow/10 transition-colors duration-1000"></div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 relative z-10">
                        <div>
                            <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-slate-800 border border-slate-700 rounded-full">
                                <span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>
                                <span className="text-slate-400 font-mono text-[10px] uppercase tracking-widest">Protocol 04</span>
                            </div>
                            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight uppercase mb-6">
                                Establish <span className="text-brand-yellow">Connection</span>
                            </h2>
                            <p className="text-slate-400 text-lg leading-relaxed mb-10">
                                Transmit your ecosystem parameters to our advisory architecture. We deploy capital, code, and infrastructure to scale value chains globally.
                            </p>

                            <div className="space-y-6">
                                <div className="flex items-center group cursor-pointer">
                                    <div className="w-12 h-12 bg-slate-900 border border-slate-800 rounded-lg flex items-center justify-center mr-4 group-hover:border-brand-green transition-colors">
                                        <svg className="w-5 h-5 text-brand-green" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                    </div>
                                    <div className="font-mono">
                                        <div className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">Direct Transmission</div>
                                        <div className="text-slate-300 text-sm group-hover:text-white transition-colors">reachout@insightsvaluehub.com</div>
                                    </div>
                                </div>
                                <div className="flex items-center group cursor-pointer">
                                    <div className="w-12 h-12 bg-slate-900 border border-slate-800 rounded-lg flex items-center justify-center mr-4 group-hover:border-brand-yellow transition-colors">
                                        <svg className="w-5 h-5 text-brand-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                    </div>
                                    <div className="font-mono">
                                        <div className="text-[10px] text-slate-500 uppercase tracking-widest mb-1">Voice Node</div>
                                        <div className="text-slate-300 text-sm group-hover:text-white transition-colors">+91 78932 55244</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-6 sm:p-8">
                            <form className="space-y-5">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div className="space-y-1">
                                        <label htmlFor="id_first" className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest flex items-center"><span className="text-brand-green mr-1">&gt;</span> First Name</label>
                                        <input type="text" id="id_first" className="w-full bg-slate-950 border border-slate-800 text-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-green/50 focus:ring-1 focus:ring-brand-green/50 transition-colors font-mono text-sm" placeholder="Input string..." />
                                    </div>
                                    <div className="space-y-1">
                                        <label htmlFor="id_last" className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest flex items-center"><span className="text-brand-green mr-1">&gt;</span> Last Name</label>
                                        <input type="text" id="id_last" className="w-full bg-slate-950 border border-slate-800 text-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-green/50 focus:ring-1 focus:ring-brand-green/50 transition-colors font-mono text-sm" placeholder="Input string..." />
                                    </div>
                                </div>
                                <div className="space-y-1">
                                    <label htmlFor="id_email" className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest flex items-center"><span className="text-brand-yellow mr-1">&gt;</span> Security Clearance (Email)</label>
                                    <input type="email" id="id_email" className="w-full bg-slate-950 border border-slate-800 text-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-yellow/50 focus:ring-1 focus:ring-brand-yellow/50 transition-colors font-mono text-sm" placeholder="email@domain.com" />
                                </div>
                                <div className="space-y-1">
                                    <label htmlFor="id_query" className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest flex items-center"><span className="text-brand-green mr-1">&gt;</span> Packet Payload (Message)</label>
                                    <textarea id="id_query" rows="4" className="w-full bg-slate-950 border border-slate-800 text-slate-300 rounded-lg px-4 py-3 focus:outline-none focus:border-brand-green/50 focus:ring-1 focus:ring-brand-green/50 transition-colors font-mono text-sm resize-none" placeholder="Enter transmission data here..."></textarea>
                                </div>
                                <button type="submit" className="w-full bg-brand-green text-slate-900 border-none font-black text-sm uppercase tracking-widest py-4 rounded-lg hover:bg-emerald-400 transition-colors mt-2 shadow-[0_0_20px_rgba(16,185,129,0.2)] hover:shadow-[0_0_30px_rgba(16,185,129,0.4)]">
                                    Transmit Data
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
