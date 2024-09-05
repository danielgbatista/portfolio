import { ProjectModalProps } from "./interface";
import { IoLinkOutline, IoSparkles } from "react-icons/io5";
import Button from "@atoms/button";
import Tag from "@atoms/tag";

const ProjectModal: React.FC<ProjectModalProps> = ({ ...props }) => {
    let visible = props.isOpen ? 'flex' : 'hidden';

    return (
        <div className={`${visible} fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 max-mobile:overflow-auto`}>
                <div className="max-mobile:w-full max-w-4xl bg-white max-mobile:flex-col flex gap-4 p-6 rounded-lg shadow-lg max-mobile:max-h-[90vh] max-mobile:overflow-y-auto">
                <div className="max-mobile:w-full w-1/2 border border-gray-300 rounded-lg">
                    <img className="w-full max-mobile:h-auto h-full object-cover rounded-lg" src={props.data.image} alt={props.data.title} />
                </div>
                <hr className="max-mobile:w-full w-px max-mobile:h-px h-auto bg-gray-350 rounded-md" />
                <div className="max-mobile:w-full w-1/2 flex flex-col gap-6">
                    <div className="flex flex-col gap-1">
                        <h3 className="text-lg font-semibold">{props.data.title}</h3>
                        <p className="text-sm">{props.data.description}</p>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold">Tecnologias</h4>
                        <ul className="flex flex-wrap gap-2">
                            {props.data.technologies.map((tech, index) => (
                                <Tag key={index} text={tech} bgColor="#C0C0C0" />
                            ))}
                        </ul>
                    </div>
                    <div className="flex justify-between gap-2">
                        <span className="w-4/5 flex items-center pl-4 border border-gray-250 gap-2 rounded-md text-gray-600">
                            {props.data.website}
                        </span>
                        <Button className="max-mobile:w-[20%] border border-gray-250 font-medium" text="Copiar" variant="outline" startIcon={<IoLinkOutline size={20} />} />
                    </div>
                    <div className="flex justify-between gap-2">
                        <Button className="w-2/5" text="Fechar" variant="outline" action={props.onClose} />
                        <Button className="w-3/5" text="Visualizar" variant="primary" href={props.data.website} endIcon={<IoSparkles size={20} />} />
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ProjectModal;