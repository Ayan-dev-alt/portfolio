import { useState } from "react";
import SectionHeading from "./SectionHeading";
import SkillBar from "./SkillBar";
import { Code2, LayoutDashboard, Smartphone, Zap } from "lucide-react";
import { skills } from "../data/portfolio";

const cards = [
    [LayoutDashboard, "Dashboard UI", "Clean and organized interfaces with a modern user experience"],
    [Code2, "Frontend Development", "Modern React applications built with reusable components"],
    [Smartphone, "Responsive Design", "Mobile-first layouts that work smoothly on every screen"],
    [Zap, "Performance", "Fast, smooth, and lightweight interfaces for better performance"],
];

export default function Skills() {
    const [activeSkill, setActiveSkill] = useState(null);

    return (
        <section id="skills" className="section">
            <SectionHeading
                eyebrow="MY TOOLKIT"
                title="Skills & strengths"
                text="Technologies I use while continuously improving my craft."
            />
            <div className="skills-grid">
                <div className="skill-list">
                    {skills.map(([n, v]) => (
                        <SkillBar
                            key={n}
                            name={n}
                            value={v}
                            isActive={activeSkill === n}
                            onToggle={() =>
                                setActiveSkill((current) => (current === n ? null : n))
                            }
                        />
                    ))}
                </div>
                <div className="skill-cards">
                    {cards.map(([Icon, t, d]) => (
                        <div className="skill-card" key={t}>
                            <div style={{ display: "flex", gap: "4px" }}>
                                <Icon />
                                <b>{t}</b>
                            </div>
                            <p>{d}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
