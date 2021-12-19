import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import About from '../About';
import Skills from '../Skills';

function Home() {
  return (
    <>
    <HeroSection />
    <Skills/>
    <Cards/>
    <About/>

    </>
  );
}

export default Home;
