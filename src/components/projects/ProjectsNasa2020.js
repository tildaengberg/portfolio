import React from 'react';
import './Projects.css';
import ProjectInfo from './ProjectInfo';
import { Link } from 'react-router-dom';
import solarsys from '../../image/solarsys.png'
import solarsys1 from '../../image/solarsys-laser.png'
import points from '../../image/lagrangepoints.png'

function ProjectsNasa2020() {
    return (
        <div className='project'>

            <div class="project_container">


                <div class="project_wrapper">


                    <ProjectInfo
                        headline='Yes we hear you - NASA Hackathon
                        <span class="brmedium"></span> '

                        text='Jag och tre personer från Finland och Sverige deltog i NASA:s Hackathon Space Apps Challange som hölls i Vaasa. Hackathonet pågår under 48 timmar och var på distans.
                        <span class="brmedium"></span> 
                        <span class="brmedium"></span>'
                        tool='Adobe XD | HTML | CSS'
                        src='../image/spaceapps_mockup.jpg'
                        links="https://2020.spaceappschallenge.org/challenges/connect/can-you-hear-me-now/teams/yes-we-hear-you/project"
                        linkName='Läs mer om projektet på SpaceApps hemsida'
                        duration='48 timmar'

                    />
                    

                    <div className='project_info2'>

                        <div className='project_img2'>
                            <img src={solarsys1} alt='profile-img'></img>
                        </div>
                        <div className='project_text2'>
                            <h2>Processen</h2>
                            <span class="brmedium"></span>
                            <p>Vi valde utmaningen <cite>"Can you hear me now?"</cite> som hade målet att skapa en användarvänlig applikation som visar svårigheterna med kommunikation till Mars. 
                            Vi började med brainstorming för att kunna visa på ett enkelt sätt hur svårt det egentligen är att skicka ett meddelande till Mars. 
                            </p>
                            <p>Då vi hade en idé började vi skissa på prototyper hur lösningen kunde se ut. Sedan jobbade vi pararellt med programmering av webbsidan och designen, samt att en del beräkningar behövde göras.</p>
                        </div>


                        <div className='project_img3'>
                            <img src={points} alt='profile-img'></img>
                        </div>
                        <div className='project_text3'>
                            <h2>Resultat</h2>
                            <span class="brmedium"></span>
                            <p>Genom data från NASA skapade vi en webbsidan <cite>"Yes we hear you"</cite> där användaren kan skicka meddelanden och filer till Mars, därefter beräknas datan och användaren ser hur lång tid det skulle ta för meddelandet att nå fram.
                            </p>
                            <p><p>Vi vann den regionala tävlingen i Finland och gick vidare till den globala tävlingen där vi fick priset <cite>"Honarble mention"</cite>.</p></p>
                        </div>

                    </div>

                </div>
            </div>
        </div>

    );
}


export default ProjectsNasa2020;
