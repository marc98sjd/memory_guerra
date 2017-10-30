<?php
	session_start();
	$bdRankingMundial = fopen("ranking_mundial.txt", "a+") or die("Problema con permisos...");
	fwrite($bdRankingMundial, $_POST['sendname']."//");
	fwrite($bdRankingMundial, $_POST['sendscore']."//");
	fwrite($bdRankingMundial, $_POST['sendtime']."\r\n");
	fclose($bdRankingMundial);
	if(isset($_SESSION['rankinglocal'])){
		$bdRankingMundial = fopen("ranking_mundialLocal.txt", "a+") or die("Problema con permisos...");
		fwrite($bdRankingMundial, $_POST['sendname']."//");
		fwrite($bdRankingMundial, $_POST['sendscore']."//");
		fwrite($bdRankingMundial, $_POST['sendtime']."\r\n");
		fclose($bdRankingMundial);
	}else{
		$bdRankingMundial = fopen("ranking_mundialLocal.txt", "w") or die("Problema con permisos...");
		fwrite($bdRankingMundial, $_POST['sendname']."//");
		fwrite($bdRankingMundial, $_POST['sendscore']."//");
		fwrite($bdRankingMundial, $_POST['sendtime']."\r\n");
		fclose($bdRankingMundial);
		$_SESSION['rankinglocal'] = "ya no sobreescribas";
	}	
	unset($_SESSION['array_final']);
	header('Location: juego_en_si.php');
?>