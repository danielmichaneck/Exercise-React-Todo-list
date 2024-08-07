export interface IData {
    about: string;
    header: string;
    nameOfItem: string;
    links: ILink[]; 
}

export interface IItem {
    id: string;
    author: string;
    name: string;
    description: string;
    timestamp: number;
}

export interface IItemListContext {
    currentItemKey: string | undefined;
    data: IData;
    items: IItem[];
    addItemToList: (item: IItem) => void;
    editItemInList: (item: IItem) => void;
    removeItemFromList: (id: string) => void;
}

export interface ILink {
    text: string;
    to: string;
}