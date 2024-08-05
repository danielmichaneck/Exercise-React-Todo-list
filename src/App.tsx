import { useState } from "react";
import { List } from "./components/List";
import { AddListItem } from "./components/AddListItem";

export function App() {
  const[items, setItems] = useState<{ name: string; description: string; timestamp: number; }[]>([]);

  const addItemToList = (item: { name: string, description: string, timestamp: number; } ) => {
    setItems((previousItems) => [item, ...previousItems]);
  }

  return (
    <>
      <h1>Todo-list</h1>
      <AddListItem addItem={addItemToList}/>
      <List items={items}/>
    </>
  );
}
