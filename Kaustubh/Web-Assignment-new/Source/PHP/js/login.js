$(document).ready(function(){
var frm=$("#loginform");
  frm.submit(function(e){
   
    e.preventDefault();
    var username = $("#username").val();
    var password = $("#password").val();

    if((username == "") || (password == "")) {
      $("#message").html("<div class=\"alert alert-danger alert-dismissable\"><button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">&times;</button>Please enter a username and a password</div>");
    }
    else {
      var data=frm.serialize();
      $.ajax({
        type: frm.attr('method'),
        url: frm.attr('action'),
        data: data,
        success: function(html){
          if(html==="Invalid login credentials")
	  {
              alert("Invalid Username and Password \ntry again");
              frm.trigger("reset");
              console.log(html);       
          }
          else
          {
              alert("Success");
              window.location.replace('dashboard.php');
              console.log(html);

          }
         /* else {
		alert("Failure"+username+" "+password);
            //$("#message").html(html);
            frm.trigger("reset");
            console.log(html);
          }*/
        },
        beforeSend:function()
        {
         $("#message").html("<p class='text-center'>Sending your credentials</p>")
	       //alert("Username "+username+" Pass"+password)
        }
      });
    }
    return false;
  });
});
