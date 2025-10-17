import { createContext, useContext, useMemo, useState } from "react";
const Ctx = createContext(null);
export const useCart = () => useContext(Ctx);

export default function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) =>
    setCart(prev => {
      const i = prev.findIndex(p => p.id === item.id);
      if (i !== -1) {
        const copy = [...prev];
        copy[i] = { ...copy[i], quantity: copy[i].quantity + quantity };
        return copy;
      }
      return [...prev, { ...item, quantity }];
    });

  const removeItem = id => setCart(prev => prev.filter(p => p.id !== id));
  const clear = () => setCart([]);
  const calcItemsQty = () => cart.reduce((a,p)=>a+p.quantity,0);
  const calcTotal = () => cart.reduce((a,p)=>a+p.price*p.quantity,0);

  const value = useMemo(()=>({cart,addItem,removeItem,clear,calcItemsQty,calcTotal}),[cart]);
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}
