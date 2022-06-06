const salePopup = document.querySelector('#sale-popup');
const salePopupCloseBtn = document.querySelector('#sale-popup__close-btn');
const salePopupSubmitBtn = document.querySelector('#sale-popup__button-submit');

const thanksPopup = document.querySelector('#thanks-popup');
const thanksPopupCloseBtn = document.querySelector('#thanks-popup__close-btn');

const closePopupHandler = (event) => {
    const target = event.currentTarget;
    if (target.id === 'sale-popup__close-btn') {
        salePopup.style.display = 'none';
    }
    if (target.id === 'thanks-popup__close-btn') {
        thanksPopup.style.display = 'none';
    }
}

const showThanksPopup = (event) => {
    thanksPopup.style.display = 'block';
    salePopup.style.display = 'none';
    event.preventDefault();
}

salePopupCloseBtn.addEventListener('click', closePopupHandler);
thanksPopupCloseBtn.addEventListener('click', closePopupHandler);

salePopupSubmitBtn.addEventListener('click', showThanksPopup);