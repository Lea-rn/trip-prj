import { useState } from "react";
import "./index.css";
import Logo from "./componenets/logo.jsx";
import Form from "./componenets/form.jsx";
import PackingList from "./componenets/packinglist.jsx";
import Stats from "./componenets/stats.jsx";

function App() {
  const [item, setItems] = useState([]);

  function handleClearList() {
    const confirmed = window.confirm(
      "Are u sure u want to delete all items !!! "
    );

    if (confirmed) setItems([]);
  }

  function handleAdditems(newitem) {
    setItems((items) => [...items, newitem]);
  }

  function handleDeleteItem(id) {
    setItems(() => item.filter((obj) => obj.id !== id));
  }

  function handleToggleItem(id) {
    setItems(() =>
      item.map((obj) => (obj.id === id ? { ...obj, packed: !obj.packed } : obj))
    );
  }

  return (
    <div>
      <Logo />
      <Form onAddItems={handleAdditems} />
      <PackingList
        item={item}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats item={item} />
    </div>
  );
}

export default App;
