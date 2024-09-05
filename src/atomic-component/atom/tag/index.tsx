import React from "react";
import TagProps from "./interface";
import { tv } from "tailwind-variants";

const Tag: React.FC<TagProps> = ({ bgColor, text, classname }) => {
    const tag = tv({
        base: 'w-auto text-center text-white no-underline list-none rounded-md font-serif font-semibold',
        variants: {
            size: {
                sm: 'px-4 py-2 text-sm',
                md: 'px-4 py-2 text-base',
                lg: 'px-4 py-2 text-lg'
            }
        },
    },
    {
        responsiveVariants: ['mobile', 'laptop', 'desktop']
    }
);

    return (
        <li style={{backgroundColor: `${bgColor}`}} className={tag({ 
            class: `${classname}`,
            size: 'sm', 
          })}>
            {text}
        </li>
    );
}

export default Tag;