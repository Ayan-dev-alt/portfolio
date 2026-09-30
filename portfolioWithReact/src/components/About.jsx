import { useEffect, useState } from "react";
import SectionHeading from "./SectionHeading";
import { MonitorSmartphone, Zap } from "lucide-react";
export default function About() {
    const words = [
        "Interactive Websites",
        "Modern Interfaces",
        "Dynamic Experiences",
    ];
    const [i, setI] = useState(0);
    useEffect(() => {
        const t = setInterval(() => setI((v) => (v + 1) % words.length), 2200);
        return () => clearInterval(t);
    }, []);
    return (
        <section id="about" className="section about">
            <SectionHeading
                eyebrow="ABOUT ME"
                title="I build for the web."
                text="A frontend-focused developer who enjoys turning ideas into polished, responsive interfaces."
            />
            <div className="about-grid">
                <div className="about-art reveal">
                    <div className="art-window">
                        <div className="window-bar">
                            <i />
                            <i />
                            <i />
                        </div>
                        <div className="art-code">
                            <span>const</span> passion = <b>"{words[i]}"</b>;<br />
                            <span>return</span> passion<span>;</span>
                        </div>
                    </div>
                </div>
                <div className="about-copy reveal">
                    <h3>
                        Creating <em>{words[i]}</em>
                    </h3>
                    <p>
                        I focus on clean UI, responsive layouts, accessibility and smooth
                        interactions. I am also learning backend fundamentals to grow toward
                        full-stack development.
                    </p>
                    <div className="feature-grid">
                        <div>
                            <MonitorSmartphone />
                            <b>Responsive Design</b>
                            <small>Looks great on every screen.</small>
                        </div>
                        <div>
                            <Zap />
                            <b>High Performance</b>
                            <small>Simple, fast and user-focused.</small>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
