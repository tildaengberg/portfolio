import React from 'react';
import './Projects.css';
import ProjectInfo from './ProjectInfo';
import screens from '../../image/homepage_gf.png'
import screen from '../../image/screen_gf.png'
import logo from '../../image/GradeField_transp.png'


function ProjectsGradeField() {
    return (
        <div className='project'>

            <div class="project_container">
                <div class="project_wrapper">

                    <ProjectInfo
                        headline='GradeField - databasdriven applikation 
                        <span class="brmedium"></span> '

                        text='I kursen databasteknik och webbaserade system skapade jag och två klasskompisar en databasdriven applikation med ASP.NET och SQL. GradeField är en applikation som där studenter kan se och hantera sina kurser, betyg och annan utbildningsrelaterad information.
                        <span class="brmedium"></span> '
                        tool='ASP.NET MVC | C# | SQL | Docker | Bootstrap'
                        src='../image/screens_gf.png'
                        duration='4 veckor'
                    />

                    <div className='project_info2'>

                        <div className='project_img2'>
                            <img src={screens} alt='profile-img'></img>
                        </div>
                        <div className='project_text2'>
                            <h2>Processen</h2>
                            <span class="brmedium"></span>
                            <p>Innan projektet började hade vi gjort laborationer individuellt och med den lärdom vi tog med oss från de skulle vi jobba tillsammans och utveckla en databasdriven applikation.
                                Vi bestämde oss snabbt för att utveckla ett system som hjälper studenter att hålla reda på kurser. Det finns tjänster för detta redan men vi ville även skapa inspiration och motivation för elever. 
                            </p>
                            <p>Under arbetsprocessen utvecklade vi applikationen tillsammans men i vissa fall då vi inte kunde jobba tillsammans användes GitHub.</p>
                        </div>


                        <div className='project_img3'>
                            <img src={screen} alt='profile-img'></img>
                        </div>
                        <div className='project_text3'>
                            <h2>Resultat</h2>
                            <span class="brmedium"></span>
                            <p>Resultatet blev <cite>"GradeField"</cite>, som tillåter varje student skapa en användare för att kunna hantera sina kurser.
                                Applikationen innehåller en översikt över kurser och statistik, en kurssida där användaren kan lägga till och hantera kurser.
                                Användaren kan också se information om sin examen, exempelvis hur många dagar det är kvar och totalt antal lästa högskolepoäng.
                                Den sista sidan kan användaren ändra sin profilbild, examensdatum och utbildning.
                            </p>
                            <p>Resultatet blev som önskat men däremot om det hade funnits tid över hade vi lagt ner mer tid på gränssnittet, dock var inte det fokus på kursen.</p>
                        </div>

                    </div>

                </div>
            </div>
        </div>

    );
}


export default ProjectsGradeField;
