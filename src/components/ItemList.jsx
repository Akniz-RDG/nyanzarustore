// ItemList.jsx
import React from "react";
import Item from "./Item";
import "../css/Item.css"; // para que tome el estilo

export default function ItemList({ data }) {
  return (
    <section className="product-section">
      <div className="product-grid">
        {data.map((prod) => (
          <Item key={prod.id} prod={prod} />
        ))}
      </div>
    </section>
  );
}