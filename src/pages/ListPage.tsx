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

    return <div className="list">
        <div>
            <h1>List</h1>
            <p>{listLengthText}</p>
        </div>
            {context.items.map((item) => (
                <ListItem
                    key={item.id}
                    buttons={[{
                        id: "0",
                        itemId: item.id,
                        text: "Edit",
                        action: context.editItem
                    },
                    {
                        id: "1",
                        itemId: item.id,
                        text: "Complete",
                        action: context.removeItemFromList
                    }]}
                    item={item}/>
        ))}
    </div>
}