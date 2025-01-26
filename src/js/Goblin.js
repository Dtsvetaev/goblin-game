export default class Goblin {
  constructor(container, onHit, onMiss) {
    this.container = container;
    this.onHit = onHit;
    this.onMiss = onMiss; 
    this.cells = Array.from(container.querySelectorAll('.cell'));
    this.currentIndex = null;
    this.isClicked = false;
  }

  start() {
    this.container.addEventListener('click', (event) => {
      if (event.target.classList.contains('goblin')) {
        this.isClicked = true;
        this.onHit();
        this.clearGoblin();
      }
    });
  }

  move() {
    if (!this.isClicked && this.onMiss) {
      this.onMiss(); 
    }
    this.isClicked = false;
    this.clearGoblin();

    let newIndex;
    do {
      newIndex = Math.floor(Math.random() * this.cells.length);
    } while (newIndex === this.currentIndex);

    this.currentIndex = newIndex;

    const goblinImg = document.createElement('img');
    goblinImg.src = './img/goblin.png';
    goblinImg.classList.add('goblin');
    this.cells[newIndex].appendChild(goblinImg);
  }

  clearGoblin() {
    this.cells.forEach((cell) => (cell.innerHTML = ''));
  }

  hide() {
    this.clearGoblin();
  }
}
