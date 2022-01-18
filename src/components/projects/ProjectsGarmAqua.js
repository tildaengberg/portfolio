import React from 'react';
import './Projects.css';
import ProjectInfo from './ProjectInfo';
import { Link } from 'react-router-dom';
import flyer from '../../image/reklamblad2.png'
import logos from '../../image/logos-07.png'
import mockup from '../../image/ga_mockup.png'


function ProjectsGarmAqua() {
    return (
        <div className='project'>
            <div className='project_headline'>
            </div>

            <div class="project_container">
                <div class="project_wrapper">
                    <Link to="/projekt" className='close_btn'><i class="fas fa-times"></i></Link>

                    <ProjectInfo
                        headline='GarmAqua 
                        <span class="brmedium"></span> '

                        text='Mitt första riktiga projekt där mitt uppdrag var att utveckla en ny hemsida för företaget GarmAqua. Företaget ville även ha en ny grafisk profil, logotyp och reklamblad.
                        <span class="brmedium"></span> '
                        tool='Figma | React.js | Netlify | Adobe Illustrator'
                        src='../image/garmportfoio.png'
                        links="https://garmaqua.com"
                        linkName='GarmAqua - Hemsida'
                    />


                    <div className='project_imgs'>
                        <div className='project_img1'>
                            <img src={flyer} alt='profile-img'></img>

                        </div>
                        <div className='project_img2'>
                            <img src={logos} alt='profile-img'></img>

                        </div>
                        <div className='project_img3'>
                            <img src={mockup} alt='profile-img'></img>
                        </div>

                    </div>

                </div>
            </div>
        </div>

    );
}


export default ProjectsGarmAqua;
