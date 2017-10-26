//inicializo variables
var cartas = [];
var cartasGiradas = [];
var num_intentos = 0;
var restantes = 0;
var quitar_carta = 0;
var contador = 0;
var first_time=true;
var carta1_src = "";
var carta2_src = "";
var intentos = 0 ;
var limite = 0 ;
var sumaMinutos = 0;
var tiempo_total = "";
var fin_tiempo=setInterval(timer,1000);
var ayudasQueQuedan = 3;
var resultadoAyudas = "";

/*aquesta funcio la utilitzo perque no s'executi la funcio de cambiar 
clase fins que s'hagi carregat tot l'html, per tal d'evitar possibles errors.*/
function inicializar(){
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
	// var girar = document.getElementById("girar");
	// var acierto = document.getElementById("acierto");
	// var error = document.getElementById("error");
}

/*aqui controlo la lógica general del joc*/
function logica_juego(){
	if(cartasGiradas.length < 2){
	    //giro carta y cojo source
	    girar_carta(this);
	    if(cartasGiradas.length==2){
	    	//actualizo los intentos
	    	actualizar_intentos(intentos=1);
			//compruebo si son iguales
			if (carta1_src == carta2_src){
  				//actualizo pareja restante
  				actualizar_parejaRestante();
				//fin juego
   				if (restantes==0) {
   					fin_juego();
   				}
				//cambio clase para que no giren nunca mas
				bloquearCartas();
				first_time=true;			
			}
			cartasGiradas = document.getElementsByClassName("flip-container clicked");
			//giro cartas erroneas tras 2 segundos
	    	setTimeout(function(){
    			cartaErronea();
				first_time=true;
			}, 2000);
	    } 
	    cartasGiradas = document.getElementsByClassName("flip-container clicked");  	
	}
}

function bloquearCartas(){
	cartasGiradas[0].className="flip-container forever";
	cartasGiradas[0].className="flip-container forever";
}

function fin_juego(){
	alert("WIN!!!\n\nHas trigat "+tiempo_total+" y has necessitat "+num_intentos+" intents.");
   	clearInterval(fin_tiempo);
}

function actualizar_parejaRestante(){
	//acierto.play();
	quitar_carta=quitar_carta+2;
   	restantes = (cartas.length - quitar_carta)/2;
   	document.getElementById("pareja").innerHTML = restantes;
}

function actualizar_intentos(intentos){
	num_intentos= num_intentos +intentos;
	document.getElementById("intentos").innerHTML = num_intentos;
}

function girar_carta(elemento){
	elemento.classList.add("clicked");
	//girar.play();
	if (first_time) {
	  	carta1_src = elemento.childNodes[0].childNodes[1].firstChild.getAttribute('src');
	   	first_time=false;
	} else {
	 	carta2_src = elemento.childNodes[0].childNodes[1].firstChild.getAttribute('src');
	}
}

function cartaErronea(){
	//error.play();
	cartasGiradas[0].className="flip-container";
	cartasGiradas[0].className="flip-container";
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
	if (ayudasQueQuedan!=0){
		cartas_a_girar = document.getElementsByClassName("flip-container");
		for (var i = 0; i < cartas_a_girar.length; i++) {
    		cartas_a_girar[i].classList.add("clicked");
   		}
    	setTimeout(function(){
    		for (var i = 0; i < cartas_a_girar.length; i++) {
    			cartas_a_girar[i].classList.remove("clicked");
    		}
		}, 5000);

	actualizar_intentos(intentos=5);
	ayudasQueQuedan = ayudasQueQuedan - 1;
	resultadoAyudas="("+(ayudasQueQuedan)+")";
	document.getElementById("ayudaRestante").innerHTML = resultadoAyudas;
	}
}