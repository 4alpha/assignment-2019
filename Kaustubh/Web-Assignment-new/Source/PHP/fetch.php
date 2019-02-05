<?php
include_once("config.php");
      /* try {
               $id=$_GET['id'];echo "ID is ".$id;
            $stmt="SELECT *FROM USERS WHERE ID= :id";
            $res=$mysql_conn->prepare($stmt);
            $res->bindParam(":id",$id);
            $result=$res->execute();
            if($result===false)
                echo"error";
            /*while($row=$res->fetch())
            {
                $fname=$row['fname'];
                $lname=$row['sname'];
                $email=$row['email'];
                $gender=$row['gender'];
            }
            else
            {
            #echo json_encode($result);
                #print_r($result);
                #echo $result;
                foreach ($result as $t) {
                    echo $t['fname'];
                }
       } catch (PDOException $e) {
           
       }
        
        }
        */       
 
// check request
        if(isset($_POST['id']) && isset($_POST['id']) != "")
        {
        // get User ID
        $user_id = $_POST['id'];#echo "User ID ".$user_id;

            try
            {
            // Get User Details
                $stmt="SELECT *FROM USERS WHERE ID= :id";
                $res=$mysql_conn->prepare($stmt);#$user_id=1;
                $res->bindParam(":id",$user_id);
                
                #$res->execute();
                #$number_of_rows=$res->fetchColumn();
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
            echo "Not received ";
        $response['status'] = 200;
        $response['message'] = "Invalid Request!";
        }
    

?>