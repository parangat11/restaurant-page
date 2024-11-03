import "./styles.css"
import {grace} from "./grace.js"
import {kalé} from "./kalé.js"
import {nomadic} from "./nomadic.js"
import {twins} from "./twins.js"

console.log("hello");

const content = document.querySelector('#content');
console.log(grace)
console.log(typeof grace);
content.appendChild(grace);
const buttons = document.querySelectorAll('button');

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
    if(btn.id === "grace") {
        content.appendChild(grace);
    }
    else if(btn.id === "nomadic") {
        content.appendChild(nomadic);
    }
    else if(btn.id === "twins") {
        content.appendChild(twins);
    }
    else {
        content.appendChild(kalé);
    }
}