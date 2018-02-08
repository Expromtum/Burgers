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
});

require(['popper'], function(p) {
    window.Popper = p;
});

function initMenuAccordeon() {

    var MyClickElement = $('.menu__item');
    var ActiveClass = "menu__item--active";
    var MyList = $('.menu__item');

    MyClickElement.click(function(e) {
        e.preventDefault();

        if ($(this).hasClass(ActiveClass)) {
            MyList.removeClass(ActiveClass);
        } else {
            MyList.removeClass(ActiveClass);
            $(this).addClass(ActiveClass);
        }
    });
}

function initTeamAccordeon() {
    var MyClickElement = $('.member__item');
    var ActiveClass = "member__item--active";
    var MyList = $('.member__item');

    MyClickElement.click(function(e) {
        e.preventDefault();

        if ($(this).hasClass(ActiveClass)) {
            MyList.removeClass(ActiveClass);
        } else {
            MyList.removeClass(ActiveClass);
            $(this).addClass(ActiveClass);
        }
    });
    /*var MyActiveItem = $(this).parents('.member__item');*/
}

function initBurgerPopup() {
    var BurgerPopupButton =  document.getElementById('burger-popup');
    var ActiveClass = "burger-popup--active";

    BurgerPopupButton.addEventListener('click', function(event) {
        event.preventDefault();

        if ($(this).hasClass(ActiveClass)) {
            $(this).removeClass(ActiveClass);
        } else {
            $(this).addClass(ActiveClass);
        }
    });
}

function initReviewOverlay() {
    var openButton = $('.button__open-review');

    openButton.click(function(e) {
        e.preventDefault();

    var overlay =    openOverlay(460,
            'КОНСТАНТИН СПИЛБЕРГ', 
            'Мысли все о них и о них, о них и о них.' + 
            'Нельзя устоять, невозможно забыть... '+
            'Никогда не думал, что булочки могут быть такими мягкими, '+
            'котлетка такой сочной, а сыр таким расплавленным. '+
            'Мысли все о них и о них, о них и о них. Нельзя устоять, '+
            'невозможно забыть... '+
            'Никогда не думал, что булочки могут быть такими мягкими, '+
            'котлетка такой сочной, а сыр таким расплавленным.', document.body);

//document.body.appendChild(overlay);
    });    
}