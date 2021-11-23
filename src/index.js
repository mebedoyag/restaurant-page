import { pageLoad } from './home';
import { contactLoad } from './contact';
import { menuLoad } from './menu';
import ResImg from './restaurant.jpg';
import FoodImg from './food.jpg'

const div = document.getElementById('content');

function handleClick(e) {
  const bttn = e.target;

  div.innerHTML = "";

  if(bttn.textContent === "Contact") {
    contactLoad(div); 
  } else {
    menuLoad(div, FoodImg);
  }
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