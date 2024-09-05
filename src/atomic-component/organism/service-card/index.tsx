import { FC } from "react";
import { ServiceCardProps } from "./interface";
import BaseCard from "@atoms/base-card";

const ServiceCard: FC<ServiceCardProps> = ({ ...props }) => {
    return (
        <BaseCard className="max-w-[480px] flex flex-col gap-2">
            <div className="w-[40px] flex justify-center py-3 px-2 bg-primary rounded-md">
                {props.icon}
            </div>
            <h3 className="text-lg font-semibold">
                {props.title}
            </h3>
            <p className="text-justify">
                {props.description}
            </p>
        </BaseCard>
    );
}

export default ServiceCard