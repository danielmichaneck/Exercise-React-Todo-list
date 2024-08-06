export interface IData {
    about: string;
    header: string;
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
    data: IData;
    items: IItem[];
    addItemToList: (item: IItem) => void;
    removeItemFromList: (id: string) => void;
}

export interface ILink {
    text: string;
    to: string;
}