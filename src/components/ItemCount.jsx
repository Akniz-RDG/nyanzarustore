import { useState } from "react"

const ItemCount = ({ stock = 10, initial = 1, onAdd }) => {
  const [count, setCount] = useState(initial)

  // Aumentar cantidad (sin pasar el stock disponible)
  const aumentar = () => {
    if (count < stock) {
      setCount(count + 1)
    }
  }

  // Disminuir cantidad (sin bajar de 1)
  const disminuir = () => {
    if (count > 1) {
      setCount(count - 1)
    }
  }

  // Confirmar cantidad elegida
  const agregar = () => {
    onAdd(count)
  }

  return (
    <div className="item-count">
      <div className="controls">
        <button onClick={disminuir}>-</button>
        <span>{count}</span>
        <button onClick={aumentar}>+</button>
      </div>
      <button onClick={agregar}>Agregar al carrito</button>
    </div>
  )
}

export default ItemCount
