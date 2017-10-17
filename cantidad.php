<html>  
  <head>
    <?php
      $filas =  $_GET['fila'];
      $columnas = $_GET['columna'];
      $contador = 0;
      $columnas_pares=0;
    ?>
    <style type="text/css">
      body{
        background-image: url("fondo_pagina.jpg");
        background-repeat: no-repeat;
      }
      table{
        margin-right: auto;
        margin-left:  auto;
        width: 65%;
        height: 65%;
        border: hidden;
        border-collapse: collapse;
      }
      td{
        padding: 5px;
        border:none;
      }
      /* entire container, keeps perspective */
      .flip-container {
        perspective: 1000px;
       }
      /* flip the pane when hovered */
      .flip-container:hover .flipper, .flip-container.hover .flipper {
        transform: rotateY(180deg);
      }
      .flip-container, .front, .back {
        width: 100px;
        height: 150px; 
      }
      /* flip speed goes here */
      .flipper {
        transition: 1.0s;
        transform-style: preserve-3d;
        position: relative;
      }
      /* hide back of pane during swap */
      .front, .back {
        backface-visibility: hidden;
        position: absolute;
        top: 0;
        left: 0;
      }
      /* front pane, placed above back */
      .front {
        z-index: 2;
        /* for firefox 31 */
        transform: rotateY(0deg);
      }
      /* back, initially hidden pane */
      .back {
        transform: rotateY(180deg);
      } 
      .fotos{
        width: 100%;
        height: 100%; 
        border-radius: 20px;
      }
    </style>                                         
  </head>                                                                 
  <body>
    <table border="15">
      <?php
        for($i=0;$i<$filas;$i++){ 
          echo "<tr>";
            for($x=0;$x<$columnas;$x++){
              echo "<td class='color_fondo'>
                      <div class='flip-container'>
                          <div class='flipper'>
                            <div class='front'>
                              <img src='tras_carta.jpg' class='fotos'>
                            </div>
                            <div class='back'>
                              <img src='vaca.jpg' class='fotos'>
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