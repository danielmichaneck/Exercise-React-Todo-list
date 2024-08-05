import { ReactElement } from "react";
import { ListItemCompleteButton } from "./ListItemCompleteButton";

interface ListItemProps {
    name: string,
    description: string,
    timestamp: number;
}

export function ListItem(props: ListItemProps): ReactElement {
    const item = {
        name: props.name,
        description: props.description,
        timestamp: new Date(props.timestamp),
        completed: false
    }

    return <div>
        <p>{item.name}</p>
        <p>{item.description}</p>
        <p>{item.timestamp.toLocaleDateString()}</p>
        <p>{item.completed.toString()}</p>
        <ListItemCompleteButton completed={item.completed}/>
    </div>
}