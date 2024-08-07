import { ReactElement } from "react";
import { IListItemButton } from "..";

interface ListItemButtonProps {
    button: IListItemButton;
}

export function ListItemButton({button}: ListItemButtonProps): ReactElement {
    const handleOnClick = () => {
        if (button.itemId !== undefined) {
            button.action!(button.itemId);
        }
        else {
            button.action!(button.id);
        }
    }
    
    if (button.action !== undefined) {
        return <button onClick={handleOnClick}>{button.text}</button>
    }

    return <></>
}