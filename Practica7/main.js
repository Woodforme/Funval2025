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
 /*Recorrer y mostrar productos (forEach)#
📢 Recorre el array de productos y muestra en la consola el nombre y el precio de cada uno.

2️⃣ Crear un array de nombres de productos y verificar disponibilidad (map + includes)#
✅ Parte 1: Usa map para generar un array productosDisponibles que contenga solo los nombres de los productos a partir del array productos.
🔎 Parte 2: Luego, verifica si un producto buscado está disponible utilizando includes.

3️⃣ Aplicar un descuento a los productos (map)#
💰 Crea un nuevo array con los productos, aplicando un 10% de descuento a los precios.

4️⃣ Filtrar productos por precio (filter)#
🎯 Crea un array con los productos cuyo precio sea menor a $100.

5️⃣ Obtener los primeros productos (slice)#
📋 Muestra los primeros 2 productos de la lista.

6️⃣ Ordenar productos por precio (sort)#
📌 Instrucción: Investiga cómo funciona el método sort en JavaScript y úsalo para ordenar los productos de menor a mayor precio.

7️⃣ Invertir el orden de los productos (reverse)#
🔄 Instrucción: Investiga cómo funciona el método reverse en JavaScript y utilízalo para mostrar los productos en orden inverso.*/

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
