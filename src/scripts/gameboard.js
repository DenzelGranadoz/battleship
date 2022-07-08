import Ship from './ship';

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

  const placeShip = (length, direction, coord) => {
    const x = coord[0];
    const y = coord[1];
    if (board[x][y]) return false;
    const ship = Ship(length);
    if (direction === 'horizontal') {
      if (y + ship.length > 10) return false;
      let shipCount = 0;
      for (let i = y; i < y + ship.length; i++) {
        board[x].splice(i, 1, { ship, shipCount });
        shipCount += 1;
      }
    }
    if (direction === 'vertical') {
      if (x + ship.length > 10) return false;
      let shipCount = 0;
      for (let i = x; i < x + ship.length; i++) {
        board[i].splice(y, 1, { ship, shipCount });
        shipCount += 1;
      }
    }
  };

  const recieveAttack = (x, y) => {
    board[x][y].ship.hit(board[x][y].shipCount);
  };

  createBoard();
  return {
    board,
    placeShip,
    recieveAttack,
  };
};

export default GameBoard;
