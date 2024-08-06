import { ReactElement } from "react";
import { Link } from "react-router-dom";

export function Header(): ReactElement {
    return <div className="header">
        <h1>To-do list</h1>
        <Link to="/">Task list</Link>
        <Link to="/add-item">Add new task</Link>
    </div>
}