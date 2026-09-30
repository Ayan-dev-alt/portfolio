import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";
export default function ScrollToTop() {
    const [show, setShow] = useState(false);
    useEffect(() => {
        const f = () => setShow(scrollY > 500);
        addEventListener("scroll", f);
        return () => removeEventListener("scroll", f);
    }, []);
    return show ? (
        <button
            className="top-btn"
            onClick={() => scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Scroll to top"
        >
            <ArrowUp />
        </button>
    ) : null;
}
