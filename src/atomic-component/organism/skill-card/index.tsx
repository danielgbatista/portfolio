import { SkillCardProps } from "./interface";
import { FC } from "react";
import BaseCard from "@atoms/base-card";
import Tag from "@atoms/tag";

const SkillCard: FC<SkillCardProps> = ({ skills }) => {

    return (
        <BaseCard className="w-full flex flex-col gap-4" title="Habilidades">
            <ul className="flex flex-wrap gap-2">
                {
                    skills.map((skill, index) => {
                        return <Tag text={skill.name} bgColor={skill.color} key={index}/>;
                    })
                }
            </ul>
        </BaseCard>
    );
}

export default SkillCard;