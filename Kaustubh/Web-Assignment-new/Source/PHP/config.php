<?php

$servername = "mysql";
$dbname="my_db";
$username = "root";
$password = "root";
$mysql_conn=null;

    try 
    {
    $mysql_conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    // set the PDO error mode to exception
    $mysql_conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $query="CREATE TABLE IF NOT EXISTS USERS (
        ID int(11) AUTO_INCREMENT PRIMARY KEY,
        fname varchar(255) NOT NULL,            
        sname varchar(255) NOT NULL,
        email varchar(50) NOT NULL,
        gender varchar(6) NOT NULL,
        pass varchar(30) NOT NULL)";          
   
    $mysql_conn->exec($query);

    $query="CREATE TABLE IF NOT EXISTS USERS_ADDRESS (
        ID int(11) AUTO_INCREMENT PRIMARY KEY,
        addr varchar(255) NOT NULL,            
        city varchar(20) NOT NULL,
        stat varchar(20) NOT NULL,
        country varchar(20) NOT NULL,
        uid int(11) NOT NULL, FOREIGN KEY(uid) REFERENCES USERS(ID))"; 

    $mysql_conn->exec($query);

    $query="CREATE TABLE IF NOT EXISTS USERS_QUALIFICATIONS
    (qual_id int primary key auto_increment not null,
    degree varchar(20),
    college varchar(25),
    percentage float(5,2),
    year int(4),
    uid int(11), FOREIGN KEY (uid) REFERENCES USERS(ID))";

    $mysql_conn->exec($query);
    }
    catch(PDOException $e)
    {
    echo "Connection failed: " . $e->getMessage();
    $mysql_conn=null; 
    }    
?>
