import React from 'react';
import '../App.css';
import './HeroSection.css';
import './Footer.css'
import './Animation.css';
import { Link } from 'react-router-dom';

function HeroSection() {
  return (
    <div className='hero-container'>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='social-icons-navbar'>
            <Link
              class='social-icon-link linkedin'
              to={{ pathname: "https://se.linkedin.com/in/tildaengberg" }}
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin-in' />
            </Link>
            <Link
              class='social-icon-link instagram'
              to={{ pathname: "https://instagram.com/tildaengbeerg" }}
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </Link>

            <Link
              class='social-icon-link github'
              to={{ pathname: "https://github.com/tildaengberg" }}
              target='_blank'
              aria-label='Github'
            >
              <i class='fab fa-github' />
            </Link>
          </div>
        </div>
      </section>
      <div>
        <h1>Hi, I'm Tilda.</h1>
      </div>
      
      <p>M.Sc. student Interaction Technology and Design</p>
    </div>
  );
}

export default HeroSection;
