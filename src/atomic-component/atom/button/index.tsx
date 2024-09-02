import { ReactElement } from "react";
import { tv } from 'tailwind-variants';
import ButtonProps from "./interface";

const Button: React.FC<ButtonProps> = ({ ...props }) => {
    const setAction = () => {
        if(props.action){
            props.action();
        } else if(props.href){
            window.open(props.href, '_self');
        }
    }

    const button = tv({
            base: 'w-auto px-8 py-4 rounded-lg',
            variants: {
                variant: {
                    primary : 'bg-primary text-white', 
                    outline : 'bg-transparent border border-primary text-primary',
                },
                size: {
                    sm: 'w-full h-auto text-sm',
                    md: 'text-base',
                    lg: 'text-lg'
                }
            },
        },
        {
            responsiveVariants: ['mobile', 'laptop', 'desktop']
        }
    );

    const presentChild = () :ReactElement => {
        let icon: ReactElement = props.icon != null ? props.icon : <></>;
        let text: string = props.text;

        return (
            <span className="flex gap-2 items-center justify-center">
                {props.iconPosition === 'left' && icon}
                {text}
                {props.iconPosition === 'right' && icon}
            </span>
        );
    }

    return (
        <button 
            onClick={setAction}
            className={button({ 
                variant: props.variant,
                size: { 
                    initial: 'sm', 
                    mobile:  'sm', 
                    laptop:  'md', 
                    desktop: 'lg', 
                }, 
        })}>
            {presentChild()}
        </button>
    );
}

export default Button;