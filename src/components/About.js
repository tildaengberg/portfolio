import React from 'react';
import '../App.css';
import './About.css';
import aboutImg from '../image/ommig.png'
import { Link } from 'react-router-dom';
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';


function About() {
    return (
        <>
            <div className='about_container'>
                <div className='about_wrapper'>
                    <div className='about_img'>
                        <img src={aboutImg} alt='profile-img'></img>
                    </div>
                    <div className='about_content'>
                        <ScrollAnimation
                            animateIn="animate__fadeInRight"
                            animateOnce={true}
                            delay={300}
                            duration={2}
                        >
                            <div className='about_txt'>
                                <h2>Om mig</h2>
                                <p>Jag är en 21-årig student från Piteå som just nu pluggar till civilingenjör inom interaktion och design på Umeå Universitet. Just nu är jag inne på mitt tredje år på programmet och fortsätter lära mig nya saker varje dag. Jag gillar både UX/UI design men jag blir mer och mer intresserad av webbutveckling.</p>
                                <p>På min fritid gillar jag att vara ute i naturen och träningen tar upp en hel del tid i min vardag.</p>
                                <a href="mailto:tildaengberg@hotmail.com"><i class="far fa-paper-plane"></i>tildaengberg@hotmail.com</a>
                                <br></br>
                                <div className='spacing'>
                                    <Link
                                        to={{ pathname: "https://se.linkedin.com/in/tildaengberg" }}
                                        target='_blank'
                                        aria-label='LinkedIn'>
                                        <i class="fab fa-linkedin"></i>
                                        LinkedIn
                                    </Link>
                                </div>
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>

            </div>
        </>
    );
}

export default About;