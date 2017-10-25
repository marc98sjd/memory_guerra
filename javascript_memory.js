//inicializo variables
var cartas = [];
var cartasGiradas = [];
var num_intentos = 0;
var restantes = 0;
var quitar_carta = 0;
var contador = 1;
var first_time=true;
var carta1_src = "";
var carta2_src = "";
var intentos = 0 ;
var limite = 0 ;
var fin_tiempo=setInterval(timer,1000);

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
	
	//inicializo los intentos y las parejas restantes
	document.getElementById("pareja").innerHTML = (cartas.length)/2;
	actualizar_intentos(intentos=0);
}

/*aqui controlo la lógica general del joc*/
function logica_juego(){
	if(cartasGiradas.length==2){
		if(this.classList.contains("clicked")){
		}else{
			/*girar las dos cartas si son erroneas*/
			cartaErronea();
			first_time=true;
			girar_carta(this);
		}		
	}else if(cartasGiradas.length < 2){
	    //giro carta y cojo source
	    girar_carta(this);
	    //compruebo si hay dos cartas giradas
	    if(cartasGiradas.length==2){
	    	actualizar_intentos(intentos=1);
			//compruebo si son iguales
			if (carta1_src == carta2_src){
  				actualizar_parejaRestante();
				//fin juego
   				if (restantes==0) {
   					fin_juego();
   				}
				//cambio clase para que no giren nunca mas
				bloquearCartas();
				first_time=true;			
			}
	    }    	
	}
	cartasGiradas = document.getElementsByClassName("flip-container clicked");
}

function bloquearCartas(){
	cartasGiradas[0].className="flip-container forever";
	cartasGiradas[0].className="flip-container forever";
}

function fin_juego(){
	alert("WIN!!!\n\nHas trigat "+(contador-1)+" segons y has necessitat "+num_intentos+" intents.");
   	clearInterval(fin_tiempo);
}

function actualizar_parejaRestante(){
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
	if (first_time) {
	  	carta1_src = elemento.childNodes[0].childNodes[1].firstChild.getAttribute('src');
	   	first_time=false;
	} else {
	 	carta2_src = elemento.childNodes[0].childNodes[1].firstChild.getAttribute('src');
	}
}

function cartaErronea(){
	cartasGiradas[0].className="flip-container";
	cartasGiradas[0].className="flip-container";
}

/* contador de tiempo */
function timer(){
	document.getElementById("tiempo").innerHTML = contador;
	contador=contador+1;
}

function ayudas3(){
	limite=limite+1;
	if (limite<=3){
		cartas_a_girar = document.getElementsByClassName("flip-container");
		for (var i = 0; i < cartas_a_girar.length; i++) {
    		cartas_a_girar[i].classList.add("clicked");
   		}
    	setTimeout(function(){
    		for (var i = 0; i < cartas_a_girar.length; i++) {
    			cartas_a_girar[i].classList.remove("clicked");
    		}
		}, 3000);
	actualizar_intentos(intentos=5);
	}
}

/* var context = new AudioContext();
			var o = context.createOscillator();
			o.type = "sine";
			o.connect(context.destination);
			o.start();
			o.stop();
*/