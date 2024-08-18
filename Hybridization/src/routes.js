import Documentation from "./routes/Documentation.svelte";
import Examples from "./routes/Examples.svelte";
import Home from "./routes/home.svelte"
import Radial from "./routes/Radial.svelte";
const routes ={
    '/Documentation':Documentation,
    '/Examples':Examples,
    '/':Home,
    '/Radial':Radial   
}
export default routes;