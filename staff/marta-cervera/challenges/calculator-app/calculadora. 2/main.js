// Añadimos las variables
var buttons = document.querySelectorAll("button");
var display = buttons[0];

var actual =" ";
var aux;
var operation;
var deleteNumber;

buttons [1].onclick= function() {
    actual= actual + "7";
    display.innerText= actual;
}

buttons [2].onclick= function(){
    actual= actual + "8";
    display.innerText= actual;
}

buttons [3].onclick= function(){
    actual= actual + "9";
    display.innerText= actual;
}
buttons [4].onclick= function(){
    aux= actual;
    operation="/";
    actual="";
}

buttons [5].onclick= function(){
    actual= actual + "4";
    display.innerText= actual;
}

buttons [6].onclick= function(){
    actual= actual + "5";
    display.innerText= actual;
}
buttons [7].onclick= function(){
    actual= actual + "6";
    display.innerText= actual;

}
buttons [8].onclick= function(){
    aux=actual;
    operation="x";
    actual="";
}
buttons [9].onclick= function(){
    actual= actual + "1";
    display.innerText= actual;
}
buttons [10].onclick= function(){
    actual= actual + "2";
    display.innerText= actual;
}
buttons [11].onclick= function(){
    actual= actual + "3";
    display.innerText= actual;
}
buttons [12].onclick= function(){
    aux=actual;
    operation="-";
    actual="";
}
buttons [13].onclick= function(){
    actual= "";
    display.innerText= actual;
}

buttons [14].onclick= function(){
    actual= actual + "0";
    display.innerText= actual;
}
buttons [15].onclick= function(){
    actual= actual + ".";
    display.innerText= actual;
}
buttons [16].onclick= function(){
    aux= actual;
    operation="+";
    actual="";
}
buttons [17].onclick= function(){
    result=calculate(Number(aux), operation, Number(actual));
    actual=result;
    display.innerText=actual;
}

function add(a,b) {
    return a + b;
}

function substract (a,b) {
    return a-b;
}

function multiply (a,b) {
    return a*b;
}

function divide (a,b)  {
    return a/b;
}

function calculate (a, operation, b) {
    if( operation == "+"){
        return add(a,b);
    }
    else if( operation =="-") {
        return substract(a,b);
    }
    
    else if( operation =="x") {
        return multiply (a,b);
    }
    else if( operation =="/") {
        return divide (a,b);
    }
    
}










