import './style.css';

// 5)Ingredience jako komponenty
const ingredients = [
  {color: '#feeeca', label: 'mléčná pěna' },
  {color: '#fed7b0', label: 'teplé mléko' },
  {color: '#613916', label: 'espresso' },
];

const Layer = (props) => {
  return `<div class="layer">
  <div class="layer__color" style="background-color: ${props.color}"></div>
              <div class="layer__label">${props.label}</div></div>`;
};

export const filledLayer = (props) => {
  let result = '';
  for (let i = 0; i < props.ingredients.length; i++) {
    result += Layer(props.ingredients[i]);
  }
  return result;
};

// konec
