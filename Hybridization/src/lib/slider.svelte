<script>
  // Aquí defines el contenido del menú
  export let sections = [
    {
    title: "1. quplots.electron",
    links: [
      { name: "1.1 get_cartesian_grid()", href: "#" },
      { name: "1.2. get_spherical_grid(x,y,z)", href: "#" },
      { name: "1.3 compute_radial()", href: "#" },
      { name: "1.4 compute_real_spherical()", href: "#" },
      { name: "1.5. compute_imaginary_spherical()", href: "#" },
      { name: "1.6 compute_wavefunction_2D(d=20)", href: "#" },
      { name: "1.7 compute_wavefunction_3D()", href: "#" },
      { name: "1.8 compute_wavefunction_3D_complex()", href: "#" },
      { name: "1.9 getN()", href: "#" },
      { name: "1.10 getL()", href: "#" },
      { name: "1.11 getM()", href: "#" },
      { name: "1.13 getRadius()", href: "#" }
    ],
    open: true
  },
  {
    title: "2. quplots.hybridization",
    links: [
      { name: "2.1 generate_sp()", href: "#" },
      { name: "2.2 generate_sp2()", href: "#" },
      { name: "2.3 generate_sp3() ", href: "#" },
      { name: "2.4 generate_sp2d()", href: "#" },
      { name: "2.5 generate_sp3d()", href: "#" },
      { name: "2.6 generate_sp3d2() ", href: "#" }
    ],
    open: false
  },
  {
    title: "3. quplots.plots",
    links: [
      { name: "3.1. plot_radial_()", href: "#" },
      { name: "3.2 plot_spherical_real()", href: "#" },
      { name: "3.3 plot_spherical_imaginary()", href: "#" },
      { name: "3.4 plot_wf_2d()", href: "#" },
      { name: "3.5 plot_wf_3d()", href: "#" },
      { name: "3.6 plot_sp()", href: "#" },
      { name: "3.7 plot_sp2()", href: "#" },
      { name: "3.8 plot_sp3()", href: "#" },
      { name: "3.9 plot_sp2d()", href: "#" },
      { name: "3.10 plot_sp3d()", href: "#" },
      { name: "3.11 plot_sp3d2()", href: "#" }
    ],
    open: false
  }
  ];

  function toggleSection(index) {
    sections[index].open = !sections[index].open;
  }
</script>

<style>
.sidebar {
  width: 25vw;
  background-color: #020216;
  color: #c9e4f6;
  padding: 1em;
  height: 70vw auto;
  overflow-y: auto;
  border-right: 2px solid #2b3139;
}

.sidebar-header {
  font-size: 1.1em;
  font-weight: bold;
  margin-bottom: 1em;
  color: #56b6c2;
}

.section {
  margin-bottom: 1.2em;
}

.section-title {
  font-weight: bold;
  cursor: pointer;
  padding: 0.38em 0;
  background: none;
  border: none;
  color: inherit;
  width: 100%;
  text-align: left;
  font-size: 1.02em;
}

.links {
  margin-top: 0.4em;
  margin-left: 1em;
}

.link {
  display: block;
  margin: 0.15em 0;
  text-decoration: none;
  color: #c9e4f6;
  font-size: 1.2vw;
  padding: 0.19em 0.4em;
  border-radius: 4px;
  transition: background 0.18s;
}
.link:hover {
  background-color: #30363d;
  color: #56b6c2;
}
</style>

<div class="sidebar">
  <div class="sidebar-header">Section Navigation</div>
  {#each sections as section, i}
    <div class="section">
      <button class="section-title" on:click={() => toggleSection(i)}>
        {section.title}
        {section.open ? " ▼" : " ▶"}
      </button>
      {#if section.open}
        <div class="links">
          {#each section.links as item}
            <a href={item.href} class="link">{item.name}</a>
          {/each}
        </div>
      {/if}
    </div>
  {/each}
</div>
