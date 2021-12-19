import React from 'react';
import './Skills.css';

function Skills() {
    return (

        <div class="container">
            <div className='skills_container'>
                <div class="skills_design">
                <i class="fas fa-pen-nib"></i>
                    <h3>Design</h3>
                    <p>Jag gillar att designa allt från pappersprototyper till färdiga hi-fi-prototyper. </p>
                    <div className='skills_names'>
                    <p>Illustrator</p>
                    <p>Figma</p>
                    <p>Xd</p>
                    <p>InDesign</p>
                    <p>Photoshop</p>
</div>
                    
                </div>
                <div class="skills_frontend">
                <i class="fas fa-code"></i>
                    <h3>Frontend</h3>
                    <p>Frontend-utveckling är det roligaste jag vet och att skapa responsiva och användarvänliga hemsidor.</p>
                    <div className='skills_names'>
<p>HTML</p>
                    <p>CSS</p>
                    <p>React</p>
                    </div>
                    
                </div>
                <div class="skills_backend">
                <i class="fas fa-database"></i>
                    <h3>Backend</h3>
                    <p>Backend-utveckling är ett område som jag har testat och vill utöka mina kunskaper om.</p>
                    <div className='skills_names'>
                    <p>SQL</p>
                    <p>ASP.NET MVC</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
