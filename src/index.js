
const gameContainer = document.getElementById('game');


gameContainer.innerHTML = '';


const grid = document.createElement('div');
grid.classList.add('grid');
gameContainer.appendChild(grid);

for (let i = 0; i < 16; i++) {
  const cell = document.createElement('div');
  cell.classList.add('cell');
  grid.appendChild(cell);
}


const goblin = document.createElement('img');
goblin.src = './img/goblin.png';
goblin.classList.add('goblin');
document.querySelector('.cell').appendChild(goblin);


setInterval(() => {
  const cells = document.querySelectorAll('.cell');
  cells.forEach((cell) => (cell.innerHTML = '')); 
  const randomIndex = Math.floor(Math.random() * cells.length);
  cells[randomIndex].appendChild(goblin); 
}, 1000);
