$(function(){
    var login_frame = '<div id="login_frame"><p id="image_logo">商品清单</p><form><p><label class="label_input">商品名称</label><input type="text" id="username" class="text_field form1" /></p><p><label class="label_input">供应商</label><input type="text" id="password" class="text_field form2" /></p><p><label class="label_input">入库时间</label><input type="text" id="username" class="text_field form3" /></p><p><label class="label_input">库存</label><input type="text" id="username" class="text_field form4" /></p><p><label class="label_input">商品单价</label><input type="text" id="username" class="text_field form5" /></p><div id="login_control"><div class="btn_login" id="submit">提交</div><div class="btn_login cancel">取消</div></div></form></div>';

    get_good();

    $('#add_form').click(function(){
        $("#login").html(login_frame);
        $(".cancel").click(function(){
            $("#login_frame").remove();
        });
        $("#submit").click(function(){
            $("#table").append('<tbody><tr class="tr"></tr></tbody>');
            $(".tr").append('<td class="0"></td><td class="1"></td><td class="2"></td><td class="3"></td><td class="4"></td><td class="5"></td><td class="6"></td>');
            var forms = $("#table").children(':last-child').children(".tr");
            forms.children(".0").append('<input type="checkbox"></input>');
            forms.children(".1").append('<a href="#"></a>');
            forms.children(".2").append('<a href="#"></a>');
            forms.children(".3").append('<a href="#"></a>');
            forms.children(".5").append('<a href="#"></a>');
            forms.children(".6").append('<div class="am-btn-toolbar" id="am-btn-toolbar"></div>');
            forms.children(".6").children().append('<div class="am-btn-group am-btn-group-xs id="am-btn-group"></div>');
            forms.children(".6").children().children().append('<div class="am-btn am-btn-default am-btn-xs am-text-secondary alter"><span class="am-icon-pencil-square-o"></span> 编辑</div><div class="am-btn am-btn-default am-btn-xs am-text-danger am-hide-sm-only delete"><span class="am-icon-trash-o"></span> 删除</div>');
            forms.children(".1").children().text($('.form1').val());
            forms.children(".2").children().text($('.form2').val());
            forms.children(".3").children().text($('.form3').val());
            forms.children(".4").text($('.form4').val());
            forms.children(".5").children().text($('.form5').val());
            var data = {};
            data['good_name'] = $('.form1').val();
            data['supplier'] = $('.form2').val();
            data['add_time'] = $('.form3').val();
            data['inventory'] = $('.form4').val();
            data['unit_price'] = $('.form5').val();
            $.ajax({
                url:'/command/',
                type:'POST',
                data: {
                    command: 'add_good',
                    data: JSON.stringify(data),
                },
                success: function(data){
                    alert('提交成功');
                    window.location.reload();
                },
                error: function () {
                    alert('error');
                },
            });
            $("#login_frame").remove();
        });
    });

    var printf_information = $("#table");

    $('#form_print').click(function(){
        var command = confirm("请确认是否打印");
        if(command) {
            window.print(printf_information);
        }
    });

    function get_good(){
        $.getJSON('/get_good/',function(data){
            var u_name = [];
            // var u_name_info = document.getElementById('username').value;
            // var u_pwd_info = $("#password").val();
            for(var i =0; i< parseInt(data['list_length']); i++ ) {
                u_name.push(data['information'][i]);
            }
            for(var i =0; i< parseInt(data['list_length']); i++ ) {
                $("#table").append('<tbody><tr class="tr"></tr></tbody>');
                var forms = $("#table").children(':last-child').children(".tr");
                forms.append('<td class="0"></td><td class="1"></td><td class="2"></td><td class="3"></td><td class="4"></td><td class="5"></td><td class="6"></td>');
                forms.children(".0").append('<input type="checkbox"></input>');
                forms.children(".1").append('<a href="#"></a>');
                forms.children(".2").append('<a href="#"></a>');
                forms.children(".3").append('<a href="#"></a>');
                forms.children(".5").append('<a href="#"></a>');
                forms.children(".6").append('<div class="am-btn-toolbar" id="am-btn-toolbar"></div>');
                forms.children(".6").children().append('<div class="am-btn-group am-btn-group-xs id="am-btn-group"></div>');
                forms.children(".6").children().children().append('<div class="am-btn am-btn-default am-btn-xs am-text-secondary alter"><span class="am-icon-pencil-square-o"></span> 编辑</div><div class="am-btn am-btn-default am-btn-xs am-text-danger am-hide-sm-only delete"><span class="am-icon-trash-o"></span> 删除</div>');
                forms.children(".1").children().text(u_name[i].good_name);
                forms.children(".2").children().text(u_name[i].supplier);
                forms.children(".3").children().text(u_name[i].add_time);
                forms.children(".4").text(u_name[i].inventory);
                forms.children(".5").children().text(u_name[i].unit_price);
                var bind = forms.children(".6").children().children();
                bind.children(".alter").on('click',function(e){
                    $("#login").html(login_frame);
                    $(".cancel").click(function(){
                        $("#login_frame").remove();
                    });
                    var a = $(e.target).parent().parent().parent().parent();
                    var b = a.children(".1").children().text();
                    var c = a.children(".2").children().text();
                    var d = a.children(".3").children().text();
                    var f = a.children(".4").text();
                    var g = a.children(".5").children().text();
                    $('.form1').val(b);
                    $('.form2').val(c);
                    $('.form3').val(d);
                    $('.form4').val(f);
                    $('.form5').val(g);
                    var id_name = $('.form1').val();
                    $("#submit").click(function(){
                        var data = {};
                        data['id'] = id_name;
                        data['good_name'] = $('.form1').val();
                        data['supplier'] = $('.form2').val();
                        data['add_time'] = $('.form3').val();
                        data['inventory'] = $('.form4').val();
                        data['unit_price'] = $('.form5').val();
                        $.ajax({
                            url:'/command/',
                            type:'POST',
                            data: {
                                command: 'change_good',
                                data: JSON.stringify(data),
                            },
                            success: function(data){
                                alert('修改成功');
                                window.location.reload();
                            },
                            error: function () {
                                alert('error');
                            },
                        });
                        $("#login_frame").remove();
                    });
                });
                bind.children(".delete").on('click', function(e){
                    var command0 = confirm("请确认是否删除");
                    if(command0) {
                        var all = $(e.target).parent().parent().parent().parent().parent()
                        $.ajax({
                           url:'/command/',
                           type:'POST',
                           data:{
                               command: 'delete_good',
                               data: JSON.stringify({'good_name': all.children(".tr").children(".1").text()}),
                           },
                           success: function(){
                                alert('删除成功');
                           },
                           error: function(){
                               alert('error');
                           },
                        });
                        all.remove();
                    }
                });
            }
        });
    }

});


