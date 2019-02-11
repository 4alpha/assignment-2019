<?php
    $db = parse_ini_file("config.ini");
	print_r($db);
    $host = $db['host'];
    $dbname = $db['name'];
    $username = $db['user'];
    $password = $db['pass'];

    // Create connection
    $conn = new mysqli("$host","$username","$password","$dbname");
    // Check connection
    if (!$conn) {
        die("Connection failed: " . mysqli_connect_error());
    } else {
        echo "<script> console.log('Connected')</script>";
    }
