import Header from "./Header";
import Footer from "./Footer";
import Contant from "./Contant";
import { useState } from "react";
import JoinItem from "./JoinItem";

function App() {
  const [items, setItems] = useState([
    { id: 1, checked: true, item: "thanga" },
    { id: 2, checked: true, item: "sumathi" },
    { id: 3, checked: true, item: "playing Vollyball" },
  ]);

  const [newItem, setNewItem] = useState('')

  const joinItem = (item) => {
    const id = items.length ? {id: items[items.length - 1].id + 1} : {id: 1}
    const AddSumrit = {id: Date.now(), checked: false, item}
    setItems((prevItems) => [...prevItems, AddSumrit])
  }

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
  const AddSumrit =(e) =>{
    e.preventDefault();
    if (!newItem)return
    console.log('newItem')
    //add
    setNewItem('')
  }

  return (
    <div className="App">
      <Header title="Thangaraj Universe" />
      <JoinItem
        newItem={newItem}
        setNewItem={setNewItem}
        AddSumrit={AddSumrit}
      />
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
