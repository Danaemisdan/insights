import React, { useState } from 'react';
import { siteContent } from '../../data/siteContent';
import { images } from '../../data/imageMap';
import EditableText from '../../components/EditableText';
import EditableImage from '../../components/EditableImage';
import EditableLink from '../../components/EditableLink';

const ne = siteContent.newsEvents;

const imgMap = {
    building: images.about.building,
    team: images.about.team,
    meeting: images.about.meeting,
    culture: images.about.culture,
    article1: images.insights.article1,
    article2: images.insights.article2,
    article3: images.insights.article3,
    article4: images.insights.article4,
    pearl: images.millets.pearl,
};

const NewsEventsPage = () => {
    const [activeTab, setActiveTab] = useState('news');
    const [galleryOpen, setGalleryOpen] = useState(null);

    const tabs = [
        { id: 'news', label: 'News' },
        { id: 'events', label: 'Event Highlights' },
        { id: 'media', label: 'Media Coverage' },
        { id: 'gallery', label: 'Gallery' },
    ];

    return (
        <div className="w-full">
            {/* Hero */}
            <div className="relative min-h-[45vh] flex items-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <EditableImage contentKey="ne-hero-img" defaultSrc={images.insights.article1} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-r from-brand-dark/95 via-brand-dark/80 to-transparent" />
                </div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-20">
                    <div className="max-w-3xl">
                        <EditableText as="span" contentKey="ne-hero-tag" defaultText="Stay Informed" className="text-sm font-bold uppercase tracking-widest mb-4 block text-brand-orange block" />
                        <EditableText as="h1" contentKey="ne-hero-title" defaultText="News & Events" className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-white leading-tight block" />
                        <EditableText as="p" contentKey="ne-hero-desc" defaultText={ne.intro} className="text-xl text-gray-200 font-light leading-relaxed block" />
                    </div>
                </div>
            </div>

            {/* Tabs */}
            <div className="bg-white border-b border-gray-100 sticky top-[100px] md:top-[136px] z-20 shadow-sm">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex gap-1 overflow-x-auto py-3 scrollbar-hide">
                        {tabs.map(tab => (
                            <button key={tab.id} onClick={() => setActiveTab(tab.id)}
                                className={`flex-shrink-0 px-5 py-2 rounded-lg text-sm font-semibold transition-all ${activeTab === tab.id ? 'bg-brand-green text-white' : 'text-gray-600 hover:text-brand-green hover:bg-brand-green/5'}`}>
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Tab Content */}
            <div className="py-16 bg-white min-h-[60vh]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* News */}
                    {activeTab === 'news' && (
                        <div>
                            <EditableText as="h2" contentKey="ne-news-title" defaultText="Latest News" className="text-3xl font-extrabold text-gray-900 mb-10 block" />
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {ne.news.map((item, i) => (
                                    <article key={i} className="group rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:border-brand-green/30 hover:-translate-y-1 transition-all duration-300 bg-white">
                                        <div className="h-52 overflow-hidden relative">
                                            <EditableImage contentKey={`ne-news-img-${i}`} defaultSrc={imgMap[item.img] || images.about.team}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                            <div className="absolute inset-0 bg-brand-green/10 group-hover:bg-transparent transition-colors" />
                                            <EditableText as="span" contentKey={`ne-news-cat-${i}`} defaultText={item.category} className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold bg-brand-green text-white block" />
                                        </div>
                                        <div className="p-6">
                                            <EditableText as="span" contentKey={`ne-news-date-${i}`} defaultText={item.date} className="text-xs text-gray-400 mb-2 block" />
                                            <EditableText as="h3" contentKey={`ne-news-itemtitle-${i}`} defaultText={item.title} className="text-lg font-bold text-gray-900 mb-3 leading-snug group-hover:text-brand-green transition-colors block" />
                                            <EditableText as="p" contentKey={`ne-news-desc-${i}`} defaultText={item.excerpt} className="text-gray-600 text-sm leading-relaxed block" />
                                        </div>
                                    </article>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Event Highlights */}
                    {activeTab === 'events' && (
                        <div>
                            <EditableText as="h2" contentKey="ne-events-title" defaultText="Event Highlights" className="text-3xl font-extrabold text-gray-900 mb-10 block" />
                            <div className="space-y-6">
                                {ne.eventHighlights.map((event, i) => (
                                    <div key={i} className="grid grid-cols-1 md:grid-cols-3 gap-0 rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg hover:border-brand-green/30 transition-all">
                                        <div className="h-48 md:h-auto overflow-hidden relative">
                                            <EditableImage contentKey={`ne-event-img-${i}`} defaultSrc={imgMap[event.img] || images.about.meeting}
                                                className="w-full h-full object-cover" />
                                        </div>
                                        <div className="md:col-span-2 p-8">
                                            <div className="flex flex-wrap items-center gap-3 mb-4">
                                                <EditableText as="span" contentKey={`ne-event-type-${i}`} defaultText={event.type} className="px-3 py-1 rounded-full text-xs font-bold bg-brand-green/10 text-brand-green block" />
                                                <EditableText as="span" contentKey={`ne-event-date-${i}`} defaultText={event.date} className="text-sm text-gray-400 block" />
                                            </div>
                                            <EditableText as="h3" contentKey={`ne-event-itemtitle-${i}`} defaultText={event.title} className="text-xl font-bold text-gray-900 mb-3 block" />
                                            <EditableText as="p" contentKey={`ne-event-desc-${i}`} defaultText={event.desc} className="text-gray-600 leading-relaxed block" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Media Coverage */}
                    {activeTab === 'media' && (
                        <div>
                            <EditableText as="h2" contentKey="ne-media-title" defaultText="Media Coverage" className="text-3xl font-extrabold text-gray-900 mb-10 block" />
                            <div className="space-y-4">
                                {ne.mediaCoverage.map((item, i) => (
                                    <EditableLink key={i} contentKey={`ne-media-link-${i}`} to={item.url} defaultText={item.headline} className="flex items-start gap-6 p-6 bg-gray-50 border border-gray-100 rounded-2xl hover:border-brand-green/30 hover:shadow-md transition-all group">
                                        <div className="w-14 h-14 rounded-xl bg-brand-green/10 text-brand-green flex items-center justify-center flex-shrink-0 group-hover:bg-brand-green group-hover:text-white transition-all">
                                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" /></svg>
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex flex-wrap items-center gap-3 mb-2">
                                                <EditableText as="span" contentKey={`ne-media-outlet-${i}`} defaultText={item.outlet} className="font-bold text-brand-green text-sm block" />
                                                <EditableText as="span" contentKey={`ne-media-date-${i}`} defaultText={item.date} className="text-xs text-gray-400 block" />
                                            </div>
                                            <EditableText as="h3" contentKey={`ne-media-itemtitle-${i}`} defaultText={item.headline} className="text-lg font-bold text-gray-900 group-hover:text-brand-green transition-colors leading-snug block" />
                                        </div>
                                        <svg className="w-5 h-5 text-gray-300 group-hover:text-brand-green transition-colors flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                                    </EditableLink>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Gallery */}
                    {activeTab === 'gallery' && (
                        <div>
                            <EditableText as="h2" contentKey="ne-gallery-title" defaultText="Gallery" className="text-3xl font-extrabold text-gray-900 mb-4 block" />
                            <EditableText as="p" contentKey="ne-gallery-intro" defaultText={ne.gallery.intro} className="text-gray-500 mb-10 block" />
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                {ne.gallery.images.map((item, i) => (
                                    <div key={i} onClick={() => setGalleryOpen(i)}
                                        className="group relative overflow-hidden rounded-2xl cursor-pointer aspect-video">
                                        <EditableImage contentKey={`ne-gallery-img-${i}`} defaultSrc={imgMap[item.img] || images.about.team}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                                        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                        <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                            <EditableText as="h4" contentKey={`ne-gallery-itemtitle-${i}`} defaultText={item.title} className="font-bold text-white text-sm block" />
                                            <EditableText as="p" contentKey={`ne-gallery-itemdesc-${i}`} defaultText={item.caption} className="text-gray-300 text-xs block" />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>
            </div>

            {/* Lightbox */}
            {galleryOpen !== null && (
                <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4" onClick={() => setGalleryOpen(null)}>
                    <div className="max-w-4xl w-full" onClick={e => e.stopPropagation()}>
                        <img src={imgMap[ne.gallery.images[galleryOpen]?.img] || images.about.team}
                            alt={ne.gallery.images[galleryOpen]?.title}
                            className="w-full max-h-[70vh] object-contain rounded-2xl" />
                        <div className="text-center mt-4">
                            <h4 className="text-white font-bold">{ne.gallery.images[galleryOpen]?.title}</h4>
                            <p className="text-gray-400 text-sm">{ne.gallery.images[galleryOpen]?.caption}</p>
                        </div>
                        <button onClick={() => setGalleryOpen(null)}
                            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 text-white flex items-center justify-center hover:bg-white/20 transition-all">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default NewsEventsPage;
