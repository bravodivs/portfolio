import React from 'react'


const projects = [
{id:1,title:'Memory Lane',desc:'Interactive timeline web app with photos and audio notes',stack:['React','Node','MongoDB'],featured:true,live:'#',code:'#'},
{id:2,title:'E-commerce System',desc:'Distributed system with microservices and gateway',stack:['Spring Boot','React','Kafka'],featured:false,live:'#',code:'#'},
{id:3,title:'Realtime Chat',desc:'Socket-based real-time chat with presence',stack:['Node','Socket.IO'],featured:false,live:'#',code:'#'},
]


export default function Projects(){
const featured = projects.find(p=>p.featured)
const others = projects.filter(p=>!p.featured)


return (
<div className="section projects">
<h2>Projects</h2>


<div className="featured">
<div className="featured-left">
<h3>{featured.title}</h3>
<p className="desc">{featured.desc}</p>
<div className="tags">{featured.stack.join(' • ')}</div>
<div className="proj-ctas">
<a className="btn-primary" href={featured.live}>View Live</a>
<a className="btn-ghost" href={featured.code}>View Code</a>
</div>
</div>
<div className="featured-right">
<div className="thumb">{/* placeholder image */}
<img alt="project" src="/project-1.jpg" />
</div>
</div>
</div>


<div className="grid">
{others.map(p=> (
<article className="card" key={p.id}>
<div className="card-thumb"><img src={`/project-${p.id}.jpg`} alt={p.title} /></div>
<div className="card-body">
<h4>{p.title}</h4>
<p className="small">{p.desc}</p>
<div className="tags small">{p.stack.join(' • ')}</div>
<div className="card-ctas">
<a className="btn-sm" href={p.live}>Live</a>
<a className="btn-sm ghost" href={p.code}>Code</a>
</div>
</div>
</article>
))}
</div>
</div>
)
}