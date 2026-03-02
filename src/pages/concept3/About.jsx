import React from 'react';

const About = () => {
    return (
        <section id="leadership" className="py-24 bg-slate-50 border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div>
                        <div className="mb-10 border-l-4 border-brand-green pl-6 py-1">
                            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight uppercase">Institutional Leadership</h2>
                            <p className="mt-3 text-slate-500 font-bold uppercase tracking-wider text-sm">Vision & Strategy</p>
                        </div>
                        <p className="text-slate-600 text-lg leading-relaxed mb-8">
                            Our leadership team brings decades of combined expertise in agricultural policy, food security tech, and global investment structuring. By focusing on data-driven interventions, we ensure every project scales effectively.
                        </p>
                        <div className="grid grid-cols-2 gap-6 border-t border-slate-200 pt-8">
                            <div>
                                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-1">Ravi Varma</h4>
                                <div className="inline-block px-2 py-1 bg-brand-lightGreen border border-brand-green/20 text-[10px] text-brand-green font-bold uppercase tracking-widest mb-3">Director, Strategy & Ops</div>
                                <p className="text-sm text-slate-500 leading-relaxed">Pioneering sustainable supply chains and bridging governmental infrastructure gaps.</p>
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-slate-900 uppercase tracking-widest mb-1">Tech Director</h4>
                                <div className="inline-block px-2 py-1 bg-brand-lightGreen border border-brand-green/20 text-[10px] text-brand-green font-bold uppercase tracking-widest mb-3">Lead, Ecosystem Architecture</div>
                                <p className="text-sm text-slate-500 leading-relaxed">Driving the digital transformation of common facility centers via data analytics.</p>
                            </div>
                        </div>
                    </div>
                    {/* Placeholder for professional portrait or corporate team image */}
                    <div className="relative">
                        <div className="aspect-[4/3] bg-slate-200 border border-slate-300 shadow-sm relative z-10 overflow-hidden group">
                            <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1600" alt="Leadership Team Meeting" className="w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition duration-700" />
                            <div className="absolute inset-0 bg-brand-dark/10 group-hover:bg-transparent transition duration-700"></div>
                        </div>
                        <div className="absolute top-4 -right-4 w-full h-full border border-brand-green/30 z-0"></div>
                        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[radial-gradient(#e2e8f0_2px,transparent_2px)] [background-size:16px_16px] z-0"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
