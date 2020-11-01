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


