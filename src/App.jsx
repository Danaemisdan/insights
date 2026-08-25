import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Template1Layout from './layouts/Template1Layout';
import { ContentProvider, useContent } from './context/ContentContext';
import EditorToolbar from './components/EditorToolbar';
import Dashboard from './pages/Dashboard';

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
import OurPartnersPage from './pages/shared/OurPartnersPage';

// Kept for backward compat
import ServicePage from './pages/shared/ServicePage';

function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
    return null;
}

const SiteRoutes = () => (
    <Routes>
        <Route path="/" element={<Template1Layout />}>
            <Route index element={<LandingPage />} />
            <Route path="about-us" element={<AboutUsPage />} />
            <Route path="leadership" element={<LeadershipPage />} />
            <Route path="affiliations" element={<AffiliationsPage />} />
            <Route path="what-we-do" element={<WhatWeDoPage />} />
            <Route path="opportunities" element={<OpportunitiesPage />} />
            <Route path="work-with-us/collaboration" element={<WorkCollaborationPage />} />
            <Route path="work-with-us/events" element={<WorkEventsPage />} />
            <Route path="work-with-us/community" element={<WorkCommunityPage />} />
            <Route path="about-millets" element={<AboutMilletsPage />} />
            <Route path="news-events" element={<NewsEventsPage />} />
            <Route path="partners" element={<OurPartnersPage />} />
            <Route path="contact" element={<ContactPage />} />

            {/* Legacy redirects */}
            <Route path="about" element={<Navigate to="/about-us" replace />} />
            <Route path="culture" element={<Navigate to="/about-us" replace />} />
            <Route path="works" element={<Navigate to="/what-we-do" replace />} />
            <Route path="insights" element={<Navigate to="/news-events" replace />} />
            <Route path="careers" element={<Navigate to="/opportunities" replace />} />
            <Route path="collaborations" element={<Navigate to="/work-with-us/collaboration" replace />} />
            <Route path="services/:serviceId" element={<ServicePage />} />
        </Route>
    </Routes>
);

const PublicSite = () => {
    const { setIsEditMode } = useContent();
    useEffect(() => setIsEditMode(false), [setIsEditMode]);
    return <SiteRoutes />;
};

const DashboardSite = () => {
    const { token, setIsEditMode } = useContent();
    
    useEffect(() => {
        setIsEditMode(!!token);
    }, [token, setIsEditMode]);

    if (!token) return <Dashboard />;
    return <SiteRoutes />;
};

const App = () => {
    return (
        <ContentProvider>
            <Router>
                <ScrollToTop />
                <EditorToolbar />
                <Routes>
                    <Route path="/dashboard/*" element={<DashboardSite />} />
                    <Route path="/*" element={<PublicSite />} />
                </Routes>
            </Router>
        </ContentProvider>
    );
};

export default App;
