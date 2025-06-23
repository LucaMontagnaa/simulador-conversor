
function cambioDolar (){
    let montoPesos = parseInt(prompt("Ingrese la cantidad de dinero a convertir"))
    if (montoPesos <= 0) {
        alert("ingrese un monto válido")
        return
    }
    const valorDolar = 1180
    conversion = montoPesos / valorDolar
    alert(montoPesos + " pesos, es equivalente a " + conversion + " USD")
}

function cambioEuro (){
    let montoPesos = parseInt(prompt("Ingrese la cantidad de dinero a convertir"))
    const valorEuro = 1294
    conversion = montoPesos / valorEuro
    alert(montoPesos + " pesos, es equivalente a " + conversion + " Euros")
}

function cambioReal (){
    let montoPesos = parseInt(prompt("Ingrese la cantidad de dinero a convertir"))
    const valorReal = 212
    conversion = montoPesos / valorReal
    alert(montoPesos + " pesos, es equivalente a " + conversion + " Reales")
}


let menu = parseInt(prompt("Bienvenido, ingresa una opción: \n 1-Convertir a USD \n 2-Convertir a Euro \n 3-Convertir a Real \n 4-salir"))

while (menu !== 4) {
    switch (menu) {
        case 1: 
            cambioDolar()
            break
        case 2: 
            cambioEuro()
            break
        case 3: 
            cambioReal()
            break
        default:
            alert("Opción incorrecta")
    }

    menu = parseInt(prompt("1-Convertir a USD \n 2-Convertir a Euro \n 3-Convertir a Real \n 4-salir"))
}