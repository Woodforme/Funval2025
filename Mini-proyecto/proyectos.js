   document.addEventListener("DOMContentLoaded", function () {
      const proyectos = [
        {
          titulo: "Proyecto libreria de nota",
          descripcion: "Java con POO",
          imagen:
            "https://github.com/Generation-Chile-Java/libretadenotas-Woodforme/commit/0a330ac2f98327775a472f882fc4e47def50a1e5#diff-61d282801810720ceed1e754ac2653b498497857291a598d27475943ce3f1c60R1-R13",
          tecnologias: ["React", "Node.js", "Spring boot"],
          link: "./libreriasdenotas.jpg",
        },
        {
          titulo: "Hotel Belen",
          descripcion: "HTml, CSS",
          imagen: "./Hotel-Belen.PNG",
          tecnologias: ["html", "Css"],
          link: "#",
        },
      ];

      const contenedor = document.getElementById("contenedor-proyectos");

      const seccion = document.createElement("section");
      seccion.id = "proyectos";
      seccion.className = "py-16 px-6 bg-blue-300";

      const container = document.createElement("div");
      container.className = "max-w-7xl mx-auto px-6";;

      const titulo = document.createElement("h2");
      titulo.className = "text-3xl font-bold mb-10 text-center";
      titulo.textContent = "Proyectos Destacados";

      const grid = document.createElement("div");
      grid.className = "proyectos grid md:grid-cols-2 lg:grid-cols-3 gap-8";

      proyectos.forEach((proyecto) => {
        const card = document.createElement("div");
        card.className =
          "bg-gray-300 bg-opacity-10 rounded-lg overflow-hidden hover:shadow-lg transition";

        const img = document.createElement("img");
        img.src = proyecto.imagen;
        img.alt = proyecto.titulo;
        img.className = "w-full h-48 object-cover";

        const content = document.createElement("div");
        content.className = "p-6";

        const h3 = document.createElement("h3");
        h3.className = "text-xl font-bold mb-2";
        h3.textContent = proyecto.titulo;

        const p = document.createElement("p");
        p.className = "text-gray-200 mb-4";
        p.textContent = proyecto.descripcion;

        const techWrapper = document.createElement("div");
        techWrapper.className = "flex flex-wrap gap-2 mb-4";
        proyecto.tecnologias.forEach((tec) => {
          const span = document.createElement("span");
          span.className =
            "bg-amber-50 bg-opacity-20 text-black px-3 py-1 rounded-full text-xs";
          span.textContent = tec;
          techWrapper.appendChild(span);
        });

        const link = document.createElement("a");
        link.href = proyecto.link;
        link.className = "text-green-200 hover:underline flex items-center";
        link.innerHTML = `
          Ver proyecto
          <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
          </svg>`;

        content.append(h3, p, techWrapper, link);
        card.append(img, content);
        grid.appendChild(card);
      });

      container.append(titulo, grid);
      seccion.appendChild(container);
      contenedor.appendChild(seccion);
    });
