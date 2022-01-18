import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>


      <div className='hero-container-text'>
        <h1>Hej!</h1>
        <p>Mitt namn är Tilda Engberg och jag studerar till civilingenjör inom Interaktion och Design på Umeå Universitet. </p>
        <p>Jag gillar framförallt att skapa webbsidor, från design till utveckling, till publicering. </p>
        <p> Kolla in mina roliga projekt som jag sparar på denna sida!</p>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--medium'
          onClick={console.log('hey')}>
          Kontakta mig!
        </Button>
      </div>
      
      

      <div className='hero-container-img'>

      </div>

    </div>
  );
}

export default HeroSection;
