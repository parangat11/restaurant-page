const twins = document.createElement('div');
twins.classList.add('page');
for(let i = 0; i < 14; i++) {
    const item = document.createElement('div');
    item.classList.add = `item-${i+1}`;
    item.textContent = `item-${i+1}`;
    twins.appendChild(item);
}
console.log(typeof twins);
console.log(twins);
export {twins};