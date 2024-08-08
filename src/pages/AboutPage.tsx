import { ReactElement } from "react";
import { useItemListContext } from "../hooks";

export function AboutPage(): ReactElement {
    const { data, items } = useItemListContext();

    return <div>
        <p>{data.about} There are currently {items.length} {data.nameOfItemPlural.toLocaleLowerCase()} in the list.</p>
    </div>
}