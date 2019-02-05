/*$(document).on('click', 'edit_data', function(){  
          // var id = 1;  
           $.ajax({  
                url:"../PHP/sample.php",  
                method:"POST",  
                data:{id:'1'},  
                dataType:"json",  
                success:function(data){  
                     $('#fname').val("abc");  
                     $('#sname').val(data.sname);  
                     $('#gender').val(data.gender);  
                     $('#email').val(data.email);                         
                     $('#insert').val("Update");  
                     $('#myModal').modal('hide');  
                },
                error: function(xhr, textStatus, error){
                        console.log(xhr.statusText);
                        console.log(textStatus);
                        console.log(error);
                    }       
           });  
      });  */
      $('#button').click(function() {
    var val1 = $('#text1').val();
    var val2 = $('#text2').val();
    $.ajax({
        type: 'POST',
        url: '../PHP/sample.php',
        data: { text1: val1, text2: val2 },
        success: function(response) {
            $('#result').html(response);
        }
    });
});