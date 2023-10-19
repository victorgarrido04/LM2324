<?php

$nombre = $_POST["nombre"];
$apellido = $_POST["apellidos"];
$conector = $_POST["conector"];
$idioma = $_POST["idioma"];
$sexo = $_POST["sexo"];
$fecha = $_POST["fecha"];

$mensaje = "Este mensaje fue enviado por " . $nombre . ",\r\n";
$mensaje = "Su nombre es: " . $nombre . ",\r\n";
$mensaje = "Su sexo es: " . $sexo . ",\r\n";
$mensaje = "Fecha: " . $fecha . ;  
$mensaje = "Este email fue enviado el " .date("d/m/Y"), time();

$para = "victorgarrido04@iesamachado.org";
$asunto = "Este mensaje fue enviado desde form1"

mail($para, $asunto, utf8_decode($mensaje), $header)
header("Location:yahasterminado.html")
?>