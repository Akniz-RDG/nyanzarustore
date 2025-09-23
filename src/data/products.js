// Array estático de productos para simular una base de datos remota
const PRODUCTS = [
  // Cada objeto tiene id único →  para rutas y keys en listas
  { id: "1", title: "Antorcha enana", price: 3500, stock: 10, category: "accesorios", description: "Antorcha resistente para expediciones.", image:"https://images.unsplash.com/photo-1563277705-92b8826fcc26?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  { id: "2", title: "Poción de curación", price: 7200, stock: 8,  category: "alquimia",   description: "Restaura salud moderada.",       image: "https://media.istockphoto.com/id/508465076/photo/hands-holding-red-love-potion-in-the-bottle.jpg?s=2048x2048&w=is&k=20&c=DoVPU-Wn5sbumjP-s-VEsEcgosh8LaCOm0_l2dn8HZQ=" },
  { id: "3", title: "Mapa de Chult",     price: 5600, stock: 5,  category: "mapas",      description: "Mapa edición Puerto Nyanzaru.",   image: "https://media.istockphoto.com/id/1277379408/photo/old-map-paper-scrolls-raven-feather-for-writing-vintage-image.jpg?s=2048x2048&w=is&k=20&c=PuYjWyYeEjQSz_xKnjmc4HkPU2J4D3_HOVV2xD6B1kc=" },
  { id: "4", title: "Cuerda élfica 50ft",price: 4100, stock: 15, category: "accesorios", description: "Ligera y resistente.",            image: "https://media.istockphoto.com/id/157608872/photo/dock-cleat-with-boats-at-marina.jpg?s=2048x2048&w=is&k=20&c=cIqNxURjbYM93stvRRR0XacnCcmTBJAxpVX6ZGI19-0=" },
  { id: "5", title: "Kit de herborista", price: 9900, stock: 7,  category: "alquimia",   description: "Para tus pociones.",              image: "https://media.istockphoto.com/id/173253353/photo/chinese-herbal-medicine-with-mortor-and-pestle-on-wood-hz.jpg?s=2048x2048&w=is&k=20&c=W61JbR_HU9nzGJsQ5mg11LOpqX7h0nqVjM4QEfUVv-I=" },
];

// Utilidad para simular latencia de red (setTimeout envuelto en Promise)
const delay = (ms) => new Promise((res) => setTimeout(res, ms));

// “Endpoint” GET /products y category
export async function getProducts(categoryId) {
  await delay(600); // retardo simulado de red
  if (!categoryId) return PRODUCTS; // sin filtro → devolver todo
  return PRODUCTS.filter((p) => p.category === categoryId); // con filtro
}

// “Endpoint” GET /products/:id
export async function getProductById(id) {
  await delay(500);
  const found = PRODUCTS.find((p) => p.id === id);
  if (!found) throw new Error("Producto no encontrado"); // simula 404
  return found;
}

// Función de ayuda para NavBar: categorías únicas
export function getCategories() {
  // Convierte el array de categorías en un Set (únicos) y lo vuelve array
  return Array.from(new Set(PRODUCTS.map((p) => p.category)));
}
