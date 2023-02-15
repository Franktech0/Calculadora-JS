/**
 * Es una varibale que va almacenar la cadena recuperada de la pantalla de la calculadora 
 * en HTML
 */
var cadena;
/** 
 * Es una variable de tipo arreglo que sirve como pila para salvar los números de la cadena introducida
 * @type {Array}
 */
var Arreglo1 = [];
/**
 * Es un arreglo que sirve como pila para los operadores (+, -, *, /) de la calculadora
 * @type {Array}
 */
var PilaOperadores = [];
/**
 * Esta variable es un arreglo donde se guardara la cadena introducida por el usuario en 
 * notacion posfija.
 * @type {Array}
 */
var NotPosfijo = [];
/**
 * Es un arreglo que permite acomodar los datos para resolver la cadena creada en notacion posfija
 * @type {Array}
 */
var SalvarDatos = [];
/**
 * Es un arreglo que sirve como pila para invertir el orden de los datos en SalvarDatos[] y 
 * realizar la operación correctamente
 * @type {Array}
 */
var AuxDatos = [];



/**
 * function init() Es la funcion principal que se ejecutara tan pronto se cargue la pagina web 
 */
function init()
{
    /**
     * En esta parte se definen las variables que traeran los valores de los números
     * desde la vista en html (a través de su ID) 
     */
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
    /**
     * Aqui definimos las variables que almacenaran los valores de suma, resta, division y multiplicación,
     * los valores se recuperan de la vista html a través de su ID
     */
    var multiplicacion = document.getElementById('multiplicacion');
    var resta = document.getElementById('resta');
    var suma = document.getElementById('suma');
    var division = document.getElementById('division');
    /**
     * En esta parte se definen las variables que recuperan las acciones especiales (borrar e igual)
     * a traves de la vista html por su ID
     */
    var borrar = document.getElementById('clear');
    var igual = document.getElementById('igual');
    //resultado en pantalla
    /**Esta es la variable que recupera el valor de la pantalla de la calculadora a traves de su ID
    * en HTML
    */
    var resultado = document.getElementById('resultado');
    
    /**
     * 
     * @param {number} a Esta es una funcion de evento, cuando se presiona 1 en la vista 
     * HTML se dispara la funcion => cada vez que se presione 1, en la pantalla de la de 
     * calculadora se vera reflejado el valor de 1 sin borrar el anterior.  
     */
    uno.onclick = function(a){
        resultado.textContent = resultado.textContent + "1";
    }
    /**
     * 
     * @param {number} a Esta es una funcion de evento, cuando se presiona 2 en la vista 
     * HTML se dispara la funcion => cada vez que se presione 2, en la pantalla de la de 
     * calculadora se vera reflejado el valor de 2 sin borrar el anterior.  
     */
    dos.onclick = function(a){
        resultado.textContent = resultado.textContent + "2";
    }
    /**
     * 
     * @param {number} a Esta es una funcion de evento, cuando se presiona 3 en la vista 
     * HTML se dispara la funcion => cada vez que se presione 3, en la pantalla de la de 
     * calculadora se vera reflejado el valor de 3 sin borrar el anterior.  
     */
    tres.onclick = function(a){
        resultado.textContent = resultado.textContent + "3";
    }
    /**
     * 
     * @param {number} a Esta es una funcion de evento, cuando se presiona 4 en la vista 
     * HTML se dispara la funcion => cada vez que se presione 4, en la pantalla de la de 
     * calculadora se vera reflejado el valor de 4 sin borrar el anterior.  
     */
    cuatro.onclick = function(a){
        resultado.textContent = resultado.textContent + "4";
    }
    /**
     * 
     * @param {number} a Esta es una funcion de evento, cuando se presiona 4 en la vista 
     * HTML se dispara la funcion => cada vez que se presione 4, en la pantalla de la de 
     * calculadora se vera reflejado el valor de 4 sin borrar el anterior.  
     */
    cinco.onclick = function(a){
        resultado.textContent = resultado.textContent + "5";
    }
    /**
     * Esta y las funciones posteiorres hacen los mismo que las anteriores
     * @param {number} a 
     */
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
    
    /**
     * 
     * @param {caracter} a Esta función recibe un caracter (+) y a través de la vista HTML
     * se plasma en la pantalla, al ser presionado no remplaza a lo que esta en la pantalla,
     * solo se suma 
     */
    //eventos click de las operacions basicas
    suma.onclick = function(a){
        
        resultado.textContent = resultado.textContent + "+";
        
    }
    /**
     * 
     * @param {caracter} a Esta función recibe un caracter (-) y a través de la vista HTML
     * se plasma en la pantalla, al ser presionado no remplaza a lo que esta en la pantalla,
     * solo se suma 
     */
    resta.onclick = function(a){
        resultado.textContent = resultado.textContent + "-";
    }
    /**
     * 
     * @param {caracter} a Esta función recibe un caracter (*) y a través de la vista HTML
     * se plasma en la pantalla, al ser presionado no remplaza a lo que esta en la pantalla,
     * solo se suma 
     */
    multiplicacion.onclick = function(a){
        resultado.textContent = resultado.textContent + "*";
    }
    /**
     * 
     * @param {caracter} a Esta función recibe un caracter (/) y a través de la vista HTML
     * se plasma en la pantalla, al ser presionado no remplaza a lo que esta en la pantalla,
     * solo se suma 
     */
    division.onclick = function(a){
        resultado.textContent = resultado.textContent + "/";
    }

    
    /**
     * Al ser presionado el boton igual ejecuta la función => esta recupera lo que esta en la 
     * pantalla de la calculadora y lo guarda en un variable en forma de string, se manda a llamar
     * a la función operacion() y se le manda como paramétro la var cadena.
     * @param {caracter} a 
     */
    igual.onclick = function(a)
    {

        cadena = resultado.textContent;
        operacion(cadena);
    }
    /**
     * esta es una función que permite limpiar todas las variables del programa, asi como tambien 
     * la pantalla de la calculadora en HTML
     */
    borrar.onclick = function(){
            resultado.textContent = "";
            console.clear();
            resetear()
    }
}
/**
 * Esta es una funcion que se encargada de hacer todas las operaciones, recibe como parametro
 * una cadena de texto para despues analizarla y cambiarla a notación posfija
 * @param {String} cadena Es la cadena de texto recuperada de la pantalla
 */
function operacion(cadena){
    
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
        
        console.log(cadena.length);
        console.log(cadena);
        /**Se valida que la cadena introducida desde la calculadora no sea mayor a una longitud de 30 caracteres 
         * de lo contrario mostrara un mensaje de error.
        */
        if(cadena.length <= 30)
        {
        /**Se crea un ciclo donde se iterara la cadena */
        for(let i =0; i<cadena.length; i++){
            /**Si encontramos un número lo va a guardar en en el Arreglo1[] y posterior mente lo va a salvar
             * en NotPosfijo[]
            */
            if((cadena[i]!='+')&&(cadena[i]!='-')&&(cadena[i]!='/')&&(cadena[i]!='*'))
            {
                Arreglo1.push(cadena[i]);
                NotPosfijo.push(Arreglo1.pop()); 
                console.log(NotPosfijo);
                /**Si estamos en la ultima posición de la cadena entonces vacea la pila de operadores 
                 * y los inserta en el arreglo NotPosfijo
                 */
                if(cadena.length-1 == i)
                {
                    while(PilaOperadores.length != 0){
                        NotPosfijo.push(PilaOperadores.pop())
                    }
                }
            }
            /**Si encuentra un operador entonces pasa a revisar que operarador es (+, -, /, *) */
            else if(cadena[i]=='+' || cadena[i] =='-'|| cadena[i] =='*'|| cadena[i] =='/')
            {
                /** Aqui vamos a comenzar a contruir la operación en notación
                 * posfija.
                 * 
                 * primero debemos revisar las reglas simples de las operaciones posfijas

                 *  operador = precedencia -> se cambia
                 *  operador > precedencia -> se agrega a la pila
                 *  operador < precedencia -> saca operadores
                 *  parentesis derecho -> vacia pila
                */
                if(PilaOperadores.length != 0)/** si la longitud de PilaOperadores es diferete de 0 
                entonces entra y ejecuta el codigo */
                {
                    /**
                     * En este primer caso revisamos si la precedencia del operador es igual (+ y -)
                     */
                    if(((PilaOperadores[PilaOperadores.length - 1]== '*' || PilaOperadores[PilaOperadores.length - 1]== '/') && (cadena[i] == '*' || cadena[i] == '/')) || ((PilaOperadores[PilaOperadores.length - 1]== '+' || PilaOperadores[PilaOperadores.length - 1]== '-') && (cadena[i] == '+' || cadena[i] == '-')))
                    {
                        /**si es de igual precedencia sacamos el ultimo operador guardado en PilaOperadores
                         * y lo guardamos en NotPosfijo.
                         * Posteriormente guardamos el operador que se estaba revisando en la pila de operadores
                         */
                        NotPosfijo.push(PilaOperadores.pop()); 
                        PilaOperadores.push(cadena[i]);//['+', '/']
                    }
                    /** Si el operador que viene es de mayor precedencia, se procede a guardar el operador dentro de
                     * la pila de operadores
                      */
                    else if((PilaOperadores[PilaOperadores.length - 1]== '-' || PilaOperadores[PilaOperadores.length - 1]== '+') && (cadena[i] =='*' || cadena[i] =='/'))
                    {
                        console.log(PilaOperadores);
                        PilaOperadores.push(cadena[i]);//['+', '/']
                    }
                    /** Si el operador que viene en la cadena en la posicion i es de menor precedencia
                     * se sacan todos lo operadores de la pila de operadores y se agregan a el arreglo
                     * NotPosfijo.
                     * 
                     * Una vez hecho lo anterior y estando la pila de operadores vacia, se procede a guardar
                     * el operador que viene en la cadena a la PilaOperadores
                     */
                    else{
                        console.log("esta es la longitud de la pila de operadores: "+PilaOperadores.length);
                        /**Mientras la PilaOperadores sea diferente de 0 seguira sacando valores y 
                         * metiendolos en NotPosfijo
                         */
                        while(PilaOperadores.length != 0)
                        {
                            console.log(NotPosfijo);
                            NotPosfijo.push(PilaOperadores.pop());
                            
                        }
                        PilaOperadores.push(cadena[i]);
                    }
                }
                /**Si la longitud de PilaOperadores es igaul a cero entonces mete directamente 
                 * el operador que viene en cadena en la posición i en PilaOperadores
                 */
                else{
                    PilaOperadores.push(cadena[i]);//[+]
                }
            }
        }
        

        
        /** Mandamos a imprimir los arreglos en consola para verificar que todos estan vacios,
         * excepto NotPosfijo, que ya tiene la operacion en notacion posfija
         */
        console.log(NotPosfijo); 
        console.log(PilaOperadores);
        console.log(Arreglo1);

        /**Ahora vamos a resolver nuestra operación posfija:
         * 
         * Primero debemos crear un bucle que itere el arreglo NotPosfijo
        */
        for(let i = 0; i<NotPosfijo.length; i++)
        {
            /**
             * Verificamos si lo que esta en la posición i de NotPosfijo es un número:
             * si lo es, convertimos ese número que esta en String a un Flotante y lo
             * metemos al arreglo SalvarDatos
             */
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
        /**De los contrario mostrara un mensaje de error, pidiendo una cadena menor a 30 caracteres*/
        else{
            alert ("La longitud maxima de numeros y operadores es 30, porfavor ingrese menos numeros");
        }

    }    
/** Esta función limpia todas las variables que se ocupan en el programa */
function resetear(){
    resultado.textContent ="";
    Arreglo1 = [];
    PilaOperadores = [];
    NotPosfijo = [];
    SalvarDatos = [];
    AuxDatos = [];
}
