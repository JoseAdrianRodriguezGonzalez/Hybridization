<script>
  import WelcomeTemplate from "./WelcomeTemplate.svelte";
  
  const content = {
    title: "Bienvenid@ a la Documentación de Quplots",
    subtitle: "Tu visualizador de Modelos cúanticos en Python",
    welcomeMessage: `
      <p><strong>¡Bienvenido a la documentación de Quplots!</strong> Aquí encontrarás todas las funciones que Quplots ofrece para facilitar tus cálculos y visualizaciones cuánticas. 
      Esta guía incluye explicaciones claras, ejemplos prácticos de código y resultados visuales para ayudarte a aprovechar al máximo la librería.</p>
      `,
    features: [
      {
        title: "Módulo quplots.electron",
        description: "Esta clase hace los cálculos necesarios para describir las propiedades geométricas del electrón.",
        icon: "⚛️"
      },
      {
        title: "Módulo quplots.hybridization",
        description: "Esta clase hace los cálculos necesarios para las hibridaciones.",
        icon: "🔄"
      },
      {
        title: "Módulo quplots.plots",
        description: "Esta clase se encarga de las visualizaciones 2D y 3D.",
        icon: "📊"
      },
    ],
    downloads: [
      {
        label: "Guía Completa PDF",
        description: "Documentación completa con todos los módulos",
        url: "https://joseadrianrodriguezgonzalez.github.io/Hybridization/documentacion/QuPlots-1.pdf",
        filename: "QuPlots-1.pdf",
        icon: "📚",
        type: "download" // Descarga directa
      },
      {
        label: "Colab",
        description: "Google Colab para probar todas las funciones de Quplots y además sin instalar nada.",
        url: "https://colab.research.google.com/drive/1wxxpgmICMvXS64vICH1ivdsb1NfihSI9?usp=sharing",
        icon: "</>", 
        type: "link" // Abrir en nueva pestaña
      }
    ],
    showDownloadButton: true
  };
</script>
<WelcomeTemplate {...content} />