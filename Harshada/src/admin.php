<!DOCTYPE html>
<html lang="eng">

<head>
	<meta charset="utf-8">
	<title>
		Admin
	</title>
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
	    crossorigin="anonymous">
	<link rel="stylesheet" type="text/css" href="style.css">
</head>

<body>
	<div class="container">
		<div class="boxed">
			<center>
				<img src="satyamev.jpeg" align="left" height=150px>
				<h3>
					<span style="font-weight:1000"> PASSPORT APPLICATION FORM </span>
				</h3>
				<h3>
					<b> Government of India, Ministry of External Affairs </b>
				</h3>
			</center>
			<b>Please read the passport Instruction Booklet Carefully before filling the form. Furnishing of incorrect instruction/ supression
				of information would lead to rejection of application and would attract penal provision as prescribed under the Passport
				Act, 1967. Please produce your original documents at the time of submission of your form. All fields marked with (*)
				are mandatory to fill.</b>
		</div>
		<center>
			<form action="admin.php" method="POST">
				<div class="form-group">
					<label for="exampleInputEmail">Username</label>
					<input type="text" class="form-control col-4" name="email" id="email" placeholder="Enter email">

					<div class="form-group">
						<label for="exampleInputPassword">Password</label>
						<input type="password" class="form-control col-4" name="pass" id="pass" placeholder="Password">
					</div>

					<input class="btn btn-outline-success" type="submit" name="action" value="Login"> 

			</form>
		</center>
		
		<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
		    crossorigin="anonymous">
		</script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
		    crossorigin="anonymous">
		</script>
		<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy"
		    crossorigin="anonymous">
		</script>
		</form>
		</div>

</body>

</html>

<?php
	require("functions.php");

	if (isset($_POST['action'])) {
		$email = $_POST['email'];
		$pass = $_POST['pass'];

		$result = adminLogin($email,$pass);

		if ($result) {
			echo "<script> alert('Welcome Admin');
			location.href='dashboard.php'; 
			</script>";
		} else {
			echo "wrong password";
		}
	} 
?>