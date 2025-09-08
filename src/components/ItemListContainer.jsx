// Recibe una prop y la muestra
const ItemListContainer = ({ mensaje }) => {
  return (
    <section className="container">
      <h1>{mensaje}</h1>
      <p>Explora mercancías de los Príncipes Mercantes de Chult.</p>
    </section>
  )
}

export default ItemListContainer
