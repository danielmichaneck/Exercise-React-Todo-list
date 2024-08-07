import { useState } from "react";
import { Outlet } from "react-router-dom";
import { IItem, IItemListContext } from "./interfaces";
import { Header } from "./components";
import { data } from "./data";

export function App() {
  const[items, setItems] = useState<IItem[]>([]);

  const addItemToList = (item: IItem ) => {
    setItems((previousItems) => [item, ...previousItems]);
    console.log("Adding item to items: " + items + " Items has length: " + items.length)
  }

  const editItemInList = (item: IItem ) => {
    console.log("Editing item");
  }

  const removeItemFromList = (id: string) => {
    setItems((previousItems) => previousItems.filter((item) => item.id !== id));
  }

  const itemListContext: IItemListContext = {
    currentItemKey: undefined,
    data: data,
    items: items,
    addItemToList: addItemToList,
    editItemInList: editItemInList,
    removeItemFromList: removeItemFromList
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
