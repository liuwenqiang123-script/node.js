$(function() {
    slide();
});

function slide() {
    var timer = 0;
    var cur = 0;
    var num = $('.banner ul li').size() - 1;
    function slide() {
        if(cur<num){
            $(".banner ul li").eq(cur).css({'z-index':10}).stop().hide();
            $(".banner ul li").eq(cur+1).css({'z-index':20}).stop().show();
            $(".indicator a").removeClass().eq(cur+1).addClass("cur");
            cur++;
        }else{
            $(".banner ul li").eq(num).css({'z-index':10}).stop().hide();
            $(".banner ul li").eq(0).css({'z-index':20}).stop().show();
            $(".indicator a").removeClass().eq(0).addClass("cur");
            cur=0;
        }
    }
    timer=setInterval(slide,3000);
    $(".banner").mouseover(function(){
        clearInterval(timer);
    });
    $(".banner").mouseout(function(){
        timer=setInterval(slide,3000);
    });


    $(".indicator a").mouseover(function(){
        var now=$(this).index();
        $(".indicator a").removeClass();
        $(this).addClass("cur");
        $(".banner ul li").eq(cur).css({'z-index':10}).stop().hide();
        $(".banner ul li").eq(now).css({'z-index':20}).stop().show();
        cur=now;
    });
}