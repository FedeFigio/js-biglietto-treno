var ageEl = document.getElementById("age");
var kmEl = document.getElementById("km");
var intEl = document.getElementById("int");
var overEl = document.getElementById("over");
var underEl = document.getElementById("under");
var discountEl = document.getElementById("discount");

var eta = parseInt(prompt("Inserisci la tua eta"));
var km = parseInt(prompt("Inserisci quanti KM vuoi percorrere"));

ageEl.innerHTML = "#";
kmEl.innerHTML = "#";

if (isNaN(eta) && isNaN(km)) {
    discountEl.innerHTML = "DEVI INSERIRE UN ETA E I KM";
} else if (isNaN(eta)) {
    discountEl.innerHTML = "DEVI INSERIRE UN ETA";
    kmEl.innerHTML = km;
} else if (isNaN(km)) {
    discountEl.innerHTML = "DEVI INSERIRE I KM";
    ageEl.innerHTML = eta;
} else {
    ageEl.innerHTML = eta;
    kmEl.innerHTML = km;

    var int = km * 0.21;
    intEl.innerHTML = int.toFixed(2) + " €";

    if (eta > 65) {
        var over = (int - (int * 0.4)).toFixed(2);
        overEl.innerHTML = over + " €";
        discountEl.innerHTML = "HAI DIRITTO AD UNO SCONTO OVER 65 DI: " + (int * 0.4).toFixed(2) + " €";
    } else if (eta < 18) {
        var under = (int - (int * 0.2)).toFixed(2);
        underEl.innerHTML = under + " €";
        discountEl.innerHTML = "HAI DIRITTO AD UNO SCONTO UNDER 18 DI: " + (int * 0.2).toFixed(2) + " €";
    } else {
        discountEl.innerHTML = "NON HAI DIRITTO A NESSUNO SCONTO";
    }
}