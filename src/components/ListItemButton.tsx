import { ReactElement } from "react";
import { Link } from "react-router-dom";
import { IListItemButton } from "..";

interface ListItemButtonProps {
    button: IListItemButton;
}

export function ListItemButton({button}: ListItemButtonProps): ReactElement {
    const handleOnClick = () => {
        button.action!(button.id);
    }

    if (button.linkTo !== undefined) {
        return <Link to={button.linkTo}>{button.text}</Link>
    }
    
    if (button.action !== undefined) {
        return <button onClick={handleOnClick}>{button.text}</button>
    }

    return <></>
}