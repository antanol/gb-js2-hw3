// чтобы sass-loader корректно работал, указываем путь до файла scss
import '../style/main.scss';

const pathProductJSON = "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json";

class Product{
    constructor(id, name, price, num=0){
        this.id = id;
        this.name = name;
        this.price = price;
        this.num = num;
    }

    render(){
        return `<div class="productElem">
                <img src="http://placehold.it/150x200">
                <h4>${this.name}</h4>
                <div class="price">${this.price} рублей</div>
                <button data-id="${this.id}" class="btnMinus">-</button>
                <input data-id="${this.id}" type="number" name="nunProd" value="1">
                <button data-id="${this.id}" class="btnPlus">+</button><br>
                <button data-id="${this.id}" class="btnBuyIt">Купить</button>
            </div>`;
    }
}

class CatalogPage{
    constructor(container = '#catalog', content){
        this.container = container;
        this.content = [];
        this._getContent()
            .then(data => { //data - объект js
                this.content = [...data];
                this.renderPage();
            });
    }

    _getContent(){
        return fetch(pathProductJSON)
            .then(result => result.json())
            .catch(error => {
                document.querySelector(this.container).innerHTML = `<h1>Что-то пошло не так...</h1> Простите, но мы не смогли найти товары. Пожалуйста, зайдите позже!`
            })
    }

    renderPage(){
        for (let elem of this.content){
            let product = new Product(elem.id_product, elem.product_name, elem.price);
            document.querySelector(this.container).innerHTML += product.render();
        }
    };
}

class Basket{
    constructor(content=[], amount=0){
        this.content = content;
        this.amount = amount;
        this.startState();
    }
    
    startState(){
        // стартовое состояние 
        if (this.amount == 0){
            document.querySelector(".basketContent").innerHTML = `0 рублей`;
            document.querySelector(".basketList").innerHTML = `Ваша корзина пуста`;
        }
    };

    checkAmount(num){
        let temp_count = 0;
        for (let i=0; i<this.content.length; i++){
            temp_count += num * this.content[i].price;
        }

        this.amount = temp_count;
        document.querySelector(".basketContent").innerHTML = `${this.amount} рублей`
    }

    putInBasket(newElem){
        let alreadyExist = this.content.find(item => {
            if (item.name == newElem.name){
                return true;
            }
        });
        if (!alreadyExist){
            this.content.push(newElem);
        };
        let basketGoods =  `<div class="basketElem">
                                <img src="http://placehold.it/50x50">
                                <b>${newElem.name}</b>
                                <div class="price">${newElem.num}шт. на ${newElem.price*newElem.num} рублей</div>
                            </div>`;
        if (!document.querySelector(".basketElem")) {
            document.querySelector(".basketList").innerHTML = basketGoods;
        }else{
            document.querySelector(".basketList").innerHTML += basketGoods;
        }
        this.checkAmount(newElem.num);
    }
};

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