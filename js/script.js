const mainEl = document.querySelector('main');
const topMenuEl = document.querySelector('nav');

//task1
let color = "var(--main-bg)"
mainEl.style.background = color;

mainEl.innerHTML = "<h1>SEI Rocks!</h1>";

mainEl.classList.add('flex-ctr');

//task 2
topMenuEl.style.height = "100%";

topMenuEl.style.background = "var(--top-menu-bg)"

topMenuEl.classlist.add("flex-around");
