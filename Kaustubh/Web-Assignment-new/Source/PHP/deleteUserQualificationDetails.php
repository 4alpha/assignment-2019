<?php
session_start();
include_once("config.php");
try {
	$user_id=$_POST['id'];
	#Retrieve degree which has to be deleted
	
	$retrieve_degree_stmt="SELECT degree
	 from USERS_QUALIFICATIONS 
	 where USERS_QUALIFICATIONS.qual_id= :id";
	
	$res=$mysql_conn->prepare($retrieve_degree_stmt);#$user_id=1;
        $res->bindParam(":id",$user_id);
        $res->execute();
	$result = $res->fetchColumn();	
	
	$stmt="DELETE from USERS_QUALIFICATIONS          
           where USERS_QUALIFICATIONS.qual_id= :id";

        $res=$mysql_conn->prepare($stmt);#$user_id=1;
        $res->bindParam(":id",$user_id);
        $res->execute();

	echo $result;
} catch (PDOException $msg) {
	echo "Error Occured".$msg->getMessage();
}
?>
