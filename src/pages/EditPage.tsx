import { ReactElement } from "react";
import { useItemListContext } from "../hooks";

export function EditPage(): ReactElement {
    const context = useItemListContext();

    if (context.currentItemKey !== undefined) {
        
    }
//<p>{data.about} There are {items.length} items in the list.</p>
    return <div>
        
    </div>
}