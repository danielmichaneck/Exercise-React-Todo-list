import { IData, IItem, IItemListContext } from ".";

export const data: IData = {
    about: "This is a to-do list! Add your own tasks on the \"Add task\" page and view them on the \"List\" page.",
    header: "To-do list",
    nameOfItem: "Task",
    links: [
        {
            classes: "header-link",
            text: "List",
            to: "/"
        },
        {
            classes: "header-link",
            text: "Add task",
            to: "/add-item"
        },
        {
            classes: "header-link",
            text: "About",
            to: "/about"
        }
    ],
    listItemButtons: [
        {
            id: "",
            linkTo: "/edit",
            text: "Edit"
        },
        {
            id: "",
            text: "Complete",
            action: () => {}
        },
        {
            id: "",
            text: "Completed"
        }
    ]
}