// Menu data structure
var menuLinks = [
  {text: 'about', href: '/about'},
  {text: 'catalog', href: '/catalog'},
  {text: 'orders', href: '/orders'},
  {text: 'account', href: '/account'},
];
//cached elements
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

topMenuEl.classList.add("flex-around");

//task 3
menuLinks.forEach(function(link){
  const a = document.createElement('a');
  a.setAttribute('href', link.href);
  a.innerHTML = link.text;
  topMenuEl.appendChild(a);
});
