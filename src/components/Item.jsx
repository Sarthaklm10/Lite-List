export default function Item({ Obj, onDeleteItem, onToggleItem }) {
  return (
    <li data-id={Obj.id}>
      <span style={Obj.packed ? { textDecoration: "line-through", opacity: 0.7 } : {}}>
        <input
          type="checkbox"
          value={Obj.packed}
          onChange={() => onToggleItem(Obj.id)}
          checked={Obj.packed}
        />
        <span className="quantity">{Obj.quantity}</span>
        <span className="description">{Obj.description}</span>
      </span>

      <button onClick={() => onDeleteItem(Obj.id)}>🗑️</button>
    </li>
  );
}
