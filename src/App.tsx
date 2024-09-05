import ProjectCard from "@organisms/project-card";
import projects  from "@mocks/projects.json";
import skills  from "@mocks/skills.json";
import InfoCard from "@organisms/info-card";
import EducationCard from "@organisms/education-card";
import ResumeCard from "@organisms/resume-card";
import ExperienceCard from "@organisms/experience-card";
import SkillCard from "@organisms/skill-card";
import ServiceCard from "@organisms/service-card";
import { IoShapes } from "react-icons/io5";

export function App() {

  return (
    <section className="flex flex-wrap w-full items-center gap-10">
      <div className="flex flex-wrap gap-8">
        {
          projects.map((data, index) => (
            <ProjectCard data={data}/>
          ))
        }
      </div>
      
      <ServiceCard description="Criação de layouts visualmente atraentes e funcionais, garantindo que os usuários tenham uma experiência intuitiva e agradável ao interagir com o site ou aplicativo." title="Design de Interfaces" icon={<IoShapes color="#FAFAFA" />}/>
      <InfoCard />
      <ResumeCard />
      <EducationCard />
      <ExperienceCard />
      <SkillCard skills={skills} />
    </section>
  );
}

export default App;
