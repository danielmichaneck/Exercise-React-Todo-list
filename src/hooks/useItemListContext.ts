import { useOutletContext } from "react-router-dom";
import { IItemListContext } from "..";

export function useItemListContext(): IItemListContext {
    return useOutletContext<IItemListContext>();
}