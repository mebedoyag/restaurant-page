function menuLoad(container, url) {
  // creates a div element
  const div = document.createElement('div');

  // adds the content
  div.innerHTML = `
  <main>
  <div class="wrapper">
  <h1>Our delicious menu</h1>
  </div>
    <div>
      <div class="food-img">
        <img src="${url}" alt="delicous plate"/>
        <p>Try our house plate, you will not regret</p>
      </div>
      <div class="food-img">
        <img src="${url}" alt="delicous plate"/>
        <p>Try our house plate, you will not regret</p>
      </div>
      <div class="food-img">
        <img src="${url}" alt="delicous plate"/>
        <p>Try our house plate, you will not regret</p>
      </div>
      <div class="food-img">
        <img src="${url}" alt="delicous plate"/>
        <p>Try our house plate, you will not regret</p>
      </div>
    </div>
  </main>
  `;

  // styles to that element

  // appends it to the DOM
  container.appendChild(div);
}

export { menuLoad };