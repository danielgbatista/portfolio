import { ReactElement } from "react";

interface ButtonProps {
    variant: 'primary' | 'outline',
    text: string,
    href?: string,
    icon?: ReactElement
    action?: () => void,
    customizedColor?: string,
    iconPosition?: 'left' | 'right',
}

export default ButtonProps;