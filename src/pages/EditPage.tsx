import { ReactElement } from "react";
import { useItemListContext } from "../hooks";
import { ItemForm } from "../components/ItemForm";
import { Link } from "react-router-dom";

export function EditPage(): ReactElement {
    const context = useItemListContext();
    const currentItem = context.items.find((item) => item.id === context.currentItemKey);

    if (context.currentItemKey === undefined) {
        return <Link to="/">Return to list</Link>
    }

    return <div>
        <Link to="/">Return to list</Link>
        <ItemForm 
            key={currentItem!.id}
            itemName={currentItem!.name}
            itemDescription={currentItem!.description}
            itemAuthor={currentItem!.author}
            nameOfItem={context.data.nameOfItem}
            handleOnSubmit={context.editItemInList}
        />
    </div>
}