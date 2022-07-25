import GameBoard from './gameboard';
import Player from './player';
import { addBtnListener, initializeBoard } from './DOM';

function init() {
  const player = Player('You');
  const computer = Player('Computer');

  const playerBoard = GameBoard();
  const computerBoard = GameBoard();

  // playerBoard.placeShip(5, 'horizontal', 1, 1);
  // playerBoard.placeShip(4, 'horizontal', 3, 6);
  // playerBoard.placeShip(3, 'horizontal', 7, 8);
  // playerBoard.placeShip(3, 'vertical', 4, 1);
  // playerBoard.placeShip(2, 'vertical', 6, 4);

  // computerBoard.placeShip(5, 'horizontal', 1, 1);
  // computerBoard.placeShip(4, 'horizontal', 3, 6);
  // computerBoard.placeShip(3, 'horizontal', 7, 8);
  // computerBoard.placeShip(3, 'vertical', 4, 1);
  // computerBoard.placeShip(2, 'vertical', 6, 4);

  computer.swapTurn(player); // start off the game with player turn
  initializeBoard('playerBoard');
  initializeBoard('computerBoard');
  addBtnListener(playerBoard);
}

export default init;
