var sectionList = $('.wrapper section');
var scrollify = $.scrollify;

$(document).ready(function() {
    initPaginationPointForSection();
    initOnePageScroll();
    initMenuLinks();    
});

// $(document).swipe({
// swipe: function(event, direction, distance, duration, fingerCount, fingerData) {
//   *
//    * плагин возвращает фактическое...
   
//   const scrollDirection = direction === 'down' ? 'up' : 'down';
  
//   scrollToSection(scrollDirection);
// }
// });

$(document).on({
  // wheel: e => {
  //   const deltaY = e.originalEvent.deltaY;

  //   const direction = deltaY > 0 ? "down" : "up";
  //   if (direction == "down") {
		// scrollify.prev();
  //   }

  //   if (direction == "down") {
 	// 	scrollify.next();
  //   }
  // },
  keydown: e => {  /*Нажатие */
    switch (e.keyCode) {
      case 40:
        scrollify.next();
        break;

      case 38:
        scrollify.prev();
        break;
    }
  },
  touchmove: e => e.preventDefault()

  // touchstart touchend touchmove 
});

function setActiveMenuPoint(index, sections) {
    var pointList = $('.pagination').find('.pagination__item');
    pointList.removeClass('active');

    var point = pointList.eq(index);
    point.addClass('active');
}

function initOnePageScroll() {
    $(function() {
        $.scrollify({
            section: ".site-section",
            //  sectionName: "data-section-name",
            interstitialSection: "",
            easing: "easeOutExpo",
            scrollSpeed: 800,
            offset: 0,
            scrollbars: false,
            //   standardScrollElements: ".slider",
            setHeights: true,
            overflowScroll: true,
            updateHash: true,
            touchScroll: true,
            before: setActiveMenuPoint,
            //  after: function() {},
            //  afterResize: function() {},
            //  afterRender: function() {}
        });
    });
}

//Каждой секции сопоставляем свою точку пагинатора
function initPaginationPointForSection() {
    var paginationList = $(".pagination .pagination__list");
    var templatePoint = $(".pagination .pagination__item").first();

    for (i = 0; i < sectionList.length - 1; i++) {
        paginationList.append(templatePoint.clone());
    }

    //При клике на точку пагинатора должна открываться секция
    //с таким же индексом
    var pointList = $(".pagination .pagination__item");

    pointList.click(function(e) {
        e.preventDefault();
        var iSection = $(this).index();
        scrollify.move(iSection);
    });

    var currentPoint = pointList.eq(scrollify.currentIndex());
    currentPoint.addClass('active');
}

function initMenuLinks() {
    var linkList = $('[data-section-name]');

    linkList.click(function(e) {
        e.preventDefault();

        //Ищем секцию по ID, который должен быть равен атрибуту data-section-name  	
        var section = $('#' + $(this).attr('data-section-name'));

        if (section.length > 0) {
           scrollify.move(section.index());
    	}
   });
}