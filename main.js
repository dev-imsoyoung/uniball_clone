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
        $slideList.css('transform', 'translateX(' - 100 / $slideItemLength + '%)');
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



    // var sec7_event_slide = $('.sec7>.contents>.event_wrap>.event_slide>.img_wrap>ul');
    // var sec7_event_slide_num = 1;
    // var sec7_event_slide_duration = 4000;

    // setInterval(function () {

    //     var isSlide = sec7_event_slide_num < 6;
    //     if (isSlide) {
    //         sec7_event_slide.animate({
    //             left: -100 * sec7_event_slide_num + '%'
    //         });
    //         sec7_event_slide_num++;
    //     } else {
    //         sec7_event_slide.animate({
    //             left: '0%'
    //         });
    //         sec7_event_slide_num = 1;
    //     }
    // }, sec7_event_slide_duration);

    $(function () {
        const $slideList = $('.sec7>.contents>.event_wrap>.event_slide>.img_wrap>ul');
        const $slideItems = $('.sec7>.contents>.event_wrap>.event_slide>.img_wrap>ul>li');

        const $prev = $('.sec7>.contents>.event_wrap>.event_slide>round prev_btn');
        const $next = $('.sec7>.contents>.event_wrap>.event_slide>round next_btn');

        let $slideItemLength = $slideItems.length;
        const speed = 400;

        // 처음시작은 복사한거 제외하고 다음것부터 시작
        let $currentIndex = 0;
        // 기본 위치 설정
        $slideList.css('transform', 'translateX(' - 100 / $slideItemLength + '%)');
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

    const header = document.querySelector("header")
    const openbtn = document.getElementById("hamburger")
    const menuOpen = document.getElementById("open")
    const logoBw = document.getElementById("bw")
    const logoColor = document.getElementById("color")
    const menuList = document.querySelectorAll("header .menu ul.sidemenu li")
    const menuLine = document.getElementById("line")
    const menuName = document.getElementById("menutxt")
    const menuIcon = document.querySelectorAll("header .menu .hamburger ul.line_group li")
    

    let isOpen = false;
    openbtn.addEventListener("click", () => {
        if (isOpen) {
            header.style.position = "absolute";
            menuOpen.style.display = "none";
            menuList.forEach(item => {
                item.classList.remove("open");
            });
            menuOpen.style.transition = "0.5s cubic-bezier(0.4, 0, 0.2, 1)";
            logoColor.style.display = "none"
            logoBw.style.display = "flex"
            menuLine.style.background = "#fff";
            menuName.style.color = "#fff";
            menuIcon.forEach(item => {
                item.classList.remove("open")
            });

        } else {
            header.style.position = "fixed";
            menuOpen.style.display = "block";
            menuList.forEach(item => {
                item.classList.add("open");
            });
            menuOpen.style.transition = "0.5s cubic-bezier(0.4, 0, 0.2, 1)";
            logoColor.style.display = "flex"
            logoBw.style.display = "none"
            menuLine.style.background = "rgba(0,0,0,8)";
            menuName.style.color = "rgba(0,0,0,8)";
            menuIcon.forEach(item => {
                item.classList.add("open")
            });

        }
        isOpen = !isOpen;
    });
});
//ready end