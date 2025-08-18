import Header from "./Header"; //
import Content from "./Content"; // ✅ corrected
import Footer from "./Footer"; 
import React, { useState } from "react";

function App() {
  const [items, setItems] = useState([
    { id: 1, checked: true, item: "thanga" },
    { id: 2, checked: true, item: "sumathi" },
    { id: 3, checked: true, item: "playing Vollyball" },
  ]);

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

  return (
    <div className="App">
      <Header title="thanga" />
      <Content
        items={items}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer />
    </div>
  );
}

export default App;
