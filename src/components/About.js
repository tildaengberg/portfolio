import React from 'react'
import './About.css'
import "animate.css/animate.min.css";
import { Link } from 'react-router-dom';
import './Animation.css'


function About() { 


    return (
        <div className='about-container'>
            <div className='grid-container'>

                <div className='portrait'>
                    <img src='image/portrait.png'></img>
                </div>

                <div className='about-text'>
                    <h2>About me.</h2>
                    <p>I'm a student currently at Umeå University in Interaction and Design Technology.
                    Right now I'm in my second year at the program and still learning a lot of things.
                    </p>
                    <div class='email-containter'>
                        <i class="far fa-paper-plane"></i>
                        <Link 
                        to='/'
                        class='email-link'
                        >
                            tildaengberg@hotmail.com
                        </Link>
                    </div>
                </div>
            </div>
                
            </div>
    )
}

export default About
