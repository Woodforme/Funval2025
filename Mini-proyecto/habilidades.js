const habilidades = [
  { nombre: "HTML5", imagen: "html-icono.jpeg", nivel: "Avanzado" },
  { nombre: "CSS", imagen: "css-icono1.png", nivel: "Avanzado" },
  { nombre: "JAVA", imagen: "java-icon.png", nivel: "Intermedio" },
  { nombre: "JAVASCRIPT", imagen: "javascript-icon.png", nivel: "Intermedio" },
  { nombre: "TAILWIND", imagen: "tailwindcss-icon.png", nivel: "Intermedio" }
];

function generarHabilidadHTML({ nombre, imagen, nivel }) {
  return `
    <div class="bg-blue-300 p-6 rounded-lg text-center hover:transform hover:scale-105 transition">
      <img src="./img/${imagen}" alt="${nombre}" class="h-16 mx-auto mb-4">
      <h3 class="font-bold">${nombre}</h3>
      <p class="text-sm text-gray-800">${nivel}</p>
    </div>
  `;
}

function renderizarSeccionHabilidades() {
  const contenedor = document.querySelector("#habilidades");

  const contenido = `
    <div class="container mx-auto mt-10">
      <h2 class="text-3xl font-bold mb-10 text-center">Mis Habilidades</h2>
      <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
        ${habilidades.map(generarHabilidadHTML).join("")}
      </div>
      <div class="text-center mt-12">
        <button class="cursor-pointer bg-yellow-100 text-black px-8 py-3 rounded-md font-bold text-lg inline-flex items-center">
          <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
              d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          <a href="./Curriculum vitae optimizado1.pdf">Descargar CV</a>
        </button>
      </div>
    </div>
  `;

  contenedor.insertAdjacentHTML("beforeend", contenido);
}

document.addEventListener("DOMContentLoaded", renderizarSeccionHabilidades);
