import { ReactElement } from "react";

interface IconButtonProps {
    variant: 'primary' | 'outline',
    customizedColor?: string,
    icon: ReactElement
}

export default IconButtonProps;