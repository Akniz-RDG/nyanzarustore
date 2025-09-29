import "../css/NavBar.css";
import CartWidget from "./CartWidget";
import CartWidgetIcons from "./CartWidgetIcons";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  console.log("Navbar");
  return (
    <nav className="nav-container">
      <NavLink className="anchor-nav" to="/">
        <img src="/img/logo-shop.png" alt="logo" className="logo" />
      </NavLink>

      {/* Príncipes Mercantes como categorías */}
      <NavLink className="anchor-nav" to="/category/Ekene-Afa">Ekene-Afa</NavLink>
      <NavLink className="anchor-nav" to="/category/Ifan Talro’a">Ifan Talro’a</NavLink>
      <NavLink className="anchor-nav" to="/category/Jessamine">Jessamine</NavLink>
      <NavLink className="anchor-nav" to="/category/Jobal">Jobal</NavLink>
      <NavLink className="anchor-nav" to="/category/Kwayothé">Kwayothé</NavLink>
      <NavLink className="anchor-nav" to="/category/Wakanga O’tamu">Wakanga O’tamu</NavLink>
      <NavLink className="anchor-nav" to="/category/Zhanthi">Zhanthi</NavLink>

      {/* <CartWidget/> */}
      <CartWidgetIcons />
    </nav>
  );
};

export default NavBar;