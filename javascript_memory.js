/*con esto cambio la clase del container de la carta para que haga la animación FLIP solo al hacer clic*/
function cambiar_clase(){
    document.getElementById("first").classList.toggle("clicked");
}

/*function sortear_array(array){
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    document.getElementById("demo").innerHTML = array;
}*/