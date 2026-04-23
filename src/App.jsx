import React, { useState } from 'react'
import NewSidebar from './components/newSidebar'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Gallery from './components/Gallery'
import Contact from './components/Contact'
import HeroSection from './components/HeroSection'
import SocialLinks from './components/SocialLinks'


export default function App() {
    const [active, setActive] = useState('home')


    return (
        <div className="app-root">
            {/* <Sidebar active={active} setActive={setActive} /> */}
            <NewSidebar active={active} setActive={setActive} />
            <main className="content">
                <section id="home" style={{ display: active === 'home' ? 'block' : 'none' }}>
                    <HeroSection onExplore={() => setActive('about')} />
                </section>
                <section id="about" style={{ display: 'block'}}>
                    <About />
                </section>
                <section id="experience" style={{ display: 'block' }}>
                    <Experience />
                </section>
                <section id="projects" style={{ display: 'block'}}>
                    <Projects />
                </section>
                <section id="gallery" style={{ display: 'block' }}>
                    <Gallery />
                </section>
                <section id="contact" style={{ display: 'block' }}>
                    <Contact />
                </section>
            </main>
            <div className="relative min-h-screen bg-[#0a192f] text-white">
                <SocialLinks />
            </div>
        </div>
    )
}