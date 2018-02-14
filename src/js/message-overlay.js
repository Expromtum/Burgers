
function openMsgOverlay(width, title, content) {
    var overlayElement = document.createElement("div");
 
    var templateElement = document.querySelector("#template-msg-overlay"); 
    overlayElement.innerHTML = templateElement.innerHTML;

    var titleElement = overlayElement.querySelector(".template-msg___title"); 
    titleElement.innerHTML = title;

    var messageElement = overlayElement.querySelector(".template-msg__message"); 
    messageElement.innerHTML = content;

    var closeElement = overlayElement.querySelector(".template-msg__close"); 
    closeElement.addEventListener("click", function(e) {
        e.preventDefault();
        document.body.removeChild(overlayElement);
    });

    var contentElement = overlayElement.querySelector(".template-msg__content"); 
    contentElement.style.width = width + 'px'; //TODO: мобильные устройства

    document.body.appendChild(overlayElement);
    return overlayElement;
}
