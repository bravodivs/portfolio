import React, { useState } from 'react'
import Sidebar from './components/Sidebar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Gallery from './components/Gallery'
import Contact from './components/Contact'


export default function App(){
const [active, setActive] = useState('home')


return (
<div className="app-root">
<Sidebar active={active} setActive={setActive} />
<main className="content">
<section id="home" style={{display: active==='home'?'block':'none'}}>
<Hero onExplore={() => setActive('about')} />
</section>
<section id="about" style={{display: active==='about'?'block':'none'}}>
<About />
</section>
<section id="experience" style={{display: active==='experience'?'block':'none'}}>
<Experience />
</section>
<section id="projects" style={{display: active==='projects'?'block':'none'}}>
<Projects />
</section>
<section id="gallery" style={{display: active==='gallery'?'block':'none'}}>
<Gallery />
</section>
<section id="contact" style={{display: active==='contact'?'block':'none'}}>
<Contact />
</section>
</main>
</div>
)
}