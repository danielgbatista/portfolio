import { ReactElement } from "react";

interface ButtonProps {
    text: string | null,
    size: 'small' | 'medium' | 'large',
    variant: 'primary' | 'outline' | 'text' | 'iconLeft' | 'iconRight',
    color: string | null,
    icon: ReactElement | null
}

export type { ButtonProps };