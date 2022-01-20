import React from 'react';
import './Projects.css';
import ProjectInfo from './ProjectInfo';
import nasavy2 from '../../image/nasavy2.png'
import nasavy3 from '../../image/nasavy3.png'

function ProjectsNasa2021() {
    return (
        <div className='project'>
            <div class="project_container">
                <div class="project_wrapper">
                    <ProjectInfo
                        headline='Solwe - NASA Hackathon 
                        <span class="brmedium"></span> '

                        text='Jag och mina vänner, även klasskamrater deltog i NASA Space Apps Challange som är ett globalt hackathon som pågår under 48 timmar där en utmaning ska lösas.  
                        <span class="brmedium"></span> '
                        tool='Figma | Swift'
                        src='../image/nasa3.png'
                        links="https://2021.spaceappschallenge.org/challenges/statements/you-are-my-sunshine/teams/bredvid/project"
                        linkName='Läs mer om projektet på SpaceApps hemsida'
                        duration='48 timmar'
                    />

                    <div className='project_info2'>

                        <div className='project_img2'>
                            <img src={nasavy3} alt='profile-img'></img>
                        </div>
                        <div className='project_text2'>
                            <h2>Processen</h2>
                            <span class="brmedium"></span>
                            <p>Vi valde utmaningen “You are my sunshine” som hade målet att skapa en användarvänlig applikation för solcellsanvändare. Genom att ta fram underlag för en lösning skapades alltifrån personas, user scenarios, flödesschema, lo-fi-prototyper och mycket mer.
                            </p>
                            <p>Därefter skapades hi-fi-prototyper och en av gruppmedlemmarna påbörjade att skapa en prototyp i Swift för att kunna använda sig av NASAs API. Medan prototyperna utvecklades började jag på presentationen av arbetet.</p>
                        </div>


                        <div className='project_img3'>
                            <img src={nasavy2} alt='profile-img'></img>
                        </div>
                        <div className='project_text3'>
                            <h2>Resultat</h2>
                            <span class="brmedium"></span>
                            <p> Genom data från NASA och de skapade prototyperna fick lösningen namnet “Solwe” där användaren lätt kan få en översikt över sin produktion och konsumtion från sina solceller. Lösningen bidrar till att solcellsanvändare kan lättare förstå och jämföra sin data från solcellerna.
                            </p>
                            <p>Resultet som presenterades vann den regionala tävlingen i Sverige men lösningen tog sig inte längre i den globala tävlingen.</p>
                        </div>

                    </div>

                </div>
            </div>
        </div>

    );
}


export default ProjectsNasa2021;
