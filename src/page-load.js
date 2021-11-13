function home(elem, Backg) {
  elem.innerHTML = `
  <button>Home</button>
  <button>Menu</button>
  <button>Contact</button>
  <h1>We are the best host</h1>
  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
  `;

  const myBackg = new Image();
  myBackg.src = Backg;

  elem.insertAdjacentElement('afterbegin', myBackg);

  return elem;
}

export { home };
