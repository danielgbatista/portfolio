import Button from "@atoms/button";
import { ProjectCardProps } from "./interface";
import { HiOutlineArrowsExpand } from "react-icons/hi";

const ProjectCard: React.FC<ProjectCardProps> = ({ data }) => {

    console.log(data.image)

    return (
        <div className="w-[280px] h-[160px] flex flex-col px-2 py-2 gap-2">
            <img className="w-[100%] h-[120px] object-cover rounded-md" src={data.image} alt={data.title} />
            <div className="flex justify-between items-center gap-5">
                <h3 className="text-sm font-semibold">{data.title}</h3>
                <Button endIcon={<HiOutlineArrowsExpand size={20}/>} text="Expandir" variant={"primary"}/>
            </div>
        </div>
    )
}

export default ProjectCard;