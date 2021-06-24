import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import About from '../About';
import Work from '../Work';

function Home() {
  return (
    <>
    <HeroSection />
    <About/>
    <Work/>
    <Footer/>
    </>
  );
}

export default Home;
