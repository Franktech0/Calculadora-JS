var Arreglo1 = [];
var PilaOperadores = [];
var NotPosfijo = [];
var SalvarDatos = [];
var AuxDatos = [];



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
        console.log(cadena);
        if(cadena.length <= 30)
        {
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
        

        
        
        console.log(NotPosfijo); //al final nuestro resultado ya esta en notposfijo
        console.log(PilaOperadores);
        console.log(Arreglo1);
        PilaOperadores.forEach(element => {console.log(element)});
        Arreglo1.forEach(element => {console.log(element)});



        for(let i = 0; i<NotPosfijo.length; i++)
        {
            //console.log(NotPosfijo);
            if((NotPosfijo[i]!='+')&&(NotPosfijo[i]!='-')&&(NotPosfijo[i]!='/')&&(NotPosfijo[i]!='*'))
            {
                SalvarDatos.push(parseFloat(NotPosfijo[i]));//elimina el primer elemento del arreglo
                //salvar datos [2, 2, 4 ]
            }
            else if(NotPosfijo[i]=='+')
            {
                for(let i = 0; i<2; i++)
                {
                    //salvar datos llega con: [2, .5]
                    AuxDatos[i] = SalvarDatos.pop()//invertimos el orden de los ultimos leementos del arreglo
                }
                //auxdatos = [.5, 2]

                SalvarDatos.push(AuxDatos.pop()+AuxDatos.shift()); 
                //2+.5 = 2.5
            }
            else if(NotPosfijo[i]=='-')
            {
                
                for(let i = 0; i<2; i++)
                {
                    AuxDatos[i] = SalvarDatos.pop()//invertimos el orden de los ultimos leementos del arreglo
                }

                SalvarDatos.push(AuxDatos.pop()-AuxDatos.shift()); 
            }
            else if(NotPosfijo[i]=='*')
            {
                
                for(let i = 0; i<2; i++)
                {
                    AuxDatos[i] = SalvarDatos.pop()//invertimos el orden de los ultimos leementos del arreglo
                }

                SalvarDatos.push(AuxDatos.pop()*AuxDatos.shift()); 
            }
            else if(NotPosfijo[i]=='/')
            {
                
                for(let i = 0; i<2; i++)
                {   
                    AuxDatos[i] = SalvarDatos.pop()//invertimos el orden de los ultimos leementos del arreglo
                    //auxdatos = [4, 2]
                }
                console.log("este es auxiliar datos en la division: " + AuxDatos);

                SalvarDatos.push(AuxDatos.pop()/AuxDatos.shift());
                //2/4 = .5
                //salvardatos[2, .5]
            }
            else{
                alert("¡Hubo un error inesperado!")
            }
        }
        console.log(AuxDatos);
        console.log(SalvarDatos);

        resultado.textContent = String(SalvarDatos);
        }
        else{
            alert ("La longitud maxima de numeros y operadores es 30, porfavor ingrese menos numeros");
        }

    }
    
    borrar.onclick = function(){
        resultado.textContent = "";
        console.clear();
        resetear()
    }

}
function resetear(){
    resultado.textContent ="";
    Arreglo1 = [];
    PilaOperadores = [];
    NotPosfijo = [];
    SalvarDatos = [];
    AuxDatos = [];
}
