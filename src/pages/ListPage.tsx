import { ReactElement, useState } from "react";
import { ListItem, ListSideButtons } from "../components";
import { useItemListContext } from "../hooks";
import { ListSortButtons } from "../components/ListSortButtons";

export function ListPage(): ReactElement {
    const context = useItemListContext();
    let listLengthText: string = "";

    if (context.items.length === 1) {
        listLengthText = "There is currently one " + context.data.nameOfItem + " in the list.";
    }
    else if (context.items.length < 1) {
        listLengthText = "The list is currently empty."
    }
    else {
        listLengthText = "There are currently " + context.items.length + " " + context.data.nameOfItemPlural.toLocaleLowerCase() + " in the list."
    }

    return <div className="list">
        <div>
            <h1>{context.data.nameOfItemPlural}</h1>
            <p>{listLengthText}</p>
            <ListSortButtons disabled={context.items.length < 1} sort={context.sortList} sortedBy={context.sortedBy}/>
        </div>
            {context.items.map((item) => (
                <div key={item.id} className="list-row">
                    <ListItem
                        buttons={[{
                            id: "0",
                            itemId: item.id,
                            text: <p>Edit <span className="list-button-symbol material-symbols-outlined">edit_note</span></p>,
                            action: context.editItem
                        },
                        {
                            id: "1",
                            itemId: item.id,
                            text: <p>Complete <span className="list-button-symbol material-symbols-outlined">check_small</span></p>,
                            action: context.removeItemFromList
                        }]}
                        item={item}/>
                    <ListSideButtons
                        action={context.moveItem}
                        downDisabled={context.items.findIndex((i) => i === item) >= (context.items.length - 1)}
                        itemId={item.id}
                        upDisabled={context.items.findIndex((i) => i === item) < 1}/>
                </div>
        ))}
    </div>
}
