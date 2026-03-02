import React from 'react';
import Navbar from './concept5/Navbar';
import Hero from './concept5/Hero';
import Services from './concept5/Services';
import About from './concept5/About';
import Blog from './concept5/Blog';
import Contact from './concept5/Contact';
import Footer from './concept5/Footer';

const Concept5 = () => {
    return (
        <div className="min-h-screen bg-[#fbf8f1] font-sans text-[#2A3626] selection:bg-[#C5832B] selection:text-white">
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

export default Concept5;
