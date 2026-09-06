import {wrap} from 'svelte-spa-router/wrap'
import Documentation from "./routes/documentation.svelte";
import Gallery from "./routes/gallery.svelte";
import Home from "./routes/home.svelte"
import Periodic from "./routes/periodic.svelte";
import Download from "./routes/download.svelte";
import Theory from "./routes/theory.svelte";

const routes ={
    '/documentacion':Documentation,
    '/galeria':Gallery,
    '/':Home,
    '/table':Periodic,
    '/instalacion':Download,
    '/teoria':Theory,
    '/periodic':Periodic,

}
export default routes;
