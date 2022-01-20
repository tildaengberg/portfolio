import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import './Projects.css';
import "animate.css/animate.min.css";

function ProjectInfo(props) {
    return (
        <>
            <div className='project_info'>


                <div className='project_text'>
                    <ScrollAnimation
                        animateIn="animate__fadeInLeft"
                        animateOnce={true}
                        delay={100}
                        duration={2}
                    >
                        <h1 className='project_text__headline' dangerouslySetInnerHTML={{ __html: props.headline }}></h1>
                        <p className='project_text_description' dangerouslySetInnerHTML={{ __html: props.text }}></p>
                        <Link
                            className='project_text_link'
                            to={{ pathname: props.links }}
                            target='_blank'>
                            {props.linkName}
                        </Link>
                        <p className='project_text_tools' ><i class="fas fa-tools"></i>{props.tool}</p>
                        <p className='project_text_tools' ><i class="fas fa-hourglass-half"></i>{props.duration}</p>
                    </ScrollAnimation>
                </div>
                <figure className='project_img' data-category={props.label}>
                    <img
                        alt='Project'
                        src={props.src}
                    />
                </figure>

            </div>

        </>
    );
}

export default ProjectInfo;