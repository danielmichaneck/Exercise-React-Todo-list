import { ReactElement } from "react";
import { ListItem } from "../components";
import { useItemListContext } from "../hooks";

export function ListPage(): ReactElement {
    const context = useItemListContext();
    let listLengthText: string = "";

    if (context.items.length === 1) {
        listLengthText = "There is currently one item in the list.";
    }
    else if (context.items.length < 1) {
        listLengthText = "The list is currently empty."
    }
    else {
        listLengthText = "There are currently " + context.items.length + " items in the list."
    }
    
    const handleAction = (id: string) => {
        context.removeItemFromList(id);
    }

    return <div className="list">
        <div>
            <h1>List</h1>
            <p>{listLengthText}</p>
        </div>
        {context.items.map((item) => (
            <ListItem item={item} itemClicked={false} action={handleAction} key={item.id}/>
        ))}
    </div>
}   