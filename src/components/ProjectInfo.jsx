import React from 'react';

function ProjectInfo(props) {
    return (
        <>
            <div className='project_info'>

                <div className='project_text'>
                    <h3 className='project_text__headline' dangerouslySetInnerHTML={{ __html: props.headline }}></h3>
                    <p className='project_text_description' dangerouslySetInnerHTML={{ __html: props.text }}></p>
                    <p className='project_text_tools' ><i class="fas fa-tools"></i>{props.tool}</p>
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