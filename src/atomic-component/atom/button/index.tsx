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
            base: 'flex items-center justify-center px-4 py-2 gap-2 rounded-md font-semibold',
            variants: {
                variant: {
                    primary : 'bg-primary text-white', 
                    outline : 'bg-transparent border-2 border-primary text-primary',
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
                className: `${props.className}`,
                variant: props.variant,
                size: { 
                    initial: 'sm', 
                    mobile:  'sm', 
                    laptop:  'md', 
                    desktop: 'md', 
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