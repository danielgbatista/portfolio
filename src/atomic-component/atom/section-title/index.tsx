import { FC } from "react";

const SectionTitle :FC<{title: string}> = ({ title }) => {
    return (
        <div className="w-full desktop:w-full flex justify-center items-center gap-2">
            <h2 className="text-xl font-medium">{title}</h2>
            <hr className="flex-grow border border-[#C3C3C3]"/>
        </div>
    );
}

export default SectionTitle;