import { Link } from "react-router-dom";


export default function NotFound() {
return (
<section>
<h2>404 ─ Página no encontrada</h2>
<p className="muted">Revisa las rutas o vuelve al catálogo.</p>
<Link className="btn" to="/">Volver al inicio</Link>
</section>
);
}