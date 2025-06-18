let empleados = document.querySelector(".empleados");
let empleadosE = [
  { tipo: "empleados",
    nombre: "Meseros",
    honorarios: "$2500/hora"
  },
   { tipo: "empleados",
    nombre: "Barman",
    honorarios: "$3000/hora"
  },
   { tipo: "empleados",
    nombre: "Copero",
    honorarios: "$2500/hora"
  },
   { tipo: "empleados",
    nombre: "Cajeros",
    honorarios: "$3000/hora"
  },
];
for (let i = 0; i < empleadosE.length; i++){
    if(empleadosE[i].tipo === "empleados")
    empleados.innerHTML += `<div
            class="flex items-center justify-center flex-col p-6 rounded-md border border-gray-200 shadow-md dark:bg-slate-800 dark:text-white dark:border-slate-800"
          >
          <h2 class="flex justify-center items-center">${empleadosE[i].nombre}</h2>
<p class="mb-3 font-normal text-gray-700 dark:text-gray-400"> ${empleadosE[i].honorarios}</p>
          </div> `;
  }