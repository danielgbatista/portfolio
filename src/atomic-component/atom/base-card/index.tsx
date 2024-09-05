import React from "react";
import { BaseCardProps } from "./interface";

const BaseCard: React.FC<React.PropsWithChildren<BaseCardProps>> = ({children, title, className}) => {
    return (
        <div className={`w-auto h-auto p-6 border-2 border-gray-350 rounded-md ${className}`}>
            {title && <h3 className="text-lg font-semibold">{title}</h3>}
            {children}
        </div>
    );
}

export default BaseCard