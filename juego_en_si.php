<?php
session_start();
?>
<!DOCTYPE html>
<html>  
  <head>
  	<!-- link javascript -->
  	<script type="text/javascript" src="javascript_memory.js"></script>
    <!-- link al css -->
    <link rel="stylesheet" type="text/css" href="css_memory.css"> 
    <title>MEMORY GUERRA</title>
    <meta charset="utf-8">
    <!-- aqui creo les variables php i asigno valor a files i columnes -->
    <?php
      $_SESSION['tamaño'] =  $_POST['tamaño_tablero'];      
      $num_cartas=0;
      if($_SESSION['tamaño']==4){
        $filas = 4;
        $columnas = 4;
      }elseif($_SESSION['tamaño']==6){
        $filas = 6;
        $columnas = 6;
      }elseif($_SESSION['tamaño']==2){
        $filas = 2;
        $columnas = 2;
      }else{
        $filas = 8;
        $columnas = 8;
      }
      $num_cartas=(($filas*$columnas)/2);
    ?>                            
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
        if(isset($_SESSION['array_final'])){
          $array_fotos = $_SESSION['array_final'];
        }
        else{
          $array_fotos=array_merge($array_fotos,$array_fotos);
          shuffle($array_fotos);
          $_SESSION['array_final'] = $array_fotos;
        }     	
      	/* aqui creo la quantitat de cartes del memory de forma dinamica, dins de diversos divs per tal de fer l'animació del flip */
      	$y=0;
        for($i=0;$i<$filas;$i++){ 
          echo "<tr>";
          for($x=0;$x<$columnas;$x++){
          	$carta_delantera="cartas/".$array_fotos[$y];
            echo "<td class='color_fondo'><div class='flip-container' id='a_girar".$y."'><div class='flipper'><div class='front'><img src='tras_carta.jpg' class='fotos'></div><div class='back'><img src='$carta_delantera' class='fotos'></div></div></div></td>";
            $y=$y+1;
            }
          echo "</tr>";
        }
      ?>
    </table>
    <div id="results">
      <div id="final_results">
        <p>Parejas restantes:</p>
        <p id="pareja"></p>
        <br>
        <p>Intentos:</p>
        <p id="intentos"></p>
        <br>
        <p>Tiempo de juego:</p>
        <p id="tiempo"></p><p> segundos</p>
      </div>
      <div id="final_results">
        <br><button>Torna a començar</button>
      </div>
    </div>
  </body>                                                                 
</html>