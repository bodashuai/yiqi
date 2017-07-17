/**
 * Created by lenovo on 2017/6/26.
 */
angular.module("first",[]).controller("first_con",function($scope,$http){
        document.addEventListener("touchmove",function (ev) {
            ev.preventDefault();
        },{passive:false});
        var myScroll = new IScroll("#wrapper",{
            click:true,
            tap:true
        });
        //轮播图
        setTimeout(function(){
            myScroll.refresh();
            var mySwiper = new Swiper(".swiper-container",{
                loop:true,
                effect:"fade",
                autoplay:2000,
                slidesperView:1,
                autoplayDisableOnInteraction: false,
                pagination:".swiper-pagination"
            });

        },500);
    //底部颜色切换
    $("#s_footer div span").click(function(){
        $("#s_footer div span").removeClass("toClass");
        $("#s_footer div span").next().removeClass("toClass");
        $(this).addClass("toClass");
        $(this).next().addClass("toClass");
    });
    //刚开始让筛选内容隐藏
    $("#mt").hide();
    $("#ps").click(function(){
        $("#mt").fadeIn(600);
            $("#spans").css("transform","rotate(180deg)");
    });
    //点击关闭筛选内容
    $("#s_colse").click(function(){
        $("#mt").fadeOut(600);
        $("#spans").css("transform","rotate(0deg)");
    });
    //城市添加样式
    $(".s_city ul li").click(function(){
        $(".s_city ul li").removeClass("mt_color");
        $(this).addClass("mt_color")
    });
    //清空累加
    $("#mt_clear").click(function(){
        $(".s_city ul li").removeClass("mt_color")
    });

    //判断是否有这个类
    $(".mt_affirm").click(function(){
        var oli = document.querySelectorAll(".s_city li");
        for(var i = 0;i<oli.length;i++){
            if(oli[i].className=='mt_color'){
                $("#shaix").html(oli[i].innerHTML);
                $("#mt").fadeOut(600);
                $("#spans").css("transform","rotate(0deg)");
            }
        }
    });
    //点赞累加
    var t = 1200;
    var a = 0;
    $("#praise").click(function(){
        t++;
        a++;
        $(this).css("color","#E766A4");
        $("#num")[0].innerHTML=t;
        if(a>=10){
            t--;
            alert("每天最多给他点10个赞哦");
            $(this).css("color","#333333");
        }
    });
});

