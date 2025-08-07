let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [
{
    id: "usuario1",
    nombre: "Juan",
    saldos: [
    { moneda: "Pesos", monto: 0 },
    { moneda: "Dolares", monto: 0 },
    { moneda: "Euros", monto: 0 },
    { moneda: "Reales", monto: 0 }
    ]
},
{
    id: "usuario2",
    nombre: "Ariel",
    saldos: [
    { moneda: "Pesos", monto: 0 },
    { moneda: "Dolares", monto: 0 },
    { moneda: "Euros", monto: 0 },
    { moneda: "Reales", monto: 0 }
    ]
},
{
    id: "usuario3",
    nombre: "Matias",
    saldos: [
    { moneda: "Pesos", monto: 0 },
    { moneda: "Dolares", monto: 0 },
    { moneda: "Euros", monto: 0 },
    { moneda: "Reales", monto: 0 }
    ]
}
];
