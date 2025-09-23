import { useState } from "react";

export default function ItemCount({ stock = 0, initial = 1, onAdd }) {
  // Estado de la cantidad a agregar
  const [qty, setQty] = useState(initial);

  // Incrementa y decrementa dentro de límites válidos
  const inc = () => setQty((q) => Math.min(stock, q + 1)); // FORMULA ASISTIDA POR CHATGPT: clamp superior <----------------------
  const dec = () => setQty((q) => Math.max(1, q - 1));     // FORMULA ASISTIDA POR CHATGPT: clamp inferior <----------------------

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 12 }}>
      {/* Botón - deshabilita si ya está en 1 */}
      <button className="btn" onClick={dec} disabled={qty <= 1}>-</button>

      {/* Cantidad actual */}
      <span>{qty}</span>

      {/* Botón + deshabilita si alcanza stock */}
      <button className="btn" onClick={inc} disabled={qty >= stock}>+</button>

      {/* Acción principal: delega el agregado al padre (o al contexto) */}
      <button
        className="btn"
        onClick={() => onAdd?.(qty)} // onAdd es opcional, por eso el ?
        disabled={stock === 0}       // no permite agregar si no hay stock
      >
        Agregar al carrito
      </button>
    </div>
  );
}
