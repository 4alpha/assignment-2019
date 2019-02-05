$(document).ready(function(){
var frm=$("#registerform");
  frm.submit(function(e){
   
    e.preventDefault();   
    var name = $("#fname").val();
    var sname = $("#sname").val();
    var email = $("#email").val();
    var password = $("#pass1").val();
    var cpassword = $("#pass2").val();

    if (name == '' || sname == '' || email == '' || password == '' || cpassword == '') {
        alert("Please fill all fields...!!!!!!");
    }
    else if (!isEmail(email)) {
        alert("Your email address is invalid");
    }
     else if ((password.length) < 8) {
        alert("Password should atleast 8 character in length...!!!!!!");
    }
     else if (!(password).match(cpassword)) {
        alert("Your passwords don't match. Try again?");
    }    
    else
    {
      var data=frm.serialize();//alert(data);
      $.ajax({
        type: frm.attr('method'),
        url: frm.attr('action'),
        data: data,
        success: function(html){
          if(html=='Fail') {		 
              alert("Not registered");
              frm.trigger("reset");
              console.log(html);       
          }
          else if(html=='Success')
          {
              alert("Successfully registered");
              window.location.replace('user_login.php');
              console.log(html);
              frm.trigger("reset");
          }         
        },
        beforeSend:function()
        {
         $("#message").html("<p class='text-center'>Registering you...</p>")	       
        }
      });
        return false;
    }
  });
});

function isEmail(email) {
  var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  return regex.test(email);
}