const kalé = document.createElement('div');
kalé.classList.add = 'page';
for(let i = 0; i < 12; i++) {
    const item = document.createElement('div');
    item.classList.add = `item-${i+1}`;
    item.textContent = `item-${i+1}`;
    kalé.appendChild(item);
}
console.log(typeof kalé);
console.log(kalé);
export {kalé};