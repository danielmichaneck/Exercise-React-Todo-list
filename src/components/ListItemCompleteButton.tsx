import { ReactElement } from "react";

interface ListItemCompleteButtonProps {
    completed: boolean;
    complete: () => void;
}

export function ListItemCompleteButton(props: ListItemCompleteButtonProps): ReactElement {
    const buttonText = props.completed? "Completed" : "Complete";

    const handleOnClick: React.MouseEventHandler<HTMLButtonElement> = () => {
        props.complete();
    }

    return <div>
        <button onClick={handleOnClick}>{buttonText}</button>
    </div>
}