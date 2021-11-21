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

export { contactLoad };