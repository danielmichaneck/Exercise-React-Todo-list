import { ReactNode } from "react";

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
    id: number;
    author: string;
    description: string;
    name: string;
    timestamp: number;
}

export interface IItemListContext {
    currentItemKey: number | undefined;
    data: IData;
    items: IItem[];
    sortedBy: "author" | "date" | "other";
    addItemToList: (item: IItem) => void;
    editItem: (id: number) => void;
    moveItem: (id: number, up: boolean) => void;
    removeItemFromList: (id: number) => void;
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
    text: ReactNode;
    action?: (param: string) => void;
}