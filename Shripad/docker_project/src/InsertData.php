<?php

$sql1 = "
INSERT INTO user (fname, lname, dp, gender, agegroup, email, contact,pword) VALUES ('Shripad', 'Kshirsagar', 'uploads/shripad.jpg','Male', 'Adult (20 to 50)', 'shripad000@gmail.com','8625010244','abc123');";

$sql12 = "
INSERT INTO user (fname, lname, dp, gender, agegroup, email, contact,pword) VALUES ('Vivek', 'Patil', 'uploads/vp.jpg','Male', 'Teenager (13 to 19)', 'vivekpatil@gmail.com','9988776655','xyz123');";

$sql13 = "
INSERT INTO admin (fname, lname, dp, gender, agegroup, email, contact,pword) VALUES ('Admin', 'Portal', 'uploads/admin.jpg','Male', 'Teenager (13 to 19)', 'admin@gmail.com','8888812345','admin');";

if ($conn->query($sql1) === TRUE) 
{
	if ($conn->query($sql12) === TRUE)		
		if ($conn->query($sql13) === TRUE)
			;
} 

?>

