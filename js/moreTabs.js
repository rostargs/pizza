const buttons = document.querySelectorAll('.information__button');
const info = document.querySelectorAll('.information__description');


buttons.forEach((item,index) => {
    item.addEventListener('click', () => {
        item.classList.toggle('information__button-active');
        setTimeout(() => {
            info[index].classList.remove('hidden');
        },100)
        if(!item.classList.contains('information__button-active')){
            setTimeout(() => {
                info[index].classList.add('hidden');
            },100)
        }
    })
})