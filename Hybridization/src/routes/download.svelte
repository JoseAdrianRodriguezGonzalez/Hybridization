<script >
// @ts-nocheck

    import{link} from 'svelte-spa-router';
    import CardInstall from '../lib/common/CardInstall.svelte';
    import DownloadSection from '../lib/common/DownloadSection.svelte';
    import linuxicon from "/icons/linux-svgrepo-com.svg";
    import macicon from "/icons/mac-svgrepo-com.svg";
    import windowsicon from "/icons/windowsicon.svg";


    const Windows10 = [
  {
    label:"Windows 10",
    description: "Sofware de visualización",
    url: "https://github.com/JoseAdrianRodriguezGonzalez/AppHibr/releases/download/v2.0.3/QuPlots-Win10.exe",
    filename: "QuPlots_Windows", 
    icono: windowsicon,
    type: "download"
  }]
  const linux= [
  {
    label:"Linux",
    description: "Sofware de visualización",
    url: "https://github.com/JoseAdrianRodriguezGonzalez/AppHibr/releases/download/v2.0.3/QuPlots-linux",
    filename: "QuPlots_linux", 
    icon: linuxicon,
    type: "download"
  }]
  const Mac = [
  {
    label:"Mac OS",
    description: "Sofware de visualización",
    url: "https://github.com/JoseAdrianRodriguezGonzalez/AppHibr/releases/download/v2.0.3/QuPlots-mac",
    filename: "QuPlots_Mac", 
    icon: macicon,
    type: "download"
  }
    ]
</script>



  
  <h1 style=" margin: 1.5rem  1.5rem  1rem 1rem;">
  Instalar la librería de QuPlots </h1>

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
<h1 style=" margin: 0 0 1rem 1rem;">
  Si no quieres tocar código ¡Descarga el Sofware de Quplots!
</h1>

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

