import Documentation from "./routes/Documentation.svelte";
import Examples from "./routes/Examples.svelte";
import Home from "./routes/home.svelte"
import Radial from "./routes/Radial.svelte";
import Periodic from "./routes/Periodic.svelte";
const routes ={
    '/Documentation':Documentation,
    '/Examples':Examples,
    '/':Home,
    '/Radial':Radial,
    '/table':Periodic   
}
export default routes;