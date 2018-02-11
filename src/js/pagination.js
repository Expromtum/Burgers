function initPagination() {
    var item = $('.pagination__item');
    var activeClass = "pagination__item--active";
    var itemList = $('.pagination__item');

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

initPagination();



