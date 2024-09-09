import SectionTitle from "@atoms/section-title"
import ProjectCard from "@organisms/project-card";

import projects from "@mocks/projects.json";

const ProjectSection = () => {
    return (
        <div className="w-full h-auto flex flex-col gap-6">
            <SectionTitle title="Projetos"/>
            <div className="w-full flex flex-wrap gap-x-6 gap-y-6">
                {
                    projects.map((data, _index) => (
                        <ProjectCard data={data} key={data.id}/>
                    ))
                }
            </div>
        </div>
    );
}

export default ProjectSection;