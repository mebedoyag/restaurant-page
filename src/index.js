import { home } from './page-load';
import Backgroun from './restaurant.jpg';

function component() {
  const container = document.getElementById('content');

  return home(container, Backgroun);
}

document.body.appendChild(component());

