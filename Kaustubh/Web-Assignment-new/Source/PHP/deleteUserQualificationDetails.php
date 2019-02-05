<?php
session_start();
include_once("config.php");
try {
	$user_id=$_POST['id'];
	$stmt="DELETE from USERS_QUALIFICATIONS          
           where USERS_QUALIFICATIONS.qual_id= :id";
    $res=$mysql_conn->prepare($stmt);#$user_id=1;
    $res->bindParam(":id",$user_id);
    $res->execute();
} catch (PDOException $msg) {
	echo "Error Occured".$msg->getMessage();
}
?>