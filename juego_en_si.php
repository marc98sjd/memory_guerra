<html>  
  <head>
  	<!-- link javascript -->
  	<script type="text/javascript" src="javascript_memoryy.js"></script>
    <!-- link al css -->
    <link rel="stylesheet" type="text/css" href="css_memoryy.css">
    <!-- aqui creo les variables php i asigno valor a files i columnes -->
    <?php
      $tamaño =  $_POST['tamaño_tablero'];
      $num_cartas=0;
      if($tamaño==6){
        $filas = 3;
        $columnas = 4;
      }elseif($tamaño==16){
        $filas = 4;
        $columnas = 8;
      }else{
        $filas = 8;
        $columnas = 8;
      }
      $num_cartas=(($filas*$columnas)/2);
    ?>
    <title>MEMORY GUERRA</title>
    <meta charset="utf-8">                               
  </head>                                                                 
  <body onload="inicializar()">
    <table>
      <!-- aqui creo una array amb el nom dels fitxers que contenen les fotos, segons la quantitat que demana l'usuari-->
      <?php
  	    $directorio="cartas";
  	    $instancia_fotos= dir($directorio);
        $array_fotos = array();
        for($x=0;$x<$num_cartas;$x++){
          $imagen = $instancia_fotos -> read();
          if($imagen !== '.' && $imagen !== '..'){
            $array_fotos[] = $imagen;
          }else{
            $x=$x-1;
          }      
        }
        $instancia_fotos ->close();
	      $array_fotos_duplicada=$array_fotos;
        $array_fotos=array_merge($array_fotos,$array_fotos_duplicada);
        shuffle($array_fotos);
      	
      	/* aqui creo la quantitat de cartes del memory de forma dinamica, dins de diversos divs per tal de fer l'animació del flip */
      	$y=0;
        for($i=0;$i<$filas;$i++){ 
          echo "<tr>";
          for($x=0;$x<$columnas;$x++){
          	$carta_delantera="cartas/".$array_fotos[$y];
            echo "<td class='color_fondo'>
                    <div class='flip-container' id='a_girar".$y."'>
                      <div class='flipper'>
                        <div class='front'>
                          <img src='tras_carta.jpg' class='fotos'>
                        </div>
                        <div class='back'>
                          <img src='$carta_delantera' class='fotos'>
                        </div>
                      </div>
                    </div>
                  </td>";
            $y+=1;
            }
          echo "</tr>";
        }
      ?>
    </table>
    <div id="results">
      <p id="elements">Parejas restantes:</p>
      <p id="pareja"></p>
      <br>
      <p id="elements">Intentos:</p>
      <p id="intentos"></p>
    </div>
  </body>                                                                 
</html>