import React from "react";
import iteemsList from "./iteemsList";
const Contant = ({ items, handleCheck, handleDelete }) => {
  return (
    <main>
      {items.length ? (
        <iteemsList
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <p style={{ marginTop: "2rem" }}>Your List is Empty</p>
      )}
    </main>
  );
};

export default Contant;
