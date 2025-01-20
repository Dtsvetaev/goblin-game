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

let previousIndex = null; 

setInterval(() => {
  const cells = document.querySelectorAll('.cell');
  cells.forEach((cell) => (cell.innerHTML = '')); 

  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * cells.length); 
  } while (randomIndex === previousIndex); 

  previousIndex = randomIndex; 
  cells[randomIndex].appendChild(goblin); 
}, 1000);
