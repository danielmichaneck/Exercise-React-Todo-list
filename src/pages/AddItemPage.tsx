import { ReactElement, useState } from "react";
import { useItemListContext } from "../hooks";
import { IItem } from "../interfaces";

export function AddItemPage(): ReactElement {
    const context = useItemListContext();
    const[itemName, setItemName] = useState<string>("");
    const[itemDescription, setItemDescription] = useState<string>("");
    const[itemAuthor, setItemAuthor] = useState<string>("");
    const { addItemToList } = useItemListContext();

    const handleOnChangeName: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setItemName(e.target.value);
    }

    const handleOnChangeDescription: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
        setItemDescription(e.target.value);
    }

    const handleOnChangeAuthor: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setItemAuthor(e.target.value);
    }

    const handleOnSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        const timestamp = Date.now();
        const newItem: IItem = {
            id: itemName + timestamp,
            author: itemAuthor,
            name: itemName,
            description: itemDescription,
            timestamp: timestamp
        };
        addItemToList(newItem);
    }

    return <form className="form" onSubmit={handleOnSubmit}>
        <input
            type="text"
            placeholder={context.data.nameOfItem}
            value={itemName}
            onChange={handleOnChangeName}/>
        <textarea
            placeholder="Details"
            value={itemDescription}
            onChange={handleOnChangeDescription}/>
        <input
            type="text"
            placeholder="Author"
            value={itemAuthor}
            onChange={handleOnChangeAuthor}/>
        <button type="submit">Add {context.data.nameOfItem.toLocaleLowerCase()}</button>
    </form>
}