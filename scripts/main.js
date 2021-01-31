// чтобы sass-loader корректно работал, указываем путь до файла scss
import '../style/main.scss';
import {CatalogPage, Basket} from './classes';

let basket = new Basket();
let catalog = new CatalogPage();

// обработка кнопок
let btnsMinus = document.querySelectorAll('.btnMinus'),
    btnsPlus = document.querySelectorAll('.btnPlus'),
    btnsBuy = document.querySelectorAll('.btnBuyIt');
for (let btn of btnsMinus){
    btn.addEventListener('click', (event)=>{
        if (document.querySelector(`input[data-id="${event.target.dataset.id}"]`).value > 1){
            document.querySelector(`input[data-id="${event.target.dataset.id}"]`).value--;
        }
    });
}

for (let btn of btnsPlus){
    btn.addEventListener('click', (event)=>{
        document.querySelector(`input[data-id="${event.target.dataset.id}"]`).value++;
    });
}

for (let btn of btnsBuy){
    btn.addEventListener('click', (event)=>{
        catalog.content[event.target.dataset.id].num += Number(document.querySelector(`input[data-id="${event.target.dataset.id}"]`).value);
        // ранее функция была в каждом объекте. Изучим конструкторы - запихну в него.
        // Но т.к. в объекте this относился к объекту, здесь пришлось изменить контекст с помощью бинда.
        let putThis = putInBasket(Products[event.target.dataset.id]);
        putThis();
    });
}

document.querySelector('.basket').addEventListener('click', ()=>{
    if (document.querySelector('.basketList').classList.contains("visible")){
        document.querySelector('.basketList').classList.remove("visible");
    }else{
        document.querySelector('.basketList').classList.add("visible");
    }
});