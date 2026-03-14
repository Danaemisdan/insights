import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { siteContent } from '../../data/siteContent';
import { images } from '../../data/imageMap';

const ServicePage = ({ theme }) => {
    const { serviceId } = useParams();
    const isVibrant = theme === 'vibrant';

    const service = siteContent.services.list.find(s => s.id === serviceId);

    if (!service) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center">
                <h2 className="text-3xl font-bold mb-4">Service Not Found</h2>
                <Link to={isVibrant ? "/template2" : "/template1"} className="text-brand-green font-bold hover:underline">Return Home</Link>
            </div>
        );
    }

    const heroImage = images.services[serviceId] || images.about.culture;
    const basePath = isVibrant ? '/template2' : '/template1';

    const styles = {
        headerBg: isVibrant ? 'bg-brand-dark text-white' : 'bg-gradient-to-br from-brand-dark via-brand-green to-brand-dark text-white',
        headingClass: isVibrant ? 'font-black uppercase tracking-tight' : 'font-extrabold tracking-tight',
        textClass: isVibrant ? 'text-lg font-medium text-gray-700' : 'text-lg font-light text-gray-600',
        accentColor: isVibrant ? 'text-brand-yellow' : 'text-brand-green',
    };

    return (
        <div className="w-full">
            {/* Hero Header with image background */}
            <div className="relative min-h-[50vh] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src={heroImage} alt={service.title} className="w-full h-full object-cover" />
                    <div className={`absolute inset-0 ${isVibrant ? 'bg-gradient-to-r from-brand-dark/90 via-brand-dark/70 to-transparent' : 'bg-gradient-to-r from-brand-dark/90 via-brand-green/60 to-transparent'}`}></div>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
                    <div className="max-w-2xl">
                        <span className={`text-sm font-bold uppercase tracking-widest mb-4 block ${isVibrant ? 'text-brand-yellow' : 'text-brand-orange'}`}>Service Capability</span>
                        <h1 className={`text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight text-white`}>
                            {service.title}
                        </h1>
                        <p className="text-xl text-gray-200 font-light">
                            {service.desc}
                        </p>
                    </div>
                </div>
            </div>

            {/* Service Details */}
            <div className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                        {/* Left: Key Capabilities */}
                        <div>
                            <h2 className={`text-3xl ${styles.headingClass} text-gray-900 mb-8`}>Key Capabilities</h2>
                            <div className="space-y-6">
                                {(service.details || []).map((detail, idx) => (
                                    <div key={idx} className="flex items-start gap-4">
                                        <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-sm ${isVibrant ? 'bg-gradient-to-br from-brand-yellow to-brand-orange' : 'bg-gradient-to-br from-brand-green to-brand-dark'}`}>
                                            {String(idx + 1).padStart(2, '0')}
                                        </div>
                                        <p className="text-gray-700 text-lg leading-relaxed pt-1.5">{detail}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Right: Image gallery */}
                        <div className="space-y-6">
                            <img
                                src={heroImage}
                                alt={service.title}
                                className={`w-full h-[350px] object-cover ${isVibrant ? 'rounded-3xl shadow-2xl' : 'rounded-2xl shadow-lg'}`}
                            />
                            <div className="grid grid-cols-2 gap-4">
                                <img
                                    src={images.millets.barnyard}
                                    alt="Millet grains"
                                    className={`w-full h-40 object-cover ${isVibrant ? 'rounded-2xl' : 'rounded-xl'}`}
                                />
                                <img
                                    src={images.millets.foxtail}
                                    alt="Foxtail millet"
                                    className={`w-full h-40 object-cover ${isVibrant ? 'rounded-2xl' : 'rounded-xl'}`}
                                />
                            </div>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className={`mt-20 p-12 rounded-3xl text-center ${isVibrant ? 'bg-gradient-to-r from-brand-dark to-brand-green' : 'bg-gradient-to-r from-brand-green to-brand-dark'}`}>
                        <h3 className="text-3xl font-bold text-white mb-4">Interested in {service.title}?</h3>
                        <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">Reach out to discuss how we can support your specific needs across this domain.</p>
                        <Link
                            to={`${basePath}/contact`}
                            className={`inline-flex items-center px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:-translate-y-1 ${isVibrant ? 'bg-brand-yellow text-brand-dark hover:bg-white' : 'bg-white text-brand-green hover:bg-brand-dark hover:text-white'}`}
                        >
                            Get In Touch
                            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicePage;
