
import React from "react";
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";

const Contant = () => {
  const [items, setItems] = useState([
    { id: 1,
       checked: true,
       item: "thanga" },

    { id: 2, 
      checked: true,
       item: "sumathi" },
    {
      id: 3,
      checked: true,
      item: "playing Vollyball",
    },
  ]);
  const handleCheck = (id) => {
    const listItem = items.map((item) => item.
    id === id ? { checked:!item.checked} : item )
    setItems(listItem)
    localStorage.setItem("todo_list", JSON.stringify
      (listItem)
    )
  };
  const handleDelete = (id) =>{
    const listItem = items.filter((item) =>
    item.id!==id)
    setItems(listItem)
  }
  return (
    <main>
      <ul>
        {items.map((item) => (
          <li className="item" key={item.id}>
            <input
              type="checkbox"
              onChange={() => handleCheck(item.id)}
              checked={item.checked}
            />
            <label
           
             onDoubleClick={() => handleCheck(item.id)
             }>{item.item}</label>
            <FaTrashAlt 
            role="button" 
            onClick={() =>handleDelete(item.id)}
            tabIndex="0" />
          </li>
        ))}
      </ul>
    </main>
  );
};

export default Contant;
