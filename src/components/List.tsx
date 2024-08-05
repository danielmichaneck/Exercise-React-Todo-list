import { ReactElement } from "react";
import { ListItem } from "./ListItem";

interface ListProps {
    items: {
        id: string,
        name: string,
        description: string,
        timestamp: number;
    }[];
    listItemAction: (key: string) => void;
}

export function List(props: ListProps): ReactElement {
    const handleAction = (id: string) => {
        props.listItemAction(id);
    }

    return <div>
        {props.items.map((item) => (
            <ListItem id={item.id} name={item.name} description={item.description} timestamp={item.timestamp} action={handleAction} key={item.id}/>
        ))}
    </div>
}   