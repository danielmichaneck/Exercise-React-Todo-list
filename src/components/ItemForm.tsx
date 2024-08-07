import { ReactElement, useState } from "react";
import { IItem } from "..";

interface ItemFormProps {
    handleOnSubmit: (item: IItem, key?: string) => void;
    key?: string,
    itemName: string;
    itemDescription: string;
    itemAuthor: string;
    nameOfItem: string;
}

export function ItemForm(props: ItemFormProps): ReactElement {
    const[itemName, setItemName] = useState<string>(props.itemName);
    const[itemDescription, setItemDescription] = useState<string>(props.itemDescription);
    const[itemAuthor, setItemAuthor] = useState<string>(props.itemAuthor);

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
        props.handleOnSubmit(newItem, props.key);
    }

    const handleOnChangeName: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setItemName(e.target.value);
    }

    const handleOnChangeDescription: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
        setItemDescription(e.target.value);
    }

    const handleOnChangeAuthor: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setItemAuthor(e.target.value);
    }

    return <form className="form" onSubmit={handleOnSubmit}>
        <input
            type="text"
            placeholder={itemName}
            value={itemName}
            onChange={handleOnChangeName}/>
        <textarea
            placeholder={itemDescription}
            value={itemDescription}
            onChange={handleOnChangeDescription}/>
        <input
            type="text"
            placeholder={itemAuthor}
            value={itemAuthor}
            onChange={handleOnChangeAuthor}/>
        <button type="submit">Add {props.nameOfItem.toLocaleLowerCase()}</button>
    </form>
}