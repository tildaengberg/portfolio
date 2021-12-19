import React from 'react';
import './Projects.css';
import ProjectInfo from './ProjectInfo';
import { Link } from 'react-router-dom';
import label3 from '../image/label3.png'
import label4 from '../image/label4.png'
import label5 from '../image/label5.png'

function Projects_Labels() {
    return (
        <div className='project'>
            <div className='project_headline'>
            </div>

            <div class="project_container">


                <div class="project_wrapper">
                <Link to="/projekt" className='close_btn'><i class="fas fa-times"></i></Link>


                    <ProjectInfo
                        headline='Öletiketter
                        <span class="brmedium"></span> '
                        
                        text='På min fritid då det finns tid över designar jag öletiketter till Munksunds Craftbeer som ett roligt sidoprojekt.
                        <span class="brmedium"></span> 
                        De etiketter som jag har gjort passar till både burk och flaska. 
                        <span class="brmedium"></span>'
                        tool='Adobe Illustrator'
                        src='../image/3label1.png'
                    />

                    <div className='project_imgs'>
                        <div className='project_img1'>
                        <img src={label3} alt='profile-img'></img>

                        </div>
                        <div className='project_img2'>
                        <img src={label4} alt='profile-img'></img>

                        </div>
                        <div className='project_img3'>
                        <img src={label5} alt='profile-img'></img>
                        </div>

                    </div>

                </div>
            </div>
        </div>

    );
}


export default Projects_Labels;
