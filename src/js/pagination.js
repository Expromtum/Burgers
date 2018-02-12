var point = $('.pagination .pagination__item');
var sectionList = $('.wrapper section');
var activeClass = "pagination__item--active";
var scrollify = $.scrollify;

$(document).ready(function() {
	    initPaginationPointForSection();
	    initOnePageScroll();
	    initFirstPageDown();
	}
);

function setPoint(index, sections) {
	var pointList = $('.pagination').find('.pagination__item');
	pointList.removeClass(activeClass);

	var point = pointList.eq(index);
	point.addClass(activeClass);
}

function initOnePageScroll() {
    $(function() {
        // $.scrollify({
        //   section : ".site-section",
        // });

        $.scrollify({
            section: ".site-section",
            sectionName: "",//"section-name",
            interstitialSection: "",
            easing: "easeOutExpo",
            scrollSpeed: 800,
            offset: 0,
            scrollbars: false,
            standardScrollElements: "",
            setHeights: true,
            overflowScroll: true,
            updateHash: true,
            touchScroll: true,
            before: setPoint, 
          //  after: function() {},
          //  afterResize: function() {},
          //  afterRender: function() {}
        });
    });
}


//Каждой секции сопоставляем свою точку пагинатора
function initPaginationPointForSection() {
    var paginationlist = $('.pagination .pagination__list');    

    for (i = 0; i < sectionList.length - 1; i++) {
        var newPoint = point.clone();
        newPoint.removeClass(activeClass);
        newPoint.appendTo(paginationlist);
    };

    var pointList = $('.pagination').find('.pagination__item');

    //При клике на точку пагинатора должна открываться секция
    //с таким же индексом
    pointList.click(function(e) {
        e.preventDefault();

        var iSection = pointList.index($(this));

        scrollify.move(iSection);
    });
}

function initFirstPageDown() {
    var item = $('#frontpage .burger__arrow--bottom');

    item.click(function(e) {
        e.preventDefault();    
	    scrollify.next();
    });
}
