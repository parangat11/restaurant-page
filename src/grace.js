const grace = document.createElement('div');
grace.classList.add = 'page';
for(let i = 0; i < 10; i++) {
    const item = document.createElement('div');
    item.classList.add = `item-${i+1}`;
    item.textContent = `item-${i+1}`;
    grace.appendChild(item);
}
console.log(typeof grace);
console.log(grace);
export {grace};