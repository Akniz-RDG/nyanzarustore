import { NavLink, Link } from "react-router-dom";
import { getCategories } from "../data/products.js";

export default function NavBar() {
  // Obtenemos las categorías desde los datos mock (únicas)
  const categories = getCategories();

  return (
    <nav className="nav">
      {/* Marca que lleva al home */}
      <Link to="/" className="brand">🛍️ NyanzaruStore</Link>

      {/* Enlaces a cada categoría (dinámicos) */}
      {categories.map((cat) => (
        // NavLink agrega clase "active" si la ruta coincide
        <NavLink key={cat} to={`/category/${cat}`}>
          {cat}
        </NavLink>
      ))}

      {/* Espaciador + icono de carrito (futuro: badge con cantidad) */}
      <div className="spacer" />
      <Link to="/" aria-label="Cart" title="Carrito">🛒</Link>
    </nav>
  );
}
