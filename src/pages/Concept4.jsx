import React from 'react';
import Navbar from './concept4/Navbar';
import Hero from './concept4/Hero';
import Services from './concept4/Services';
import About from './concept4/About';
import Blog from './concept4/Blog';
import Contact from './concept4/Contact';
import Footer from './concept4/Footer';

const Concept4 = () => {
    return (
        <div className="min-h-screen bg-slate-950 font-sans text-slate-300 selection:bg-brand-yellow selection:text-slate-900">
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

export default Concept4;
