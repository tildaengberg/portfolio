import React from 'react';
import './Projects.css';
import ProjectInfo from './ProjectInfo';
import { Link } from 'react-router-dom';
import screens from '../../image/homepage_gf.png'
import screen from '../../image/screen_gf.png'
import logo from '../../image/GradeField_transp.png'


function ProjectsGradeField() {
    return (
        <div className='project'>
            <div className='project_headline'>
            </div>

            <div class="project_container">
                <div class="project_wrapper">
                    <Link to="/projekt" className='close_btn'><i class="fas fa-times"></i></Link>
                    <ProjectInfo
                        headline='GradeField - databasdriven applikation 
                        <span class="brmedium"></span> '

                        text='I kursen databasteknik och webbaserade system skapade jag och två klasskompisar en databasdriven applikation med ASP.NET och SQL. GradeField är en applikation som där studenter kan se och hantera sina kurser, betyg och annan utbildningsrelaterad information.
                        <span class="brmedium"></span> '
                        tool='ASP.NET MVC Core | C# | SQL | Docker | Bootstrap'
                        src='../image/screens_gf.png'
                    />

                    <div className='project_imgs'>
                        <div className='project_img1'>
                            <img src={screens} alt='profile-img'></img>

                        </div>
                        <div className='project_img2'>
                            <img src={logo} alt='profile-img'></img>

                        </div>
                        <div className='project_img3'>
                            <img src={screen} alt='profile-img'></img>
                        </div>

                    </div>

                </div>
            </div>
        </div>

    );
}


export default ProjectsGradeField;
