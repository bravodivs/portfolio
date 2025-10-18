import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import '../HeroSection.css';
import profile from '../assets/profile.jpg';

const HeroSection = () => {
    useEffect(() => {
        const canvas = document.getElementById('heroCanvas');
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        let particles = [];
        let animationFrameId;
        const mouse = { x: null, y: null, radius: 90 };

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const createParticles = () => {
            // more particles: roughly 1 per 10px width
            const total = Math.floor(window.innerWidth / 5);
            particles = [];
            for (let i = 0; i < total; i++) {
                particles.push({
                    x: Math.random() * canvas.width,
                    y: Math.random() * canvas.height,
                    size: Math.random() * 1.4 + 0.6, // smaller & subtle
                    speedX: (Math.random() - 0.5) * 0.25,
                    speedY: (Math.random() - 0.5) * 0.25,
                });
            }
        };

        const connectParticles = () => {
            const maxDist = 100;
            for (let a = 0; a < particles.length; a++) {
                for (let b = a + 1; b < particles.length; b++) {
                    const dx = particles[a].x - particles[b].x;
                    const dy = particles[a].y - particles[b].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < maxDist) {
                        // faint line that fades with distance
                        const alpha = 0.5 * (1 - dist / maxDist);
                        ctx.strokeStyle = `rgba(255,255,255, ${alpha})`;
                        ctx.lineWidth = 0.4;
                        ctx.beginPath();
                        ctx.moveTo(particles[a].x, particles[a].y);
                        ctx.lineTo(particles[b].x, particles[b].y);
                        ctx.stroke();
                    }
                }
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // draw & move particles
            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];

                // attraction to mouse if within radius
                if (mouse.x !== null && mouse.y !== null) {
                    const dx = mouse.x - p.x;
                    const dy = mouse.y - p.y;
                    const d = Math.sqrt(dx * dx + dy * dy);
                    if (d < mouse.radius) {
                        // move slightly toward mouse (gentle attraction)
                        const attractionStrength = (1 - d / mouse.radius) * 0.06; // small factor
                        p.x += dx * attractionStrength;
                        p.y += dy * attractionStrength;
                    }
                }

                p.x += p.speedX;
                p.y += p.speedY;

                // bounce softly off edges
                if (p.x <= 0 || p.x >= canvas.width) p.speedX *= -1;
                if (p.y <= 0 || p.y >= canvas.height) p.speedY *= -1;

                // draw particle (subtle navy fill)
                ctx.beginPath();
                ctx.fillStyle = 'rgba(255,255,255,0.8)';
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fill();
            }

            // connect faintly
            connectParticles();

            animationFrameId = requestAnimationFrame(animate);
        };

        const handleMouseMove = (e) => {
            // Use clientX/Y so it's consistent
            mouse.x = e.clientX;
            mouse.y = e.clientY;
        };

        const handleMouseLeave = () => {
            mouse.x = null;
            mouse.y = null;
        };

        // init
        resizeCanvas();
        createParticles();
        animate();

        window.addEventListener('resize', () => {
            resizeCanvas();
            createParticles();
        });
        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            cancelAnimationFrame(animationFrameId);
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, []);

    return (
        <section className="hero-section">
            <div className="hero-content">
                <motion.div
                    className="hero-text"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2 }}
                >
                    <h1>Hi, I’m <span className="highlight">Devanshu</span></h1>
                    <p>
                        A Full-Stack Developer passionate about crafting digital experiences that
                        connect creativity with technology.
                    </p>
                    <motion.a
                        href="#about"
                        className="scroll-indicator"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 2, duration: 1 }}
                    >
                        ↓ Scroll Down
                    </motion.a>
                </motion.div>

                <motion.div
                    className="hero-photo"
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.4 }}
                >
                    <img src={profile} alt="Devanshu" />
                </motion.div>
            </div>

            <div className="hero-background">
                <canvas id="heroCanvas"></canvas>
            </div>
        </section>
    );
};

export default HeroSection;
