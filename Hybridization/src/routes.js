import {wrap} from 'svelte-spa-router/wrap'
import Documentacion from "./routes/Documentacion.svelte";
import Galeria from "./routes/Galeria.svelte";
import inicio from "./routes/inicio.svelte"
import Radial from "./routes/Radial.svelte";
import Periodic from "./routes/Periodic.svelte";
import Instalacion from "./routes/Instalacion.svelte";
import Teoria from "./routes/Teoria.svelte";

const routes ={
    '/Documentacion':Documentacion,
    '/Galeria':Galeria,
    '/':inicio,
    '/Radial':Radial,
    '/table':Periodic,
    '/Instalacion':Instalacion,
    '/Teoria':Teoria,
}
export default routes;