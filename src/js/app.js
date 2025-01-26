import Cursor from './Cursor';
import Game from './Game';

const gameContainer = document.getElementById('game');
const cursor = new Cursor();
const game = new Game(gameContainer);
game.start();