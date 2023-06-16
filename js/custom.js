$(function () {

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        sct > 0
            ? $('.header').addClass('on')
            : $('.header').removeClass('on');

    })

    $(window).on('scroll', function () {
        let sct = $(window).scrollTop();
        $('._se_').each(function () {
            if (sct + $(window).innerHeight() - 200 > $(this).offset().top) {
                $(this).addClass('on');
            } else {
                $(this).removeClass('on');
            }
        })
    })


    const mainSlide = new Swiper('.main_slide', {
        loop: true,
        parallax: true,
        // centeredSlides: true,
        speed: 2000,
        autoplay: {
            delay: 4000,
            disableOnInteraction: false,
        },
        slideActiveClass: 'on',
    });

    $('.main_visual .arrows .left').on('click', function () {
        mainSlide.slidePrev();
    })


    $('.main_visual .arrows .right').on('click', function () {
        mainSlide.slideNext();
    })



    const noticeSlide = new Swiper('.notice_slide', {
        loop: true,
        slidesPerView: 2,
        spaceBetween: 30,
        autoplay: {
            delay: 1000,
            disableOnInteraction: false,
        },
    });


    $('.main_noticee .arrows .left').on('click', function () {
        noticeSlide.slidePrev();
    })


    $('.main_notice .arrows .right').on('click', function () {
        noticeSlide.slideNext();
    })

    $('.scroll').on('click', function (e) {
        e.preventDefault();
        const st = $(this.hash).offset().top;
        console.log(st);
        $('html, body').animate({ scrollTop: st - 80 }, 600);
    })



})