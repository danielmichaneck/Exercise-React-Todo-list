import { ReactElement, useState } from "react";
import { IItem } from "..";

interface ItemFormProps {
    addOrUpdate: "Add" | "Edit";
    id?: number,
    itemName?: string;
    itemDescription?: string;
    itemAuthor?: string;
    itemTimestamp?: number;
    nameOfItem: string;
    handleOnSubmit: (item: IItem) => void;
}

function getStringValue(prop: string | undefined): string {
    if (prop !== undefined) {
        return prop;
    }
    return "";
}

function checkStringEmpty(str: string): boolean {
    return str.trim().length < 1;
}

export function ItemForm(props: ItemFormProps): ReactElement {
    const[itemName, setItemName] = useState<string>(getStringValue(props.itemName));
    const[itemDescription, setItemDescription] = useState<string>(getStringValue(props.itemDescription));
    const[itemAuthor, setItemAuthor] = useState<string>(getStringValue(props.itemAuthor));
    const[hiddenText, setHiddenText] = useState<string>("form-submitted-text-hidden");
    const[submittedName, setSubmittedName] = useState<string>("");
    const[submittedDescription, setSubmittedDescription] = useState<string>("");
    const[submittedAuthor, setSubmittedAuthor] = useState<string>("");


    let validName: boolean = false;
    let validDescription: boolean = false;
    let validAuthor: boolean = false;
    let validForm: boolean = false;
    const checkForm = () => {
        validName = !checkStringEmpty(itemName);
        validDescription = !checkStringEmpty(itemDescription);
        validAuthor = !checkStringEmpty(itemAuthor);
        validForm = (validName && validDescription && validAuthor);
    }
    checkForm();

    const handleOnSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault();
        checkForm();
        if (validForm) {
            let timestamp = Date.now();
            if (props.itemTimestamp !== undefined) {
                timestamp = props.itemTimestamp;
            }
            let id: number = timestamp;
            if (props.id !== undefined) {
                id = props.id;
            }
            const submitItem: IItem = {
                id: id,
                author: itemAuthor,
                name: itemName,
                description: itemDescription,
                timestamp: timestamp
            };
            props.handleOnSubmit(submitItem);
            setSubmittedName(itemName);
            setSubmittedDescription(itemDescription);
            setSubmittedAuthor(itemAuthor);
            setHiddenText("");
            setItemName("");
            setItemDescription("");
            setItemAuthor("");
        }
    }

    const handleOnChangeName: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setItemName(e.target.value);
        checkForm();
    }

    const handleOnChangeDescription: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
        setItemDescription(e.target.value);
        checkForm();
    }

    const handleOnChangeAuthor: React.ChangeEventHandler<HTMLInputElement> = (e) => {
        setItemAuthor(e.target.value);
        checkForm();
    }

    return <form className="form" onSubmit={handleOnSubmit}>
        <h1 className="form-header">{props.addOrUpdate} {props.nameOfItem.toLocaleLowerCase()}</h1>
        <span className="form-text-row">
            <p>Name</p>
            <p className={validName? "form-text-required-valid" : "form-text-required"}>
            {validName? <span className="material-symbols-outlined">verified</span> : "Required"}
            </p>
        </span>
        <input
            className="form-text-field"
            type="text"
            placeholder={"Name"}
            value={itemName}
            onChange={handleOnChangeName}/>
        <span className="form-text-row">
            <p>Description</p>
            <p className={validDescription? "form-text-required-valid" : "form-text-required"}>
            {validDescription? <span className="material-symbols-outlined">verified</span> : "Required"}</p>
        </span>
        <textarea
            className="form-text-field"
            placeholder={"Description"}
            value={itemDescription}
            onChange={handleOnChangeDescription}/>
        <span className="form-text-row">
            <p>Author</p>
            <p className={validAuthor? "form-text-required-valid" : "form-text-required"}>
            {validAuthor? <span className="material-symbols-outlined">verified</span> : "Required"}</p>
        </span>
        <input
            className="form-text-field"
            type="text"
            placeholder={"Author"}
            value={itemAuthor}
            onChange={handleOnChangeAuthor}/>
        <button className={validForm? "button-template form-submit-button" : "button-template form-submit-button form-disabled-button"} type="submit">Submit {props.nameOfItem.toLocaleLowerCase()}</button>
        <div className={hiddenText}>
            <h2>{props.nameOfItem} {props.addOrUpdate.toLocaleLowerCase()}ed</h2>
            <p>{submittedName}</p>
            <p>{submittedDescription}</p>
            <p>{submittedAuthor}</p>
        </div>
    </form>
}