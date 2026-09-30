import { useEffect, useState } from "react";
import { ArrowRight, Download, Sparkles } from "lucide-react";
import SocialLinks from "./SocialLinks";
import { profile } from "../data/portfolio";
import me from "../assets/me.png"
export default function Hero() {
    const [text, setText] = useState("");
    const full = profile.title;
    useEffect(() => {
        let i = 0;
        const t = setInterval(() => {
            setText(full.slice(0, ++i));
            if (i === full.length) clearInterval(t);
        }, 90);
        return () => clearInterval(t);
    }, []);
    return (
        <section id="home" className="hero section">
            <div className="hero-badge">
                <div className="pill">
                    <Sparkles size={15} /> Welcome to my portfolio
                </div>
            </div>
            <div className="hero-visual">
                <div className="glow"></div>
                <div className="profile-card">
                    <img src={me} alt="" />
                </div>
            </div>
            <div className="hero-copy">
                <h1>
                    Hi, I am <strong>Muhammad Ayan Ali</strong>
                </h1>
                <h2>
                    {text}
                    <span className="cursor">|</span>
                </h2>
                <p>
                    Passionate frontend developer building responsive, modern and
                    user-friendly experiences with HTML, CSS, JavaScript, React, Tailwind
                    CSS, Bootstrap and Redux Toolkit.
                </p>
                <div className="hero-actions">
                    <a className="btn primary" href="#projects">
                        View Projects <ArrowRight size={18} />
                    </a>
                    <a className="btn ghost" href={profile.cv} download>
                        Download CV <Download size={18} />
                    </a>
                </div>
                <SocialLinks />
                <div className="stats">
                    <div>
                        <b>10+</b>
                        <span>Projects</span>
                    </div>
                    <div>
                        <b>2+</b>
                        <span>Years Learning</span>
                    </div>
                    <div>
                        <b>100%</b>
                        <span>Responsive</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
