const nomadic = document.createElement('div');
nomadic.classList.add('page');
for(let i = 0; i < 7; i++) {
    const item = document.createElement('div');
    item.classList.add = `item-${i+1}`;
    item.textContent = `item-${i+1}`;
    nomadic.appendChild(item);
}
console.log(typeof nomadic);
console.log(nomadic);
export {nomadic};