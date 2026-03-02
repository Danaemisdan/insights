import React from 'react';

const posts = [
    { title: 'Global Nutrition Analytics Report 2026', type: 'Research Data', date: 'March 12, 2026' },
    { title: 'Structuring Traceability in Sub-Saharan Millet Chains', type: 'Case Study', date: 'March 05, 2026' },
    { title: 'Optimizing Common Facility Centers (CFCs) utilizing IoT', type: 'Tech Brief', date: 'February 28, 2026' }
];

const Blog = () => {
    return (
        <section id="research" className="py-24 bg-slate-100 border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    <div className="lg:col-span-1">
                        <div className="mb-6 border-l-4 border-brand-green pl-6 py-1">
                            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight uppercase">Research & Data</h2>
                            <p className="mt-3 text-slate-500 font-bold uppercase tracking-wider text-sm">Publications</p>
                        </div>
                        <p className="text-slate-600 text-lg leading-relaxed mb-8">
                            Access our latest whitepapers, case studies, and quantitative reports on agri-food value chain development.
                        </p>
                        <a href="#" className="inline-flex items-center text-brand-green font-bold text-sm uppercase tracking-widest hover:text-brand-dark transition group border-b-2 border-transparent hover:border-brand-dark pb-1">
                            Access Data Portal
                            <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                        </a>
                    </div>

                    <div className="lg:col-span-2">
                        <div className="grid grid-cols-1 gap-4">
                            {posts.map((post, idx) => (
                                <a key={idx} href="#" className="bg-white border border-slate-200 p-6 flex flex-col sm:flex-row sm:items-center justify-between group hover:border-brand-green transition shadow-sm">
                                    <div className="mb-4 sm:mb-0">
                                        <div className="flex items-center gap-3 mb-2">
                                            <span className="px-2 py-0.5 bg-slate-100 text-slate-600 text-[10px] font-bold uppercase tracking-widest border border-slate-200">{post.type}</span>
                                            <span className="text-xs text-slate-400 font-mono">{post.date}</span>
                                        </div>
                                        <h3 className="text-lg font-bold text-slate-900 group-hover:text-brand-green transition">{post.title}</h3>
                                    </div>
                                    <div className="sm:ml-6 flex-shrink-0 w-10 h-10 border border-slate-200 flex items-center justify-center text-slate-400 group-hover:text-white group-hover:bg-brand-green group-hover:border-brand-green transition">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                    </div>
                                </a>
                            ))}
                        </div>

                        <div className="mt-8 bg-brand-dark p-8 border border-slate-800 shadow-sm flex flex-col sm:flex-row items-center justify-between relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(#4b5563_2px,transparent_2px)] [background-size:16px_16px] opacity-20"></div>
                            <div className="mb-4 sm:mb-0 sm:mr-8 text-center sm:text-left relative z-10">
                                <h4 className="text-white font-bold text-lg mb-1">Ecosystem Intelligence Brief</h4>
                                <p className="text-slate-400 text-sm">Monthly quantitative insights delivered directly to you.</p>
                            </div>
                            <form className="flex w-full sm:w-auto relative z-10">
                                <input type="email" placeholder="Institutional email" className="w-full sm:w-64 px-4 py-3 bg-slate-800 border-none text-white focus:outline-none focus:ring-1 focus:ring-brand-green text-sm placeholder-slate-500" />
                                <button type="submit" className="bg-brand-green text-white px-6 py-3 font-bold text-sm hover:bg-white hover:text-brand-dark transition tracking-wide uppercase">
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Blog;
