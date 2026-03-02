import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-brand-dark text-white pt-16 pb-8 border-t-4 border-brand-yellow">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

                    {/* Brand Col */}
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center mb-6">
                            <img src="/logos/1.svg" alt="Insights Value Hub Logo" className="h-10 w-auto brightness-0 invert" />
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light">
                            Designing value chains that actively integrate smallholder farmers, enhancing income stability and rural economic participation.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-sm font-semibold text-brand-yellow tracking-wider uppercase mb-4">Ecosystem</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Public Institutions</a></li>
                            <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Start-ups & MSMEs</a></li>
                            <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Development Partners</a></li>
                            <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Private Enterprises</a></li>
                        </ul>
                    </div>

                    {/* Strategic Pillars */}
                    <div>
                        <h3 className="text-sm font-semibold text-brand-yellow tracking-wider uppercase mb-4">Pillars</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Health & Nutrition</a></li>
                            <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Innovation</a></li>
                            <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Governance</a></li>
                            <li><a href="#" className="text-sm text-gray-300 hover:text-white transition-colors">Technology</a></li>
                        </ul>
                    </div>

                    {/* Contact Col */}
                    <div>
                        <h3 className="text-sm font-semibold text-brand-yellow tracking-wider uppercase mb-4">Contact</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start text-sm text-gray-300">
                                <MapPin className="h-5 w-5 mr-3 text-brand-green flex-shrink-0" />
                                <span>11 Kondapur Village, Serilingampally<br />Hyderabad 500084, Telangana</span>
                            </li>
                            <li className="flex items-center text-sm text-gray-300">
                                <Phone className="h-5 w-5 mr-3 text-brand-green flex-shrink-0" />
                                <span>+91 78932 55244</span>
                            </li>
                            <li className="flex items-center text-sm text-gray-300">
                                <Mail className="h-5 w-5 mr-3 text-brand-green flex-shrink-0" />
                                <a href="mailto:reachout@insightsvaluehub.com" className="hover:text-white">reachout@insightsvaluehub.com</a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
                    <p className="text-xs text-gray-500 font-light">&copy; 2026 INSIGHTS Value Hub Pvt Ltd. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0 text-xs font-light">
                        <a href="#" className="text-gray-500 hover:text-white">Privacy Policy</a>
                        <a href="#" className="text-gray-500 hover:text-white">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
