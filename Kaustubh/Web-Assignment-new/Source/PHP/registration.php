<?php
include_once("config.php");
$fname=$_POST['fname'];
$sname=$_POST['sname'];
$email=$_POST['email'];
$gender=$_POST['gender'];
$pass=$_POST['pass1'];
$pass2=$_POST['pass2'];

#Validation variables
$fname_error="";
$sname_error="";
$email_error="";
$pass_error="";
$empty_error="";

if(empty($fname) || empty($sname) || empty($email) || empty($gender) || empty($pass) || empty($pass2))
{
	$empty_error.= "<br/>Please fill empty fields";
}
else
{
	if(!preg_match("/^[a-zA-Z]*$/",$fname))
	{
		$fname_error.="<br/>First name should include characters only";
	}
	if(!preg_match("/^[a-zA-Z]*$/",$sname))
	{
		$sname_error.="<br/>Surname/last name should include characters only";
	}
	if (!filter_var($email, FILTER_VALIDATE_EMAIL)) 
	{
		$email_error.="<br/>Invalid email";
	}
	if (strcmp($pass, $pass2)!=0) 
	{
		$pass_error.="<br/>Password Mismatch";
	}
}
if(!empty($fname_error) || !empty($sname_error) || !empty($email_error) || !empty($pass_error) || !empty($empty_error))
{
	if(!empty($empty_error))
		echo $empty_error;

	else
	{
	 if(!empty($fname_error))
		echo $fname_error;

	 if(!empty($sname_error))
		echo $sname_error;
			
	 if(!empty($email_error))
		echo $email_error;

	 if(!empty($pass_error))
		echo $pass_error;
	}
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
