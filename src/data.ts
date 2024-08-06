import { IData } from ".";

export const data: IData = {
    about: "This is a to-do list! Add your own tasks on the \"Add task\" page and view them on the \"List\" page.",
    header: "To-do list",
    links: [
        {
            text: "List",
            to: "/"
        },
        {
            text: "Add task",
            to: "add-item"
        },
        {
            text: "About",
            to: "about"
        }
    ]
}