export interface IData {
    about: string;
    header: string;
    nameOfItem: string;
    links: ILink[];
    listItemButtons: IListItemButton[];
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

export interface IListItemButton {
    id: string;
    linkTo?: string;
    text: string;
    action?: (param: string) => void;
}