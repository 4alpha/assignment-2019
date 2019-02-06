function addQualificationRecord() {
    // get values
    var college_name = $("#college_name").val();
    var percentage = $("#percentage").val();
    var year = $("#passyear").val();
    var degree=$('#degree option:selected').val();
    // Add record
    $.post("addUserQualificationDetails.php", {
        college_name: college_name,
        percentage: percentage,
        year: year,
        degree: degree
    }, function (data, status) {
        // close the popup
        $("#add_new_qualification_record_modal").modal("hide");
        
        // read records again
        readQualificationRecords();
        $("#degree option[value="+degree+"]").remove();
        // clear fields from the popup
        $("#college_name").val("");
        $("#percentage").val("");
        $("#passyear").val("");
        $("#degree").val("");
    });
}

// READ records
function readQualificationRecords() {
    $.get("user_read_qualification.php", {}, function (data, status) {
        $("tbody").html(data);
    });
}


function DeleteUserQualification(id) {
    var conf = confirm("Are you sure, do you really want to delete User Qualification?");
    if (conf == true) {
        $.post("deleteUserQualificationDetails.php", {
            id: id
        },
        function (data, status) {
                // reload Users by using readQualificationRecords();
                readQualificationRecords();
            }
            );
    }
}

function GetUserQualificationDetails(id) {
    // Add User ID to the hidden field for furture usage
    //alert("ID "+id);
    $("#hidden_user_id").val(id);//alert("Setting ID "+temp);
    $.post("readUserQualificationDetails.php", {
        id: id
    },
    function (data, status) {
            // PARSE json data
            var user = JSON.parse(data);
            console.log(user.college);
            // Assing existing values to the modal popup fields
            $("#udegree").val(user.degree);
            $("#ucollege_name").val(user.college);
            $("#upercentage").val(user.percentage);            
            $("#upassyear").val(user.year);
        }
        );
    // Open modal popup
    $("#update_qualification_record_modal").modal("show");
}

function UpdateUserQualificationDetails() {
    // get values
    var degree = $("#udegree").val();
    var college = $("#ucollege_name").val();
    var percentage = $("#upercentage").val();
    var year = $("#upassyear").val();
    //alert("College is"+college);
    // get hidden field value
    var id = $("#hidden_user_id").val();
    
    // Update the details by requesting to the server using ajax
    $.post("updateUserQualificationDetails.php", {
        id: id,
        degree: degree,
        college: college,
        percentage: percentage,
        year: year
    },
    function (data, status) {
            // hide modal popup
            if(data === "Success")
                {$("#update_qualification_record_modal").modal("hide");
            // reload Users by using readQualificationRecords();
            readQualificationRecords();
        }
        else if(data === "fail")
        {
            alert("Failure in updating records");
        }
        else
        {
            alert("Nothing went");
        }
    }
    );
}

$(document).ready(function () {
    // READ recods on page load
    readQualificationRecords(); // calling function
});
