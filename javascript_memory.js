//inicializo variables
var cartas = [];
var cartasGiradas = [];
var num_intentos = 0;
var restantes = 0;
var quitar_carta = 0;
var contador = 1;
first_time=true;
var carta1_src = "";
var carta2_src = "";
var fin_tiempo=setInterval(timer,1000);
/*aqui controlo la lógica general del joc*/
function logica_juego(){
	if(cartasGiradas.length==2){
		if(this.classList.contains("clicked")){
		}else{
			/*girar las dos cartas si son erroneas*/
			cartasGiradas[0].className="flip-container";
			cartasGiradas[0].className="flip-container";
		}
		/*giro la carta clicada despues de girar las dos 'abiertas' en caso que sean erroneas*/
		this.classList.add("clicked");
		carta1_src = this.childNodes[0].childNodes[1].firstChild.getAttribute('src');
		//actualizo array
		
	}else if(cartasGiradas.length < 2){
	    //giro carta
	    this.classList.add("clicked");
	    if (first_time) {
	    	carta1_src = this.childNodes[0].childNodes[1].firstChild.getAttribute('src');
	    	first_time=false;
	    } else {
	    	carta2_src = this.childNodes[0].childNodes[1].firstChild.getAttribute('src');
	    }
	    //compruebo, si hay dos, si son iguales
	    if(cartasGiradas.length==2){
	    	num_intentos= num_intentos +1;
	    	document.getElementById("intentos").innerHTML = num_intentos;
			if (carta1_src == carta2_src){
				//actualizo parejas
   				quitar_carta=quitar_carta+2;
   				restantes = (cartas.length - quitar_carta)/2;
   				document.getElementById("pareja").innerHTML = restantes;
				//fin juego
   				if (restantes==0) {
   					alert("WIN!!!\n\nHas trigat "+contador+" segons y has necessitat "+num_intentos+" intents.");
   					clearInterval(fin_tiempo);
   				}
				//case girar cartas iguales dos veces consecutivas
				first_time=true;
				//cambio clase para que no giren nunca mas
				cartasGiradas[0].className="flip-container forever";
				cartasGiradas[0].className="flip-container forever";   				
			}
	    }    	
	}
	cartasGiradas = document.getElementsByClassName("flip-container clicked");
}
/*aquesta funcio la utilitzo perque no s'executi la funcio de cambiar clase fins que s'hagi carregat tot l'html, per tal d'evitar possibles errors. 
Afegeixo un event listener que al fer clic a la cartq crida a la funcio 'cambiar_clase()'*/
function inicializar(){
	cartas = document.getElementsByClassName("flip-container");
	for(var i = 0; i < cartas.length; i++){
		document.getElementById("a_girar"+i).addEventListener( 'click', logica_juego);
	}
	//inicializo los intentos y las parejas restantes
	document.getElementById("pareja").innerHTML = (cartas.length)/2;
	document.getElementById("intentos").innerHTML = num_intentos;
}

function timer(){
	document.getElementById("tiempo").innerHTML = contador;
	contador=contador+1;
}

/* var context = new AudioContext();
			var o = context.createOscillator();
			o.type = "sine";
			o.connect(context.destination);
			o.start();
			o.stop();
*/