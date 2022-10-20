$(function(){
    //메뉴 슬라이드 업다운
    $('.main-menu').mouseenter(function(){
        $(this).children('.sub-menu').stop().slideDown('slow');
    });
    $('.main-menu').mouseleave(function(){
        $(this).children('.sub-menu').stop().slideUp('fast');
    });

    //슬라이드 좌우 이동
    const TOTAL_IMAGE = 2;
    let currentIndex = 0;
    let setPosition = 0;
    setInterval(function(){
        if(currentIndex < TOTAL_IMAGE){
            currentIndex ++;
        } else{
            currentIndex = 0;
        }
        setPosition = currentIndex*(-800)+'px';
        $('.slide-list').animate({left : setPosition},1000) // 슬라이드이미지가 1초 동안 지나간다는 뜻
    },3000);

    // 팝업창
    $('.modalopen').click(function(){
        $('#modal').show();
    });
    $('#modal > a').click(function(){
        $('#modal').hide();
    });
});