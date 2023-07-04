// const navigasi = ducument.querySelector('.navigasi');
// const hamburger = document.createElement('a');
// hamburger.innerHTML = '☰';
// navigasi.appendChild(hamburger);

const hamburgerButtonElement = document.querySelector('#hamburger');
const drawerElement = document.querySelector('#drawer');
const mainElement = document.querySelector('main');

hamburgerButtonElement.addEventListener('click', (event) => {
  drawerElement.classList.toggle('open');
  event.stopPropagation();
});

mainElement.addEventListener('click', (event) => {
  drawerElement.classList.remove('open');
  event.stopPropagation();
});
