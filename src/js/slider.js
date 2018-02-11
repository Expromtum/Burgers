function initBurgerSlider() { //TODO: mobile toutch события
    const slider = document.querySelector("#dark-burger .slider__content"); // смотровое окно
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

    //mobile
    let point = 0; //положение начала касания

    slider.addEventListener('touchstart', function(e) { //начало касания
        let touchobj = e.changedTouches[0]; // первая точка прикосновения
        point = touchobj.clientX; //составляющая по иксу
    }, false);

    slider.addEventListener('touchend', function(e) { // отпустили экран
        let touchobj = e.changedTouches[0]; // первая точка отпускания

        if (point + 30 < touchobj.clientX) { // более 30 по горизонтали
            e.preventDefault();
            previousSlide(); //обновление ленты влево
        } else if (point - 30 > touchobj.clientX) {
            e.preventDefault();
            nextSlide(); //обновление ленты в право
        }

    }, false);
}


initBurgerSlider(); //TODO: слайдер листается на в разных окнах браузера одновременно