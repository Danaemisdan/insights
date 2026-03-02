import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 relative overflow-hidden">
            {/* Ambient Tech Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
                    <div className="col-span-1 md:col-span-4">
                        <div className="flex items-center mb-6">
                            <img src="/logos/1.svg" alt="Insights Value Hub Logo" className="h-12 w-auto brightness-0 invert" style={{ filter: 'brightness(0) invert(1)' }} />
                        </div>
                        <p className="text-sm leading-relaxed mb-6 font-mono text-slate-500">
                            SYSTEM: ONLINE<br />
                            PROTOCOL: AGRI-FOOD INNOVATION<br />
                            STATUS: SCALING GLOBALLY
                        </p>
                        <p className="text-sm leading-relaxed text-slate-400 mb-8 max-w-sm">
                            Engineering the future of sustainable, nutrition-focused agriculture value chains through scalable technology and infrastructure.
                        </p>
                    </div>

                    <div className="col-span-1 md:col-span-3 md:col-start-6">
                        <h4 className="text-xs font-bold mb-6 text-slate-200 uppercase tracking-[0.2em] flex items-center">
                            <span className="w-2 h-2 bg-brand-yellow mr-2 rounded-full animate-pulse"></span>
                            Index
                        </h4>
                        <ul className="space-y-4 text-sm font-medium">
                            <li><a href="#" className="hover:text-brand-yellow hover:translate-x-1 inline-block transition-all duration-300">System Architecture</a></li>
                            <li><a href="#" className="hover:text-brand-yellow hover:translate-x-1 inline-block transition-all duration-300">The 8 Nodes</a></li>
                            <li><a href="#" className="hover:text-brand-yellow hover:translate-x-1 inline-block transition-all duration-300">Global Operations</a></li>
                            <li><a href="#" className="hover:text-brand-yellow hover:translate-x-1 inline-block transition-all duration-300">Data Feed</a></li>
                        </ul>
                    </div>

                    <div className="col-span-1 md:col-span-4">
                        <h4 className="text-xs font-bold mb-6 text-slate-200 uppercase tracking-[0.2em] flex items-center">
                            <span className="w-2 h-2 bg-brand-green mr-2 rounded-full"></span>
                            Terminal / Contact
                        </h4>
                        <ul className="space-y-4 text-sm font-mono text-slate-400">
                            <li className="flex items-center group cursor-pointer hover:text-white transition-colors duration-200">
                                <span className="text-brand-yellow mr-3">_</span>
                                reachout@insightsvaluehub.com
                            </li>
                            <li className="flex items-center group cursor-pointer hover:text-white transition-colors duration-200">
                                <span className="text-brand-yellow mr-3">_</span>
                                +91 78932 55244
                            </li>
                            <li className="flex items-start group cursor-pointer hover:text-white transition-colors duration-200">
                                <span className="text-brand-yellow mr-3">_</span>
                                <span>Hyderabad, India<br />HQ Node</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800/50 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs font-mono text-slate-600">
                    <div>&copy; {new Date().getFullYear()} INSIGHTS VALUE HUB // ALL RIGHTS RESERVED.</div>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <a href="#" className="hover:text-brand-yellow transition">PRIVACY</a>
                        <a href="#" className="hover:text-brand-yellow transition">TERMS</a>
                        <a href="#" className="hover:text-brand-yellow transition flex items-center gap-2">
                            STATUS <span className="flex w-2 h-2 bg-green-500 rounded-full"></span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
