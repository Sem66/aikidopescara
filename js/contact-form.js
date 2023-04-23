/* ---------------------------------------------
 Contact form
 --------------------------------------------- */
$(document).ready(function(){
    $("#contact_form").submit(function(e){
        e.preventDefault();

        //get input field values
        var user_name = $('#name').val();
        var user_email = $('#email').val();
        var user_message = $('#message').val();

        //simple validation at client's end
        //we simply change border color to red if empty field using .css()
        var proceed = true;
        if (user_name == "") {
            $('#name').css('border-color', '#e41919');
            proceed = false;
        }
        if (user_email == "") {
            $('#email').css('border-color', '#e41919');
            proceed = false;
        }

        if (user_message == "") {
            $('#message').css('border-color', '#e41919');
            proceed = false;
        }

        //everything looks good! proceed...
        if (proceed) {
            //data to be sent to server
            post_data = {
                'name': user_name,
                'email': user_email,
                'message': user_message
            };
            //Ajax post data to server
            $.post('php/contact_me.php', post_data);
            $("#result").show().html('Messaggio inviato').slideDown();
        } else return false;
    });

    //reset previously set border colors and hide all message on .keyup()
    $("#contact_form input, #contact_form textarea").keyup(function(){
        $("#contact_form input, #contact_form textarea").css('border-color', '');
        $("#result").slideUp();
    });

});
