import { ReactElement } from "react";
import { ListItem } from "../components";
import { useItemListContext } from "../hooks";

export function ListPage(): ReactElement {
    const context = useItemListContext();

    const handleAction = (id: string) => {
        context.removeItemFromList(id);
    }

    return <div className="list">
        {context.items.map((item) => (
            <ListItem item={item} itemClicked={false} action={handleAction} key={item.id}/>
        ))}
    </div>
}   