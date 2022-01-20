import React from 'react';
import './Projects.css';
import ProjectInfo from './ProjectInfo';
import { Link } from 'react-router-dom';
import flyer from '../../image/reklamblad2.png'
import logos from '../../image/logos-07.png'
import mockup from '../../image/ga_mockup.png'
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';


function ProjectsGarmAqua() {
    return (
        <div className='project'>
            <div class="project_container">
                <div class="project_wrapper">
                

                    <ProjectInfo
                        headline='GarmAqua 
                        <span class="brmedium"></span> '

                        text='Mitt första riktiga projekt där mitt uppdrag var att utveckla en ny hemsida för företaget GarmAqua. Företaget ville även ha en ny grafisk profil, logotyp och reklamblad.
                            Projektet var omfattande och en stor utmaning då jag aldrig hade publicerat en hemsida eller hade utvecklat i React tidigare. Däremot lärde jag mig mycket längs vägen och det var riktigt kul. 
                        <span class="brmedium"></span> '
                        

                        tool='Figma | React.js | Netlify | Adobe Illustrator'
                        src='../image/ga_mockup.png'
                        links="https://garmaqua.com"
                        linkName='GarmAqua - Hemsida'
                        duration='Maj 2019 - Augusti 2019'
                        
                        
                    />

                    <div className='project_info2'>

                        <div className='project_img2'>
                            <img src={logos} alt='profile-img'></img>
                        </div>
                        <div className='project_text2'>
                            <h2>Logotyp</h2>
                            <span class="brmedium"></span>
                            <p>För att få känslan av företaget som levererar en uppfinning till sjukhus och stora anläggningar så började jag med att skapa en logotyp.
                                Det var däremot svårt att skapa en responsiv logotyp som skulle spegla företaget då jag inte hade mycket information att tillgå. 
                            </p>
                            <p>Slutresultatet som visas ovanför visar att logotypen går att skala ner och applicera på deras uppfinning och även i digitala sammanhang.</p>
                        </div>


                        <div className='project_img3'>
                            <img src={flyer} alt='profile-img'></img>
                        </div>
                        <div className='project_text3'>
                        <h2>Reklamblad</h2>
                        <span class="brmedium"></span>
                            <p>Det sista som jag skapade var ett reklamblad som skulle kunna skickas ut till både svenska och engelska kunder. På grund av komplex information var det svårt att göra reklambladet kort och lättförståeligt.  
                            </p>
                            <p>Tillslut efter att företaget fick kontrolläsa och komma med feedback blev resultet tillslut bra.</p>
                        </div>

                    </div>

                </div>
            </div>
        </div>

    );
}


export default ProjectsGarmAqua;
