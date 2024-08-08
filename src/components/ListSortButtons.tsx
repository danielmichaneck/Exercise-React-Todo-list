import { ReactElement } from "react";

interface ListSortButtonsProps {
    disabled: boolean;
    sort: (sortBy: "author" | "timestamp") => void;
}

export function ListSortButtons(props: ListSortButtonsProps): ReactElement {
    const handleOnClickSortByAuthor = () => {
        props.sort("author");
    }

    const handleOnClickSortByTimestamp = () => {
        props.sort("timestamp");
    }

    return <div className="list-sort-buttons">
        <button className="button-template" disabled={props.disabled} onClick={handleOnClickSortByAuthor}>Sort by author</button>
        <button className="button-template" disabled={props.disabled} onClick={handleOnClickSortByTimestamp}>Sort by timestamp</button>
    </div>
}