<script >
// @ts-nocheck

    import{link} from 'svelte-spa-router';
    import Header from '../components/Header.svelte';
    import Footer from '../components/footer.svelte';
  import CardInstall from '../lib/CardInstall.svelte';
</script>

<Header></Header>


<div class="Principal">
    <h1>Instalar la libreria de QuPlots: </h1>

    <section class="cards-container">
        <CardInstall
    titulo="Entorno de conda"
    texto={`conda create -n nombre_entorno
# Activar
conda activate nombre_entorno
# Desactivar
conda deactivate
# Instalar quplots
pip install quplots`}
    />

        <CardInstall
            titulo="Entorno de venv"
            texto={`python -m venv nombre_entorno
# Windows
nombre_entorno\_Scripts\_activate
# macOS / Linux
source nombre_entorno/bin/activate
# Desactivar
deactivate
#Instalar quplots
pip install quplots`}
            />
    </section>
</div>
<Footer></Footer>