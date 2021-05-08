const mainEl = document.querySelector('main');
const topMenuEl = document.querySelector('nav');

let color = "var(--main-bg)"
mainEl.style.background = color;

mainEl.innerHTML = "<h1>SEI Rocks!</h1>";

mainEl.classList.add('flex-ctr');

//task 2

topMenuEl.style.height = "100%";
