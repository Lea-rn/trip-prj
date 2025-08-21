import { useState } from "react";
import Item from "./item";
export default function PackingList({ item, onDeleteItem, onToggleItem , onClearList }) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;
  if (sortBy === "input") sortedItems = item;

  if (sortBy === "description") {
    sortedItems = item
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }

  if (sortBy === "packed") {
    sortedItems = item
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }
  return (
    <section className="menu">
      <div className="list ">
        {sortedItems.map((ele) => {
          return (
            <Item
              item={ele}
              key={ele.id}
              onDeleteItem={onDeleteItem}
              onToggleItem={onToggleItem}
            />
          );
        })}
      </div>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description"> Sort by description</option>
          <option value="packed">Sort by packed Status</option>
        </select>

        <button onClick={onClearList} className="btn-clear">Clear List</button>
      </div>
    </section>
  );
}