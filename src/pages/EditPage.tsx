import { ReactElement } from "react";
import { useItemListContext } from "../hooks";
import { ItemForm } from "../components/ItemForm";
import { Link } from "react-router-dom";

export function EditPage(): ReactElement {
    const context = useItemListContext();
    const currentItem = context.items.find((item) => item.id === context.currentItemKey);

    if (currentItem === undefined) {
        return <h1>No item!</h1>
    }

    return <div>
        <Link to="/">Return to list</Link>
        <ItemForm 
            id={currentItem!.id}
            itemName={currentItem!.name}
            itemDescription={currentItem!.description}
            itemAuthor={currentItem!.author}
            itemTimestamp={currentItem!.timestamp}
            nameOfItem={context.data.nameOfItem}
            handleOnSubmit={context.updateItemInList}
        />
    </div>
}