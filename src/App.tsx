import { useState } from "react";
import { List } from "./components/List";
import { AddListItem } from "./components/AddListItem";

export function App() {
  const[items, setItems] = useState<{ id: string, name: string; description: string; timestamp: number; }[]>([]);

  const addItemToList = (item: { id: string, name: string, description: string, timestamp: number; } ) => {
    setItems((previousItems) => [item, ...previousItems]);
  }

  const removeItemFromList = (id: string) => {
    setItems((previousItems) => previousItems.filter((item) => item.id !== id));
  }

  return (
    <>
      <h1>Todo-list</h1>
      <AddListItem addItem={addItemToList}/>
      <List items={items} listItemAction={removeItemFromList}/>
    </>
  );
}
