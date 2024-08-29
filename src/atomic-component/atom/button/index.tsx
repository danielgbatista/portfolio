import { ReactElement } from "react";
import { ButtonProps } from "./interface";

export const Button: React.FC<ButtonProps> = ({ ...props }) => {
    const presentChild = () :ReactElement => {
        let icon: ReactElement = props.icon != null ? props.icon : <></>;
        let text: string = props.text != null ? props.text : "";

        return (
            <span className="flex items-center justify-center">
                {props.variant === 'iconLeft' && icon}
                {!text && icon}
                {text}
                {props.variant === 'iconRight' && icon}
            </span>
        );
    }

    return (
        <button>
            {presentChild()}
        </button>
    );
}