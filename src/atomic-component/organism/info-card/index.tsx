import BaseCard from "@atoms/base-card";
import IconButton from "@atoms/icon-button";
import { FaLinkedin, FaWhatsapp } from "react-icons/fa6";
import { IoLogoGithub } from "react-icons/io5";
import { MdAlternateEmail } from "react-icons/md";

const InfoCard = () => {

    return (
    <BaseCard className="flex gap-4">
        <div className="w-[200px] grow-0 flex items-center justify-center">
          <img className="w-full h-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzD2Zw8bKsezPy8fOui-DF4XLUqpMov6W9Qhg64TcGO9yw0rXer9MiBot29g&s" alt="" />
        </div>
        <div className="w-[420px] flex gap-4">
          <div className="w-[90%] h-auto flex flex-col justify-between flex-grow">
            <div>
                <p className="text-xl font-semibold">Daniel G. Batista</p>
                <p className="text-lg font-medium">Designer | Desenvolvedor</p>
            </div>
            <div className="w-full h-auto flex gap-12">
                <div className="w-auto flex flex-col">
                    <span className="text-xl font-bold">10</span>
                    <p className="text-lg font-medium">Projetos Finais</p>
                </div>
                <div className="w-auto flex flex-col">
                    <span className="text-xl font-bold">+2</span>
                    <p className="text-lg font-medium">Anos de Experiência</p>
                </div>
            </div>
          </div>
          <div className="w-[10%] grow-0 flex flex-col justify-center gap-2">
            <IconButton customizedColor={'bg-[#FF5959]'} variant={"primary"} icon={<MdAlternateEmail size={24} />} />
            <IconButton customizedColor={'bg-[#8CE545]'} variant={"primary"} icon={<FaWhatsapp size={24}/>} />
            <IconButton customizedColor={'bg-[#8AC0FF]'} variant={"primary"} icon={<FaLinkedin size={24} />}  />
            <IconButton customizedColor={'bg-[#0C111D]'} variant={"primary"} icon={<IoLogoGithub size={24}/>} />
          </div>
        </div>
    </BaseCard>
    );
}

export default InfoCard;