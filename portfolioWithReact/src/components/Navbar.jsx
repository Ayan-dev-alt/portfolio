import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { profile } from "../data/portfolio";
const nav = ["Home", "About", "Skills", "Projects", "Contact"];
export default function Navbar() {
    const [open, setOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState("home");

    useEffect(() => {
        const f = () => setScrolled(scrollY > 20);
        addEventListener("scroll", f);
        return () => removeEventListener("scroll", f);
    }, []);

    useEffect(() => {
        const sections = nav
            .map((item) => document.getElementById(item.toLowerCase()))
            .filter(Boolean);

        if (!sections.length) return;

        const observer = new IntersectionObserver(
            (entries) => {
                const visible = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

                if (visible) {
                    setActive(visible.target.id);
                }
            },
            {
                rootMargin: "-35% 0px -45% 0px",
                threshold: [0.2, 0.5, 0.8],
            },
        );

        sections.forEach((section) => observer.observe(section));
        return () => observer.disconnect();
    }, []);

    return (
        <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
            <a className="logo" href="#home">
                {profile.shortName}
            </a>
            <nav className="desktop-nav">
                {nav.map((n) => {
                    const id = n.toLowerCase();
                    const isActive = active === id;
                    return (
                        <a
                            key={n}
                            href={"#" + id}
                            className={isActive ? "active" : ""}
                            aria-current={isActive ? "page" : undefined}
                        >
                            {n}
                        </a>
                    );
                })}
                <a className="nav-cta" href="#contact">
                    Hire Me
                </a>
            </nav>
            <button
                className="menu-btn"
                onClick={() => setOpen(!open)}
                aria-label="Toggle menu"
            >
                {open ? <X /> : <Menu />}
            </button>
            {open && (
                <nav className="mobile-nav">
                    {nav.map((n) => (
                        <a
                            onClick={() => setOpen(false)}
                            key={n}
                            href={"#" + n.toLowerCase()}
                        >
                            {n}
                        </a>
                    ))}
                    <a onClick={() => setOpen(false)} className="nav-cta" href="#contact">
                        Hire Me
                    </a>
                </nav>
            )}
        </header>
    );
}
