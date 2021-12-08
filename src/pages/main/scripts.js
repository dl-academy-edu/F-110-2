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
    if (event.code === "Escape" && popup.classList.contains('popup-open')) {
        // if(popup.classList.contains('popup-open')) {
            popup.classList.remove('popup_open');
            bannerBtn.focus();
        // }
    }
})