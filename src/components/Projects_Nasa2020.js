import React from 'react';
import './Projects.css';
import ProjectInfo from './ProjectInfo';
import { Link } from 'react-router-dom';
import solarsys from '../image/solarsys.png'
import solarsys1 from '../image/solarsys-laser.png'
import points from '../image/lagrangepoints.png'

function Projects_Nasa2020() {
    return (
        <div className='project'>
            <div className='project_headline'>
            </div>

            <div class="project_container">


                <div class="project_wrapper">
                <Link to="/projekt" className='close_btn'><i class="fas fa-times"></i></Link>


                    <ProjectInfo
                        headline='NASA Hackathon Global award 2020 
                        <span class="brmedium"></span> '
                        
                        text='Jag och tre personer från Finland och Sverige deltog i NASA:s Hackathon Space Apps Challange. Vår lösning vann regionalt i Finland och gick vidare till den globala tävlingen. 
                        <span class="brmedium"></span> 
                        Vi valde utmaningen “Can you hear me now?” som hade målet att skapa en användarvänlig applikation som visar svårigheterna med kommunikation till Mars. Genom data från NASA skapade vi en webbsida där användarna kan skicka meddelanden och filer till Mars, därefter beräknas datan och användaren ser hur lång tid det skulle ta för meddelandet att nå fram.
                        <span class="brmedium"></span>'
                        tool='Adobe XD | HTML | CSS'
                        src='../image/spaceapps_mockup.jpg'

                    />

                    <div className='project_imgs'>
                        <div className='project_img1'>
                        <img src={solarsys1} alt='profile-img'></img>

                        </div>
                        <div className='project_img2'>
                        <img src={points} alt='profile-img'></img>

                        </div>
                        <div className='project_img3'>
                        <img src={solarsys} alt='profile-img'></img>
                        </div>

                    </div>

                </div>
            </div>
        </div>

    );
}


export default Projects_Nasa2020;
