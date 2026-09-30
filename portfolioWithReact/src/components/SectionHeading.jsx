export default function SectionHeading({ eyebrow, title, text }) {
    return (
        <div className="section-heading reveal">
            <span>{eyebrow}</span>
            <h2>{title}</h2>
            {text && <p>{text}</p>}
        </div>
    );
}
