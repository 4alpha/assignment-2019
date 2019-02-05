<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Welcome to User Login Page</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.0/jquery.min.js" crossorigin="anonymous"></script>  
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css" />  
    <link rel="stylesheet" href="css/style.css" />
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" crossorigin="anonymous"></script>     
</head>

<body>    
    <div class="container">
     <div class="header">
        <h2>Login</h2>
    </div>
    <div id="login-row" class="row justify-content-center align-items-center">
        <div id="login-column" class="col-md-6">
            <div id="login-box" class="col-md-12">               
                <form id="loginform" method="POST" class="form" action="login.php">
                 <div class="form-group">
                    <label for="username"  class="text-info">Userame</label>
                    <input type="text" id="username" name="username" placeholder="Your email" maxlength="30" required="required" class="form-control">   <br/><br/>
                </div>
                <div class="form-group">
                    <label for="pass"  class="text-info">Password</label>
                    <input type="password" id="password" name="password" maxlength="30" required="required" class="form-control">       <br/><br/> 
                </div>
                <div class="input-group">
                    <button name="submit" id="submit" class="btn btn-primary btn-md type="submit">Sign in</button>
                </div>
                <p>
                    Not yet a member?<a href="index.html" class="text-info">Sign Up</a>            
                </p>
                <div id="message"></div>
            </form>
        </div>
    </div>
</div>    
</div>
<script src="js/user_login.js" crossorigin="anonymous"></script>
</body>
</html>