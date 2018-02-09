function openOverlay(width, title, content, ownerElement) {

    const overlayElement = document.createElement("div");
    overlayElement.classList.add("overlay");

    const containerElement = document.createElement("div");
    containerElement.classList.add("overlay__container");

    const contentElement = document.createElement("div");
    contentElement.classList.add("overlay__content");
    contentElement.style.width = width + 'px'; /*TODO: мобильные устройства*/

    const titleElement = document.createElement("div");
    titleElement.classList.add("overlay__title");
    titleElement.innerHTML = title;
  
    const messageElement = document.createElement("div");
    messageElement.classList.add("overlay__message");
    messageElement.innerHTML = content;

    const closeElement = document.createElement("a");
    closeElement.classList.add("overlay__close");
    closeElement.href = "#";
    closeElement.addEventListener("click", function(e) {
        e.preventDefault();
        ownerElement.removeChild(overlayElement);
    });

    overlayElement.appendChild(containerElement);
    containerElement.appendChild(closeElement);
    containerElement.appendChild(contentElement);
    contentElement.appendChild(titleElement);
    contentElement.appendChild(messageElement);

    ownerElement.appendChild(overlayElement);
    return overlayElement;
}

//TODO: Кнопка закрытия оверлея секции Отзывы закрывает оверлей, 
//браузер перерисовывает страницу и отображает опять первую секцию
