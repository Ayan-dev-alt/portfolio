import { ExternalLink, GitBranch } from "lucide-react";

export default function ProjectCard({ project }) {
    return (
        <article className="project-card reveal">
            <div className="project-image">{project.image}</div>
            <div className="project-body">
                <div className="tags">
                    {project.tags.map((t) => (
                        <span key={t}>{t}</span>
                    ))}
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-links">
                    {project.live !== "#" ? (
                        <a href={project.live} target="_blank" rel="noreferrer">
                            Live Preview <ExternalLink size={15} />
                        </a>
                    ) : (
                        <span className="disabled">Live Preview</span>
                    )}
                    <a href={project.github} target="_blank" rel="noreferrer">
                        GitHub <GitBranch size={15} />
                    </a>
                </div>
            </div>
        </article>
    );
}
