// Número hardcodeado para Pre-entrega 1
const CartWidget = () => {
  const hardcodedCount = 5
  return (
    <button className="cart-btn" aria-label="Carrito">
      <span className="cart-emoji">🧺</span>
      <span className="cart-badge">{hardcodedCount}</span>
    </button>
  )
}

export default CartWidget
