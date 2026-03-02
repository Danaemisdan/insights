import React from 'react';
import { Mail, ArrowRight } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left: Contact Text */}
                    <div>
                        <span className="text-brand-green font-semibold tracking-wider uppercase text-sm mb-3 block">
                            Get in Touch
                        </span>
                        <h2 className="text-3xl font-extrabold text-brand-dark sm:text-4xl mb-6">
                            Interested in working with us?
                        </h2>
                        <p className="text-gray-500 text-lg font-light mb-8 max-w-lg leading-relaxed">
                            Assignments span advisory, execution, and long-term operational management. Reach out to discuss how we can partner on your next agri-food initiative.
                        </p>

                        <div className="bg-brand-lightGreen/30 rounded-2xl p-8 border border-brand-green/10">
                            <h3 className="text-xl font-bold text-gray-900 mb-4">Hyderabad Office</h3>
                            <p className="text-gray-600 font-light mb-6">
                                11 Kondapur Village, Serilingampally<br />
                                Hyderabad 500084, Telangana
                            </p>

                            <div className="flex flex-col space-y-4">
                                <a href="tel:+917893255244" className="inline-flex items-center text-brand-dark hover:text-brand-green font-semibold transition-colors">
                                    <span className="w-10 h-10 rounded-full bg-white flex items-center justify-center mr-4 shadow-sm border border-gray-100">
                                        <span className="text-brand-green">📞</span>
                                    </span>
                                    +91 78932 55244
                                </a>
                                <a href="mailto:reachout@insightsvaluehub.com" className="inline-flex items-center text-brand-dark hover:text-brand-green font-semibold transition-colors">
                                    <span className="w-10 h-10 rounded-full bg-white flex items-center justify-center mr-4 shadow-sm border border-gray-100">
                                        <Mail size={18} className="text-brand-green" />
                                    </span>
                                    reachout@insightsvaluehub.com
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right: Clean Contact Form */}
                    <div className="bg-white shadow-xl rounded-2xl p-8 border border-gray-100">
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                                <div className="mt-1">
                                    <input type="text" id="name" name="name" className="py-3 px-4 block w-full shadow-sm focus:ring-brand-green focus:border-brand-green border-gray-300 rounded-lg bg-gray-50 border outline-none transition-colors" placeholder="John Doe" />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="email_form" className="block text-sm font-medium text-gray-700">Email</label>
                                    <div className="mt-1">
                                        <input id="email_form" name="email_form" type="email" className="py-3 px-4 block w-full shadow-sm focus:ring-brand-green focus:border-brand-green border-gray-300 rounded-lg bg-gray-50 border outline-none transition-colors" placeholder="john@example.com" />
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                                    <div className="mt-1">
                                        <input type="text" id="phone" name="phone" className="py-3 px-4 block w-full shadow-sm focus:ring-brand-green focus:border-brand-green border-gray-300 rounded-lg bg-gray-50 border outline-none transition-colors" placeholder="+91 00000 00000" />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="interest" className="block text-sm font-medium text-gray-700">Area of Interest</label>
                                <div className="mt-1">
                                    <select id="interest" name="interest" className="py-3 px-4 block w-full shadow-sm focus:ring-brand-green focus:border-brand-green border border-gray-300 rounded-lg bg-gray-50 outline-none transition-colors text-gray-600">
                                        <option>Select an option</option>
                                        <option>Turnkey Projects</option>
                                        <option>Advisory Services</option>
                                        <option>Start-up Incubation</option>
                                        <option>Other Partnerships</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                                <div className="mt-1">
                                    <textarea id="message" name="message" rows={4} className="py-3 px-4 block w-full shadow-sm focus:ring-brand-green focus:border-brand-green border border-gray-300 rounded-lg bg-gray-50 outline-none transition-colors resize-none" placeholder="Tell us about your project..."></textarea>
                                </div>
                            </div>

                            <div>
                                <button type="submit" className="w-full justify-center inline-flex items-center px-6 py-4 border border-transparent text-base font-medium rounded-lg shadow-sm text-white bg-brand-dark hover:bg-brand-green focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-green transition-colors">
                                    Send Message
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
