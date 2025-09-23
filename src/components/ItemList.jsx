import ItemCard from "./ItemCard.jsx";

export default function ItemList({ items }) {
  // Renderiza un grid de productos. IMPORTANTEEEE: usar key estable!!!!! (id) <<<<<<====================
  return (
    <div className="grid">
      {items.map((p) => (
        <ItemCard key={p.id} item={p} />
      ))}
    </div>
  );
}
