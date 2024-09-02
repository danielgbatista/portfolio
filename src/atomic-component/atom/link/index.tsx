import LinkProps from "./interface"

const Link: React.FC<LinkProps> = ({ ...props }) => {
    return (
        <a className={`${props.openNewTab ? "underline" : "hover:underline no-underline" } text-md` }
         target={props.openNewTab ? "_blank" : "_self"} href={props.href}>
            {props.label}
        </a>
    )
}

export default Link;