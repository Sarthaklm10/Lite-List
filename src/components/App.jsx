import { useState } from "react";
import Logo from "./Logo.jsx";
import Form from "./Form.jsx";
import PackingList from "./PackingList.jsx";
import Stats from "./Stats.jsx";

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleleItem(id) {
    const element = document.querySelector(`[data-id="${id}"]`);
    if (element) {
      element.classList.add("removing");
      setTimeout(() => {
        setItems(() => items.filter((elt) => elt.id !== id));
      }, 300);
    } else {
      setItems(() => items.filter((elt) => elt.id !== id));
    }
  }

  function handleToggleItem(id) {
    setItems(() =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    const confirmed = window.confirm(
      "ARE YOU SURE YOU WANT TO CLEAR THE LIST ?"
    );
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
