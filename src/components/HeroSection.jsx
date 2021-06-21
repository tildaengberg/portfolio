import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import './Footer.css'
import { Link } from 'react-router-dom';
import './Animation.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='social-icons-navbar'>
            <Link
              class='social-icon-link linkedin'
              to='/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin-in' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to='/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>
          </div>
        </div>
      </section>
      <div className="line-1 anim-typewriter">
        <h1>Hey, I'm Tilda.</h1>
      </div>
      
      <p>Student | UI/UX Designer | Developer</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Contact me
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          My work
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
