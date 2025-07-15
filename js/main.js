let historial = []

function cambioDolar(montoPesos) {
    if (montoPesos <= 0) {
        alert("Por favor, ingresa un monto válido.");
        return;
    }
    const valorDolar = 1180;
    let conversion = montoPesos / valorDolar;
    historial.push(montoPesos + " pesos = " + conversion + " Dólares");
    alert(montoPesos + " pesos, es equivalente a " + conversion + " USD");
}

function cambioEuro (montoPesos){
    if (montoPesos <= 0) {
        alert("Por favor, ingrese un monto válido")
        return
    }
    const valorEuro = 1294
    conversion = montoPesos / valorEuro
    historial.push(montoPesos + " pesos = " + conversion + " Euros");
    alert(montoPesos + " pesos, es equivalente a " + conversion + " Euros")
}

function cambioReal (montoPesos){
    if (montoPesos <= 0) {
        alert("Por favor, ingrese un monto válido")
        return
    }
    const valorReal = 212
    conversion = montoPesos / valorReal
    historial.push(montoPesos + " pesos = " + conversion + " Reales");
    alert(montoPesos + " pesos, es equivalente a " + conversion + " Reales")
}

function mostrarHistorial() {
    if (historial.length === 0) {
        alert("No has hecho conversiones")
    }

    else {
        alert("Historial de conversiones \n" + historial.join("\n"))
    }
}

/*
let menu = parseInt(prompt("Bienvenido, ingresa una opción: \n 1-Convertir a USD \n 2-Convertir a Euro \n 3-Convertir a Real \n 4-Historial \n 5-salir"))

while (menu !== 5) {
    switch (menu) { 
        case 1:
            let montoUsd = parseInt(prompt("Ingrese la cantidad de dinero a convertir"));
            cambioDolar(montoUsd);
            break;
        case 2: 
            let montoEuro = parseInt(prompt("Ingrese la cantidad de dinero a convertir"))
            cambioEuro(montoEuro)
            break
        case 3: 
            let montoReal = parseInt(prompt("Ingresa la cantidad de dinero a convertir"))
            cambioReal(montoReal)
            break
        case 4: 
            mostrarHistorial()
            break
        default:
            alert("Opción incorrecta")
    }

    menu = parseInt(prompt("1-Convertir a USD \n 2-Convertir a Euro \n 3-Convertir a Real \n 4-Historial \n 5-salir"))
}

*/

// 2DA ENTREGA, AGREGANDO DOM Y EVENTOS, FUNCIONES DE ORDEN SUPERIOR, ETC.

let calcular = document.getElementById("calcular")
let monto = document.getElementById("monto")
let moneda = document.getElementById("moneda")

calcular.onclick = () => {

    if (monto.value === 0 || monto.value <= 0) {
        let mensajeError = document.createElement("p")
        mensajeError.innerText = ("Por favor ingrese un monto válido")
        document.body.appendChild(mensajeError)
    }

    else {

        let resultadoConversion = monto.value / moneda.value
        console.log(resultadoConversion)
        let printConversion = document.createElement("p")
        printConversion.innerHTML = `${monto.value} es igual a ${resultadoConversion}`
        document.body.appendChild(printConversion)

    }
}