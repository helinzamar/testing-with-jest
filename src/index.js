import * as stack from './stack.js';

window.onload = function () {
  console.log("done");

  const pop = document.getElementById('pop');
  const push = document.getElementById('push');
  const peek = document.getElementById('peek');
  const display = document.getElementById('top_of_stack');

  pop.addEventListener("click", function () {
    const text = "Tog bort " + stack.pop();
    alert(text);
  });

  push.addEventListener("click", function () {
    const x = prompt("Vad ska vi lägga på stacken?");
    stack.push(x);
    display.innerHTML = x;
  });

  peek.addEventListener("click", function () {
    display.innerHTML = stack.peek();
  });
};
