import { ReactElement } from "react";

interface ButtonProps {
    variant: 'primary' | 'outline',
    text: string,
    href?: string,
    action?: () => void,
    endIcon?: ReactElement,
    startIcon?: ReactElement,
    className?: string,
}

export default ButtonProps;