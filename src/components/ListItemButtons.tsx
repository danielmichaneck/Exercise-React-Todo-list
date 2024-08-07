import { ReactElement } from "react";
import { Link } from "react-router-dom";

interface ListItemButtonsProps {
    clicked: boolean;
    defaultText: string;
    clickedText: string;
    isClicked: () => void;
}

export function ListItemButtons(props: ListItemButtonsProps): ReactElement {
    const buttonText = props.clicked? props.defaultText : props.clickedText;

    const handleOnClick: React.MouseEventHandler<HTMLButtonElement> = () => {
        props.isClicked();
    }

    return <div className="list-item-buttons">
        <Link className="header-link" to="/edit">Edit</Link>
        <button onClick={handleOnClick}>{buttonText}</button>
    </div>
}