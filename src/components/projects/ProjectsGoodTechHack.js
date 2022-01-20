import React from 'react';
import './Projects.css';
import ProjectInfo from './ProjectInfo';
import mockup1 from '../../image/couetus2.png'
import coetus from '../../image/coetus.png'


function ProjectsGoodTechHack() {
    return (
        <div className='project'>

            <div class="project_container">
                <div class="project_wrapper">
                    <ProjectInfo
                        headline='Coetus - Good Tech Hack
                        <span class="brmedium"></span> '

                        text='Jag och mina vänner, även klasskamrater deltog i Good Tech Hack som är ett hackathon som pågår i 24 timmar där en utmaning ska lösas. Studenter, offentlig sektor och företag kunde delta i tävlingen.
                        <span class="brmedium"></span> '
                        tool='HTML | CSS | Adobe Premiere | Adobe Illustrator'
                        src='../image/hack2.png'
                        links="https://www.facebook.com/goodtechhack/posts/738446943495664"
                        linkName='Länk till intervju'
                        duration='24 timmar'
                    />

                    <div className='project_info2'>

                        <div className='project_img2'>
                            <img src={coetus} alt='profile-img'></img>
                        </div>
                        <div className='project_text2'>
                            <h2>Processen</h2>
                            <span class="brmedium"></span>
                            <p>Årets tema på Good Tech Hack var <cite>hållbarastäder och samhällen</cite> som är FNs globala hållbarhetsmål nummer 11. Vi valde frågeställningen <cite>Social inkludering - Hur kan vi bidra till att öka den sociala inkluderingen för elever och studenter så de klarar skolan bättre?</cite>
                            </p>
                            <p>Den begränsade tiden gjorde att vi inte hann genomföra en hel designprocess, utan vi brainstormade och skissade snabbt upp en plattform utifrån vår idé Coetus.</p>
                        </div>


                        <div className='project_img3'>
                            <img src={mockup1} alt='profile-img'></img>
                        </div>
                        <div className='project_text3'>
                            <h2>Resultat</h2>
                            <span class="brmedium"></span>
                            <p>Resultet blev en plattform som underlättar grupparbeten i skolmiljö för både lärare och studenter. Denna plattform gör det möjligt att motiveras av andra och därmed öka den sociala inkluderingen i skolmiljö. 
                            </p>
                            <p>Plattformen hann vi utveckla i HTML och CSS för att kunna demostrera men den hade inga funktioner utan var bara en prototyp.</p>
                        </div>

                    </div>

                </div>
            </div>
        </div>

    );
}


export default ProjectsGoodTechHack;
