document.addEventListener('DOMContentLoaded',() => {
    const constructorInput = document.querySelectorAll('.constructor__choose-input');
    const pizzaItem = document.querySelectorAll('.constructor__pizza-item');
    const totalPrice = document.querySelector('.price');
    const clearBtn = document.querySelector('.constructor__clear');

    const fixed = Number(totalPrice.textContent).toFixed(2);

    const showItems = (selector) => {
        selector.forEach(item => {
            const constructorArr = Array.from(constructorInput);
            const pizzaArr = Array.from(pizzaItem);
            item.addEventListener('click',(event) => {
                item.parentNode.classList.toggle('active');
                const index = constructorArr.indexOf(event.target);
                pizzaArr[index].classList.toggle('hidden');

                let current = Number(totalPrice.textContent);
                const price =  +(item.parentNode.dataset.price);

                if(item.parentNode.classList.contains('active')){
                    current += price;
                    totalPrice.textContent = current.toFixed(2);
                }else{
                    current -= price;
                    totalPrice.textContent = current.toFixed(2);
                }
            });
        });
    }
    showItems(constructorInput);

    clearBtn.addEventListener('click',() => {
        constructorInput.forEach(item => {
            item.parentElement.classList.remove('active');
            item.checked = false;
        });
        pizzaItem.forEach(item => {
            item.classList.add('hidden');
        });

        totalPrice.textContent = fixed;

        tabBtn.forEach((item,index) => {
            if(item.classList.contains('constructor__button-active')){
                item.classList.remove('constructor__button-active');
                chooseItem[index].classList.add('hidden');
            }
        })
    });



    // Constructor Pizza Tabs


    const tabBtn = document.querySelectorAll('.constructor__button');
    const chooseItem = document.querySelectorAll('.constructor__choose');

    tabBtn.forEach((item,index) => {
        item.addEventListener('click',() => {
            item.classList.toggle('constructor__button-active');
            chooseItem[index].classList.remove('hidden');

            if(!item.classList.contains('constructor__button-active')){
                chooseItem[index].classList.add('hidden');
            }
        })
    })

})





