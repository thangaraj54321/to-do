import { list } from "postcss";
import React from "react";
import { useState } from "react";
import { FaTrashAlt } from "react-icons/fa";



const Contant = () => {
  const [items,setItems] = useState(
    [
      {id:1,
        checked:false,
        item:"thanga"
      },
    
    {  id:2,
      checked:true,
      item:"roja"
    },
   {
    id:3,
    checked:true,
    item:"playing Vollyball"
   }]);
  return (
    <main>
         <ul>
             {items.map((item) =>(
            <li className="item" key={item.id}>
              <input 
              type="checkbox"
              checked = {item.checked}
              />
              <label>{item.item}</label>
              <FaTrashAlt 
                 role = "button"
                 tabIndex="0"
              />
            </li>
           ))}
         

         </ul>
     
    </main>
  );
};


export default Contant;
