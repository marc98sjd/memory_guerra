<html>  
  <head>
  	<!-- link javascript -->
  	<script type="text/javascript" src="javascript_memory.js"></script>
    <!-- link al css -->
    <link rel="stylesheet" type="text/css" href="css_memory.css">
    <!-- aqui creo les variables php i asigno valor a files i columnes -->
    <?php
      $tamaño =  $_POST['tamaño_tablero'];
      $a=0;
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
      $a=(($filas*$columnas)/2)/2;
    ?>
    <title>MEMORY GUERRA</title>
    <meta charset="utf-8">                               
  </head>                                                                 
  <body>
    <table>
      <!-- aqui creo una array amb el nom dels fitxers que contenen les fotos, segons la quantitat que demana l'usuari-->
      <?php
	    $directorio="cartas";
	    $instancia_fotos= dir($directorio);
        for ($i=0; $i < 3 ; $i++) { 
        	$imagen = $instancia_fotos -> read();
        }
        $imagen = $instancia_fotos -> read();
        $array_fotos = array($imagen);
        for($x=0;$x<$a;$x++){
        	$imagen = $instancia_fotos -> read();
        	$array_fotos[] =$imagen;
        }
        $instancia_fotos ->close();
	      shuffle($array_fotos);
        print_r($array_fotos);
      	
      	/* aqui creo la quantitat de cartes del memory de forma dinamica, dins de diversos divs per tal de fer l'animació del flip */
      	for($i=0;$i<$filas;$i++){ 
          echo "<tr>";
          for($x=0;$x<$columnas;$x++){
          	$carta_delantera="cartas/".$array_fotos[$x];
            echo "<td class='color_fondo'>
                    <div class='flip-container' id='first' onclick='cambiar_clase()'>
                      <div class='flipper'>
                        <div class='front'>
                          <img src='$carta_delantera' class='fotos' >
                        </div>
                        <div class='back'>
                          <img src='tras_carta.jpg' class='fotos'>
                        </div>
                      </div>
                    </div>
                  </td>";
            }
          echo "</tr>";
        }
      ?>
    </table>
  </body>                                                                 
</html>