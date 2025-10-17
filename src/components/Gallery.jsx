import React from 'react'


const images = ['/work-1.jpg','/work-2.jpg','/work-3.jpg']


export default function Gallery(){
return (
<div className="section gallery">
<h2>Gallery</h2>
<div className="gallery-grid">
{images.map((src,i)=> (
<div key={i} className="gallery-item"><img src={src} alt={`gallery-${i}`} /></div>
))}
</div>
</div>
)
}