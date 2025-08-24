import Header from "./Header";
import Footer from "./Footer";
import Contant from "./Contant";
import { useState } from "react";
import SearchItem from "./SearchItem";

function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem("todo_list"))
 );

  const [newItem, setNewItem] = useState("");
  const [search, setSearch] =useState("")

  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const newvj = { id, checked: false, item };
   
    const listItem = [...items, newvj];
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
      <addItem
        newItem={newItem}
        setNewItem={setNewItem}
        addItem={addItem}
      />
      

      {/* ✅ Add new item form */}
      <form onSubmit={addSumrit}>
        <input
          type="text"
          placeholder="Add new item"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button type="submit">Add</button>
        <SearchItem
        search={search}
        setSearch={setSearch}
        />
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
