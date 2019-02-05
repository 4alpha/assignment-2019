<?php
session_start();
include_once("config.php");

$user_id=$_SESSION['uid'];

try
{        
   $data="";
   
   $query="SELECT qual_id,degree,college,percentage,year
   FROM USERS_QUALIFICATIONS
   where USERS_QUALIFICATIONS.uid=".$user_id." ORDER BY qual_id ASC";
   
   $result=$mysql_conn->query($query)->fetchAll();
   
   if($result === false)
   {
    $data.="No record found";
    echo $data;
}
else
{
  foreach ($result as $res) {
     $data.="
     <tr>                    
     <td>".$res['degree']."</td>
     <td>".$res['college']."</td>
     <td>".$res['percentage']."</td>
     <td>".$res['year']."</td>
     <td>";
     $data.="<button onclick=GetUserQualificationDetails(".$res['qual_id'].") class=\"btn btn-warning\">Update</button>
     </td>
     <td>
     <button onclick=DeleteUserQualification(".$res['qual_id'].") class=\"btn btn-danger\">Delete</button>
     </td>
     </tr>
     ";             
 }    		
 echo $data;
}

} 
catch (PDOException $e) {
   echo"Something went wrong".$e->getMessage();				
}
?>