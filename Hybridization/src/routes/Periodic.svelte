<script>
    
    import{link} from 'svelte-spa-router';
    import Header from '../components/Header.svelte';
    import Footer from '../components/footer.svelte';
    import  './styles.css';
  import { onMount } from 'svelte';
    const items =Array.from({length:126},(_,i)=>i+1);
    const items2=Array.from({length:28},(_,i)=>i+1);
    let visibleItems=[];
    let secondIndexes=[];
    
    let data = [];

onMount(async () => {
  try {
    const res = await fetch("/data.json"); // Ruta en `public/`
    if (!res.ok) throw new Error("No se pudo cargar el JSON");

    data = await res.json();
  } catch (error) {
    console.error("Error al cargar los datos:", error);
  }
});
    
    console.log(data);
    onMount(()=>{
        let counter=1;
        const otherIndexes=()=>{
            let counter2=57;
            secondIndexes=Array.from(document.querySelectorAll(".box_")).map((e)=>{
                if(counter2==71){
                    let temp = counter2+18;
                    counter2=temp+1;
                    return temp;
                }
                return counter2++;
            })
        }
        otherIndexes();
        visibleItems =Array.from(document.querySelectorAll(".box")).map((el)=>{
            if(window.getComputedStyle(el).visibility!=='hidden'){
                if (counter==57 ||counter==89){
                    let temp=counter+14
                     counter=temp+1;
                     return temp;
                }else{
                    return counter++; 
                }
            } 
            
            return null;
        })
        

//        console.log("Numeración continua de los visibles:", visibleItems);
    })
</script>
<Header></Header>
<div class="Periodic">
    {#each items as item,index}
        
        <div class="box box-{index}">Div {visibleItems[index]!==null? visibleItems[index]:"-"}</div>
    {/each}
</div>
<div class="Periodic-2">
    {#each items2 as item,index}
    <div class="box_ box-{index}">Div {secondIndexes[index]}</div>
    {/each}
</div>
<Footer></Footer>