
function openMsgWithTitle(width, title, content) {
    var overlayElement = document.createElement("div");
 
    var templateElement = document.querySelector("#template-msg-with-title"); 
    overlayElement.innerHTML = templateElement.innerHTML;

    var titleElement = overlayElement.querySelector(".msg__title"); 
    titleElement.innerHTML = title;

    var messageElement = overlayElement.querySelector(".msg__message"); 
    messageElement.innerHTML = content;

    var closeElement = overlayElement.querySelector(".msg__close"); 
    
    closeElement.addEventListener("click", function(e) {
        e.preventDefault();
        document.body.removeChild(overlayElement);
    });

    var contentElement = overlayElement.querySelector(".msg__content"); 
    contentElement.style.width = width + 'px'; //TODO: мобильные устройства

    document.body.appendChild(overlayElement);
    return overlayElement;
};

function openMsgWithButton(width, title, content) {
    var overlayElement = document.createElement("div");
 
    var templateElement = document.querySelector("#template-msg-with-button"); 
    overlayElement.innerHTML = templateElement.innerHTML;

    var titleElement = overlayElement.querySelector(".msg__title"); 
    titleElement.innerHTML = title;

    var messageElement = overlayElement.querySelector(".msg__message"); 
    messageElement.innerHTML = content;

    var closeElement = overlayElement.querySelector(".msg__close"); 
    
    closeElement.addEventListener("click", function(e) {
        e.preventDefault();
        document.body.removeChild(overlayElement);
    });

    var contentElement = overlayElement.querySelector(".msg__content"); 
    contentElement.style.width = width + 'px'; //TODO: мобильные устройства

    document.body.appendChild(overlayElement);
    return overlayElement;
}
