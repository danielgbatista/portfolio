import { tv } from 'tailwind-variants';
import ButtonProps from "./interface";

const Button: React.FC<ButtonProps> = ({ ...props }) => {
    const handleClick = () => {
        if(props.action){
            props.action();
        } else if(props.href){
            window.open(props.href, '_self');
        } else {
            console.log("No action defined");
        }
    }

    const button = tv({
            base: 'flex items-center px-8 py-4 gap-2 rounded-lg',
            variants: {
                variant: {
                    primary : 'bg-primary text-white', 
                    outline : 'bg-transparent border border-primary text-primary',
                },
                size: {
                    sm: 'text-sm',
                    md: 'text-base',
                    lg: 'text-lg'
                }
            },
        },
        {
            responsiveVariants: ['mobile', 'laptop', 'desktop']
        }
    );

    return (
        <button 
            onClick={handleClick}
            className={button({ 
                variant: props.variant,
                size: { 
                    initial: 'sm', 
                    mobile:  'sm', 
                    laptop:  'md', 
                    desktop: 'lg', 
                }, 
            })}
        >
            {props.startIcon && props.startIcon}
            {props.text}
            {props.endIcon && props.endIcon}
        </button>
    );
}

export default Button;