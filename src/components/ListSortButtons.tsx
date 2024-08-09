import { ReactElement, ReactNode } from "react";

interface ListSortButtonsProps {
    disabled: boolean;
    sort: (sortBy: "author" | "timestamp") => void;
    sortedBy: "author" | "date" | "other";
}

export function ListSortButtons(props: ListSortButtonsProps): ReactElement {
    const sortByAuthorText: ReactNode = <span className="list-sort-span"><p>Sort by author </p>
        {props.sortedBy === "author"?
            <span className="material-symbols-outlined">arrow_downward</span> :
            <span className="material-symbols-outlined">arrow_upward</span>}
        </span>;

    const sortByDateText: ReactNode = <span className="list-sort-span"><p>Sort by date </p>
        {props.sortedBy === "date"?
            <span className="material-symbols-outlined">arrow_downward</span> :
            <span className="material-symbols-outlined">arrow_upward</span>}
        </span>;

    const handleOnClickSortByAuthor = () => {
        props.sort("author");
    }

    const handleOnClickSortByTimestamp = () => {
        props.sort("timestamp");
    }

    return <div className="list-sort-buttons">
        <button className="button-template" disabled={props.disabled} onClick={handleOnClickSortByAuthor}>{sortByAuthorText}</button>
        <button className="button-template" disabled={props.disabled} onClick={handleOnClickSortByTimestamp}>{sortByDateText}</button>
    </div>
}