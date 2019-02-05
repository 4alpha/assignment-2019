<?php
session_start();
#$user_id=$_SESSION['uid'];
include_once("config.php");
// check request
if(isset($_POST['id']) && isset($_POST['id']) != "")
{
        // get User ID
        $user_id = $_POST['id'];#echo "User ID ".$user_id;

        try
        {
            // Get User Details
            $stmt="SELECT degree,college,percentage,year
            from USERS_QUALIFICATIONS
            where USERS_QUALIFICATIONS.qual_id= :id";
            $res=$mysql_conn->prepare($stmt);
            $res->bindParam(":id",$user_id);

            $response = array();
            if($res->execute() !=false)
            {                  
                         #echo "Success";          
                $response = $res->fetch();
                            #print_r($response);
            }                        
            else
            {
                $response['status'] = 200;
                $response['message'] = "Data not found!";
            }
            // display JSON data
            echo json_encode($response);
        }                        
        catch(PDOException $msg)
        {
            echo "Error occured".$msg->getMessage();
            
        }
    }
    else
    {
         //echo "Not received ";*/
        $response['status'] = 200;
        $response['message'] = "Invalid Request!";
    }

?>