import { Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer.jsx";
import ItemDetailContainer from "./components/ItemDetailContainer.jsx";
import NotFound from "./components/NotFound.jsx";

export default function App() {
  // Componente raíz: define el layout base y el sistema de rutas
  return (
    <div className="app">
      {/* Navegación fija con enlaces a categorías y home */}
      <NavBar />

      {/* Área principal donde React Router renderiza cada vista */}
      <main className="container">
        <Routes>
          {/* Home / catálogo general */}
          <Route
            path="/"
            element={<ItemListContainer greeting="¡Bienvenido a la tienda!" />}
          />

          {/* Catálogo filtrado por categoría (ruta dinámica) */}
          <Route path="/category/:categoryId" element={<ItemListContainer />} />

          {/* Detalle de un producto (ruta dinámica) */}
          <Route path="/item/:id" element={<ItemDetailContainer />} />

          {/* Ruta comodín para 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}