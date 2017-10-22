var cartas = [];
var cartasGiradas = [];
/*aqui controlo la lógica general del joc*/
function cambiar_clase(){
	var a = cartasGiradas;
	if(cartasGiradas.length==2){
		for (var i = 0; i <= cartasGiradas.length; i++) {
			cartasGiradas[i].className="flip-container";
		}
		this.classList.add("clicked");
	}else if(cartasGiradas.length < 2){
    	this.classList.add("clicked");	
	}
	cartasGiradas = document.getElementsByClassName("flip-container clicked");
}
/*aquesta funcio la utilitzo perque no s'executi la funcio de cambiar clase fins que s'hagi carregat tot l'html, per tal d'evitar possibles errors. 
Afegeixo un event listener que al fer clic a la cartq crida a la funcio 'cambiar_clase()'*/
function inicializar(){
	cartas = document.getElementsByClassName("flip-container");
	for(var i = 0; i < cartas.length; i++){
		document.getElementById("a_girar"+i).addEventListener( 'click', cambiar_clase);
		
	}
}

/* PROBLEMA DE MOMENTO a solucionar:
 · al clicar cualquier carta despues de girar dos, no consigo que vuelvan a girar las anteriores
*/