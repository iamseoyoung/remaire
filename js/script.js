$(document).ready(function(){
    // 햄버거 버튼 클릭하면 메인메뉴 나오면서 햄버거버튼 스위치되도록 처리
    $('#hamburger').click(function(){
        $(this).toggleClass('active');
        $('.main-menu').toggleClass('active');
    });

    new fullpage('#wrap', {
        anchors:['anchor1','anchor2','anchor3','anchor4'],
        scrollBar:true,
        normalScrollElements:'.sec-4,.sec-5,.footer',
        fitToSection:false,
        scrollingSpeed:300,
        //반응형 설정
        responsiveWidth:1800, //풀페이지 제거
        responsiveHeight:890,
    });

    //서브메뉴 마우스 올리면 카테고리에 맞는 탭 활성화 / 헤더 색변경 / 서브메뉴박스에서 마우스 나가면 기존 상태로 변경
    $('.main-menu li').mouseenter(function(){
        let result=$(this).attr('data-tab');
        
        //다른 li에 마우스 올릴시에 active되어 있는 클래스 제거
        $('.sub-menu').removeClass('active');

        $(`.sub-menu-box #${result}`).addClass('active');

        // 서브메뉴박스 보이게 처리
        $('.sub-menu-box').addClass('active');

        // 헤더 색상 변경
        $('.header-area,.header-logo svg').addClass('active');

        /* const data = $(this).attr('data-tab');
        // console.log(data);
        $('.sub-menu-box').addClass('active')
        $(`.sub-menu-box #${data}`).addClass('active');  

        $(`.sub-menu-box #${data}`).mouseleave(function(){
            $(this).removeClass('active');
        }); 
        */
    });

    // mouseleave 시에 박스 사라지도록 함
    $('.sub-menu-box').mouseleave(function(){
        $(this).removeClass('active');
        // 헤더 색상 변경
        $('.header-area,.header-logo svg').removeClass('active');
    });
    /*
     $('.sub-menu-box').mouseleave(function(){
         $(this).removeClass('active');
         $(this).children('.sub-menu.active').removeClass('active');
     });
    */


    // sec-4 swiper
    // 세로 자동으로 굴러가는 스와이퍼 연결해보기
    var swiper = new Swiper(".mySwiper", {
        // 세로로 굴러가게 함
        direction:"vertical",
        loop:true,
        speed:500,
        autoplay: {
          delay: 1500,
        },

    });

    //로고 사이즈 변경, 상단이동버튼
    $(window).scroll(function(){
        let sct=$(window).scrollTop();

        if(sct >= 300){
            //로고 사이즈 변경
            $('.header-logo').addClass('active');
            // 상단이동버튼
            $('.top-btn').fadeIn();
        }else{
            $('.headr-logo').removeClass('active');
            $('.top-btn').fadeOut();
        }
    });

    // 상단이동버튼 클릭시 최상단 이동
    $('.top-btn').click(function(){
        $('html,body').animate({
            scrollTop:0
        },500);
    });
});