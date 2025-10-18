const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
app.use(express.json())


app.post('/contact',(req,res)=>{
console.log('Contact form received:', req.body)
// TODO: hook this up to nodemailer, SendGrid, or your favourite email provider
res.json({ok:true})
})


const PORT = process.env.PORT || 4000
app.listen(PORT, ()=> console.log(`Server listening on ${PORT}`))




/* ---------- Notes ---------- */
// 1) Add your own images in the public root: profile.jpg, project-1.jpg, project-2.jpg, project-3.jpg, work-1.jpg, etc.
// 2) Customize timeline, projects, and copy to match your real content.
// 3) For production email, replace the server POST handler with a secure email sender (nodemailer or 3rd-party API).


// End of file