import Header from "./Header"; 
import Footer from "./Footer"; 
import Contant from "./Contant";
import { useState } from "react";




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
      <Header title= "Thangaraj Universe"/>
      <Contant 
      items = {items}
      handleCheck = {handleCheck}
      handleDelete = {handleDelete}
     
      />
      <Footer 
       length = {items.length}
      />
    </div>
  );
}

export default App;
