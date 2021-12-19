import React from 'react';
import '../App.css';
import './About_Section.css';
import aboutImg from '../image/ommig.png'


function About_Section() {
    return (
        <>
            <div className='about_section_container'>
                <div className='about_section_wrapper'>
                    <div className='about_section_img'>
                        <img src={aboutImg} alt='profile-img'></img>
                    </div>
                    <div className='about_section_content'>
                        <div className='about_section_txt'>
                            <h2>Om mig</h2>
                            <p>Jag är en 21-årig student som just nu pluggar till civilingenjör inom interaktion och design på Umeå Universitet. Just nu är jag inne på mitt tredje år på programmet och fortsätter lära mig nya saker varje dag. Jag gillar både UX/UI design men jag blir mer och mer intresserad av webbutveckling.</p>
                            <p>På min fritid gillar jag att vara ute i naturen och träningen tar upp en hel del tid i min vardag. </p>
                            <p><i class="far fa-paper-plane"></i>tildaengberg@hotmail.com</p>
                            <p><i class="fab fa-linkedin"></i>LinkedIn</p>
                            <p><i class="fab fa-facebook-messenger"></i>Messenger</p>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
}

export default About_Section;