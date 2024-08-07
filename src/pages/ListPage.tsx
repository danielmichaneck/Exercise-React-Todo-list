import { ReactElement } from "react";
import { ListItem, ListSideButtons } from "../components";
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
                <div className="list-row">
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
                    <ListSideButtons
                        action={context.moveItem}
                        downDisabled={context.items.findIndex((item) => item) >= (context.items.length - 1)}
                        itemId={item.id}
                        upDisabled={context.items.findIndex((item) => item) > 0}/>
                </div>
        ))}
    </div>
}
