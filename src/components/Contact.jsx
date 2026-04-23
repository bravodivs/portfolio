import React, { useState } from 'react'


export default function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '' })
    const [status, setStatus] = useState(null)


    function update(k, v) { setForm(s => ({ ...s, [k]: v })) }


    async function submit(e) {
        e.preventDefault()
        setStatus('sending')
        try {
            const res = await fetch('http://localhost:4000/contact', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(form) })
            if (res.ok) { setStatus('sent'); setForm({ name: '', email: '', message: '' }) }
            else setStatus('error')
        } catch (err) { setStatus('error') }
    }


    return (
        <div className="section contact">
            <h2>Contact</h2>
            <form className="contact-form" onSubmit={submit}>
                <label>Name<input value={form.name} onChange={e => update('name', e.target.value)} required /></label>
                <label>Email<input type="email" value={form.email} onChange={e => update('email', e.target.value)} required /></label>
                <label>Message<textarea value={form.message} onChange={e => update('message', e.target.value)} required /></label>
                <div className="form-row">
                    <button className="btn-primary" type="submit">Let's connect</button>
                    <div className="status">{status === 'sending' ? 'Sending...' : status === 'sent' ? 'We will be connecting shortly ✅' : status === 'error' ? 'Let us try again' : ' '}</div>
                </div>
            </form>


            <footer className="footer">
                <div>Let’s build something together — <a href="mailto:vermadevanshu17@gmail.com">vermadevanshu17@gmail.com</a></div>
                <div className="small">© {new Date().getFullYear()} Devanshu Verma</div>
            </footer>
        </div>
    )
}