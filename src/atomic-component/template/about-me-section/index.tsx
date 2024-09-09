import InfoCard from "@organisms/info-card";
import SkillCard from "@organisms/skill-card";
import ResumeCard from "@organisms/resume-card";
import EducationCard from "@organisms/education-card";
import ExperienceCard from "@organisms/experience-card";

import skills from "@mocks/skills.json";
import SectionTitle from "@atoms/section-title";
import IconButton from "@atoms/icon-button";
import { HiOutlineDownload } from "react-icons/hi";

const AboutMeSection = () => {
    return (
        <div id="#about-me" className="flex justify-center desktop:justify-start flex-col gap-2 desktop:gap-1">
            <SectionTitle title="Sobre Mim" />
            <div className="grid grid-cols-1 desktop:grid-cols-2 mt-6 desktop:mt-6 gap-4">
                <InfoCard />
                <ResumeCard />
            </div>
            <div className="grid grid-cols-1 desktop:grid-cols-3 gap-4 mt-2 desktop:mt-4">
                <SkillCard skills={skills} />
                <EducationCard />
                <ExperienceCard />
            </div>
            <div className="w-full h-auto flex flex-col justify-center gap-6 desktop:mt-12">
                <span className="text-xl font-bold text-center">Download CV</span>
                <div className="w-full flex flex-wrap justify-start desktop:justify-center px-16 items-center gap-6">
                    <span className="flex items-center gap-2">
                        <IconButton icon={<HiOutlineDownload  size={24}/>} variant="outline"/>
                        Baixar PDF
                    </span>
                    <span className="flex items-center gap-2">
                        <IconButton icon={<HiOutlineDownload size={24}/>} variant="outline"/>
                        Baixar DOCX
                    </span>
                </div>
            </div>
        </div>
    );
}

export default AboutMeSection;