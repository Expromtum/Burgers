var sectionList = $('.wrapper section');

$(document).ready(function() {
    initOnePageScroll();	
});

/*TODO: Заблокировать скроллинг, если нажата ctrl (актуально для карты)*/
function initOnePageScroll() {
	$('#pagepiling').pagepiling({
	    menu: null,
        direction: 'vertical',
        verticalCentered: true,
        sectionsColor: [],
        anchors: [],
        scrollingSpeed: 100,
        easing: 'swing',
        loopBottom: false,
        loopTop: false,
        css3: true,
        navigation: false,
       	normalScrollElements: null/*'#map'*/,
        normalScrollElementTouchThreshold: 5,
        touchSensitivity: 5,
        keyboardScrolling: true,
        sectionSelector: '.site-section',
        animateAnchor: false,
		//events
		onLeave: function(index, nextIndex, direction){
			setActiveMenuPoint(nextIndex-1);		
		},
		afterLoad: function(anchorLink, index){},
		afterRender: function(){
		    initPaginationPointForSection();
		    initMenuLinks();  
		    setActiveMenuPoint(0); 		
		},
	});	
}

function setActiveMenuPoint(index) {
    if (!isFinite(index)) {
   		index = 0;
    };

    var pointList = $('.pagination').find('.pagination__item');
    pointList.removeClass('active');

    var point = pointList.eq(index);
    point.addClass('active');
}

//Каждой секции сопоставляем свою точку пагинатора
function initPaginationPointForSection() {
    var paginationList = $(".pagination .pagination__list");
    var templatePoint = $(".pagination .pagination__item").first();
    var pagepiling = $.fn.pagepiling;

    for (i = 0; i < sectionList.length - 1; i++) {
        paginationList.append(templatePoint.clone());
    }

    //При клике на точку пагинатора должна открываться секция
    //с таким же индексом
    var pointList = $(".pagination .pagination__item");

    pointList.click(function(e) {
        e.preventDefault();
        var iSection = $(this).index() + 1;
        pagepiling.moveTo(iSection);
    });
}

function initMenuLinks() {
    var linkList = $('[data-section-name]');
    var pagepiling = $.fn.pagepiling;

    linkList.click(function(e) {
        e.preventDefault();

        //Ищем секцию по ID, который должен быть равен атрибуту data-section-name  	
        var section = $('#' + $(this).attr('data-section-name'));

        if (section.length > 0) {
           var iSection = section.index() + 1;
           pagepiling.moveTo(iSection);
    	}
   });
}
