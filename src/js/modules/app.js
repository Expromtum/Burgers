requirejs.config({
    //By default load any module IDs from js/lib
    baseUrl: 'src/js',
    shim: {
        /*   'bootstrap': {
               'deps': [
                   'popper',
                   'jquery'
               ]
           },*/
        'waypoint': {
            'deps': [
                'jquery'
            ]
        }
        /* ,
               'swiper': {
                    'deps': [
                        'jquery'
                    ]
                }*/
    },
    paths: {
        /**
         * Libs for apps
         */
        'jquery': 'jquery.min',
        'popper': 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.5/umd/popper.min',
        /*   'bootstrap': 'bootstrap.min',*/
        'waypoint': 'jquery.waypoints.min',
        /*'swiper': 'swiper.min',*/

        /**
         * my modules
         */
        /*   'animate': 'app.animate',
           'initGallary': 'app.sliders',
           'initSoftScroll': 'app.scroll'*/
    }
});

require(['jquery' /*, 'bootstrap' */ /*, 'animate', 'initGallary'*/ ], function($) {
    initMenuAccordion();
    initTeamAccordion();
    initBurgerPopup();
    initReviewOverlay();
    initMobileMenuOverlay();
});

require(['popper'], function(p) {
    window.Popper = p;
});

function initMenuAccordion() {
    var item = $('.menu__item');

    item.click(function(e) {
        e.preventDefault();

        var $this = $(this);
        var parent = $this.parent('.menu__list');

        $this.toggleClass("active")
               .siblings().removeClass("active");   

        if ($this.hasClass('active')) {              
            parent.addClass("active");   
        } else {
            parent.removeClass("active");   
        }               
    });

    // item.on('wheel', function(e) {
    //     var $this = $(this);
    //     $this.removeClass("active");  
    //     $this.parent('.menu__list').removeClass("active");  
    // });   

    // $(document).on("touchend", ".menu__item", function(e) {
    //     var $this = $(this);
    //     $this.removeClass("active");  
    //     $this.parent('.menu__list').removeClass("active");  
    // });
}

function initTeamAccordion() {
    var item = $('.member__item');

    item.click(function(e) {
        e.preventDefault(); 

        $(this).toggleClass("active")
               .siblings().removeClass("active");     
    });
}

function initBurgerPopup() {
    var buttonPopup = $('.burger-composition__btn');

    buttonPopup.click(function(e) {//Не работает в хроме
        e.preventDefault();

        $(this).toggleClass("active");
    });
}

function initReviewOverlay() {
    var buttonOpen = $('.button__open-review');

    buttonOpen.click(function(e) {
        e.preventDefault();

        var overlay = openMsgWithTitle(460,
            'КОНСТАНТИН СПИЛБЕРГ',
            'Мысли все о них и о них, о них и о них.' +
            'Нельзя устоять, невозможно забыть... ' +
            'Никогда не думал, что булочки могут быть такими мягкими, ' +
            'котлетка такой сочной, а сыр таким расплавленным. ' +
            'Мысли все о них и о них, о них и о них. Нельзя устоять, ' +
            'невозможно забыть... ' +
            'Никогда не думал, что булочки могут быть такими мягкими, ' +
            'котлетка такой сочной, а сыр таким расплавленным.');
    });
}

function initMobileMenuOverlay() {
    var header = $('.header');
    var buttonOpen = $('.mobile-menu__open');
    var buttonClose = $('.mobile-menu__close');
    var buttonMenu = $('.main-menu__item');
    var overlayClass = "mobile-menu-overlay";

    buttonOpen.click(function(e) {
        e.preventDefault();
        header.addClass(overlayClass);
    });

    buttonClose.click(function(e) {
        e.preventDefault();
        header.removeClass(overlayClass);
    });

    buttonMenu.click(function(e) {
        header.removeClass(overlayClass);
    });
}

/*
function initBurgerSlider() {
    const left = document.querySelector("#slider__arrow--left");
    const right = document.querySelector("#slider__arrow--right");
    const slide__item = document.querySelector(".slide-item");
    const slider__items = document.querySelector("#slider__items");

    const countSlide = 3; //TODO: посчитать их количество через JS
    const minRight = 0;
    let currentRight = 0;

    let step = parseInt(getComputedStyle(slide__item).width);


    // const maxRight = (countSlide - 1) * step;


    left.addEventListener('click', function(event) {
        event.preventDefault();
        let step = parseInt(getComputedStyle(slide__item).width);
        if (currentRight > minRight) {
            currentRight -= step;

            if (currentRight < 0) {
                currentRight = 0
            };

            slider__items.style.right = currentRight + "px";
        }
    });

    right.addEventListener('click', function(event) {
        event.preventDefault();
        let step = parseInt(getComputedStyle(slide__item).width);


        const maxRight = (countSlide - 1) * step;

        alert(step);
        if (currentRight < maxRight) {
            currentRight += step;
            slider__items.style.right = currentRight + "px";
        }

    });
}*/