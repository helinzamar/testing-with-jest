import { push, pop, peek, getStack, clear } from './stack.js';

document.getElementById('pushBtn').addEventListener('click', () => {
  const value = document.getElementById('input').value;
  push(value);
  render();
});

document.getElementById('popBtn').addEventListener('click', () => {
  pop();
  render();
});

document.getElementById('peekBtn').addEventListener('click', () => {
  alert(peek());
});

function render() {
  const ul = document.getElementById('stack');
  ul.innerHTML = '';
  getStack().forEach(item => {
    const li = document.createElement('li');
    li.textContent = item;
    ul.appendChild(li);
  });
}

render();
