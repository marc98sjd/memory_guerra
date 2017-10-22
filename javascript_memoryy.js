var cartas = [];
var cartasGiradas = [];
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
    	/*giro carta sin hacer nada mas*/
    	this.classList.add("clicked");
    	alert(javaScriptVar);
    	if(cartasGiradas.length==2){
    		var carta_levantada1 = document.getElementsByClassName("fotos2")[0].getAttribute("src");
			var carta_levantada2 = document.getElementsByClassName("fotos2")[1].getAttribute("src");
			if (carta_levantada1 == carta_levantada2) {
   				alert("Working"); 
			}	
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
	document.getElementById("pareja").innerHTML = (cartas.length)/2;
}