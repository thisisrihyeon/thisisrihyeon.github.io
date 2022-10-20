$(
    function(){
        // 메뉴 슬라이드
        $('.sub-menu').slideUp(0);
        $('.main-menu').hover(
            function(){
                $(this).children('.sub-menu').stop().slideDown('slow');
            },
            function(){
                $(this).children('.sub-menu').stop().slideUp('slow');
            }
        )

        // 슬라이드 이미지 
        const TOTAL_IMAGE = 2;
        let currentIndex = 0;
        $('.slide a').eq(currentIndex).fadeIn(800);
        setInterval(function(){
            if(currentIndex < TOTAL_IMAGE){
                currentIndex++;
            } else{
                currentIndex = 0;
            }
            $('.slide a').fadeOut(800);
            $('.slide a').eq(currentIndex).fadeIn(800);
        },3000);

        // tab
        $('.tab-menu li').click(function(){
            $('.tab-menu li').removeClass('on');
            $(this).addClass('on');
            let pos = $('.notice on').index();
        $('.notice on').hide().removeClass('on');
        $('.gallery').eq(pos).show().addClass('on')
        })
    }

);