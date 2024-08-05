import { ReactElement } from "react";
import { ListItemCompleteButton } from "./ListItemCompleteButton";

interface ListItemProps {
    id: string,
    name: string,
    description: string,
    timestamp: number;
    action: (id: string) => void;
}

export function ListItem(props: ListItemProps): ReactElement {
    const item = {
        name: props.name,
        description: props.description,
        timestamp: new Date(props.timestamp),
        completed: false
    }

    const handleIsClicked = () => {
        props.action(props.id);
    }

    return <div>
        <p>{item.name}</p>
        <p>{item.description}</p>
        <p>{item.timestamp.toLocaleDateString()}</p>
        <p>{item.completed.toString()}</p>
        <ListItemCompleteButton clicked={item.completed} defaultText="Complete" clickedText="Completed" isClicked={handleIsClicked}/>
    </div>
}