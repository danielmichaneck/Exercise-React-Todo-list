import { ReactElement } from "react";

interface ListSideButtonsProps {
    action: (id: string, up: boolean) => void;
    downDisabled: boolean;
    itemId: string;
    upDisabled: boolean;
}

export function ListSideButtons(props: ListSideButtonsProps): ReactElement {
    const handleOnClickUp = () => {
        props.action(props.itemId, true);
    }
    
    const handleOnClickDown = () => {
        props.action(props.itemId, false);
    }

    return <div className="list-row-buttons">
        <button className="button-template" disabled={props.upDisabled} onClick={handleOnClickUp}><span className="material-symbols-outlined">arrow_upward</span></button>
        <button className="button-template" disabled={props.downDisabled} onClick={handleOnClickDown}><span className="material-symbols-outlined">arrow_downward</span></button>
    </div>
}