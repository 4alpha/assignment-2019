<?php
include_once("config.php");

#Login USER

if(empty($_POST['username']))
    echo"<br/>Username required";
if(empty($_POST['password']))
    echo"<br/>Password required";
else
{        
    try {            
        $user=trim($_POST['username']);
        $pass=trim($_POST['password']);            
        $stmt_login="SELECT *FROM USERS WHERE email= :email AND pass= :pass";

        $stmt=$mysql_conn->prepare($stmt_login);
        
        $stmt->bindParam(":email",$user);
        $stmt->bindParam(":pass",$pass);
        
        $stmt->execute();
            #echo $stmt->rowCount();
        if($stmt->rowCount()>0)
        {
                #echo "true";
            session_start();
                #$_SESSION['user']=$user;
                //fetchColumn() retrieves first column of a table
            $_SESSION['uid']=$stmt->fetchColumn();
            $_SESSION['user']=$user;
        }
        else
        {
            echo"Invalid login credentials";
        }
    }
    catch(PDOException $e)
    {
        echo "Something went wrong: " . $e->getMessage();
    }    
}
?>
