import Documentation from "./routes/Documentation.svelte";
import Examples from "./routes/Examples.svelte";
import Home from "./routes/home.svelte"
const routes ={
    '/Documentation':Documentation,
    '/Examples':Examples,
    '/':Home
    
}
export default routes;