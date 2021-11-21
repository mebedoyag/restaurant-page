import { pageLoad } from './home';
import { contactLoad } from './contact';
import ResImg from './restaurant.jpg';

const div = document.getElementById('content');

function handleClick(e) {
  const bttn = e.target;

  // wipes out the current content
  div.innerHTML = "";

  // runs the tab module to populate it again 
  if(bttn.textContent === "Contact") contactLoad(div);
  
  // makeMenuPage();
  
}

function loadListeners() {
  const menuBttn = document.querySelector('.menu');
  const contactBttn = document.querySelector('.contact');

  menuBttn.addEventListener('click', handleClick);
  contactBttn.addEventListener('click', handleClick);
}

function init() {

  const home = pageLoad(div, ResImg);
  document.body.appendChild(home);

  loadListeners();
}

init();