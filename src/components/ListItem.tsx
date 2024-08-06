import { ReactElement } from "react";
import { ListItemButton } from ".";
import { IItem } from "../interfaces";

interface ListItemProps {
    item: IItem,
    itemClicked: boolean,
    action: (id: string) => void;
}

export function ListItem(props: ListItemProps): ReactElement {
    let clicked = props.itemClicked;
    const item = props.item;

    const handleIsClicked = () => {
        props.action(item.id);
        clicked = true;
    }

    return <div className="list-item">
        <p className="list-item-title">{item.name}</p>
        <p className="list-item-description">{item.description}</p>
        <div className="list-item-bottom-bar">
            <p className="list-item-author">{item.author}</p>
            <p className="list-item-timestamp">{item.timestamp.toLocaleString()}</p>
        </div>
        <ListItemButton
            clicked={clicked}
            defaultText="Complete"
            clickedText="Completed"
            isClicked={handleIsClicked}/>
    </div>
}