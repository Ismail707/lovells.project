(function($) {
	'use strict';
	jQuery(document).on('ready', function(){

    // START MENU JS
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 50) {
            $('.navbar-light').addClass('menu-shrink');
        } else {
            $('.navbar-light').removeClass('menu-shrink');
        }
    });				

    // Mean Menu
	jQuery('.mean-menu').meanmenu({
		meanScreenWidth: "991"
    });
    
    // Home Slider JS
    $('.home-slider').owlCarousel({
        items:1,
        loop:true,
        margin:10,
        nav: true,
        dots: false,
        smartSpeed: 1000,
        animateOut: 'fadeOut',
        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:true,
        navText: [
            "<i class='flaticon-left-chevron'></i>",
            "<i class='flaticon-right-chevron'></i>"
        ],
    })

    // Recent Slider JS
    $('.recent-slider').owlCarousel({
        loop:true,
        margin:10,
        nav: false,
        dots: true,
        smartSpeed: 550,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
            }
        }
        
    });

    // Recent Slider Two JS
    $('.recent-slider-two').owlCarousel({
        singleItem: true,
        loop:true,
        center:true,
        margin:10,
        nav: false,
        dots: true,
        smartSpeed: 550,
        autoplay:false,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
            }
        }
        
    });

    // Expert Slider JS
    $('.expert-slider').owlCarousel({
        singleItem: true,
        loop:true,
        center:true,
        margin:10,
        nav: true,
        dots: false,
        smartSpeed: 550,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        navText: [
            "<i class='flaticon-left-chevron'></i>",
            "<i class='flaticon-right-chevron'></i>"
        ],
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
            }
        }
        
    });

    // Expert Slider JS
    $('.expert-slider-two').owlCarousel({
        singleItem: true,
        loop:true,
        center:true,
        margin:10,
        nav: false,
        dots: false,
        smartSpeed: 550,
        autoplay:true,
        autoplayTimeout:2000,
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1,
            },
            600:{
                items:2,
            },
            1000:{
                items:3,
            }
        }
        
    });

    // CounterUp JS
    $('.counter').counterUp({
        delay: 50,
        time: 3000
    });

    // Testimonial Slider JS
     $('.testimonial-slider').owlCarousel({
        items:1,
        loop:true,
        margin:10,
        nav: false,
        dots: true,
        smartSpeed: 1000,
        autoplay:true,
        autoplayTimeout:4000,
        autoplayHoverPause:true,
    })

    // Popup youtube JS
    $('.popup-youtube').magnificPopup({
        disableOn: 300,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

    // Popup youtube Two JS
    $('.popup-youtube-two').magnificPopup({
        disableOn: 300,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

    // Popup Gallery JS
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0,1]
        }
    });

    // WOW JS
    new WOW().init();

    // Back to top 
    $('body').append('<div id="toTop" class="back-to-top-btn"><i class="icofont-arrow-up"></i></div>');
    $(window).scroll(function () {
        if ($(this).scrollTop() != 0) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    }); 
    $('#toTop').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 900);
        return false;
    });

    // PRELOADER
    jQuery(window).on('load',function(){
        jQuery(".loader").fadeOut(500);
    });

    // Accordion JS
    $('.accordion > li:eq(0) a').addClass('active').next().slideDown();
    $('.accordion a').click(function(j) {
        var dropDown = $(this).closest('li').find('p');
        $(this).closest('.accordion').find('p').not(dropDown).slideUp();
        if ($(this).hasClass('active')) {
            $(this).removeClass('active');
        } else {
            $(this).closest('.accordion').find('a.active').removeClass('active');
            $(this).addClass('active');
        }
        dropDown.stop(false, true).slideToggle();
        j.preventDefault();
    });

}); 	
})(jQuery);