import React from 'react'


const timeline = [
{year:'2024', role:'Senior Software Engineer', org:'Acme Corp', bullets:['Led migration to microservices','Built event-driven ingestion pipeline']},
{year:'2022', role:'Software Engineer', org:'BetaTech', bullets:['Built customer portal with React/Node','Added CI/CD and infra as code']},
{year:'2019', role:'Intern / Junior Dev', org:'StartupX', bullets:['Worked on API integrations','Helped ship MVP']},
]


export default function Experience(){
return (
<div className="section experience">
<h2>Experience</h2>
<div className="timeline">
{timeline.map((t,i)=> (
<div className="timeline-item" key={i}>
<div className="timeline-year">{t.year}</div>
<div className="timeline-body">
<h3>{t.role} — {t.org}</h3>
<ul>
{t.bullets.map((b,idx)=>(<li key={idx}>{b}</li>))}
</ul>
</div>
</div>
))}
</div>
</div>
)
}