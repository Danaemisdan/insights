import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import NavigationLayout from './components/NavigationLayout';
import Home from './pages/Home';

// Template Layouts
import Template1Layout from './layouts/Template1Layout';
import Template2Layout from './layouts/Template2Layout';

// Shared Pages
import LandingPage from './pages/shared/LandingPage';
import AboutPage from './pages/shared/AboutPage';
import CulturePage from './pages/shared/CulturePage';
import WorksPage from './pages/shared/WorksPage';
import InsightsPage from './pages/shared/InsightsPage';
import ContactPage from './pages/shared/ContactPage';
import ServicePage from './pages/shared/ServicePage';
import CareersPage from './pages/shared/CareersPage';
import CollaborationsPage from './pages/shared/CollaborationsPage';

function App() {
    return (
        <Router>
            <NavigationLayout>
                <Routes>
                    {/* Main Entry */}
                    <Route path="/" element={<Home />} />

                    {/* Template 1 Routes (Nutrihub Style) */}
                    <Route path="/template1" element={<Template1Layout theme="nutrihub" />}>
                        <Route index element={<LandingPage theme="nutrihub" />} />
                        <Route path="about" element={<AboutPage theme="nutrihub" />} />
                        <Route path="culture" element={<CulturePage theme="nutrihub" />} />

                        {/* Services Dropdown Pages */}
                        <Route path="services/:serviceId" element={<ServicePage theme="nutrihub" />} />

                        <Route path="works" element={<WorksPage theme="nutrihub" />} />
                        <Route path="insights" element={<InsightsPage theme="nutrihub" />} />

                        {/* Work With Us Dropdown Pages */}
                        <Route path="careers" element={<CareersPage theme="nutrihub" />} />
                        <Route path="collaborations" element={<CollaborationsPage theme="nutrihub" />} />

                        <Route path="contact" element={<ContactPage theme="nutrihub" />} />
                    </Route>

                    {/* Template 2 Routes (Vibrant Style) */}
                    <Route path="/template2" element={<Template2Layout theme="vibrant" />}>
                        <Route index element={<LandingPage theme="vibrant" />} />
                        <Route path="about" element={<AboutPage theme="vibrant" />} />
                        <Route path="culture" element={<CulturePage theme="vibrant" />} />

                        {/* Services Dropdown Pages */}
                        <Route path="services/:serviceId" element={<ServicePage theme="vibrant" />} />

                        <Route path="works" element={<WorksPage theme="vibrant" />} />
                        <Route path="insights" element={<InsightsPage theme="vibrant" />} />

                        {/* Work With Us Dropdown Pages */}
                        <Route path="careers" element={<CareersPage theme="vibrant" />} />
                        <Route path="collaborations" element={<CollaborationsPage theme="vibrant" />} />

                        <Route path="contact" element={<ContactPage theme="vibrant" />} />
                    </Route>

                </Routes>
            </NavigationLayout>
        </Router>
    );
}

export default App;
