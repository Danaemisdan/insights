import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { siteContent } from '../../data/siteContent';
import { images } from '../../data/imageMap';

const ServicePage = ({ theme }) => {
    const { serviceId } = useParams();
    const isVibrant = theme === 'vibrant';

    // Find the current service content
    const service = siteContent.services.list.find(s => s.id === serviceId);

    if (!service) {
        return (
            <div className="min-h-[60vh] flex flex-col items-center justify-center">
                <h2 className="text-3xl font-bold mb-4">Service Not Found</h2>
                <Link to={isVibrant ? "/template2" : "/template1"} className="text-brand-green font-bold hover:underline">Return Home</Link>
            </div>
        );
    }

    // Attempt to grab an image mapped to this specific service ID, fallback to something generic if not mapping
    const heroImage = images.services[serviceId] || images.about.culture;

    const styles = {
        headerBg: isVibrant ? 'bg-brand-dark text-white' : 'bg-brand-green/5 text-brand-dark',
        headingClass: isVibrant ? 'font-black uppercase tracking-tight' : 'font-extrabold tracking-tight',
        textClass: isVibrant ? 'text-lg font-medium text-gray-700' : 'text-lg font-light text-gray-600',
        accentColor: isVibrant ? 'text-brand-yellow' : 'text-brand-green',
    };

    return (
        <div className="w-full">
            {/* Dynamic Service Header */}
            <div className={`${styles.headerBg} py-20 lg:py-28 relative overflow-hidden`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
                    <div className="max-w-2xl">
                        <span className={`text-sm font-bold uppercase tracking-widest ${styles.accentColor} mb-4 block`}>Service Capability</span>
                        <h1 className={`text-4xl md:text-5xl lg:text-6xl ${styles.headingClass} mb-6 leading-tight`}>
                            {service.title}
                        </h1>
                        <p className={`text-xl ${isVibrant ? 'text-gray-300' : 'text-gray-600 font-light'}`}>
                            {service.desc}
                        </p>
                    </div>
                </div>
            </div>

            {/* Core Blueprint & Data Placeholder */}
            <div className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="mb-20">
                        <img
                            src={heroImage}
                            alt={service.title}
                            className={`w-full h-[500px] object-cover ${isVibrant ? 'rounded-[3rem] shadow-2xl border border-brand-yellow/20' : 'rounded-2xl shadow-md border border-gray-100'}`}
                        />
                    </div>

                    <div className="max-w-4xl mx-auto">
                        {service.tagline && (
                            <div className={`text-center mb-12`}>
                                <span className={`inline-block px-5 py-2 rounded-full text-sm font-bold uppercase tracking-wider ${isVibrant ? 'bg-brand-yellow text-brand-dark' : 'bg-brand-green/10 text-brand-green'}`}>
                                    {service.tagline}
                                </span>
                            </div>
                        )}

                        {/* Requirement specified matching PRD - "Coming Soon or more details" */}
                        <div className={`p-12 text-center border-2 border-dashed ${isVibrant ? 'border-brand-yellow/40 bg-[#fdfaf2] rounded-3xl' : 'border-gray-300 bg-gray-50 rounded-xl'}`}>
                            <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-6 ${isVibrant ? 'bg-brand-yellow/20 text-brand-dark' : 'bg-brand-green/10 text-brand-green'}`}>
                                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                            </div>
                            <h2 className={`text-3xl ${styles.headingClass} text-gray-900 mb-4`}>
                                Detailed Blueprints Coming Soon
                            </h2>
                            <p className={`${styles.textClass}`}>
                                Note: As INSIGHTS is a newly formed entity, the comprehensive dataset, project implementation metrics, and specific service catalogs for <strong>{service.title}</strong> are currently under consolidation and will be filled in shortly.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicePage;
