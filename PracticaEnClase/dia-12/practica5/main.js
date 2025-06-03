/*1.  **Menú Principal:**

    * El programa mostrará un menú con las siguientes opciones:

        * Calcular el área de un cuadrado.

        * Calcular el área de un rectángulo.

        * Calcular el área de un triángulo.

2.  **Selección de Opción:**

    * El usuario deberá ingresar el número correspondiente a la operación que desea realizar.

3.  **Solicitud de Datos:**

    * Dependiendo de la opción seleccionada, el programa solicitará los datos necesarios:

        * **Cuadrado:** Lado.

        * **Rectángulo:** Base y altura.

        * **Triángulo:** Base y altura.

4.  **Cálculo y Resultado:**

    * El programa realizará el cálculo del área utilizando las fórmulas correspondientes:

        * **Cuadrado:** Área = lado * lado

        * **Rectángulo:** Área = base * altura

        * **Triángulo:** Área = (base * altura) / 2

    * El resultado del área se mostrará en pantalla.

5.  **Manejo de Errores:**

    * Si el usuario ingresa una opción no válida o datos incorrectos, el programa mostrará un mensaje de error y solicitará que se ingrese la información nuevamente. */
let nombreUsuario = prompt("Hola, ingresa tu nombre x favor :")
alert("Hola " +nombreUsuario+ "listo para la aventura? Presiona ok")
let continuar = true;

while (continuar) {
    // Mostrar menú principal
    const opcion = prompt(
        "CALCULADORA DE ÁREAS\n\n" +
        "1. Calcular área de un cuadrado\n" +
        "2. Calcular área de un rectángulo\n" +
        "3. Calcular área de un triángulo\n" +
        "4. Salir\n\n" +
        "Seleccione una opción (1-4):"
    );

    // Salir si el usuario cancela o elige la opción 4
    if (opcion === null || opcion === "4") {
        alert("¡Gracias por usar la calculadora!");
        continuar = false;
        continue;
    }

    // Procesar la opción seleccionada
    switch (opcion) {
        case "1": // Área de cuadrado
            let ladoValido = false;
            let lado;
            
            while (!ladoValido) {
                lado = prompt("Ingrese la longitud del lado del cuadrado:");
                
                if (lado === null) break;
                
                lado = parseFloat(lado);
                
                if (isNaN(lado) || lado <= 0) {
                    alert("Error: Debe ingresar un número positivo válido.");
                } else {
                    ladoValido = true;
                    const area = lado * lado;
                    alert(`El área del cuadrado es: ${area.toFixed(2)}`);
                }
            }
            break;
            
        case "2": // Área de rectángulo
            let baseValida = false;
            let alturaValida = false;
            let base, altura;
            
            // Solicitar base
            while (!baseValida) {
                base = prompt("Ingrese la base del rectángulo:");
                
                if (base === null) break;
                
                base = parseFloat(base);
                
                if (isNaN(base) || base <= 0) {
                    alert("Error: Debe ingresar un número positivo válido para la base.");
                } else {
                    baseValida = true;
                }
            }
            
            // Solicitar altura solo si la base es válida
            if (baseValida) {
                while (!alturaValida) {
                    altura = prompt("Ingrese la altura del rectángulo:");
                    
                    if (altura === null) break;
                    
                    altura = parseFloat(altura);
                    
                    if (isNaN(altura) || altura <= 0) {
                        alert("Error: Debe ingresar un número positivo válido para la altura.");
                    } else {
                        alturaValida = true;
                        const area = base * altura;
                        alert(`El área del rectángulo es: ${area.toFixed(2)}`);
                    }
                }
            }
            break;
            
        case "3": // Área de triángulo
            let baseTriValida = false;
            let alturaTriValida = false;
            let baseTri, alturaTri;
            
            // Solicitar base
            while (!baseTriValida) {
                baseTri = prompt("Ingrese la base del triángulo:");
                
                if (baseTri === null) break;
                
                baseTri = parseFloat(baseTri);
                
                if (isNaN(baseTri) || baseTri <= 0) {
                    alert("Error: Debe ingresar un número positivo válido para la base.");
                } else {
                    baseTriValida = true;
                }
            }
            
            // Solicitar altura solo si la base es válida
            if (baseTriValida) {
                while (!alturaTriValida) {
                    alturaTri = prompt("Ingrese la altura del triángulo:");
                    
                    if (alturaTri === null) break;
                    
                    alturaTri = parseFloat(alturaTri);
                    
                    if (isNaN(alturaTri) || alturaTri <= 0) {
                        alert("Error: Debe ingresar un número positivo válido para la altura.");
                    } else {
                        alturaTriValida = true;
                        const area = (baseTri * alturaTri) / 2;
                        alert(`El área del triángulo es: ${area.toFixed(2)}`);
                    }
                }
            }
            break;
            
        default:
            alert("Error: Opción no válida. Por favor seleccione 1-4.");
            break;
    }

    // Preguntar si quiere hacer otro cálculo (excepto cuando eligió salir)
    if (opcion !== "4" && opcion !== null) {
        const otroCalculo = confirm("¿Desea realizar otro cálculo?");
        if (!otroCalculo) {
            alert("¡Gracias por usar la calculadora!");
            continuar = false;
        }
    }
}
