<?php
session_start();
include_once("config.php");
?>

<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <title>Welcome to User Dashboard</title>    
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js"></script>  
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" />  
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>  
  <script src="js/user_qualification.js"></script>
</head>
<body>
  <br /><br />  

  <h1>Welcome, <?php echo $_SESSION['user']; ?></h1>  
    <div class="jumbotron">
      <div class="container" style="width:700px;">
    <h2 align="center">User Home</h2>
      <br />
      <div class="pull-right">
        <button class="btn btn-success" data-toggle="modal" data-target="#add_new_qualification_record_modal">Add New Qualification</button>
      </div>
      <h4 align="center">Qualification Details</h4>
        <br />
        <div >
          <table class="table table-hover table-striped">
           <thead>
            <tr>
              <th scope="col">Degree</th>
              <th scope="col">College</th>
              <th scope="col">Percentage</th>
              <th scope="col">Passing Year</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            <!--Table contents will be put here-->    
          </tbody>
        </table>        
      </div>   
      </div> 
    </div>

      <!-- Bootstrap Modal - To Add New Record -->
      <!-- Modal -->
      <div class="modal fade" id="add_new_qualification_record_modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
              <h4 class="modal-title" id="myModalLabel">Education Details</h4>
            </div>
            <div class="modal-body">
             
              <div class="form-group">
                <label for="degree_name">Degree</label>
                <select name="degree_name" id="degree" class="form-control">
                  <option value="bsc">B.Sc</option>
                  <option value="msc">M.Sc</option>
                  <option value="mtech">M.Tech</option>
                </select>                            
              </div>
              
              <div class="form-group">
                <label for="college_name">College Name</label>
                <input type="text" id="college_name" placeholder="for eg. N Wadia" class="form-control" onkeypress='return ((event.charCode >= 65 && event.charCode <= 90) || (event.charCode >= 97 && event.charCode <= 122) || (event.charCode == 32))'" />
                </div>
                
                <div class="form-group">
                  <label for="percentage">Percentage</label>
                  <input type="number" id="percentage"  min="1" max="100"  placeholder="for eg 75.25%" required="required" class="form-control" />
                </div>

                <div class="form-group">
                  <label for="passyear">Passing Year</label>
                  <input type="number"  min="2000" max="2018" maxlength="4" minlength="4" id="passyear" placeholder="for eg 2017" required="required" class="form-control" />
                </div>
                
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
                <button type="button" class="btn btn-primary" onclick="addQualificationRecord()">Add Record</button>
              </div>
            </div>
          </div>
        </div>
        


        <div class="modal fade" id="update_qualification_record_modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
          <div class="modal-dialog" role="document">
            <div class="modal-content">
              <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">×</span></button>
                <h4 class="modal-title" id="myModalLabel">Education Details</h4>
              </div>
              <div class="modal-body">
               
                <div class="form-group">
                  <label for="degree_name">Degree</label>
                  <select name="degree_name" id="udegree" class="form-control">
                    <option value="bsc">B.Sc</option>
                    <option value="msc">M.Sc</option>
                    <option value="mtech">M.Tech</option>
                  </select>                            
                </div>
                
                <div class="form-group">
                  <label for="college_name">College Name</label>
                  <input type="text" id="ucollege_name" placeholder="for eg. N Wadia" class="form-control" onkeypress='return ((event.charCode >= 65 && event.charCode <= 90) || (event.charCode >= 97 && event.charCode <= 122) || (event.charCode == 32))'" />
                  </div>
                  
                  <div class="form-group">
                    <label for="percentage">Percentage</label>
                    <input type="number" id="upercentage"  min="1" max="100"  placeholder="for eg 75.25%" required="required" class="form-control" />
                  </div>

                  <div class="form-group">
                    <label for="passyear">Passing Year</label>
                    <input type="number"  min="2000" max="2018" maxlength="4" minlength="4" id="upassyear" placeholder="for eg 2017" required="required" class="form-control" />
                  </div>
                  
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-default" data-dismiss="modal">Cancel</button>
                  <button type="button" class="btn btn-primary" onclick="UpdateUserQualificationDetails()">Save Record</button>
                  <input type="hidden" id="hidden_user_id">
                </div>
              </div>
            </div>
          </div>
        </body>
        </html>