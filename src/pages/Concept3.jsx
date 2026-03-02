import React from 'react';
import Navbar from './concept3/Navbar';
import Hero from './concept3/Hero';
import Services from './concept3/Services';
import About from './concept3/About';
import Blog from './concept3/Blog';
import Contact from './concept3/Contact';
import Footer from './concept3/Footer';

const Concept3 = () => {
    return (
        <div className="min-h-screen bg-slate-50 font-sans text-slate-900 selection:bg-brand-green selection:text-white">
            <Navbar />
            <main>
                <Hero />
                <Services />
                <About />
                <Blog />
                <Contact />
            </main>
            <Footer />
        </div>
    );
};

export default Concept3;
