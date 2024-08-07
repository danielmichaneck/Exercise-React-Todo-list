import { createBrowserRouter } from "react-router-dom";
import { App } from "./App";
import { ListPage, AddItemPage, AboutPage } from "./pages";
import { EditPage } from "./pages/EditPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { path: "/", element: <ListPage /> },
            { path: "add-item", element: <AddItemPage /> },
            { path: "about", element: <AboutPage /> },
            { path: "edit", element: <EditPage /> }
        ]
    }
])