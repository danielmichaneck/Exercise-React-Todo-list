import { ReactElement } from "react";
import { Link, useLocation } from "react-router-dom";
import { ILink } from "..";

interface HeaderProps {
    text: string;
    links: ILink[];
}

export function Header(props: HeaderProps): ReactElement {
    const location = useLocation();

    props.links.forEach((link) => link.classes="header-link")
    const currentLink = props.links.find((link) => link.to === location.pathname);
    if (currentLink !== undefined) {
        currentLink.classes = "header-link header-link-current";
    }

    return <div className="header">
        <div className="header-container">
            <Link className="header-text-link" to="/"><h1 className="header-text">{props.text}</h1></Link>
            <div className="header-links">
                {props.links.map((link) => (
                    <Link key={link.text} className={link.classes} to={link.to}>{link.text}</Link>
                ))}
            </div>
        </div>
    </div>
}