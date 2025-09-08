<script >
// @ts-nocheck

    import{link} from 'svelte-spa-router';
    import Header from '../components/Header.svelte';
    import Footer from '../components/footer.svelte';
    import CardInstall from '../lib/CardInstall.svelte';
    import DownloadSection from './DownloadSection.svelte';
    const Windows10 = [
  {
    label:"Windows 10",
    description: "Sofware de visualización",
    url: "http://localhost:5173/Hybridization/documentacion/QuPlots-1.pdf",
    filename: "QuPlots-1.pdf", 
    icon: "💻",
    type: "download" // Descarga directa
  }]
  const Windows11= [
  {
    label:"Windows 11",
    description: "Sofware de visualización",
    url: "http://localhost:5173/Hybridization/documentacion/QuPlots-1.pdf",
    filename: "QuPlots-1.pdf", 
    icon: "💻",
    type: "download" // Descarga directa
  }]
  const Mac = [
  {
    label:"Mac OS",
    description: "Sofware de visualización",
    url: "http://localhost:5173/Hybridization/documentacion/QuPlots-1.pdf",
    filename: "QuPlots-1.pdf", 
    icon: "💻",
    type: "download" // Descarga directa
  }
    ]
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
# WindowsSS
nombre_entorno\_Scripts\_activate
# macOS / Linux
source nombre_entorno/bin/activate
# Desactivar
deactivate
#Instalar quplots
pip install quplots`}
            />
</section>
<h1>Si no quieres tocar codigo ¡Descarga el Sofware de Quplots!</h1>

<section class="cards-container">

    <DownloadSection 
      downloads={Windows10}
    />
    <DownloadSection 
      downloads={Windows11}
    />
    <DownloadSection 
      downloads={Mac}
    />
</section>


</div>
<Footer></Footer>