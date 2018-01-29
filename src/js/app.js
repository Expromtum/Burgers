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

require(['jquery'/*, 'bootstrap' *//*, 'animate', 'initGallary'*/ ], function($) {
    initMenuAccordeon();
    initTeamAccordeon();    
});

require(['popper'], function(p) {
    window.Popper = p;
});

function initMenuAccordeon() {

    var MyClickElement = $('.menu__item');
    var MyClass = "menu__item--active";
    var MyList = $('.menu__item');

    MyClickElement.click(function(e) {
        e.preventDefault();

        if ($(this).hasClass(MyClass)) {
            MyList.removeClass(MyClass);
        } else {
            MyList.removeClass(MyClass);
            $(this).addClass(MyClass);
        }
    });
}

function initTeamAccordeon() {
    var MyClickElement = $('.member__item');
    var MyClass = "member__item--active";
    var MyList = $('.member__item');

    MyClickElement.click(function(e) {
        e.preventDefault();

        if ($(this).hasClass(MyClass)) {
            MyList.removeClass(MyClass);
        } else {
            MyList.removeClass(MyClass);
            $(this).addClass(MyClass);
        }
    });
    /*var MyActiveItem = $(this).parents('.member__item');*/
}