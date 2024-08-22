import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Header } from "./components";
import { data, IItem, IItemDTO, IItemListContext } from ".";

export function App() {
  const navigate = useNavigate();
  const[items, setItems] = useState<IItem[]>([]);
  const[currentItemKey, setCurrentItemKey] = useState<number>(0);
  const[sortedBy, setSortedBy] = useState<"author" | "date" | "other">("other");

  useEffect(() => {
    getDataFromDB();
  }, [])

  const url = "https://localhost:7108/api/TodoItems";

  async function getDataFromDB() {
    const response = await fetch(url);
    const result: any = await response.json();
    let items: IItem[] = [];
    result.forEach((item: IItemDTO) => {
      items.push({
        id: parseInt(item.id),
        author: item.author,
        description: item.description,
        name: item.name,
        timestamp: parseInt(item.timestamp)
      });
    });
    console.log("data");
    console.log(items);
    setItems(items);
  }

  const addItemToList = (item: IItem ) => {
    setCurrentItemKey(item.id);
    console.log("Adding item to items: " + item.id)

    const itemDTO = {
      id: item.id.toString(),
      author: item.author,
      description: item.description,
      name: item.name,
      timestamp: item.timestamp.toString()
    }

    console.log(JSON.stringify(itemDTO));

    fetch(url, {
      method: 'POST',
      headers: {  
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(itemDTO)
    })
    .then(() => getDataFromDB())
    .catch(error => console.error('Unable to add item.', error));
  }

  const editItem = (id: number ) => {
    setCurrentItemKey(id);
    navigate("/edit");
  }

  const moveItem = (id: number, up: boolean) => {
    console.log("Moving item: " + id);
    const item = items.find((item) => item.id === id);
    const index = items.findIndex((item) => item.id === id);
    if (up && index > 0 && item !== undefined) {
      const newItems = [...items];
      newItems[index] = newItems[index - 1];
      newItems[index - 1] = item;
      setItems(newItems);
    }
    else if (index < items.length - 1 && item !== undefined) {
      const newItems = [...items];
      newItems[index] = newItems[index + 1];
      newItems[index + 1] = item;
      setItems(newItems);
    }
  }

  const removeItemFromList = (id: number) => {
    //setItems((previousItems) => previousItems.filter((item) => item.id !== id));
    console.log("Removing item from items: " + id);
    fetch(url + "/" + id, {
      method: 'DELETE',
      headers: {  
        'Accept': '*/*',
      },
    })
    .then(() => getDataFromDB())
    .catch(error => console.error('Unable to remove item.', error));
  }

  const sortList = (sortBy: "author" | "timestamp") => {
    const sortedList = [...items];
    if (sortBy === "author") {
      if (sortedBy === "author") {
        setSortedBy("other");
        sortedList.sort((itemA, itemB) => itemA.timestamp - itemB.timestamp);
        sortedList.sort((itemA, itemB) => itemB.author.localeCompare(itemA.author));
      } else {
        setSortedBy("author");
        sortedList.sort((itemA, itemB) => itemA.timestamp - itemB.timestamp);
        sortedList.sort((itemA, itemB) => itemA.author.localeCompare(itemB.author));
      }
    }
    else {
      if (sortedBy === "date") {
        setSortedBy("other");
        sortedList.sort((itemA, itemB) => itemA.timestamp - itemB.timestamp);
      }
      else {
        setSortedBy("date");
        sortedList.sort((itemA, itemB) => itemB.timestamp - itemA.timestamp);        
      }
    }
    setItems(sortedList);
  }

  const updateItemInList = (item: IItem ) => {
    console.log("Editing item in items: " + item.id);
    removeItemFromList(item.id);
    addItemToList(item);
    navigate("/");
  }

  const itemListContext: IItemListContext = {
    currentItemKey: currentItemKey,
    data: data,
    items: items,
    sortedBy: sortedBy,
    addItemToList: addItemToList,
    editItem: editItem,
    moveItem: moveItem,
    removeItemFromList: removeItemFromList,
    sortList: sortList,
    updateItemInList: updateItemInList
  }

  return (
    <div className="content">
      <Header text={data.header} links={data.links}/>
      <div className="body">
        <Outlet context={itemListContext}/>
      </div>
    </div>
  );
}
