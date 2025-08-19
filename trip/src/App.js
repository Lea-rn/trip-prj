import { useState } from "react";
import "./index.css";

// const initialItems = [
//   { id: 1, description: "Passport", quantity: 2, packed: false },
//   { id: 2, description: "Socks", quantity: 12, packed: true },
// ];

function App() {
  const [item, setItems] = useState([]);
 

  function handleAdditems(newitem) {
    setItems((items) => [...items, newitem]);
    
  }

  function handleDeleteItem(id) {
    setItems(() => item.filter((obj) => obj.id !== id));
  }

  function handleToggleItem(id) {  //// 123
    setItems(() =>
      item.map((obj) => (obj.id === id ? { ...obj, packed: !obj.packed } : obj))
    );
  }


  
  return (
    <div>
      <Logo />
      <Form onAddItems={handleAdditems} />
      <PackingList item={item} onDeleteItem={handleDeleteItem} onToggleItem={handleToggleItem} />
      <Stats item={item} />
    </div>
  );
}

export default App;

function Logo() {
  return (
    <div className="logo-container">
      <h1> 🌴 Far Away 👜</h1>
    </div>
  );
}

function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = {
      description,
      quantity,
      packed: false,
      id: Date.now(),
    };
    onAddItems(newItem);
    setDescription("");
    setQuantity(1);
  }
  return (
    <div className="form-container">
      <h3> What do you need for your 😍 trip ? </h3>
      <form className="form" onSubmit={handleSubmit}>
        <select
          value={quantity}
          onChange={(e) => setQuantity(Number(e.target.value))}
        >
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

function PackingList({ item, onDeleteItem  , onToggleItem}) {
  return (
<section className="menu">
      <div className="list ">
        {item.map((ele) => {
          return <Item item={ele} key={ele.id} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem} />;
        })}

  

      </div>

    <div className="actions">
        <select>
          <option>Sort by input order</option>
          <option> Sort by description</option>
          <option>Sort by packed Status</option>
        </select>

      </div>

</section>
  );
}

function Item({ item, onDeleteItem , onToggleItem }) {

  //// derived state 


  return (
    <span className="item">
      <input type="checkbox" value={item.packed}  
      onChange={()=> onToggleItem(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </span>
  );
}

function Stats({item}) {

if (!item.length){
  return <footer>
    <strong>Start adding some items to your packing list </strong>
  </footer>
}

  const numItem = item.length
  const numPacked = item.filter((obj)=> obj.packed).length
  const percentage = Math.round ((numPacked/ numItem) * 100 )


  return (
    <footer>
      <strong>
        {percentage === 100 ? "you got everything ! Ready to go 🛬"  : `
        👜 You have ${numItem} items on your list , and you already packed ${numPacked} (${percentage}%)
        ` }
        
      </strong>
    </footer>
  );
}
