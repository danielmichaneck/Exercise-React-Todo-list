import { ReactElement } from "react";
import { ListItemCompleteButton } from "./ListItemCompleteButton";

interface ListItemProps {
    id: string,
    author: string,
    name: string,
    description: string,
    timestamp: number;
    action: (id: string) => void;
}

export function ListItem(props: ListItemProps): ReactElement {
    const item = {
        name: props.name,
        description: props.description,
        author: props.author,
        timestamp: new Date(props.timestamp),
        clicked: false
    }

    const handleIsClicked = () => {
        props.action(props.id);
        item.clicked = true;
    }

    return <div className="list-item">
        <p className="list-item-title">{item.name}</p>
        <p className="list-item-description">{item.description}</p>
        <div className="list-item-bottom-bar">
            <p className="list-item-author">{item.author}</p>
            <p className="list-item-timestamp">{item.timestamp.toLocaleDateString()}</p>
        </div>
        <ListItemCompleteButton
            clicked={item.clicked}
            defaultText="Complete"
            clickedText="Completed"
            isClicked={handleIsClicked}/>
    </div>
}