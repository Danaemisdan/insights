import React, { useState } from 'react';

const nodes = [
    { id: '01', title: 'Agri-Food Projects', desc: 'End-to-end management of systemic agriculture projects scaling across boundaries.' },
    { id: '02', title: 'Processing Infra', desc: 'Deploying high-tech Common Facility Centres (CFCs) utilizing IoT monitoring.' },
    { id: '03', title: 'Millet Value Chain', desc: 'Commercializing climate-resilient superfoods through decentralized supply webs.' },
    { id: '04', title: 'Startup Incubation', desc: 'SaaS and hardware acceleration for emerging agri-tech enterprises.' },
    { id: '05', title: 'Tech Commercialisation', desc: 'Rapid deployment of lab research into highly scalable market products.' },
    { id: '06', title: 'Global Advisory', desc: 'Strategic consulting for international policy and ESG compliance frameworks.' },
    { id: '07', title: 'Data Analytics', desc: 'Real-time blockchain tracking for food security and full logistical transparency.' },
    { id: '08', title: 'Green Capital', desc: 'Structuring algorithmic investment vehicles targeting sustainable agricultural yield.' },
];

const Services = () => {
    const [activeNode, setActiveNode] = useState(nodes[0]);

    return (
        <section id="nodes" className="py-24 bg-slate-950 relative overflow-hidden">
            {/* Background noise grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(20,83,45,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(20,83,45,0.05)_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-50 z-0"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 bg-brand-green/10 border border-brand-green/30 rounded-full">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse"></span>
                        <span className="text-brand-green font-mono text-[10px] uppercase tracking-widest">Network Architecture</span>
                    </div>
                    <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight uppercase">
                        The <span className="text-brand-yellow">8-Node</span> Matrix
                    </h2>
                    <p className="mt-4 text-slate-400 max-w-2xl mx-auto text-lg font-light">
                        Select a systemic processing hub below to inspect the operational parameters of our ecosystem.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    {/* Interactive "Octopus" visual representation */}
                    <div className="w-full lg:w-1/2 relative aspect-square max-w-md mx-auto">
                        <div className="absolute inset-0 flex items-center justify-center">
                            {/* Core Node */}
                            <div className="w-24 h-24 rounded-full bg-slate-900 border-2 border-brand-yellow/50 flex items-center justify-center z-20 shadow-[0_0_30px_rgba(234,179,8,0.2)]">
                                <span className="text-white font-black uppercase text-xs tracking-widest text-center">Core<br />System</span>
                            </div>

                            {/* Orbiting Nodes (Simulated Octopus arms) */}
                            {nodes.map((node, i) => {
                                const angle = (i * (360 / nodes.length)) * (Math.PI / 180);
                                const radius = 160; // Pixels from center
                                const x = Math.cos(angle) * radius;
                                const y = Math.sin(angle) * radius;
                                const isActive = activeNode.id === node.id;

                                return (
                                    <React.Fragment key={node.id}>
                                        {/* Connection Line */}
                                        <svg className={`absolute inset-0 w-full h-full z-0 transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-20'}`}>
                                            <line x1="50%" y1="50%" x2={`calc(50% + ${x}px)`} y2={`calc(50% + ${y}px)`} stroke={isActive ? '#eab308' : '#10b981'} strokeWidth={isActive ? '2' : '1'} className={isActive ? 'animate-pulse' : ''} />
                                        </svg>

                                        {/* Orbital Button */}
                                        <button
                                            onClick={() => setActiveNode(node)}
                                            className={`absolute z-10 flex items-center justify-center w-12 h-12 rounded-full transition-all duration-300 transform -translate-x-1/2 -translate-y-1/2 cursor-crosshair
                                                ${isActive
                                                    ? 'bg-brand-yellow text-slate-900 scale-125 shadow-[0_0_20px_rgba(234,179,8,0.6)] font-black'
                                                    : 'bg-slate-900 text-brand-green border border-brand-green/30 hover:border-brand-yellow hover:text-brand-yellow font-bold'
                                                }`}
                                            style={{ left: `calc(50% + ${x}px)`, top: `calc(50% + ${y}px)` }}
                                        >
                                            {node.id}
                                        </button>
                                    </React.Fragment>
                                );
                            })}
                        </div>
                    </div>

                    {/* Node Data Display */}
                    <div className="w-full lg:w-1/2 bg-slate-900/50 backdrop-blur-md border border-slate-800 p-8 rounded-2xl relative overflow-hidden group">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-brand-yellow/5 rounded-full blur-[50px]"></div>

                        <div className="animate-[fadeIn_0.3s_ease-out]">
                            <div className="flex items-center justify-between mb-6 border-b border-slate-800 pb-4">
                                <span className="text-brand-yellow font-mono text-xs uppercase tracking-widest bg-brand-yellow/10 px-2 py-1 rounded">
                                    Node Directory // {activeNode.id}
                                </span>
                                <span className="flex h-2 w-2 relative">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-green"></span>
                                </span>
                            </div>

                            <h3 className="text-3xl font-black text-white tracking-tight mb-4">
                                {activeNode.title}
                            </h3>

                            <p className="text-slate-400 text-lg leading-relaxed font-light mb-8">
                                {activeNode.desc}
                            </p>

                            <div className="grid grid-cols-2 gap-4">
                                <div className="bg-slate-950/50 border border-slate-800 p-4 rounded-lg">
                                    <div className="text-slate-500 font-mono text-[10px] uppercase tracking-widest mb-1">Status</div>
                                    <div className="text-white text-sm font-bold flex items-center">
                                        <svg className="w-3 h-3 text-brand-green mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                        Operational
                                    </div>
                                </div>
                                <div className="bg-slate-950/50 border border-slate-800 p-4 rounded-lg">
                                    <div className="text-slate-500 font-mono text-[10px] uppercase tracking-widest mb-1">Integration</div>
                                    <div className="text-white text-sm font-bold">API / Physical Layer</div>
                                </div>
                            </div>

                            <button className="mt-8 w-full py-4 bg-transparent border-2 border-slate-700 text-slate-300 hover:border-brand-green hover:text-white transition duration-300 uppercase tracking-widest font-bold text-xs rounded-sm">
                                Extract Full Logs
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
