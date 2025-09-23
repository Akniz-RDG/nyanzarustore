import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../data/products.js";
import ItemDetail from "./ItemDetail.jsx";

export default function ItemDetailContainer() {
  // Lee el :id de la URL (por ejemplo /item/3)
  const { id } = useParams();

  // Estado local del producto y del ciclo de carga
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Cada vez que cambia el id de la URL, traemos el nuevo detalle
    setLoading(true);
    setError(null);

    getProductById(id)
      .then(setItem)                     // si ok → guardamos el producto
      .catch((e) => setError(e.message)) // si falla → guardamos error
      .finally(() => setLoading(false)); // fin de carga
  }, [id]); // ⚠️ dependencia clave: se actualiza al cambiar la URL

  if (loading) return <p>Cargando detalle…</p>;
  if (error) return <p>Error: {error}</p>;
  if (!item) return <p>No se encontró el producto.</p>;

  // Renderiza la vista de presentación (sin lógica de fetch)
  return <ItemDetail item={item} />;
}
