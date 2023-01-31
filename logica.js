var operando1;
var operando2;
var operacion;

function init(){
    var resultado = document.getElementById('resultado');
    var siete = document.getElementById('7');
    var ocho = document.getElementById('8');
    var nueve = document.getElementById('9');
    var multiplicacion = document.getElementById('multiplicacion');
    var cuatro = document.getElementById('4');
    var cinco = document.getElementById('5');
    var seis = document.getElementById('6');
    var resta = document.getElementById('resta');
    var uno = document.getElementById('1');
    var dos = document.getElementById('2');
    var tres = document.getElementById('3');
    var suma = document.getElementById('suma');
    var clear = document.getElementById('clear');
    var cero = document.getElementById('0');
    var division = document.getElementById('/');
    var igual = document.getElementById('igual');


    //eventos de click

    uno.onclick = function(a){
        resultado.textContent = resultado.textContent + "1";//se suma para no sobreescribir el codigo
    }
    dos.onclick = function(a){
        resultado.textContent = resultado.textContent + "2";
    }
    tres.onclick = function(a){
        resultado.textContent = resultado.textContent + "3";
    }
    cuatro.onclick = function(a){
        resultado.textContent = resultado.textContent + "4";
    }
    cinco.onclick = function(a){
        resultado.textContent = resultado.textContent + "5";
    }
    seis.onclick = function(a){
        resultado.textContent = resultado.textContent + "6";
    }
    siete.onclick = function(a){
        resultado.textContent = resultado.textContent + "7";
    }
    ocho.onclick = function(a){
        resultado.textContent = resultado.textContent + "8";
    }
    nueve.onclick = function(a){
        resultado.textContent = resultado.textContent + "9";
    }
    cero.onclick = function(a){
        resultado.textContent = resultado.textContent + "0";
    }
    suma.onclick = function(a){
        operando1 = resultado.textContent;
        operacion = "+";
    }
    resta.onclick = function(a){
        operando1 = resultado.textContent;
        operacion = "-";
    }
    multiplicacion.onclick = function(a){
        operando1 = resultado.textContent;
        operacion = "*";
    }
    division.onclick = function(a){
        operando1 = resultado.textContent;
        operacion = "/";
    }
    igual.onclick = function(a){
        operando2 = resultado.textContent;
        resolver();
    }
    

}
function limpiar(){
    resultado.textContent = "";
}
function resetear(){
    resultado.textContent ="";
    operando1 = 0;
    operando2 = 0;
    operacion = "";
}

function resolver(){
    var res = 0;
    switch (operacion) {
        case "+":
            res = parseFloat(operando1) + parseFloat(operando2);
            break;
        case "-":
            res = parseFloat(operando1) - parseFloat(operando2);
            break;
        case "*":
            res = parseFloat(operando1) * parseFloat(operando2);
            break;
        case "/":
                res = parseFloat(operando1) / parseFloat(operando2);
                break;        
    }
    resetear();
    resultado.textContent = res;
}
