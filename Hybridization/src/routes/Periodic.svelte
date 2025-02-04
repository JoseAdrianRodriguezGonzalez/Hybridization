<script>
    import{link} from 'svelte-spa-router';
    import Header from '../components/Header.svelte';
    import Footer from '../components/footer.svelte';
    import  './styles.css';
  import { onMount } from 'svelte';
    const items =Array.from({length:126},(_,i)=>i+1);
    const items2=Array.from({length:28},(_,i)=>i+1);
    let visibleItems=[];
    onMount(()=>{
        let counter=1;
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
        

        console.log("Numeración continua de los visibles:", visibleItems);
    })
</script>
<Header></Header>
<div class="Periodic">
    {#each items as item,index}
        
        <div class="box box-{index}">Div {visibleItems[index]!==null? visibleItems[index]:"-"}</div>
    {/each}
</div>
<div class="Periodic-2">
    {#each items2 as item}
    <div class="box_">Div {item}</div>
    {/each}
</div>
<Footer></Footer>