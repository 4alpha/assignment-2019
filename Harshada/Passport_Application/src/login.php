<?php
	require("functions.php");

	$email = $_POST['email'];
	$pass = $_POST['pass'];

	$arr = Login($email,$pass);

	if ($arr) {		
	echo '<h3><i>Hello"'. $arr['name'] .'"Your Application Details Are:</i></h3>';
	echo '<img src="'.$arr['image'].'"alt="HTML5 Icon" style="width:128px;height:128px"> <br><br>';
	echo "
	<html>
			<head>
			<title>
				Update Form
			</title>
			<style>
				body {
						margin: 25px 50px 25px 50px;
						background-color: azure;
						font-family: verdana;
				}
				p {
					font-weight:700;
					color:blue;
					font-size:20px;
					font-family: verdana;
					text-shadow:2px 2px 2px #cfcfcf
				}
			</style>
		</head>
	    <body>
			
			<p>
				Applying For:" .$arr['applying']."              <br><br>
				Type Of Application: ".$arr['application_for']."   <br><br>
				Type Of Passport Booklet:". $arr['booklet']."  <br><br>
				Name:". $arr['name'] ."<br><br>
				Surname:". $arr['surname']  ." <br><br>
				Gender:". $arr['gender']." <br><br>
				Is Your Place Of Birth Out Of India?:". $arr['place']." <br><br>
				Date Of Birth:". $arr['dob']." <br><br>
				Pan:". $arr['pan']." <br><br>
				Address:". $arr['address']." <br><br>
                      Mobile No:". $arr['mobile']." <br><br> 
                  </p>
		</body>
			
	</html>
	";
	} else {
				echo "<script> alert('Email and password not matched.');
			         location.href='login.html'; 
					</script>";
	}
	
	
       
	
?>
<html>
    <head>
        <meta charset="utf-8">
        <title>
            Application For Passport
        </title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
            crossorigin="anonymous">
        <link rel="stylesheet" type="text/css" href="style.css">
    </head>
    <body>
        <form action="update.php" method="POST">
            <input class="btn btn-outline-primary" type="submit" value="Update">
        </form>
    </body>
</html>
