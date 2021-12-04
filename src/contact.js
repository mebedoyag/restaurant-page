function contactLoad(container) {
  // creates a div element
  const div = document.createElement('div');

  // adds the content
  div.innerHTML = `
    <main>
    <div class="wrapper">
      <h1>Para realizar tu pedido, conocer el estado de tu domicilio o hacer preguntas, quejas o sugerencias</h1>
    </div>
    <div class="phones">
    <div class="p-wrapper">
    <p>En Bogota al</p>
    <p>60 + 1 + 6543300</p>
    </div>
    <div class="p-wrapper">
    <p>En Medellin al</p>
    <p>60 + 4 + 6543369</p>
    </div>
    <div class="p-wrapper">
    <p>En todo el pais</p>
    <p>333 622 0000</p>
    </div>
      <p>También puedes contactarnos por redes sociales</p>
      
    </div>
      <footer>
        <div><a href="#">Mrs Burger &copy;</a></div>
        <div><a href="#">Made with &hearts; by Mike</a></div>
        <div><a href="#">Terms and contitions</a></div>
      </footer>
    </main>
  `;

  // styles to that element
  div.classList.add('content-inner');

  // appends it to the DOM
  container.appendChild(div);
}

export { contactLoad };