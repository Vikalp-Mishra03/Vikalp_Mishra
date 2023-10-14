import React from 'react'
import Avatar from '../assets/avatar.svg'
export default function About() {
    return (
        <div id='about'>
            <h2>ABOUT</h2>
            <section>
                <img src={Avatar} alt="" />
                <div>
                    <p>I am a Full Stack developer with a passion for creating interactive and responsive web application. I have experience working with Javascript, React, Node.js, Express, MongoDB, HTML, CSS and Git. I am a quick learner and I am always looking to expand my knowledge and skill set. </p>

                    <h3>Skills</h3>
                    <li>JavaScript</li>
                    <li>Node.Js</li>
                    <li>React.Js</li>
                    <li>Express.Js</li>
                    <li>MongoDB</li>
                    <li>Chakra UI</li>

                </div>
            </section>
            {/* <Days /> */}
        </div>
    )
}
