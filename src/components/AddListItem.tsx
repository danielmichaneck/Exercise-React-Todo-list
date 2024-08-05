import { ReactElement, useState } from "react";

interface AddListItemProps {
    addItem: (item: {
        id: string,
        author: string,
        name: string,
        description: string,
        timestamp: number;
    }) => void;
}

export function AddListItem({addItem}: AddListItemProps): ReactElement {
    const[itemName, setItemName] = useState<string>("");
    const[itemDescription, setItemDescription] = useState<string>("");
    const[itemAuthor, setItemAuthor] = useState<string>("");

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
        const newItem = {id: itemName + timestamp, author: itemAuthor, name: itemName, description: itemDescription, timestamp: timestamp};
        addItem(newItem);
    }

    return <form onSubmit={handleOnSubmit}>
        <input type="text" placeholder="Task name" value={itemName} onChange={handleOnChangeName}/>
        <textarea placeholder="Task description" value={itemDescription} onChange={handleOnChangeDescription}/>
        <input type="text" placeholder="Author" value={itemAuthor} onChange={handleOnChangeAuthor}/>
        <button type="submit">Add item</button>
    </form>
}