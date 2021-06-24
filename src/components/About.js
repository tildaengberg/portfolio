import React from 'react'
import './About.css'
import "animate.css/animate.min.css";
import { Link } from 'react-router-dom';
import './Animation.css'
import ButtonMailto from './ButtonMailTo';


function About() { 


    return (
        <div className='about-container'>
            <div className='grid-container'>

                <div className='portrait'>
                </div>

                <div className='about-text'>
                    <h2>About me</h2>
                    <p>I'm a student currently at Umeå University in Interaction and Design Technology. Right now I'm in my third year at the program and still learning a lot of things. I like both UX / UI design but lately I have gained interest in web development.
                    </p>
                    <p id='padding-bottom'>In my free time I like being outdoors and I also have a great interest in sports and exercise.
                    </p>
                    <div class='email-containter' id='color'>
                        <i class="far fa-paper-plane"></i>
                        <ButtonMailto label="tildaengberg@hotmail.com" mailto="mailto:tildaengberg@hotmail.com" />
                    </div>
                    <div class='email-containter'>
                        <i class="fab fa-github" id='color'></i>
                        <Link 
                        to={{ pathname: "https://github.com/tildaengberg" }}
                        class='email-link'
                        target='_blank'
                        aria-label='GitHub'
                        >
                            GitHub
                        </Link>
                    </div>
                    <div class='email-containter'>
                        <i class="fab fa-linkedin-in" id='color'></i>
                        <Link 
                        to={{ pathname: "https://se.linkedin.com/in/tildaengberg" }}
                        class='email-link'
                        target='_blank'
                        aria-label='LinkedIn'
                        >
                            LinkedIn
                        </Link>
                    </div>
                </div>
                <div className='skills1'>
                <h2>My skills</h2>
                <img src='/image/test.png' alt='logo'/>
                </div>
                <div className='skills2'>
                <h2>My skills</h2>
                <img src='/image/skills2.png' alt='logo'/>
                </div>
            </div>
                
            </div>
    )
}

export default About
