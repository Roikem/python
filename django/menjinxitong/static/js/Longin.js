// $(document).ready(function(){
//     $('h3').click(function(){
//         var person = {};
//             black_form.forEach(function(property){
//                person[property] = $('#'+ property).val();
//         });
//        $.ajax({
//            url:'/test/',
//            type:'POST',
//            dataType: 'JSON',
//            data: {
//                type:'123',
//                person: JSON.stringify(person),
//             },
//            async: true,
//            success: function(data){
//                if(data === 1){
//                    alert('123');
//                } else{
//                    alert('456');
//                }
//            },
//            error: function(){
//                   alert('error');
//            },
//        });
//     });
// });
//

function login(){
    var username = document.getElementById("user_name").value;
    var password = document.getElementById("user_password").value;
    if(username==""){
        $.jGrowl("你忘记填写用户名哦！", { header: '提醒' });
    }else if(password==""){
        $.jGrowl("你忘记填写密码哦！", { header: '提醒' });
    }else{
        AjaxFunc();
    }
}

login_frame = '<div id="login_frame"><a href="#" class="toggle toggle--on"></a><div id="information"></div></div>';


function AjaxFunc() {
    $.ajax({
        type: 'POST',
        url: "/login_handle/",
        data: $('form').serialize(),
        dataType: 'JSON',
        success: function (data) {
            if (data['result'] === 1) {
                $(document).ready(function(){

                    $('#LOGIN').dblclick(function(){
                        $('.logo_box').fadeOut(3000);
                        $('#login').html(login_frame);
                        $.jGrowl("嘻嘻，密码居然被你猜到了！", { header: '提醒' });
                        $('.toggle').click(function(e){
                            var toggle = this;
                            e.preventDefault();
                            $(toggle).toggleClass('toggle--on').toggleClass('toggle--off').addClass('toggle--moving');
                            setTimeout(function(){
                                $(toggle).removeClass('toggle--moving');
                            }, 200)

                        });
                    });
                });

            } else {
                $.jGrowl("哼，休想猜对密码！", { header: '提醒' });
            }
        },
        error: function () {
            $.jGrowl("System Crash！", { header: '提醒' });
        }
    });
}

function getsocket() {
    $.ajax({
        url: '/receive/',
        success: function(data){
            alert('123');
        },
        error: function(){
            alert('error');
        }

    });
}

getsocket();



