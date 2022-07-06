import Ship from './ship';

// first create a board - done

// Gameboards should be able to place ships at specific coordinates by calling the ship factory function.
// ship = shiplength
// GameBoard.placeship parameters would be the ship direction and the starting coord
// replace board index with ships based on the parameters of placeship
// place ship using coords?

// if tile has ship return marker?
// recieve attack
// missed attack
// report if all ships has been sunk, create the 5 ships first

const GameBoard = () => {
  const board = [];
  const createBoard = () => {
    for (let i = 0; i < 10; i++) {
      board[i] = [];
      for (let j = 0; j < 10; j++) {
        board[i].push(0);
      }
    }
  };

  const carrier = Ship(5);
  const placeShip = (length, direction, xCoord, yCoord) => {
    let x = xCoord;
    let y = yCoord;
    for (let i = 0; i < length; i++) {
      board[x][y] = 'ship';
      if (direction === 'horizontal') x += 1;
      if (direction === 'vertical') y += 1;
    }
  };

  createBoard();
  return {
    board,
    placeShip,
  };
};

export default GameBoard;
