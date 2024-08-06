import { createBrowserRouter } from "react-router-dom";
import { App } from "./App";
import { ListPage, AddItemPage } from "./pages";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "list", element: <ListPage /> },
            { path: "add-item", element: <AddItemPage /> }
        ]
    }
])