import { IData, IItem, IItemListContext } from ".";

export const data: IData = {
    about: "This is a to-do list! Add your own tasks on the \"Add task\" page and view them on the \"List\" page.",
    header: "To-do list",
    nameOfItem: "Task",
    nameOfItemPlural: "Tasks",
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
    ],
    listSeed: [
        {
            id: "1",
            author: "Daniel",
            description: "The first task.",
            name: "1",
            timestamp: 1700000000000
        },
        {
            id: "2",
            author: "Jonatan",
            description: "The second task.",
            name: "2",
            timestamp: 1700110000000
        },
        {
            id: "3",
            author: "Mats",
            description: "The third task.",
            name: "3",
            timestamp: 1700220000000
        },
        {
            id: "4",
            author: "Erika",
            description: "The fourth task.",
            name: "4",
            timestamp: 1700330000000
        }
    ]
}