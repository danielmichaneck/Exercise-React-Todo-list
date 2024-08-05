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

    return <div>
        <p>{item.name}</p>
        <p>{item.description}</p>
        <p>{item.author}</p>
        <p>{item.timestamp.toLocaleDateString()}</p>
        <p>{item.clicked.toString()}</p>
        <ListItemCompleteButton clicked={item.clicked} defaultText="Complete" clickedText="Completed" isClicked={handleIsClicked}/>
    </div>
}