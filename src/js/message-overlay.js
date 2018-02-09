
function openMsgOverlay(width, title, content) {
    let overlayElement = document.createElement("div");
 
    let templateElement = document.querySelector("#template-msg-overlay"); 
    overlayElement.innerHTML = templateElement.innerHTML;

    let titleElement = overlayElement.querySelector(".template-msg___title"); 
    titleElement.innerHTML = title;

    let messageElement = overlayElement.querySelector(".template-msg__message"); 
    messageElement.innerHTML = content;

    let closeElement = overlayElement.querySelector(".template-msg__close"); 
    closeElement.addEventListener("click", function(e) {
        e.preventDefault();
        document.body.removeChild(overlayElement);
    });

    let contentElement = overlayElement.querySelector(".template-msg__content"); 
    contentElement.style.width = width + 'px'; //TODO: мобильные устройства

    document.body.appendChild(overlayElement);
    return overlayElement;
}
