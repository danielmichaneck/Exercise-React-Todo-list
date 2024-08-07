import { ReactElement } from "react";
import { IListItemButton } from "..";
import { ListItemButton } from ".";

interface ListItemButtonsProps {
    buttons: IListItemButton[];
}

export function ListItemButtons({buttons}: ListItemButtonsProps): ReactElement {
    return <div className="list-item-buttons">
        {buttons.map((button) => (
            <ListItemButton button={button}/>
        ))}
    </div>
}