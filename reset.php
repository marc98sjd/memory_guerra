<?php
	session_start();
	unset($_SESSION['array_final']);
	header('Location: juego_en_si.php');
?>