function pageLoad(container, imgUrl) {
  const div = document.createElement('div');

  div.innerHTML = `
    <div class="wrapper">
      <h1>Restaurante pache</h1>
      <div>
        <button class="contact">Contact</button>
        <button class="menu">Menu</button>
      </div>
    </div>
    <div class="main-img">
    <figure>
      <img src="${imgUrl}" alt="">
    </figure>
    </div>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
  `;

  container.appendChild(div);
  div.classList.add('content-inner');

  return container;
}

export { pageLoad };
