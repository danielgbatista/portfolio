import { tv } from 'tailwind-variants';
import IconButtonProps from "./interface";

const IconButton: React.FC<IconButtonProps> = ({ ...props }) => {
    const iconButton = tv({
            base: 'flex items-center justify-center px-2 py-2 rounded-lg',
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
        <button className={iconButton({ 
            variant: props.variant,
            size: { 
              initial: 'sm', 
              mobile: 'sm', 
              laptop: 'md', 
              desktop: 'lg', 
            }, 
          })}>
            {props.icon}
        </button>
    );
}

export default IconButton;