import React from 'react';
import './Projects.css';
import ProjectInfo from './ProjectInfo';
import { Link } from 'react-router-dom';
import avatar from '../image/m1.png'
import coetus from '../image/couetus2.png'
import logo from '../image/coetus3.png'


function Projects_GoodTechHack() {
    return (
        <div className='project'>
        <div className='project_headline'>
            </div>

            <div class="project_container">
                <div class="project_wrapper">
                <Link to="/projekt" className='close_btn'><i class="fas fa-times"></i></Link>
                    <ProjectInfo
                        headline='Vinnare av Good Tech Hack 2021 
                        <span class="brmedium"></span> '
                        
                        text='Jag och mina vänner, även klasskamrater deltog i Goodtech Hack är ett hackathon som pågår i 24 timmar där en utmaning ska lösas. Studenter, offentlig sektor och företag kunde delta i tävlingen.
                        <span class="brmedium"></span> '
                        tool='HTML | CSS | Adobe Premiere | Adobe Illustrator'
                        src='../image/hack2.png'
                    />

                    <div className='project_imgs'>
                        <div className='project_img1'>
                        <img src={avatar} alt='profile-img'></img>

                        </div>
                        <div className='project_img2'>
                        <img src={coetus} alt='profile-img'></img>

                        </div>
                        <div className='project_img3'>
                        <img src={logo} alt='profile-img'></img>
                        </div>

                    </div>

                </div>
            </div>
        </div>

    );
}


export default Projects_GoodTechHack;
