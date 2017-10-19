var cartasClicadas = [];

/*aqui cambio la classe del element amb id 'a_girar' per la classe 'clicked'*/
function cambiar_clase(){
	cartasClicadas.push(this);
	if(this.className.includes("clicked")){
		//this.classList.remove("clicked");
	}else
    this.classList.add("clicked");
}
/*aquesta funcio la utilitzo perque no s'executi la funcio de cambiar clase fins que s'hagi carregat tot l'html, per tal d'evitar possibles errors. 
Afegeixo un event listener que al fer clic crida a la funcio 'cambiar_clase()'*/
function inicializar(){

	var cartas = document.getElementsByClassName("flip-container");
	for(var i = 0; i < cartas.length; i++){
		
		document.getElementById("a_girar"+i).addEventListener( 'click', cambiar_clase);
		
	}
}

/* PROBLEMA DE MOMENTO a solucionar:
 · solo me gira la primera carta
*/