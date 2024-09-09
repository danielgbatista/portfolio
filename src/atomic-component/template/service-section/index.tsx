import SectionTitle from "@atoms/section-title";
import ServiceCard from "@organisms/service-card";
import { FaShop } from "react-icons/fa6";
import { IoShapes } from "react-icons/io5";
import { MdOutlineDevices } from "react-icons/md";

const ServiceSection = () => {
    return (
        <div className="flex flex-col gap-8">
            <SectionTitle title="Serviços"/>
            <div className="flex desktop:flex-row flex-col gap-4">
                <ServiceCard title="Design de Interfaces" icon={<IoShapes color="white" size={16} />} description="Criação de layouts visualmente atraentes e funcionais, garantindo que os usuários tenham uma experiência intuitiva e agradável ao interagir com o site ou aplicativo." key={1}/>
                <ServiceCard title="Desenvolvimento de Websites" icon={<MdOutlineDevices color="white" size={16}/>} description="Desenvolvimento de websites responsivos para oferecer uma experiência de alta qualidade em smartphones, tablets e computadores, garantindo consistência em diferentes dispositivos." key={2} />
                <ServiceCard title="Desenvolvimento de E-commerce" icon={<FaShop color="white" size={16}/>} description="Criação de lojas virtuais completas, desde a concepção do design até a implementação do sistema de pagamento seguro, permitindo que os clientes vendam produtos." key={3} />
            </div>
        </div>
    );
}

export default ServiceSection;