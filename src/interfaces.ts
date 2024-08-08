export interface IData {
    about: string;
    header: string;
    nameOfItem: string;
    nameOfItemPlural: string;
    links: ILink[];
    listItemButtons: IListItemButton[];
    listSeed: IItem[];
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
    editItem: (id: string) => void;
    moveItem: (id: string, up: boolean) => void;
    removeItemFromList: (id: string) => void;
    sortList: (sortBy: "author" | "timestamp") => void;
    updateItemInList: (item: IItem) => void;
}

export interface ILink {
    classes: string;
    text: string;
    to: string;
}

export interface IListItemButton {
    id: string;
    itemId?: string;
    linkTo?: string;
    text: string;
    action?: (param: string) => void;
}