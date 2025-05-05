export default function Stats({ items }) {
  if (items.length === 0)
    return (
      <p className="stats">
        <em>START ADDING ITEMS TO BAG!</em>
      </p>
    );

  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed === true).length;
  return (
    <footer>
      <em>
        {numItems !== 0 && numItems === numPacked
          ? "ALL PACKED!"
          : ` You have ${numItems}
      items in your list, and you have packed ${numPacked} of them!`}
      </em>
    </footer>
  );
}
