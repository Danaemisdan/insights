import React from 'react';
import Navbar from './concept2/Navbar';
import Hero from './concept2/Hero';
import About from './concept2/About';
import Services from './concept2/Services';
import Newsletter from './concept2/Newsletter';
import Contact from './concept2/Contact';
import Footer from './concept2/Footer';

const Concept2 = () => {
    return (
        <div className="font-sans antialiased text-gray-900 bg-white selection:bg-brand-yellow selection:text-brand-dark">
            <Navbar />
            <main>
                <Hero />
                <About />
                <Services />
                <Newsletter />
                <Contact />
            </main>
            <Footer />
        </div>
    );
};

export default Concept2;
