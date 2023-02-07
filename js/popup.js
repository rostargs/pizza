const popupCont = document.querySelector('.modal-popup');
const createBtn = document.querySelector('.constructor__create');
const popupBtn = document.querySelector('.popup__button');

createBtn.addEventListener('click',() => {
    popupCont.style.display = 'block';
})
popupBtn.addEventListener('click',() => {
    popupCont.style.display = 'none';
})