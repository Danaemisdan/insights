import React from 'react';

const About = () => {
    return (
        <section id="innovators" className="py-24 bg-slate-900 border-y border-slate-800 relative overflow-hidden">
            {/* Glowing vertical lines */}
            <div className="absolute top-0 bottom-0 left-1/4 w-px bg-gradient-to-b from-transparent via-brand-green/20 to-transparent"></div>
            <div className="absolute top-0 bottom-0 right-1/4 w-px bg-gradient-to-b from-transparent via-brand-yellow/20 to-transparent"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="order-2 lg:order-1 relative group">
                        <div className="absolute inset-0 bg-brand-green/20 rounded-2xl blur-[60px] group-hover:bg-brand-yellow/20 transition-colors duration-700"></div>
                        <div className="bg-slate-950 border border-slate-800 rounded-3xl p-8 relative z-10 shadow-2xl overflow-hidden">
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-green to-brand-yellow"></div>

                            {/* Startup-esque Founder Profiles in a sleek grid */}
                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <div className="w-16 h-16 rounded-xl bg-slate-800 flex items-center justify-center font-mono text-brand-green text-xl font-bold flex-shrink-0 border border-brand-green/20">
                                        RV
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-1">Ravi Varma</h3>
                                        <div className="text-brand-yellow text-xs font-mono uppercase tracking-widest mb-3">Chief Execution Officer</div>
                                        <p className="text-slate-400 text-sm leading-relaxed">
                                            Architecting scalable business frameworks and bridging hardware/software integration across the agricultural supply line.
                                        </p>
                                    </div>
                                </div>
                                <div className="w-full h-px bg-slate-800"></div>
                                <div className="flex items-start gap-4">
                                    <div className="w-16 h-16 rounded-xl bg-slate-800 flex items-center justify-center font-mono text-brand-yellow text-xl font-bold flex-shrink-0 border border-brand-yellow/20">
                                        TD
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-white mb-1">Tech Director (TBD)</h3>
                                        <div className="text-brand-green text-xs font-mono uppercase tracking-widest mb-3">Lead Algorithm Structurer</div>
                                        <p className="text-slate-400 text-sm leading-relaxed">
                                            Developing the proprietary quantitative models driving processing center automation and efficiency.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="order-1 lg:order-2">
                        <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-brand-yellow/10 border border-brand-yellow/30 rounded-full">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-yellow"></span>
                            <span className="text-brand-yellow font-mono text-[10px] uppercase tracking-widest">Core Intelligence</span>
                        </div>
                        <h2 className="text-3xl lg:text-5xl font-black text-white tracking-tight uppercase mb-6 leading-tight">
                            Powered by <span className="text-brand-green">Human</span> & Artificial Intelligence.
                        </h2>
                        <p className="text-slate-400 text-lg leading-relaxed mb-8 font-light max-w-lg">
                            We don't just write reports. We build the physical and digital infrastructure that processes millions of tons of agricultural output, managed by a team of radical innovators.
                        </p>

                        <div className="flex flex-wrap gap-3">
                            {['Decentralized processing', 'IoT Monitoring', 'Blockchain trace', 'Quantum yield tracking'].map(tag => (
                                <span key={tag} className="px-3 py-1.5 bg-slate-800 border border-slate-700 text-slate-300 text-xs font-mono rounded-md hover:bg-slate-700 transition">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
