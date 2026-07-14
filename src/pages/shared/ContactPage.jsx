import React from 'react';
import { siteContent } from '../../data/siteContent';

const ContactPage = () => {
    const styles = {
        headerBg: 'bg-slate-50 text-brand-dark border-b border-gray-200',
        headingClass: 'font-extrabold tracking-tight',
        textClass: 'text-lg font-light text-gray-600',
        accentColor: 'text-brand-green',
        inputClass: 'w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-all text-gray-800',
        btnClass: 'w-full py-3 bg-brand-green text-white rounded-lg font-bold hover:bg-brand-dark transition-all duration-300',
    };

    return (
        <div className="w-full">
            <div className={`${styles.headerBg} py-20 lg:py-28`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
                    <span className={`text-sm font-bold uppercase tracking-widest ${styles.accentColor} mb-4 block`}>Contact Us</span>
                    <h1 className={`text-4xl md:text-5xl lg:text-6xl ${styles.headingClass} mb-6 leading-tight`}>
                        Find Us At
                    </h1>
                </div>
            </div>

            <div className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
                        {/* Contact Info */}
                        <div className="space-y-10">
                            <div>
                                <h3 className={`text-xl font-bold text-gray-900 mb-4 flex items-center`}>
                                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-4 bg-brand-green/10 text-brand-green`}>
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                    </div>
                                    Office Location
                                </h3>
                                <p className={`${styles.textClass} ml-14`}>{siteContent.contact.globalFootprint.officeLocation || siteContent.global.officeLocation}</p>
                            </div>

                            <div>
                                <h3 className={`text-xl font-bold text-gray-900 mb-4 flex items-center`}>
                                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-4 bg-brand-green/10 text-brand-green`}>
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
                                    </div>
                                    Email Address
                                </h3>
                                <a href={`mailto:${siteContent.global.contactEmail}`} className={`${styles.textClass} ml-14 hover:${styles.accentColor} transition-colors`}>{siteContent.global.contactEmail}</a>
                            </div>

                            <div>
                                <h3 className={`text-xl font-bold text-gray-900 mb-4 flex items-center`}>
                                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center mr-4 bg-brand-green/10 text-brand-green`}>
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                                    </div>
                                    Phone
                                </h3>
                                <p className={`${styles.textClass} ml-14`}>{siteContent.global.contactPhone}</p>
                            </div>

                        </div>

                        {/* Contact Form Details */}
                        <div className={`p-8 lg:p-12 bg-gray-50 rounded-xl border border-gray-100`}>
                            <h3 className={`text-2xl ${styles.headingClass} text-gray-900 mb-8`}>Get In Touch</h3>
                            <form className="space-y-6">
                                <div>
                                    <label className={`block text-sm font-bold text-gray-700 mb-2`}>Full Name</label>
                                    <input type="text" className={styles.inputClass} placeholder="Jane Doe" />
                                </div>
                                <div>
                                    <label className={`block text-sm font-bold text-gray-700 mb-2`}>Email Address</label>
                                    <input type="email" className={styles.inputClass} placeholder="jane@example.com" />
                                </div>
                                <div>
                                    <label className={`block text-sm font-bold text-gray-700 mb-2`}>Message</label>
                                    <textarea rows={4} className={`${styles.inputClass} resize-none`} placeholder="How can we help you?"></textarea>
                                </div>
                                <button type="button" className={styles.btnClass}>
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>

                    {/* Global Footprint */}
                    <div className={`text-center py-16 px-4 bg-white border-y border-gray-200`}>
                        <span className={`inline-block px-4 py-1.5 rounded-full text-sm font-bold uppercase tracking-wider mb-6 bg-brand-green text-white`}>
                            {siteContent.contact.globalFootprint.tagline}
                        </span>
                        <h2 className={`text-3xl ${styles.headingClass} text-gray-900 mb-4`}>Global Footprint</h2>
                        <p className={`${styles.textClass} max-w-2xl mx-auto`}>
                            {siteContent.contact.globalFootprint.text}
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ContactPage;
