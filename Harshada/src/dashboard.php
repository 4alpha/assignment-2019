<!DOCTYPE html>
<html lang="eng">

<head>
    <meta charset="utf-8">
    <title>
       Dashboard
    </title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css" integrity="sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO"
        crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="style.css">
    <style type = "text/css">
        table {
            border: 1px solid black;   
            width: 100%;
            color: black;
            font-family: Verdana, Geneva, Tahoma, sans-serif;
            font-size: 15px;
            text-align: left;
            
        }
        th {
            color: darkcyan;
        }
        
        th ,td {
            height: 50px;
            border: 1px solid #ddd;
            padding: 2px;
        }
        tr:nth-child(even){background-color: lightgrey;}
        tr:hover {background-color: #ddd;}


    </style>
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
            <b>Please read the passport Instruction Booklet Carefully before filling the form. Furnishing of incorrect instruction/
                supression of information would lead to rejection of application and would attract penal provision as prescribed
                under the Passport Act, 1967. Please produce your original documents at the time of submission of your form.
                All fields marked with (*) are mandatory to fill.</b>
        </div>
    </div>

    <table>
        <tr>
            <th>Email</th>
            <th>Application_for</th>
            <th>Type_of_application</th>
            <th>Booklet</th>
            <th>Name</th>
            <th>Surname</th>
            <th>Gender</th>
            <th>Place Out of India</th>
            <th>Birth Date</th>
            <th>Pan</th>
            <th>Address</th>
            <th>Mobile Number</th>
            <th></th>
        </tr>
        
            <?php
                require("config.php");

                $sql = "Select * from passport";
                $result = $conn->query($sql);
                if ($result->num_rows > 0) {
                    while($row = $result->fetch_assoc()) {
                        echo "<tr><td>".$row['email']."</td><td>".$row['application_for']."</td><td>".$row['type_of_application']."</td><td>".$row['booklet']."</td><td>".$row['name']."</td><td>".$row['surname']."</td><td>".$row['gender']."</td><td>".$row['place']."</td><td>".$row['birth_date']."</td><td>".$row['pan']."</td><td>".$row['address']."</td><td>".$row['mobile_no']."</td><td><a href=\"delete.php?email=".$row['email']."\">delete</a></td></tr>";
                    }
                    echo "</table>";
                }
                $conn->close();  
            ?>
        
    </table>

    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
		    crossorigin="anonymous">
	</script>
	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js" integrity="sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49"
	    crossorigin="anonymous">
	</script>
	<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js" integrity="sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy"
	    crossorigin="anonymous">
	</script>
</body>

</html>