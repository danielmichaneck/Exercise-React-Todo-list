import { createBrowserRouter } from "react-router-dom";

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