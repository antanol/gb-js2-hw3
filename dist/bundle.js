(()=>{"use strict";var t={507:(t,e,n)=>{n.d(e,{Z:()=>i});var r=n(645),o=n.n(r)()((function(t){return t[1]}));o.push([t.id,".tasks .texttasks,.tasks .answers{padding:1em 3em}html,body{padding:0;margin:0;font-family:sans-serif}.tasks{display:grid;grid-template-columns:1fr 2fr}.tasks .texttasks h3,.tasks .answers h3{border-bottom:1px solid black}.tasks li{margin-bottom:10px}.tasks details{font-style:italic}.tasks summary{font-style:normal;color:#458daa}.tasks .answers{grid-column-start:2;grid-row-start:1;grid-row-end:3}.tasks header{background-color:darkred;color:white;text-align:left;line-height:40px;padding:5px;font-size:18px;margin-bottom:30px;display:flex;justify-content:space-between;position:relative}.tasks header .basket{display:flex;justify-content:space-between;align-items:center;padding:5px}.tasks header .basket .fa{margin-right:5px}.tasks header .basket:hover{border:2px solid white}.tasks header .basketList{border:1px solid black;border-radius:5px;background-color:white;color:black;min-height:300px;width:500px;padding:20px;position:absolute;top:100px;right:5px;display:none}.tasks header .basketList .basketElem{border-bottom:1px solid black;display:grid;grid-template-columns:20% 80%}.tasks header .basketList .basketElem img{grid-column-start:1;grid-column-end:2;grid-row-start:1;grid-row-end:3;margin:auto}.tasks header .basketList .basketElem::after{content:'';overflow:hidden;clear:both}.tasks header .visible{display:block}.tasks .productElem{display:inline-block;text-align:center;border:1px solid darkgray;margin:5px;padding:5px;width:200px}.tasks .productElem img{height:200px}.tasks .productElem h4{margin-top:10px;margin-bottom:5px}.tasks .productElem button{line-height:25px;width:30px;margin:1px}.tasks .productElem input{line-height:25px;width:40px}.tasks .productElem .btnBuyIt{width:initial}.tasks .fa-plus-circle{font-size:20px;color:green}.tasks .fa-plus-circle:hover{color:lightgreen;font-size:22px}.hamburger-constructor{width:600px;margin-top:20px;padding:0 40px;box-shadow:5px 5px 5px lightgrey;position:relative}.hamburger-constructor .fa{position:absolute;top:calc((100% - 20px) /2);font-size:40px;color:gray}.hamburger-constructor .fa.fa-angle-right{right:15px}.hamburger-constructor .fa.fa-angle-left{left:15px}.hamburger-constructor .fa.hidden-arrow{display:none}.hamburger-constructor .fa:hover{color:yellowgreen}.hamburger-constructor h2{margin:5px;font-weight:400}.hamburger-constructor hr{margin:10px 0 0 0}section hr{margin:0 0 10px 0}section.hidden-screen{display:none}section label{display:inline-block;min-width:160px;margin:10px;padding:20px;border:2px solid gray;border-radius:10px;text-align:center}section label:hover{border-color:yellowgreen}section label input{display:none}section label img{height:100px}section label .params{font-style:italic;color:gray;font-size:70%}section label .price{font-weight:bold}.task-hidden{display:none}\n",""]);const i=o},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=t(e);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,r){"string"==typeof t&&(t=[[null,t,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var s=0;s<t.length;s++){var c=[].concat(t[s]);r&&o[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),e.push(c))}},e}},379:(t,e,n)=>{var r,o=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),i=[];function a(t){for(var e=-1,n=0;n<i.length;n++)if(i[n].identifier===t){e=n;break}return e}function s(t,e){for(var n={},r=[],o=0;o<t.length;o++){var s=t[o],c=e.base?s[0]+e.base:s[0],d=n[c]||0,l="".concat(c," ").concat(d);n[c]=d+1;var u=a(l),p={css:s[1],media:s[2],sourceMap:s[3]};-1!==u?(i[u].references++,i[u].updater(p)):i.push({identifier:l,updater:f(p,e),references:1}),r.push(l)}return r}function c(t){var e=document.createElement("style"),r=t.attributes||{};if(void 0===r.nonce){var i=n.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(t){e.setAttribute(t,r[t])})),"function"==typeof t.insert)t.insert(e);else{var a=o(t.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var d,l=(d=[],function(t,e){return d[t]=e,d.filter(Boolean).join("\n")});function u(t,e,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(t.styleSheet)t.styleSheet.cssText=l(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function p(t,e,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?t.setAttribute("media",o):t.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var h=null,m=0;function f(t,e){var n,r,o;if(e.singleton){var i=m++;n=h||(h=c(e)),r=u.bind(null,n,i,!1),o=u.bind(null,n,i,!0)}else n=c(e),r=p.bind(null,n,e),o=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=s(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var r=0;r<n.length;r++){var o=a(n[r]);i[o].references--}for(var c=s(t,e),d=0;d<n.length;d++){var l=a(n[d]);0===i[l].references&&(i[l].updater(),i.splice(l,1))}n=c}}}}},e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={id:r,exports:{}};return t[r](o,o.exports,n),o.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t=n(379),e=n.n(t),r=n(507);e()(r.Z,{insert:"head",singleton:!1}),r.Z.locals;class o{constructor(t,e,n,r=0){this.id_product=t,this.name=e,this.price=n,this.quantity=r}render(){return`<div class="productElem">\n                <img src="http://placehold.it/150x200">\n                <h4>${this.name}</h4>\n                <div class="price">${this.price} рублей</div>\n                <button data-id="${this.id_product}" class="btnMinus">-</button>\n                <input data-id="${this.id_product}" type="number" name="nunProd" value="1">\n                <button data-id="${this.id_product}" class="btnPlus">+</button><br>\n                <button data-id="${this.id_product}" class="btnBuyIt">Купить</button>\n            </div>`}}let i=new class{constructor(t=[],e=0,n=0){this._getContent().then((t=>{this.content=t.contents,this.amount=t.amount,this.countGoods=t.countGoods,this.startState()})).catch((t=>{this.content=[],this.amount=e,this.countGoods=this.countGoods,this.startState()}))}_getContent(){return fetch("https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/getBasket.json").then((t=>t.json())).catch((t=>{console.log(t)}))}startState(){if(0==this.amount)document.querySelector(".basketContent").innerHTML="0 рублей",document.querySelector(".basketList").innerHTML="Ваша корзина пуста";else{document.querySelector(".basketContent").innerHTML=`${this.amount} рублей`;for(let t of this.content)document.querySelector(".basketList").innerHTML+=this.render(t)}this.listeners()}listeners(){document.querySelector(".basket").addEventListener("click",(()=>{document.querySelector(".basketList").classList.toggle("visible")}))}checkAmount(t){let e=0;for(let n=0;n<this.content.length;n++)e+=t*this.content[n].price;this.amount=e,this.countGoods+=this,document.querySelector(".basketContent").innerHTML=`${this.amount} рублей`}render(t){return`<div class="basketElem" data-id="${t.id_product}">\n                    <img src="http://placehold.it/50x50">\n                    <b>${t.product_name}</b>\n                    <div class="price">${t.quantity}шт. на ${t.price*t.quantity} рублей</div>\n                </div>`}putInBasket(t){this.content.find((e=>e.product_name==t.product_name))||this.content.push(t);let e=this.render(t),n=document.querySelector(`.basketElem[data-id="${t.id_product}"]`);n&&n.remove(),document.querySelector(".basketElem")?document.querySelector(".basketList").innerHTML+=e:document.querySelector(".basketList").innerHTML=e,this.checkAmount(t.quantity)}};new class{constructor(t="#catalog",e){this.container=t,this.content=[],this._getContent().then((t=>{this.content=[...t],this.renderPage(),this.listeners()}))}_getContent(){return fetch("https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/catalogData.json").then((t=>t.json())).catch((t=>{document.querySelector(this.container).innerHTML="<h1>Что-то пошло не так...</h1> Простите, но мы не смогли найти товары. Пожалуйста, зайдите позже!"}))}renderPage(){for(let t of this.content){let e=new o(t.id_product,t.product_name,t.price);document.querySelector(this.container).innerHTML+=e.render()}}listeners(){let t=document.querySelectorAll(".btnMinus"),e=document.querySelectorAll(".btnPlus"),n=document.querySelectorAll(".btnBuyIt");for(let e of t)e.addEventListener("click",(t=>{document.querySelector(`input[data-id="${t.target.dataset.id}"]`).value>1&&document.querySelector(`input[data-id="${t.target.dataset.id}"]`).value--}));for(let t of e)t.addEventListener("click",(t=>{document.querySelector(`input[data-id="${t.target.dataset.id}"]`).value++}));for(let t of n)t.addEventListener("click",(t=>{let e=this.content.find((e=>e.id_product===Number(t.target.dataset.id)));e.quantity?e.quantity+=Number(document.querySelector(`input[data-id="${t.target.dataset.id}"]`).value):e.quantity=Number(document.querySelector(`input[data-id="${t.target.dataset.id}"]`).value),i.putInBasket(e)}))}}})()})();