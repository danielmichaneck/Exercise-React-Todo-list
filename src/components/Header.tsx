import { ReactElement } from "react";
import { Link } from "react-router-dom";
import { ILink } from "../interfaces";

interface HeaderProps {
    text: string;
    links: ILink[];
}

export function Header(props: HeaderProps): ReactElement {
    return <div className="header">
        <Link to="/"><h1 className="header-text">{props.text}</h1></Link>
        {props.links.map((link) => (
            <Link className="header-link" to={link.to} key={link.text}>{link.text}</Link>
        ))}
    </div>
}