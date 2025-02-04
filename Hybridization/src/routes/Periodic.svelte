<script>
    import{link} from 'svelte-spa-router';
    import Header from '../components/Header.svelte';
    import Footer from '../components/footer.svelte';
    import  './styles.css';
    const items =Array.from({length:108},(_,i)=>i+1);
    const items2=Array.from({length:28},(_,i)=>i+1);
    
</script>
<Header></Header>
<div class="Periodic">
    {#each items as item}
        
        <div class="box box-{item}">Div {item}</div>
    {/each}
</div>
<div class="Periodic-2">
    {#each items2 as item}
    <div class="box_">Div {item}</div>
    {/each}
</div>
<Footer></Footer>