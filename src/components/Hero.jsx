import React from 'react'


export default function Hero({onExplore}){
return (
<div className="hero">
<div className="hero-left">
<div className="greeting">Hi, I’m <span className="name-hero">Devanshu</span></div>
<h1 className="title">I build modern web experiences with React & Node.js</h1>
<p className="subtitle">I design polished user interfaces and build scalable backends — a creative approach to engineering.</p>


<div className="cta-row">
<button className="btn-primary" onClick={onExplore}>Learn my story</button>
<a className="btn-ghost" href="#projects">Projects</a>
</div>
</div>


<div className="hero-right">
{/* stylized photo frame */}
<div className="photo-frame">
<img src="/profile.jpg" alt="profile" />
<div className="floating-badge">Full-Stack • React • Node</div>
</div>


{/* soft geometric visual */}
<div className="hero-visual" aria-hidden>
<svg width="220" height="220" viewBox="0 0 200 200">
<defs>
<linearGradient id="g" x1="0" x2="1">
<stop offset="0%" stopColor="#0b2545" />
<stop offset="100%" stopColor="#7a8b9a" />
</linearGradient>
</defs>
<circle cx="100" cy="100" r="80" fill="url(#g)" opacity="0.08" />
</svg>
</div>
</div>
</div>
)
}