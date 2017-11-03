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
	<div id="rank" style="overflow-x:auto;">
		<div id="primerDiv">
			<table id="tablaa" class="igual">
				<?php
					echo "<tr>";
					echo "<th onclick='ordenarTablaNombre()'>Nombre</th>
							<th onclick='ordenarTablaIntentos()'>Intentos</th><th>Tiempo</th>";
					echo "</tr>";
					while (!feof($bdRankingMundial)){
						echo "<tr class='trfirst'>";
						$single= fgets($bdRankingMundial);
						$single= explode('//', $single);
						$limit= sizeof($single);
						for ($i=0; $i < $limit; $i++) { 
							echo "<td class='primeratabla'>".$single[$i]."</td>";	
						}
						echo "</tr>";
					}
					fclose($bdRankingMundial);
				?>
			</table>
			<?php
				$bdRankingMundial = fopen("ranking_mundialLocal.txt", "r") or die("Problema con permisos...");
			?>
			<table id="tablaa2" class="igual">
				<?php
					echo "<tr>";
					echo "<th onclick='ordenarTablaNombreLocal()'>Nombre</th>
							<th onclick='ordenarTablaIntentosLocal()'>Intentos</th><th>Tiempo</th>";
					echo "</tr>";
					while (!feof($bdRankingMundial)){
						echo "<tr class='trsecond'>";
						$single= fgets($bdRankingMundial);
						$single= explode('//', $single);
						$limit= sizeof($single);
						for ($i=0; $i < $limit; $i++) { 
							echo "<td class='segundatabla'>".$single[$i]."</td>";	
						}
						echo "</tr>";
					}
					fclose($bdRankingMundial);
				?>
			</table>
		</div>
		<div id="segundodiv">
			<p><strong>*NOTA:</strong> Para ordenar la tabla clica en Nombre para ordenarla alfabeticamente o en Intentos para ordenarla por numero de intentos.</p>
			<form action='index.html'><input id='botonStart' type='submit' value='Nueva partida' /></form>
		</div>
		
	</div>

</body>
</html>
