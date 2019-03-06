$(document).ready(function(){
    $("#submit_button").on('click', function(){
        var user_name = $("#username-text-field").val();
        var user_password = $("#pw").val();
        $.ajax({
           type: 'POST',
           url: '/login_handle/',
           data: {
                    name:user_name,
                    pwd:user_password
           },
            success: function(data){
               if (data['result'] === 1) {
                   alert(data['usr_data']);
                   window.location.href = "/main/";
               }
               if(data['result'] === 0){
                    alert(data['usr_data']);
               }
            },
            error: function () {
                alert('网络连接出错');
            }
        });
    });
});