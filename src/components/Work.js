import React from 'react'
import './Work.css'

function Work() {

    return (
        <div className='work-container'>
            <h1>My Work</h1>
            <div className='work-container-grid'>

                <div className='work1-img '>
                <img src='/image/garmportfoio.png' alt='logo'/>
                </div>
                <div className='work1-txt'>
                    <h2>GarmAqua</h2>
                    <h4>Web development</h4>
                    <p>My first real project when a company mainly wanted a new website. I took the chance and took the opportunity to develop it in React.js to learn a new language for building user interfaces.</p>
                    <p>They also requested a new graphic profile, logo and flyer that I created alongside the website.</p>
                    <p>Link to website: <a href="https://www.garmaqua.com">garmaqua.com</a></p>
                    <p>Link to GitHub: <a href="https://github.com/tildaengberg/garmaqua">github.com/tildaengberg/garmaqua</a></p>
                    <p id='highlight'><i class="fas fa-tools"></i>React.js | Netlify | GitHub | Figma | Adobe Illustrator</p>
                </div>

                <div className='work2-img '>
                <img src='/image/hack.png' alt='logo'/>
                </div>
                <div className='work2-txt'>
                    <h2>Winner Good Tech Hack 2021</h2>
                    <h4>Winner of best student team</h4>
                    <p>Me and my friends, even classmates participated in Goodtech Hack is a hackathon is going on for 24 hours where a challenge to be solved. Students, the public sector and companies could take part in the competition.</p>
                    <p>We chose to develop a platform that promotes group work at the upper secondary level. The groups are designed using an algorithm based on Belbin's theory of personality types. After that, the groups and teachers can follow their development and progress in the platform, which will stimulate the cooperation between the students. The platform therefore contributes to reducing social exclusion and improved study results.</p>
                    <p>Link to interview: <a href="https://www.facebook.com/goodtechhack/posts/738446943495664">Good Tech Hack interview</a></p>
                    <p id='highlight'><i class="fas fa-tools"></i>HTML | CSS | Adobe Premiere | Adobe Illustrator</p>
                </div>

                <div className='work3-img '>
                <img src='/image/spaceapps_mockup.jpg' alt='logo'/>
                </div>
                <div className='work3-txt'>
                    <h2>NASA Global Hackathon 2020</h2>
                    <h4>Global awarded</h4>
                    <p>In collaboration with NASA, ESA, CSA, CNES and JAXA where 26,000 participants participated in 251 locations around the world.</p>
                    <p>I worked together with three people from Sweden and Finland. The purpose of the challenge was primarily to design an interactive application that shows and investigates the difficulties of communication between Mars and Earth. It resulted in that we went from being locally nominated in Vaasa to being globally nominated. </p>
                    <p>Link to GitHub: <a href="https://github.com/DavidRonnqvist/Yes-we-hear-you">Yes-we-hear-you</a></p>
                    <p id='highlight'><i class="fas fa-tools"></i>HTML | CSS | GitHub | Adobe XD</p>
                </div>

                <div className='work4-img '>
                <img src='/image/lundstroms.png' alt='logo'/>
                </div>
                <div className='work4-txt'>
                    <h2>Redo existing website</h2>
                    <h4>Web development</h4>
                    <p>In the course web technology for engineers, we were given the task of redoing an optional website that we would improve. It was the first time I came in contact with web development and since then I can not stop.</p>
                    <p id='highlight'><i class="fas fa-tools"></i>HTML | CSS | Adobe XD</p>
                </div>

                <div className='work5-img '>
                <img src='/image/label.png' alt='logo'/>
                </div>
                <div className='work5-txt'>
                    <h2>Graphic design of labels</h2>
                    <h4>Hobby design to Munksund Craftbeer</h4>
                    <p>Design of labels for beer cans and bottles. Side projects that are completely independent of education and work.</p>
                    <p>Check out Munksunds Craftbeer on Instagram: <a href="https://www.instagram.com/munksund_craftbeer/">Munksunds Craftbeer</a></p>
                    <p id='highlight'><i class="fas fa-tools"></i>Illustrator | Photoshop</p>
                </div>

            </div>
        </div>
    )
}

export default Work
