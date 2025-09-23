// COMPONENTE PARA MOSTRAR LAS TARJETAS DEL PRODUCTO

import { Link } from "react-router-dom";

export default function ItemCard({ item }) {
  // Desestructura los campos que la tarjeta necesita
  const { id, title, price, image } = item;

  return (
    <article className="card">
      {/* Imagen del producto */}
      <img src={image} alt={title} />

      {/* Título y precio */}
      <h3>{title}</h3>
      <p className="price">${price.toLocaleString()}</p>

      {/* Enlace al detalle usando el id */}
      <Link className="btn" to={`/item/${id}`}>
        Ver detalle
      </Link>
    </article>
  );
}
