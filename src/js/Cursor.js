export default class Cursor {
  constructor() {
    this.init();
  }

  init() {
    document.body.style.cursor = 'none';

    const hammer = document.createElement('div');
    hammer.classList.add('hammer-cursor');
    hammer.style.width = '30px'; // Reduced size
    hammer.style.height = '30px';
    document.body.appendChild(hammer);

    document.addEventListener('mousemove', (event) => {
      hammer.style.left = `${event.pageX}px`;
      hammer.style.top = `${event.pageY}px`;
    });
  }
}
  