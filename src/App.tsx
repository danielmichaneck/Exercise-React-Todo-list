import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { Header } from "./components";
import { data, IItem, IItemListContext } from ".";

export function App() {
  const navigate = useNavigate();
  const[items, setItems] = useState<IItem[]>([]);
  const[currentItemKey, setCurrentItemKey] = useState<string>("");

  const addItemToList = (item: IItem ) => {
    setItems((previousItems) => [item, ...previousItems]);
    setCurrentItemKey(item.id);
    console.log("Adding item to items: " + item.id)
    navigate("/");
  }

  const editItem = (id: string ) => {
    setCurrentItemKey(id);
    navigate("/edit");
  }

  const removeItemFromList = (id: string) => {
    setItems((previousItems) => previousItems.filter((item) => item.id !== id));
    console.log("Removing item from items: " + id);
  }

  const updateItemInList = (item: IItem ) => {
    console.log("Editing item in items: " + item.id);
    removeItemFromList(item.id);
    addItemToList(item);
  }

  const itemListContext: IItemListContext = {
    currentItemKey: currentItemKey,
    data: data,
    items: items,
    addItemToList: addItemToList,
    editItem: editItem,
    removeItemFromList: removeItemFromList,
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
