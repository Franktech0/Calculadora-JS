var operando1 = "" ;
var operando2 = "" ;
var operando3 = "" ;
var operando4 = "" ;
var operacion = 0;
var cadena = "";
var acumulador = 0;
var opcion = "";
var aux = 0;
var Arreglo1 = [];
var PilaOperadores = [];
var NotPosfijo = [];


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

    igual.onclick = function(a)
    {
        cadena = resultado.textContent;
        
        //4+2-3

        
        
        //funciones de los arreglos
        //shift -elimina primer elemento del arreglo
        //unshift - agerga un eleemento al principio del arreglo
        //pop - eleminiar el ultimo elemento del arreglo
        //push - agrega un elemento al final del arreglo
        
        /*
        reglas simples de las operaciones posfijas

        operador = precedencia -> se cambia
        operador > precedencia -> se agrega a la pila
        operador < precedencia -> saca operadores
        parentesis derecho -> vacia pila

        (), [], {} = 1
        ^ = 2
        *, / = 3 -> solo ocupamos de aqui hacia abajo
        +, - = 4

        */
        
        //creamos nuestra pila
        //2+2/4  *2-1 = 1
        console.log(cadena.length);
        for(let i =0; i<cadena.length; i++){
            
            if((cadena[i]!='+')&&(cadena[i]!='-')&&(cadena[i]!='/')&&(cadena[i]!='*'))
            {
                Arreglo1.push(cadena[i]); //['2',
                NotPosfijo.push(Arreglo1.pop()); // -> salvamos los datos //[2, 2]
                console.log(NotPosfijo);
                if(cadena.length-1 == i)
                {
                    while(PilaOperadores.length != 0){
                        NotPosfijo.push(PilaOperadores.pop())//siempre se temrina con un numero
                    }
                }
            }
            else if(cadena[i]=='+' || cadena[i] =='-'|| cadena[i] =='*'|| cadena[i] =='/')
            {
                if(PilaOperadores != (PilaOperadores.length===0)) //Pila de operadores lleva un [+]
                {
                    //misma precendecia
                    if(((PilaOperadores[PilaOperadores.length - 1]== '*' || PilaOperadores[PilaOperadores.length - 1]== '/') && (cadena[i] == '*' || cadena[i] == '/')) || ((PilaOperadores[PilaOperadores.length - 1]== '+' || PilaOperadores[PilaOperadores.length - 1]== '-') && (cadena[i] == '+' || cadena[i] == '-')))
                    {
                        NotPosfijo.push(PilaOperadores.pop()); 
                        PilaOperadores.push(cadena[i]);//['+', '/']
                    }//el operador que viene en la cadena es de mayor precedencia 
                    else if((PilaOperadores[PilaOperadores.length - 1]== '-' || PilaOperadores[PilaOperadores.length - 1]== '+') && (cadena[i] =='*' || cadena[i] =='/'))
                    {
                        console.log(PilaOperadores);
                        PilaOperadores.push(cadena[i]);//['+', '/']
                    }//ultima condicion por defecto, saca todo y mete el utlimo
                    else{
                        console.log("esta es la longitud de la pila de operadores: "+PilaOperadores.length);
                        while(PilaOperadores.length != 0)
                        {
                                console.log(NotPosfijo);
                                NotPosfijo.push(PilaOperadores.pop());
                            
                        }
                        PilaOperadores.push(cadena[i]);
                    }
                }
                else{
                    PilaOperadores.push(cadena[i]);//[+]
                }
            }
        }
        

        
        
        console.log(NotPosfijo);
        console.log(PilaOperadores);
        console.log(Arreglo1);
        PilaOperadores.forEach(element => {console.log(element)});
        Arreglo1.forEach(element => {console.log(element)});



        /*
        //cadena ejemplo 12+12 un arrglo de 5 posiciones contanto el 0
        console.log(cadena.length)
        if(cadena.length < 30)
        {
        //22+2-2
            for(var i=0; i<cadena.length; i++)
            {
                //4+2*6
                if(cadena[i]!= null)
                {
                    if((cadena[i]!='+')&&(cadena[i]!='-')&&(cadena[i]!='/')&&(cadena[i]!='*'))
                    {
                        console.log("operando1: " + operando1);
                        operando1 += cadena[i];
                        console.log(operando1);
                    }
                    if(cadena[i]=='+'){
                        console.log("opcion suma");
                        operando2 = operando1; //4
                        console.log("operando 2:" + operando2);
                        acumulador += parseFloat(operando2);//
                        console.log("acumulador: "+acumulador);
                        operando2 = "";
                        operando1 = "";

                        opcion = '+';
                    }
                    if(cadena[i]=='-')
                    {
                        //ya funciona con 2 numeros
                        console.log("opcion resta");
                        operando2 = operando1; //operando 2 es igual a 5 //ahora tiene 2
                        console.log("operando 2: " + operando2);//5 positivo //2 positivo
                        if((Math.sign(parseFloat(operando2)) == 1) ||(Math.sign(parseFloat(operando2)) == 0))
                        {
                            acumulador = parseFloat(operando2);
                        }
                        else{
                            acumulador -= parseFloat(operando2); //5 //2
                            acumulador *= -1; //-5 //termina con 2 negativo
                            console.log(acumulador); //imprime -5 //imprime//-2
                            operando2 = ""; //vacea 
                            operando1 = ""; //vacea
                        }
                        
                        

                        opcion = "-"; // es la ultima operacion que se realiza antes de romper el ciclo
                    }
                    if(cadena[i]=='*')//9*3
                    {
                        console.log("opcion multiplicacion");
                        operando2 = operando1; //9 //3
                        console.log("operando 2:" + operando2);//9 //3
                        console.log("acumulador inicial: " + acumulador);

                        if (acumulador == 0)//en la primera vuelta si //aqui el acumulador ya vale 9
                        {
                            acumulador = parseFloat(operando2);//9
                            console.log("entre en la primera condicion " + acumulador);
                            operando2 = "";
                            operando1 = "";
                            
                        }
                        else{ //entra en la segunda vuelta
                            console.log("entre en la segunda condicion");
                            acumulador *= parseFloat(operando2);// 9/3 = 3
                            console.log("acumulador: "+acumulador);
                            operando2 = "";
                            operando1 = "";
                        };

                        opcion='*'; // es la ultima operacion que se realiza antes de romper el ciclo
                    }
                    if(cadena[i]=='/')
                    {
                        console.log("opcion division");
                        operando2 = operando1; //9 //3
                        console.log("operando 2:" + operando2);//9 //3
                        console.log("acumulador inicial: " + acumulador);
                        
                        if (acumulador == 0)//en la primera vuelta si //aqui el acumulador ya vale 9
                        {
                            acumulador = parseFloat(operando2);//9
                            console.log("entre en la primera condicion " + acumulador);
                            opcion='/';
                            operando2 = "";
                            operando1 = "";
                            
                        }
                        else{ //entra en la segunda vuelta
                            console.log("entre en la segunda condicion");
                            acumulador /= parseFloat(operando2);// 9/3 = 3
                            console.log("acumulador: "+acumulador);
                            operando2 = "";
                            operando1 = "";
                        };

                        opcion='/'; // es la ultima operacion que se realiza antes de romper el ciclo
                    }

                }
                else
                {
                    alert("Error inesperado, la calculadora no puede realizar esta operacion")
                    break;
                }
            }
        }
        else{
            alert("El numero maximo de digitos es 30");
            resetear();
        }
        // operacion = parseFloat(acumulador) + parseFloat(operando1);
        // operacion = parseFloat(acumulador) - parseFloat(operando1);
        // console.log(operacion);
        // resultado.textContent = operacion;
        console.log(opcion);
        console.log(operando1);
        resolver(opcion);
    

    }
    */
    borrar.onclick = function(){
        resultado.textContent = "";
        console.clear();
        resetear()
    }

}
function resetear(){
    resultado.textContent ="";
    operando1 = "";
    operando2 = "";
    operacion = "";
    acumulador = 0;
    opcion = "";
    Arreglo1 = [];
    PilaOperadores = [];
    NotPosfijo = [];
}

function resolver(a){
    console.log("entre a la funcion resolver");
    switch (a) {
        case "+":
            operacion = parseFloat(acumulador) + parseFloat(operando1);
            console.log("entre en la opcion sumar");
            break;
        case "-":
            operacion = parseFloat(acumulador) - parseFloat(operando1);
            console.log("entre en la opcion resta");
            break;
        case "*":
            operacion = parseFloat(acumulador) * parseFloat(operando1);
            console.log("entre en la opcion multiplicacion");
            break;
        case "/":
            if(acumulador != 0)
            {
                operacion = parseFloat(acumulador) / parseFloat(operando1); //acumulador vale 3 y operando 1 vale 2
                console.log("entre en la opcion division");
            }
            else{
                alert("No se puede dividir un número entre 0");
            }
            break;        
    }
    resultado.textContent = operacion;
    
    //resetear();
}}
