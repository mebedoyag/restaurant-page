/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "contactLoad": () => (/* binding */ contactLoad)
/* harmony export */ });
function contactLoad(container) {
  // creates a div element
  const div = document.createElement('div');

  // adds the content
  div.innerHTML = `
    <header>Hablanos</header>
    <main>
      <h1>Para realizar tu pedido, conocer el estado de tu domicilio o hacer preguntas, quejas o sugerencias</h1>
      <div>
      <p>En Bogota al</p>
      <p>60 + 1 + 6543300</p>
      <p>En Medellin al</p>
      <p>60 + 4 + 6543369</p>
      <p>En todo el pais</p>
      <p>333 622 0000</p>
      <p>También puedes contactarnos por redes sociales</p>
      <p>
        <ul>
          <li>face</li>
          <li>insta</li>
          <li>twitter</li>
          <li>youtu</li>
          <li>tikto</li>
        </ul>
      </p>
      </div>
      <footer>
        <div>Mrs Burger &copy;</div>
        <div>Made with &hearts; by Mike</div>
        <div>Terms and contitions</div>
      </footer>
    </main>
  `;

  // styles to that element


  // appends it to the DOM
  container.appendChild(div);
}



/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "pageLoad": () => (/* binding */ pageLoad)
/* harmony export */ });
function pageLoad(container, imgUrl) {
  const html = `
    <h1>Restaurante pache</h1>
    <div>
      <button class="contact">Contact</button>
      <button class="menu">Menu</button>
    </div>
    <img src="${imgUrl}" height="500" alt="">
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
  `;

  container.innerHTML = html;

  return container;
}




/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "menuLoad": () => (/* binding */ menuLoad)
/* harmony export */ });
function menuLoad(container, url) {
  // creates a div element
  const div = document.createElement('div');

  // adds the content
  div.innerHTML = `
    <h1>Our delicious menu</h1>
    <div>
      <div>
        <img src="${url}" alt="delicous plate"/>
        <p>Try our house plate, you will not regret</p>
      </div>
      <div>
        <img src="${url}" alt="delicous plate"/>
        <p>Try our house plate, you will not regret</p>
      </div>
      <div>
        <img src="${url}" alt="delicous plate"/>
        <p>Try our house plate, you will not regret</p>
      </div>
      <div>
        <img src="${url}" alt="delicous plate"/>
        <p>Try our house plate, you will not regret</p>
      </div>
    </div>
  `;

  // styles to that element

  // appends it to the DOM
  container.appendChild(div);
}



/***/ }),

/***/ "./src/food.jpg":
/*!**********************!*\
  !*** ./src/food.jpg ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "33c3043cc92fee653f85.jpg";

/***/ }),

/***/ "./src/restaurant.jpg":
/*!****************************!*\
  !*** ./src/restaurant.jpg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "35e7efd211fef16d8d9d.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ "./src/home.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _restaurant_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./restaurant.jpg */ "./src/restaurant.jpg");
/* harmony import */ var _food_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./food.jpg */ "./src/food.jpg");






const div = document.getElementById('content');

function handleClick(e) {
  const bttn = e.target;

  div.innerHTML = "";

  if(bttn.textContent === "Contact") {
    (0,_contact__WEBPACK_IMPORTED_MODULE_1__.contactLoad)(div); 
  } else {
    (0,_menu__WEBPACK_IMPORTED_MODULE_2__.menuLoad)(div, _food_jpg__WEBPACK_IMPORTED_MODULE_4__);
  }
}

function loadListeners() {
  const menuBttn = document.querySelector('.menu');
  const contactBttn = document.querySelector('.contact');

  menuBttn.addEventListener('click', handleClick);
  contactBttn.addEventListener('click', handleClick);
}

function init() {

  const home = (0,_home__WEBPACK_IMPORTED_MODULE_0__.pageLoad)(div, _restaurant_jpg__WEBPACK_IMPORTED_MODULE_3__);
  document.body.appendChild(home);

  loadListeners();
}

init();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUIsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsT0FBTztBQUN2QjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRW9COzs7Ozs7Ozs7Ozs7Ozs7QUNoQnBCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLElBQUk7QUFDeEI7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLElBQUk7QUFDeEI7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLElBQUk7QUFDeEI7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLElBQUk7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDL0JBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDZmtDO0FBQ007QUFDTjtBQUNJO0FBQ047O0FBRWhDOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxJQUFJLHFEQUFXO0FBQ2YsSUFBSTtBQUNKLElBQUksK0NBQVEsTUFBTSxzQ0FBTztBQUN6QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsZUFBZSwrQ0FBUSxNQUFNLDRDQUFNO0FBQ25DOztBQUVBO0FBQ0E7O0FBRUEsTyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9jb250YWN0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ob21lLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9tZW51LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gY29udGFjdExvYWQoY29udGFpbmVyKSB7XG4gIC8vIGNyZWF0ZXMgYSBkaXYgZWxlbWVudFxuICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxuICAvLyBhZGRzIHRoZSBjb250ZW50XG4gIGRpdi5pbm5lckhUTUwgPSBgXG4gICAgPGhlYWRlcj5IYWJsYW5vczwvaGVhZGVyPlxuICAgIDxtYWluPlxuICAgICAgPGgxPlBhcmEgcmVhbGl6YXIgdHUgcGVkaWRvLCBjb25vY2VyIGVsIGVzdGFkbyBkZSB0dSBkb21pY2lsaW8gbyBoYWNlciBwcmVndW50YXMsIHF1ZWphcyBvIHN1Z2VyZW5jaWFzPC9oMT5cbiAgICAgIDxkaXY+XG4gICAgICA8cD5FbiBCb2dvdGEgYWw8L3A+XG4gICAgICA8cD42MCArIDEgKyA2NTQzMzAwPC9wPlxuICAgICAgPHA+RW4gTWVkZWxsaW4gYWw8L3A+XG4gICAgICA8cD42MCArIDQgKyA2NTQzMzY5PC9wPlxuICAgICAgPHA+RW4gdG9kbyBlbCBwYWlzPC9wPlxuICAgICAgPHA+MzMzIDYyMiAwMDAwPC9wPlxuICAgICAgPHA+VGFtYmnDqW4gcHVlZGVzIGNvbnRhY3Rhcm5vcyBwb3IgcmVkZXMgc29jaWFsZXM8L3A+XG4gICAgICA8cD5cbiAgICAgICAgPHVsPlxuICAgICAgICAgIDxsaT5mYWNlPC9saT5cbiAgICAgICAgICA8bGk+aW5zdGE8L2xpPlxuICAgICAgICAgIDxsaT50d2l0dGVyPC9saT5cbiAgICAgICAgICA8bGk+eW91dHU8L2xpPlxuICAgICAgICAgIDxsaT50aWt0bzwvbGk+XG4gICAgICAgIDwvdWw+XG4gICAgICA8L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxmb290ZXI+XG4gICAgICAgIDxkaXY+TXJzIEJ1cmdlciAmY29weTs8L2Rpdj5cbiAgICAgICAgPGRpdj5NYWRlIHdpdGggJmhlYXJ0czsgYnkgTWlrZTwvZGl2PlxuICAgICAgICA8ZGl2PlRlcm1zIGFuZCBjb250aXRpb25zPC9kaXY+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICA8L21haW4+XG4gIGA7XG5cbiAgLy8gc3R5bGVzIHRvIHRoYXQgZWxlbWVudFxuXG5cbiAgLy8gYXBwZW5kcyBpdCB0byB0aGUgRE9NXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChkaXYpO1xufVxuXG5leHBvcnQgeyBjb250YWN0TG9hZCB9OyIsImZ1bmN0aW9uIHBhZ2VMb2FkKGNvbnRhaW5lciwgaW1nVXJsKSB7XG4gIGNvbnN0IGh0bWwgPSBgXG4gICAgPGgxPlJlc3RhdXJhbnRlIHBhY2hlPC9oMT5cbiAgICA8ZGl2PlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImNvbnRhY3RcIj5Db250YWN0PC9idXR0b24+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwibWVudVwiPk1lbnU8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgICA8aW1nIHNyYz1cIiR7aW1nVXJsfVwiIGhlaWdodD1cIjUwMFwiIGFsdD1cIlwiPlxuICAgIDxwPkxvcmVtIElwc3VtIGlzIHNpbXBseSBkdW1teSB0ZXh0IG9mIHRoZSBwcmludGluZyBhbmQgdHlwZXNldHRpbmcgaW5kdXN0cnkuIExvcmVtIElwc3VtIGhhcyBiZWVuIHRoZSBpbmR1c3RyeSdzIHN0YW5kYXJkIGR1bW15IHRleHQgZXZlciBzaW5jZSB0aGUgMTUwMHMsIHdoZW4gYW4gdW5rbm93biBwcmludGVyIHRvb2sgYSBnYWxsZXkgb2YgdHlwZSBhbmQgc2NyYW1ibGVkIGl0IHRvIG1ha2UgYSB0eXBlIHNwZWNpbWVuIGJvb2suIEl0IGhhcyBzdXJ2aXZlZCBub3Qgb25seSBmaXZlIGNlbnR1cmllcywgYnV0IGFsc28gdGhlIGxlYXAgaW50byBlbGVjdHJvbmljIHR5cGVzZXR0aW5nLCByZW1haW5pbmcgZXNzZW50aWFsbHkgdW5jaGFuZ2VkLiBJdCB3YXMgcG9wdWxhcmlzZWQgaW4gdGhlIDE5NjBzIHdpdGggdGhlIHJlbGVhc2Ugb2YgTGV0cmFzZXQgc2hlZXRzIGNvbnRhaW5pbmcgTG9yZW0gSXBzdW0gcGFzc2FnZXMsIGFuZCBtb3JlIHJlY2VudGx5IHdpdGggZGVza3RvcCBwdWJsaXNoaW5nIHNvZnR3YXJlIGxpa2UgQWxkdXMgUGFnZU1ha2VyIGluY2x1ZGluZyB2ZXJzaW9ucyBvZiBMb3JlbSBJcHN1bTwvcD5cbiAgYDtcblxuICBjb250YWluZXIuaW5uZXJIVE1MID0gaHRtbDtcblxuICByZXR1cm4gY29udGFpbmVyO1xufVxuXG5leHBvcnQgeyBwYWdlTG9hZCB9O1xuIiwiZnVuY3Rpb24gbWVudUxvYWQoY29udGFpbmVyLCB1cmwpIHtcbiAgLy8gY3JlYXRlcyBhIGRpdiBlbGVtZW50XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIC8vIGFkZHMgdGhlIGNvbnRlbnRcbiAgZGl2LmlubmVySFRNTCA9IGBcbiAgICA8aDE+T3VyIGRlbGljaW91cyBtZW51PC9oMT5cbiAgICA8ZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGltZyBzcmM9XCIke3VybH1cIiBhbHQ9XCJkZWxpY291cyBwbGF0ZVwiLz5cbiAgICAgICAgPHA+VHJ5IG91ciBob3VzZSBwbGF0ZSwgeW91IHdpbGwgbm90IHJlZ3JldDwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGltZyBzcmM9XCIke3VybH1cIiBhbHQ9XCJkZWxpY291cyBwbGF0ZVwiLz5cbiAgICAgICAgPHA+VHJ5IG91ciBob3VzZSBwbGF0ZSwgeW91IHdpbGwgbm90IHJlZ3JldDwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGltZyBzcmM9XCIke3VybH1cIiBhbHQ9XCJkZWxpY291cyBwbGF0ZVwiLz5cbiAgICAgICAgPHA+VHJ5IG91ciBob3VzZSBwbGF0ZSwgeW91IHdpbGwgbm90IHJlZ3JldDwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdj5cbiAgICAgICAgPGltZyBzcmM9XCIke3VybH1cIiBhbHQ9XCJkZWxpY291cyBwbGF0ZVwiLz5cbiAgICAgICAgPHA+VHJ5IG91ciBob3VzZSBwbGF0ZSwgeW91IHdpbGwgbm90IHJlZ3JldDwvcD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICBgO1xuXG4gIC8vIHN0eWxlcyB0byB0aGF0IGVsZW1lbnRcblxuICAvLyBhcHBlbmRzIGl0IHRvIHRoZSBET01cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRpdik7XG59XG5cbmV4cG9ydCB7IG1lbnVMb2FkIH07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IHsgcGFnZUxvYWQgfSBmcm9tICcuL2hvbWUnO1xuaW1wb3J0IHsgY29udGFjdExvYWQgfSBmcm9tICcuL2NvbnRhY3QnO1xuaW1wb3J0IHsgbWVudUxvYWQgfSBmcm9tICcuL21lbnUnO1xuaW1wb3J0IFJlc0ltZyBmcm9tICcuL3Jlc3RhdXJhbnQuanBnJztcbmltcG9ydCBGb29kSW1nIGZyb20gJy4vZm9vZC5qcGcnXG5cbmNvbnN0IGRpdiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbmZ1bmN0aW9uIGhhbmRsZUNsaWNrKGUpIHtcbiAgY29uc3QgYnR0biA9IGUudGFyZ2V0O1xuXG4gIGRpdi5pbm5lckhUTUwgPSBcIlwiO1xuXG4gIGlmKGJ0dG4udGV4dENvbnRlbnQgPT09IFwiQ29udGFjdFwiKSB7XG4gICAgY29udGFjdExvYWQoZGl2KTsgXG4gIH0gZWxzZSB7XG4gICAgbWVudUxvYWQoZGl2LCBGb29kSW1nKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBsb2FkTGlzdGVuZXJzKCkge1xuICBjb25zdCBtZW51QnR0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51Jyk7XG4gIGNvbnN0IGNvbnRhY3RCdHRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNvbnRhY3QnKTtcblxuICBtZW51QnR0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUNsaWNrKTtcbiAgY29udGFjdEJ0dG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVDbGljayk7XG59XG5cbmZ1bmN0aW9uIGluaXQoKSB7XG5cbiAgY29uc3QgaG9tZSA9IHBhZ2VMb2FkKGRpdiwgUmVzSW1nKTtcbiAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChob21lKTtcblxuICBsb2FkTGlzdGVuZXJzKCk7XG59XG5cbmluaXQoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=