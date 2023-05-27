<?php

include './Database.php';//  En el archivo DataBase se encuentra la Base de datos 

if (isset($_POST['submit'])) { 
    
    //Datos que recibe por post y se guardan en variables
    $nombre = $_POST['nombre'];
    $apellido = $_POST['apellido'];
    $email = $_POST['email'];

    // Check connection
    if ($conection->connect_error) {
        die("Connection failed: " .$conection_error);
    }

    // insertar los datos introduccidos en la base de datos 
    $insertar = "INSERT INTO usuario (nombre, apellido, email) VALUES ('$nombre', '$apellido', '$email')";
    
?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="formulario.css">
    <title>Comprobacion</title>
</head>
<body>
    <div class="login-box2">

    <?php
            if ($conection->query($insertar) == true) { 
                // si esta correcto muestra los datos 
                echo "<h2>Datos Enviados y Insertados </h2>";
                echo "<label class='mostrarDatos'>Nombre:</label> <span class='datosEnviados'>" . $nombre ."</span><br>";
                echo " <label class='mostrarDatos'> Apellido:</label><span class='datosEnviados'> " . $apellido. "</span><br>";
                echo " <label class='mostrarDatos'> Correo electronico: </label><span class='datosEnviados'>" . $email. "</span><br>";
            } else {
                echo "Error: " . $insertar . "<br>" . $conection->error;
            }
}
        $conection->close();
    ?>
    </div>
</body>
</html>