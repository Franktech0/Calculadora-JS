var operando1 = "" ;
var operando2 = "";
var operacion ;
var cadena = "";
var cont = 0;



function init(){
    //numeros
    var uno = document.getElementById('1');
    var dos = document.getElementById('2');
    var tres = document.getElementById('3');
    var cuatro = document.getElementById('4');
    var cinco = document.getElementById('5');
    var seis = document.getElementById('6');
    var siete = document.getElementById('7');
    var ocho = document.getElementById('8');
    var nueve = document.getElementById('9');
    var cero = document.getElementById('0');
    //operaciones basicas
    var multiplicacion = document.getElementById('multiplicacion');
    var resta = document.getElementById('resta');
    var suma = document.getElementById('suma');
    var division = document.getElementById('division');
    //botones especiales
    var borrar = document.getElementById('clear');
    var igual = document.getElementById('igual');
    //resultado en pantalla
    var resultado = document.getElementById('resultado');
    

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

    //eventos click de las operacions basicas
    suma.onclick = function(a){
        
        resultado.textContent = resultado.textContent + "+";
        
    }
    resta.onclick = function(a){
        resultado.textContent = resultado.textContent + "-";
    }
    multiplicacion.onclick = function(a){
        resultado.textContent = resultado.textContent + "*";
    }
    division.onclick = function(a){
        resultado.textContent = resultado.textContent + "/";
    }

    //eventos click de los botones especiales

    igual.onclick = function(a){
        cadena = resultado.textContent;
        console.log(cadena);

        //cadena ejemplo 12+12 un arrglo de 5 posiciones contanto el 0
        console.log(cadena.length)
        for(var i=0; i<cadena.length; i++)
        {
            if((cadena[i] >= 0)&&(cadena[i]<=9))
            {
                operando2 += cadena[i];
                console.log("Este es el operando 2: "+operando2);
            }
            else{
                if(cadena[i]== "+")
                {
                    
                    for(var j=i+1; j < i; j++)
                    {
                        console.log("ejecucion " + j + "del for j")
                        operando1 += cadena[j];
                        console.log("este es el operando 1: " + operando1)
                        i++;
                    }
                    console.log(operando2)
                }
            }
        }

        operacion = parseFloat(operando2) + parseFloat(operando1);
        console.log(operacion);
        
    }
    borrar.onclick = function(){
        resultado.textContent = "";
        resetear()
    }

}
function resetear(){
    resultado.textContent ="";
    operando1 = "";
    operando2 = "";
    operacion = "";
}
    


/*    
}
function limpiar(){
    resultado.textContent = "";


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
    resultado.textContent = parseFloat(res);
}
*/
