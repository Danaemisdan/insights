import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-[#E8DFCF] relative">
            {/* Background texture for warmth */}
            <div className="absolute inset-0 mix-blend-multiply opacity-20 pointer-events-none" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/rice-paper-2.png')" }}></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <span className="text-[#C5832B] font-serif italic text-xl mb-4 block">Let's Ground Our Vision</span>
                    <h2 className="text-4xl md:text-5xl font-serif text-[#2A3626] mb-6">Start a Conversation</h2>
                    <p className="text-[17px] leading-relaxed font-serif text-[#6D635B]">
                        Whether you're a farmer, a policymaker, or an investor, growing a sustainable, nutrition-focused food system takes all of us. Reach out today.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 bg-[#fbf8f1] rounded-3xl overflow-hidden shadow-2xl">
                    {/* Visual & Context side */}
                    <div className="relative hidden lg:block h-full min-h-[500px]">
                        <div className="absolute inset-0 bg-[#2A3626]">
                            <img
                                src="https://images.unsplash.com/photo-1495570687315-ad3ee92f8ce6?auto=format&fit=crop&q=80&w=1000"
                                alt="Hands holding soil"
                                className="w-full h-full object-cover opacity-70 mix-blend-overlay"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#2A3626] via-[#2A3626]/40 to-transparent"></div>
                        </div>
                        <div className="absolute bottom-0 left-0 p-12 text-[#E8DFCF]">
                            <svg className="w-10 h-10 text-[#C5832B] mb-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>
                            <h3 className="text-3xl font-serif text-white mb-4">Our Roots in Hyderabad</h3>
                            <p className="font-serif text-lg text-[#B5C2B1] leading-relaxed mb-6">
                                From our headquarters in India, we stretch our branches across the globe, establishing climate-resilient value chains wherever the soil meets the sky.
                            </p>
                            <div className="space-y-3 font-serif font-light text-[17px]">
                                <p className="flex items-center"><span className="w-2 h-2 rounded-full bg-[#C5832B] mr-3"></span>reachout@insightsvaluehub.com</p>
                                <p className="flex items-center"><span className="w-2 h-2 rounded-full bg-[#C5832B] mr-3"></span>+91 78932 55244</p>
                            </div>
                        </div>
                    </div>

                    {/* Form Side */}
                    <div className="p-10 sm:p-14 flex items-center bg-[#fbf8f1]">
                        <form className="w-full space-y-8">
                            <h3 className="text-2xl font-serif text-[#2A3626] border-b border-[#D9CDBB] pb-4 mb-8">How can we grow together?</h3>

                            <div className="space-y-6">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="relative">
                                        <label htmlFor="name" className="text-[#6D635B] font-serif text-sm mb-2 block">Your Name</label>
                                        <input type="text" id="name" className="w-full bg-transparent border-b border-[#D9CDBB] pb-2 text-[#2A3626] focus:outline-none focus:border-[#C5832B] transition-colors font-serif text-lg placeholder-[#D9CDBB]" placeholder="Jane Doe" />
                                    </div>
                                    <div className="relative">
                                        <label htmlFor="org" className="text-[#6D635B] font-serif text-sm mb-2 block">Organization Affiliation</label>
                                        <input type="text" id="org" className="w-full bg-transparent border-b border-[#D9CDBB] pb-2 text-[#2A3626] focus:outline-none focus:border-[#C5832B] transition-colors font-serif text-lg" placeholder="Community Farm" />
                                    </div>
                                </div>
                                <div className="relative">
                                    <label htmlFor="email" className="text-[#6D635B] font-serif text-sm mb-2 block">Email Address</label>
                                    <input type="email" id="email" className="w-full bg-transparent border-b border-[#D9CDBB] pb-2 text-[#2A3626] focus:outline-none focus:border-[#C5832B] transition-colors font-serif text-lg" placeholder="jane@farm.org" />
                                </div>
                                <div className="relative">
                                    <label htmlFor="message" className="text-[#6D635B] font-serif text-sm mb-2 block">Your Story or Inquiry</label>
                                    <textarea id="message" rows="4" className="w-full bg-transparent border-b border-[#D9CDBB] pb-2 text-[#2A3626] focus:outline-none focus:border-[#C5832B] transition-colors font-serif text-lg resize-none placeholder-[#D9CDBB]" placeholder="Tell us how we can support your journey..."></textarea>
                                </div>
                            </div>

                            <button type="submit" className="mt-8 bg-[#2A3626] text-[#E8DFCF] px-10 py-4 rounded-full font-serif text-lg hover:bg-[#3D4D38] transition-colors shadow-lg w-full sm:w-auto">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
