import Cursor from './Cursor';
import Game from './Game';

new Cursor(); 
const gameContainer = document.getElementById('game');
const game = new Game(gameContainer);
game.start();
