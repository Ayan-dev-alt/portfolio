import { useEffect, useRef, useState } from "react";
export default function SkillBar({ name, value, isActive, onToggle }) {
    const ref = useRef(null);
    const [show, setShow] = useState(false);
    const isLoadingSkill = name === "Backend Learning";

    useEffect(() => {
        const o = new IntersectionObserver(
            ([e]) => {
                if (e.isIntersecting) {
                    setShow(true);
                    o.disconnect();
                }
            },
            { threshold: 0.3 },
        );
        o.observe(ref.current);
        return () => o.disconnect();
    }, []);

    return (
        <div
            className={`skill-row ${isLoadingSkill ? "loading-skill" : ""} ${isActive ? "active-skill" : ""}`}
            ref={ref}
            onClick={onToggle}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    onToggle();
                }
            }}
        >
            <div>
                <b className="skill-name">{name}</b>
                <span>{isLoadingSkill ? "Learning..." : value + "%"}</span>
            </div>
            <div className="bar">
                <i
                    style={
                        isLoadingSkill
                            ? { width: show ? "38%" : "0%" }
                            : { width: show ? `${value}%` : 0 }
                    }
                />
            </div>
        </div>
    );
}
