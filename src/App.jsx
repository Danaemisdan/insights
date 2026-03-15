import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Template1Layout from './layouts/Template1Layout';
import LandingPage from './pages/shared/LandingPage';
import AboutPage from './pages/shared/AboutPage';
import CulturePage from './pages/shared/CulturePage';
import ServicePage from './pages/shared/ServicePage';
import WorksPage from './pages/shared/WorksPage';
import InsightsPage from './pages/shared/InsightsPage';
import CareersPage from './pages/shared/CareersPage';
import CollaborationsPage from './pages/shared/CollaborationsPage';
import ContactPage from './pages/shared/ContactPage';

// Scroll to top on route change
function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);

    return null;
}

const App = () => {
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                {/* Main Unified Layout */}
                <Route path="/" element={<Template1Layout />}>
                    <Route index element={<LandingPage theme="nutrihub" />} />
                    
                    {/* Organization Subpages */}
                    <Route path="about" element={<AboutPage theme="nutrihub" />} />
                    <Route path="culture" element={<CulturePage theme="nutrihub" />} />
                    
                    {/* Services Subpages (dynamic capability route) */}
                    <Route path="services/:serviceId" element={<ServicePage theme="nutrihub" />} />
                    
                    {/* Additional Sections */}
                    <Route path="works" element={<WorksPage theme="nutrihub" />} />
                    <Route path="insights" element={<InsightsPage theme="nutrihub" />} />
                    
                    {/* Work With Us Subpages */}
                    <Route path="careers" element={<CareersPage theme="nutrihub" />} />
                    <Route path="collaborations" element={<CollaborationsPage theme="nutrihub" />} />
                    
                    {/* Contact */}
                    <Route path="contact" element={<ContactPage theme="nutrihub" />} />
                </Route>
            </Routes>
        </Router>
    );
};

export default App;
