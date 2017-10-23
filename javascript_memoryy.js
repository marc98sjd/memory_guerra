var cartas = [];
var cartasGiradas = [];
var cartasGiradasFoto = [];
var num_intentos = 0;
/*aqui controlo la lógica general del joc*/
function cambiar_clase(){
	if(cartasGiradas.length==2){
		if(this.classList.contains("clicked")){
		}else{
			/*bucle para girar las dos cartas si son erroneas*/
			for (var i = 0; i <= cartasGiradas.length; i++) {
				cartasGiradas[i].className="flip-container";
				/*esto lo hago porque sino al cambiar la clase, me cambia el array 
				  y el segundo elemento pasa al primer puesto y al iterar en el indice 1 no hay nada */
				cartasGiradas[i+1] = cartasGiradas[i];
			}
			/*giro la carta clicada despues de girar las dos 'abiertas'*/
			this.classList.add("clicked");
		}
		
	}else if(cartasGiradas.length < 2){
    	/*giro carta y compruebo si son iguales*/
    	this.classList.add("clicked");
    	cartasGiradasFoto = document.getElementsByClassName("flip-container clicked").lastchild;
    	if(cartasGiradas.length==2){
    		num_intentos= num_intentos +1;
    		document.getElementById("intentos").innerHTML = num_intentos;
			var myimg = cartasGiradasFoto[0].getElementsByTagName('img')[0];
			var mysrc = myimg.src;

			var context = new AudioContext();
			var o = context.createOscillator();
			o.type = "sine";
			o.connect(context.destination);
			o.start();
			o.stop();
    		/*var carta_levantada1 = cartasGiradas[0].getAttribute("src");
    		alert(cartasGiradas[0]);
			var carta_levantada2 = cartasGiradas[1].getAttribute("src");
			alert(carta_levantada2);
			if (carta_levantada1 == carta_levantada2) {
   				alert("Working"); 
			}*/
    	}
    	
	}
	/*actualizo array*/
	cartasGiradas = document.getElementsByClassName("flip-container clicked");
	
	document.getElementById("pareja").innerHTML = (cartas.length)/2;
}
/*aquesta funcio la utilitzo perque no s'executi la funcio de cambiar clase fins que s'hagi carregat tot l'html, per tal d'evitar possibles errors. 
Afegeixo un event listener que al fer clic a la cartq crida a la funcio 'cambiar_clase()'*/
function inicializar(){
	cartas = document.getElementsByClassName("flip-container");
	for(var i = 0; i < cartas.length; i++){
		document.getElementById("a_girar"+i).addEventListener( 'click', cambiar_clase);
	}
	//inicializo los intentos y las parejas restantes
	document.getElementById("pareja").innerHTML = (cartas.length)/2;
	document.getElementById("intentos").innerHTML = num_intentos;
}