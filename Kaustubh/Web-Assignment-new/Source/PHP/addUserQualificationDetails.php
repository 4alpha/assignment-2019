<?php
session_start();
include_once("config.php");
$user_id=$_SESSION['uid'];
try
{

   $degree=$_POST['degree'];
   $college_name=$_POST['college_name'];        
   $percentage=$_POST['percentage'];
   $year=$_POST['year'];        
   
       #Prepare a statement with all parameters
   $stmt_insert="INSERT INTO USERS_QUALIFICATIONS (degree,college,percentage,year,uid)
   VALUES(:degree,:college,:percentage,:year,:uid)";

   $stmt=$mysql_conn->prepare($stmt_insert);
        #Parameters are binded to tabel entities
   $stmt->bindParam(':degree',$degree);
   $stmt->bindParam(':college',$college_name);
   $stmt->bindParam(':percentage',$percentage);
   $stmt->bindParam(':year',$year);   
   $stmt->bindParam(':uid',$user_id);     
   
   $result=$stmt->execute();
   if($result === false)
    echo"Failure in insertion of Records";
else
{
            #header("Location: user_dashboard.php");
    echo"Registered Successfully";
}	
}catch (PDOException $e) {
	echo "Something went wrong".$e->getMessage();
}
?>