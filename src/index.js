import "./styles.css"
import { kalé } from "./kalé.js"
import { nomadic } from "./nomadic.js"
import { twins } from "./twins.js"
import { order } from "./order.js"

const content = document.querySelector('#content');
const buttons = document.querySelectorAll('button');

content.appendChild(kalé);

buttons.forEach((btn) => {
    btn.addEventListener('click', (e) => clickHandlerCell(e, btn));
})

function clickHandlerCell(e, btn) {
    content.innerHTML = "";
    buttons.forEach((button) => {
        button.classList.remove('gold-button', 'shine-button');
        button.classList.add('btn-69');
    })
    btn.classList.remove('btn-69');
    btn.classList.add('gold-button', 'shine-button');
    switch(btn.id) {
        case "nomadic":
            content.appendChild(nomadic);
            break;
        case "twins":
            content.appendChild(twins);
            break;
        case "order":
            content.appendChild(order);
            break;
        default:
            content.appendChild(kalé);
    }
}