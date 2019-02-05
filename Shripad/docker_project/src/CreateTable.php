<?php

require('db_connect.php');	

$sql = "CREATE TABLE user (
fname varchar(20) NOT NULL, 
lname varchar(20) NOT NULL,
dp varchar(30),
gender varchar(11),
agegroup varchar(20),
email varchar(30) NOT NULL,
contact varchar(15) NOT NULL,
pword varchar(30) NOT NULL, 
PRIMARY KEY (email)
);";


$sql2 = "CREATE TABLE admin (
fname varchar(10) NOT NULL, 
lname varchar(10) NOT NULL,
dp varchar(30),
gender varchar(11),
agegroup varchar(20),
email varchar(30) NOT NULL,
contact varchar(15) NOT NULL, 
pword varchar(20) NOT NULL, 
PRIMARY KEY (email)
);";

if ($conn->query($sql) === TRUE) 
{
	
	if ($conn->query($sql2) === TRUE)		
	;
} 

require('InsertData.php');
?>

