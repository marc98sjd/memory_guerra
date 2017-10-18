/*aqui cambio la classe del element amb id 'a_girar' per la classe 'clicked'*/
function cambiar_clase(){
    document.getElementById("a_girar").className = "clicked";
}
/*aquesta funcio la utilitzo perque no s'executi la funcio de cambiar clase fins que s'hagi carregat tot l'html, per tal d'evitar possibles errors. 
Afegeixo un event listener que al fer clic crida a la funcio 'cambiar_clase()'*/
window.onload = function(){
    document.getElementById("a_girar").addEventListener( 'click', cambiar_clase);
}

/* PROBLEMA DE MOMENTO a solucionar:
 · solo me gira la primera carta
*/