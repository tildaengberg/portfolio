import React from 'react';
import './Projects.css';
import ProjectInfo from './ProjectInfo';
import { Link } from 'react-router-dom';
import label3 from '../../image/label3.png'
import label4 from '../../image/label4.png'
import label5 from '../../image/label5.png'

function ProjectsLabels() {
    return (
        <div className='project'>

            <div class="project_container">


                <div class="project_wrapper">


                    <ProjectInfo
                        headline='Öletiketter
                        <span class="brmedium"></span> '

                        text='På min fritid då det finns tid över designar jag öletiketter till Munksunds Craftbeer som ett roligt sidoprojekt.
                              Fast det mest är en rolig sak så har det varit lika utmanande och lärorikt som andra arbeten. Den största utmaningen är att det är ett begränsat och litet utrymme där mycket information ska passa in.
                        <span class="brmedium"></span> 
                        De etiketter som jag har gjort passar till både burk och flaska. 
                        <span class="brmedium"></span>'
                        tool='Adobe Illustrator'
                        src='../image/3label1.png'
                        duration='2020 - pågående'
                    />



                </div>
            </div>
        </div>

    );
}


export default ProjectsLabels;
