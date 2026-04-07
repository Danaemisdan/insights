import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Template1Layout from './layouts/Template1Layout';

// Pages
import LandingPage from './pages/shared/LandingPage';
import AboutUsPage from './pages/shared/AboutUsPage';
import LeadershipPage from './pages/shared/LeadershipPage';
import AffiliationsPage from './pages/shared/AffiliationsPage';
import WhatWeDoPage from './pages/shared/WhatWeDoPage';
import OpportunitiesPage from './pages/shared/OpportunitiesPage';
import WorkCollaborationPage from './pages/shared/WorkCollaborationPage';
import WorkEventsPage from './pages/shared/WorkEventsPage';
import WorkCommunityPage from './pages/shared/WorkCommunityPage';
import AboutMilletsPage from './pages/shared/AboutMilletsPage';
import NewsEventsPage from './pages/shared/NewsEventsPage';
import ContactPage from './pages/shared/ContactPage';

// Kept for backward compat
import ServicePage from './pages/shared/ServicePage';
import CareersPage from './pages/shared/CareersPage';
import CollaborationsPage from './pages/shared/CollaborationsPage';
import CulturePage from './pages/shared/CulturePage';
import WorksPage from './pages/shared/WorksPage';
import InsightsPage from './pages/shared/InsightsPage';
import AboutPage from './pages/shared/AboutPage';

// Scroll to top on route change
function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
    return null;
}

const App = () => {
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                <Route path="/" element={<Template1Layout />}>
                    <Route index element={<LandingPage />} />

                    {/* About Us */}
                    <Route path="about-us" element={<AboutUsPage />} />
                    <Route path="leadership" element={<LeadershipPage />} />
                    <Route path="affiliations" element={<AffiliationsPage />} />

                    {/* What We Do */}
                    <Route path="what-we-do" element={<WhatWeDoPage />} />

                    {/* Opportunities */}
                    <Route path="opportunities" element={<OpportunitiesPage />} />

                    {/* Work With Us */}
                    <Route path="work-with-us/collaboration" element={<WorkCollaborationPage />} />
                    <Route path="work-with-us/events" element={<WorkEventsPage />} />
                    <Route path="work-with-us/community" element={<WorkCommunityPage />} />

                    {/* About Millets */}
                    <Route path="about-millets" element={<AboutMilletsPage />} />

                    {/* News & Events */}
                    <Route path="news-events" element={<NewsEventsPage />} />

                    {/* Contact */}
                    <Route path="contact" element={<ContactPage />} />

                    {/* Legacy routes — backward compat redirects */}
                    <Route path="about" element={<Navigate to="/about-us" replace />} />
                    <Route path="culture" element={<Navigate to="/about-us" replace />} />
                    <Route path="works" element={<Navigate to="/what-we-do" replace />} />
                    <Route path="insights" element={<Navigate to="/news-events" replace />} />
                    <Route path="careers" element={<Navigate to="/opportunities" replace />} />
                    <Route path="collaborations" element={<Navigate to="/work-with-us/collaboration" replace />} />

                    {/* Legacy services routes still work */}
                    <Route path="services/:serviceId" element={<ServicePage />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default App;
