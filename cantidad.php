<html>  
  <head>
    <!-- faig el link al css -->
    <link rel="stylesheet" type="text/css" href="css_memory.css">
    <!-- aqui creo les variables php i asigno valor a files i columnes -->
    <?php
      $tamaño =  $_POST['tamaño_tablero'];
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
    ?>
    <title>MEMORY GUERRA</title>
    <meta charset="utf-8">                               
  </head>                                                                 
  <body>
    <table>
      <!-- aqui creo la quantitat de cartes del memory de forma dinamica, dins de diversos divs per tal de fer l'animació del flip -->
      <?php
      $directorio="cartas";
      $array_fotos= dir($directorio);
        for($i=0;$i<$filas;$i++){ 
          echo "<tr>";
            for($x=0;$x<$columnas;$x++){
              $imagen = $array_fotos -> read();
              echo $directorio."/".$imagen;
              echo "<td class='color_fondo'>
                      <div class='flip-container'>
                          <div class='flipper'>
                            <div class='front'>
                              <img src='tras_carta.jpg' class='fotos'>
                            </div>
                            <div class='back'>
                              <img src=$directorio"."/"."$imagen class='fotos'>
                            </div>
                          </div>
                      </div>
                    </td>";
            }
          echo "</tr>";
        }
        $array_fotos ->close();
      ?>
    </table>
  </body>                                                                 
</html>