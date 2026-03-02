import React from 'react';
import Navbar from './concept1/Navbar';
import Hero from './concept1/Hero';
import About from './concept1/About';
import Services from './concept1/Services';
import Newsletter from './concept1/Newsletter';
import Contact from './concept1/Contact';
import Footer from './concept1/Footer';

const Concept1 = () => {
    return (
        <div className="font-sans antialiased text-gray-900 bg-white">
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

export default Concept1;
