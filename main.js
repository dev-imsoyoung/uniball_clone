//ready
$(document).ready(function () {
    var sec1_main_slide = $('.sec1>.main_slide>.slide');
    var sec1_main_slide_num = 1;
    var sec1_main_slide_duration = 4000;

    setInterval(function () {

        var isSlide = sec1_main_slide_num < 6;
        if (isSlide) {
            sec1_main_slide.animate({
                left: -100 * sec1_main_slide_num + '%'
            });
            sec1_main_slide_num++;
        } else {
            sec1_main_slide.animate({
                left: '0%'
            });
            sec1_main_slide_num = 1;
        }
    }, sec1_main_slide_duration);

    // var percentage = '0%';
    // if (sec1_main_slide_num < 6) {
    //     percentage = -100 * sec1_main_slide_num + '%';
    //     sec1_main_slide_num++;
    // } else {
    //     sec1_main_slide_num = 1;
    // }

    // sec1_main_slide.animate({
    //     left: percentage
    // });

    // if (sec1_main_slide_num < 6) {
    //     sec1_main_slide.animate({
    //         left: -100 * sec1_main_slide_num + '%'
    //     });
    //     sec1_main_slide_num++;
    // } else if (sec1_main_slide_num === 6){
    //     sec1_main_slide.animate({
    //         left: '0%'
    //     });
    //     sec1_main_slide_num = 1;
    // }

    // var sec4_brand_slide = $('sec4>.brand>.bg>.sub_slide>.images')
    // var sec4_brand_slide_prev_btn = $('.sec4>.brand>.bg>.sub_slide>.prev_btn')
    // var sec4_brand_slide_next_btn = $('.sec4>.brand>.bg>.sub_slide>.next_btn')
    // var sec4_brand_slide_length = $('sec4>.brand>.bg>.sub_slide>.images>li').length;
    // var sec4_brand_slide_num = 1;
    // var sec4_brand_slide_width = 1400;

    // sec4_brand_slide_next_btn.animate('click', next);
    // function next() {
    //     console.log(sec4_brand_slide_num);
    //     if (sec4_brand_slide >= sec4_brand_slide_length) {
    //         sec4_brand_slide = 0;
    //     }
    //     slide.style.transform = translatsX(- ${sec4_brand_slide_width * sec4_brand_slide_num} px);
    //     sec4_brand_slide_num++;
    // }

    // var sec4_brand_slide = $('.sec4>.brand>.bg>.sub_slide>.images')
    // var sec4_barand_slide_img = $('.sec4>.brand>.bg>.sub_slide>.images>li')
    // var sec4_brand_slide_prev_btn = $('.sec4>.brand>.bg>.sub_slide>.prev_btn')
    // var sec4_brand_slide_next_btn = $('.sec4>.brand>.bg>.sub_slide>.next_btn')

    // $(function(){
    //     sec4_brand_slide_next_btn.click(function(){
    //         sec4_brand_slide.animate({
    //             "left": -1400+"px"
    //         })
    //     })
    // });

    // $(function(){
    //     sec4_brand_slide_prev_btn.click(function(){
    //         sec4_brand_slide.animate({
    //             "left": 1400+"px"
    //         })
    //     })
    // });

    $(function () {
        const $slideList = $('.sec4>.brand>.bg>.sub_slide>ul.images');
        const $slideItems = $('.sec4>.brand>.bg>.sub_slide>ul.images>li');

        const $prev = $('.sec4>.brand>.bg>.sub_slide>.prev_btn');
        const $next = $('.sec4>.brand>.bg>.sub_slide>.next_btn');

        let $slideItemLength = $slideItems.length;
        const speed = 400;

        // 처음시작은 복사한거 제외하고 다음것부터 시작
        let $currentIndex = 0;
        // 기본 위치 설정
        $slideList.css('transform', 'translateX(' + -100 / $slideItemLength + '%)');
        // $slideList.css('transform', 'translateX(' + -100 / $slideItemLength * $currentIndex + '%)');

        // 슬라이드 이동 함수
        function slideMove() {
            $slideList.css('transform', 'translateX(' + -100 / $slideItemLength * $currentIndex + '%)');
        }

        $prev.on('click', function () {
            // 현재 인덱스가 0보다 크면
            if ($currentIndex > 0) {
                $slideList.css('transition', 'transform ' + speed + "ms ease-in-out");
                $currentIndex--;
                slideMove();
            }
            // 현재 인덱스가 0이면
            if ($currentIndex === 0) {
                $currentIndex = $slideItemLength - 1;
            }
        });

        $next.on('click', function () {
            // 현재 인덱스가 갯수보다 작으면
            if ($currentIndex < $slideItemLength - 1) {
                $slideList.css('transition', 'transform ' + speed + "ms ease-in-out");
                $currentIndex++;
                slideMove();
            }
            // 현재 인덱스가 0이면
            if ($currentIndex === $slideItemLength - 1) {
                $currentIndex = 0;
            }
        });
    });


});
//ready end