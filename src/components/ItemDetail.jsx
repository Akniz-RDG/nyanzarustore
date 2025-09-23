import ItemCount from "./ItemCount.jsx";

export default function ItemDetail({ item }) {
  // Recibe el producto elegido desde el contenedor
  const { title, price, description, image, stock } = item;

  // Manejador de agregar: en el futuro se conectará al CartContext
  const handleAdd = (qty) => {
    // FORMULA ASISTIDA POR CHATGPT: callback de integración con carrito
    alert(`Agregado: ${qty} unidad(es) de "${title}"`);
  };

  return (
    <section className="detail">
      {/* Columna imagen */}
      <img src={image} alt={title} />

      {/* Columna info */}
      <div>
        <h2>{title}</h2>
        <p className="price">${price.toLocaleString()}</p>
        <p className="muted">Stock: {stock}</p>
        <p>{description}</p>

        {/* Contador de unidades. onAdd llamará handleAdd(qty) */}
        <ItemCount stock={stock} initial={1} onAdd={handleAdd} />
      </div>
    </section>
  );
}
