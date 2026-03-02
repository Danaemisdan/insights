import React from 'react';

const Newsletter = () => {
    return (
        <section id="insights" className="py-24 relative overflow-hidden bg-brand-yellow">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage: 'radial-gradient(circle at 2px 2px, #063c31 1px, transparent 0)',
                    backgroundSize: '32px 32px'
                }}>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
                <span className="text-brand-dark font-extrabold uppercase tracking-widest text-sm mb-4 block">Stay Ahead</span>
                <h2 className="text-4xl md:text-5xl font-black text-brand-dark mb-6 tracking-tight">
                    Join the Ecosystem <span className="bg-white/30 px-3 py-1 rounded-lg transform -rotate-2 inline-block shadow-sm">Pulse</span>
                </h2>
                <p className="text-xl text-brand-dark/80 mb-10 max-w-2xl mx-auto font-medium">
                    Subscribe to our high-impact intelligence feed. Exclusive market reports, policy updates, and technological breakthroughs delivered straight to your inbox.
                </p>

                <form className="flex flex-col sm:flex-row shadow-2xl rounded-full overflow-hidden bg-white max-w-3xl mx-auto border-4 border-white transform hover:scale-[1.02] transition-transform duration-300">
                    <div className="flex-grow flex items-center pl-6">
                        <svg className="w-6 h-6 text-brand-yellow mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        <input
                            type="email"
                            placeholder="Enter your professional email address"
                            className="w-full py-5 text-gray-800 focus:outline-none font-medium placeholder-gray-400"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-brand-dark text-brand-yellow font-bold px-10 py-5 sm:py-0 hover:bg-brand-green transition-colors duration-300 text-lg sm:w-auto w-full group relative overflow-hidden"
                    >
                        <span className="relative z-10 group-hover:tracking-wider transition-all duration-300">Subscribe Now</span>
                        <div className="absolute inset-0 h-full w-full scale-0 rounded-full transition-all duration-300 group-hover:scale-150 group-hover:bg-brand-green/50"></div>
                    </button>
                </form>

                <p className="mt-6 text-sm text-brand-dark/60 font-medium">
                    We value your privacy. No spam, just high-quality value chain intelligence.
                </p>
            </div>
        </section>
    );
};

export default Newsletter;
