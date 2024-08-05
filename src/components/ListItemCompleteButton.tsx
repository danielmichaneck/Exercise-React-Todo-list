import { ReactElement } from "react";

interface ListItemCompleteButtonProps {
    clicked: boolean;
    defaultText: string;
    clickedText: string;
    isClicked: () => void;
}

export function ListItemCompleteButton(props: ListItemCompleteButtonProps): ReactElement {
    const buttonText = props.clicked? props.defaultText : props.clickedText;

    const handleOnClick: React.MouseEventHandler<HTMLButtonElement> = () => {
        props.isClicked();
    }

    return <div className="list-item-button">
        <button onClick={handleOnClick}>{buttonText}</button>
    </div>
}