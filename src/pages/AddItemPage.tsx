import { ReactElement, useState } from "react";
import { useItemListContext } from "../hooks";
import { ItemForm } from "../components";

export function AddItemPage(): ReactElement {
    const context = useItemListContext();
    
    return <div>
        <ItemForm
            addOrUpdate="Add"
            nameOfItem={context.data.nameOfItem}
            handleOnSubmit={context.addItemToList}/>
    </div>
}