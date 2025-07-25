/*
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

let saldos = [
    { moneda: "dolares", monto: 0 },
    { moneda: "euros", monto: 0 },
    { moneda: "reales", monto: 0 },
    { moneda: "pesos", monto: 0 }
]


let calcular = document.getElementById("calcular")
let monto = document.getElementById("monto")
let moneda = document.getElementById("moneda")

const monedas = {
    1180: "Dolares",
    1240: "Euros",
    220: "Reales"
}

let historial = JSON.parse(localStorage.getItem("historial")) || []

let saldoActual = document.querySelector(".saldo-actual")
saldoActual.innerText = `Tu saldo es de ${saldos.map(s => `${s.monto} ${s.moneda}`).join(", ")}`


calcular.onclick = () => {
    let mensajeError = document.querySelector(".mensaje-error")

    if (monto.value <= 0 || monto.value === "") {

        if(!mensajeError) {

            mensajeError = document.createElement("p")
            mensajeError.className = "mensaje-error"
            mensajeError.innerText = ("Por favor ingrese un monto válido")
            document.body.appendChild(mensajeError)
        }

        return
    }

    if (mensajeError) {
        mensajeError.remove()
    }

    let resultadoConversion = monto.value / moneda.value
    let nombreMoneda = monedas[moneda.value]

    let printConversion = document.querySelector(".mensaje-conversion")

    if (!printConversion) {
        printConversion = document.createElement("p")
        printConversion.className = "mensaje-conversion"
        document.body.appendChild(printConversion)
    }

    printConversion.innerHTML = `${monto.value} pesos es igual a ${resultadoConversion} ${nombreMoneda}`

    
    const conversiones = {
        id: historial.length + 1 ,
        monto: monto.value,
        moneda: monedas[moneda.value],
        resultado: resultadoConversion
    }

    historial.push(conversiones)
    localStorage.setItem("historial", JSON.stringify(historial))


    let HistorialContainer = document.querySelector(".historialContainer") 

    if (HistorialContainer) {
        HistorialContainer.remove()
    }

    
    
}

let mostrarHistorial = document.getElementById("mostrarHistorial")

mostrarHistorial.onclick = () => {
    let HistorialContainer = document.querySelector(".historialContainer")
    let printConversion = document.querySelector(".mensaje-conversion")

    if (printConversion) {
        printConversion.remove()
    }


    if (!HistorialContainer) {
        HistorialContainer = document.createElement("div")
        HistorialContainer.className = "historialContainer"
        document.body.appendChild(HistorialContainer)
    }

    HistorialContainer.innerHTML = ""

    let historialTitulo = document.createElement("h2")
    historialTitulo.innerText = "Historial"
    HistorialContainer.appendChild(historialTitulo)

    if (historial.length === 0) {
        let mensajeHistorialVacio = document.createElement("p")
        mensajeHistorialVacio.innerText = "Aún no hay conversiones"
        HistorialContainer.appendChild(mensajeHistorialVacio)
    }

    historial.forEach(item => {
        let printHistorial = document.createElement("p")
        printHistorial.innerText = `${item.id}: ${item.monto} pesos = ${item.resultado} ${item.moneda}`
        HistorialContainer.appendChild(printHistorial)

    })

    let btnCerrarHistorial = document.querySelector(".btnCerrarHistorial")
    let btnBorrarHistorial = document.querySelector(".btnBorrarHistorial")

    if (!btnCerrarHistorial) {
        btnCerrarHistorial = document.createElement("button")
        btnCerrarHistorial.className = "btnCerrarHistorial"
        btnCerrarHistorial.innerText= "Cerrar Historial"
        HistorialContainer.appendChild(btnCerrarHistorial)

        btnCerrarHistorial.onclick = () => {
            HistorialContainer.remove()
        }
    }

    if (!btnBorrarHistorial) {
        btnBorrarHistorial = document.createElement("button")
        btnBorrarHistorial.className = "btnBorrarHistorial"
        btnBorrarHistorial.innerText = "Borrar Historial"
        HistorialContainer.appendChild(btnBorrarHistorial)

        btnBorrarHistorial.onclick = () => {
            HistorialContainer.remove()
            historial.length = 0
            localStorage.removeItem("historial")
        }
    }
}

