import { ReactElement } from "react";
import { tv } from 'tailwind-variants';
import ButtonProps from "./interface";

const Button: React.FC<ButtonProps> = ({ ...props }) => {
    const button = tv({
            base: 'px-1 py-1 rounded-md',
            variants: {
                variant: {
                    primary : 'bg-primary text-white', 
                    outline : 'bg-transparent border border-primary text-primary',
                },
                size: {
                    sm: 'w-full text-sm',
                    md: 'w-[50%] text-base',
                    lg: 'w-20 text-lg'
                }
            },
        },
        {
            responsiveVariants: ['mobile', 'laptop', 'desktop']
        }
    );

    const presentChild = () :ReactElement => {
        let icon: ReactElement = props.icon != null ? props.icon : <></>;
        let text: string = props.text != null ? props.text : "";

        return (
            <span className="flex gap-2 items-center justify-center">
                {props.iconPosition === 'left' && text && icon}
                {!text && icon}
                {text}
                {props.iconPosition === 'right' && text && icon}
            </span>
        );
    }

    return (
        <button className={button({ 
            variant: props.variant,
            size: { 
              initial: 'sm', 
              mobile: 'sm', 
              laptop: 'md', 
              desktop: 'lg', 
            }, 
          })}>
            {presentChild()}
        </button>
    );
}

export default Button;