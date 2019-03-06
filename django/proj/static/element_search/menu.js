$(function() {
    var baseurl='';
    var onoff1 = true;
    $(".pothook").click(function(){
        showNav();//显示或隐藏导航
    });

    function showNav(){//导航栏
        $(".navContent").slideToggle(500);
        if (onoff1) {
            $(".pothook").animate({ top: 0 }, 500)
            $(".pothook")[0].style.background = "url("+baseurl+"/static/element_search/img/navdown2.gif) no-repeat";
            $(".pothook")[0].style.backgroundSize = "100% 80%";

        } else {
            $(".pothook").animate({ top: "70px" }, 500)
            $(".pothook")[0].style.background = "url("+baseurl+"/static/element_search/img/navup2.gif) no-repeat";
            $(".pothook")[0].style.backgroundSize = "100% 80%";
        }
        onoff1 = !onoff1;
    }
});