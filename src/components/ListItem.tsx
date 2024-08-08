import { ReactElement } from "react";
import { ListItemButtons } from ".";
import { IItem, IListItemButton } from "../interfaces";

interface ListItemProps {
    item: IItem,
    buttons: IListItemButton[];
}

export function ListItem(props: ListItemProps): ReactElement {
    const item = props.item;
    const date: Date = new Date(item.timestamp);
    const hourZero: string = date.getHours() < 10? "0" : "";
    const minuteZero: string = date.getMinutes() < 10? "0" : "";

    return <div className="list-item">
        <p className="list-item-title">{item.name}</p>
        <p className="list-item-description">{item.description}</p>
        <div className="list-item-bottom-bar">
            <p className="list-item-author">{item.author}</p>
            <p className="list-item-timestamp">{hourZero + date.getHours()}:{minuteZero + date.getMinutes()} / {date.toLocaleDateString()}</p>
        </div>
        <ListItemButtons buttons={props.buttons}/>
    </div>
}