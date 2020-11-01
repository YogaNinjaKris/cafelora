import './index.html';
import './style.css';
import { Drink } from './Drink';

console.log('funguju!');
// 3)Zprovoznění navigace
const navbtn = document.getElementById('nav-btn');
const nav = document.querySelector('nav');
const navItems = document.querySelectorAll('.navItem');

navbtn.addEventListener('click', () => {
  nav.classList.toggle('nav-closed');
});

navItems.forEach((nl) => {
  nl.addEventListener('click', () => {
    nav.classList.toggle('nav-closed');
  });
});
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

// 5)Ingredience jako komponenty
const layers = [
  {
    color: '#feeeca',
    label: 'mléčná pěna',
  },
  {
    color: '#fed7b0',
    label: 'teplé mléko',
  },
  {
    color: '#613916',
    label: 'espresso',
  },
];


// konec