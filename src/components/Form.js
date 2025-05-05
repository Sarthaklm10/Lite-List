import { useState } from "react";

export default function Form({ onAddItems }) {
  const [description, setDesc] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(ev) {
    ev.preventDefault();

    if (!description.trim()) return;
    const newItem = { description, quantity, packed: false, id: Date.now() };
    onAddItems(newItem);
    setDesc("");
    setQuantity(1);
  }

  return (
    <form className="add-form" onSubmit={(ev) => handleSubmit(ev)}>
      <h3>What do you need for the trip?</h3>
      <select
        value={quantity}
        onChange={(ev) => {
          console.log(ev.target);
          setQuantity(Number(ev.target.value));
        }}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item ..."
        value={description}
        onChange={(ev) => {
          console.log(ev.target);
          setDesc(ev.target.value);
        }}
      />
      <button> ADD </button>
    </form>
  );
}
