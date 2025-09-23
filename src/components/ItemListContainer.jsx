import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../data/products.js";
import ItemList from "./ItemList.jsx";

export default function ItemListContainer({ greeting }) {
  // Lee el segmento dinámico de la URL: /category/:categoryId
  const { categoryId } = useParams();

  // Estado local para datos, carga y error
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);   // indicador de carga
  const [error, setError] = useState(null);       // mensaje de error si falla

  useEffect(() => {
    // Cada vez que cambia la categoría en la URL, recargamos
    setLoading(true);
    setError(null);

    // Simula un "fetch" con Promises y retardo
    getProducts(categoryId)
      .then(setItems)                // si ok → guardar productos
      .catch((e) => setError(e.message)) // si falla → guardar error
      .finally(() => setLoading(false));  // en todos los casos → fin de carga
  }, [categoryId]); // ⚠️ dependencia clave: actualiza al cambiar categoría

  if (loading) return <p>Cargando catálogo…</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <section>
      {/* Saludo opcional que viene por props */}
      {greeting && <h2>{greeting}</h2>}

      {/* Mensaje contextual según haya filtro o no */}
      {categoryId ? (
        <p className="muted">Filtrando por categoría: <strong>{categoryId}</strong></p>
      ) : (
        <p className="muted">Todos los productos</p>
      )}

      {/* Componente de presentación que lista tarjetas */}
      <ItemList items={items} />
    </section>
  );
}
