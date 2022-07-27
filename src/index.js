import './style.css';
import myImage from './myImage.jpg';


const divElement = document.createELement('div');
const h2 = document.createElement('h2');
h2.innerText = 'My first webpack setup';
const img = document.createElement('img');
img.src = myImage;
divElement.appendChild(h2);
divElement.appendChild(img);

document.body.appendChild(divElement);
