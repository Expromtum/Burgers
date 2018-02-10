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
    initMenuAccordeon();
    initTeamAccordeon();
    initBurgerPopup();
    initReviewOverlay();
    initMobileMenuOverlay();
    initBurgerSlider();
});

require(['popper'], function(p) {
    window.Popper = p;
});

function initMenuAccordeon() {
    var item = $('.menu__item');
    var activeClass = "menu__item--active";
    var itemList = $('.menu__item');

    item.click(function(e) {
        e.preventDefault();

        if ($(this).hasClass(activeClass)) {
            itemList.removeClass(activeClass);
        } else {
            itemList.removeClass(activeClass);
            $(this).addClass(activeClass);
        }
    });
}

function initTeamAccordeon() {
    var item = $('.member__item');
    var activeClass = "member__item--active";
    var itemList = $('.member__item');

   item.click(function(e) {
        e.preventDefault();

        if ($(this).hasClass(activeClass)) {
            itemList.removeClass(activeClass);
        } else {
            itemList.removeClass(activeClass);
            $(this).addClass(activeClass);
        }
    });
    /*var activeClass = $(this).parents('.member__item');*/
}

function initBurgerPopup() {
    var buttonPopup = document.getElementById('burger-popup');
    var activeClass = "burger-popup--active";

    buttonPopup.addEventListener('click', function(event) {
        event.preventDefault();

        if ($(this).hasClass(activeClass)) {
            $(this).removeClass(activeClass);
        } else {
            $(this).addClass(activeClass);
        }
    });
}

function initReviewOverlay() {
    var buttonOpen = $('.button__open-review');

    buttonOpen.click(function(e) {
        e.preventDefault();

        var overlay = openMsgOverlay(460,
            'КОНСТАНТИН СПИЛБЕРГ',
            'Мысли все о них и о них, о них и о них.' +
            'Нельзя устоять, невозможно забыть... ' +
            'Никогда не думал, что булочки могут быть такими мягкими, ' +
            'котлетка такой сочной, а сыр таким расплавленным. ' +
            'Мысли все о них и о них, о них и о них. Нельзя устоять, ' +
            'невозможно забыть... ' +
            'Никогда не думал, что булочки могут быть такими мягкими, ' +
            'котлетка такой сочной, а сыр таким расплавленным.');

        //document.body.appendChild(overlay);
    });
}

function initMobileMenuOverlay() {
    var header = $('.header');
    var buttonOpen = $('.mobile-menu__open');
    var buttonClose = $('.mobile-menu__close');
    var buttonMenu = $('.main-menu__item');
    var activeClass = "phone-menu-overlay";

    buttonOpen.click(function(e) {
        e.preventDefault();
        header.addClass(activeClass);
    });

    buttonClose.click(function(e) {
        e.preventDefault();
        header.removeClass(activeClass);
    });

    buttonMenu.click(function(e) {
        header.removeClass(activeClass);
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

function initBurgerSlider() {
    var slideList = document.querySelectorAll('#dark-burger .slider .slide-item');
    var currentSlide = 0;

    function goToSlide(n) {
        slideList[currentSlide].className = 
            slideList[currentSlide].className.replace(" slide-item--active", "");  
                  
        currentSlide = (n + slideList.length) % slideList.length;
        slideList[currentSlide].className += " slide-item--active";      
    };

    function nextSlide() {
        goToSlide(currentSlide + 1);
    };

    function previousSlide() {
        goToSlide(currentSlide - 1);
    };

    const left = document.querySelector("#dark-burger .slider .slider__arrow--left");
    const right = document.querySelector("#dark-burger .slider .slider__arrow--right");

    left.addEventListener('click', function(event) {
        event.preventDefault();
        previousSlide();
    });

    right.addEventListener('click', function(event) {
        event.preventDefault();
        nextSlide();
    });

}