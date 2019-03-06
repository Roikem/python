$(document).ready(function(){
    $('#main_button2').click(function(){
        $('.main_content_element').remove();
        $('.main_content').append('<div class="main_content_element">');
        $('.main_content_element').append('<div class="main_content_element_nav">');
        $('.main_content_element_nav').append('<div class="main_content_element_nav_child" id="main_content_element_nav_child1">核素符号</div><div class="main_content_element_nav_child" id="main_content_element_nav_child2">原子序数</div><div class="main_content_element_nav_child" id="main_content_element_nav_child3">衰变字体</div><div class="main_content_element_nav_child" id="main_content_element_nav_child4">母体</div><div class="main_content_element_nav_child" id="main_content_element_nav_child5">半衰期</div>');
        $('#main_content_element_nav_child1').append('<div class="main_content_element_property">H-3</div>');
        $('#main_content_element_nav_child2').append('<div class="main_content_element_property">1</div>');
        $('#main_content_element_nav_child3').append('<div class="main_content_element_property">(B-)</div>');
        $('#main_content_element_nav_child4').append('<div class="main_content_element_property">He-3</div>');
        $('#main_content_element_nav_child5').append('<div class="main_content_element_property">18.591</div>');
    });

    $('#main_button1').click(function(){
        $('.main_content_element').remove();
        $('.main_content').append('<div class="main_content_element">');
        $('.main_content_element').append('<div class="main_content_element_property">相对原子质量 ：1.008</div><div class="main_content_element_property">密度 ：0.00008988</div><div class="main_content_element_property">熔点 ：-259.34</div><div class="main_content_element_property">沸点 ：-259.34</div><div class="main_content_element_property">其他核素 ：*H-1 H-2 H-3(放β)</div>');
    });
});


