// Productos por Príncipe Mercante de Chult (3 cada uno)
export const productos = [
  // Ekene-Afa — armas, equipo marcial
  { id: 'EK-01', name: 'Lanza chultiana', description: 'Lanza equilibrada de cazador de jungla.', stock: 12, price: 5600, img: '/img/lanza-chult.png', category: 'Ekene-Afa' },
  { id: 'EK-02', name: 'Escudo de mimbre reforzado', description: 'Ligero, ideal para humedad y selva.', stock: 9, price: 7800, img: '/img/escudo-mimbre.png', category: 'Ekene-Afa' },
  { id: 'EK-03', name: 'Red de caza trenzada', description: 'Fibra vegetal curada, no se pudre.', stock: 16, price: 3900, img: '/img/red-caza.png', category: 'Ekene-Afa' },

  // Ifan Talro’a — bestias, monturas, forrajes
  { id: 'IF-01', name: 'Sillín para dinosaurio ligero', description: 'Ajuste para raptor o deinonychus.', stock: 5, price: 24500, img: '/img/sillin-dino.png', category: 'Ifan Talro’a' },
  { id: 'IF-02', name: 'Forraje tropical (saco 25kg)', description: 'Mezcla nutritiva para monturas.', stock: 20, price: 5200, img: '/img/forraje-tropical.png', category: 'Ifan Talro’a' },
  { id: 'IF-03', name: 'Arnés de cuero impermeable', description: 'Tratado con aceites de palma.', stock: 8, price: 9900, img: '/img/arnes-cuero.png', category: 'Ifan Talro’a' },

  // Jessamine — hierbas, tónicos (legales), antídotos
  { id: 'JE-01', name: 'Ungüento de hoja de asabu', description: 'Reduce fiebre y previene infección.', stock: 14, price: 6100, img: '/img/unguento-asabu.png', category: 'Jessamine' },
  { id: 'JE-02', name: 'Tónico respiratorio de manglar', description: 'Despeja vías y alivia tos de selva.', stock: 11, price: 7300, img: '/img/tonico-manglar.png', category: 'Jessamine' },
  { id: 'JE-03', name: 'Kit básico de antídotos', description: 'Viales contra mordeduras comunes.', stock: 7, price: 15800, img: '/img/kit-antidotos.png', category: 'Jessamine' },

  // Jobal — licencias, mapas, contratación de guías
  { id: 'JO-01', name: 'Permiso de expedición (7 días)', description: 'Autorización oficial para internarse en la jungla.', stock: 50, price: 4200, img: '/img/permiso-expedicion.png', category: 'Jobal' },
  { id: 'JO-02', name: 'Mapa de rutas a Mbala', description: 'Trazado actualizado con refugios y ríos.', stock: 18, price: 5600, img: '/img/mapa-mbala.png', category: 'Jobal' },
  { id: 'JO-03', name: 'Contrato de guía local', description: 'Guía acreditado, tarifa por día.', stock: 10, price: 18500, img: '/img/contrato-guia.png', category: 'Jobal' },

  // Kwayothé — fuego, especias, vinos de fruta (lujo)
  { id: 'KW-01', name: 'Brasero de barro volcánico', description: 'Encendido rápido, humo bajo.', stock: 6, price: 12500, img: '/img/brasero-volcanico.png', category: 'Kwayothé' },
  { id: 'KW-02', name: 'Especias rojas de Mezro (mix)', description: 'Mezcla picante ritual y culinaria.', stock: 22, price: 4800, img: '/img/especias-rojas.png', category: 'Kwayothé' },
  { id: 'KW-03', name: 'Vino de palma añejo', description: 'Dulce, cálido; bot. 750ml.', stock: 9, price: 9900, img: '/img/vino-palma.png', category: 'Kwayothé' },

  // Wakanga O’tamu — magia, pergaminos, arcanos
  { id: 'WA-01', name: 'Pergamino: Luz Continúa', description: 'Hechizo de iluminación duradera.', stock: 5, price: 14200, img: '/img/pergamino-luz.png', category: 'Wakanga O’tamu' },
  { id: 'WA-02', name: 'Amuleto contra fiebres', description: 'Talismán con sello arcano menor.', stock: 8, price: 17300, img: '/img/amuleto-fiebres.png', category: 'Wakanga O’tamu' },
  { id: 'WA-03', name: 'Polvo desecante para libros', description: 'Protege grimorios de humedad.', stock: 12, price: 5200, img: '/img/polvo-desecante.png', category: 'Wakanga O’tamu' },

  // Zhanthi — gemas, telas finas, comercio respetable
  { id: 'ZH-01', name: 'Turbante de lino de Nyanzaru', description: 'Tejido fresco, teñido natural.', stock: 15, price: 7800, img: '/img/turbante-lino.png', category: 'Zhanthi' },
  { id: 'ZH-02', name: 'Set de cuentas de jade', description: 'Adorno tradicional, calidad media.', stock: 10, price: 13200, img: '/img/cuentas-jade.png', category: 'Zhanthi' },
  { id: 'ZH-03', name: 'Pañolón de seda teñida', description: 'Seda chultiana, patrón de hojas.', stock: 7, price: 18900, img: '/img/panolon-seda.png', category: 'Zhanthi' },
];

// Helper opcional: categorías únicas
export const getCategories = () => [...new Set(productos.map(p => p.category))];

// Mock asíncrono (pre-entrega 2)
let error = false;

export const getProducts = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => (error ? reject('Hubo un error, intente más tarde') : resolve(productos)), 800);
  });

export const getOneProduct = (id) =>
  new Promise((resolve) => {
    setTimeout(() => resolve(productos.find((p) => p.id === id) || null), 600);
  });
