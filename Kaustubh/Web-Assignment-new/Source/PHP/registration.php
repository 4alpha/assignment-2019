<?php
include_once("config.php");
$fname=$_POST['fname'];
$sname=$_POST['sname'];
$email=$_POST['email'];
$gender=$_POST['gender'];
$pass=$_POST['pass1'];
$pass2=$_POST['pass2'];
if(empty($fname) || empty($sname) || empty($email) || empty($gender) || empty($pass) || empty($pass2))
{
	echo "Please fill empty fields";
}
else if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
	echo "Invalid email";
}
else if (strcmp($pass, $pass2)!=0) {
	echo "Password Mismatch";
}
else
{
	try {
				
		$stmt_insert=" INSERT INTO USERS (fname,sname,email,gender,pass)
		VALUES(:fname,:sname,:email,:gender,:pass)";

		$stmt=$mysql_conn->prepare($stmt_insert);
			        #Parameters are binded to tabel entities
		$stmt->bindParam(':fname',$fname);
		$stmt->bindParam(':sname',$sname);
		$stmt->bindParam(':email',$email);
		$stmt->bindParam(':gender',$gender);   
		$stmt->bindParam(':pass',$pass);     
		
		$result=$stmt->execute();
		if($result === false)
		{
			echo"Fail";
		}
		else
		{
			echo"Success";
		}	

	} catch (PDOException $e) {
		echo "Something went wrong".$e->getMessage();
	}
}

?>