import { IData } from ".";

/* Helper functions */
export const getRandomTimestamp = (): number => {
    return Math.random() * 2000000000000;
}

export const getLoremIpsum = (length: number):string => {
    const loremIpsum: string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam at neque sit amet metus consectetur euismod vitae sed nibh. Pellentesque malesuada dignissim enim, at tincidunt arcu laoreet in. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec auctor id dolor sit amet mollis. Donec laoreet turpis ultricies, ultrices sem ac, mollis leo. Donec a leo at sapien cursus varius. Sed sit amet cursus enim. Etiam enim leo, ornare id posuere eu, dapibus at urna. Vivamus lobortis orci sit amet libero placerat, at molestie urna condimentum. In hac habitasse platea dictumst. Vivamus non felis justo. Suspendisse quis malesuada leo. Maecenas convallis mi vitae tempor egestas. Proin eget est eros. Quisque at nibh quis massa fringilla vulputate. Nulla eu odio id diam consectetur viverra id non justo. Phasellus at enim viverra quam luctus dignissim. Sed sem libero, dapibus quis nibh vel, condimentum fringilla nisl. Suspendisse consectetur non arcu ut commodo. Ut vel vehicula elit. Etiam id eros varius, scelerisque justo non, ultrices nisi. Curabitur metus enim, ornare non risus et, suscipit tristique justo. Fusce sit amet suscipit lorem, vitae rutrum sapien. Pellentesque mollis sapien a lacus pharetra fringilla. Donec erat lacus, ultrices sed pharetra a, scelerisque nec enim. Suspendisse et est id augue suscipit viverra. Proin nec metus eget mauris dignissim sodales. Nunc posuere volutpat placerat. Sed lacinia massa vulputate, vestibulum eros a, semper eros. Suspendisse potenti. Integer imperdiet in mauris at efficitur. Phasellus sit amet hendrerit leo. Nunc non erat sed arcu condimentum laoreet. Duis sit amet lorem odio. Donec vel massa id neque sagittis auctor. Morbi non blandit turpis. Fusce feugiat nunc eget rutrum feugiat. Integer non nisl odio. Etiam et suscipit leo, nec lacinia dolor. Maecenas nec tortor non erat volutpat posuere id ac ipsum. Etiam fermentum lectus ut sem venenatis eleifend. Morbi ac odio leo. Aenean molestie elit sit amet augue pharetra, in vulputate ante mollis. Fusce diam eros, feugiat a iaculis eget, accumsan eget lectus. Sed condimentum sem at elit efficitur porta. Nunc vulputate vitae lorem sed porta. Donec a neque ut arcu convallis pretium. Pellentesque dictum pellentesque urna, non luctus tellus placerat sit amet. Praesent mauris ligula, facilisis nec tellus eu, pretium tempor tellus. Curabitur massa felis, cursus non ex nec, tempor ultrices velit. Nulla eu fringilla dolor. Quisque id eleifend sapien. Nullam sed ligula quis est porttitor ultricies in sed lectus. Aliquam a sem viverra, lacinia enim sed, hendrerit augue. Fusce laoreet feugiat lacus, vitae tempor arcu varius eget. Nulla et est vitae felis scelerisque posuere. Fusce aliquam augue elit, at egestas sapien feugiat in. Vivamus pulvinar blandit mi, id cursus elit. Nulla facilisi. Mauris sed quam mauris. Sed porta turpis ac dui semper scelerisque."
    return loremIpsum.slice(0, length);
}

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
        },
        {
            id: "5",
            author: getLoremIpsum(100),
            description: getLoremIpsum(1000),
            name: getLoremIpsum(11),
            timestamp: getRandomTimestamp()
        },
        {
            id: "6",
            author: getLoremIpsum(1000),
            description: getLoremIpsum(10000),
            name: getLoremIpsum(100),
            timestamp: getRandomTimestamp()
        }
    ]
}