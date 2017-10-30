<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<script type="text/javascript" src="javascript_ranking.js"></script>
	<link rel="stylesheet" type="text/css" href="css_rank.css">
</head>
<body onload="ordenarTablaIntentos()">
	<?php
		$bdRankingMundial = fopen("ranking_mundial.txt", "r") or die("Problema con permisos...");
		session_start();
		unset($_SESSION['array_final']);
		unset($_SESSION['tamaño']);
	?>
	<div style="overflow-x:auto;">
		<table id="rank">
			<?php
				echo "<tr>";
				echo "<th onclick='ordenarTablaNombre()'>Nombre</th>
						<th onclick='ordenarTablaIntentos()'>Intentos</th><th>Tiempo</th>";
				echo "</tr>";
				while (!feof($bdRankingMundial)){
					echo "<tr>";
					$single= fgets($bdRankingMundial);
					$single= explode('//', $single);
					$limit= sizeof($single);
					for ($i=0; $i < $limit; $i++) { 
						echo "<td>".$single[$i]."</td>";	
					}
					echo "</tr>";
				}
				fclose($bdRankingMundial);
				echo "<tr>";
				echo "<td><p><strong>*NOTA:</strong> Para ordenar la tabla clica en Nombre para ordenarla alfabeticamente o en Intentos para ordenarla por numero de intentos.</p></td><td><form action='inicio.html'><input id='botonStart' type='submit' value='Nueva partida' /></form></td>";

				echo "</tr>";
			?>
		</table>
	</div>

</body>
</html>
