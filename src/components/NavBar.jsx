import "./NavBar.css"
import CartWidget from "./CartWidget"
import logo from "../assets/logo.png";

const NavBar = () => {
  const categorias = [
    "Inicio",
    "Mascotas de Ekene-Afa",
    "Armas de Kwayothé",
    "Artículos de Supervivencia de Jessamine",
    "Artilugios de Wakanga",
  ]

  return (
    <nav className="nav-container">
      {/* Logo desde /public */}
      <a href="#" className="brand">
        <img src={logo} alt="Logo Puerto Nyanzaru Shop" className="logo-img" />
        <span className="brand-name">Puerto Nyanzaru Shop</span>
      </a>

      <ul className="nav-links" role="list">
        {categorias.map((txt) => (
          <li key={txt}><a href="#">{txt}</a></li>
        ))}
      </ul>

      {/* Hijo: CartWidget */}
      <CartWidget />
    </nav>
  )
}

export default NavBar
