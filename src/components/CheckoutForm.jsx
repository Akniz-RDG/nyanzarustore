import { useState } from "react";
import { useCart } from "../context/CartContext";
import { createOrder } from "../services/orders";
import { Link } from "react-router-dom";

export default function CheckoutForm() {
  const { cart, clear, calcTotal } = useCart();
  const [buyer, setBuyer] = useState({ name:"", email:"", phone:"" });
  const [orderId, setOrderId] = useState(null);
  const [sending, setSending] = useState(false);
  const total = calcTotal();

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!buyer.name || !buyer.email) return;
    setSending(true);
    try {
      const id = await createOrder({
        buyer,
        items: cart.map(({id,title,price,quantity})=>({id,title,price,quantity})),
        total
      });
      setOrderId(id);
      clear();
    } finally { setSending(false); }
  };

  if (orderId) return (
    <div>
      <h2>¡Gracias por tu compra!</h2>
      <p>Tu ID de orden es: <code>{orderId}</code></p>
      <Link to="/">Volver al inicio</Link>
    </div>
  );

  if (!cart.length) return (<div><p>No tienes items en el carrito.</p><Link to="/">Ir al catálogo</Link></div>);

  return (
    <form onSubmit={onSubmit}>
      <h1>Checkout</h1>
      <label>Nombre<input value={buyer.name} onChange={e=>setBuyer({...buyer, name:e.target.value})} required/></label>
      <label>Email<input type="email" value={buyer.email} onChange={e=>setBuyer({...buyer, email:e.target.value})} required/></label>
      <label>Teléfono<input value={buyer.phone} onChange={e=>setBuyer({...buyer, phone:e.target.value})}/></label>
      <p>Total a pagar: <strong>${total}</strong></p>
      <button disabled={sending} type="submit">{sending ? "Generando orden..." : "Confirmar compra"}</button>
    </form>
  );
}
