const stack = require('./stack');

window.onload = function () {
  const pop = document.getElementById('pop');
  const push = document.getElementById('push');
  const peek = document.getElementById('peek');
  const display = document.getElementById('top_of_stack');

  pop.addEventListener("click", function () {
    alert("Removed: " + stack.pop());
  });

  push.addEventListener("click", function () {
    const value = prompt("Enter value:");
    stack.push(value);
    display.innerHTML = value;
  });

  peek.addEventListener("click", function () {
    display.innerHTML = stack.peek();
  });
};
