import { useState } from "react";
import "./index.css";

const initialItems = [
  { id: 1, description: "Passport", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
];

function Logo() {
  return (
    <div className="logo-container">
      <h1> 🌴 Far Away 👜</h1>
    </div>
  );
}

function Form() {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return ;
    const newItem = {
       description,
       quantity,
      packed: false,
      id: Date.now(),
    };
    console.log(newItem)
    setDescription("") ; 
    setQuantity(1)
  }
  return (
    <div className="form-container">
      <h3> What do you need for your 😍 trip ? </h3>
      <form className="form" onSubmit={handleSubmit}>
        <select value={quantity} onChange={(e) => setQuantity(Number(e.target.value))}>
          {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}>
              {num}
            </option>
          ))}
        </select>
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          placeholder="item ... "
        />
        <button>Add</button>
      </form>
    </div>
  );
}

function PackingList() {
  return (
    <div className="list ">
      {initialItems.map((ele) => {
        return <Item item={ele} key={ele.id} />;
      })}
    </div>
  );
}

function Item({ item }) {
  return (
    <span className="item">
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </span>
  );
}

function Stats() {
  return (
    <footer>
      <strong>
        👜 You have X items on your list , and you already packed X (X%)
      </strong>
    </footer>
  );
}

function App() {
  return (
    <div>
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

export default App;
