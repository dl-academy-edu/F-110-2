var bannerBtn = document.querySelector('.banner__button');
var popup = document.querySelector('.popup');
var closePopup = document.querySelector('.popup__close');
var input = popup.querySelector('input');


bannerBtn.addEventListener('click', function() {
    popup.classList.add('popup_open');
    input.focus();
})

closePopup.addEventListener('click', function() {
    popup.classList.remove('popup_open');
    bannerBtn.focus();
})

window.addEventListener('keydown',function(event) {
    // console.log(event.code);
    if (event.code === "Escape" && popup.classList.contains('popup_open')) {
        // if(popup.classList.contains('popup-open')) {
            popup.classList.remove('popup_open');
            bannerBtn.focus();
        // }
    }
})


var buttonMobileHeader = document.querySelector('.header__humburger');
var buttonCloseMenu = document.querySelector('.mobile__close');
var mobileHeader = document.querySelector('.mobile');

console.log(buttonMobileHeader)


buttonMobileHeader.addEventListener('click', function() {
    mobileHeader.classList.add('mobile__open');
    console.log("sdfsdfsdf");
})

buttonCloseMenu.addEventListener('click', function() {
    mobileHeader.classList.remove('mobile__open');
    console.log("11");
})