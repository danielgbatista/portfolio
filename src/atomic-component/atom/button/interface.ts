import { ReactElement } from "react";

interface ButtonProps {
    text?: string,
    // size: 'sm' | 'md' | 'lg',
    variant: 'primary' | 'outline' ,
    backgroundColor?: string,
    iconPosition?: 'left' | 'right',
    icon?: ReactElement
}

export default ButtonProps;