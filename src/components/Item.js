export default function Item({ Obj, onDeleteItem, onToggleItem }) {
  return (
    <li>
      <span style={Obj.packed ? { textDecoration: "line-through" } : {}}>
        <input
          type="checkbox"
          value={Obj.packed}
          onChange={() => onToggleItem(Obj.id)}
        />{" "}
        {Obj.quantity}
        {Obj.description}
      </span>

      <button onClick={() => onDeleteItem(Obj.id)}>❌</button>
    </li>
  );
}
