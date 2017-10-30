//inicializo variables
var cartas = [];
var cartasGiradas = [];
var num_intentos = 0;
var restantes = 8;
var contador = 1;
var primer_src=true;
var carta1_src = "";
var carta2_src = "";
var intentos = 0 ;
var limite = 0 ;
var sumaMinutos = 0;
var tiempo_total = "";
var fin_tiempo=setInterval(timer,1000);
var ayudasQueQuedan = 3;
var resultadoAyudas = "";
var indicoFinal = false;

/*aquesta funcio la utilitzo perque no s'executi la funcio de cambiar 
clase fins que s'hagi carregat tot l'html, per tal d'evitar possibles errors.*/
function inicializar(){
    //inhabilito boton guardar puntuacion hasta que termine el juego
    document.getElementById("buttonSavePunctuation").disabled = true;
	//pongo eventlistener a cada carta que al hacer clic llama a la funcion logica_juego
	cartas = document.getElementsByClassName("flip-container");
	for(var i = 0; i < cartas.length; i++){
		document.getElementById("a_girar"+i).addEventListener( 'click', logica_juego);
	}
	//pongo eventlistener al boton que llama a la funcion de ayuda
	document.getElementById("ayuda").addEventListener( 'click', ayudas3);
	
	//inicializo los intentos, las parejas restantes y las ayudas restantes
	document.getElementById("pareja").innerHTML = (cartas.length)/2;
	actualizar_intentos(intentos=0);
	document.getElementById("ayudaRestante").innerHTML = "("+(ayudasQueQuedan)+")";

	//inicializo las variables de los audios
	var girar = document.getElementById("girar");
	var acierto = document.getElementById("acierto");
	var error = document.getElementById("error");
	var win1 = document.getElementById("win1");
}

/*aqui controlo la lógica general del joc*/
function logica_juego(){
	if(cartasGiradas.length < 2){
	    if (this.classList.contains("clicked")){}else{
	    	//giro carta y cojo source
	    	girar_carta(this);
	    }
	    if(cartasGiradas.length==2){
	    	//actualizo los intentos
	    	actualizar_intentos(intentos=1);
			//compruebo si son iguales
			if (carta1_src == carta2_src){
				//cambio clase para que no giren nunca mas
				bloquearCartas();
				//actualizo pareja restante
  				actualizar_parejaRestante();
				//pongo variable a true para colocar source siguiente carta girada en variable carta1_src y no carta2_src
				primer_src=true;
				//actualizo array cartas
				cartasGiradas = document.getElementsByClassName("clicked");
				//fin juego
   				if (restantes==0) {
   					fin_juego();
   				}			
			}else{
				error.play();
				//giro cartas erroneas tras 1.5 segundos
	    		setTimeout(function(){
    				cartaErronea();
				}, 1500);
				
			}
	    }
	    //actualizo array cartas
	    cartasGiradas = document.getElementsByClassName("flip-container clicked");	
	}
}

function bloquearCartas(){
	cartasGiradas[0].className="forever";
	cartasGiradas[0].className="forever";
}

function fin_juego(){
	win1.play();
	indicoFinal = true;
    alert("WIN!!!\n\nHas trigat "+tiempo_total+" y has necessitat "+num_intentos+" intents.");
   	clearInterval(fin_tiempo);
   	document.getElementById("buttonSavePunctuation").disabled = false;
}

function actualizar_parejaRestante(){
	acierto.play();
	cartas = document.getElementsByClassName("flip-container");
   	restantes = (cartas.length)/2;
   	document.getElementById("pareja").innerHTML = restantes;
}

function actualizar_intentos(intentos){
	num_intentos= num_intentos +intentos;
	document.getElementById("intentos").innerHTML = num_intentos;
}

function girar_carta(elemento){
	girar.play();
	elemento.classList.add("clicked");
	if (primer_src) {
	  	carta1_src = elemento.childNodes[0].childNodes[1].firstChild.getAttribute('src');
	   	primer_src=false;
	} else {
	 	carta2_src = elemento.childNodes[0].childNodes[1].firstChild.getAttribute('src');
	}
}

function cartaErronea(){
	cartasGiradas[0].className="flip-container";
	cartasGiradas[0].className="flip-container";
    //esto es para qu el source de la primera carta girada se guarde en la variable carta1_src y no en carta2_src
	primer_src=true;
}

/* contador de tiempo */
function timer(){
	if (contador<10) {
		tiempo_total = sumaMinutos+":0"+contador;
	} else {
		tiempo_total = sumaMinutos+":"+contador;
	}
	document.getElementById("tiempo").innerHTML = tiempo_total;
	contador=contador+1;
	if (contador==60){
		sumaMinutos = sumaMinutos+1;
		contador=0;
	}
}

/* ayuda gira todas las cartas 5 segundos */
function ayudas3(){
	var cartas_a_girar = document.getElementsByClassName("flip-container");
	if (ayudasQueQuedan!=0 && indicoFinal == false){
		for (var i = 0; i < cartas_a_girar.length; i++) {
			//este if lo hago para evitar que se gire una carta que hayas cliqueado y aun no hayas girado la segunda
			if (cartas_a_girar[i].classList.contains("clicked")){
				cartas_a_girar[i].classList.add("doNothing");
			}else {
				cartas_a_girar[i].classList.add("clicked");
			}
		}
    	setTimeout(function(){
    		for (var i = 0; i < cartas_a_girar.length; i++){
    			if (cartas_a_girar[i].classList.contains("doNothing")){
					cartas_a_girar[i].classList.remove("doNothing");
				}else {
					cartas_a_girar[i].classList.remove("clicked");
				}
    		}
		}, 5000);

	actualizar_intentos(intentos=5);
	ayudasQueQuedan = ayudasQueQuedan - 1;
	resultadoAyudas="("+(ayudasQueQuedan)+")";
	document.getElementById("ayudaRestante").innerHTML = resultadoAyudas;
	}
}

//funciones del ranking
function guardarPuntuacion(){
	guardarNombre();
	guardarScore();
	guardarTiempo();
}
function guardarNombre(){
    var nombre = prompt("Introduce tu nombre:", "");
    if (nombre == null || nombre == "") {
        alert("\nNo se guardarà la puntuación.\n");
    } else {
        document.getElementById("cogernombre").value = nombre;
    }
}
function guardarScore(){
	var score = num_intentos;
    document.getElementById("cogerpuntuacion").value = score;
}
function guardarTiempo(){
	var tiempo = tiempo_total;
    document.getElementById("cogertiempo").value = tiempo_total;
}
//compruebo que se haya introducido el nombre
function comprovarValidez(){
	var validarNombre = document.getElementById("cogernombre").value;
	var validarScore = document.getElementById("cogerpuntuacion").value;
	var introducido = true;
	if (validarNombre.length == 0 || validarNombre == null || validarScore == null){
    	introducido = false;
	}
	return introducido;
}