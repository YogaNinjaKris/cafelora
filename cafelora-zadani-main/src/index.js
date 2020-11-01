import './index.html';
import './style.css';

console.log('funguju!');
// 3)Zprovoznění navigace
const btnElm = document.querySelector('#nav-btn');
const navElm = document.querySelector('nav');
const navMenu = () => {
  navElm.classList.toggle('nav-closed');
};

btnElm.addEventListener ('click', navMenu);

const a = document.querySelectorAll (a);
for (let i = 0; i < a.length; i += 1) {
  a [i].addEventListener('click', aClosed);
}
// konec

// 4)Objednávání
let ordered = false;

const drinkCup = () => {
  const drinkCupElm = document.querySelector('.drink__cup');
  drinkCupElm.classList.toggle('drink__cup--selected');
  const btnCancel = document.querySelector('.order-btn');
  ordered = !ordered;

  if (ordered) {
    btnCancel.textContent = 'Zrušit';
  }else {
    btnCancel.textContent = 'Objednat';
  }
};

const orderButton = document.querySelector('.order-btn');
orderButton.addEventListener('click', drinkCup);
// konec

