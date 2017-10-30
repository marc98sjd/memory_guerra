//sortear tabla ranking
function ordenarTablaNombre(){
	var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("tablaa");
  switching = true;
  // sortear ascendente
  dir = "asc"; 
  // bucle que no para hasta que se dehe de mezclar
  while(switching){
    // empezamos seteando el switch a false
    switching = false;
    rows = table.getElementsByTagName("tr");
    /* bucle por todas las filas menos la primera que son los titulos y la ultima
    que es uma linea en blanco */
    for (i = 1; i < (rows.length - 2); i++) {
      // seteamos la variable de mezcla a false hasta comprovar si se deben sortear
      shouldSwitch = false;
      /* cojo los elementos a comparar,, uno de la linea actual y otro de la siguiente */
      x = rows[i].getElementsByClassName("primeratabla")[0];
      y = rows[i + 1].getElementsByClassName("primeratabla")[0];
      //compruevo si se tienen que mezclar en funcion de si es ascendente o descendente
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          // si es que si, lo marco y salgo
          shouldSwitch= true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          // igual para orden descendente:
          shouldSwitch= true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /* si he marcado un switch, lo hago y lo marco como hecho*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      // a cada switch, incremento el contador en 1
      switchcount ++; 
    } else {
      /* si no se ha cambiado nada y la direccion para ordenar es
      ascendente, cambio la direccion para ordenar y empiezo el loop de nuevo */
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}
function ordenarTablaIntentos(){
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("tablaa");
  switching = true;
  // sortear ascendente
  dir = "desc"; 
  // bucle que no para hasta que se dehe de mezclar
  while(switching){
    // empezamos seteando el switch a false
    switching = false;
    rows = table.getElementsByTagName("tr");
    /* bucle por todas las filas menos la primera que son los titulos y la ultima
    que es uma linea en blanco */
    for (i = 1; i < (rows.length - 2); i++) {
      // seteamos la variable de mezcla a false hasta comprovar si se deben sortear
      shouldSwitch = false;
      /* cojo los elementos a comparar,, uno de la linea actual y otro de la siguiente */
      x = rows[i].getElementsByClassName("primeratabla")[1];
      y = rows[i + 1].getElementsByClassName("primeratabla")[1];
      //compruevo si se tienen que mezclar en funcion de si es ascendente o descendente
      if(dir == "asc"){
        if (x.innerHTML > y.innerHTML) {
          // si es que si, lo marco y salgo
          shouldSwitch= true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML < y.innerHTML) {
          // igual para orden descendente:
          shouldSwitch= true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /* si he marcado un switch, lo hago y lo marco como hecho*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      // a cada switch, incremento el contador en 1
      switchcount ++; 
    } else {
      /* si no se ha cambiado nada y la direccion para ordenar es
      ascendente, cambio la direccion para ordenar y empiezo el loop de nuevo */
      if (switchcount == 0 && dir == "desc") {
        dir = "asc";
        switching = true;
      }
    }
  }
}
//lo mismo para local
function ordenarTablaNombreLocal(){
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("tablaa2");
  switching = true;
  // sortear ascendente
  dir = "asc"; 
  // bucle que no para hasta que se dehe de mezclar
  while(switching){
    // empezamos seteando el switch a false
    switching = false;
    rows = table.getElementsByTagName("tr");
    /* bucle por todas las filas menos la primera que son los titulos y la ultima
    que es uma linea en blanco */
    for (i = 1; i < (rows.length - 3); i++) {
      // seteamos la variable de mezcla a false hasta comprovar si se deben sortear
      shouldSwitch = false;
      /* cojo los elementos a comparar,, uno de la linea actual y otro de la siguiente */
      x = rows[i].getElementsByClassName("segundatabla")[0];
      y = rows[i + 1].getElementsByClassName("segundatabla")[0];
      //compruevo si se tienen que mezclar en funcion de si es ascendente o descendente
      if (dir == "asc") {
        if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
          // si es que si, lo marco y salgo
          shouldSwitch= true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
          // igual para orden descendente:
          shouldSwitch= true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /* si he marcado un switch, lo hago y lo marco como hecho*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      // a cada switch, incremento el contador en 1
      switchcount ++; 
    } else {
      /* si no se ha cambiado nada y la direccion para ordenar es
      ascendente, cambio la direccion para ordenar y empiezo el loop de nuevo */
      if (switchcount == 0 && dir == "asc") {
        dir = "desc";
        switching = true;
      }
    }
  }
}
function ordenarTablaIntentosLocal(){
  var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
  table = document.getElementById("tablaa2");
  switching = true;
  // sortear ascendente
  dir = "desc"; 
  // bucle que no para hasta que se dehe de mezclar
  while(switching){
    // empezamos seteando el switch a false
    switching = false;
    rows = table.getElementsByTagName("tr");
    /* bucle por todas las filas menos la primera que son los titulos y la ultima
    que es uma linea en blanco */
    for (i = 1; i < (rows.length - 3); i++) {
      // seteamos la variable de mezcla a false hasta comprovar si se deben sortear
      shouldSwitch = false;
      /* cojo los elementos a comparar,, uno de la linea actual y otro de la siguiente */
      x = rows[i].getElementsByClassName("segundatabla")[1];
      y = rows[i + 1].getElementsByClassName("segundatabla")[1];
      //compruevo si se tienen que mezclar en funcion de si es ascendente o descendente
      if (dir == "asc") {
        if (x.innerHTML> y.innerHTML) {
          // si es que si, lo marco y salgo
          shouldSwitch= true;
          break;
        }
      } else if (dir == "desc") {
        if (x.innerHTML < y.innerHTML) {
          // igual para orden descendente:
          shouldSwitch= true;
          break;
        }
      }
    }
    if (shouldSwitch) {
      /* si he marcado un switch, lo hago y lo marco como hecho*/
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
      // a cada switch, incremento el contador en 1
      switchcount ++; 
    } else {
      /* si no se ha cambiado nada y la direccion para ordenar es
      ascendente, cambio la direccion para ordenar y empiezo el loop de nuevo */
      if (switchcount == 0 && dir == "desc") {
        dir = "asc";
        switching = true;
      }
    }
  }
}