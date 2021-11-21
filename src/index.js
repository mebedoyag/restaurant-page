import { pageLoad } from './home';
import Backgroung from './restaurant.jpg';
// import { makeContactPage } from './contact';

const div = document.getElementById('content');

function init() {

  return pageLoad();
}

div.appendChild(init());

// function handleClick(cont) {
//   // wipes out the current content
//   cont.innerHTML = "";
  
//   // runs the tab module to populate it again 
//   makeContactPage(cont);
// }

// function switchTab() {
//   // Select the tab buttons
//   const menuBttn = document.querySelector('.menu');
//   const contactBttn = document.querySelector('.contact');
//   const container = document.getElementById('content');

//   // add click listeners for that buttons
//   menuBttn.addEventListener('click', () => handleClick(container));
//   contactBttn.addEventListener('click', () => handleClick(container));
// }



// switchTab();



