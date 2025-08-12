import React from "react";

const Contant = () => {
  function changeName() {
    const name = ["learn", "Earn", "use"];
    const int = Math.floor(Math.random() * 3);
    return name[int];
  }
  const handleClick =(e) =>{
    console.log(e.target.innerText)
  }

    const handleClick3 =(name) =>{
    console.log('earn money ')
  }

  return (
    <main>
      <p onDoubleCliick={() => handleClick3('thanga')}>  Let's {changeName()} Money</p>
      <button onClick={(e) =>handleClick(e)}> Learnn React</button>
    </main>
  );
};

export default Contant;
