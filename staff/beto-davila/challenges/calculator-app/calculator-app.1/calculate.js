document.getElementById("n1").addEventListener("click", n1); //Añadimos eventos click a cada uno de los botones y asocionamos con repectivas funciones.
document.getElementById("n2").addEventListener("click", n2);
document.getElementById("n3").addEventListener("click", n3);
document.getElementById("n4").addEventListener("click", n4);
document.getElementById("n5").addEventListener("click", n5);
document.getElementById("n6").addEventListener("click", n6);
document.getElementById("n7").addEventListener("click", n7);
document.getElementById("n8").addEventListener("click", n8);
document.getElementById("n9").addEventListener("click", n9);
document.getElementById("n0").addEventListener("click", n0);
document.getElementById("add-button").addEventListener("click", additionSign);
document.getElementById("subs-button").addEventListener("click", substractionSign);
document.getElementById("div-button").addEventListener("click", divisionSign);
document.getElementById("x-button").addEventListener("click", multiplicationSign);
document.getElementById("equal-button").addEventListener("click", showResult);
document.getElementById("c-button").addEventListener("click", clearDisplay);




function n1() {
    var firstValue = document.getElementById("result").innerHTML; //Valor actual del display
    var secondValue = document.getElementById("n1").innerHTML; //Añadimos valor "1" con cada click
    document.getElementById("result").innerHTML = firstValue + secondValue; //concatenemos strings según valor anterior + añadido (secondValue)

}

function n2() {
    var firstValue = document.getElementById("result").innerHTML;
    var secondValue = document.getElementById("n2").innerHTML; //Añadimos valor "2" con cada click
    document.getElementById("result").innerHTML = firstValue + secondValue;

}

function n3() {
    var firstValue = document.getElementById("result").innerHTML;
    var secondValue = document.getElementById("n3").innerHTML; //Añadimos valor "3" con cada click
    document.getElementById("result").innerHTML = firstValue + secondValue;

}

function n4() {
    var firstValue = document.getElementById("result").innerHTML;
    var secondValue = document.getElementById("n4").innerHTML;
    document.getElementById("result").innerHTML = firstValue + secondValue;

}

function n5() {
    var firstValue = document.getElementById("result").innerHTML;
    var secondValue = document.getElementById("n5").innerHTML;
    document.getElementById("result").innerHTML = firstValue + secondValue;

}

function n6() {
    var firstValue = document.getElementById("result").innerHTML;
    var secondValue = document.getElementById("n6").innerHTML;
    document.getElementById("result").innerHTML = firstValue + secondValue;

}

function n7() {
    var firstValue = document.getElementById("result").innerHTML;
    var secondValue = document.getElementById("n7").innerHTML;
    document.getElementById("result").innerHTML = firstValue + secondValue;

}

function n8() {
    var firstValue = document.getElementById("result").innerHTML;
    var secondValue = document.getElementById("n8").innerHTML;
    document.getElementById("result").innerHTML = firstValue + secondValue;

}

function n9() {
    var firstValue = document.getElementById("result").innerHTML;
    var secondValue = document.getElementById("n9").innerHTML;
    document.getElementById("result").innerHTML = firstValue + secondValue;

}

function n0() {
    var firstValue = document.getElementById("result").innerHTML;
    var secondValue = document.getElementById("n0").innerHTML;
    document.getElementById("result").innerHTML = firstValue + secondValue;

}


function additionSign (){
        var firstValue = document.getElementById("result").innerHTML;
        var secondValue = document.getElementById("add-button").innerHTML; //Añadimos valor "+" al display
        document.getElementById("result").innerHTML = firstValue + secondValue;
}

function multiplicationSign (){
    var firstValue = document.getElementById("result").innerHTML;
    var secondValue = document.getElementById("x-button").innerHTML;
    document.getElementById("result").innerHTML = firstValue + secondValue;
}

function divisionSign (){
    var firstValue = document.getElementById("result").innerHTML;
    var secondValue = document.getElementById("div-button").innerHTML;
    document.getElementById("result").innerHTML = firstValue + secondValue;
}

function substractionSign (){
    var firstValue = document.getElementById("result").innerHTML;
    var secondValue = document.getElementById("subs-button").innerHTML;
    document.getElementById("result").innerHTML = firstValue + secondValue;
}

//Borrado del display 
function clearDisplay () {
    document.getElementById("result").innerHTML = "";
}

/* Creamos función showResult que, de acuerdo al valor en display (fistValue), buscamos en la string signos operadores
(indexOf method) y guardamos resultados en sus respectivas variables*/

function showResult (){
    var firstValue = document.getElementById("result").innerHTML;
    var addition = firstValue.indexOf("+"); //Búsqueda de signo operador en string. Devuelve valor de su posición !==-1
    var substraction = firstValue.indexOf("-");
    var division = firstValue.indexOf("÷");
    var multiplication = firstValue.indexOf("x");

    // Creamos condicional por el cual cada operación debería ser !== -1 --> si indexOf encontró el signo operador en la string para continuar con el bloque.

    if (addition !== -1) {
        arr = firstValue.split("+", 2);     // Función split busca posición signo operador y divide array en 2 subarrays (arr[0, 1]). Guardamos en arr.
        res = parseInt(arr[0]) + parseInt(arr[1]);  //Función parseInt devuelve enteros de arr[0, 1], hacemos operación aritmética y guardamos en res.
        document.getElementById("result").innerHTML = res; //Devolvemos resultado en display
    }
    else if (substraction !== -1) {
        arr = firstValue.split("-", 2);
        res = parseInt(arr[0]) - parseInt(arr[1]);
        document.getElementById("result").innerHTML = res;
    }
    else if (division !== -1) {
        arr = firstValue.split("÷", 2);
        res = parseInt(arr[0]) / parseInt(arr[1]);
        document.getElementById("result").innerHTML = res;
    }
    else if (multiplication !== -1) {
        arr = firstValue.split("x", 2);
        res = parseInt(arr[0]) * parseInt(arr[1]);
        document.getElementById("result").innerHTML = res;
    
}
    
}