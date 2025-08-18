import React from "react";

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
