var eta = parseInt(prompt("Inserisci la tua eta"))
var km = parseInt(prompt("Inserisci quanti KM vuoi percorrere"))


document.getElementById("age").innerHTML = eta
document.getElementById("km").innerHTML = km



var int = km * 0.21
document.getElementById("int").innerHTML = int + " €"


if (eta > 65) {
    var over = int - (int * 0.4)
    document.getElementById("over").innerHTML = over + " €"
    document.getElementById("discount").innerHTML = "HAI DIRITTO AD UNO SCONTO OVER 65 DI: " + int * 0.4 + " €"
} else if (eta < 18) {
    var under = int - (int * 0.2)
    document.getElementById("under").innerHTML = under + " €"
    document.getElementById("discount").innerHTML = "HAI DIRITTO AD UNO SCONTO UNDER 18 DI: " + int * 0.2 + " €"

} else {
    document.getElementById("discount").innerHTML = "NON HAI DIRITTO A NESSUNO SCONTO"
}