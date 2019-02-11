<?php
    
    function Login($email,$pass) {
        require('config.php');

        $sql = "SELECT * FROM passport WHERE email='$email' AND password='$pass'";
        $result = mysqli_query($conn, $sql);
        if ($result->num_rows > 0) {
			$row = $result->fetch_assoc();
			$applying =	$row['application_for'];
			$application_for = $row['type_of_application'];
			$booklet= $row['booklet'];
			$name = $row['name'];
			$surname = $row['surname'];
			$image = $row['picture'];
			$gender = $row['gender'];
			$place=$row['place'];
			$dob = $row['birth_date'];
			$pan = $row['pan'];
			$address=$row['address'];
            $mobile=$row['mobile_no'];

            $arr = array('applying' => $applying, 'application_for' => $application_for, 'booklet' => $booklet, 'name' => $name, 'surname' => $surname, 'image' => $image, 'gender' => $gender, 'place' => $place, 'dob' => $dob, 'pan' => $pan, 'address' => $address, 'mobile' => $mobile);
            
            return $arr;
        } else {            
            return false;
        }
    }
 
    function insert($insertArr,$profile) {
        require('config.php');

        $email = $insertArr['user_email'];
        $pass = $insertArr['user_password'];
        $applying= $insertArr['applying'];
        $application_for = $insertArr['application'];
        $booklet = $insertArr['booklet'];
        $name = $insertArr['user_name'];
        $surname = $insertArr['surname'];
        $gender = $insertArr['gender'];
        $place=$insertArr['place'];
        $dob = $insertArr['dob'];
        $pan = $insertArr['pan'];
        $address = $insertArr['address'];
        $mobile = $insertArr['mobile'];

        $sql = "INSERT INTO passport(email, password, application_for, type_of_application, booklet, name, surname, picture, gender, place, birth_date, pan, address, mobile_no)VALUES ('$email','$pass','$applying','$application_for','$booklet','$name','$surname','$profile','$gender','$place','$dob','$pan','$address','$mobile')";
        if (mysqli_query($conn, $sql)) {
            echo "<script> alert('Data Saved');
            location.href='login.html'; 
            </script>";
        } else {
            echo "Error: " . $sql . "" . mysqli_error($conn);
        }
    }

    function update($updateArr,$profile) {
        require('config.php');

        $email = $updateArr['user_email'];
        $applying= $updateArr['applying'];
        $application_for = $updateArr['application'];
        $booklet = $updateArr['booklet'];
        $name = $updateArr['user_name'];
        $surname = $updateArr['surname'];
        $gender = $updateArr['gender'];
        $place=$updateArr['place'];
        $dob = $updateArr['dob'];
        $pan = $updateArr['pan'];
        $address = $updateArr['address'];
        $mobile = $updateArr['mobile'];

        $sql = "UPDATE passport SET application_for = '$applying', type_of_application = '$application_for', booklet = '$booklet', name ='$name', surname = '$surname', picture = '$profile', gender = '$gender', place = '$place', birth_date = '$dob', pan = '$pan', address = '$address', mobile_no = '$mobile' WHERE email='$email'";
		if (mysqli_query($conn, $sql)) {
			echo "<script> alert('Data Updated');
			location.href='login.html'; 
			</script>";
		} else {
			echo "Error: " . $sql . "" . mysqli_error($conn);
		}
    }	
    
    function delete($email) {
        require('config.php');
        
        $sql = "DELETE FROM passport WHERE email='$email'";
      
        if (mysqli_query($conn, $sql)) {
            echo "<script> alert('Data Deleted');
            location.href='dashboard.php'; 
            </script>";
        } else {
            echo "Error: " . $sql . "" . mysqli_error($conn);
        }
    }

    function adminLogin($email,$pass) {
        require('config.php');
        
        $sql = "SELECT * FROM admin WHERE username='$email' AND password='$pass'";

        $result = mysqli_query($conn, $sql);
        if ($result->num_rows > 0) {
            return true;
        } else {
            return false;
        }

    }
?>