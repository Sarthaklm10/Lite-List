import { useState } from "react";
import "./../styles.css";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
    console.log(item);
  }

  function handleDeleleItem(id) {
    const [itm] = items.filter((item) => item.id === id);
    console.log("DELETING product", itm.description);
    setItems(() => items.filter((elt) => elt.id !== id));
  }

  function handleToggleItem(id) {
    setItems(() =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
    console.log("onToggleItem running...");
  }

  function handleClearList() {
    const confirmed = window.confirm(
      "ARE YOU SURE YOU WANT TO CLEAR THE LIST ?"
    );
    console.log("Clearing List");
    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleleItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
