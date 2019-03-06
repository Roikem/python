window.s = 0;

function creat_window(){
    $('.element').click(function(){
        // $('.element').append('<div id="login"></div>')
        // $('#login').html(login_frame);
        window.s = 1;
	});
} 

creat_window();