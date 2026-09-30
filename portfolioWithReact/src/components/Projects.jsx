import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/portfolio";
export default function Projects() {
    return (
        <section id="projects" className="section">
            <SectionHeading
                eyebrow="MY WORK"
                title="Featured projects"
                text="A few projects that represent my frontend practice."
            />
            <div className="projects-grid">
                {projects.map((p) => (
                    <ProjectCard key={p.title} project={p} />
                ))}
            </div>
        </section>
    );
}
