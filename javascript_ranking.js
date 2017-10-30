//sortear tabla ranking
function ordenarTablaNombre(){
	var tabla, filas, mezclando, i, x, y, deberiaMezclar, orden, contadorMezcla = 0;
  tabla = document.getElementById("tablaa");
  mezclando = true;
  // sortear ascendente
  orden = "asc"; 
  // bucle que no para hasta que se dehe de mezclar
  while(mezclando){
    // empezamos seteando el switch a false
    mezclando = false;
    filas = tabla.getElementsByTagName("tr");
    /* bucle por todas las filas menos la primera que son los titulos y la ultima
    que es uma linea en blanco */
    for (i = 1; i < (filas.length - 2); i++) {
      // seteamos la variable de mezcla a false hasta comprovar si se deben sortear
      deberiaMezclar = false;
      /* cojo los elementos a comparar,, uno de la linea actual y otro de la siguiente */
      x = filas[i].getElementsByClassName("primeratabla")[0];
      y = filas[i + 1].getElementsByClassName("primeratabla")[0];
      x = x.innerHTML;
      x = x.toLowerCase();
      y = y.innerHTML;
      y = y.toLowerCase();
      //compruevo si se tienen que mezclar en funcion de si es ascendente o descendente
      if (orden == "asc") {
        if (x > y) {
          // si es que si, lo marco y salgo
          deberiaMezclar= true;
          break;
        }
      } else if (orden == "desc") {
        if (x < y) {
          // igual para orden descendente:
          deberiaMezclar= true;
          break;
        }
      }
    }
    if (deberiaMezclar) {
      /* si he marcado un switch, lo hago y lo marco como hecho*/
      filas[i].parentNode.insertBefore(filas[i + 1], filas[i]);
      mezclando = true;
      // a cada switch, incremento el contador en 1
      contadorMezcla ++; 
    } else {
      /* si no se ha cambiado nada y la ordeneccion para ordenar es
      ascendente, cambio la ordeneccion para ordenar y empiezo el loop de nuevo */
      if (contadorMezcla == 0 && orden == "asc") {
        orden = "desc";
        mezclando = true;
      }
    }
  }
}
function ordenarTablaIntentos(){
  var tabla, filas, mezclando, i, x, y, deberiaMezclar, orden, contadorMezcla = 0;
  tabla = document.getElementById("tablaa");
  mezclando = true;
  // sortear ascendente
  orden = "asc"; 
  // bucle que no para hasta que se dehe de mezclar
  while(mezclando){
    // empezamos seteando el switch a false
    mezclando = false;
    filas = tabla.getElementsByTagName("tr");
    /* bucle por todas las filas menos la primera que son los titulos y la ultima
    que es uma linea en blanco */
    for (i = 1; i < (filas.length - 2); i++) {
      // seteamos la variable de mezcla a false hasta comprovar si se deben sortear
      deberiaMezclar = false;
      /* cojo los elementos a comparar,, uno de la linea actual y otro de la siguiente */
      x = filas[i].getElementsByClassName("primeratabla")[1];
      y = filas[i + 1].getElementsByClassName("primeratabla")[1];
      x = x.innerHTML;
      x = parseInt(x);
      y = y.innerHTML;
      y = parseInt(y);
      //compruevo si se tienen que mezclar en funcion de si es ascendente o descendente
      if(orden == "asc"){
        if (x > y) {
          // si es que si, lo marco y salgo
          deberiaMezclar= true;
          break;
        }
      } else if (orden == "desc") {
        if (x < y) {
          // igual para orden descendente:
          deberiaMezclar= true;
          break;
        }
      }
    }
    if (deberiaMezclar) {
      /* si he marcado un switch, lo hago y lo marco como hecho*/
      filas[i].parentNode.insertBefore(filas[i + 1], filas[i]);
      mezclando = true;
      // a cada switch, incremento el contador en 1
      contadorMezcla ++; 
    } else {
      /* si no se ha cambiado nada y la ordeneccion para ordenar es
      ascendente, cambio la ordeneccion para ordenar y empiezo el loop de nuevo */
      if (contadorMezcla == 0 && orden == "asc") {
        orden = "desc";
        mezclando = true;
      }
    }
  }
}
//lo mismo para local
function ordenarTablaNombreLocal(){
  var tabla, filas, mezclando, i, x, y, deberiaMezclar, orden, contadorMezcla = 0;
  tabla = document.getElementById("tablaa2");
  mezclando = true;
  // sortear ascendente
  orden = "asc"; 
  // bucle que no para hasta que se dehe de mezclar
  while(mezclando){
    // empezamos seteando el switch a false
    mezclando = false;
    filas = tabla.getElementsByTagName("tr");
    /* bucle por todas las filas menos la primera que son los titulos y la ultima
    que es uma linea en blanco */
    for (i = 1; i < (filas.length - 2); i++) {
      // seteamos la variable de mezcla a false hasta comprovar si se deben sortear
      deberiaMezclar = false;
      /* cojo los elementos a comparar,, uno de la linea actual y otro de la siguiente */
      x = filas[i].getElementsByClassName("segundatabla")[0];
      y = filas[i + 1].getElementsByClassName("segundatabla")[0];
      //compruevo si se tienen que mezclar en funcion de si es ascendente o descendente
      if (orden == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          // si es que si, lo marco y salgo
          deberiaMezclar= true;
          break;
        }
      } else if (orden == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          // igual para orden descendente:
          deberiaMezclar= true;
          break;
        }
      }
    }
    if (deberiaMezclar) {
      /* si he marcado un switch, lo hago y lo marco como hecho*/
      filas[i].parentNode.insertBefore(filas[i + 1], filas[i]);
      mezclando = true;
      // a cada switch, incremento el contador en 1
      contadorMezcla ++; 
    } else {
      /* si no se ha cambiado nada y la ordeneccion para ordenar es
      ascendente, cambio la ordeneccion para ordenar y empiezo el loop de nuevo */
      if (contadorMezcla == 0 && orden == "asc") {
        orden = "desc";
        mezclando = true;
      }
    }
  }
}
function ordenarTablaIntentosLocal(){
  var tabla, filas, mezclando, i, x, y, deberiaMezclar, orden, contadorMezcla = 0;
  tabla = document.getElementById("tablaa2");
  mezclando = true;
  // sortear ascendente
  orden = "asc"; 
  // bucle que no para hasta que se dehe de mezclar
  while(mezclando){
    // empezamos seteando el switch a false
    mezclando = false;
    filas = tabla.getElementsByTagName("tr");
    /* bucle por todas las filas menos la primera que son los titulos y la ultima
    que es uma linea en blanco */
    for (i = 1; i < (filas.length - 2); i++) {
      // seteamos la variable de mezcla a false hasta comprovar si se deben sortear
      deberiaMezclar = false;
      /* cojo los elementos a comparar,, uno de la linea actual y otro de la siguiente */
      x = filas[i].getElementsByClassName("segundatabla")[1];
      y = filas[i + 1].getElementsByClassName("segundatabla")[1];
      x = x.innerHTML;
      x = parseInt(x);
      y = y.innerHTML;
      y = parseInt(y);
      //compruevo si se tienen que mezclar en funcion de si es ascendente o descendente
      if (orden == "asc") {
        if (x > y) {
          // si es que si, lo marco y salgo
          deberiaMezclar= true;
          break;
        }
      } else if (orden == "desc") {
        if (x < y) {
          // igual para orden descendente:
          deberiaMezclar= true;
          break;
        }
      }
    }
    if (deberiaMezclar) {
      /* si he marcado un switch, lo hago y lo marco como hecho*/
      filas[i].parentNode.insertBefore(filas[i + 1], filas[i]);
      mezclando = true;
      // a cada switch, incremento el contador en 1
      contadorMezcla ++; 
    } else {
      /* si no se ha cambiado nada y la ordeneccion para ordenar es
      ascendente, cambio la ordeneccion para ordenar y empiezo el loop de nuevo */
      if (contadorMezcla == 0 && orden == "asc") {
        orden = "desc";
        mezclando = true;
      }
    }
  }
}