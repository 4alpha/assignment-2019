<!DOCTYPE html>
<html lang="eng">

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

		<div>
			<font color=black style='BACKGROUND-COLOR:#D0D0D0; display:block;'>
				<b>Service Required</b>
				<br>
			</font>
		</div>


		<form class="form-group" method="post" enctype="multipart/form-data" onsubmit="return validateRegistration()">

			<label>Applying For(Fresh Passport/Re-issue of Passport)
				<sup>*</sup>
			</label>
			<input type="text" class="form-control" name="applying" required>

			<label>Type Of Application :</label>
			<center>
				<label>
					<input type="radio" name="application" value="normal">Normal</label>
				<label>
					<input type="radio" name="application" value="tatkal">Tatkal</label>
			</center>

			<label>Type Of Passport Booklet: </label>
			<center>
				<label>
					<input type="radio" name="booklet" value="36">36 pages</label>
				<label>
					<input type="radio" name="booklet" value="60">60 pages</label>
			</center>
			<br>

			<div>
				<font color=black style='BACKGROUND-COLOR:#D0D0D0; display:block;'>
					<b>Applicant Detail</b>
					<br>
				</font>
			</div>

			<label for="name">Applicants Given Name(Given Name Means FIrst NAme FOllowed By Middle Name (if any))
				<sup>*</sup>
			</label>
			<input type="text" class="form-control" name="user_name" pattern="[a-zA-Z]*" required>

			<label for="surname">Surname</label>
			<input type="text" class="form-control" name="surname" pattern="[a-zA-Z]*"> <br><br>

			<label for="picture">Profile Picture</label> <br>
			<input type="file" name="profilepic" id="profilepic"> <br>

			<label for="gender">Gender
				<sup>*</sup>
			</label>
			<select class="custom-select" name="gender" required>
				<option selected>Choose...</option>
				<option value="male">Male</option>
				<option value="female">Female</option>
				<option value="Transgender">Transgender</option>
			</select>

			<br>

			<div>
				<font color=black style='BACKGROUND-COLOR:#D0D0D0; display:block;'>
					<b>Place Of Birth</b>
					<br>
				</font>
			</div>

			<label>Is Your Place Of Birth Out Of India?
				<sup>*</sup>
			</label>
			<center>
				<label>
					<input type="radio" name="place" value="yes">Yes</label>
				<label>
					<input type="radio" name="place" value="no">No</label>
			</center>

			<label for="dob">Date Of Birth
				<sup>*</sup>
			</label>
			<input type="date" class="form-control" name="dob" required>

			<label for="pan">Pan If Available:</label>
			<input type="text" class="form-control" name="pan" pattern="[A-Z]{4}[0-9]{4}">

			<label for="exampleInputEmail1">Email address
				<sup>*</sup>
			</label>
			<input type="text" class="form-control" name="user_email" id="email" required>

			<label for="exampleInputPassword1">Password
				<sup>*</sup>
			</label>
			<input type="password" class="form-control" name="user_password" id="pass" required>
			<small id="passwordHelp" class="form-text text-muted">Password must contain atleast one uppercase,one lowercase alphabate and one numeric </small>

			<br>
			<div>
				<font color=black style='BACKGROUND-COLOR:#D0D0D0; display:block;'>
					<b>Present Resedential Address Details(where applicant presently resides)</b>
					<br>
				</font>
			</div>

			<label for="address">Address</label>
			<textarea class="form-control" rows="5" cols="60" name="address" required>
			</textarea>

			<label for="mobile">Mobile Number</label>
			<input type="number" class="form-control" name="mobile" pattern="[0-9] {10}" required>
			<br>
			<br>

			<input class="btn btn-outline-primary" type="submit" name="register" value="Register">
			<input class="btn btn-outline-success" type="reset" value="Reset">

			<script src="js/jquery-3.3.1.min.js" type="text/javascript"></script>
			<script src="js/validate.js" type="text/javascript"></script>
			<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"> </script>
			<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49" crossorigin="anonymous"> </script>
			<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy" crossorigin="anonymous"> </script>
		</form>
	</div>
</body>

</html>

<?php
	require("functions.php");
	
	if (isset ($_POST['register'])) {
		$profile = $_FILES["profilepic"]["name"];
		$fileName = NULL;
		
		if (isset ($_FILES["profilepic"]) && !empty($_FILES["profilepic"]["name"])) {
			$target_dir = "uploads/";
			$imageFileType = pathinfo($_FILES["profilepic"]["name"], PATHINFO_EXTENSION);
			$allowedExtArr = array('gif','png','jpg','jpeg');

			//check if image is fake or actual
			if (!in_array($imageFileType, $allowedExtArr)) {
				$errorMsg .= "Please slelect png,jpg,jpeg,gif only";
			}
			if ($profile) {
				$fileName = "photo_" . time() . "." . $imageFileType;
				echo $target_dir;				
				$target_dir .= $fileName;

				echo $filename;
				echo $target_dir;

				if (!move_uploaded_file($_FILES["profilepic"]["tmp_name"], $target_dir)) {
					$errorMsg .= "Error in uploading file.";
				}
			}

		} else { 
			echo "<script> alert('Please enter image');
			location.href='registration.php'; 
			</script>";
		}

		insert($_POST,$profile);
	}		
?>
