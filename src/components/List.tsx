import { ReactElement } from "react";
import { ListItem } from "./ListItem";

interface ListProps {
    items: {
        name: string,
        description: string,
        timestamp: number;
    }[];
}

export function List(props: ListProps): ReactElement {
    return <div>
        {props.items.map((item) => (
            <ListItem name={item.name} description={item.description} timestamp={item.timestamp} key={item.name + " " + item.timestamp}/>
        ))}
    </div>
}   