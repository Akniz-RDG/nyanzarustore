import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

export default function Cart() {
  const { cart, removeItem, clear, calcTotal } = useCart();
  if (!cart.length) return (<div><p>El carrito está vacío.</p><Link to="/">Volver al catálogo</Link></div>);
  return (
    <section>
      <h1>Tu Carrito</h1>
      <ul>
        {cart.map(p=>(
          <li key={p.id}>
            <strong>{p.title}</strong> x {p.quantity} — ${p.price} c/u
            <button onClick={()=>removeItem(p.id)}>Eliminar</button>
          </li>
        ))}
      </ul>
      <p>Total: <strong>${calcTotal()}</strong></p>
      <button onClick={clear}>Vaciar</button>
      <Link to="/checkout" className="btn">Ir al Checkout</Link>
    </section>
  );
}
