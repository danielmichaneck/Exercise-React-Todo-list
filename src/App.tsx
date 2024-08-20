import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Header } from "./components";
import { data, IItem, IItemListContext } from ".";

export function App() {
  const navigate = useNavigate();
  const[items, setItems] = useState<IItem[]>([]);
  const[currentItemKey, setCurrentItemKey] = useState<string>("");
  const[sortedBy, setSortedBy] = useState<"author" | "date" | "other">("other");

  async function getDataFromDB() {
    const url = "https://localhost:7108/api/TodoItems";
    const response = await fetch(url);
    const result = await response.json();
    let items: IItem[];
    result.forEach(item => {
      items.push({
        id: item.id,
        name: item.name,
        
      });
    });
    console.log("data");
    console.log(result);
  }

  getDataFromDB();

  const addItemToList = (item: IItem ) => {
    setItems((previousItems) => [item, ...previousItems]);
    setCurrentItemKey(item.id);
    console.log("Adding item to items: " + item.id)
  }

  const editItem = (id: string ) => {
    setCurrentItemKey(id);
    navigate("/edit");
  }

  const moveItem = (id: string, up: boolean) => {
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

  const removeItemFromList = (id: string) => {
    setItems((previousItems) => previousItems.filter((item) => item.id !== id));
    console.log("Removing item from items: " + id);
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
