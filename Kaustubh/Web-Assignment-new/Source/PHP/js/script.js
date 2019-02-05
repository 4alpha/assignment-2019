$(document).ready(function(){
//alert("Inside");
$(document).on('click','.edit_data',function(e){
    //get cover id
    e.preventDefault();
    var id=$(this).data('id');alert("ID "+id);
    //set href for cancel button
   $.ajax({

    	url:"fetch.php",
    	method:"POST",
    	data: {id:id},
    	dataType: "json",
    	success:function(data)
    	{
    		$("#fname").val(data.fname);
    		$("#sname").val(data.sname);
    		$("#gender").val(data.gender);
    		$("#email").val(data.email);
    		$("#insert").val("Update");
    		$("#add_data_modal").modal('show');
    		console.log(data);
    	}
    });
});


});

function GetUserDetails(id)
{
    // Add User ID to the hidden field for furture usage
    $("#hidden_user_id").val(id);//alert("Id is "+id);
    $.post("fetch.php", {
            id: id
        },
        function (data, status) {
            // PARSE json data
            var user = JSON.parse(data);
            // Assing existing values to the modal popup fields
            $("#fname").val(user.fname);
            $("#sname").val(user.sname);
            var gen=user.gender;
            //alert(user.gender);
            //$("input[type=radio][value="+user.gender+"]").attr('checked', true);
            //$("[name=gender]").filter("[value='"+user.gender+"']").prop("checked",true);
            $("input:radio[name=gender][value=male]").attr('checked', true);
            //$("#gender").val(user.gender);
            $("#email").val(user.email);
            $("#insert").hide();               
            console.log(data+"\n"+status);
        }
    );
    // Open modal popup
    $("#add_data_modal").modal('show');    
}

function UpdateUserDetails()
{
    $("#update_data_modal").modal("show");
    //Getting hidden value
    var id = $("#hidden_user_id").val();
    //GetUserDetails(id);    ;
    //Get values
    var firstname=$("#fname").val();
    var lastname=$("#lname").val();
    var gender=$("input:radio[name='gender']:checked").val();    
    var email=$("#email").val();
    

    $.post("updateUserDetails.php",
            {
                id:id,
                fname:firstname,
                sname:lastname,
                gender:gender,
                email:email
            },
            function (data, status) {
            // hide modal popup
           //$("#update_data_modal").modal("hide");
            // reload Users by using readRecords();
            //readRecords();
            console.log(data);
        }

        );
}