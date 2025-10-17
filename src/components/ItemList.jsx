import React from "react";
import Item from "./Item";

const ItemList = ({ data }) => {
  return (
    <section style={{ paddingTop: 60 }}>
      <h1
        style={{
          textAlign: "center",
          marginBottom: 40,
          color: "#1b1b1b",
          fontWeight: 800,
        }}
      >
        Bienvenidos al Círculo de Oro
      </h1>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "2rem",
        }}
      >
        {data.map((prod) => (
          <Item key={prod.id} prod={prod} />
        ))}
      </div>
    </section>
  );
};
export default ItemList;
