$(function(){
//서브메뉴 슬라이드 방법1
// $(".main > li").hover(function(){
//     $(".sub").stop().slideDown();
// }, function(){
//     $(".sub").stop().slideUp();
// })//main > li").hover



//서브메뉴 슬라이드 방법2
$(".main > li").mouseover(function(){
    $(".sub").stop().slideDown();
})//main > li").mouseover
$(".main > li").mouseleave(function(){
    $(".sub").stop().slideUp();
})//main > li").mouseleave


//메인 이미지 슬라이드 방법1
// var n = 0 // 현재 보이는 인덱스 넘버 0~2
// setInterval(move, 2000)
// function move(){
//     if(n == 2){
//         n=0;
//     }else{
//         n++;
//     }//if
//     console.log("n:", n)
//     pos = -n * 300 + "px"
//     console.log("pos:",pos)
//     $(".view").animate({top:pos},500)
// }//move

//메인 이미지 슬라이드 방법2
setInterval(move, 2500)
    function move(){
    $(".view").animate({top:"-300px"},500, function(){
        $(".view").css({top:"0"});
        $(".view").append($(".view li").eq(0));
    })//animate
}//move

//탭 메뉴
$(".not_gall h2").click(function(){
    $(".not_gall h2").addClass("on");
    $(this).removeClass("on");
    $(".not_gall ul").hide();
    $(this).next().css({display:"flex"})   
})//click

//공지사항 pop
$(".n_pop").click(function(){
    $(".pop").show();
})//click
$(".close").click(function(){
    $(".pop").hide();
})//click

















})//jquery 