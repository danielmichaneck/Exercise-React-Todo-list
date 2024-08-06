import { useState } from "react";
import { Outlet } from "react-router-dom";
import { IItem, IItemListContext } from "./interfaces";
import { Header } from "./components";

export function App() {
  const[items, setItems] = useState<IItem[]>([]);

  const addItemToList = (item: IItem ) => {
    setItems((previousItems) => [item, ...previousItems]);
    console.log("Adding item to items: " + items + " Items has length: " + items.length)
  }

  const removeItemFromList = (id: string) => {
    setItems((previousItems) => previousItems.filter((item) => item.id !== id));
  }

  const itemListContext: IItemListContext = {
    items: items,
    addItemToList: addItemToList,
    removeItemFromList: removeItemFromList
  }

  return (
    <div className="content">
      <Header/>
      <Outlet context={itemListContext}/>
    </div>
  );
}
