import React from 'react'


export default function About() {
    return (
        <div className="section narrative">
            <h2>About</h2>
            <div className="story">
                <p>My journey began with Java and Spring Boot in college. I loved understanding how systems worked — from request routing to database mappings.</p>
                <p>As I progressed, I fell for building interfaces. React gave me the language to craft experiences that felt alive and intuitive.</p>
                <p>Today I stitch those worlds together: front-end polish + backend reliability. I enjoy building projects that solve real problems and are delightful to use.</p>
            </div>


            <div className="quick-stats">
                <div className="stat"><strong>5+</strong><span>Years experience</span></div>
                <div className="stat"><strong>20+</strong><span>Projects</span></div>
                <div className="stat"><strong>React, Node</strong><span>Preferred stack</span></div>
            </div>
        </div>
    )
}