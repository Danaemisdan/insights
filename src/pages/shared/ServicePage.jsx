import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { siteContent } from '../../data/siteContent';
import { images } from '../../data/imageMap';

const ServicePage = () => {
    const { serviceId } = useParams();

    const service = siteContent.services.list.find(s => s.id === serviceId);

    if (!service) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center">
                <h2 className="text-3xl font-bold mb-4">Service Not Found</h2>
                <Link to="/" className="text-brand-green font-bold hover:underline">Return Home</Link>
            </div>
        );
    }

    const heroImage = images.services[serviceId] || images.about.culture;

    const styles = {
        headerBg: 'bg-gradient-to-br from-brand-dark via-brand-green to-brand-dark text-white',
        headingClass: 'font-extrabold tracking-tight',
        textClass: 'text-lg font-light text-gray-600',
        accentColor: 'text-brand-green',
    };

    return (
        <div className="w-full">
            {/* Hero Header with image background */}
            <div className="relative min-h-[50vh] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src={heroImage} alt={service.title} className="w-full h-full object-cover" loading="eager" />
                    <div className={`absolute inset-0 bg-gradient-to-r from-brand-dark/90 via-brand-green/60 to-transparent`}></div>
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
                    <div className="max-w-2xl">
                        <span className={`text-sm font-bold uppercase tracking-widest mb-4 block text-brand-orange`}>Service Capability</span>
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
                                        <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-sm bg-gradient-to-br from-brand-green to-brand-dark`}>
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
                                className={`w-full h-[350px] object-cover rounded-2xl shadow-lg`}
                                loading="lazy"
                                decoding="async"
                            />
                            <div className="grid grid-cols-2 gap-4">
                                <img
                                    src={images.millets.barnyard}
                                    alt="Millet grains"
                                    className={`w-full h-40 object-cover rounded-xl`}
                                    loading="lazy"
                                    decoding="async"
                                />
                                <img
                                    src={images.millets.foxtail}
                                    alt="Foxtail millet"
                                    className={`w-full h-40 object-cover rounded-xl`}
                                    loading="lazy"
                                    decoding="async"
                                />
                            </div>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className={`mt-20 p-12 rounded-3xl text-center bg-gradient-to-r from-brand-green to-brand-dark relative overflow-hidden`}>
                        <div className="absolute top-0 left-0 w-64 h-64 opacity-10 pointer-events-none -translate-x-1/2 -translate-y-1/2 rotate-45">
                            <img src="/logos/2_official_highres.png" alt="" className="w-full h-full object-contain" loading="lazy" decoding="async" />
                        </div>
                        <h3 className="text-3xl font-bold text-white mb-4 relative z-10">Interested in {service.title}?</h3>
                        <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto relative z-10">Reach out to discuss how we can support your specific needs across this domain.</p>
                        <Link
                            to="/contact"
                            className={`inline-flex items-center px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:-translate-y-1 bg-white text-brand-green hover:bg-brand-dark hover:text-white relative z-10`}
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
