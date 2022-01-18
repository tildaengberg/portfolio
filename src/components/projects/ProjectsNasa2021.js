import React from 'react';
import './Projects.css';
import ProjectInfo from './ProjectInfo';
import { Link } from 'react-router-dom';
import nasavy1 from '../../image/nasavy1.png'
import nasavy2 from '../../image/nasavy2.png'
import nasavy3 from '../../image/nasavy3.png'

function ProjectsNasa2021() {
    return (
        <div className='project'>
            <div className='project_headline'>
            </div>

            <div class="project_container">


                <div class="project_wrapper">
                <Link to="/projekt" className='close_btn'><i class="fas fa-times"></i></Link>


                    <ProjectInfo
                        headline='NASA Hackathon Global nominee 2021 
                        <span class="brmedium"></span> '
                        
                        text='Jag och mina vänner, även klasskamrater deltog i NASA Space Apps Challange som är ett globalt hackathon som pågår under 48 timmar där en utmaning ska lösas.  
                        <span class="brmedium"></span> 
                        Vi valde utmaningen “You are my sunshine” som hade målet att skapa en användarvänlig applikation för solcellsanvändare. Genom data från NASA kunde deras API användas i lösningen. Lösningen som vi kom fram till var “Solwe” där användaren lätt kan få en översikt över sin produktion och konsumtion från sina solceller. 
                        <span class="brmedium"></span>'
                        tool='Figma | Swift'
                        src='../image/nasa3.png'
                        links="https://2021.spaceappschallenge.org/challenges/statements/you-are-my-sunshine/teams/bredvid/project"
                        linkName='Läs mer om projektet på SpaceApps hemsida'
                    />

                    <div className='project_imgs'>
                        <div className='project_img1'>
                        <img src={nasavy3} alt='profile-img'></img>

                        </div>
                        <div className='project_img2'>
                        <img src={nasavy1} alt='profile-img'></img>

                        </div>
                        <div className='project_img3'>
                        <img src={nasavy2} alt='profile-img'></img>
                        </div>

                    </div>

                </div>
            </div>
        </div>

    );
}


export default ProjectsNasa2021;
