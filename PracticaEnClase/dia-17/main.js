let btn = document.querySelector("#btn");
let parrafo = document.querySelector("#parrafo");
let bnt = document.querySelector("#bnt");
let contador = 0;
btn.addEventListener("click", function (evento) {
  contador++;
  parrafo.textContent = contador;
});

bnt.addEventListener("click", function (evento) {
  console.log(evento);
  contador--;
  parrafo.textContent = contador;
});