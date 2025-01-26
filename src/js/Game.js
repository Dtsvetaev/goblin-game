import Goblin from './Goblin';

export default class Game {
  constructor(container) {
    this.container = container;
    this.gridSize = 16; // 4x4
    this.misses = 0;
    this.maxMisses = 5;
    this.score = 0;
    this.cells = [];
    this.goblin = null;
    this.gameInterval = null;
  }

  createGrid() {
    const grid = document.createElement('div');
    grid.classList.add('grid');
    this.container.appendChild(grid);

    for (let i = 0; i < this.gridSize; i++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      grid.appendChild(cell);
      this.cells.push(cell);
    }
  }

  start() {
    this.createGrid();

    this.goblin = new Goblin(
      this.container,
      () => {
        this.score += 1;
        console.log(`Score: ${this.score}`);
      },
      () => {
        this.misses += 1;
        console.log(`Misses: ${this.misses}`);
        if (this.misses >= this.maxMisses) {
          this.endGame();
        }
      }
    );

    this.gameInterval = setInterval(() => {
      this.goblin.move();
    }, 1000);

    this.goblin.start();
  }

  endGame() {
    clearInterval(this.gameInterval);
    alert(`Game Over! Your score: ${this.score}`);
    this.resetGame();
  }

  resetGame() {
    this.misses = 0;
    this.score = 0;
    this.goblin.hide();
  }
}
