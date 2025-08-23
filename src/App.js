import Header from "./Header";
import Footer from "./Footer";
import Contant from "./Contant";
import { useState } from "react";


function App() {
  const [items, setItems] = useState([
    { id: 1, checked: true, item: "thanga" },
    { id: 2, checked: true, item: "sumathi" },
    { id: 3, checked: true, item: "playing Volleyball" },
  ]);

  const [newItem, setNewItem] = useState("");

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const newEntry = { id, checked: false, item };
    const listItem = [...items, newEntry];
    setItems(listItem);
    localStorage.setItem("todo_list", JSON.stringify(listItem));
  };

  const handleCheck = (id) => {
    const listItem = items.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setItems(listItem);
    localStorage.setItem("todo_list", JSON.stringify(listItem));
  };

  const handleDelete = (id) => {
    const listItem = items.filter((item) => item.id !== id);
    setItems(listItem);
    localStorage.setItem("todo_list", JSON.stringify(listItem));
  };

  const addSumrit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    setNewItem("");
  };

  return (
    <div className="App">
      <Header title="Thangaraj Universe" />

      {/* ✅ Add new item form */}
      <form onSubmit={addSumrit}>
        <input
          type="text"
          placeholder="Add new item"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>

      <Contant
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />

      <Footer length={items.length} />
    </div>
  );
}

export default App;
