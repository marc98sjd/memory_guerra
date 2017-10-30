<?php
	$bdRankingMundial = fopen("ranking_mundial.txt", "a+") or die("Problema con permisos...");
	fwrite($bdRankingMundial, $_POST['sendname']."//");
	fwrite($bdRankingMundial, $_POST['sendscore']."//");
	fwrite($bdRankingMundial, $_POST['sendtime']."\r\n");
	fclose($bdRankingMundial); 
	session_start();
	unset($_SESSION['array_final']);
	header('Location: juego_en_si.php');
?>