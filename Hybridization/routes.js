import {wrap} from 'svelte-spa-router/wrap'
import Documentacion from "./src/routes/Documentacion.svelte";
import Galeria from "./src/routes/Galeria.svelte";
import inicio from "./src/routes/inicio.svelte"
import Radial from "./src/routes/Radial.svelte";
import Periodic from "./src/routes/Periodic.svelte";
import Instalacion from "./src/routes/Instalacion.svelte";
import Teoria from "./src/routes/Teoria.svelte";

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