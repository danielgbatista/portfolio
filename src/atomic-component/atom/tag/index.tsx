import React from "react";
import TagProps from "./interface";
import { tv } from "tailwind-variants";

const Tag: React.FC<TagProps> = ({...props }) => {
    const tag = tv({
        base: 'rounded-lg text-white no-underline',
        variants: {
            size: {
                sm: 'px-4 py-4 text-sm',
                md: 'px-8 py-6 text-base',
                lg: 'px-6 py-4 text-lg'
            }
        },
    },
    {
        responsiveVariants: ['mobile', 'laptop', 'desktop']
    }
);

    return (
        <span className={tag({ 
            class: props.customizedColor,
            size: { 
              initial: 'sm', 
              mobile: 'sm', 
              laptop: 'md', 
              desktop: 'lg', 
            }, 
          })}>
            {props.text}
        </span>
    );
}

export default Tag;