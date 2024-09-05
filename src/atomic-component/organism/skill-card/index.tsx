import { SkillCardProps } from "./interface";
import { FC } from "react";
import BaseCard from "@atoms/base-card";
import Tag from "@atoms/tag";

const SkillCard: FC<SkillCardProps> = ({ skills }) => {
    let minSkills = 5;

    const amountOfSkills = () =>{
        let amount = skills.length; 

        return <Tag text={`+${amount} Habilidades`} 
                classname="text-primary font-bold border-[2px] border-primary bg-transparent"/>;
    } 

    return (
        <BaseCard className="max-w-[360px] flex flex-col gap-4" title="Habilidades">
            <ul className="flex flex-wrap gap-2">
                {
                    skills.map((skill, index) => {
                        if(index <= minSkills) return <Tag text={skill.name} bgColor={skill.color} key={index}/>;
                        else return;
                    })
                }
                {skills.length > minSkills && amountOfSkills()}
            </ul>
        </BaseCard>
    );
}

export default SkillCard;