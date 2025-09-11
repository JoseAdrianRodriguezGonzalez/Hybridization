<script >
// @ts-nocheck

    import{link} from 'svelte-spa-router';
    import Header from '../components/Header.svelte';
    import Footer from '../components/footer.svelte';
    import CardInstall from '../lib/CardInstall.svelte';
    import DownloadSection from './DownloadSection.svelte';
    import linuxicon from "/icons/linux-svgrepo-com.svg";
    import macicon from "/icons/mac-svgrepo-com.svg";
    import windowsicon from "/icons/windows-174-svgrepo-com.svg";


    const Windows10 = [
  {
    label:"Windows 10",
    description: "Sofware de visualización",
    url: "https://github.com/JoseAdrianRodriguezGonzalez/AppHibr/releases/download/v1.0.6/QuPlots-Win10.exe",
    filename: "QuPlots-1.pdf", 
    icono: windowsicon,
    type: "download" // Descarga directa
  }]
  const linux= [
  {
    label:"Linux",
    description: "Sofware de visualización",
    url: "https://github.com/JoseAdrianRodriguezGonzalez/AppHibr/releases/download/v1.0.6/QuPlots-linux",
    filename: "QuPlots-linux", 
    icon: linuxicon,
    type: "download" // Descarga directa
  }]
  const Mac = [
  {
    label:"Mac OS",
    description: "Sofware de visualización",
    url: "https://github.com/JoseAdrianRodriguezGonzalez/AppHibr/releases/download/v1.0.6/QuPlots-mac",
    filename: "QuPlots-1.pdf", 
    icon: macicon,
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
<h1>Si no quieres tocar código ¡Descarga el Sofware de Quplots!</h1>

<section class="cards-container">

    <DownloadSection 
      downloads={Windows10}
    />
    <DownloadSection 
      downloads={linux}
    />
    <DownloadSection 
      downloads={Mac}
    />
</section>


</div>
<Footer></Footer>