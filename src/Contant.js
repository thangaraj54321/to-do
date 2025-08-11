import React from "react";

const Contant = () => {
  function changeName() {
    const name = ["learn", "Earn", "use"];
    const int = Math.floor(Math.random() * 3);
    return name[int];
  }
  const handleClick = () =>{
    console.log('add a good future')
  }
   const handleClick3 = (name) =>{
    console.log('add a good future ${name}')
  }
  return (
    <main>
      <p> Let's {changeName()} Money</p>
      <button onClick={() =>handleClick3('thanga')}> Learnn React</button>
    </main>
  );
};

export default Contant;
