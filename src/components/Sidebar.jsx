import React from 'react'


const links = [
{id:'home', label:'Home', icon:'🏠'},
{id:'about', label:'About', icon:'👋'},
{id:'experience', label:'Experience', icon:'💼'},
{id:'projects', label:'Projects', icon:'🧩'},
{id:'gallery', label:'Gallery', icon:'📸'},
{id:'contact', label:'Contact', icon:'✉️'},
]


export default function Sidebar({active, setActive}){
return (
<aside className="sidebar">
<div className="profile">
<img src="/profile.jpg" alt="profile" className="avatar" />
<h2 className="name">Devanshu Verma</h2>
<p className="role">Full-Stack Developer</p>
</div>


<nav className="nav">
{links.map(l=> (
<button key={l.id} className={`nav-btn ${active===l.id? 'active':''}`} onClick={()=>setActive(l.id)} title={l.label}>
<span className="icon" aria-hidden>{l.icon}</span>
<span className="label">{l.label}</span>
</button>
))}
</nav>


<div className="socials">
<a href="#" aria-label="github">GH</a>
<a href="#" aria-label="linkedin">LI</a>
</div>
</aside>
)
}