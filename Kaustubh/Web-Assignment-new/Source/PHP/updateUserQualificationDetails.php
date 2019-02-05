<?php
session_start();
 include_once("config.php");
#$user_id=$_SESSION['uid'];
 if(isset($_POST))
 {	
 	$id = $_POST['id'];	
    $degree = $_POST['degree'];
    $college = $_POST['college'];
	$percentage = $_POST['percentage'];
	$year = $_POST['year'];	
       
	// checking empty fields
    if(empty($degree) || empty($college) || empty($percentage) || empty($year))
     {	
			
        if(empty($degree))
         {
			echo "<font color='red'>Degree field is empty.</font><br/>";
		 }
		
        if(empty($college))
         {
			echo "<font color='red'>College field is empty.</font><br/>";
		 }
		
        if(empty($percentage))
         {
			echo "<font color='red'>Percentage field is empty.</font><br/>";
         }
        if(empty($year))
         {
			echo "<font color='red'>Year field is empty.</font><br/>";
		 }		
     }
      else
       {	           
        //updating the table        
        $stmt_update="UPDATE USERS_QUALIFICATIONS SET degree= :degree,college= :college,percentage= :percentage,year= :year WHERE qual_id= :id";
        $stmt = $mysql_conn->prepare($stmt_update);
        
        $stmt->bindParam(":degree",$degree);
        $stmt->bindParam(":college",$college);
        $stmt->bindParam(":percentage",$percentage);
        $stmt->bindParam(":year",$year);
        $stmt->bindParam(":id",$id);

        $result=$stmt->execute();
        if($result === false)
            echo"fail";
        else
            echo"Success";
    }
}

?>