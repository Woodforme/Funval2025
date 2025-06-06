let saldo = 0;
let historial = [];
let retiradoHoy = 0;
const limiteRetiroDiario = 1000;

function depositar(cantidad) {
  if (cantidad <= 0) {
    return "Error: La cantidad del dinero debe ser mayor que cero";
  }
  saldo += cantidad;
  registrarTransaccion(`Depósito: +$${cantidad.toFixed(2)}`);
  return `Depósito exitoso. Saldo actual: $${saldo.toFixed(2)}`;
}

function retirar(cantidad) {
  if (cantidad <= 0) {
    return "Error: La cantidad debe ser mayor que cero";
  }
  
if (cantidad > saldo) {
    return "Error: Saldo insuficiente";
  }
  
  if (retiradoHoy + cantidad > limiteRetiroDiario) {
    return `Error: Excede su límite diario de retiro ($${limiteRetiroDiario})`;
  }
  
  saldo -= cantidad;
  retiradoHoy += cantidad;
  registrarTransaccion(`Retiro: -$${cantidad.toFixed(2)}`);
  return `Retiro exitoso. Saldo actual: $${saldo.toFixed(2)}`;
}

function consultarSaldo() {
  return `Saldo actual: $${saldo.toFixed(2)}`;
}

function registrarTransaccion(descripcion) {
  historial.push({
    fecha: new Date().toLocaleString(),
    operacion: descripcion,
    saldo: saldo
  });
}

function mostrarHistorial() {
  if (historial.length === 0) {
    return "No hay transacciones registradas";
  }
  
  let reporte = "Historial de transacciones:\n";
  historial.forEach(trans => {
    reporte += `${trans.fecha} - ${trans.operacion} (Saldo: $${trans.saldo.toFixed(2)})\n`;
  });
  return reporte;
}

function reiniciarLimiteDiario() {
  retiradoHoy = 0;
  return "Límite diario de retiro reiniciado";
}
function iniciarAplicacion() {
  let opcion;
  do {
    opcion = prompt(
      "Sistema Bancario Básico\n\n" +
      "1. Depositar dinero\n" +
      "2. Retirar dinero\n" +
      "3. Consultar saldo\n" +
      "4. Ver historial\n" +
      "5. Salir\n\n" +
      "Seleccione una opción:"
    );

    switch (opcion) {
      case "1":
        const cantidadDeposito = parseFloat(prompt("Ingrese cantidad a depositar:"));
        alert(depositar(cantidadDeposito));
        break;
      case "2":
        const cantidadRetiro = parseFloat(prompt("Ingrese cantidad a retirar:"));
        alert(retirar(cantidadRetiro));
        break;
      case "3":
        alert(consultarSaldo());
        break;
      case "4":
        alert(mostrarHistorial());
        break;
      case "5":
        alert("Gracias por usar nuestro sistema bancario");
        break;
      default:
        alert("Opción no válida");
    }
  } while (opcion !== "5");
}
iniciarAplicacion();