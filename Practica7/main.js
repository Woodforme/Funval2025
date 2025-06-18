const productos = [
    { nombre: "Laptop", precio: 1200 },
    { nombre: "Mouse", precio: 25 },
    { nombre: "Teclado", precio: 50 },
    { nombre: "Monitor", precio: 300 },
    { nombre: "Silla Gamer", precio: 450 },
    { nombre: "Audífonos", precio: 80 },
    { nombre: "Webcam", precio: 60 },
    { nombre: "USB 128GB", precio: 30 },
    { nombre: "Impresora", precio: 200 },
    { nombre: "Tablet", precio: 500 }
 ]; 
 
console.log("Lista de productos:");
productos.forEach(producto => {
    console.log(`${producto.nombre} - $${producto.precio}`);
});

const nombresProductos = productos.map(p => p.nombre);
console.log("\nNombres de productos:", nombresProductos);
console.log("¿Tenemos 'Teclado'?", nombresProductos.includes("Teclado"));

const conDescuento = productos.map(p => ({
    nombre: p.nombre,
    precio: p.precio * 0.9
}));
console.log("\nProductos con descuento:", conDescuento);

const economicos = productos.filter(prod => prod.precio < 100);
console.log("\nProductos económicos:", economicos);

const primeros = productos.slice(0, 2);
console.log("\nPrimeros 2 productos:", primeros);

const ordenados = [...productos].sort((a, b) => a.precio - b.precio);
console.log("\nProductos ordenados por precio:", ordenados);

const inverso = [...productos].reverse();
console.log("\nProductos en orden inverso:", inverso);
