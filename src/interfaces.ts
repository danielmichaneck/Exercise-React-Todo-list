export interface IItemListContext {
    items: IItem[];
    addItemToList: (item: IItem) => void;
    removeItemFromList: (id: string) => void;
}

export interface IItem {
    id: string;
    author: string;
    name: string;
    description: string;
    timestamp: number;
}