import React from 'react';
import EditableText from '../../components/EditableText';
import EditableImage from '../../components/EditableImage';
import EditableLink from '../../components/EditableLink';

const OurPartnersPage = () => {
    return (
        <div className="w-full flex items-center justify-center min-h-[60vh] bg-gray-50">
            <div className="text-center p-8 bg-white rounded-2xl shadow-sm border border-gray-100 max-w-lg w-full mx-4">
                <div className="w-20 h-20 bg-brand-orange/10 rounded-full flex items-center justify-center mx-auto mb-6 text-brand-orange">
                    <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                </div>
                <EditableText as="h1" contentKey="partners-title" defaultText="Our Partners" className="text-3xl font-extrabold text-gray-900 mb-4 block" />
                <EditableText as="p" contentKey="partners-desc" defaultText="This page is currently under construction. We are working hard to bring you a comprehensive list of our valued partners. Please check back soon!" className="text-gray-500 mb-8 leading-relaxed block" />
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-brand-green/10 text-brand-green font-semibold text-sm border border-brand-green/20">
                    <span className="w-2 h-2 rounded-full bg-brand-green mr-2 animate-pulse"></span>
                    <EditableText as="span" contentKey="partners-coming-soon" defaultText="Coming Soon" className="" />
                </div>
            </div>
        </div>
    );
};

export default OurPartnersPage;
