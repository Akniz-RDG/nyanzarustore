import "./App.css"
import NavBar from "./components/NavBar"
import ItemListContainer from "./components/ItemListContainer"
import ItemCount from "./components/ItemCount"

function App() {
  const handleAdd = (cantidad) => {
    alert(`Agregaste ${cantidad} productos al carrito 🛒`)
  }

  return (
    <>
      <NavBar />
      <ItemListContainer mensaje="¡Bienvenidos a Puerto Nyanzaru Shop!" />
      {/* Preview del ItemCount */}
      <ItemCount stock={5} initial={1} onAdd={handleAdd} />
    </>
  )
}

export default App
