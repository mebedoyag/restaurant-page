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
/* harmony import */ var _restaurant_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./restaurant.jpg */ "./src/restaurant.jpg");




const div = document.getElementById('content');

function handleClick(e) {
  const bttn = e.target;

  // wipes out the current content
  div.innerHTML = "";

  // runs the tab module to populate it again 
  if(bttn.textContent === "Contact") (0,_contact__WEBPACK_IMPORTED_MODULE_1__.contactLoad)(div);
  
  // makeMenuPage();
  
}

function loadListeners() {
  const menuBttn = document.querySelector('.menu');
  const contactBttn = document.querySelector('.contact');

  menuBttn.addEventListener('click', handleClick);
  contactBttn.addEventListener('click', handleClick);
}

function init() {

  const home = (0,_home__WEBPACK_IMPORTED_MODULE_0__.pageLoad)(div, _restaurant_jpg__WEBPACK_IMPORTED_MODULE_2__);
  document.body.appendChild(home);

  loadListeners();
}

init();

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




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUIsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsT0FBTztBQUN2QjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRW9COzs7Ozs7Ozs7Ozs7Ozs7OztVQ2hCcEI7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDZmtDO0FBQ007QUFDRjs7QUFFdEM7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EscUNBQXFDLHFEQUFXO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsZUFBZSwrQ0FBUSxNQUFNLDRDQUFNO0FBQ25DOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2hvbWUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBjb250YWN0TG9hZChjb250YWluZXIpIHtcbiAgLy8gY3JlYXRlcyBhIGRpdiBlbGVtZW50XG4gIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gIC8vIGFkZHMgdGhlIGNvbnRlbnRcbiAgZGl2LmlubmVySFRNTCA9IGBcbiAgICA8aGVhZGVyPkhhYmxhbm9zPC9oZWFkZXI+XG4gICAgPG1haW4+XG4gICAgICA8aDE+UGFyYSByZWFsaXphciB0dSBwZWRpZG8sIGNvbm9jZXIgZWwgZXN0YWRvIGRlIHR1IGRvbWljaWxpbyBvIGhhY2VyIHByZWd1bnRhcywgcXVlamFzIG8gc3VnZXJlbmNpYXM8L2gxPlxuICAgICAgPGRpdj5cbiAgICAgIDxwPkVuIEJvZ290YSBhbDwvcD5cbiAgICAgIDxwPjYwICsgMSArIDY1NDMzMDA8L3A+XG4gICAgICA8cD5FbiBNZWRlbGxpbiBhbDwvcD5cbiAgICAgIDxwPjYwICsgNCArIDY1NDMzNjk8L3A+XG4gICAgICA8cD5FbiB0b2RvIGVsIHBhaXM8L3A+XG4gICAgICA8cD4zMzMgNjIyIDAwMDA8L3A+XG4gICAgICA8cD5UYW1iacOpbiBwdWVkZXMgY29udGFjdGFybm9zIHBvciByZWRlcyBzb2NpYWxlczwvcD5cbiAgICAgIDxwPlxuICAgICAgICA8dWw+XG4gICAgICAgICAgPGxpPmZhY2U8L2xpPlxuICAgICAgICAgIDxsaT5pbnN0YTwvbGk+XG4gICAgICAgICAgPGxpPnR3aXR0ZXI8L2xpPlxuICAgICAgICAgIDxsaT55b3V0dTwvbGk+XG4gICAgICAgICAgPGxpPnRpa3RvPC9saT5cbiAgICAgICAgPC91bD5cbiAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGZvb3Rlcj5cbiAgICAgICAgPGRpdj5NcnMgQnVyZ2VyICZjb3B5OzwvZGl2PlxuICAgICAgICA8ZGl2Pk1hZGUgd2l0aCAmaGVhcnRzOyBieSBNaWtlPC9kaXY+XG4gICAgICAgIDxkaXY+VGVybXMgYW5kIGNvbnRpdGlvbnM8L2Rpdj5cbiAgICAgIDwvZm9vdGVyPlxuICAgIDwvbWFpbj5cbiAgYDtcblxuICAvLyBzdHlsZXMgdG8gdGhhdCBlbGVtZW50XG5cblxuICAvLyBhcHBlbmRzIGl0IHRvIHRoZSBET01cbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRpdik7XG59XG5cbmV4cG9ydCB7IGNvbnRhY3RMb2FkIH07IiwiZnVuY3Rpb24gcGFnZUxvYWQoY29udGFpbmVyLCBpbWdVcmwpIHtcbiAgY29uc3QgaHRtbCA9IGBcbiAgICA8aDE+UmVzdGF1cmFudGUgcGFjaGU8L2gxPlxuICAgIDxkaXY+XG4gICAgICA8YnV0dG9uIGNsYXNzPVwiY29udGFjdFwiPkNvbnRhY3Q8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJtZW51XCI+TWVudTwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICAgIDxpbWcgc3JjPVwiJHtpbWdVcmx9XCIgaGVpZ2h0PVwiNTAwXCIgYWx0PVwiXCI+XG4gICAgPHA+TG9yZW0gSXBzdW0gaXMgc2ltcGx5IGR1bW15IHRleHQgb2YgdGhlIHByaW50aW5nIGFuZCB0eXBlc2V0dGluZyBpbmR1c3RyeS4gTG9yZW0gSXBzdW0gaGFzIGJlZW4gdGhlIGluZHVzdHJ5J3Mgc3RhbmRhcmQgZHVtbXkgdGV4dCBldmVyIHNpbmNlIHRoZSAxNTAwcywgd2hlbiBhbiB1bmtub3duIHByaW50ZXIgdG9vayBhIGdhbGxleSBvZiB0eXBlIGFuZCBzY3JhbWJsZWQgaXQgdG8gbWFrZSBhIHR5cGUgc3BlY2ltZW4gYm9vay4gSXQgaGFzIHN1cnZpdmVkIG5vdCBvbmx5IGZpdmUgY2VudHVyaWVzLCBidXQgYWxzbyB0aGUgbGVhcCBpbnRvIGVsZWN0cm9uaWMgdHlwZXNldHRpbmcsIHJlbWFpbmluZyBlc3NlbnRpYWxseSB1bmNoYW5nZWQuIEl0IHdhcyBwb3B1bGFyaXNlZCBpbiB0aGUgMTk2MHMgd2l0aCB0aGUgcmVsZWFzZSBvZiBMZXRyYXNldCBzaGVldHMgY29udGFpbmluZyBMb3JlbSBJcHN1bSBwYXNzYWdlcywgYW5kIG1vcmUgcmVjZW50bHkgd2l0aCBkZXNrdG9wIHB1Ymxpc2hpbmcgc29mdHdhcmUgbGlrZSBBbGR1cyBQYWdlTWFrZXIgaW5jbHVkaW5nIHZlcnNpb25zIG9mIExvcmVtIElwc3VtPC9wPlxuICBgO1xuXG4gIGNvbnRhaW5lci5pbm5lckhUTUwgPSBodG1sO1xuXG4gIHJldHVybiBjb250YWluZXI7XG59XG5cbmV4cG9ydCB7IHBhZ2VMb2FkIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgeyBwYWdlTG9hZCB9IGZyb20gJy4vaG9tZSc7XG5pbXBvcnQgeyBjb250YWN0TG9hZCB9IGZyb20gJy4vY29udGFjdCc7XG5pbXBvcnQgUmVzSW1nIGZyb20gJy4vcmVzdGF1cmFudC5qcGcnO1xuXG5jb25zdCBkaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpO1xuXG5mdW5jdGlvbiBoYW5kbGVDbGljayhlKSB7XG4gIGNvbnN0IGJ0dG4gPSBlLnRhcmdldDtcblxuICAvLyB3aXBlcyBvdXQgdGhlIGN1cnJlbnQgY29udGVudFxuICBkaXYuaW5uZXJIVE1MID0gXCJcIjtcblxuICAvLyBydW5zIHRoZSB0YWIgbW9kdWxlIHRvIHBvcHVsYXRlIGl0IGFnYWluIFxuICBpZihidHRuLnRleHRDb250ZW50ID09PSBcIkNvbnRhY3RcIikgY29udGFjdExvYWQoZGl2KTtcbiAgXG4gIC8vIG1ha2VNZW51UGFnZSgpO1xuICBcbn1cblxuZnVuY3Rpb24gbG9hZExpc3RlbmVycygpIHtcbiAgY29uc3QgbWVudUJ0dG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudScpO1xuICBjb25zdCBjb250YWN0QnR0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWN0Jyk7XG5cbiAgbWVudUJ0dG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVDbGljayk7XG4gIGNvbnRhY3RCdHRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQ2xpY2spO1xufVxuXG5mdW5jdGlvbiBpbml0KCkge1xuXG4gIGNvbnN0IGhvbWUgPSBwYWdlTG9hZChkaXYsIFJlc0ltZyk7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaG9tZSk7XG5cbiAgbG9hZExpc3RlbmVycygpO1xufVxuXG5pbml0KCk7XG5cbi8vIGZ1bmN0aW9uIGhhbmRsZUNsaWNrKGNvbnQpIHtcbi8vICAgLy8gd2lwZXMgb3V0IHRoZSBjdXJyZW50IGNvbnRlbnRcbi8vICAgY29udC5pbm5lckhUTUwgPSBcIlwiO1xuICBcbi8vICAgLy8gcnVucyB0aGUgdGFiIG1vZHVsZSB0byBwb3B1bGF0ZSBpdCBhZ2FpbiBcbi8vICAgbWFrZUNvbnRhY3RQYWdlKGNvbnQpO1xuLy8gfVxuXG4vLyBmdW5jdGlvbiBzd2l0Y2hUYWIoKSB7XG4vLyAgIC8vIFNlbGVjdCB0aGUgdGFiIGJ1dHRvbnNcbi8vICAgY29uc3QgbWVudUJ0dG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudScpO1xuLy8gICBjb25zdCBjb250YWN0QnR0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jb250YWN0Jyk7XG4vLyAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50Jyk7XG5cbi8vICAgLy8gYWRkIGNsaWNrIGxpc3RlbmVycyBmb3IgdGhhdCBidXR0b25zXG4vLyAgIG1lbnVCdHRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gaGFuZGxlQ2xpY2soY29udGFpbmVyKSk7XG4vLyAgIGNvbnRhY3RCdHRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gaGFuZGxlQ2xpY2soY29udGFpbmVyKSk7XG4vLyB9XG5cblxuXG4vLyBzd2l0Y2hUYWIoKTtcblxuXG5cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==